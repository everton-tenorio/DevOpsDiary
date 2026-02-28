<script setup lang="ts">
useHead({
  title: 'About | DevOpsDiary',
  meta: [
    { name: 'description', content: 'About DevOpsDiary - open-source hands-on DevOps projects for all skill levels.' },
  ],
})

interface Principle {
  label: string
  text: string
}

const principles: Principle[] = [
  { label: 'Open Source', text: 'All content and code are freely available on GitHub.' },
  { label: 'Practical Learning', text: 'Focus on hands-on projects rather than theory alone.' },
  { label: 'Community Driven', text: 'Built by the community, for the community.' },
  { label: 'Accessible', text: 'Projects structured for all skill levels, from beginner to advanced.' },
]
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-mono font-bold text-green-400 mb-8">About #DevOpsDiary</h1>

    <!-- Our Story -->
    <div class="bg-gray-900 text-[#E6EDF3] p-6 rounded-lg mb-8">
      <h2 class="text-xl font-mono font-bold text-green-400 mb-4">
        <span class="mr-2">></span>Our Story
      </h2>
      <p class="mb-4">
        Hi, Everton Tenorio here. DevOpsDiary started as a hashtag on X, where I began sharing my DevOps studies and personal projects.
        It has evolved into a community-driven platform that provides hands-on projects to help developers learn and practice DevOps skills.
      </p>
      <p>
        The mission is simple: to provide practical DevOps learning opportunities that are accessible to everyone.
        No paywalls, no subscriptions, just open-source knowledge sharing.
      </p>
    </div>

    <!-- Our Principles -->
    <div class="bg-gray-900 text-[#E6EDF3] p-6 rounded-lg mb-8">
      <h2 class="text-xl font-mono font-bold text-green-400 mb-4">
        <span class="mr-2">></span>Our Principles
      </h2>
      <ul class="space-y-3">
        <li
          v-for="principle in principles"
          :key="principle.label"
          class="flex"
        >
          <span class="text-green-400 mr-2 font-mono">$</span>
          <span>
            <strong class="text-white">{{ principle.label }}:</strong>
            {{ principle.text }}
          </span>
        </li>
      </ul>
    </div>

    <!-- Contribute -->
    <div class="bg-gray-900 text-[#E6EDF3] p-6 rounded-lg mb-8">
      <h2 class="text-xl font-mono font-bold text-green-400 mb-4">
        <span class="mr-2">></span>Contribute
      </h2>
      <p class="mb-4">
        DevOpsDiary is an open-source project, and we welcome contributions from the community.
        Help us improve existing projects, add new ones, or enhance the platform itself.
      </p>
      <a
        href="https://github.com/everton-tenorio/DevOpsDiary"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-green-400 text-gray-900 px-4 py-2 rounded font-mono font-bold hover:bg-green-300 transition-colors"
      >
        View on GitHub
      </a>
    </div>

    <!-- Support -->
    <div class="bg-gray-900 text-[#E6EDF3] p-6 rounded-lg">
      <h2 class="text-xl font-mono font-bold text-green-400 mb-4">
        <span class="mr-2">></span>Support the Project
      </h2>
      <p class="mb-4">
        If you find DevOpsDiary valuable, consider supporting the project.
        Your support helps maintain the infrastructure and allows dedicating more time to creating content.
      </p>
      <iframe
        src="https://github.com/sponsors/everton-tenorio/button"
        title="Sponsor everton-tenorio"
        height="32"
        width="114"
        style="border: 0; border-radius: 6px;"
      />
    </div>
  </div>
</template>