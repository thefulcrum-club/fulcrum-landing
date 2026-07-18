# fulcrum-landing: Next.js clone of thefulcrum.lovable.app

## Goal

Produce a pixel-faithful static clone of https://thefulcrum.lovable.app/ (a React/Vite SPA built with Lovable) as a new Next.js project in its own repo at `/Users/abcom/Desktop/fulcrum/fulcrum-landing`.

## Source site summary

Discovered via headless-browser crawl (Playwright, since the site is a client-rendered SPA with a Lovable dev badge, no sitemap/robots). 8 routes, all reachable from the main nav:

- `/` — home
- `/about`
- `/work`
- `/manifesto`
- `/residency`
- `/audit`
- `/retainer`
- `/trust`

Design system: dark editorial theme. Serif italic wordmark ("fulcrum."), uppercase mono nav labels, large serif headings (Playfair Display), mono body/labels (JetBrains Mono), soft radial gradient blobs in the hero, numbered "phase" section markers, FAQ accordions, footer with contact links. Tailwind CSS utility classes throughout (`bg-background`, `text-foreground`, `text-muted-foreground`, `bg-primary`, etc. — CSS custom properties driving a themeable token system). Stylesheet fetched from `/assets/styles-*.css` — this is the compiled Tailwind output and contains the real color tokens (OKLCH/lab-based) and font-face declarations.

## Approach

1. **Scrape**: For each of the 8 routes, use the already-built Playwright crawler (`scratchpad/crawl/crawl.js`) to capture full rendered HTML. Download the compiled CSS asset directly (already fetched). Identify all referenced images/fonts and download them into the new repo's `public/` folder.
2. **Extract design tokens**: Parse the CSS custom properties (`--background`, `--foreground`, `--primary`, etc., plus font-family declarations) out of the downloaded stylesheet and translate them into the new project's `tailwind.config` / `globals.css` `:root` variables, so utility classes in the rebuilt JSX resolve to the same colors/fonts.
3. **Rebuild markup as JSX**: For each route, hand-convert the captured rendered HTML into a Next.js (App Router) page component, preserving the DOM structure and Tailwind classes as closely as practical. Shared chrome (nav header, footer) becomes a layout component. Repeated patterns (FAQ accordion, phase section, CTA buttons) become small reusable components rather than being duplicated per page.
4. **Reproduce interactivity**: Hover/transition states already exist as Tailwind classes (`hover:-translate-y-0.5`, `transition-colors`, etc.) and carry over directly. Any accordion open/close or similar stateful UI becomes a small client component (`"use client"`) with local state — no external state library needed.
5. **Forms/CTAs**: Visual only. Buttons/links route to the corresponding internal page (e.g. "Book an Audit" → `/audit`) or render as static mailto/external links where the source does the same (e.g. `anvit.fulcrum@gmail.com`, LinkedIn, cal.id booking link). No backend, no submission handling.
6. **Fonts**: Playfair Display and JetBrains Mono are loaded from Google Fonts in the source — reproduce via `next/font/google` for the same families/weights rather than self-hosting.
7. **Images**: og:image and any in-page images downloaded and placed in `public/`, referenced with `next/image`.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS, configured with the extracted color tokens
- No CMS/backend — fully static content, hardcoded per page

## Structure

```
fulcrum-landing/
  app/
    layout.tsx          (shared header/footer, fonts, globals.css)
    page.tsx             (home)
    about/page.tsx
    work/page.tsx
    manifesto/page.tsx
    residency/page.tsx
    audit/page.tsx
    retainer/page.tsx
    trust/page.tsx
    globals.css          (tailwind + extracted :root tokens)
  components/
    Header.tsx
    Footer.tsx
    FaqAccordion.tsx
    PhaseSection.tsx      (if pattern repeats across pages)
    CtaButton.tsx
  public/
    (fonts if needed, images, favicon)
  tailwind.config.ts
```

## Out of scope

- Any backend, form submission, analytics, or the Lovable edit badge/script.
- CMS or dynamic content — content is copied verbatim from the scrape.
- Non-visual SEO infra beyond copying over the `<title>`/meta description per page via Next.js metadata API.

## Testing

- `npm run build` succeeds with no type errors.
- Manually diff each of the 8 rendered pages against the live site in a browser (side-by-side) for layout/content parity.
