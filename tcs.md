---
layout: default
title: TCS
permalink: /tcs/
---

# Tronc Commun Scientifique

## Liste des chapitres

<ul style="list-style-type: none;">
{% for chapter in site.tcs %}
  <li>{{ chapter.chapter }}. <a href="{{ chapter.url | relative_url }}">{{ chapter.title }}</a></li>
{% endfor %}
</ul>
