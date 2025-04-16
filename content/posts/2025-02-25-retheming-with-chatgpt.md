---
author: Jared Sulzdorf
type: post
title: 'Retheming With ChatGPT'
date: 2025-02-25T05:08:53-08:00
url: 2025/02/25/retheming-with-chatgpt
draft: false
categories:
  - "Artificial Intelligence"
  - "Hugo"
  - "Netlify"
---

Near the end of 2023 I left my job at [Pantheon](https://pantheon.io/) and in doing so severed my professional connection to WordPress. After over a decade toiling away, it felt like as good of a time as any to take a break from the CMS that powers 43% of the internet ([try as Matt Mullenweg might to take that number down a few points](https://techcrunch.com/2025/01/11/matt-mullenweg-deactivates-wordpress-accounts-of-contributors-planning-a-fork/)). [Hugo was my choice](https://www.jsulz.com/2023/11/11/why-hugo-why-not-wordpress/) because at the time I wanted a static site generator and to learn more about Go. While I never did dive into [Go](https://go.dev/), it didn't effect how I felt about the choice. Hugo is rock solid - it just works. 

<!--more-->

To speed up the initial transition, I choose a pre-built theme, [beautifulhugo](https://github.com/imroc/beautifulhugo), and put it on Netlify. My goal was to write my own theme, but the tedium of writing HTML templates and relearning CSS kept sapping my motivation. I am forever grateful for people that want to make things look beautiful. I am simply not one of those people. 

This project hung over my head every time I visited my blog to write a post. Then, just as soon as I was getting back into writing, my focus turned to finding work and the blog fell by the wayside.

Recently, I've come back to this digital home. A combination of more writing at work, more engagement in social media (primarily LinkedIn and Bluesky) has opened me up to other voices and given me motivation to refine my own. Returning here meant a rekindling of my desire to make this place more my own, but [with a newborn](https://www.jsulz.com/2025-01-23-on-bravery-and-love/) time is precious. So much of autodiadactic learning is searching for the right resources to learn and bungling through esoteric documentation. My schedule is constrained and the desire to hunt is lessened, but my love of learning has not. So how to strike a balance?

In this LLM-enabled world, I could simply ask ChatGPT or Claude (or any one of a myriad of products that leverages their APIs) to guide me through the process end-to-end, but that's not very fufilling. Instead, inspired by a few different resources ([these](https://github.com/codedidit/learnanything) [prompts](https://www.reddit.com/r/ChatGPT/comments/1hjqq72/how_to_start_learning_anything_prompt_included/) in particular were useful), I asked ChatGPT for a personalized learning plan. 

This time, my focus was not on Go - turns out templating a blog is perhaps not the gateway to learning a language unless you're really building the blog from the ground up. Instead, I focused on another long-held learning desire: To pick up [Tailwind](https://tailwindcss.com/). [Bootstrap](https://getbootstrap.com/) has long been my CSS framework of choice. I still think there's a time and place for it, but Tailwind is everywhere and I wanted to pick up something that gave me a little more flexibility than Bootstrap. 

I gave ChatGPT ([o1](https://openai.com/o1/) - probably overkill for this, but tokens are tokens) my overall skill level with HTML and CSS, my goals (learn Tailwind), a few constraints: 
* 6-8 hour learning plan
* 20-30 minutes of learning at a time

and a few additional inputs and requirements: 
* Theme colors (light/dark mode based on two of my favorite Calvin and Hobbes books - There's Treasure Everywhere and Homicidal Psycho Jungle Cat)
* Font pairing ([Rokkitt](https://fonts.google.com/specimen/Rokkitt) for the heading, [Raleway](https://fonts.google.com/specimen/Raleway) for the body )
* The blog would be responsive with a nav, single column for content, and a footer
* I wanted to focus on typography and whitespace
* My overall take on blog design (yes, I have feelings about this - 7 years of working on a [website and blogging platform](https://www.lexblog.com/) will do that to you)

And from there, we were off to the races. The course was split into a series of modules:
* Step 1: Introduction Module (20 minutes)
* Step 2: Main Modules (3 hours)
    * Module 1: Tailwind Setup & Basic Concepts 
    * Module 2: Core Tailwind Classes & Utility Patterns
    * Checkpoint Assessment 
    * Module 3: Custom Theming & Tailwind Plugins (30 minutes)
* Step 3: Advanced Modules (~1 hour)
    Module 4: Advanced Styling Patterns & Dark Mode 
    Module 5: Advanced Layouts & Components
* Step 4: Put it into practice (~3 hours)
    * Not so much a module here as an interactive session where I put the first learnings into practice with my blog and had a back and forth as I went

Each module had learning objectives, a high-level view of the content we would go through, and theory/practical questions.

As I went through each step, I took notes on the side while adding clarrifing questions. The structure of the input back to `o1` was aligned with the different lesson headings; attempting to give it as many clues as possible as to where we were in the conversation. I asked it to review and address my questions as well as responses to various exercises/additional follow-up questions that it had. Additionally, where I made mistakes or where my questions indicated a gap in knowledge (or desire to dig deeper on a specific topic), I asked for the learning plan to be updated and this context incorporated in future modules. An interactive loop looked something like this (my inputs in `[]` and `o1`'s in `<>`): 

```bash
[request for next module]
<module content>
[response to module questions]
[questions about module content]
[request to review responses/questions and update modules based on review]
<responses and feedback>
[request for next module]
.... repeat
```
At the end, I asked for a summary of the back and forth to include in my Obsidian notes. I've come back to these a few time since, tweaking and updating them with additional resources that I've found. Most of this is in an attempt to remain very active in the learning process. I've now [read enough papers](https://huggingface.co/papers/2502.12447) about the gaps in learning that can arise from leaning on LLMs too much to be wary about the high that comes with accomplishment. Instead I need to be thinking: Did I actually learn something? Is it sticking?

As for the retheme itself? That was the boring and most fun part :) 

I kickstarted it by using a [Tailwind starting point](https://github.com/bep/hugo-starter-tailwind-basic) from the man behind Hugo himself. The repo is pretty barebones, but it speed up the integration between Tailwind and Hugo's build process so that I didn't waste time futzing about. 

`o1` didn't take me through the Hugo templating itself; that was still a hand-driven process. It's nice to get your hands dirty the first time just so you know what you're doing. I set up all the base layouts and partial templates that make a blog go, including a few new templates for fun (and that will hopefully encourage me to write more). Once the HTML was set up, it was really just a matter of applying the lessons and then deploying on Netlify. 

End-to-end the process was much faster than anything I would've done by myself (as evidenced by how long it took me to kick off this retheme in the first place). Did I learn anything? I have a much more firm grasp on Hugo and it's [templating engine](https://gohugo.io/templates/). The documentation is sterling and I'm glad I didn't just put all of my requirements into an agent and let it go. As for Tailwind, I feel like the only way to really learn about a library like this is to continue to use it. There's a rush that comes from learning something, and ChatGPT turbocharges that in a way that I could find very addictive, but it feels no more lasting than any weekend binge on a side-project. The real value was in getting over the hump in starting the process. Which isn't nothing, but it certainly isn't everything. 