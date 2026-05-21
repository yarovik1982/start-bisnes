import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Team'),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const privacy = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/privacy' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
  }),
});

const terms = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/terms' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string(),
  }),
});
export const collections = { blog, privacy, terms };
