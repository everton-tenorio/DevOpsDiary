// app/composables/useProjects.ts

export type Level = 'beginner' | 'intermediate' | 'advanced'

export interface ProjectMeta {
  path: string
  slug: string
  title: string
  description: string
  tags: string[]
}

export interface ProjectStep {
  title: string
  blocks: Array<{ type: 'text' | 'code'; content: string; lang?: string }>
}

export interface ProjectFull extends ProjectMeta {
  overview?: string
  prerequisites?: string[]
  steps?: ProjectStep[]
  stretchGoal?: string
  resources?: Array<{ title: string; url: string; isPaid?: boolean }>
  communitySolutions?: Array<{
    id: string
    username: string
    description: string
    githubUrl: string
    tweetUrl?: string
  }>
}

export function useProjects(level: Level) {
  const { data: projects, status } = useAsyncData<ProjectMeta[]>(
    `projects-${level}`,
    () =>
      queryCollection(level)
        .select('path', 'title', 'description', 'tags')
        .all() as Promise<ProjectMeta[]>,
    { default: () => [] }
  )

  const isLoading = computed(() => status.value === 'pending')
  const error = computed(() =>
    status.value === 'error' ? 'Failed to load projects.' : null
  )

  return { projects, isLoading, error }
}