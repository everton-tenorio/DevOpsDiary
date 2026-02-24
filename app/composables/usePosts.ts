// app/composables/usePosts.ts

// Tipo derivado do schema definido em content.config.ts
export interface Post {
  path: string
  title: string
  date: string
  description?: string
  tags?: string[]
  bannerImage?: string
}

export function usePosts() {
  const { data: posts, status, refresh } = useAsyncData<Post[]>(
    'posts',
    () => queryCollection('posts').order('date', 'DESC').all() as Promise<Post[]>,
    { default: () => [] }
  )

  const isLoading = computed(() => status.value === 'pending')
  const isInitialized = computed(() => status.value !== 'idle')

  const getPostByPath = (path: string): Post | undefined =>
    posts.value?.find(post => post.path === path)

  return {
    posts,
    isLoading,
    isInitialized,
    refresh,
    getPostByPath,
  }
}