<script setup lang="ts">
useHead({
  title: 'DevOpsDiary | Hands-On Path to Senior DevOps',
  meta: [
    { name: 'description', content: 'A structured, hands-on path to becoming a senior DevOps engineer. Free, open-source, no paywalls.' },
  ],
})

interface Level {
  name: string
  path: string
  label: string
  description: string
  color: string
  border: string
  tasks: number
}

const levels: Level[] = [
  {
    name: 'Beginner',
    path: '/beginner',
    label: '01',
    description: 'Linux, networking, scripting, Git, and your first infrastructure project.',
    color: 'text-green-400',
    border: 'border-green-400/40 hover:border-green-400',
    tasks: 10,
  },
  {
    name: 'Intermediate',
    path: '/intermediate',
    label: '02',
    description: 'Docker, Kubernetes, Terraform, CI/CD pipelines, GitOps, and observability.',
    color: 'text-yellow-400',
    border: 'border-yellow-400/40 hover:border-yellow-400',
    tasks: 15,
  },
  {
    name: 'Advanced',
    path: '/advanced',
    label: '03',
    description: 'Platform engineering, FinOps, multi-cloud architecture, and senior-level practices.',
    color: 'text-red-400',
    border: 'border-red-400/40 hover:border-red-400',
    tasks: 11,
  },
]
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-10">

    <!-- Hero -->
    <div class="mb-14 text-center">
      <h1 class="text-4xl md:text-6xl font-mono font-bold text-green-400 mb-8">
        <center><img src="/devopsdiary2.png" width="600px" /></center>
      </h1>
      <p class="text-md md:text-md lg:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto">
        Hands-on DevOps projects to level up your skills.<br />
        Free. Open source. No paywalls. Just the work.
      </p>
    </div>

    <!-- Levels -->
    <div class="flex flex-col gap-4 mb-14">
      <NuxtLink
        v-for="level in levels"
        :key="level.path"
        :to="level.path"
        :class="['group flex items-start gap-5 p-5 rounded-xl bg-[#0d1117] border transition-all duration-200', level.border]"
      >
        <span :class="['font-mono text-3xl font-bold leading-none mt-0.5 shrink-0', level.color]">
          {{ level.label }}
        </span>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-3 mb-1">
            <span :class="['font-mono font-bold text-lg', level.color]">{{ level.name }}</span>
            <span v-if="level.tasks" class="text-xs font-mono text-gray-600">
              {{ level.tasks }} tasks
            </span>
            <span v-else class="text-xs font-mono text-gray-600">coming soon</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">{{ level.description }}</p>
        </div>
        <svg
          :class="['w-5 h-5 shrink-0 mt-1 text-gray-700 transition-colors duration-200', `group-hover:${level.color.replace('text-', 'text-')}`]"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>

    <!-- How it works -->
    <div class="border border-green-400/20 rounded-xl bg-[#0d1117] p-6 mb-10">
      <h2 class="font-mono font-bold text-green-400 text-lg mb-5">
        <span class="text-gray-600 mr-2">$</span> how_it_works
      </h2>
      <div class="space-y-4 text-sm text-gray-400 leading-relaxed">
        <p>
          Each level is a sequence of tasks that build on each other. The order matters -
          task 5 assumes you completed tasks 1 through 4. That progression is intentional.
        </p>
        <p>
          There is no required format. Use any environment: local VM, cloud free tier, or your
          current work setup. The goal is that you actually do the work and understand what you built.
        </p>
        <p>
          Start at <span class="text-green-400 font-mono">Beginner</span> even if you have
          some experience. The early tasks build the foundation everything else depends on.
        </p>
      </div>
    </div>

    <!-- Footer links -->
    <div class="flex flex-wrap justify-center gap-6 text-sm font-mono text-gray-600">
      <a
        href="https://github.com/everton-tenorio/DevOpsDiary"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-green-400 transition-colors"
      >
        GitHub
      </a>
      <NuxtLink to="/blog" class="hover:text-green-400 transition-colors">Blog</NuxtLink>
      <NuxtLink to="/about" class="hover:text-green-400 transition-colors">About</NuxtLink>
      <a
        href="https://twitter.com/hashtag/DevOpsDiary"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-green-400 transition-colors"
      >
        #DevOpsDiary
      </a>
    </div>

  </div>
</template>