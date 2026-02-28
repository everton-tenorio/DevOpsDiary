---
title: "DevOpsDiary is Back - New Stack, New Look, Same Mission"
date: 2026-02-28
slug: devopsdiary-new-stack-nuxt4
description: "DevOpsDiary migrated from Vue 3 to Nuxt 4, got a new structure, and is now on Instagram and TikTok. Here is what changed and why."
tags: ["devops", "nuxt", "vue", "platform-engineering", "devopsdiary"]
bannerImage: "/blog/devopsdiary-new-stack-nuxt4.png"
---

After months running on Vue 3, DevOpsDiary just shipped a new version, rebuilt from the ground up with Nuxt 4, a cleaner structure, and a clearer mission.

## What changed under the hood

The site was previously built with **Vue 3**, a JavaScript framework for building user interfaces. It worked, but loading and managing the markdown task files required custom parsing logic that was fragile and hard to maintain.

**Nuxt 4** is a full-stack framework built on top of Vue. The key difference: it handles routing, static generation, and content natively, no custom parsers, no workarounds. The result is a faster site, cleaner code, and a much simpler deployment pipeline to GitHub Pages.

## How DevOpsDiary works now

The old flow asked you to complete tasks, open GitHub issues with your solution, and wait to be featured on the site. 

The new flow is simpler:

**Pick a level → Follow the tasks in order → Build. Learn. Share if you want.**

No required format. No submission process. The tasks are organized as a progressive path, Beginner through Advanced, where each task builds on the previous one. The goal is that you finish the path with real skills and real things you built.

## Follow on Instagram and TikTok

Short-form DevOps content is now live on both platforms. Docker tips, Kubernetes concepts, CI/CD patterns, etc.

- Instagram: [@devopsdiary.site](https://instagram.com/devopsdiary.site)
- TikTok: [@devopsdiary.site](https://tiktok.com/@devopsdiary.site)

If you have been following the path and want to share what you built, tag **#DevOpsDiary**.

---

The path starts at [devopsdiary.site/beginner](https://devopsdiary.site/beginner). See you there.
