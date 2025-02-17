---
title: "A GT OMSCS Course Review – Robotics: AI Techniques (CS7638)"
author: Jared Sulzdorf
type: post
date: 2020-05-05T05:23:56+00:00
url: /2020/05/04/a-gt-omscs-course-review-robotics-ai-techniques-cs7638/
categories:
  - Georgia Tech OMSCS
---

Robotics: AI Techniques marked the beginning of my foray into Georgia Tech&#8217;s OMSCS machine learning and artificial intelligence offerings. As I mentioned in my review of [High Performance Computer Architecture (HPCA)][1], my other Georgia Tech courses have focused on computing systems. This was mostly a function of the popularity of the ML/AI courses making them difficult to register for, and the computing system courses being among the most well-regarded classes in the program. However, my chosen specialization for this degree is machine learning, and so this semester it was time to get going.

I chose this as my first AI-centric course as it&#8217;s relatively &#8220;easy&#8221; (I put this in quotes because easy is in the eye of the beholder) and was entirely project-based allowing me to level up on my Python while also giving me time to explore mathematical concepts that were completely new territory. As I&#8217;m taking CS6601 &#8211; Aritifical Intelligence in the fall, I wanted a course to provide exposure to the field of study without being overwhelming. I can say pretty definitively that this course did all of those things while being pretty fun at the same time.

<!--more-->

First off, however, a critique. The lectures, created by [Professor Sebastian Thrun][2], were unfortunately the worst that I&#8217;d encountered at Georgia Tech so far. It&#8217;s hard to tell why that is, but my main issue is that they lack depth (many a time it felt like we were hand-waving over some key concepts or insights) and were poorly paced (with quizzes nearly every video, sometimes after just 60 seconds of instruction). That&#8217;s not to say the lectures weren&#8217;t valuable &#8211; they were and are still far beyond many of the &#8220;best&#8221; lectures that Oregon State University&#8217;s online program provided. They just happen to be of lesser quality than [GIOS][3], [AOS][4], and HPCA. Perhaps that speaks more to those courses/professors than to anything else.

Lectures aside, however, I thought the instructor (Jay Summet) and the team of TAs performed admirably given that most of the real work was on their shoulders. As the class is nearly entirely project based (with only 28% of your grade coming from pre-built homeworks that likely haven&#8217;t changed from the initial course developement), and both Python version changed and student plagiarism forces these projects to change from year-to-year, most of the burden is on this team to develop, test, support, and maintain new and existing projects. Considering the difficulty of doing this while the lectures remain unchanged, my hat goes off to them.

There were six series of lectures (each accompanied by a problem set done in Python) and five projects. The first three large projects were my favorite, so I&#8217;ll just give them a brief recap here:

- Asteroids &#8211; required you to implement a [Kalman filter][5] to simulate the driving of a spaceship through an asteroid field. Kalman filters are state projectors; given a current state of some environment, use knowns to project that environment into the future and then update your understanding of that environment after the next timestep. In this simulation, our environment was a space filled with asteroids that we could sense with radar. Our job was to use the knowledge of each asteroid&#8217;s current position and velocity to guess their velocity and position in the future. By using this guess, we were able to move our ship through the field without hitting any asteroid, safely plotting a path out.
- Mars glider &#8211; another simulation wherein you were given a topographic map but without any idea of where on the map you were as you shot into the atmosphere of Mars. The task was to, using a [particle filter][6], develop a belief of where on the map you were before you fell too far into the atmosphere. A particle filter can be thought of as a state estimator in that you create thousands of guesses of an object&#8217;s state (in this case our glider&#8217;s position and direction). As the simulation progresses, you match the guess with the reality (in this case that would require that we use the topographic map to see if our guess&#8217;s height above some area matched that of the real glider) and if the guess is too far away from the reality, you eliminate that guess from the pool of potential guesses. By the end, you only have a few guesses left, and you better hope they&#8217;re right!
- Warehouse &#8211; here our task was to plot a robot&#8217;s path through a fictitious warehouse (using a modified [A\* search algorithm][7]). To do so, we were given a start point, boxes in the warehouse to pick up, and map that we could traverse one step at a time. The warehouse contained walls and floors that sloped (meaning that they had an additional cost to get out of certain areas if you ventured too far into them) and at each step we could move our robot orthogonally or diagonally. We had to navigate to a box, return it to the start point, and then navigate to the next box, repeating this cycle until all boxes had been returned. In doing so we built up a series of actions (&#8220;move left&#8221; or &#8220;put box down&#8221;) that we returned to a controller that tested our plan against the optimal solution.

My qualms with the lectures aside, this was probably one of the most fun college courses I&#8217;ve taken. Instead of splicing bits (which is fun, but sometimes tedious) we were dealing with concepts, data structures, and algorithms that felt closer to the things that led me to continue my education to this point. Seeing simple heuristics and mental frameworks combined with mathematical theorems so that we could better explain the world around us (and give that knowledge to software/robots) was incredibly rewarding and thought provoking. In short, 10/10, would do again.

[1]: https://www.jsulz.com/2020/05/03/a-gt-omscs-course-review-high-performance-computer-architecture-cs6290/
[2]: https://en.wikipedia.org/wiki/Sebastian_Thrun
[3]: https://www.jsulz.com/2020/01/02/a-gt-omscs-course-review-graduate-introduction-to-operating-systems-cs6200/
[4]: https://www.jsulz.com/2020/01/03/a-gt-omscs-course-review-advanced-operating-systems-cs6210/
[5]: https://en.wikipedia.org/wiki/Kalman_filter
[6]: https://en.wikipedia.org/wiki/Particle_filter
[7]: https://www.youtube.com/watch?v=ySN5Wnu88nE
