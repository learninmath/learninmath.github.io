---
layout: default
title: 2BPC
permalink: /2bpc/
---

# 2ième Bac. PC

## Liste des chapitres

<ul style="list-style-type: none;">
{% for chapter in site.2bpc %}
  <li>{{ chapter.chapter }}. <a href="{{ chapter.url | relative_url }}">{{ chapter.title }}</a></li>
{% endfor %}
</ul>
