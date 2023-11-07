---
title: A GT OMSCS Course Review – High Performance Computer Architecture (CS6290)
author: Jared Sulzdorf
type: post
date: 2020-05-03T20:46:44+00:00
url: /2020/05/03/a-gt-omscs-course-review-high-performance-computer-architecture-cs6290/
lxb_af-post_meta-admin_post_thumbnail_html-position:
  - lxb_af-grid-align-none
categories:
  - Georgia Tech OMSCS
  - High Performance Computer Architecture

---
For me, Georgia Tech&#8217;s OMSCS program&#8217;s biggest draw was it&#8217;s extensive machine learning and artificial intelligence curriculum. There are other online Master&#8217;s programs from well-regarded schools (University of Texas and University of Illinois immediately come to mind), but none as established as Georgia Tech and none with classes that felt worth the time and investment. However, through a quirk of scheduling (most of the ML/AI courses are in high demand and fill up quite quickly), three of my first four classes at GT have focused on computing systems.

Now, it would be unfair to blame this purely on scheduling. It would have been quite easy to take different courses from different specializations, but I got into this program to learn and to challenge myself, and the computing systems offerings come highly recommended from the community of OMSCS students and are known for their difficulty. [High Performance Computer Architecture (HPCA)][1] certainly belongs in that conversation, and like the other computing systems courses that I&#8217;ve taken so far ([Graduate Introduction to Operating Systems][2] and [Advanced Operating Systems][3] being the other two), I left the class with a far better grasp on and appreciation for the internals of computers.

<!--more-->

A word to the wise: If you haven&#8217;t taken a computer architecture and/or parallel computing course before, you may want to spend some time preparing before you jump into HPCA. While the course professor, Milos Prvulovic, provides a number of refreshers on pipelining, caches, and virtual memory, they are still just refreshers. Coming into this course, you should have a solid grasp on:

  * [von Neuman architecture][4]
  * Introductory computer organization topics (CPU organization, caches, RISC instruction sets, etc.)
  * C/C++

If you&#8217;re a little shaky on any of those, [a self-assessment &#8220;course&#8221;][5] is provided to give you insight into where you should focus your energy.

Once you get started, the lectures from Professor Prvulovic are top-notch and (like all OMSCS courses I&#8217;ve taken thus far) the TAs are incredibly helpful. Before registering for any course at GT, I peruse [OMSCentral (a repository of course reviews from current/past students)][6], and [the listing for this course][7] noted that the head TA, Nolan Capehart, was &#8220;a boss.&#8221; I can now easily confirm this sentiment. Nolan&#8217;s project FAQs are necessary to get a jump on each homework assignment and he manages to provide good direction in private posts if you get stuck. As each project in the course requires you to dive into a processor simulator with hundreds of classes and well over 100,000 lines of C++, it&#8217;s nice to know he has your back if you need it.

As with all courses, there are highlights and lowlights; the course highlights for me were:

  * The lectures on branch prediction and instruction scheduling. These two areas gave me insight not only into how computer architects have optimized performance through abstraction and indirection, but how even at the lowest levels of hardware and software, [we ask the computer to be a guessing machine][8].
  * The third project in the course required us to simulate the behavior of a L1 cache to categorize certain kinds of misses. It was incredibly interesting to use simple data structures and techniques to simulate something that felt untouchable before. Like all courses that I&#8217;ve taken that have a hardware bent to them, once you get over that initial fear of circuits and [bits][9] you start to feel true ownership of the machine.
  * Unlike other courses thus far, the midterm and final felt less like exercises in memorization and regurgitation. I came out of studying for these with a grasp on simple things that had eluded me before (like quick translation of hexadecimal to binary to decimal) as well as complex concepts like how to break apart an address for caches and virtual memory translation.

Ultimately, this was another strong course from Georgia Tech and while it had some annoyances (for example, all the projects are provided in a Microsoft Word document instead of a git repository) it was well worth the time and effort. If you&#8217;re looking to go a little deeper into what makes a computer tick as fast as it does, then this is a great place to start.

 [1]: https://www.omscs.gatech.edu/cs-6290-high-performance-computer-architecture
 [2]: https://www.jsulz.com/2020/01/a-gt-omscs-course-review-graduate-introduction-to-operating-systems-cs6200/
 [3]: https://www.jsulz.com/2020/01/a-gt-omscs-course-review-advanced-operating-systems-cs6210/
 [4]: https://en.wikipedia.org/wiki/Von_Neumann_architecture
 [5]: https://classroom.udacity.com/courses/ud219
 [6]: https://omscentral.com/
 [7]: https://omscentral.com/course/CS-6290
 [8]: https://www.jsulz.com/2020/04/computers-are-really-advanced-guessing-machines/
 [9]: https://www.jsulz.com/2020/04/the-business-of-bits/