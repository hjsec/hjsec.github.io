import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    motto: z.string().optional(),
    links: z.array(z.record(z.string())).optional(),
  }),
})

export const collections = { projects }
