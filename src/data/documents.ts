// PDFは public/pdf/ に置き，ここに1件ずつ書く
// urlは /documents/[slug]/ (英数字とハイフンのみ)。
export type Document = {
  slug: string;
  title: string;
  file: string; // e.g: '/pdf/sample.pdf'
  description?: string;
  date?: string;
};

export const documents: Document[] = [
  {
    slug: 'sample',
    title: 'サンプル：ガロア対応のメモ',
    file: '/pdf/sample.pdf',
    description: 'ビューワの動作確認用です。目次のリンクや、式中の参照も辿れます。',
    date: '2026-11-05',
  },
];