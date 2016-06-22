---
layout: page
title: Examples
permalink: /examples
menu: main
---

----------------

Print props of the website based on YAML, for example, the site title: `{{ site.title }}`.

Loop through a list of pages:

<ul class="list-unstyled">
  {% for page in site.pages %}
    <li><a href="{{ page.permalink }}">{{ page.title }}</a></li>
  {% endfor %}
</ul>

Or a list of posts:

<ul class="list-unstyled">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      (posted on {{ post.date | date: "%b %-d, %Y" }})
    </li>
  {% endfor %}
</ul>
