<script setup lang="ts">
const { data: posts, status } = await useAsyncData(
  'posts',
  () => queryCollection('posts').order('date', 'DESC').all()
)

const isLoading = computed(() => status.value === 'pending')

useHead({
  title: 'DevOpsDiary | Blog',
  meta: [
    { name: 'description', content: 'all posts' },
  ],
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Page Header bg-[#161b22] border-b border-green-400/30 -->
    <div class="">
      <div class="max-w-6xl mx-auto px-4 py-8 md:px-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-green-400 mb-2 font-mono">Posts</h1>
            <p class="text-lg text-gray-400"></p>
          </div>
          <NuxtLink
            to="/"
            class="inline-flex items-center px-6 py-3 bg-[#1c2128] text-white rounded-lg hover:bg-green-400 hover:text-black transition-colors font-mono"
          >
            ← Home
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-6xl mx-auto px-4 py-12 md:px-8">
      <!-- Loading -->
      <div v-if="isLoading" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-400" />
        <p class="text-gray-400 mt-4 font-mono">Carregando posts...</p>
      </div>

      <!-- Empty -->
      <div v-else-if="!posts || posts.length === 0" class="text-center py-12">
        <div class="text-6xl mb-4">📝</div>
        <h2 class="text-2xl font-bold text-white mb-2 font-mono">Nenhum post encontrado</h2>
        <p class="text-gray-400">Ainda não há posts publicados.</p>
      </div>

      <!-- Grid -->
      <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <PostCard
          v-for="post in posts"
          :key="post.slug"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>