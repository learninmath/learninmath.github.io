---
layout: default
title: 1BSE
permalink: /1bse/
---

# 1ère Bac. Sciences Expérimentales

## Liste des chapitres

<ul style="list-style-type: none;">
{% for chapter in site.1bse %}
  <li>{{ chapter.chapter }}. <a href="{{ chapter.url | relative_url }}">{{ chapter.title }}</a></li>
{% endfor %}
</ul>
