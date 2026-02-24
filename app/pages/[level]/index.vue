<script setup lang="ts">
import type { Level } from '~/composables/useProjects'

const route = useRoute()
const level = route.params.level as Level

const validLevels: Level[] = ['beginner', 'intermediate', 'advanced']
if (!validLevels.includes(level)) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

const { projects, isLoading, error } = useProjects(level)

const meta: Record<Level, { title: string; description: string }> = {
  beginner: {
    title: 'Beginner DevOps Projects',
    description: 'Start your DevOps journey with these beginner-friendly projects. No previous DevOps experience required.',
  },
  intermediate: {
    title: 'Intermediate DevOps Projects',
    description: 'Take your skills to the next level. Basic knowledge of Docker, Git, and command-line tools recommended.',
  },
  advanced: {
    title: 'Advanced DevOps Projects',
    description: 'Challenge yourself with these advanced projects. Experience with Docker, Kubernetes, and cloud platforms recommended.',
  },
}

const bgClass: Record<Level, string> = {
  beginner: 'bg-[#e0e0e0]',
  intermediate: 'bg-[#e0e0e0]',
  advanced: 'bg-[#e0e0e0]',
}

const accentClass: Record<Level, string> = {
  beginner: 'text-green-500',
  intermediate: 'text-yellow-500',
  advanced: 'text-red-500',
}

const desc: Record<Level, string> = {
  beginner: 'text-[black]',
  intermediate: 'text-[black]',
  advanced: 'text-[black]',
}

useHead({
  title: `${meta[level].title} | DevOpsDiary`,
})
</script>

<template>
  <div :class="['min-h-screen -mx-4 -my-8 px-4 py-8 transition-colors duration-300', bgClass[level]]">
    <div class="max-w-4xl mx-auto">
      <h1 :class="['text-3xl font-mono font-bold mb-4', accentClass[level]]">
        {{ meta[level].title }}
      </h1>
      <p :class="['mb-8', desc[level]]">{{ meta[level].description }}</p>

      <div class="flex pb-8">
        <NuxtLink
              to="/"
              class="inline-flex items-center px-6 py-3 bg-[#0A0E14] text-white rounded-lg hover:bg-green-400 hover:text-black transition-colors font-mono"
            >
              <span class="text-green-400 hover:underline font-mono">← Home</span>
        </NuxtLink>
      </div>

      <div v-if="isLoading" class="text-center py-12">
        <div :class="['font-mono', accentClass[level]]">Loading projects...</div>
      </div>

      <div v-else-if="error" class="bg-red-900 text-white p-4 rounded mb-8">
        {{ error }}
      </div>

      <div v-else-if="!projects || projects.length === 0" class="text-center py-12">
        <p class="text-gray-400 font-mono">No projects found.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.path"
          :project="project"
          :level="level"
        />
      </div>
    </div>
  </div>
</template>