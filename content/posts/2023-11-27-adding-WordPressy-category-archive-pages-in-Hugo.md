---
author: Jared Sulzdorf
type: post
title: 'Adding WordPressy Category Archive Pages in Hugo'
date: 2023-11-27T10:35:09-08:00
url: /2023/11/27/adding-wordpressy-category-archive-pages-in-hugo
draft: true
categories: "Hugo"
---

- Create a new template in `layouts/taxonomy/category.html`
- Populated that new template with the structure that I want
- Relied on https://discourse.gohugo.io/t/listing-content-with-the-same-taxonomy-term/3323/3 to grab the right data element
- https://gohugo.io/content-management/taxonomies/
- https://gohugo.io/templates/taxonomy-templates/#list-terms-assigned-to-a-page 
- Some light styling

Also learned in today's Hugo session:
- I use the [Hugo CLI](https://gohugo.io/commands/) to create new posts in the content/posts/ directory of the site. Today, I found that if I want to have the `hugo new content` command respect the front matter type and format that I want, I need to leverage [archtypes](https://gohugobrasil.netlify.app/content-management/archetypes/)
    - To help speed up my content management flow, I added an archetype for my posts. The front matter contains entries for me as the author, the title, date, and URL of the post, as well setting the post to a draft status. 