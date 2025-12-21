# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog built with Next.js 13 (App Router), Contentlayer, and Tailwind CSS. The site is deployed on Vercel and features both blog posts and static pages written in MDX.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build and preview production build
npm run preview

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Content Management (Contentlayer)

Content is managed through Contentlayer, which transforms MDX files into type-safe data:

- **Configuration**: `contentlayer.config.js` defines two document types:
  - `Post`: Blog posts from `content/posts/**/*.mdx`
  - `Page`: Static pages from `content/pages/**/*.mdx`
- **Generated types**: Available at `.contentlayer/generated` (aliased as `contentlayer/generated`)
- **Computed fields**:
  - `slug`: Full URL path (e.g., `/posts/hello-world`)
  - `slugAsParams`: Path segments after the type (e.g., `hello-world`)

### Routing Structure

Next.js 13 App Router with catch-all routes:

- `/app/page.tsx`: Homepage - lists all posts sorted by date
- `/app/posts/[...slug]/page.tsx`: Individual blog post pages
- `/app/[...slug]/page.tsx`: Static pages (e.g., `/about`)

Both dynamic routes use:
1. `generateStaticParams()` for static generation
2. `generateMetadata()` for SEO metadata
3. Helper functions (`getPostFromParams`, `getPageFromParams`) to fetch content

### Components

- `components/mdx-components.tsx`: MDX component renderer
- `components/theme-provider.tsx`: Dark mode context provider (next-themes)
- `components/mode-toggle.tsx`: Theme toggle UI component
- `components/analytics.tsx`: Vercel Analytics + Google Analytics integration

### Styling

- Tailwind CSS with dark mode support via `next-themes`
- Typography plugin (`@tailwindcss/typography`) for prose styling
- Global styles in `app/globals.css`
- Inter font from Google Fonts

### Path Aliases

TypeScript paths configured in `tsconfig.json`:
- `@/*`: Project root
- `contentlayer/generated`: `.contentlayer/generated`

## Key Patterns

### Adding New Blog Posts

Create MDX files in `content/posts/` with required frontmatter:
```mdx
---
title: "Post Title"
description: "Optional description"
date: "2025-01-01"
---
```

**Writing Style**: Blog posts should sound natural and human-written. Slight grammatical imperfections are acceptable and preferred over overly polished AI-sounding prose. Focus on being direct, technical, and problem-focused rather than marketing-speak.

### Adding New Static Pages

Create MDX files in `content/pages/` with required frontmatter:
```mdx
---
title: "Page Title"
description: "Optional description"
---
```

### Analytics

Two analytics systems are integrated:
- Vercel Analytics (automatic)
- Google Analytics (tracking ID: `G-5YSEFPTG53`)

## Build Process

The build integrates Contentlayer via `next.config.js` using `withContentlayer()` wrapper, which:
1. Processes MDX files from `content/`
2. Generates TypeScript types
3. Creates the `.contentlayer/generated` directory
4. Runs before the Next.js build
