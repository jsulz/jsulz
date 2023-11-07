---
title: RSS Doesn’t Stand for “Really Should be Standard”, but Maybe It Should
author: jared
type: post
date: 2018-04-19T00:28:00+00:00
url: /2018/04/18/rss-doesnt-stand-for-really-should-be-standard-but-maybe-it-should/
lxb_af-post_meta-admin_post_thumbnail_html-position:
  - lxb_af-grid-align-none
categories:
  - LexBlog
  - WordPress

---
Like many technical specifications on the web, [RSS (which stands for Rich Site Summary or Really Simple Syndication depending on who you talk to)][1] has a confusing history that seems to only get more confusing as time goes on. The format became popular in the late 1990&#8217;s as the need to standardize information held on websites became a pressing concern with the rise of blogging and dynamic websites. The influx of information and content, all organized in different ways, was exciting, but without a standard way to consume the content, you were left with just a few options:

  * Bookmarks, and lots of them
  * Memorize a handful of URLs and visit only those sites
  * Build a [custom web scraper][2]

The goal of RSS (as I see it) was to provide each site that created dynamic content a specification to follow to make that content available at some address so the rest of the internet community could easily monitor this address for updates. For example, this blog&#8217;s RSS feed is available at <https://www.jsulz.com/feed/>. You can take this URL and drop it in [Feedly][3] or your RSS reader of choice and every new post I publish will end up there alongside any other blogs you regularly read.

<!--more-->

My introduction to RSS feeds was through [Google Reader][4], a feed aggregator similar to Feedly that provided users with a way to compile compendiums of publications and read them all in one place. While aggregation and syndication are the most often cited reasons for using RSS, the use-cases extend much further beyond that. In my mind, RSS&#8217;s purpose runs parallel to one of the foundational reasons for the internet&#8217;s existence: Communication.

Even with [WordPress dominating the online content management game][5] there are still hundreds of systems, all with their own way of structuring webpages and publishing content. Without a standard way to consume this content, each post, page, update, or product stands to get lost in a sea of information. The RSS specification does away with all the page markup, styles, forms, etc and focuses on structuring the content so that it&#8217;s easily accessed. Without a standard for communication, there is no way to communicate.

As [LexBlog opens its doors to legal blogs and digital publications around the web][6], my belief that RSS is a standard component of content management systems is being challenged. We&#8217;ve found blogs that don&#8217;t have RSS feeds, publications with RSS feeds that contain only the name of the site or a handful of posts, and just about everything in-between. I understand that technologies change and that a site built in 2004 may not have considered RSS a core part of blogging (although I may have some questions about why a site delivering dynamic content is being run on the same platform in 2018), and I get that making a piece of technology do something that it wasn&#8217;t designed to do is difficult. That said, people charged with managing content on the web are admitting to serious negligence if their publications don&#8217;t have an RSS feed and they aren&#8217;t doing something for their organizations (or clients) to change that.

It&#8217;s unfortunate that at a time when internet technologies have taken off and valuable content is around every corner, that technologists have eschewed standards designed to make that content available. As I wrote this, [I was reminded of a recent post by Boone Gorges][7]:

> The more worrisome trend is content that&#8217;s not available through RSS simply because there&#8217;s no feed mechanism. A shamefully large number of my geekier aquantainces have moved their blogs to Jekyll and other static-site-generation tools, which don&#8217;t appear to have feed support out of the box; and – this is the &#8220;shameful&#8221; part – since these folks, geeky as they may be, think so little of RSS, they don&#8217;t bother setting up the secondary plugins or whatever necessary to serve feeds. I expect that kind of behavior from lock-up-my-content companies and technically-clueless organizations that rely heavily on proprietary and bespoke software, but not from people who ought to know better.

Could not have said it better myself.

 [1]: https://en.wikipedia.org/wiki/RSS
 [2]: https://en.wikipedia.org/wiki/Web_scraping
 [3]: https://feedly.com/
 [4]: https://en.wikipedia.org/wiki/Google_Reader
 [5]: https://w3techs.com/technologies/overview/content_management/all
 [6]: https://www.lawsitesblog.com/2018/04/lexblog-opens-news-network-legal-bloggers.html
 [7]: https://teleogistic.net/2018/03/19/dont-forget-the-feed/