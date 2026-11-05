import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const marginalia = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/marginalia' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z
      .union([z.string(), z.array(z.string())])
      .optional()
      .transform((v) => (v === undefined ? [] : Array.isArray(v) ? v : [v])),
    draft: z.boolean().default(false),
  }),
});

export const collections = { marginalia };