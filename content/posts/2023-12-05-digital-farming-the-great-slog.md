---
author: Jared Sulzdorf
type: post
title: "Digital Farming: The Great Slog"
date: 2023-12-05T09:51:17-08:00
url: 2023/12/05-digital-farming-the-great-slog
categories: "Hugo"
---

If you use a computer, you are a digital farmer. Maybe you are tending to your garden of emails. Perhaps you are pruning your digital catalog of photos. If you're particularly advanced, you might be moving around old flower beds as you refactor a codebase.

Whatever it may be, you are now the proud manager of a digital landscape. It doesn't matter if this farm produces for you (although for many people it's their lifeblood); the tending must happen regardless lest the weeds run amuck. This the the great slog. Our systems, our digital gardens, they require constant vigilance and cleaning. You can put it off, but avoiding it entirely is not a winning strategy.

My gardening today consisted of a variety of small tasks around the blog.

<!-- more -->

A few months ago [I migrated this site from WordPress](https://www.jsulz.com/2023/11/11/why-hugo-why-not-wordpress/), the only home it's known, to [Hugo, a delightful static site generator written in Go](https://gohugo.io/). Since then, I've been chipping away at a small task list for the site, including adding category archive pages that more closely mirrored the WordPress taxonomy archive pages, updating some minor bits of metadata, and updating styling as needed.

Today I did the thankless task of cleaning up a bunch of old content on the site. First off, I noticed that my Gist embeds were broken. This is because they used to be on a WordPress installation where the raw URL to a gist was processed and content automagially embedded. [I wrote a post about it](https://www.jsulz.com/2016/01/28/oembeds-and-wordpress/) in what seems like another life. [Hugo has some nice shortcodes](https://gohugo.io/content-management/shortcodes/#gist)for doing something similar, but first I needed to find all of the posts with gists and updated them. Once that was done, it was on to the next thing.

In a similar vein, the site has been up for almost seven years and the gist embeds are surely not the only thing broken. I wanted to see what links on the site were no longer functioning as expected so I installed a lightweight (and free) link checker and ran it against the domain. One of the nice things about writing the site in a text editor was that clicking around to the different pieces of content and updating the broken links was a much less painful task than if I had to click around in a CMS interface. Nice!

The above task unearthed that in my work adding category archive pages, I overlooked the URL structure of the pages. WordPress had used a `category/term-slug` structure, while Hugo was using `/categories/term-slug`. Turns out you can modify this by adding the following to your `hugo.toml|yaml|json` file:

```
[permalinks]
[permalinks.term]
categories = '/category/:slug/'
```

I'm still not totally content with the styling of the theme and it has a few other things that I'm giving a side-eye to (looking at you Bootstrap v.3.4), but for now it's helping me learn a ton about Hugo while I get to write posts. Not a bad tradeoff. But now and then I find things that I can't look past, such as the styling of blockquotes. I wrote a little CSS to update those, all the while bemoaning the fact that I'm no designer.

Aaaaand lastly, I fixed how galleries were working in my last post. "Fixed" might be a bit overkill, but at least now you can see the thumbnails and when you click on the images, the full image pops up. I'm having to do some hacky stuff, so either I'm not fully understanding how it's supposed to work (totally possible) or it's another reason to look into writing my own Hugo theme. Either way, it's working now.

Not bad in an afternoon of digital farming.
