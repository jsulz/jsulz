---
title: The Engineering Art of Balancing Desire with Reality (as told by processor caches)
author: Jared Sulzdorf
type: post
date: 2020-03-03T17:53:30+00:00
url: /2020/03/03/the-engineering-art-of-balancing-desire-with-reality-as-told-by-processor-caches/
lxb_af-post_meta-admin_post_thumbnail_html-position:
  - lxb_af-grid-align-none
categories:
  - Georgia Tech OMSCS
  - High Performance Computer Architecture

---
<figure id="attachment_2857" aria-describedby="caption-attachment-2857" style="width: 315px" class="wp-caption alignright"><img decoding="async" loading="lazy" class="size-medium wp-image-2857" src="https://jared.lexblogplatform.com/wp-content/uploads/sites/10/2020/03/zen-315x320.png" alt="" width="315" height="320" /><figcaption id="caption-attachment-2857" class="wp-caption-text">AMD&#8217;s Zen architecture on their Ryzen CPUs. Look at all that complexity!!</figcaption></figure>

In a course about high performance computer architecture, it&#8217;s no surprise that most of the time is spent discussing how to speed up computers using their architecture. It&#8217;s almost as though the name of the course tells you exactly what to expect.

This week [in CS6290 at Georgia Tech][1], we&#8217;ve moved on to caches, which play a key role in speeding up the retrieval of information. The processor&#8217;s goal is crunching data which is held either in main memory (RAM) or on the disk (an SSD or HDD). To get that data, the processor issues requests for memory addresses and retrieves the data from the memory storage unit that holds that information.

<!--more-->

On a modern CPU, there are a number of memory caches. _<brag alert!>_ My new [AMD Ryzen 7 3700x][2] has three such caches (following the typical naming convention of L1, L2, L3) with the size of the cache increasing the further away the cache gets from the registers and ALU (512 KB, 4MB, and 32MB)._</brag alert!>_  The goal of these caches is to reduce the cost of going to main memory or to the disk. Generally, we can access the L1 cache in a cycle, but going to main memory may take 30 cycles, while going off to main memory takes hundreds of cycles and varies wildly in performance based on the storage technology. We can quantify this relationship using the following equation:

<pre>Average Memory Access Time (AMAT) = Hit Time + Miss Rate * Miss Penalty</pre>

Where:

  * _Hit time_ is the number of cycles it takes to access the cache and find the memory address in question
  * _Miss rate_ is the percentage of cache access where we fail to find the memory address in the cache
  * _Miss penalty_ is the number of cycles it requires to go off chip (or to another cache) to find that memory address

As with all things in engineering disciplines, the game is to balance the physical realities and implementation details with the math. Here, we want the hit time to be low, which means we want a cache that is small (so that we don&#8217;t spend too much time reviewing each entry looking for a particular memory address), but we also want the miss rate to be low, which means we want a cache that is larger and more intelligently organized (invariably increasing the time it takes to get a hit). It is this balancing game that drives most of the conversation around caches.

There are a number of different cache organization schemes and coherence/replacement policies, and hardware techniques that are leveraged to make this balancing act less cumbersome. They are however, all responses to this basic notion that complex technical systems have points of friction where the desire to accomplish one thing will ultimately lead to a trade-off in another area.

These friction points are where innovation occurs and you see the beauty of computer science. Heuristics that piggyback off of common sense approaches (such as kicking the [least recently used cache line out of a full cache][3]) are developed and shown to be amazingly effective against more complex and technical designs. I&#8217;ve said it before, but this is one of the reasons that I&#8217;m glad much of my formal education has focused on computing systems. There&#8217;s no other study in this field that blends the theoretical with the practical all while influencing every other area of computer science.

 [1]: https://www.jsulz.com/category/high-performance-computing-architecture/
 [2]: https://www.amd.com/en/products/cpu/amd-ryzen-7-3700x
 [3]: https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)