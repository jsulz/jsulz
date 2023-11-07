---
title: A GT OMSCS Course Review – Advanced Operating Systems (CS6210)
author: Jared Sulzdorf
type: post
date: 2020-01-03T19:40:46+00:00
url: /2020/01/03/a-gt-omscs-course-review-advanced-operating-systems-cs6210/
lxb_af-post_meta-admin_post_thumbnail_html-position:
  - lxb_af-grid-align-none
categories:
  - Georgia Tech OMSCS

---
For my first semester at Georgia Tech, I wanted to take two courses that were well-reviewed, challenging, and introduced me to new concepts but that also played to my strengths. The first two months of the semester were bound to be hectic as I balanced gracefully leaving my full-time job of the past 6+ years with starting OMSCS. With that in mind, I ended up taking both of the operating systems courses GT offers online students.

Fortunately, there was only some overlap between the two courses and [once I was a full time student][1] my schedule made it easy to cram on the sort of &#8220;presumed knowledge&#8221; that Advanced Operating Systems (AOS) assumed was rattling around in my brain. There is [also a &#8220;refresher&#8221; course][2] that I would strongly recommend going through if you&#8217;re taking this course without GIOS. It&#8217;s possible to complete in a weekend and the first week of the course is a perfect time to cram this in. Going through this refresher and honing in on areas of weakness had the added bonus of forcing me to learn topics that pushed me ahead of the curve in a few areas in GIOS, but not so many to make that course redundant.

Similar to GIOS, the course professor ([Umakishore Ramachandran][3]) provided excellent lectures with a well-structured course, but was largely absent from managing the day-to-day of the class. While the TA&#8217;s in this course were less active than in GIOS, they still capably managed all forum questions and were readily available in Slack. There are four projects (one of which is essentially a warmup for the last project) and two tests. The projects are manageable if you have C/C++ skills, and I found the tests to be easier than those in GIOS (more memorization on these tests and less applied concepts).

<!--more-->

As a number of [reviews for CS6210 on OMSCentral][4] note, this is the closest to a distributed systems course in OMSCS and the topics reflect that. Most of the course focuses on virtualization and distributed communication/resource sharing all in the context of operating systems developed in the last 30-40 years. There are a ridiculous number of assigned papers (about 45 total, each averaging 20-25 pages in length) and it&#8217;s easy to question the efficacy of reading a paper from 1978, but it&#8217;s worth the effort. In many ways, this is representative of computer systems. Each paper includes nuggets of brilliance from dozens of systems that represent foundational concepts and truisms that have stood the test of time.

My favorite parts of the course included:

  * The readings/lectures on real-time multimedia processing opened my eyes to persistent temporal streams. These concepts form the underpinning of the so-called &#8220;large-scale situational awareness&#8221; applications, which is really just a fancy way of saying &#8220;Big Brother.&#8221; I also really enjoyed the discussion of global memory systems, distributed shared memory, and distributed file systems. If, like me, you&#8217;re taking this course because of the distributed systems content, then these papers and lectures should be your bread and butter.
  * The last project and set of lectures before the midterm were focused on inter-machine communication and synchronization between nodes in a cluster. These had us read/watch lectures on several seminal algorithms (sense reversing barrier, tree barrier, tournament barrier, and dissemination barrier) and then implement them using [OpenMP][5] and [OpenMPI][6].
  * The final project of the semester is supposedly one of the largest solo projects in OMSCS. It requires that you implement all of the orchestration involved in a [MapReduce][7] framework, using [gRPC][8] as the remote procedure call API. You&#8217;re given a great starting point, and after I spent about a day grokking the project it was actually relatively easy and fun. I had the benefit of implementing a DFS in gRPC while taking GIOS alongside this course, however, which was a huge help.

Taking this course in conjunction with GIOS provided a great introduction to OMSCS on a number of levels. These two courses are the cream of the crop in the computing systems specialization (especially now that intro to high performance computing is only intermittently offered) and solidified my understanding of common operating system abstractions and distributed systems in use today. Slogging through the average week of a half-dozen papers and hours of lectures on operating systems drives home the foundational data structures, algorithms, and common-sense approaches found in implementing computer systems. This is truly where the rubber meets the road in computer science.

 [1]: https://www.jsulz.com/2019/12/a-full-time-student/
 [2]: https://www.udacity.com/course/gt-refresher-advanced-os--ud098
 [3]: https://www.cc.gatech.edu/~rama/
 [4]: https://omscentral.com/course/CS-6210
 [5]: https://www.openmp.org/
 [6]: https://www.open-mpi.org/
 [7]: https://en.wikipedia.org/wiki/MapReduce
 [8]: https://grpc.io/