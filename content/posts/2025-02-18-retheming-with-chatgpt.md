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

* context
    * Near the end of 2023, I left Pantheon
    * Pantheon was a connection to my initial WordPress roots 
    * Leaving felt like a good time to break from WordPress and I went as far away from CMSs for this blog as one could go, into SSGs instead. 
    * Hugo was my choice because at the time I wanted to learn more about Go. While I never did fufill this desire, I don't feel poorly about my choice. Hugo is rock solid. It just works. 
    * To speed up the initial transition, I choose a pre-baked theme and put it on Netlify. 
    * My goal was to eventually write my own theme, but like so many side projects, it never got off the ground. I kept putting off the tedium of writing HTML templates, re-learning CSS (it feels like every 3 years I have to pick up CSS again and my brain has promptly forgotten everything)
* motivation
    * This project stared me in the face every time I wrote a new post and I decided I couldn't ignore it. 
    * But my time with a newborn is precious right now. It's hard to research where to start, what docs to pull up, where to focus my attention. So much of autodidactic learning is finding comfort with the search for the right resources, but as my time has constrained, so has my willingness to hunt. I still love learning and don't want to abdicate the pursuit of knowledge by just asking an LLM to do my bidding for me (unless it's bidding where I feel comfortable in my knowledge (or comfortable in my willful ignorance)). 
* Prompt
    * Inspired by this repo https://github.com/codedidit/learnanything and https://www.reddit.com/r/ChatGPT/comments/1hjqq72/how_to_start_learning_anything_prompt_included/ decided to give it a go
    * I asked ChatGPT for a personalized plan for retheming this blog using TailwindCSS (I haven't given up on learning Go, it just turns out that templating a blog isn't the best way to learn a language - Go figure :P, so instead I'm focusing on another long-held learning desire to pick up Tailwind. An old coworker is a die-hard convert and Tailwind has definitely won)
    * My constraints where that I had to pick it up in 20-30 minute sessions (welcome to trying to learn something on the weekend with a 2 month-old) and only had about 2-3 hours to devote to learning (the implementation of the theme took longer - turns out I'm still slow with CSS, but the time spent in the classroom turned out to be about right)
    * I used o1 to generate the learning plan and walk through
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
* Wrapping up and deploying on Netlify
    @TODO
        Write about blog retheme