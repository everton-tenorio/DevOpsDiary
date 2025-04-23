<template>
  <div class="bg-terminal-black border border-terminal-green/20 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 transform hover:scale-102 hover:border-terminal-green/60 group">
    <!-- Header with difficulty indicator -->
    <div class="px-5 py-4 flex items-center justify-between border-b border-terminal-green/20">
      <h3 class="text-lg font-mono font-bold text-terminal-white group-hover:text-terminal-green transition-colors duration-200">
        {{ project.title }}
      </h3>
      <div class="text-xs font-mono px-2 py-1 rounded-full" 
           :class="{
             'bg-green-900/30 text-green-400': level === 'beginner',
             'bg-yellow-900/30 text-yellow-400': level === 'intermediate',
             'bg-red-900/30 text-red-400': level === 'advanced'
           }">
        {{ level }}
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-5 flex-grow flex flex-col">
      <p class="text-terminal-gray mb-4 flex-grow">{{ project.description }}</p>
      
      <div class="mb-5 flex flex-wrap">
        <span 
          v-for="tag in project.tags" 
          :key="tag" 
          class="bg-terminal-black-lighter text-xs font-mono py-1 px-2 rounded mr-2 mb-2 inline-block border border-terminal-green/10"
        >
          # {{ tag }}
        </span>
      </div>
      
      <router-link 
        :to="`/${level}/${project.slug}`" 
        class="self-start font-mono text-terminal-green border border-terminal-green/50 rounded px-4 py-2 inline-flex items-center hover:bg-terminal-green hover:text-terminal-black transition-all duration-200"
      >
        <span>View Project</span>
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </router-link>
    </div>
    
    <!-- Card "terminal" decorative elements -->
    <div class="absolute top-0 right-0 m-2 flex space-x-1 opacity-40 pointer-events-none">
      <div class="w-2 h-2 rounded-full bg-red-500"></div>
      <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
      <div class="w-2 h-2 rounded-full bg-green-500"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  level: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.scale-102 {
  --tw-scale-x: 1.02;
  --tw-scale-y: 1.02;
}

span { color: #E6EDF3 }
</style>