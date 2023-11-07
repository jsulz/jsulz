---
title: Gutenberg – The Future of WordPress’s Post Editor
author: Jared Sulzdorf
type: post
date: 2017-06-22T16:08:07+00:00
url: /2017/06/22/gutenberg-the-future-of-wordpresss-post-editor/
categories:
  - LexBlog
  - WordPress

---
This post was written using [Gutenberg][1], the code name for the WordPress core team&#8217;s effort to [overhaul the WordPress post editor][2].

One of the things that we strive to do at LexBlog is help data drive decision making processes. The fetishization of data in business is somewhat akin to the fetishization for new specs and frameworks in development, but data is still a helpful tool (just like [arrow functions in ES6][3]) and should not be ignored. And so we track actions in the admin &#8211; clicks, navigating to a certain page, performing an action &#8211; all the data that a product manager like myself craves. One thing I&#8217;ve noticed in watching how our customers use the LexBlog platform is that people post. A lot.

That simple fact shouldn&#8217;t be surprising. We run a network of digital legal publications. Lawyers are trained writers, so they write constantly. Basically, if you give a lawyer a blog, be prepared to see them log in, go to Posts -> Add New, and begin writing away. So when I heard that Matt Mullenweg [included the editor in the list of primary focuses for the core team][4], my interest was piqued. When I saw [Aaron Jorbin&#8217;s post on using Gutenberg][5] last night, I had to try it out for myself.

<!--more-->

My first impression is that it&#8217;s pretty and unobtrusive, two things that the current post editor is not. If you take a look at the post editor page that I&#8217;m used to seeing:

![](/img/post-editor.png "")

and compare it to Gutenberg&#8217;s post editor:

![](/img/gutenberg.png "")

it&#8217;s pretty easy to see the difference.

Gone are the countless meta boxes (although, as Jorbin points out, if developers have to find a new way to hook in meta boxes it&#8217;s gonna be interesting) and WYSIWYG buttons on a monolithic TinyMCE instance. Replacing them is a clean white screen with just a few buttons.

It&#8217;s when you start interacting with Gutenberg that it comes to life. Each click or hit of the return key triggers the UI to give you options for adding content blocks (Gutenberg is built on the notion of content blocks – an image is a content block, a blockquote is a content block, an embed is a content block) and you can add them to your post by clicking &#8220;Insert&#8221; or a small &#8220;+&#8221; icon that appears on the left hand side of the post, under each block. Doing so, gives you a plethora of blocks to add.

![](/img/content-blocks.png "")

The fun thing about this notion of content blocks, is that it&#8217;s easier to make things look pretty! To the left, you&#8217;ll see a screenshot of all the options for adding a new content block, and each block comes with it&#8217;s own set of options.

An unexpected part of using Gutenberg was finding just how much I had to relearn. I found myself struggling to add an image and unordered list as my cursor couldn&#8217;t help itself but to go to the top of the editor in search of an &#8220;Add Media&#8221; or bulleted list button.

And not surprisingly, there are a fair number of UI quirks and bugs that have to be ironed out. Gutenberg is definitely a work in progress, and while it&#8217;s work that web developers have been doing for years (Medium has a similarly slick editor UI), it&#8217;s all new to WordPress.

It&#8217;s difficult to distill my thoughts about Gutenberg in a single post, so I won&#8217;t even try. What I will do, however, is write every post in Gutenberg from here on out. That&#8217;s going to mean a lot of local drafting and CMD + C & CMD + V&#8217;ing, but if this is the future of the post editor, then I want to see it on a regular basis.

 [1]: https://wordpress.org/plugins/gutenberg/#description
 [2]: https://wordpress.github.io/gutenberg/
 [3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 [4]: https://make.wordpress.org/core/2017/01/04/focus-tech-and-design-leads/
 [5]: https://daily.jorb.in/2017/06/random-thoughts-on-gutenberg/