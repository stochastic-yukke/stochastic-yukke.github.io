---
layout: default
title: "curryingと加群と"
date: 2026-02-13
latex: true
genre: Mathematics
---

この記事では主に，currying（カリー化）という操作を通して，いくつかの数学的対象を捉え直す。

最近，『加群とホモロジー代数入門』(松田茂樹・著，森北出版，2024)を買ってみた。そこで，改めて加群の定義を見直したが，よくされる次の定義があまり直感的でないと感じた：


<div class="def" data-title="左A加群，left A-module">
  $A$を環とするとき，左$A$加群(left A-module)とは，アーベル群$(M,+)$と，スカラー倍演算$A\times M\ni (a,x) \mapsto a\cdot x \in M$で，次の性質をみたすものである：
  $a,b\in A,\, x,y\in M$に対し，
  <ul>
    <li>$a\cdot (x + y) = a\cdot x + a\cdot y$</li>
    <li>$1\cdot x = x$</li>
    <li>$(a+b)\cdot x = a\cdot x+b\cdot x$</li>
    <li>$(ab)\cdot x=a\cdot(b\cdot x)$</li>
  </ul>
</div>

本によると現代数学は，構成より機能を重視する立場にあるようだが，それにぞぐわないのはもちろんである。そして実際，機能の面が前面に押し出された，もっと（少し難解だが）直感的な定義がある。

<div class="def" data-title="作用">
  集合$R,M$に対し，写像
  $R\times M\ni (r,m)\mapsto r\cdot m\in M$
  を$R$の$M$への作用という。
</div>

<div class="def">
  集合$M,N$に対し，$M$から$N$への写像全体を$\mathrm{Map}(M,N)$とかく。
  また，アーベル群$(M,+)$に対し，$M$のそれ自身への群準同型全体を$\mathrm{End}(M)$とかく。$\mathrm{End}(M)$は，写像の加法（$f+g$は$(f+g)(x)=f(x)+g(x)$として定める）によりアーベル群，写像の合成を積として，(unitalな)環となる。
</div>

定義2の作用を与えることは，$R\to\textrm{Map}(M,N)$を与えることと同値である（$M\to N$の対応を，$R$との演算として与えるということで，同値であることは自然に思える）。このように，$(X\times Y)\to Z$を$X\to(Y\to Z)$にする操作をcurrying（カリー化）と呼ぶ。

> **定義1' (左A加群，left A-module).**
>
> $A$を環とするとき，作用$A\times M\to M$によりアーベル群(M,+)が左$A$加群(left A-module)であるとは，$A\to \mathrm{Map}(M,M)$のImageが$\mathrm{End}(M)$に入り，<dev>$$
>    A\to\mathrm{End}(M)
> $$</dev>が$1\mapsto 1$の環準同型となることをいう。

ここで，curryingをより詳しく見てみよう。

> **例1 (双対空間とcurrying).**
>
> 線型代数の一般的な記法のもとで議論する(例えば，一般に線型空間は$V$とかく)。
> $VとV^{\ast}$は同型なわけだが，curryingの視点からは次のようなことがわかる。双線型形式