<script setup lang="ts">
import type { Level } from '~/composables/useProjects'

const route = useRoute()
const level = route.params.level as Level
const slug = route.params.slug as string

const { data: project } = await useAsyncData(
  `${level}-${slug}`,
  () => queryCollection(level).path(route.path).first()
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

const capitalizeFirst = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1)

const issueUrl = computed(() => {
  const base = 'https://github.com/everton-tenorio/DevOpsDiary/issues/new'
  const template = 'project_submission.yml'
  const projectTitle = encodeURIComponent(project.value?.title ?? '')
  const levelLabel = encodeURIComponent(capitalizeFirst(level))
  const devopsLink = encodeURIComponent(`https://devopsdiary.site/${level}/${slug}`)

  return `${base}?template=${template}&title=&project_title=${projectTitle}&labels=${level}&level=${levelLabel}&devopsdiary_link=${devopsLink}&repository_link=&description=`
})

useHead(() => ({
  title: project.value ? `${project.value.title} | DevOpsDiary` : 'Project | DevOpsDiary',
  meta: project.value
    ? [{ name: 'description', content: project.value.description ?? '' }]
    : [],
}))

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <!-- Project Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-mono font-bold text-green-400 mb-4">
        {{ project!.title }}
      </h1>

      <div v-if="project!.tags?.length" class="mb-4 flex flex-wrap gap-2">
        <span
          v-for="tag in project!.tags"
          :key="tag"
          class="inline-block bg-gray-800 text-green-400 px-2 py-1 rounded font-mono text-sm"
        >
          {{ tag }}
        </span>
      </div>

      <p class="text-[#E6EDF3] text-lg mb-4">{{ project!.description }}</p>

      <NuxtLink
        :to="`/${level}`"
        class="text-green-400 hover:underline font-mono"
      >
        ← Back to {{ capitalizeFirst(level) }}
      </NuxtLink>
    </div>

    <!-- Project Content rendered from markdown -->
    <div class="bg-[#1c2128] text-[#E6EDF3] lg:mx-0 -mx-5 p-6 rounded-lg mb-8 project-content">
      <ContentRenderer :value="project!" />
    </div>

    <!-- Submit Solution -->
    <div class="bg-[#1c2128] text-[#E6EDF3] p-6 rounded-lg mb-8">
      <h2 class="text-xl font-mono font-bold text-green-400 mb-4">Submit Your Solution</h2>
      <p class="mb-4">Completed this project? Share your solution with the community!</p>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Push your code to a GitHub repository</li>
        <li>Open an issue on our GitHub repo with your solution link</li>
        <li>Share on X with the hashtag #DevOpsDiary</li>
      </ol>
      <div class="flex flex-wrap gap-4">
        <a
          :href="issueUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-green-400 text-gray-900 px-4 py-2 rounded font-mono hover:bg-green-300 transition-colors"
        >
          Submit Solution
        </a>
        <a
          href="https://twitter.com/intent/tweet?hashtags=DevOpsDiary"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-green-400 text-gray-900 px-4 py-2 rounded font-mono hover:bg-green-300 transition-colors"
        >
          Share on X
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-content :deep(h2) { @apply text-2xl font-mono font-bold text-green-400 mb-4 mt-6; }
.project-content :deep(h3) { @apply text-xl font-mono text-green-400 mb-2 mt-4; }
.project-content :deep(h4) { @apply text-lg pt-4 text-red-400; }
.project-content :deep(h5) { @apply text-base pt-4 text-red-400; }
.project-content :deep(p)  { @apply mb-6 mt-4 leading-relaxed; }
.project-content :deep(ul) { @apply list-disc pl-6 mb-4 space-y-1; }
.project-content :deep(ol) { @apply list-decimal pl-6 mb-4 space-y-1; }
.project-content :deep(a)  { @apply text-[#95bafd] hover:underline; }
.project-content :deep(pre) {
  @apply bg-[#1a1a1a] rounded p-4 mb-4 overflow-x-auto font-mono text-white;
}
.project-content :deep(code) {
  @apply bg-[#1a1a1a] text-green-300 px-1.5 py-0.5 rounded text-sm font-mono;
}
.project-content :deep(pre code) {
  @apply bg-transparent text-white px-0 py-0;
}
.project-content :deep(pre code)::before,
.project-content :deep(pre code)::after { content: none !important; }
.project-content :deep(blockquote) {
  @apply border-l-4 border-green-400 pl-4 italic text-gray-300 my-4;
}

a:focus, button:focus { outline: none; }
</style>