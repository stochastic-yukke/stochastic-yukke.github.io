---
layout: default
title: Marginalia
permalink: /marginalia/
---
# Marginalia List
<ul>
{% for item in site.marginalia reversed %}
  <li><a href="{{ item.url }}">{{ item.title }}</a> <small>({{ item.date | date: "%Y-%m-%d" }})</small></li>
{% endfor %}
</ul>