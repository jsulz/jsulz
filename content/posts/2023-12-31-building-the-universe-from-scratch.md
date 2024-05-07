---
author: Jared Sulzdorf
type: post
title: "2023 12 31 Building the Universe From Scratch"
date: 2023-12-24T12:22:21-08:00
url: 2023-12-31-building-the-universe-from-scratch
draft: true
categories: ""
---

- Poetry initialization for managing dependencies
- Dockerfile
- Multistage build is the long-term goal, but we'll start with the Python build
- The dockerfile itself is pretty simple at this stage, we're just importing a python image, setting some environment variables, copying files, bringing in dependencies, exposing the right ports, and running the gunicorn server
- Get the barest of bare of the Flask app going
- run.py where we're just pulling in the create_app()
- app.py where we're handling all the app setup
- initial route handling
- First templates
- Static directory
