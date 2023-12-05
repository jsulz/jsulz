---
title: Selenium, Python, and Managing Hundreds of Blogs
author: Jared Sulzdorf
type: post
date: 2016-02-17T04:17:53+00:00
url: /2016/02/16/selenium-python-managing-hundreds-blogs/
categories:
  - LexBlog
  - Quality Assurance
---

Here at LexBlog, we build, launch, and support a lot of WordPress websites and blogs. In many ways, that&#8217;s almost all we do! There are certainly other day-to-day tasks that the technical team takes on, but without a doubt, our most pressing responsibility to our clients is ensuring the stability and availability of their digital properties. This is especially true given that our clients, with the unique position that they have, are often suited to write in-depth analyses faster and more proficiently than a journalist or general content producer, but all that is for naught if their blog is inaccessible.

This is why I take the maintenance of our many sites incredibly seriously. When we perform plugin updates, the update is reviewed by a member of our development team (often a product manager like myself or a developer), a fully replicated staging environment is utilized for smoke testing, and each site is backed up before the update takes place. Unfortunately, when you&#8217;re talking about hundreds of sites that make use of various (and endlessly shifting) plugin components and themes, that&#8217;s just not enough. Fortunately, we&#8217;ve developed a few tricks up our sleeves that greatly simplify matters.

<!--more-->

The most reliable method of testing an update is [unit testing][1]. For many software developers, unit testing is an old trick, but for the WordPress community, it&#8217;s a (relatively) new part of the standard development workflow. We&#8217;ve begun to the test driven development (TDD) workflow on the LexBlog product team, but even that isn&#8217;t enough. An update to a plugin can pass it&#8217;s own unit tests with flying colors, but cause issues for another, interrelated piece of code.

For us, the best practice is to test once and then test again &#8211; the &#8220;trust but verify&#8221; mentality. We make use of our staging environments, sure, but we&#8217;re also beginning to use unit tests. We back up our production environments before updating, sure, but we also perform extensive in-browser visual and functional regression tests, which is where the title of this post comes to play.

Recently, I began to dabble in Selenium as a way to verify that our updates and third-party updates (such as plugin or WordPress core updates) were not causing issues for our clients. With over five years of extensive WordPress development and platform management under our belts, I knew that retrofitting each plugin to use unit tests was an insurmountable task and, as I already mentioned, fraught with holes and assumptions.

In stepped Selenium. [Selenium][2] is a piece of software, written in Java but with bindings for languages like Python (what I use), PHP, JavaScript, and Ruby, that allows developers like myself to automate simple tasks in the browser. In conjunction with a testing framework like JUnit for Java or [pytest][3] (my framework of choice) for Python, you can establish a system by which you send a browser to perform a task (like going to a URL or entering information in a form) and validate the existence or absence of certain elements in the document or responses to actions.

Let&#8217;s say, for example, that you, like us here at LexBlog use [WordPress SEO by Yoast][4]. You know that the development cycle of that plugin is rapid, and sometimes there are breaking changes. Unfortunately, when you update the plugin, each time you feel it necessary to go to each page of the settings pages and each template on the front end of the site, to ensure that nothing has broken. Now imagine you have to do this for several hundred, perhaps a thousand or more sites. What a drag.

For the purposes of this example, we&#8217;ll assume you only need to test the title tags on the homepage of your site (we&#8217;ll use this site as the example in our code below). Before you update, you can (after [downloading][5] [just a handful][6] of dependencies and libraries &#8211; I highly advise reading through a fair amount of documentation and tutorials before getting going) run this bit of code:

{{< gist jsulz f1ecfbf3a1dfc8489033 >}}

This visits a URL, uses the title property from the driver object, saves that value to a variable, and then writes that information to a CSV. If you have several dozen or hundreds of sites, you would simply save all of those URLs to a list, iterate over it, and save the resulting CSV. Then, when you upload, you can simply run this script again, and compare the results.

This is admittedly a rudimentary example &#8211; you can send a Selenium driven browser to do just about anything. Fill out and submit forms, perform simulated user actions in your application &#8211; anything that a person can do, you can code Selenium to do as well. At LexBlog, we&#8217;ve taken functional testing and assertions to another level by integrating visual regression testing in our workflow as well. Along with tests for every plugin, we also make use of the [Applitools][7] SDK to set a visual baseline of how a settings page or front-end element looks prior to an update and compare it to how things look after. Coupled with the [Saucelabs API][8], we can run automated tests against dozens of OS/browser and device configurations, allowing us to feel safe when performing an update or deploying a feature across the several multisite networks that we manage.

While these many layers of testing can feel like a lot in the midst of an update, the peace of mind that comes from knowing a client&#8217;s site is safe and sound (along with your inbox) is priceless. For myself, it&#8217;s also a matter of personal pride knowing that our clients have access to their publishing platform at nearly all times, letting them reach their audience without having to worry about security or a broken site.

[1]: https://make.wordpress.org/core/handbook/testing/automated-testing/
[2]: http://www.seleniumhq.org/
[3]: http://pytest.org/latest/
[4]: https://wordpress.org/plugins/wordpress-seo/
[5]: https://pytest.org/latest/getting-started.html
[6]: http://selenium-python.readthedocs.org/installation.html
[7]: https://applitools.com/
[8]: https://wiki.saucelabs.com/
