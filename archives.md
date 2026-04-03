---
layout: default
title: Archives
permalink: /archives/
---

<ul>
{% for item in site.archives reversed %}
  <li><a href="{{ item.url }}">{{ item.title }}</a> <small>({{ item.date | date: "%Y-%m-%d" }})</small></li>
{% endfor %}
</ul>