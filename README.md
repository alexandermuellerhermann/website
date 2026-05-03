# Alexander Müller-Hermann — Tour Guide

Profile site for Alexander Hermann Müller, licensed tour guide in Athens & Greece.

- **Stack**: Next.js 15 (App Router) · React 19 · Tailwind 3 · next-intl · framer-motion
- **Locales**: English, Deutsch, Ελληνικά (`/en`, `/de`, `/el`)
- **Hosting target**: Vercel

## Local development

```bash
npm install
npm run dev          # http://localhost:3000 → redirects to /en
```

## Build

```bash
npm run build        # static-generates /en /de /el + sitemap + robots
npm start
```

## Project structure

```
messages/{en,de,el}.json     ← all visible copy lives here
src/
  app/[locale]/              ← localized layout + page
  app/sitemap.ts robots.ts   ← SEO endpoints
  app/icon.svg               ← favicon
  components/                ← Hero, About, Tours, Languages, Contact, Footer
  components/ui/             ← Greek-key meander, column, Parthenon mark
  components/motion/         ← FadeUp wrapper around framer-motion
  i18n/                      ← next-intl routing + request config
  lib/contact.ts             ← single source of truth for phone/email
  middleware.ts              ← locale detection / redirect
public/
  images/hero-acropolis.svg  ← placeholder, replace with a real photo
  images/alexander-portrait.svg
  images/tours/*.svg         ← per-tour placeholders
  alexander-mueller.vcf      ← downloadable contact card
  (OG image is generated dynamically at src/app/[locale]/opengraph-image.tsx)
```

## Replacing placeholders

| What | Where | Notes |
| --- | --- | --- |
| Real phone | [src/lib/contact.ts](src/lib/contact.ts) | Replace `phone` (display) and `phoneTel` (digits only, with `+`). |
| Real email | [src/lib/contact.ts](src/lib/contact.ts), [public/alexander-mueller.vcf](public/alexander-mueller.vcf) | Update both. |
| Hero photo | `public/images/hero-acropolis.svg` → replace with `.jpg/.webp` | Then update the `src` in [src/components/Hero.tsx](src/components/Hero.tsx). |
| Portrait | `public/images/alexander-portrait.svg` | Same — update [src/components/About.tsx](src/components/About.tsx). |
| Tour images | `public/images/tours/*.svg` | Same — update map in [src/components/Tours.tsx](src/components/Tours.tsx). |
| OG share image | [src/app/[locale]/opengraph-image.tsx](src/app/[locale]/opengraph-image.tsx) | Generated dynamically per-locale via `next/og`. Edit the JSX to tweak design. |
| Copy | `messages/{en,de,el}.json` | Edit in parallel — keys must match across locales. |

## Deploy to Vercel via GitHub

1. Initialise git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create alexander-mueller-tours --public --source=. --push
   ```
2. Go to <https://vercel.com/new>, **Import** the repo. Framework auto-detects as Next.js — no env vars needed.
3. Production deploys on push to `main`; preview deploy per pull request.
4. To add a custom domain (`alexander-mueller.com` or similar): Vercel dashboard → Settings → Domains. One DNS record (A or CNAME) at the registrar.

When the real domain is decided, set it as `NEXT_PUBLIC_SITE_URL` in Vercel project settings so `sitemap.xml` and `robots.txt` use it.

## Adding a new locale (later)

1. Add `messages/<code>.json` with the same keys.
2. Add `<code>` to `routing.locales` in [src/i18n/routing.ts](src/i18n/routing.ts).
3. Add the `<code>` row to `LANG_GLYPHS`/labels in [src/components/Languages.tsx](src/components/Languages.tsx) and [src/components/LanguageSwitcher.tsx](src/components/LanguageSwitcher.tsx).
