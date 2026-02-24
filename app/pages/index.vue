<script setup lang="ts">
interface Level {
  name: string
  path: string
}

const levels: Level[] = [
  { name: 'Beginner', path: '/beginner' },
  { name: 'Intermediate', path: '/intermediate' },
  { name: 'Advanced', path: '/advanced' },
]

const steps = [
  { number: '01', text: 'Pick a project that matches your skill level' },
  { number: '02', text: 'Build the project following the step-by-step guide' },
  { number: '03', text: 'Share on GitHub or X with #DevOpsDiary' },
]
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <div class="w-full max-w-4xl py-10 px-4">
      <!-- Hero -->
      <h1 class="text-4xl md:text-6xl font-mono font-bold text-green-400 mb-8">
        
        <center><img src="/devopsdiary2.png" width="600px" /></center>
      </h1>

      <p class="text-xl md:text-2xl text-gray-300 mb-12">
        Hands-on DevOps projects to level up your skills
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-16">
        <NuxtLink
          v-for="level in levels"
          :key="level.path"
          :to="level.path"
          class="px-6 py-3 rounded-full font-bold font-mono bg-white/85 text-black hover:bg-green-400 transition-colors duration-200"
        >
          {{ level.name }} Projects
        </NuxtLink>
      </div>

      <!-- How It Works -->
      <div class="bg-gray-900 p-6 rounded-lg mb-12">
        <h2 class="text-2xl font-mono font-bold text-green-400 mb-8">
          How It Works
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="step in steps"
            :key="step.number"
            class="flex flex-col items-center text-[#E6EDF3]"
          >
            <div class="text-4xl font-mono font-bold text-green-400 mb-4">
              {{ step.number }}
            </div>
            <p>{{ step.text }}</p>
          </div>
        </div>

        <p class="text-xl font-mono font-bold text-white mt-8">
          Check out the
          <a
            href="https://github.com/everton-tenorio/DevOpsDiary?tab=readme-ov-file#how-to-get-started"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-300 hover:text-blue-200 transition-colors"
          >README.md</a>
          for all the instructions!
        </p>
      </div>
    </div>
  </div>
</template>