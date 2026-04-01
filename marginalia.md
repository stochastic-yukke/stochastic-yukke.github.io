---
layout: default
title: Marginalia
permalink: /marginalia/
---

Marginaliaとは，本などの欄外への書き込みや傍注を意味します。まあ，そんな感じです。

# Marginalia List
<div class="marginalia-accordion">
  {% assign genres = site.marginalia | map: "genre" | uniq | sort_natural %}
  {% for genre in genres %}
    <details class="genre-details">
      <summary class="genre-summary">
        <span class="genre-title">{{ genre }}</span>
        <span class="genre-icon"></span>
      </summary>
      
      <ul class="genre-post-list">
        {% assign posts = site.marginalia | where: "genre", genre | sort: "date" %}
        {% for post in posts %}
          <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
            <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
          </li>
        {% endfor %}
      </ul>
    </details>
  {% endfor %}
</div>
