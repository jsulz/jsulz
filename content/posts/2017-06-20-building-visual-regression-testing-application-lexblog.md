---
title: Building a Visual Regression Testing Application Using React, Selenium, Node.js, and the WordPress REST API
author: jared
type: post
date: 2017-06-20T23:05:32+00:00
url: /2017/06/20/building-visual-regression-testing-application-lexblog/
lxb_af-post_meta-admin_post_thumbnail_html-position:
  - lxb_af-grid-align-none
categories:
  - JavaScript
  - LexBlog
  - Quality Assurance
  - WordPress

---
At [LexBlog][1], my team is responsible for keeping a lot of sites up and running. We help manage the reputation of lawyers and law firms, where each pixel matters. As a result, our product team performs a host of functional tests before launching updates, and we lean on test driven development practices to catch things that functional tests cannot.

An unfortunate blind spot is that humans aren&#8217;t machines. We&#8217;re prone to miss simple things, and after staring at a screen for hours on end, our brains and eyes get tired. To help catch things that we may gloss over, we use an internal application built using Node.js, React, and Selenium that integrates with the [WordPress REST API][2] and an external service, [Applitools][3].

<!--more-->

As an aside, I cannot recommend Applitools enough. If you need to perform a lot of in-browser tests and want to offload the heavy lifting of visual regression testing to another service, Applitools is fantastic. There are a host of other tools out there, but Applitools is our go-to at LexBlog.

Back to the application!

Prior to working on this, our team was responsible for [visual regression testing using a series of command line scripts and CSVs][4]. While the scripts functioned, setting up a computer to get running required a lot of dependency management steps. Complicating matters, each test relied on CSV files to know what websites were included in the scope of testing. This meant that each time someone wanted to perform a test on an update they were responsible for, they had to use a separate tool to determine what sites would be impacted, get those URLs, and save them to a CSV. There were tools to speed this process up, but any fat in your testing/deploying process is a slippery slope toward never deploying.

It became obvious to everyone on the team that we needed better tools if we were going to make updates to our codebase on a consistent basis. There were three primary issues:

  1. The current automated testing suite was written in Python ([I&#8217;m the only one on the team with Python experience][5])
  2. The scripts had to be run in the command line and new team members had to manually install dependencies
  3. The CSVs that determined what URLs the test suite would visit were manually generated and often required writing another script just to know what sites to test

We managed to address each of these issues by building a small application that:

  1. Was written in JavaScript top to bottom (with the exception of the custom WordPress REST API endpoints &#8211; more on that in point #3)
  2. Took advantage of modern JavaScript application design &#8211; specifically npm (Node Package Manager) in this case &#8211; to offload dependency management to a single command
  3. Used the WordPress REST API to provide us with data about a site to see if it needed to be tested based on the update we were performing

The end product was an application that makes API requests to the many multisite installations that we manage and pulls in a variety of fairly simple information. On the front end, this information is displayed and filtered using React components, and once the tester has a series of sites to run a regression test against, a request is fired off to the application&#8217;s server (written in Node.js) to run a command line argument for running the test itself (still written in Selenium, but updated to use the JavaScript bindings), which interacts with Applitools to send screenshots for review, and shuts down once the tests are complete. We&#8217;re also using Redux for state management, but that&#8217;s a whole other story for a time when I can speak more eloquently about Redux 🙂

Overall, a pretty fun project that owes a lot to [Applitools][3], the WordPress REST API team, LexBlog&#8217;s own [Dylan Moberg][6] for most of the React/Node work, and [Dave Haeffner (whose work on Selenium documentation and guides made a lot of my work possible).][7]

 [1]: https://www.lexblog.com/
 [2]: https://developer.wordpress.org/rest-api/
 [3]: https://applitools.com/
 [4]: https://www.jsulz.com/2016/02/selenium-python-managing-hundreds-blogs/
 [5]: https://en.wikipedia.org/wiki/Bus_factor
 [6]: https://twitter.com/mobot11
 [7]: http://davehaeffner.com/