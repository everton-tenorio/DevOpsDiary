import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'
import { resolve } from 'node:path'

const projectSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

const postSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  bannerImage: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: {
        cwd: resolve('posts'),
        include: '**/*.md',
        prefix: '/blog',
      },
      schema: postSchema,
    }),
    beginner: defineCollection({
      type: 'page',
      source: {
        cwd: resolve('projects/beginner'),
        include: '**/*.md',
        prefix: '/beginner',
      },
      schema: projectSchema,
    }),
    intermediate: defineCollection({
      type: 'page',
      source: {
        cwd: resolve('projects/intermediate'),
        include: '**/*.md',
        prefix: '/intermediate',
      },
      schema: projectSchema,
    }),
    advanced: defineCollection({
      type: 'page',
      source: {
        cwd: resolve('projects/advanced'),
        include: '**/*.md',
        prefix: '/advanced',
      },
      schema: projectSchema,
    }),
  },
})