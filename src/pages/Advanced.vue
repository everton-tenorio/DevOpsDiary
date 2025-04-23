<template>
  <div>
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-mono font-bold text-terminal-green mb-8">Advanced DevOps Projects</h1>
      
      <p class="mb-8">
        Challenge yourself with these advanced DevOps projects. Experience with Docker, Kubernetes, and cloud platforms recommended.
      </p>
      
      <div v-if="loading" class="text-center py-12">
        <div class="text-terminal-green font-mono">Loading projects...</div>
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.slug" 
          :project="project" 
          level="advanced"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

const loading = ref(true);
const projects = ref([]);

onMounted(async () => {
  // In a real implementation, this would fetch and parse actual Markdown files
  // For this demonstration, we'll use mock data
  setTimeout(() => {
    projects.value = [
      {
        title: 'Kubernetes Canary Deployment',
        slug: 'kubernetes-canary',
        description: 'Implement a canary deployment strategy using Kubernetes and Istio.',
        tags: ['kubernetes', 'istio', 'canary', 'advanced']
      },
      {
        title: 'GitOps Workflow',
        slug: 'gitops-workflow',
        description: 'Set up a complete GitOps workflow with ArgoCD and Kubernetes.',
        tags: ['gitops', 'argocd', 'kubernetes', 'advanced']
      },
      {
        title: 'Serverless Microservices',
        slug: 'serverless-microservices',
        description: 'Build a serverless application with AWS Lambda and API Gateway.',
        tags: ['serverless', 'aws', 'lambda', 'advanced']
      }
    ];
    loading.value = false;
  }, 500);
});
</script>
