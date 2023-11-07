---
title: Building a Legal Blogging Platform
author: jared
type: post
date: 2017-01-05T01:22:19+00:00
url: /2017/01/04/building-legal-blogging-platform/
lxb_af-post_meta-admin_post_thumbnail_html-position:
  - lxb_af-grid-align-none
categories:
  - LexBlog

---
I&#8217;ve spent a lot of time over the past year wrapping my mind around what it means to build a content management platform for lawyers. For nearly a year and a half, [LexBlog][1] has completely turned our model of delivery on its head, and shifted our focus from a project-to-project business, to one that focuses on developing new products. As you may guess, the cost of this shift has not been small.

<!--more-->

We&#8217;ve invested thousands of man hours toward a new options-based theme that all LexBlog customers use while not skipping a beat on design flexibility and style. Our ticketing and project management systems are now centralized (and using more modern software), providing more consistency and support to our customers and visibility for our Success Team. And various methods of delivery are under constant iteration as we take the process of starting and launching a blog with LexBlog from 30-50+ hours of work, to a handful of hours, and slowly empower our clients to take the wheel themselves to successfully start writing on our network.

All of this work has been crucial to our success as a company, and vital to make a successful shift, but it wasn&#8217;t until this past week that I&#8217;ve felt a significant difference; a wind in my sails, if you will. On Tuesday, after a long New Year&#8217;s weekend, our very own Angelo Carosio (@toastercookie for those of you into [Twitter][2] and [Soundcloud][3]) deployed a tool that he and our Art Director, [Brian Biddle][4], had worked on earlier in the fall/winter of 2016. This tool adds a few new buttons to various areas of the post editor of all LexBlog blogs with the goal to provide each and every blogger on our network with the tools necessary to find and cite cases and link to them in a way that readers can easily access.

This tool, developed using a component of the [Fastcase][5] API and with assistance from the Fastcase team, represents a continuation of a philosophical (the notion of opening up the law to lawyers and consumers) and technical (building, delivering, and supporting products through technology and top-notch support) shift here at LexBlog.

Let&#8217;s say that I want to link the text [Roe v. Wade][6] to the full text of the case itself &#8211; that&#8217;s made possible through this integration. The link takes you to a publicly available page hosted by Fastcase that includes the case in its entirety. I used the &#8220;Look up citation&#8221; route to find this case, but the interface supports a general search of the Fastcase database, so if you&#8217;re interested in finding a specific citation/link to a case that discusses, say, Eastlake, Seattle (where I live), well, that&#8217;s possible too.

This wouldn&#8217;t be possible without piggybacking off of Fastcase&#8217;s APIs, and as you may be able to tell, the &#8220;Search for a case&#8221; feature actually chains together a few different components of that API where we first run a search to get back all of the existing citations for a phrase/term, and then take that citation and get the link after a user interacts with the &#8220;Use Citation&#8221; or &#8220;Use Link&#8221; button(s).

All of this is part of an effort to take a rather onerous workflow for many of our customers right now, where they have to hunt down a document or resource online or in a separate researching platform and, if they&#8217;re lucky, link to it in their post. More likely, they have to do all of that searching **and **download the document as a PDF, and upload it to their blogs. Meanwhile, their readers have to open this document in a browser or mobile device which isn&#8217;t the friendliest of experience. Our hope is that by providing the tools to conduct some very basic legal research inside our platform, we can encourage authors to continue to write informative posts and make their take on the law accessible to current and potential clients in a way that is open and free to all.

 [1]: https://www.lexblog.com/
 [2]: https://twitter.com/toastercookie
 [3]: https://soundcloud.com/toastercookie
 [4]: https://twitter.com/biddlebugs
 [5]: http://www.fastcase.com/
 [6]: https://apps.fastcase.com/Research/Public/ExViewer.aspx?LTID=%2baBi7sv0oOo2ELhR%2bhVm%2ffpr0GttFk4FcnWwXK%2fCAByeHppu6fNThADXafnT3Tc0