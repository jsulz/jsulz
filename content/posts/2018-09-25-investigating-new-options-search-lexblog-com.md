---
title: Investigating New Options for Search on LexBlog.com
author: jared
type: post
date: 2018-09-25T19:25:27+00:00
url: /2018/09/25/investigating-new-options-search-lexblog-com/
LXB_MCT_Immediate_Send:
  - publish_without_sending
LXB_MCT_Immediate_Send-publish_without_sending:
  - 1537889128
lxb_af-post_meta-admin_post_thumbnail_html-position:
  - lxb_af-grid-align-none
dsq_thread_id:
  - 6932220246
dsq_needs_sync:
  - 1
lxb_af-post_meta-lxb_af_page_template-layout:
  - lxb_af-default
categories:
  - LexBlog

---
Updating LexBlog.com&#8217;s aggregation engine was no small feat. [Scott Fennell][1] and I spent months testing all of the various components of our new aggregation engine that powers the vast majority of the site, but something that was hard to prepare for was the shear scale of the site. Now that it&#8217;s up an running, we&#8217;re learning a lot about how to manage a site like this, and what sorts of features are necessary for it to be a successful publication from the perspective of an editor or reader.

One thing that I&#8217;ve recently keyed in on is search. Normally, I would tell a client that on-site search is not important. Most visitors are coming to a site from a much better search engine (Google), and are more apt to click around the site once there. LexBlog has layered in some nice features to the standard WordPress search, but most of those are around making sure that readers can search by an author&#8217;s name when they&#8217;re on a blog or website. This seems like a thing WordPress should do by default, but the generic WordPress search is &#8220;dumb&#8221; in the sense that it only looks to the post content and post title when running a search. Authors are not in either, so some work had to be done to support searching an author&#8217;s name and getting their posts.

<!--more-->

In any case, the on-site search is &#8220;good enough&#8221; for most readers, and most sites aren&#8217;t the size of [LexBlog.com][2]. However, [LexBlog.com][2] is big. Very big. There are nearly 400,000 posts and 20,000 users on the site. The results that are returned by WordPress with what is essentially a `LIKE %query%` SQL statement does a disservice to anyone that waits around for the page to load (a search on LexBlog.com right now can take anywhere from 10-15 seconds to return a page).

While a very small percentage of visitors to [LexBlog.com][2] use the on-site search feature (only about 2% of all page views are to a search results page), the relationships that we&#8217;ve layered in to each post and user make search a potentially very attractive feature on the site. We could support advanced searches by organization, site, author, and date as opposed to a generic text search against all of the content. Moreover, the speed issues alone make me long for a better solution on the site.

Enter [Elasticsearch][3]. Elasticsearch is a product from Elastic.co; [if you haven&#8217;t heard their story before, it&#8217;s worth the read][4].

I have looked at a variety of alternative search technologies for WordPress before this, including:

  * [SearchWP][5]
  * [FacetWP][6]
  * [Google Site Search][7] (now deprecated)
  * [Algolia][8]

But I continue to come back to Elasticsearch for a number of reasons:

  * It&#8217;s cost effective
  * Easy to scale and manage
  * Has a wonderful, developer-friendly WordPress plugin &#8211; [ElasticPress][9] &#8211;  built by a team of people &#8211; [10up][10] &#8211; that I trust to continue to maintain and iterate said plugin

This weekend, I took Elasticsearch/ElasticPress for a spin on [LexBlog.com][2]&#8216;s staging environment, and the results were surprising. Most keyword searches were 3-5 times faster (again, that speed difference alone is enough for me to favor Elasticsearch over WordPress&#8217;s search). Here&#8217;s a view of how long it takes for someone to search for &#8220;Kavanaugh&#8221; on LexBlog.com&#8217;s production environment:

<figure id="attachment_2292" aria-describedby="caption-attachment-2292" style="width: 1904px" class="wp-caption aligncenter"><img decoding="async" loading="lazy" class="wp-image-2292 size-full" src="https://jared.lexblogplatform.com/wp-content/uploads/sites/10/2018/09/Screen-Shot-2018-09-25-at-12.12.37-PM.png" alt="" width="1904" height="1002" /><figcaption id="caption-attachment-2292" class="wp-caption-text">Over 13 seconds!</figcaption></figure>

and here&#8217;s what it looks like in staging:

<figure id="attachment_2293" aria-describedby="caption-attachment-2293" style="width: 1902px" class="wp-caption aligncenter"><img decoding="async" loading="lazy" class="wp-image-2293 size-full" src="https://jared.lexblogplatform.com/wp-content/uploads/sites/10/2018/09/Screen-Shot-2018-09-25-at-12.12.30-PM.png" alt="" width="1902" height="994" /><figcaption id="caption-attachment-2293" class="wp-caption-text">Just over 4 seconds &#8211; much better 🙂</figcaption></figure>

More than speed, though, Elasticsearch&#8217;s queries are optimized for searches in a way that WordPress is not. As I mentioned, WordPress searches post content and titles, but Elasticsearch/ElasticPress expands that to include taxonomies (tags, categories, and custom taxonomies) and bylines.

WordPress also has a very weak algorithm for the keyword search itself. Without going into too much detail, it performs a relatively exact search of the query so that misspellings or typos that may occur when you&#8217;re on a mobile device (or if you&#8217;re like me, whenever you&#8217;ve been staring at a screen for more than 10 hours) are treated like you meant to search for that exact phrase. Elasticsearch performs &#8220;fuzzy matching&#8221;, which looks for variations on the keyword that you&#8217;ve searched. For example, if you&#8217;re interested in the Stop Online Piracy Act &#8211; SOPA &#8211; you might search &#8220;SOPA&#8217;s enforcement.&#8221; However, maybe you&#8217;re feeling lazy that day and don&#8217;t want to type in the apostrophe, so you search &#8220;SOPAs enforcement.&#8221; Elasticsearch is smart enough to return results for the Stop Online Piracy Act/SOPA whereas WordPress returns only results where the text was literally &#8220;SOPAs enforcement&#8221;; so only instances where the author made the same &#8220;typo&#8221; that you did!

While it seems like Elasticsearch may be winning the day at LexBlog, it&#8217;s still something for us to explore in more depth. As with all updates to a site, many people have a voice (including the readers) and we&#8217;re still waiting to see how they (and we) value search.

 [1]: https://www.linkedin.com/in/fennellscott/
 [2]: https://www.lexblog.com/
 [3]: https://www.elastic.co/products/elasticsearch
 [4]: https://www.elastic.co/about/history-of-elasticsearch
 [5]: https://searchwp.com/
 [6]: https://facetwp.com/
 [7]: https://enterprise.google.com/search/products/gss.html
 [8]: https://community.algolia.com/wordpress/
 [9]: https://github.com/10up/ElasticPress
 [10]: https://10up.com/