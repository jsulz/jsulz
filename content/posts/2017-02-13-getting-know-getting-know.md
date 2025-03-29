---
title: Getting To Know You, Getting to Know All About You
author: Jared Sulzdorf
type: post
date: 2017-02-13T22:28:36+00:00
url: /2017/02/13/getting-know-getting-know/
categories:
  - LexBlog
  - Product Management

---
Every Product Manager that I&#8217;ve had the opportunity to speak with, listen to, or read about makes one thing abundantly clear: Knowing your users is your job. Unfortunately, that&#8217;s easier said than done. If you take a moment to peruse career pages or job boards with Product Management positions, you&#8217;ll notice that each listing notes an ability to simultaneously be an Excel/SQL/database master _and_ product expert. The nature of product management requires you to live, breathe, and eat the customer&#8217;s experience while understanding why their experience is the way it is.

<!--more-->



When I took over as a Product Manager at [LexBlog][1], I was only the second person in such a role in the company&#8217;s history. For nearly 10 years, LexBlog had, for all purposes, operated as an agency with a very loosely defined services model acting as a product. The approach was successful, but there were significant challenges that arose as a result. For myself, the task was to address the technical components LexBlog&#8217;s operations in an effort to add new benefits and features to our customers.

Doing this blind, however, was a losing battle, and my job dictates that decisions aren&#8217;t made in a vacuum. Each choice must have an impact. Fortunately, there are a variety of tools available to track how an application is used. In LexBlog&#8217;s case, our application is the backend of each site on our many multisite WordPress installations. Our tool of choice: [Intercom][2] &#8211; specifically the [Events part of their API][3].

At its core, Intercom is a tool for talking to customers of online software products. As the technical complexity of software products have grown, so have the number of barriers between the providers of the product and the users of the product. To make it easier, product managers like myself often reduce segments of users down to overly simplified personas that can fit on an index card; ignoring that each individual user&#8217;s motivations and needs are more complex than anything you can fit on a screen. Intercom offers a series of products intended to cut through those barriers, primarily with communication and self-service tools. While LexBlog takes advantage of only a small portion of Intercom&#8217;s product suite, the benefits have been substantial.

The Events portion of Intercom&#8217;s API is fairly flexible and doesn&#8217;t take much to get up and running. LexBlog&#8217;s plugin for tapping into this part of their API lets us watch for specific actions (clicking on a link, navigating to a page, downloading information from the site, etc.) and on that action, send the information to our Intercom instance. This helps LexBlog understand how our platform is used in a very real way, as opposed to through ad hoc interactions and anecdotal evidence.

Evaluating customer interaction with our platform just a starting point, however. Augmenting this data is information from our CRM ([Salesforce][4]) and help desk software ([Zendesk][5]). Through using a shared key of information between all systems and the magic of [VLOOKUPs][6], we&#8217;re able to create a view of an individual user that helps LexBlog make informed decisions on product efforts, which includes everything from feature enhancements to customer interview questions. While quantitative data is only a part of how we make decisions at LexBlog, it&#8217;s certainly helpful when you have tens of thousands of users spread across 340 cities.

<img decoding="async" loading="lazy" class="aligncenter size-full wp-image-1948" src="https://jared.lexblogplatform.com/wp-content/uploads/sites/10/2017/02/the-lexblog-publishing-platform.png" alt="the-lexblog-publishing-platform" width="2802" height="1314" />

 [1]: https://www.lexblog.com/
 [2]: https://www.intercom.com/
 [3]: https://developers.intercom.com/reference#events
 [4]: https://www.salesforce.com/
 [5]: https://www.zendesk.com/
 [6]: https://support.google.com/docs/answer/3093318?hl=en