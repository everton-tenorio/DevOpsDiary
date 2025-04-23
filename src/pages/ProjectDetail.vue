<template>
  <div class="max-w-3xl mx-auto">
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-12">
      <div class="text-terminal-green font-mono">Loading project...</div>
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="bg-red-900 text-white p-4 rounded">
      {{ error }}
    </div>
    
    <!-- Project Content -->
    <div v-else>
      <!-- Project Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-mono font-bold text-terminal-green mb-4">{{ project.title }}</h1>
        
        <div class="mb-4">
          <span 
            v-for="tag in project.tags" 
            :key="tag" 
            class="terminal-tag"
          >
            {{ tag }}
          </span>
        </div>
        
        <p class="text-lg mb-4">{{ project.description }}</p>
        
        <div class="flex space-x-4">
          <router-link :to="`/${$route.params.level}`" class="text-terminal-green hover:underline">
            ← Back to {{ capitalizeFirstLetter($route.params.level) }}
          </router-link>
        </div>
      </div>
      
      <!-- Project Content -->
      <div class="bg-gray-900 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">Overview</h2>
        <p class="mb-6">{{ project.overview }}</p>
        
        <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">Prerequisites</h2>
        <ul class="list-disc pl-6 mb-6">
          <li v-for="(prereq, index) in project.prerequisites" :key="index" class="mb-2">
            {{ prereq }}
          </li>
        </ul>
        
        <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">Steps</h2>
        <div class="mb-6">
          <div 
            v-for="(step, index) in project.steps" 
            :key="index"
            class="mb-6"
          >
            <h3 class="text-lg font-mono text-terminal-green mb-2">
              Step {{ index + 1 }}: {{ step.title }}
            </h3>
            <p class="mb-3">{{ step.description }}</p>
            
            <!-- Code Block -->
            <div v-if="step.code" class="bg-gray-800 rounded p-4 mb-3 font-mono text-white overflow-x-auto">
              <pre><code>{{ step.code }}</code></pre>
            </div>
          </div>
        </div>
        
        <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">Resources</h2>
        <ul class="list-disc pl-6 mb-6">
          <li v-for="(resource, index) in project.resources" :key="index" class="mb-2">
            <a :href="resource.url" target="_blank" class="text-terminal-green hover:underline">
              {{ resource.title }}
            </a>
            <span v-if="resource.isPaid" class="text-xs ml-2">(Paid Resource)</span>
          </li>
        </ul>
      </div>
      
      <!-- Submission -->
      <div class="bg-gray-900 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">Submit Your Solution</h2>
        <p class="mb-4">
          Completed this project? Share your solution with the community!
        </p>
        <ol class="list-decimal pl-6 mb-6">
          <li class="mb-2">Push your code to a GitHub repository</li>
          <li class="mb-2">Open an issue on our GitHub repo with your solution link</li>
          <li class="mb-2">Share on X with the hashtag #DevOpsDiary</li>
        </ol>
        <div class="flex space-x-4">
          <a 
            href="https://github.com/yourusername/DevOpsDiary/issues/new" 
            target="_blank"
            class="terminal-button"
          >
            Submit Solution
          </a>
          <a 
            href="https://twitter.com/intent/tweet?hashtags=DevOpsDiary" 
            target="_blank"
            class="terminal-button"
          >
            Share on X
          </a>
        </div>
      </div>
      
      <!-- Community Solutions -->
      <div class="bg-gray-900 p-6 rounded-lg">
        <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">Community Solutions</h2>
        <p v-if="!project.communitySolutions || project.communitySolutions.length === 0" class="italic text-gray-500">
          No solutions submitted yet. Be the first!
        </p>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="solution in project.communitySolutions" 
            :key="solution.id"
            class="terminal-card"
          >
            <div class="font-mono text-terminal-green mb-2">@{{ solution.username }}</div>
            <p class="mb-2">{{ solution.description }}</p>
            <div class="flex space-x-3">
              <a :href="solution.githubUrl" target="_blank" class="text-terminal-green hover:underline">GitHub</a>
              <a v-if="solution.tweetUrl" :href="solution.tweetUrl" target="_blank" class="text-terminal-green hover:underline">X Post</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const loading = ref(true);
const error = ref(null);
const project = ref(null);

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

onMounted(async () => {
  try {
    // In a production implementation, this would fetch Markdown files
    // For demonstration purposes, we'll use mock data
    setTimeout(() => {
      // Mock project data based on route parameters
      const { level, slug } = route.params;
      
      if (level === 'beginner' && slug === 'docker-basics') {
        project.value = {
          title: 'Docker Basics',
          description: 'Learn to build and run your first Docker container with a simple Node.js application.',
          tags: ['docker', 'beginner', 'containerization'],
          overview: 'This project teaches you how to create a simple Dockerfile and run a containerized Node.js application.',
          prerequisites: [
            'Docker installed on your machine',
            'Basic command-line knowledge',
            'Basic JavaScript/Node.js knowledge'
          ],
          steps: [
            {
              title: 'Create a Simple Node.js Application',
              description: 'Create a new directory for your project and initialize a Node.js application.',
              code: '$ mkdir docker-basics\n$ cd docker-basics\n$ npm init -y\n$ npm install express'
            },
            {
              title: 'Create an Express Server',
              description: 'Create a simple Express server in a file named app.js.',
              code: 'const express = require(\'express\');\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\napp.get(\'/\', (req, res) => {\n  res.send(\'Hello from Docker!\');\n});\n\napp.listen(PORT, () => {\n  console.log(`Server running on port ${PORT}`);\n});'
            },
            {
              title: 'Create a Dockerfile',
              description: 'Create a Dockerfile in the root of your project.',
              code: 'FROM node:14-alpine\n\nWORKDIR /app\n\nCOPY package*.json ./\n\nRUN npm install\n\nCOPY . .\n\nEXPOSE 3000\n\nCMD ["node", "app.js"]'
            },
            {
              title: 'Build and Run the Docker Container',
              description: 'Build your Docker image and run it as a container.',
              code: '$ docker build -t my-node-app .\n$ docker run -p 3000:3000 my-node-app'
            }
          ],
          resources: [
            {
              title: 'Docker Documentation',
              url: 'https://docs.docker.com',
              isPaid: false
            },
            {
              title: 'Docker Deep Dive Course',
              url: 'https://example.com/docker-course',
              isPaid: true
            }
          ],
          communitySolutions: [
            {
              id: 1,
              username: 'devops_jane',
              description: 'Added a Redis container and Docker Compose setup.',
              githubUrl: 'https://github.com/devops_jane/docker-basics',
              tweetUrl: 'https://x.com/devops_jane/status/123456789'
            }
          ]
        };
      } else if (level === 'intermediate' && slug === 'ci-cd-pipeline') {
        project.value = {
          title: 'CI/CD Pipeline',
          description: 'Build a complete CI/CD pipeline using GitHub Actions for a Node.js application.',
          tags: ['ci-cd', 'github-actions', 'intermediate'],
          overview: 'Learn how to set up a continuous integration and deployment pipeline for a Node.js application using GitHub Actions.',
          prerequisites: [
            'GitHub account',
            'Basic knowledge of Git',
            'Basic knowledge of JavaScript/Node.js',
            'Docker basics'
          ],
          steps: [
            {
              title: 'Create a Node.js Application',
              description: 'Create a simple Express application with tests.',
              code: '$ mkdir ci-cd-pipeline\n$ cd ci-cd-pipeline\n$ npm init -y\n$ npm install express jest supertest'
            },
            {
              title: 'Set Up GitHub Repository',
              description: 'Initialize a Git repository and push it to GitHub.',
              code: '$ git init\n$ git add .\n$ git commit -m "Initial commit"\n$ git remote add origin https://github.com/yourusername/ci-cd-pipeline.git\n$ git push -u origin main'
            },
            {
              title: 'Create GitHub Actions Workflow',
              description: 'Create a GitHub Actions workflow file in the .github/workflows directory.',
              code: 'name: CI/CD Pipeline\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - name: Use Node.js\n      uses: actions/setup-node@v2\n      with:\n        node-version: \'14\'\n    - run: npm ci\n    - run: npm test'
            }
          ],
          resources: [
            {
              title: 'GitHub Actions Documentation',
              url: 'https://docs.github.com/en/actions',
              isPaid: false
            },
            {
              title: 'CI/CD Best Practices',
              url: 'https://example.com/cicd-practices',
              isPaid: false
            }
          ],
          communitySolutions: []
        };
      } else if (level === 'advanced' && slug === 'kubernetes-canary') {
        project.value = {
          title: 'Kubernetes Canary Deployment',
          description: 'Implement a canary deployment strategy using Kubernetes and Istio.',
          tags: ['kubernetes', 'istio', 'canary', 'advanced'],
          overview: 'Learn how to implement a canary deployment strategy for a microservice using Kubernetes and Istio service mesh.',
          prerequisites: [
            'Kubernetes cluster (minikube or kind for local development)',
            'kubectl CLI installed',
            'Istio installed on your cluster',
            'Docker basics'
          ],
          steps: [
            {
              title: 'Set up a Kubernetes Cluster',
              description: 'Create a local Kubernetes cluster using kind or minikube.',
              code: '$ kind create cluster --name canary-cluster\n$ kubectl cluster-info'
            },
            {
              title: 'Install Istio',
              description: 'Install Istio service mesh on your Kubernetes cluster.',
              code: '$ istioctl install --set profile=demo -y\n$ kubectl label namespace default istio-injection=enabled'
            },
            {
              title: 'Deploy the Application',
              description: 'Deploy the initial version of your application.',
              code: 'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app-v1\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: my-app\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: my-app\n        version: v1\n    spec:\n      containers:\n      - name: my-app\n        image: my-app:v1\n        ports:\n        - containerPort: 8080'
            }
          ],
          resources: [
            {
              title: 'Istio Documentation',
              url: 'https://istio.io/latest/docs/',
              isPaid: false
            },
            {
              title: 'Kubernetes Patterns',
              url: 'https://example.com/kubernetes-patterns',
              isPaid: true
            }
          ],
          communitySolutions: []
        };
      } else {
        error.value = 'Project not found. Please check the URL and try again.';
      }
      
      loading.value = false;
    }, 800);
  } catch (err) {
    error.value = 'Error loading project. Please try again later.';
    loading.value = false;
    console.error(err);
  }
});
</script>
