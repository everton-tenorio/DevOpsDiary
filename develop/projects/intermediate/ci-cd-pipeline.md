---
title: CI/CD Pipeline with GitHub Actions
description: Build a complete CI/CD pipeline using GitHub Actions for a Node.js application.
tags: [ci-cd, github-actions, intermediate, automation]
---

## Overview

In this project, you will build a continuous integration and continuous deployment (CI/CD) pipeline using GitHub Actions. You'll create a simple Node.js application, write tests, and set up automatic testing, building, and deployment to GitHub Pages.

## Prerequisites

- GitHub account
- Basic knowledge of Git
- Basic knowledge of JavaScript/Node.js
- Experience with Docker (from the beginner projects)


## Steps

### 1. Create a Simple Node.js Application
First, let's create a simple Express application with Jest for testing:

```bash
mkdir ci-cd-pipeline
cd ci-cd-pipeline
npm init -y
npm install express
npm install --save-dev jest supertest
```

Create an `index.js` file for your Express application:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello CI/CD!');
});

app.get('/health', (req, res) => {
  res.status(200).send({ status: 'UP' });
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${server.address().port}`);
});

module.exports = app;
```

Now create a test file `index.test.js`:

```javascript
const request = require('supertest');
const app = require('./index');

describe('API Tests', () => {
  it('should return 200 on root endpoint', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello CI/CD!');
  });

  it('should return health status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'UP');
  });
});
```

Update the `package.json` scripts:

```json
"scripts": {
  "start": "node index.js",
  "test": "jest",
  "test:ci": "jest --ci --coverage"
}
```


### 2. Set Up GitHub Repository

Initialize a Git repository and push it to GitHub:

```bash
git init
echo "node_modules/" > .gitignore
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/ci-cd-pipeline.git
git push -u origin main
```

### 3. Create a GitHub Actions Workflow

Create a `.github/workflows` directory and add a workflow file named `ci-cd.yml`:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm run test:ci
      
    - name: Upload test coverage
      uses: actions/upload-artifact@v2
      with:
        name: coverage
        path: coverage/
  
  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Create deployment package
      run: |
        mkdir -p dist
        cp index.js package*.json dist/
        cd dist && npm ci --production
        
    - name: Upload build artifact
      uses: actions/upload-artifact@v2
      with:
        name: app
        path: dist/
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    
    steps:
    - name: Download built app
      uses: actions/download-artifact@v2
      with:
        name: app
        path: app
        
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./app
```

### 4. Create a Dockerfile for Production

Create a `Dockerfile` to containerize your application:

```dockerfile
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --production

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
```

### 5. Add Docker Build to the CI/CD Pipeline

Update the workflow file to include Docker build steps:

```yaml
  docker:
    needs: test
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v1
      
    - name: Login to GitHub Container Registry
      uses: docker/login-action@v1
      with:
        registry: ghcr.io
        username: ${{ github.repository_owner }}
        password: ${{ secrets.GITHUB_TOKEN }}
        
    - name: Build and push
      uses: docker/build-push-action@v2
      with:
        context: .
        push: true
        tags: ghcr.io/${{ github.repository_owner }}/ci-cd-app:latest
```

### 6. Enable GitHub Pages

Go to your repository settings on GitHub:
1. Navigate to Settings > Pages
2. Select the `gh-pages` branch as the source
3. Save the settings

Your application will be available at `https://yourusername.github.io/ci-cd-pipeline/`.

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Jest Testing Framework](https://jestjs.io/)
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [CI/CD Best Practices](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)

## Challenge

Try extending this project by:

1. Adding code quality checks with ESLint
2. Implementing semantic versioning for your Docker images
3. Setting up a staging environment deployment for pull requests
4. Adding notifications when the pipeline succeeds/fails (e.g., Slack)

## Submission

Share your CI/CD pipeline on GitHub and post on X with the hashtag #DevOpsDiary. Include screenshots of your successful pipeline runs!
