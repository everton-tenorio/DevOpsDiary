<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-mono font-bold text-terminal-green mb-8">Community Projects</h1>
    
    <div class="bg-gray-900 text-[#E6EDF3] p-6 rounded-lg mb-8">
      <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">
        Join the #DevOpsDiary Community
      </h2>
      <p class="mb-6">
        Share your solutions and see what others are building. Submit your projects by creating a GitHub issue
        or posting on X with the hashtag #DevOpsDiary.
      </p>
      <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <a 
          href="https://github.com/yourusername/DevOpsDiary/issues/new" 
          target="_blank"
          class="terminal-button"
        >
          Submit via GitHub
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
    
    <div v-if="loading" class="text-center py-12">
      <div class="text-terminal-green font-mono">Loading community projects...</div>
    </div>
    
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="submission in communitySubmissions" 
          :key="submission.id"
          class="terminal-card"
        >
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-lg font-mono font-bold text-terminal-green">{{ submission.projectTitle }}</h3>
            <span 
              class="terminal-tag"
              :class="{
                'bg-green-900': submission.level === 'beginner',
                'bg-blue-900': submission.level === 'intermediate',
                'bg-red-900': submission.level === 'advanced'
              }"
            >
              {{ submission.level }}
            </span>
          </div>
          
          <div class="text-sm text-gray-400 mb-3">
            Submitted by <span class="text-terminal-white">@{{ submission.username }}</span>
          </div>
          
          <p class="mb-4 text-[#E6EDF3]">{{ submission.description }}</p>
          
          <div class="flex space-x-4">
            <a :href="submission.githubUrl" target="_blank" class="text-terminal-green hover:underline flex items-center">
              <span>GitHub</span>
            </a>
            <a 
              v-if="submission.tweetUrl" 
              :href="submission.tweetUrl" 
              target="_blank" 
              class="text-terminal-green hover:underline flex items-center"
            >
              <span>X Post</span>
            </a>
          </div>
        </div>
      </div>
      
      <div v-if="communitySubmissions.length === 0" class="text-center py-12">
        <p class="text-gray-400">No community submissions yet. Be the first!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const loading = ref(true);
const communitySubmissions = ref([]);

onMounted(() => {
  // In a real implementation, this would fetch from a GitHub API or similar
  // For demonstration purposes, we'll use mock data
  setTimeout(() => {
    communitySubmissions.value = [
      {
        id: 1,
        username: 'devops_jane',
        projectTitle: 'Docker Multi-Stage Build',
        level: 'beginner',
        description: 'Enhanced the Docker Basics project with multi-stage builds to optimize the image size.',
        githubUrl: 'https://github.com/devops_jane/docker-multi-stage',
        tweetUrl: 'https://x.com/devops_jane/status/123456789'
      },
      {
        id: 2,
        username: 'cloudnative_dev',
        projectTitle: 'GitOps with ArgoCD',
        level: 'advanced',
        description: 'Implemented a full GitOps workflow using ArgoCD to manage Kubernetes applications.',
        githubUrl: 'https://github.com/cloudnative_dev/gitops-argocd',
        tweetUrl: null
      },
      {
        id: 3,
        username: 'terraform_fan',
        projectTitle: 'Infrastructure as Code',
        level: 'intermediate',
        description: 'Created a comprehensive AWS infrastructure setup using Terraform modules.',
        githubUrl: 'https://github.com/terraform_fan/terraform-aws-infra',
        tweetUrl: 'https://x.com/terraform_fan/status/987654321'
      }
    ];
    loading.value = false;
  }, 800);
});
</script>
