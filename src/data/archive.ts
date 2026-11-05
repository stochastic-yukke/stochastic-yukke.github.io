// archive に載せる資料（PDFなど）の登録簿。PDFは public/pdf/ に置き、ここに1件ずつ書き足す。
// slug は URL になる（/archive/<slug>/）。英数字とハイフンだけにする。
export type ArchiveItem = {
  slug: string;
  title: string;
  file: string; // 例: '/pdf/sample.pdf'
  description?: string;
  date?: string;
};

export const archive: ArchiveItem[] = [
  {
    slug: 'sample',
    title: 'サンプル：ガロア対応のメモ',
    file: '/pdf/sample.pdf',
    description: 'ビューワの動作確認用です。目次のリンクや、式中の参照も辿れます。',
    date: '2026-11-05',
  },
];