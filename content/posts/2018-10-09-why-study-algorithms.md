---
title: Why Study Algorithms?
author: Jared Sulzdorf
type: post
date: 2018-10-09T19:20:34+00:00
url: /2018/10/09/why-study-algorithms/
categories:
  - OSU Post-Bacc

---
This is a question that is plaguing me at the moment as I force myself to relearn calculus for Analysis of Algorithms at Oregon State University. In moments like this, where the concepts are abstract and I need to learn even more abstract concepts so I can understand the first class of abstract ideas, motivation is key.

<blockquote class="wp-block-quote">
  Why does this matter? I&#8217;ve been working in the industry for over five years and never needed this knowledge before, why now?
</blockquote>

Well, the short answer is that you don&#8217;t need this body of knowledge to develop a wide range of applications and features to applications. In my world, many of the concerns that common sorting, searching, and general optimization algorithms address are not real concerns because they&#8217;ve been abstracted to parts of the language or framework. I&#8217;m able to do my job because someone else has figured out how to do other parts of my job that normally would need to be created from scratch. So while learning merge sort and analyzing its complexity is a fun exercise, I&#8217;ll not be writing it from scratch anytime soon.

<!--more-->

The real value in this course, or at least the parts that I find value in so far, are the techniques behind the algorithms. Merge sort, for example, is a [divide and conquer algorithm][1]. The idea behind this class of algorithms is that you can solve a problem faster if you break the problem set down into smaller and smaller sets until you&#8217;re left with a trivial problem to solve. You solve that small set and then combine it with another solved set and do that until all of the solved sets have been combined and you have a completely solved set.

This past week, we&#8217;ve been learning about dynamic programming &#8211; another classical paradigm for solving problems. Most [dynamic programming][1] problems are based on taking a complex issue and breaking it into a series of subproblems and saving the solutions to those subproblems so that the larger problem can be answered. A common example solving the Nth term of the Fibonacci sequence. This problem can be solved using recursion with a high degree of computational resources, _or_ it can be solved using dynamic programming where each number in the sequence is computed and saved in memory (this technique is called memoization) and the next number computed using those saved numbers. Dynamic programming lets us solve problems that would otherwise be on the order of exponential complexity and solve it in polynomial time instead.

So why study algorithms? In short, because time is money. Energy is money. And computers are designed to optimize both. Unfortunately, computers only do them what you tell them to do all the way down to what they choose to remember. Our job is to figure out what to tell them and how.

 [1]: https://en.wikipedia.org/wiki/Dynamic_programming