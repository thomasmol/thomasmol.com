---
title: SvelteKit Starterpack CLI tool
date: 2023-02-27T10:00:00.000Z
last_edited: 2023-02-19T10:00:00.000Z
logo: /uploads/projects/sveltekitcli_logo.png
thumbnail: /uploads/projects/sveltekitstarterpack.png
layout: project
excerpt: Een CLI tool om snel een SvelteKit project te starten.
wordcount: 0
readtime: 0
author: Thomas Mol
tags: ['SvelteKit', 'NPM', 'CLI']
---

### What is SvelteKit Starterpack?

The SvelteKit Starterpack is a CLI tool that allows you to easily and quickly set up production-ready apps with SvelteKit. The tool is available on [NPM](https://www.npmjs.com/package/create-sveltekit-starterpack) and can be used to set up a SvelteKit project quickly with a number of standard packages. Currently, you have the option to add TailwindCSS as a styling framework and the option to set up a project with the OpenAI API to quickly start an AI project.

### Why?

I noticed that I wanted to start projects more easily and make use of standard packages. Therefore, I created this CLI tool to quickly set up a SvelteKit project with a number of standard packages and options to add extra packages.

### What I did

- Designed and built the CLI tool (with Prompter)
- Made the tool available on NPM

Open a terminal and execute the following command to use the tool:

```bash
 npx create-sveltekit-starterpack@latest my-project
```
