"""Oradano明朝を、サイト名の文字だけに絞って woff2 にする。

前提：
  fonts-src/ に Oradano明朝（.ttf または .otf）を置く。
  ファイル名に "oradano" が含まれていれば自動で見つける（大文字小文字は問わない）。

実行（プロジェクト直下で）：
  docker run --rm -v "$PWD":/app -w /app python:3.12 \
    sh -c "pip install -q fonttools brotli && python scripts/subset_fonts.py"

サイト名（src/layouts/Layout.astro の siteName）を変えたときだけ、もう一度実行する。
できた public/fonts/oradano-subset.woff2 は、リポジトリに入れておく。
"""

import os
import re
import sys

from fontTools import subset

SRC_DIR = "fonts-src"
OUT_DIR = "public/fonts"
LAYOUT = "src/layouts/Layout.astro"


def find_font(keyword):
    for name in sorted(os.listdir(SRC_DIR)):
        if keyword in name.lower() and name.lower().endswith((".ttf", ".otf")):
            return os.path.join(SRC_DIR, name)
    sys.exit(f"{SRC_DIR}/ に '{keyword}' を含む .ttf / .otf が見つかりません。")


def site_name():
    with open(LAYOUT, encoding="utf-8") as fh:
        m = re.search(r"const siteName = '([^']*)'", fh.read())
    if not m:
        sys.exit(f"{LAYOUT} に siteName が見つかりません。")
    return m.group(1)


def main():
    os.makedirs(OUT_DIR, exist_ok=True)

    # ASCII（0x20-0x7E）と、サイト名に使われている文字
    codepoints = set(range(0x20, 0x7F)) | {ord(c) for c in site_name()}

    src = find_font("oradano")
    out = f"{OUT_DIR}/oradano-subset.woff2"

    opts = subset.Options()
    opts.flavor = "woff2"
    opts.name_IDs = ["*"]  # ライセンス表記などの名前情報を残す
    opts.notdef_outline = True
    font = subset.load_font(src, opts)
    sub = subset.Subsetter(opts)
    sub.populate(unicodes=sorted(codepoints))
    sub.subset(font)
    subset.save_font(font, out, opts)
    print(f"{out}: {os.path.getsize(out) / 1024:.0f} KB  (元: {src})")


if __name__ == "__main__":
    main()