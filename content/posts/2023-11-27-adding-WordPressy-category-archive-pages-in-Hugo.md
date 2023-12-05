---
author: Jared Sulzdorf
type: post
title: "Adding WordPress-y Category Archive Pages in Hugo"
date: 2023-11-27T10:35:09-08:00
url: /2023/11/27/adding-wordpressy-category-archive-pages-in-hugo
categories: "Hugo"
---

After [taking this site off WordPress](/2023/11/11/why-hugo-why-not-wordpress/), I've continued to chip away at a task list to make sure all of my desired bells and whistles are in place. This week, the task was setting up my categories to be more like what I'm used to.

<!--more-->

Like WordPress, Hugo supports [tags and categories out of the box](https://gohugo.io/content-management/taxonomies/#default-taxonomies). Also like WordPress, the ability to take advantage of these taxonomies is a function of how the content presentation layer (i.e., your theme) presents this metadata.

In this case, the theme I choose while migrating from WordPress to Hugo had fairly limited support for this use case. There is a [default template for taxonomy at `terms.html`](https://github.com/halogenica/beautifulhugo/blob/master/layouts/_default/terms.html) which displays an accordion for each term (e.g., a category) that when clicked expands to show the posts associated with the term. [Here's an example of that in action](https://hugo-theme-beautifulhugo.netlify.app/tags/).

What I wanted was a more robust archive page for each term that showed the posts associated with that term, including the post preview (title, post metadata, introductory snippet, etc.). Fortunately, this was a relatively straightforward task.

I started by creating a new template in `layouts/taxonomy/category.html`. I chose the location from the [lookup order for term pages in the Hugo docs](https://gohugo.io/templates/lookup-order/#term-pages). It was somewhat arbitrary as there is an ordered lookup of potentially 40 locations; I selected the one I liked and moved along.

I populated the template with the basic structure that I wanted, taking the current layout of the `index.html` template that shows all of the posts on this site in reverse chronological order and updating the query to use `.Data.Pages` (which are all of the pages for the given Node; in this case all of the pages for the given taxonomy).

Then, I updated the `post_meta.html` partial to include all of the category terms associated with a post so that readers could easily see where the post was organized and go to a category archive page if they were interested. Add in some light styling, testing to make sure that things were working as expected (for instance, this post is organized under the ["Hugo" category](/categories/hugo/)), and we're all done!

Also learned in today's Hugo session:

- I use the [Hugo CLI](https://gohugo.io/commands/) to create new posts in the `content/posts/` directory of the site. Today, I found that if I want to have the `hugo new content` command respect the front matter type and format that I want, I need to leverage [archtypes](https://gohugo.io/content-management/archetypes/).
- To help speed up my content management flow, I added an archetype for my posts. The front matter contains entries for me as the author, the title, date, and URL of the post, as well setting the post to a draft status.
