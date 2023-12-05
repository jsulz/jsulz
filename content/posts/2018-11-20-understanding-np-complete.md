---
title: Understanding NP-complete.
author: jared
type: post
date: 2018-11-20T20:33:07+00:00
url: /2018/11/20/understanding-np-complete/
categories:
  - OSU Post-Bacc
---

Another week of reading, lectures, and confused Googling and skimming through videos is in the bag. This week was all about NP-complete. It has been fun to experience an &#8220;aha!&#8221; moment in each course I&#8217;ve taken so far, and this was an especially fun one. In large part, because seeking answers to these questions is seemingly beyond the reach of computers (in a reasonable time).

We&#8217;re accustomed to computers being incredibly fast. So accustomed that we forget just how fast they are. They&#8217;re really fast. I&#8217;m writing this on a 4-year old computer. It has a 2.5 GHz Intel Core i7 processor. That number equates to how many cycles the system clock of this computer runs in a second. So 2,500,000,000 cycles in one second. The version [of the CPU  running on this machine is quite powerful][1]. It should execute around 9 [instructions per cycle][2] for a single core in the processor and there are 4 total cores running.

This all adds up to a lot of numbers and those numbers represent commands that we expect the computer to execute for us so that we can&#8230;.. I dunno&#8230;.. watch videos of cute cats.

<!--more-->

This is to say, you should think, when you hear a computer can&#8217;t find an answer to a problem, that it&#8217;s a big deal.  These are the sorts of problems that a reasonably programmed (or so we think) computer with enough processors to require fans that sound like this:

{{< youtube id="jBsc83_4RsQ" >}}

just can&#8217;t solve if the domain is large enough.

The full list [of these problems is here][3] and I suppose there are two ways to think of this. One is very abstract. The other is with a concrete example. I think it&#8217;s important to understand the core essence of these problems, so I&#8217;ll begin with the abstraction.

Imagine that you have a problem whose possible solutions represent all of the possible groupings of all the variables in the problem. Let&#8217;s say you have 2 possible solutions and *n* possible groupings. That&#8217;s 2^_n_ possible solutions. Generally, to find each solutions, you have to do a bit of work to verify it as well. Let&#8217;s call that *m*. Now the total time to find the solution to the problem is proportional to 2^_n_ _ *m*. If n is 5 and m is 10 then 2^(5) _ 10 = 320. Let&#8217;s say that represents seconds, so we&#8217;re at 5 minutes, 20 seconds. If _n_ is 10 and _m_ is 100, then we&#8217;re at 102,400, or 1,706 minutes (or 71ish days).

So numbers cause big shifts in our ability to get a problem done in a time that makes sense. All essentially because the problem&#8217;s answer could be this *or* this *or* this *or* this. If we had a computer that could simply calculate all of the this&#8217;s in parallel with how many *or*&#8216;s there were (i.e, for each possible solution, have a single processor dedicated to exploring a single solution set) then we could do this in polynomial time. But you can see just how quickly that becomes a problem. Too many processors equals fires (or really loud fans).

The other way to think of this is through a concrete problem. One of the easier ones (in my opinion) to understand is [the traveling salesperson problem][4]:

{{< youtube id="SC5CX8drAtU" >}}

The problem is essentially a question of permutations. Given a list of cities and the distances between those cities, what is the shortest possible route that visits each city and returns to the origin city. Again, to get to the answer we have to look at one path *or* another path _or_ another path *or* another path. There is no way to know which path is the shortest without first computing the lengths of all the paths. You can imagine that with more cities, there are more paths and with a large enough set, the problem is so complex that we cannot reasonably answer it.

In short, these are the problems that baffle us with or without computers. That they all share some key characteristics says something about the nature of these problems and about problems in general. In fact, one of the key notions of NP-complete problems is that if you can solve one in polynomial time (i.e., efficiently, or non-exponentially) then you can solve *all* such problems in polynomial time. But perhaps some problems are just too complex for a person or machine to do.

[1]: https://en.wikipedia.org/wiki/List_of_Macintosh_models_grouped_by_CPU_type#Haswell
[2]: https://en.wikipedia.org/wiki/Instructions_per_second
[3]: https://en.wikipedia.org/wiki/NP-completeness
[4]: https://en.wikipedia.org/wiki/Travelling_salesman_problem
