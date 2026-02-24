<script setup lang="ts">
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import type { Post } from '~/composables/usePosts'

interface Props {
  post: Post
}

defineProps<Props>()

const formatDate = (dateString: string): string => {
  try {
    return format(new Date(dateString), "dd MMM yyyy", { locale: ptBR })
  } catch (error) {
    console.warn('Erro ao formatar data:', dateString)
    return dateString
  }
}
</script>

<template>
  <NuxtLink
    v-if="post?.slug"
    :to="`/blog/${post.slug}`"
    class="group block relative overflow-hidden rounded-lg aspect-[4/3] transition-all duration-300 hover:scale-[1.02]"
  >
    <!-- Imagem de fundo -->
    <div class="absolute inset-0">
      <img
        v-if="post.bannerImage"
        :src="post.bannerImage"
        :alt="post.title"
        class="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
        loading="lazy"
      />
      <!-- Fallback minimalista -->
      <div
        v-else
        class="w-full h-full bg-neutral-100 dark:bg-neutral-800"
      />
    </div>

    <!-- Overlay sutil -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

    <!-- Conteúdo -->
    <div class="absolute inset-0 flex flex-col justify-end p-4">
      <!-- Tags -->
      <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-1.5 mb-2">
        <span
          v-for="tag in post.tags.slice(0, 3)"
          :key="tag"
          class="text-xs px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm text-white border border-white/30 font-medium"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Título -->
      <h3 class="text-base font-semibold text-white mb-1 line-clamp-2 leading-tight">
        {{ post.title }}
      </h3>

      <!-- Data -->
      <p class="text-xs text-white/70 font-normal">
        {{ formatDate(post.date) }}
      </p>
    </div>

    <!-- Indicador de hover minimalista -->
    <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  </NuxtLink>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
