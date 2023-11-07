---
title: Give Me A Language That Doesn’t Change – A Brief History of C
author: jared
type: post
date: 2019-03-19T19:18:43+00:00
url: /2019/03/19/a-brief-history-of-c/
lxb_af-post_meta-admin_post_thumbnail_html-position:
  - lxb_af-grid-align-right
categories:
  - OSU Post-Bacc
  - Technology

---
I rarely look at C while at the office. In many ways, it&#8217;s a language of a bygone era, especially when you&#8217;re talking about web application development. Sure, we take advantage of C every day, but write in it? Never.

However, I&#8217;ve become fairly proficient in it these past two years and have grown to appreciate the language for what it is: Blazing fast and fine-tuned for several specific use-cases. Unlike JavaScript (my language of choice while at work), C does not come with dozens of associated frameworks that come and go on a moment&#8217;s notice. It also doesn&#8217;t split its time between the hard logic of an application and managing the user interface. In many ways, C runs the world of computers around us without us even knowing.

The story behind C is the most interesting part of the language. Written in the late 60&#8217;s and launched into production around 1972/1973, C was born from necessity. In the late 60&#8217;s, [Dennis Ritchie][1] and [Ken Thompson][2] decided to write an operating system for the [PDP-11][3], Unix (pictured above &#8211; it&#8217;s the size of a huge refrigerator and it&#8217;s processing power isn&#8217;t even close to the power of my phone).

<!--more-->

Most of the logic of the operating system was written in Assembly at first, but this proved to be fairly clunky. Assembly&#8217;s limited support for logical constructs made this a painstaking process that grew so difficult that Ritchie decided to write his own language, specifically for handling Unix, and so C came into existence.

The language is so basic that its primitives don&#8217;t include strings, garbage collection is left up to the programmer, and objects are nowhere to be found. However, the language&#8217;s relationship to the Unix operating system means that it is nearly ubiquitous as Unix (or some variant) is found on nearly every web server, the majority of smartphones, and the computer that I&#8217;m using (a Macbook Pro) to write this post. Wherever Unix is found, C is right behind, managing all of the commands you type into a terminal, the boot process of your computer, and, well, most anything you do.

Like the core functionality of Unix, which has a philosophy of limited design, C has not grown much beyond it&#8217;s humble beginnings. Features have been added incrementally, but much of my own work with the language is done in C99, a standard written nearly 20 years ago. One of my favorite bits of back and forth that I have with Scott Fennell, our lead developer at LexBlog, is his love of languages that are well-defined and static. The more a language changes, the harder it is for teams and individuals to manage. Imagine if English were changing at the same breakneck pace of JavaScript; we would barely be able to communicate from day to day.

As I&#8217;ve grown less enamored of just getting a project up and running and seen the value of maintainable systems and software, I must admit that I&#8217;ve come to Mr. Fennell&#8217;s side of the argument. Give me a language that doesn&#8217;t change but does the job just as well, if not better, than any of it&#8217;s counterparts. That&#8217;s not to say that I want to spend my days writing C, but it wouldn&#8217;t be the worst thing.

 [1]: https://en.wikipedia.org/wiki/Dennis_Ritchie
 [2]: https://en.wikipedia.org/wiki/Ken_Thompson
 [3]: https://en.wikipedia.org/wiki/PDP-11