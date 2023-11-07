---
title: WordPress GETS Its REST On…. Sorta
author: Jared Sulzdorf
type: post
date: 2016-02-02T00:22:55+00:00
url: /2016/02/01/wordpress-gets-its-rest-on-sorta/
categories:
  - WordPress

---
REST stands for **Re**presentational **S**tate **T**ransfer. Defined and described by [Roy Fielding][1] in [his doctoral dissertation][2] while at the University of California, Irvine, REST is the underlying architectural style of the web as we know it today. RESTful systems, specifically APIs ([Application Programming Interfaces][3]) in the context of this post, are those that follow four (or five) basic principals:

  * Stateless
  * Make use of HTTP verbs 
      * PUT, GET (hence the capitalization of the &#8216;GET&#8217; in the post title &#8211; hilarious, I know), DELETE, POST, UPDATE
  * Provide a uniform structure/interface
  * Properly formatted responses &#8211; JSON/XML
  * Responses are cacheable

At LexBlog, we make use of a variety of different RESTful APIs &#8211; Cloudflare, Twitter, Typekit, and MailChimp to name a few. These APIs allow us to tap into deeper levels of functionality that are only exposed through APIs &#8211; an end user that was not aware or capable of using these systems would have a difficult (or likely impossible) time replicating this functionality.

<!--more-->

APIs of this variety are one of the growing currencies of the web. The more developers and services utilize your API, the more your service becomes indispensable (whatever that&#8217;s worth &#8211; [ask Twitter][4]).

In 2013, WordPress began what would be ([and still is][5]) a long journey into the world of its own REST API. For most of its history, WordPress has relied on [Dave Winer][6]&#8216;s XML-RPC protocol to power the externally facing API.  The WordPress mobile app, for example, relies on the XML-RPC protocol. Unfortunately, XML can be difficult (or, again, likely impossible) and cumbersome to parse.

Enter the WP JSON REST API. JSON &#8211; or JavaScript Object Notation &#8211; is a wonderful format to pass around data on the web as most languages have built in methods to handle it. Moreover, JavaScript is quickly become (or already is) the language of the web and JSON is at home in JavaScript.

To find out more about the WordPress REST API, the video below serves as a wonderful introduction:



All of these articles/videos/tutorials are great resources as well if you want to get up and running or just learn more about the general shape of the API:

  * [Introduction to the REST API &#8211; on Post Status][7]
  * [Rachel Baker: Build a Theme with the REST API][8]
  * [The REST API (and How It Could Change WordPress Forever)][9]
  * and of course, [the docs themselves][10] along with [the Github repo][11]

[Or, you know, just Google it][12].

As usual, the best way that I&#8217;ve found to get up and running with a piece of technology is to start using it &#8211; there are a host of tutorials, and Torque &#8211; a WP Engine site &#8211; has some of the best pieces [in the developers section][13]. There&#8217;s also a [small series that is slowly filling out over on Envato&#8217;s tuts+][14].

That said, don&#8217;t run too quickly. The underlying infrastructure for the API is in core, but the endpoints have yet to be surfaced as some debate over how to best introduce the API has slowed down core integration. While this has spawned a [series of pieces decrying the state of WordPress][15] or [made the conspiracy nuts come out of the woodwork][16] (joking, just joking), it seems that any delay will only postpone the inevitable. The API will land in core. Period. For those of us that work in production and have thousands of client sites to maintain, it just becomes a question of how long do we have to wait before we can trust what has generally been a shifting target.

 [1]: https://en.wikipedia.org/wiki/Roy_Fielding
 [2]: https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm
 [3]: https://en.wikipedia.org/wiki/Application_programming_interface
 [4]: http://www.newyorker.com/tech/elements/the-end-of-twitter
 [5]: http://wptavern.com/wp-rest-api-delayed-contributors-facing-gridlock
 [6]: http://scripting.com/
 [7]: https://poststatus.com/resources/introduction-to-the-wordpress-rest-api/
 [8]: http://wordpress.tv/2015/12/09/rachel-baker-build-a-theme-with-the-rest-api/
 [9]: https://premium.wpmudev.org/blog/wordpress-rest-api/
 [10]: http://v2.wp-api.org/
 [11]: https://github.com/WP-API/WP-API
 [12]: https://www.google.com/search?q=wordpress+json+rest+api&oq=wordpress+json+rest+api&aqs=chrome.0.69i59l2j69i60j0l3.5111j0j7&sourceid=chrome&ie=UTF-8
 [13]: http://torquemag.io/category/developers/
 [14]: http://code.tutsplus.com/series/introducing-the-wp-rest-api--cms-896
 [15]: http://wpshout.com/wordpresss-conservatism-the-best-worst-thing/
 [16]: https://twitter.com/Krogsgard/status/695627551096643584