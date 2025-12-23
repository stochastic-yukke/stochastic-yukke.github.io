---
layout: default
title: Marginalia
permalink: /marginalia/
---

Marginaliaとは，本などの欄外への書き込みや傍注を意味します。まあ，そんな感じです。

# Marginalia List
<ul>
{% for item in site.marginalia reversed %}
  <li><a href="{{ item.url }}">{{ item.title }}</a> <small>({{ item.date | date: "%Y-%m-%d" }})</small></li>
{% endfor %}
</ul>