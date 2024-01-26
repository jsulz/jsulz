---
author: Jared Sulzdorf
type: post
title: "Making the Most of My Netlify Setup"
date: 2023-12-12T10:46:48-08:00
url: /2023/12/12/making-the-most-of-my-netlify-setup
categories:
  - "Hugo"
  - "Netlify"
---

Along with learning about Hugo, I'm also digging through Netlify as a customer for the first time. This isn't my first time examining their offering. As a product manager at [Pantheon](https://pantheon.io/) working on the [Front End Sites product](https://pantheon.io/features/decoupled-cms), they were a platform that was definitely on my radar.

In November 2023, I left Pantheon and, as I did so, took my blog off WordPress for good. Over the years, this content has lived on [WP Engine](https://wpengine.com/), [GoDaddy](https://www.godaddy.com/), and Pantheon. Now that I was venturing off WordPress platforms, it was both freeing and nerve-wracking. What was the port for this little boat? I knew I wanted to shift to a static site generator, and so [Netlify](https://www.netlify.com/) and [Vercel](https://vercel.com/) were top of mind. Ultimately, Netlify won out as I think their product caters to smaller hobbyist sites, like this one.

<!--more-->

Now that I've been over here for a few weeks, I wanted to stretch my legs a bit and take advantage of running this site through Netlify's platform. [Netlify has been around since 2014](https://en.wikipedia.org/wiki/Netlify), and has carved out a nice space for itself amongst the [Jamstack](https://jamstack.org/) hosts. Like Vercel, it provides a seamless integration to your Git provider so you can commit to a branch and sit back as someone else manages building and deploying the final asset so long as your framework is one of the many that they support. To-date, that's really all I've asked of Netlify, and it's done it swimmingly and without complaint.

This blog is on [Netlify's free tier](https://www.netlify.com/pricing/#core-pricing-table), giving it access to 100GB bandwidth and 300 build minutes a month (the only resources this site will consume). Overall, I think Vercel's platform is more polished and their free tier is probably the better deal, but I wanted an excuse to host something on Netlify and learn these ropes, and this site represented a low-cost way to do just that. Additionally, if I want to scale up the site in any way, Netlify's pricing structure is far more flexible than Vercel's, which gave me some peace of mind.

While there are a variety of add-ons and integrations, today, I just wanted to start doing some rather simple stuff. To start with, I haven't had Google Analytics on the site in a fairly long time, and while I'm not particularly interested in the traffic to the site, after migrating from WordPress to Hugo, I felt a desire to make sure that the site was still being surfaced in search engines. Google Search Console and Google Analytics provide good avenues for those insights, and while I can set up Google Search Console without tinkering with the blog, Google Analytics requires that I inject some JavaScript.

I could do this by adding the `<script>` tags directly to the source, but Netlify offers [a tool called snippet injection](https://docs.netlify.com/site-deploys/post-processing/snippet-injection/), that runs as a post-processing step to your deploy and can put arbitrary JavaScript snippets in the `<head>` or at the end of the `<body>` tags of your site. After setting up Google Analytics, this was incredibly easy. Well done, Netlify.

Next, Google Search Console had identified a few URLs that were no longer indexed, likely a result of changing permalink structure as I migrated content (even though I took care to not futz with too much). Fortunately, [Netlify provides a simple way to manage redirects](https://docs.netlify.com/routing/redirects/) through a `_redirects` file that you can add to the top-level directory in your site. After going through Google Search Console and finding URLs that were broken, I added the `_redirects` file with the proper rules and deployed. Here, I ran into a bit of a problem as Netlify expects the `_redirects` file to be in your [`publish` directory](https://docs.netlify.com/configure-builds/overview/#definitions), which for me is a directory that is in my `.gitignore` as I don't want to version it. So instead, I added the [redirect rules to the `netlify.toml` file](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file) and I was on my way.

The boring and mundane work out of the way, I shifted gears to adding [Netlify's Lighthouse integration that generates a Lighthouse report after every build](https://www.netlify.com/integrations/lighthouse/). My current scores are pretty low given that I'm running a static site, so I have some optimizations ahead of me!

Overall, gotta say that Netlify really impressed me in this round. Everything that I wanted to do, I could do with ease. Great product experience.
