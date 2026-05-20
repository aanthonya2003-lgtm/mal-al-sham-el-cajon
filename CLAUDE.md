# Mal Al Sham — Project Rules

> Read this file before editing anything. It is the single source of truth.

## Business Context

- **Name:** Mal Al Sham — The Taste of Damascus (مطعم مال الشام)
- **Cuisine:** Syrian / Mediterranean / Lebanese — 100% Halal
- **Founded:** 2018 by Mr. Ahmed Abu Ali (family arrived from Syria, 2016)
- **Address:** 388 E Main St, El Cajon, CA 92020
- **Phone:** (619) 401-1055 — `tel:+16194011055`
- **Email:** info@malalsham.com
- **Hours:** Mon–Sun, 9:00 AM – 10:00 PM (7 days)
- **Price range:** `$$` — Shawarma sandwich $12; Mixed Grill $23.99
- **Reviews:** 1,500+ five-star (self-reported) / 3,131 on Restaurant Guru (4.4/5) / 648 on Yelp / 9,022 Facebook likes
- **Featured in:** Eater San Diego (twice), Minnesota Tours ("Best Arab Restaurant in America"), The Nexus (5/5)

## Stack

- Next.js 16+ (App Router) · React 19 · TypeScript strict
- Tailwind v4 (CSS-first `@theme` directive)
- Framer Motion (entrance + hover)
- GSAP 3.13 + ScrollTrigger (bidirectional scroll cinema)
- Lenis (smooth scroll)
- SplitType (text reveals)
- `next/font` → Playfair Display + DM Sans + Amiri
- Lucide React (icons — Lucide first; never extract what Lucide covers)
- Formspree (contact form)
- Vercel (deploy via GitHub) + Vercel OG (social image)

## Design Tokens

```css
--bg-base:        hsl(25 15% 6%)     /* Deep charcoal-brown */
--bg-elevated:    hsl(25 12% 10%)    /* Lifted surfaces */
--bg-warm:        hsl(30 20% 13%)    /* Warm section variant */
--border-subtle:  hsl(30 15% 18%)
--text-primary:   hsl(38 15% 93%)    /* Warm off-white */
--text-mute:      hsl(35 10% 58%)
--accent:         hsl(38 85% 52%)    /* Damascus saffron gold */
--accent-hover:   hsl(38 90% 62%)
--accent-deep:    hsl(30 70% 40%)    /* Burnt copper */
--border-gold:    hsl(38 60% 35%)
--ease-out:       cubic-bezier(0.22, 1, 0.36, 1)
```

Image radius: **10px** (never 4px). Section radius: 16px.

## Conventions

- TypeScript strict. Zero `any` without `// reason:` comment.
- Server components by default. `'use client'` only when interactivity required.
- Tailwind utilities inline only. No CSS modules. No inline `style={}` for tokens.
- All animations gated behind `prefers-reduced-motion: no-preference`.
- Images: `next/image`, explicit `width` + `height`, `loading="lazy"` (except hero: `priority` + `fetchPriority="high"`).
- GSAP cleanup: `ctx.revert()` in effect return.
- SplitType cleanup: `split.revert()`.
- Lenis cleanup: `lenis.destroy()`.
- Layout: `overflow-x: clip` on html+body (never `overflow: hidden`).
- Sizing: `100dvh` (never `100vh`).
- Safe-area insets on sticky nav + footer.
- WhatsApp FAB on every page.
- LocalBusiness/Restaurant JSON-LD on homepage.
- Page transitions live in `app/template.tsx` — NEVER in `app/layout.tsx`.

## Forbidden

- Lorem ipsum. picsum.photos. Unsplash URLs.
- `once: true` on any ScrollTrigger — banned permanently.
- `overflow: hidden` on sticky ancestors.
- `100vh` without `100dvh`.
- Hover-only interactions on mobile.
- Touch targets `<44px`. Inputs `<16px` font-size.
- Inter, Roboto, Helvetica, Arial as display type.
- Purple gradients. Generic Aegean blue+white "Mediterranean" palette.
- Invented menu items, prices, testimonials, or asset URLs not in this file.
- Stock photo faces. Confabulated reviews.
- `TODO` / pseudocode / `console.log` in production.
- `.env` committed to git. Hardcoded secrets.
- Page transitions in `layout.tsx` (must be `template.tsx`).
- Missing `llms.txt` or `llms-full.txt` at ship time.

## Verified Asset URLs (use ONLY these)

- Logo (4x):  `https://malalsham.com/wp-content/uploads/2024/09/mal-logo@4x-scaled.webp`
- Icon (270): `https://malalsham.com/wp-content/uploads/2024/09/cropped-icon-logo-270x270.png`
- Hummus:     `https://malalsham.com/wp-content/uploads/2024/09/mal-al-sham-hummus-768x432.jpg`
- Interior:   `https://malalsham.com/wp-content/uploads/2024/09/IMG_2061-1536x1152-1-768x576.jpg`
- Falafel:    `https://malalsham.com/wp-content/uploads/elementor/thumbs/malalsham_falafels-qu7um7xasb0okoh06n6h5zsqgsa9rf5ksj71emz25c.jpg`
- Kebab:      `https://malalsham.com/wp-content/uploads/elementor/thumbs/mal-al-sham-kebab_-qu7uml31fzip37xw1sv94wh6s6her6lticbu4ifjq8.jpg`
- Shawarma:   `https://malalsham.com/wp-content/uploads/elementor/thumbs/SHAWARMA-MALALSHAM-kouzi-qu7umvf9j5wumxivdfc5ebv9bf2g3uqv7ri6ek07ts.jpg`

## Routes

- `/` — Home (primary conversion)
- `/menu` — Full menu, tabbed by category
- `/catering` — Family platters, large-group orders
- `/about` — Origin story
- `/contact` — Map, hours, form, WhatsApp

## Deploy

GitHub → vercel.com/new → import → Deploy. Domain: malalsham.com (Cloudflare DNS).

## Care Plan Upsell

- $250/month: hosting, monthly content updates (weekly specials), 1h edits.
- `llms.txt` upsell: $250 one-time per existing client site.
