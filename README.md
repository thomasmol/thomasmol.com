# Thomas Mol | Portfolio Website

Personal portfolio website for Thomas Mol, an app maker from Utrecht, The Netherlands.

## About

This is my personal website showcasing my projects, blog posts, and professional experience. The site is built with modern web technologies to provide a fast, responsive, and accessible user experience.

## Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) - Full-stack web framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Content**: [MDsveX](https://mdsvex.pngwn.io/) - Markdown in Svelte
- **Deployment**: Static site hosting
- **Analytics**: Plausible

## Features

- 📱 Fully responsive design
- 🌙 Dark/light theme support
- ⚡ Optimized performance
- 📝 Blog with Markdown support
- 🚀 Project showcase
- 📄 Resume page
- 🔍 SEO optimized

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run Playwright tests
- `npm run check` - Run Svelte checks
- `npm run lint` - Run linting
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable Svelte components
│   ├── projects/       # Project markdown files
│   ├── posts/          # Blog post markdown files
│   └── icons/          # Icon components
├── routes/             # SvelteKit pages
└── app.html            # Main HTML template
static/
├── images/             # Static images
└── uploads/            # Uploaded assets
```

## Adding Content

### New Projects

Create a new markdown file in `src/lib/projects/` with frontmatter:

```yaml
---
title: Project Name
date: 2023-01-01T00:00:00.000Z
last_edited: 2023-01-01T00:00:00.000Z
logo: /path/to/logo.png
thumbnail: /path/to/thumbnail.png
layout: project
excerpt: Brief project description
author: Thomas Mol
tags: ['tag1', 'tag2']
---
```

### New Blog Posts

Create a new markdown file in `src/lib/posts/` with similar frontmatter structure.

## License

MIT License - feel free to use this as inspiration for your own portfolio!
