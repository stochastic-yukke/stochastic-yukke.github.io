// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://stochastic-yukke.github.io',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          macros: {
            '\\N': '\\mathbb{N}',
            '\\Z': '\\mathbb{Z}',
            '\\Q': '\\mathbb{Q}',
            '\\R': '\\mathbb{R}',
            '\\C': '\\mathbb{C}',
            '\\Gal': '\\operatorname{Gal}',
            '\\Hom': '\\operatorname{Hom}',
            '\\id': '\\mathrm{id}',
          },
        },
      ],
    ],
  },
});