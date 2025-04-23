---
title: Docker Basics
description: Learn to build and run your first Docker container with a simple Node.js application.
tags: [docker, beginner, containerization]
---

## Overview

This project teaches you how to create a simple Dockerfile and run a containerized Node.js application. You'll learn the basics of Docker container isolation, image building, and running containers.

## Prerequisites

- Docker installed on your machine
- Basic command-line knowledge
- Basic JavaScript/Node.js knowledge

## Steps

### 1. Create a Simple Node.js Application

Create a new directory for your project and initialize a Node.js application:

```bash
mkdir docker-basics
cd docker-basics
npm init -y
npm install express
```

### 2. Create an Express Server

Create a simple Express server in a file named `app.js`:

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Docker!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 3. Create a Dockerfile

Create a Dockerfile in the root of your project:

```dockerfile
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
```

Let's understand what each line does:

- `FROM node:14-alpine`: Uses the lightweight Alpine Linux Node.js image
- `WORKDIR /app`: Sets the working directory inside the container
- `COPY package*.json ./`: Copies package files before running npm install for better caching
- `RUN npm install`: Installs dependencies
- `COPY . .`: Copies all remaining files into the container
- `EXPOSE 3000`: Documents that the container listens on port 3000
- `CMD ["node", "app.js"]`: Specifies the command to run when the container starts

### 4. Build and Run the Docker Container

Build your Docker image and run it as a container:

```bash
docker build -t my-node-app .
docker run -p 3000:3000 my-node-app
```

The `-p 3000:3000` flag maps port 3000 inside the container to port 3000 on your host.

### 5. Test Your Application

Open your browser and navigate to `http://localhost:3000`. You should see "Hello from Docker!" displayed.

### 6. Basic Docker Commands

Here are some useful Docker commands to manage your container:

```bash
# List running containers
docker ps

# Stop the container (replace CONTAINER_ID with your container ID)
docker stop CONTAINER_ID

# Remove the container
docker rm CONTAINER_ID

# List Docker images
docker images

# Remove an image
docker rmi my-node-app
```

## Resources

- [Docker Documentation](https://docs.docker.com)
- [Node.js Docker Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Docker for JavaScript Developers](https://www.freecodecamp.org/news/docker-simplified-96639a35ff36/)

## Challenge

Try to extend this project by:

1. Adding a volume to persist data outside the container
2. Creating a Docker Compose file to run multiple containers together
3. Implementing a multi-stage build to reduce the final image size

## Submission

Share your solution on GitHub and post on X with the hashtag #DevOpsDiary to showcase your work to the community!
