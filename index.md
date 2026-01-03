---
layout: default
title: Home
---
まずはこちら：**[About](/about/)** / Start Here: **[About](/en/about/)**<br>
Here are credits: **[Credits](/credits/)**<br>

# Latest Posts

### Archives
{% assign latest_archive = site.archives | sort: 'date' | reverse | first %}
{% if latest_archive %}
  **[{{ latest_archive.title }}]({{ latest_archive.url }})** <small>({{ latest_archive.date | date: "%Y-%m-%d" }})</small><br>
  {{ latest_archive.excerpt | strip_html | truncate: 120 }}
{% else %}
  (No archives yet)
{% endif %}
**<small style="font-size: 90%;">[Other Archives >>](/archives/)</small>**

---

### Marginalia
{% assign latest_marg = site.marginalia | sort: 'date' | reverse | first %}
{% if latest_marg %}
  **[{{ latest_marg.title }}]({{ latest_marg.url }})** <small>({{ latest_marg.date | date: "%Y-%m-%d" }})</small><br>
  {{ latest_marg.excerpt | strip_html | truncate: 120 }}
{% else %}
  (No marginalia yet)
{% endif %}
**<small style="font-size: 90%;">[Other Marginalia >>](/marginalia/)</small>**

---

### Street & Trail
{% assign latest_trail = site.street-trail | sort: 'date' | reverse | first %}
{% if latest_trail %}
  **[{{ latest_trail.title }}]({{ latest_trail.url }})** <small>({{ latest_trail.date | date: "%Y-%m-%d" }})</small><br>
  {{ latest_trail.excerpt | strip_html | truncate: 120 }}
{% else %}
  (No records yet)
{% endif %}
**<small style="font-size: 90%;">[Other Street & Trails >>](/street-trail/)</small>**