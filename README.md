# VOITH — Next.js Site

Server-rendered marketing site for VOITH (Vaidya's Organization of Industries & Trading Houses), built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## Stack

- **Next.js 15** — App Router, server components by default (SSR)
- **React 19**
- **TypeScript** — strict mode
- **Tailwind CSS v4** — design tokens via `@theme` in `globals.css`
- **IBM Plex Sans** — loaded via `next/font/google`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Script          | What it does                  |
| --------------- | ----------------------------- |
| `npm run dev`   | Start dev server (Turbopack)  |
| `npm run build` | Production build              |
| `npm run start` | Run the built app             |
| `npm run lint`  | Run Next.js lint              |

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, font, metadata
│   ├── page.tsx            # Home (composes all sections)
│   └── globals.css         # Tailwind v4 import + design tokens + preserved styles
├── components/
│   ├── Topbar.tsx          # Top sector strip
│   ├── Nav.tsx             # Sticky nav
│   ├── Hero.tsx            # Hero + dark right panel
│   ├── Features.tsx        # Three-up stats strip
│   ├── Businesses.tsx      # Business-line cards
│   ├── Global.tsx          # Global partnerships section
│   ├── WorldMap.tsx        # 'use client' — canvas dot map
│   ├── Milestones.tsx      # Split dark/light milestones
│   ├── History.tsx         # Era-grouped timeline
│   ├── Philosophy.tsx      # Mission / Vision / Values
│   ├── Family.tsx          # Leadership cards
│   ├── Future.tsx          # Future endeavours
│   ├── Testimonials.tsx    # Quote grid
│   ├── Footer.tsx          # Footer
│   └── Reveal.tsx          # 'use client' — IntersectionObserver wrapper
└── data/
    └── content.ts          # All static content (typed)
```

## Architecture notes

- **Server-rendered by default.** Only `Reveal` and `WorldMap` are client components — everything else streams as HTML.
- **`Reveal`** is a generic wrapper that adds the `.rev` class and toggles `.in` once the element enters the viewport. Pass `delay={1..4}` to stagger.
- **`WorldMap`** lazy-loads `topojson-client` from unpkg and the world atlas data on mount; the dot pattern is sampled from an offscreen canvas. Falls back to a message if the network request fails.
- **Tailwind v4** is wired through `@tailwindcss/postcss`. Design tokens (colors, fonts) live in `@theme {}` inside `globals.css`, so you can use them as Tailwind utilities (e.g. `bg-red`, `text-muted`) for any new markup.
- Existing class-based styles are preserved in `globals.css` for pixel-perfect parity with the original HTML. Refactor incrementally to Tailwind utilities as you wish.
- Static content is extracted to `src/data/content.ts` so section components stay presentational and content edits don't require touching JSX.

## Mojibake fixed

The source HTML had broken UTF-8 (`â` instead of em-dashes, `Â·` instead of middle dots, etc.). All such characters have been normalized to proper Unicode in this conversion.
