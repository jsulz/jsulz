---
author: Jared Sulzdorf
type: post
title: 'Retheming With ChatGPT'
date: 2025-02-18T21:17:18-08:00
url: 2025/02/18/retheming-with-chatgpt
draft: true
categories:
    - Artificial Intelligence
    - Hugo
    - Netlify
---

Near the end of 2023 I left my job at [Pantheon]() and in doing so severed my professional connection to WordPress. After over a decade of working with WordPress, it felt like as good of a time as any to take a break from the CMS that powers 43% of the internet ([try as Matt Mullenweg might to take that number down a few points]()). [Hugo was my choice]() because at the time I wanted a static site generator and to learn more about Go. While I never did dive into [Go](), it didn't effect how I felt about the choice. Hugo is rock solid - it just works. 

To speed up the initial transition, I choose a pre-built theme, [beautifulhugo](), and put it on Netlify. My goal was to write my own theme, but the tedium of writing HTML templates and relearning CSS kept sapping my motivation. I am forever grateful for people that want to make things look beautiful. I am simply not one of those people. 

This project hung over my head every time I visited my blog to write a post. Then, just as soon as I was getting back into writing, my focus turned to finding work and the blog fell by the wayside.

Recently, I've come back to this digital home. A combination of more writing at work, more engagement in social media (primarily LinkedIn and Bluesky) has opened me up to other voices and given me motivation to refine my own. Returning here meant a rekindling of my desire to make this place more my own, but [with a newborn]() time is precious. So much of autodiadactic learning is searching for the right resources to learn and bungling through esoteric documentation. With a constrained schedule, my desire to hunt is lessened but my love of learning has not. So how to strike a balance?

In this LLM-enabled world, I could simply ask ChatGPT or Claude (or any one of a myriad of products that leverages their APIs) to guide me through the process end-to-end, but that's not very fufilling. Instead, inspired by a few different resources ([these](https://github.com/codedidit/learnanything) [prompts](https://www.reddit.com/r/ChatGPT/comments/1hjqq72/how_to_start_learning_anything_prompt_included/) in particular were useful), I asked ChatGPT for a personalized learning plan. 

This time, my focus was not on Go - turns out templating a blog is perhaps not the gateway to learning a language unless you're really building the blog from the ground up. Instead, I focused on another long-held learning desire: To pick up [Tailwind](). [Bootstrap]() has long been my CSS framework of choice. I still think there's a time and place for it, but Tailwind is everywhere and I wanted to pick up something that gave me a little more flexibility than Bootstrap. 

I gave ChatGPT ([o1]()) my overall skill level with HTML and CSS, my goals (learn Tailwind), a few constraints: 
* 6-8 hour learning plan
* 20-30 minutes of learning at a time

and a few additional inputs and requirements: 
* Theme colors (light/dark mode)
* Font pairing
* The blog would be responsive with a nav, single column for content, and a footer
* I wanted to focus on typography and whitespace
* My overall take on blog design (yes, I have feelings about this - 7 years of working on a [blogging platform]() will do that to you)

And from there we were off to the races. 

        Step 1: Introduction Module (20 minutes)
        Step 2: Main Modules (Day 1)
            Module 1: Tailwind Setup & Basic Concepts (30 minutes)
            Module 2: Core Tailwind Classes & Utility Patterns (30 minutes)
            Checkpoint Assessment (15 minutes)
            Module 3: Custom Theming & Tailwind Plugins (30 minutes)
        Step 3: Put it into practice
        Step 4: Advanced Modules
            Module 4: Advanced Styling Patterns & Dark Mode (30 minutes)
            Module 5: Advanced Layouts & Components (30 minutes)

        Each module had learning objectives, a high-level view of the content we would go through, and theory/practical questions. 
    * As I went through a "lesson", I took notes on the side while adding clarifying questions. I structured these to align with the module headings and asked ChatGPT to review my questions (and responses to various exercises) before moving on to the next module. Additionally, where I made mistakes or where my questions indicated a gap in knowledge (or desire to dig deeper on a specific topic), I asked for the learning plan to be updated and this context incorporated in future modules. An interactive loop looked something like this: 
    [request for next module]
    <module content>
    [response to module questions]
    [my questions about module content]
    [request to review responses/questions and update modules based on review]
    [request for next module]
    * At the end, I asked for a summary of my learning (I included this in my Obsidian notes) as well as some resources
    * Tailwind links and learnings
        * https://nerdcave.com/tailwind-cheat-sheet 

    * The theme itself was delightfully simple
        * I used https://github.com/bep/hugo-starter-tailwind-basic as a starting point to get Tailwind installed and configured for builds alongside Hugo
        * ChatGPT didn't take me through Hugo templating; that was something I wanted to do myself, so before we got too far into Tailwind
            * I set up the base layouts that were necessary for the blog along with partials. The Hugo documentation is banging on this front. The templating sections are fantastic.
        * Once that was done, I moved onto learning about the core parts of Tailwind