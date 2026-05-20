# Mal Al Sham — The Taste of Damascus

Authentic Syrian & Mediterranean restaurant in El Cajon, CA.
388 E Main St · (619) 401-1055 · Open daily 9 AM – 10 PM.

Built by [Weblove Elite](https://github.com/aanthonya2003-lgtm) — editorial-grade restaurant web design.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind v4 · Framer Motion · GSAP 3.13 · Lenis · Lucide

## Local development

```bash
pnpm install
cp .env.example .env.local       # fill in NEXT_PUBLIC_FORMSPREE_ID
pnpm dev                          # http://localhost:3000
pnpm build && pnpm start          # production build
pnpm typecheck                    # tsc --noEmit
```

## Deploy

1. Push to GitHub (already done).
2. Go to **vercel.com/new** → Import this repo.
3. Framework detected: **Next.js**. Click **Deploy**.
4. Add env vars in Vercel: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_FORMSPREE_ID`.
5. Custom domain `malalsham.com` → Cloudflare A record `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`.

## Project conventions

See [`CLAUDE.md`](./CLAUDE.md) — single source of truth for tokens, rules, forbidden patterns.

## Routes

- `/` — home
- `/menu` — full menu
- `/catering` — family platters
- `/about` — origin story
- `/contact` — map, hours, form

## License

© 2025 Mal Al Sham. All rights reserved.
