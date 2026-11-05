import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'marginalia'>;

// 新しい順。下書き(draft)は、開発中(npm run dev)だけ表示し、公開サイトには出さない
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('marginalia', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// 全記事のカテゴリーを集めて、記事の多い順に並べる（同数なら五十音順）
export function collectCategories(articles: Article[]): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const a of articles) {
    for (const c of a.data.category) counts.set(c, (counts.get(c) ?? 0) + 1);
  }
  return [...counts]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'ja'));
}

// 2026-11-05 の形。frontmatterに書いた日付をそのまま出す（時差でずれないよう UTC で読む）
export function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}