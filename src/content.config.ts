import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['Frontend', 'Backend', 'DevOps', '생산성', 'AI', '기타']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    image: z.string().optional(),
    period: z.string(),
    category: z.string().default('사이드'),
    role: z.string().optional(),
    team: z.string().optional(),
    tools: z.array(z.string()).optional(),
    links: z.object({
      github: z.string().optional(),
      demo: z.string().optional(),
    }).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { blog, projects };
