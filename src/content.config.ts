import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// frontmatter:
//   ---
//   title: ガロア対応のメモ
//   date: 2026-11-05
//   category: 数学            # 複数なら  category: [数学, 言語]
//   draft: true               # 下書き。公開サイトには出ない（省略すると公開）
//   ---
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