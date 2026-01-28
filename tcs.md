---
layout: default
title: TCS
permalink: /tcs/
---

# Tronc Commun Scientifique

## Liste des chapitres

<ol>
{% for chapter in site.tcs %}
  <li><a href="{{ chapter.url | relative_url }}">{{ chapter.chapter }}. {{ chapter.title }}</a></li>
{% endfor %}
</ol>
