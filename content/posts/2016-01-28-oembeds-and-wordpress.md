---
title: oEmbeds and WordPress
author: Jared Sulzdorf
type: post
date: 2016-01-29T03:35:14+00:00
url: /2016/01/28/oembeds-and-wordpress/
categories:
  - WordPress

---
The [oEmbed standard][1] is a wonderful development if you&#8217;ve ever had to struggle with taking clunky `<script>` tags or `<iframe>` embeds and add them to a piece of content. Essentially, the technology makes it possible for a consumer (that&#8217;s you!) to add a request, usually in the form of a link, to the provider (such as YouTube or Twitter) so that a piece of rich media can be displayed within a webpage. In layman&#8217;s terms, it means that to embed a YouTube video on a WordPress site, all you have to do is add a link to the post, and voila! You have Rick Astley, making sure you know he&#8217;s never gonna give you up.



In WordPress, this standard has been implemented in a pretty slick fashion. Not only does WordPress do all the heavy lifting for you in recognizing when a request is to a known oEmbed provider ([you can check out the list of &#8220;whitelisted&#8221; providers that WordPress supports in the Codex][2]), but the UX for actually adding an oEmbed to a post is fantastic.

<!--more-->

As of WordPress 4.0, when adding a link to any of the registered oEmbed providers in the [TinyMCE][3] that ships with WordPress, you can see the embed come to life in the editor itself! Without even hitting publish! Magical place, the internet is.

Beyond that, WordPress also provides some great ways to add oEmbed providers yourself. For instance, after updating LexBlog&#8217;s version of core several months ago, our clients noticed that `<iframe>` code was being stripped by the post editor. This was happening for a variety of reasons (primarily security), but for one client, it was vital that a particular service be embedded. Fortunately, that service, while not registered explicitly by WordPress, was an oEmbed provider, and core supports two great ways of registering oEmbed providers (or supporting various embeds) yourself &#8211; `wp_oembed_add_provider()` and `wp_embed_register_handler()`. The first &#8211; `<a href="https://codex.wordpress.org/Function_Reference/wp_oembed_add_provider">wp_oembed_add_provider()</a>` &#8211; is very simple and beautiful in that it allows you to register a service that already supports the oEmbed spec. The  `<a href="https://codex.wordpress.org/Function_Reference/wp_embed_register_handler">wp_embed_register_handler()</a>` is slightly more complex in that you have to build the embed pattern within PHP, using a newly created filter that runs over a string &#8211; typically a URL &#8211; and dynamically builds the embed code for you without having to deal with the clunky approaches I mentioned above.

For example, I recently worked on this fine function:

{{< gist jsulz f0dcd950d3c7b1d85620 >}}

that allowed me to add support for Github gists as an embed provider! Now, anyone on the LexBlog network with the oEmbed Whitelist plugin activated could feasibly add links to GitHub gists of their own.

What&#8217;s that you say? No lawyer will ever use it? To that I scoff. Git is a fantastic tool for version control and in a community that lives and breathes on keeping track of changes to legal documents and records, it seems like the legal profession has a natural path to a software like Git. In fact, one of LexBlog&#8217;s clients, Fenwick & West, [was covered by Wired][4] when they posted a set of legal documents to GitHub that startups could tap into when seek venture funding.

In short, yet another wonderful example of why WordPress is a great platform to build from &#8211; the flexibility and functionality that a developer can leverage is unmatched and is only growing.

 [1]: http://oembed.com/
 [2]: https://codex.wordpress.org/Embeds
 [3]: https://www.tinymce.com/
 [4]: http://www.wired.com/2013/03/series-seed/