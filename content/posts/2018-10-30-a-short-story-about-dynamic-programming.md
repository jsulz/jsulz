---
title: A Short Story About Dynamic Programming
author: Jared Sulzdorf
type: post
date: 2018-10-30T20:41:01+00:00
url: /2018/10/30/a-short-story-about-dynamic-programming/
categories:
  - OSU Post-Bacc

---
Having just finished my midterm in Analysis of Algorithms (yes, the class is as dry as it sounds), my brain is still sharp on a few topics; one of them being [dynamic programming][1], which I mentioned [in my last post][2]. In that post, wherein I tried to find motivation for forcing myself to relearn calculus, I used the classic example of trying to calculate the _nth_ term of the [Fibonacci sequence][3].

I thought it would be helpful to see this example running with some real code. Below, we have a JavaScript function &#8211; _fibRecursive_ &#8211; that takes an integer as a parameter. This integer represents the term that we want from the Fibonacci sequence. For example, a call to the function like so _fibRecursive(6)_ would return 8.

{{< gist jsulz b439a7a592056bd435cf09780f6ff3b0 >}}

<!--more-->

In order to compute that, this function recursively calls itself twice for every term up to the term you specified. This sort of [recurrence relationship][4] is exponential &#8211; specifically O(2^n). That means, very literally, for every nth term we wish to compute, we will actually compute it 2^n times. To compute the 8th term, we must perform 2^8 (that&#8217;s 256) actions.

While this is a very elegant way of explaining, in code, how the Fibonacci sequence works, it is not the most performant way of computing these sorts of values. There is, however, a very well-defined algorithmic paradigm that we can apply, and you&#8217;ve guessed it, it&#8217;s dynamic programming.

The general notion of dynamic programming is that the problem exhibits some optimal substructure (i.e., within the solution to the problem are solutions to smaller problems &#8211; as a byproduct of computing the 5th term in the Fibonacci sequence, we will compute the 1st, 2nd, 3rd, and 4th terms) and that these problems overlap (i.e., you must revisit each subproblem&#8217;s solution repeatedly in order to get the final solution).

The function below shows how we can use a technique called [memoization][5] to save the solutions to smaller subproblems in a lookup table (typically an array of some shape and size, but any data structure that helps you solve the problem is acceptable) and then refer back to that solution for the next subproblem. The difference here is that we compute each solution to the subproblems once as opposed to computing them 2^n times. This means that the function below &#8211; _fibDynamicProgramming_ &#8211; runs in O(n) time &#8211; a considerable uptick in performance. This means that to get to the 8th term in the sequence, we&#8217;re actually performing only 8 constant time computations.

{{< gist jsulz 8e0c173bf0460bf93a125cfd43dae20c >}}

Magic! To see more common dynamic programming problems and solutions, I would suggest taking a look at this [YouTube playlist by Tushar Roy][6]. His explanations are more thought-out and concise than anything I plan to write 😉

 [1]: https://en.wikipedia.org/wiki/Dynamic_programming
 [2]: https://www.jsulz.com/2018/10/why-study-algorithms/
 [3]: https://en.wikipedia.org/wiki/Fibonacci_number
 [4]: https://en.wikipedia.org/wiki/Recurrence_relation
 [5]: https://en.wikipedia.org/wiki/Memoization
 [6]: https://www.youtube.com/playlist?list=PLrmLmBdmIlpsHaNTPP_jHHDx_os9ItYXr