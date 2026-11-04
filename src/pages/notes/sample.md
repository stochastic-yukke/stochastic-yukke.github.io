---
layout: ../../layouts/Layout.astro
title: 数式表示サンプル
date: 2026-11-03
---

表示の確認用のページです。本文中の式は $\Gal(L/K)$，$\C$ のように書き，独立させたい式は次のように書きます。

$$
\sum_{k=0}^{n} \binom{n}{k} x^{k} y^{n-k} = (x+y)^{n}
$$

## 定理と証明

$L/K$ を有限ガロア拡大とし，$G = \Gal(L/K)$ とおく。

<div class="theorem">

中間体 $E$ に部分群 $\Gal(L/E)$ を，部分群 $H \le G$ に固定体 $L^{H}$ を対応させる写像は，$K \subset E \subset L$ をみたす体 $E$ の全体と $G$ の部分群の全体のあいだの，包含関係を逆にする全単射を与える。

</div>

この定理の証明はここでは省き，次の簡単な事実だけ確かめておく。

<div class="proposition">

$K \subset E \subset E' \subset L$ ならば、$\Gal(L/E') \subset \Gal(L/E)$ である。

</div>

<div class="proof">

$\sigma \in \Gal(L/E')$ は $E'$ の元をすべて固定する。$E \subset E'$ だから，$\sigma$ は $E$ の元もすべて固定する。よって $\sigma \in \Gal(L/E)$ である。

</div>

<div class="remark">

幅の広い式は，画面からはみ出さずに，その式の中だけ横にスクロールできる。

$$
\prod_{p \,:\, \text{prime}} \frac{1}{1-p^{-s}} = \sum_{n=1}^{\infty} \frac{1}{n^{s}} = \zeta(s) \quad (\mathrm{Re}\, s > 1),\qquad \zeta(2) = \frac{\pi^{2}}{6} = 1.6449\ldots, \qquad H_q(X,\mathbb{Z}) \equiv H_{q-1}(X, \mathbb{Z}), \qquad asdfgbgfgfesdg
$$

</div>

<div class="example">

étale siteをオープンしましたー

</div>