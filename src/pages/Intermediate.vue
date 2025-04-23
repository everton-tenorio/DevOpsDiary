<template>
  <div>
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-mono font-bold text-terminal-green mb-8">Intermediate DevOps Projects</h1>
      
      <p class="mb-8">
        Take your skills to the next level with these intermediate projects. Basic knowledge of Docker, Git, and command-line tools recommended.
      </p>
      
      <div v-if="loading" class="text-center py-12">
        <div class="text-terminal-green font-mono">Loading projects...</div>
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.slug" 
          :project="project" 
          level="intermediate"
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
        title: 'CI/CD Pipeline',
        slug: 'ci-cd-pipeline',
        description: 'Build a complete CI/CD pipeline using GitHub Actions for a Node.js application.',
        tags: ['ci-cd', 'github-actions', 'intermediate']
      },
      {
        title: 'Infrastructure as Code',
        slug: 'infrastructure-as-code',
        description: 'Deploy cloud infrastructure using Terraform and AWS free tier resources.',
        tags: ['terraform', 'aws', 'iac', 'intermediate']
      },
      {
        title: 'Monitoring Stack',
        slug: 'monitoring-stack',
        description: 'Set up a complete monitoring solution with Prometheus and Grafana.',
        tags: ['monitoring', 'prometheus', 'grafana', 'intermediate']
      }
    ];
    loading.value = false;
  }, 500);
});
</script>
