---
layout: default
title: Shortcode Example
permalink: /shortcode-example/
---

# Demonstrating Paired Shortcode Emulation

This page demonstrates how to emulate "Paired Shortcodes" in Jekyll using `{% capture %}` and `{% include %}`.

## Warning Shortcode

Here's an example of a warning box, utilizing the `_includes/warning.html` file.

{% capture my_warning_content %}
This is a **very important warning** that you should pay attention to.
It supports **Markdown** syntax within the captured content.
{% endcapture %}

{% include warning.html content=my_warning_content %}

## Info Shortcode

Similarly, for an info box, using `_includes/info.html`.

{% capture my_info_content %}
This is some helpful information.
- Item 1
- Item 2
{% endcapture %}

{% include info.html content=my_info_content %}

## How it works:

1.  **Capture Content:** The `{% capture my_variable_name %}` and `{% endcapture %}` Liquid tags are used to store a block of content into a variable (e.g., `my_warning_content`).
2.  **Include Layout:** The `{% include your_include_file.html content=my_variable_name %}` tag then renders the `your_include_file.html` partial, passing the captured content to it as a variable named `content`.

This allows for custom, reusable "paired shortcode" functionality without requiring Jekyll plugins.
