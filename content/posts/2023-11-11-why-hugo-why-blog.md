---
author: Jared Sulzdorf
type: post
title: 'Why Hugo, Why Not WordPress'
date: 2023-11-11T08:31:10-08:00
url: /2023/11/11/why-hugo-why-not-wordpress/
categories:
  - "Hugo"
---
My first tour of the WordPress admin was in 2009 ([version 2.8 - Chet Baker](https://wordpress.org/documentation/wordpress-version/version-2-8/)). In my four years of freelancing after college, I dug through and created countless themes and plugins. After moving to Seattle, I ran product development at [LexBlog](https://www.lexblog.com/), a digital publishing company where WordPress was front and center. In the past two years, I worked at [Pantheon](https://pantheon.io/), a WebOps company supporting Drupal and WordPress website teams.

In sum, WordPress is a large part of my life.

Even now, as I make the decision to walk away from the WYSIWYG editor that is closest to my heart, I know it will remain a large part of my life. If not in my day-to-day, then in my memories. 

<!--more-->

The first post on my blog was [Why Blog? Why WordPress? Why LexBlog?](https://www.jsulz.com/2016/01/13/why-wordpress-why-lexblog-why-blog/) In it, my goal was to extol the virtues of the software and begin using the same platform that the LexBlog customers used.

For many people beginning their digital journey, the question of "Why WordPress" never crosses their minds. Over [40% of the web leverages WordPress](https://w3techs.com/technologies/details/cm-wordpress), and while the rate of growth is in decline, the CMS has made an indellible mark on the internet. It's made that mark through ease of use, extensibility, and a vibrant, welcoming community. I don't see any of those things changing soon. 

But for me, the question of "Why WordPress?" was getting more difficult to answer. For one, the hosting options for a WordPress blog are not compelling. I would prefer to have access to tinker with my site with modern, easy-to-use tools. This puts me out of the category of site owners that end up on WordPress.org and into the market of "hosting companies" with low costs and equally low product/customer support quality or "platforms" with high costs and a suite of products that far outstrip my needs. 

Additionally, WordPress and I are just not well matched. I would prefer to  write my blog posts in a text editor with Markdown and manage the history of my entire site with Git. I don't need a webpage that is dynamically drawn with custom templates, content types, and all the complexity that WordPress (or other CMSs) can support. 

I need simplicity that I can touch. Something that can manage a modest number of posts that will contain simple pieces of content with images, common HTML elements, code snippets, and the occassional `oembed`, but that will allow me to quickly dig into the templates and code for the sheer fun of it all. Something that won't require me to use container for every local change I wanted to preview. 

Enter: [Hugo](https://gohugo.io/). Hugo is a lightweight static-site generator written in Go. It's flexible, easy to learn, and I can host it on Netlify for free (so long as my writing habits don't exponentially grow). Developing on it locally is a breeze. The community behind it is thriving and growing. Builds on Hugo are incredibly fast. Migrating from WordPress to Hugo is a blazed trail (or paved path, whichever idiom you prefer). 

In a few afternoons of work, I was able to take my site off WordPress and bring it over to the world of Jamstack sites. Tinkering with the CSS for my theme (I'm using [Beautiful Hugo](https://github.com/halogenica/beautifulhugo)) was the most painful part. 

I have a lot more work to do (my category archive pages are tanked at the moment, and I'm sure I've lost some SEO juice in the move that I'll need to build back up), but for now I'm enjoying this new, simple world. 