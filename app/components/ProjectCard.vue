<script setup lang="ts">
import type { Level, ProjectMeta } from '~/composables/useProjects'

interface Props {
  project: ProjectMeta
  level: Level
}

defineProps<Props>()
</script>

<template>
  <div class="bg-[#0A0E14] border border-green-400/20 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:border-green-400/60 group relative">
    <!-- Header -->
    <div class="px-5 py-4 flex items-center justify-between border-b border-green-400/20">
      <h3 class="text-base font-mono font-bold text-white group-hover:text-green-400 transition-colors duration-200">
        {{ project.title }}
      </h3>
      <div
        class="text-xs font-mono px-2 py-1 rounded-full"
        :class="{
          'bg-green-900/30 text-green-400': level === 'beginner',
          'bg-yellow-900/30 text-yellow-400': level === 'intermediate',
          'bg-red-900/30 text-red-400': level === 'advanced',
        }"
      >
        {{ level }}
      </div>
    </div>

    <!-- Content -->
    <div class="p-5 flex-grow flex flex-col">
      <p class="text-gray-400 mb-3 text-sm flex-grow">{{ project.description }}</p>

      <div class="mb-3 flex flex-wrap">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="bg-[#1c2128] text-[10.5px] text-gray-300 font-mono py-1 px-2 rounded mr-2 mb-2 inline-block border border-green-400/10"
        >
          # {{ tag }}
        </span>
      </div>

      <NuxtLink
        :to="project.path"
        class="self-start font-mono text-green-400 border border-green-400/50 rounded px-4 py-2 inline-flex items-center hover:bg-green-400 hover:text-black transition-all duration-200"
      >
        View Project
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>

    <!-- Terminal decorative dots -->
    <div class="absolute top-0 right-0 m-2 flex space-x-1 opacity-40 pointer-events-none">
      <div class="w-2 h-2 rounded-full bg-red-500" />
      <div class="w-2 h-2 rounded-full bg-yellow-500" />
      <div class="w-2 h-2 rounded-full bg-green-500" />
    </div>
  </div>
</template>