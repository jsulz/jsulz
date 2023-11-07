---
title: Game of Thrones Spoiler Blocker – an Exercise in Building Chrome Extensions
author: Jared Sulzdorf
type: post
date: 2016-07-22T17:40:28+00:00
url: /2016/07/22/game-thrones-spoiler-blocker-exercise-building-chrome-extensions/
lxb_af-post_meta-admin_post_thumbnail_html-position:
  - lxb_af-grid-align-none
categories:
  - JavaScript

---
Recently, I got it into my head that learning how to build a Chrome extension was a good idea. My current list of extensions includes LastPass, Chrome UA Spoofer, Live HTTP Headers, React Developer Tools, JSON Viewer, and a few others that you can see in this dandy screenshot:

[<img decoding="async" loading="lazy" class="aligncenter size-large wp-image-1912" src="https://jared.lexblogplatform.com/wp-content/uploads/sites/10/2016/07/Screen-Shot-2016-07-22-at-10.19.05-AM-740x43.png" alt="Screen Shot 2016-07-22 at 10.19.05 AM" width="740" height="43" />][1]

The last icon you see there, is from your truly! The function of this extension is straightforward &#8211; I love Game of Thrones, refuse to watch the television series because I&#8217;ve invested too much time in the books, and I hate spoilers. This intractability combined with a love of surfing the internet has lead to a dangerous cocktail that this tool endeavors to support by blocking all elements on a webpage that could contain spoilers.

<!--more-->

When clicked, a bit of JavaScript runs in the background, collecting all of the [nodes][2] on a page and loops through them looking for reference to strings that I&#8217;ve predetermined in a dictionary of sorts. This dictionary contains a variety of names and phrases that could lead to ruining my childhood, and so when the script encounters these strings, it injects a bit of inline CSS into the node that blocks the text/element from view. The code for this project can be found [over in this repository][3], and it was a delightfully easy process from start to finish.

First off, the [manifest.json][4] file. This little guy allows us to declare to Chrome what our intent is, the assets we&#8217;re bringing to bear (script files, images, etc), and some general information about the extension itself. The real magic of this file is in lines 9 to 23 where we declare the `brower-action`, `permissions`, and `background` properties.

The `brower-action` lets us load an icon (found in the [/images/ folder][5]) that we tap into in the [startup.js file][6]. Here, we watch for clicks on this icon, and when we see one, execute the [blocking.js file][7]. This file is where the true heavy lifting gets done. In line 4, we grab all of the tags on the page and assign it to a variable that is now a [NodeList][8]. We use two `for` loops to dig down into the text of the page &#8211; one to loop over the nodes, another to loop over the child nodes. If we hit a text node (logic for that is on line 12), we do some basic string manipulation and then comparison. If we have a text node that includes a string from the dictionary (set up in line 1), then we access the style properties of the parent node and set the background and text color to black.

Viola!

Some of the future work I&#8217;d like to do on this extension is to execute it on page load as opposed to using the click event on the icon and have that event instead tied to undoing the style injection. It would also be nice to catch elements on the page outside of just text nodes &#8211; images are just as pernicious when it comes to spoilers.

If you&#8217;re looking to kick things off yourself, the Chrome devs make this brilliantly simple by [providing a nice tutorial/introduction][9].  This is a great place to start.

 [1]: https://jared.lexblogplatform.com/wp-content/uploads/sites/10/2016/07/Screen-Shot-2016-07-22-at-10.19.05-AM.png
 [2]: https://developer.mozilla.org/en-US/docs/Web/API/Node
 [3]: https://github.com/jsulz/got-spoiler-blocker
 [4]: https://github.com/jsulz/got-spoiler-blocker/blob/master/manifest.json
 [5]: https://github.com/jsulz/got-spoiler-blocker/tree/master/images
 [6]: https://github.com/jsulz/got-spoiler-blocker/blob/master/js/startup.js
 [7]: https://github.com/jsulz/got-spoiler-blocker/blob/master/js/blocking.js
 [8]: https://developer.mozilla.org/en-US/docs/Web/API/NodeList
 [9]: https://developer.chrome.com/extensions/getstarted