import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'marginalia'>;

export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('marginalia', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function collectCategories(articles: Article[]): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const a of articles) {
    for (const c of a.data.category) counts.set(c, (counts.get(c) ?? 0) + 1);
  }
  return [...counts]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'ja'));
}

export function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}