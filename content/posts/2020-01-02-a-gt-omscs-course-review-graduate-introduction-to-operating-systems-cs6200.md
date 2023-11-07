---
title: A GT OMSCS Course Review – Graduate Introduction to Operating Systems (CS6200)
author: Jared Sulzdorf
type: post
date: 2020-01-03T06:34:02+00:00
url: /2020/01/02/a-gt-omscs-course-review-graduate-introduction-to-operating-systems-cs6200/
lxb_af-post_meta-admin_post_thumbnail_html-position:
  - lxb_af-grid-align-none
categories:
  - Georgia Tech OMSCS

---
Georgia Tech&#8217;s [Graduate Introduction to Operating Systems (GIOS)][1], a thorough review of the core concepts behind operating systems, came [highly recommended by way of OMSCentral][2] and it did not disappoint. The lectures (delivered through [Udacity][3]) are well-structured and concise, the projects are enjoyable and go beyond the normal client/server projects in an undergrad OS course, and the course TAs and community are key to making this a top-notch experience. In summary, if you have decent C/C++ experience and either have not taken an operating systems course before [or it&#8217;s been quite some time since you looked at these dinos][4], then I&#8217;d strongly recommend signing up for CS6200.

[Ada Gavrilovska][5] is the course professor, but most of your interactions (asking questions about projects, tests, readings, etc.) are with her teaching assistants. Fortunately, one of the fun parts of OMSCS is that most students and TAs are full-time employees themselves. This means that while the course is driven by TAs, these folks have real-world experience to bring to the table, usually from similar areas of practice.

<!--more-->

In January I took Oregon State University&#8217;s introduction to OS course ([CS344][6]) and found it to be enjoyable, but slightly watered down. There was no watering down GIOS; by week three we had passed OSU&#8217;s level of detail and I was in new territory. Some of the highlights for me were:

  * Writing (over the course of two projects) a multithreaded web server, proxy server (that communicated via IPC with a cache server of our own design) with a multithreaded client that acted as a load-generator (read: automated client for testing) for the server. This forced me to think about synchronization between resources and data structures, message queues, shared memory, and sockets &#8211; all in C.
  * The lectures on CPU scheduling, page tables and memory management, message passing and shared memory for interprocess communication, semaphores, virtual file systems, and remote procedure calls were fantastic. While these all came after the midterm, they were worth the wait.
  * The last project was easy, but fun, and had the added bonus of saving my ass in [CS6210][7] as they both made use of [gRPC][8]. CS6210&#8217;s last project required us to implement a [MapReduce][9] framework using gRPC to manage the remote procedure calls between the nodes in a cluster. The work involved in that project was daunting and I had no idea where to start. After sitting down for a weekend and knocking out CS6200&#8217;s distributed file system project (powered by gRPC), however, I was good to go. This was all written in C++ and introduced me to the notion of resource acquisition is initialization ([Tom Dalling explains it far better here][10]) along with the [Andrew File System][11] and distributed file systems in general.

Overall, a truly enjoyable experience, but one that tested my patience at times. The tests were humbling and the first project, while relatively simple, had exacting requirements that pushed my C knowledge to the brink. There were a few nights that left me sheepishly crawling into bed hours after my wife had drifted off to sleep. That said, I left this course with a greater appreciation for the building blocks of computer systems and a great deal more programming confidence; a moderately fair trade 😉

&nbsp;

 [1]: http://www.omscs.gatech.edu/cs-6200-introduction-operating-systems
 [2]: https://omscentral.com/courses/CS-6200
 [3]: https://www.udacity.com/
 [4]: http://os-book.com/images/os9c-cover.jpg
 [5]: https://www.cc.gatech.edu/home/ada/
 [6]: https://ecampus.oregonstate.edu/soc/ecatalog/ecoursedetail.htm?subject=CS&coursenumber=344&termcode=all
 [7]: https://www.omscs.gatech.edu/cs-6210-advanced-operating-systems
 [8]: https://grpc.io/
 [9]: https://en.wikipedia.org/wiki/MapReduce
 [10]: https://www.tomdalling.com/blog/software-design/resource-acquisition-is-initialisation-raii-explained/
 [11]: https://en.wikipedia.org/wiki/Andrew_File_System