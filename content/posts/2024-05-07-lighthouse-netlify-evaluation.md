---
author: Jared Sulzdorf
type: post
title: "Improving this Feisty Little Blog's Lighthouse Score"
date: 2024-05-08T10:04:38-07:00
url: 2024/05/08/lighthouse-netlify-evaluation
draft: false
categories:
  - "Hugo"
  - "Netlify"
---
The short version of this article goes something like: 
> Improve your Lighthouse score with [this one simple trick](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#defer)!

The longer version is only slightly more complex, and owes much of its simplicity to [Netlify](https://www.netlify.com/) (for providing the simple Lighthouse integration and seamless PR-based workflows to test my changes) and [Hugo](https://gohugo.io/) (for making it easy to tinker around in theme templates).  
<!--more-->
My experience optimizing websites comes largely from my time working as a freelancer and then at [LexBlog](https://www.lexblog.com/). I've worked on a lot of WordPress installations, and seen the myriad of ways to slow down a website. It's reductive to say that most of the pain comes from themes and plugins, but it's also not wrong. Unfortunately, even if you start out with a clean slate, WordPress isn't necessarily the most performant CMS. 

To be fair, on this site, we're cheating. We're using Hugo, which is a static site generator. This means that we're not running a database, we're not running a server-side language with a bunch of round trip requests, and I'm barely using JavaScript. We're serving up static files, and that's pretty much it. Just like the lord intended. This is a huge advantage when it comes to performance. It's also just delightfully simple, which gives me a lot of joy. 

When I turned on the [Lighthouse integration](https://www.netlify.com/integrations/lighthouse/) for this site, I expected to see a pretty good score. I was surprised to see that it was only a 75. A few days ago, I spent some cycles tweaking things, and now it's sitting at 95. 

[Lighthouse](https://github.com/GoogleChrome/lighthouse), for those of you who aren't aware, is a tool that Google provides to evaluate the performance, accessibility, best practices, and SEO of a website. It's simple, standard, and open source. Love it. The reports get into the weeds sometimes, but if this is your gig, then this is the tool to use. For me, it's just a nice, quick way to get a read on the performance of my site.

Every performance improvement came down to how I was loading assets (or if I should load them at all). If there was any single takeaway from this post it's to defer loading of assets (or load them asynchronously).

First off, I kicked Katex off the page. It's not a huge asset, about 77KBs, but also not necessary for this site. Please stop following this blog if I try my hand at math-heavy content. 

Next, I added the `async` and `defer` [attributes to my script tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#defer). This was the single biggest change I made. The `async` attribute tells the browser to download the script without blocking the rest of the page. The `defer` attribute tells the browser to download the script after the page has been parsed. Not doing this was blocking the page from rendering as quickly as it could. 

In a similar vein, I added `display=swap` to my Google Fonts link. This tells the browser to use a fallback font until the Google Font is downloaded. This gives a small content shift once the fonts are loaded in, but it's a small price to pay for a faster page load.

All of these changes were enough to push up the Lighthouse score by 20 points. Something that, depending on the messiness of the WordPress installation, would've taken me..... well, more time. 

While I was at it, I took a swing at some minor accessibility issues. I updated the viewport meta tag to have a maximum scale of 5 instead of 1.0 and updated the color of the `.post-meta` class to provide a better contrast ratio. These two changes pushed the accessibility evaluation in the Lighthouse report up to 96.

All in all, not a bad day of digital farming.