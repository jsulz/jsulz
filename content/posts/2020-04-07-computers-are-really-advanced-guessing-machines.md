---
title: Computers Are (Really) Advanced Guessing Machines
author: Jared Sulzdorf
type: post
date: 2020-04-07T21:54:59+00:00
url: /2020/04/07/computers-are-really-advanced-guessing-machines/
categories:
  - Artificial Intelligence
  - Georgia Tech OMSCS
---

One of my favorite (personal) sayings about computers is that they are highly advanced guessing machines. You can see this play out practically with things like branch prediction, where a processor must guess the path of a logical branch based on the history of that branch. This heuristic is analogous to how many humans guess; we use history as a predictor for future events. While [HPCA][1] has many similar techniques, this scenario is even more common in the other [Georgia Tech][2] course that I&#8217;m taking this semester, Robotics: AI Techniques.

Artificial intelligence is the pinnacle of guessing as it employs practical techniques (like search algorithms) and combines them with statistical tricks based primarily on probability density ([usually Gaussian][3]) distributions. The mathematics behind these distributions, in my opinion, can often seek to confuse and distract from what is actually a delightfully simple concept.

<!--more-->

Unfortunately, we have to start with the math to provide some concrete foundations (and because it&#8217;s not as fun as the heuristics in a search algorithm; gotta have some vegetables before we get to the sugar). You&#8217;ve undoubtedly seen a Gaussian distribution. If you&#8217;ve been in any course with a curve, the professor has likely put on some slide, a picture that looks something like this:

![Scores](/img/scores.gif "Score distribution")

In this simple chart we see two fundamental concepts:

- A discrete set of scores represented by a histogram
- A continuous line overlaid on top of this histogram in the shape of a bell curve

The bell curve is something we are all familiar with, but may not have much mathematical intuition around. The peak of a bell curve represents the mean (average) value. In terms of probability, we can think of this as the most likely value to be selected were we to randomly choose a score from our set of scores. If we look at the curve in terms of these scores, we can see the majority of scores are clustered around this peak. The density of these scores around that peak (meaning that the peak is higher and the bell is skinnier) represents a higher density or, lower deviation from the mean. This is the second component of the bell curve, the standard deviation, or the amount of variance in the values. The wider the curve, the lower the variance (and lower the standard deviation), while a more broad curve represents more variance (and a higher standard deviation).

When using Gaussian curves in the context of artificial intelligence, we think of them in terms of &#8220;belief.&#8221; Provided a sensor reading (from a camera, temperature sensor, pressure gauge, etc) how firm is our belief that this value provides knowledge about the state of the world around us. If we plot the range of our beliefs, then it would come out in the shape of a curve, with a skinnier Gaussian representing a stronger belief of a specific value.

It&#8217;s important to recognize in this moment that, just like when a processor predicts the direction of a branch, we&#8217;re asking the computer to guess based on the likelihood of being correct. The computer is not actively making a decision, rather a human has decided that, given a set of inputs and accepted range of outputs, the computer should take some action. When a computer guesses incorrectly, it&#8217;s because a human has decided (explicitly or otherwise) that being incorrect is acceptable or, more likely, highly unlikely.

This is really no different from how we treat guessing in our daily lives, it&#8217;s just that we base our guesses on intuition and thousands of hours of experience as opposed to mathematical models and information stored on a hard drive. Every step I take is a game of viewing the world around me, moving, sensing, updating my belief that I am, in fact, in a new location, moving again, and repeating this set of actions. This model is represented in artificial intelligence techniques like [Kalman][4] or [particle filters][5] where a machine:

- Creates a view of the environment
- Takes an action
- Takes a measurement of the environment
- Updates its view of the environment based on the combination of the action and measurement

In many ways, the work we do with artificial intelligence is to formalize the actions that humans take for granted. This is done through mathematical and algorithmic models, but the end result is very similar.

This is more apparent (and less mathematically rigorous) in search algorithms. The idea behind these sorts of algorithms is that we are given a starting location, end/goal state, and a notion of how we may move about in the environment. You may think of this as setting out for a walk to a park knowing how to identify the park, but perhaps not knowing where exactly it is and certainly not knowing what obstacles are between you and it.

Like a machine, when confronted with this situation humans may try several different guesses in the hopes one of them pans out:

1. Walking forward along a path until you reach the park or encounter an obstacle and then backtracking ([depth-first search][6])
2. Walking back and forth between all possible paths forward, rejecting paths as they encounter obstacles and expanding new paths that appear ([breadth-first search][7])
3. Walking forward along likely paths, using the general knowledge of how far away the park is so that you can reject certain paths earlier so long as they&#8217;re not blocked ([A\* searc][8]h)

The third heuristic is the choice that is typically used in most software. While it presumes some knowledge and incurs some overheads (primarily space complexity as it requires you initialize a map of the environment in a way the other approaches do not), it typically provides the most optimal solution faster.

All of these concepts certainly merit more discussion than what is given here, but it&#8217;s vital to understand and accept the notion that computers are no more omniscient or omnipotent than humans (which is to say not at all). They may perform rigorous calculations in ways that humans cannot, but like us, they are just (really) advanced guessing machines.

[1]: https://www.jsulz.com/category/high-performance-computer-architecture/
[2]: https://www.jsulz.com/category/georgia-tech-omscs/
[3]: https://en.wikipedia.org/wiki/Normal_distribution
[4]: https://en.wikipedia.org/wiki/Kalman_filter
[5]: https://en.wikipedia.org/wiki/Particle_filter
[6]: https://en.wikipedia.org/wiki/Depth-first_search
[7]: https://en.wikipedia.org/wiki/Breadth-first_search
[8]: https://en.wikipedia.org/wiki/A*_search_algorithm
