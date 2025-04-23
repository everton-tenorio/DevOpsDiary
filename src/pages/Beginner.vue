<template>
  <div>
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-mono font-bold text-terminal-green mb-8">Beginner DevOps Projects</h1>
      
      <p class="mb-8">
        Start your DevOps journey with these beginner-friendly projects. No previous DevOps experience required.
      </p>
      
      <div v-if="loading" class="text-center py-12">
        <div class="text-terminal-green font-mono">Loading projects...</div>
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.slug" 
          :project="project" 
          level="beginner"
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
        title: 'Docker Basics',
        slug: 'docker-basics',
        description: 'Learn to build and run your first Docker container with a simple Node.js application.',
        tags: ['docker', 'beginner', 'containerization']
      },
      {
        title: 'Git Workflow',
        slug: 'git-workflow',
        description: 'Master the fundamental Git commands and workflows used in DevOps practices.',
        tags: ['git', 'beginner', 'version-control']
      },
      {
        title: 'Bash Scripting',
        slug: 'bash-scripting',
        description: 'Automate common tasks with Bash scripts to improve your development workflow.',
        tags: ['bash', 'beginner', 'automation']
      }
    ];
    loading.value = false;
  }, 500);
});
</script>
