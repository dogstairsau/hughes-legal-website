# Hughes Legal — preview site

A modern, custom marketing site for Hughes Legal (Essendon lawyers since 1983), built as a
**preview to send the client**. This is a standalone project — it has **no connection to the
live `hugheslegal.com.au` site** and cannot affect it.

Built with **Next.js (App Router, TypeScript)** and exported to **static HTML/CSS/JS**
(`output: 'export'`). There's no server, database, or CMS — which is the whole point: the
client's current site was a hacked WordPress, and a static export removes that attack surface
entirely. Deploys to any static host (GitHub Pages, Netlify, Cloudflare Pages, Vercel).

## Stack
- Next.js 15 (static export) · React 19 · TypeScript
- Lato via `next/font` (matches the firm's brand font)
- Plain global CSS with brand tokens — no UI framework

## Structure
```
app/
  layout.tsx     # fonts, SEO metadata, LegalService JSON-LD
  page.tsx       # composes the sections
  globals.css    # all styling (brand tokens at top)
components/      # Header, Hero, TrustBand, Features, Paths, Services, Why, People, LocalMap, Contact, Footer
lib/team.ts      # single source of truth for team + brand constants
public/          # favicon, .nojekyll, (drop images here)
```

## Design & content (built to the audit + inspiration)
- **Value-prop H1** with two-tone styling — "Essendon's local lawyers, *trusted since 1983*".
- **Hero the people** — a row of team portraits on brand colour blocks (HireLaw/Adam Law style).
- **Personal vs Commercial routing** — hero → "Where can we help?" chooser → matching services.
- **Trust signals** — stats row (1983 / 40+ yrs / 7 lawyers / 1-day reply), trust band, feature trio.
- **Local focus** — dedicated Essendon map section (mocked) with directions + suburbs served.
- **Conversion** — enquiry form leads with a "reply within one business day" commitment + service routing.
- **Debt recovery & SMSF** surfaced with outcome-focused copy.
- **SEO/GEO** — metadata, Open Graph, `LegalService` JSON-LD (address, hours, area served).
- Wordmark footer, responsive, accessible (skip link, focus states, reduced-motion).

## Run locally
```
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Live preview link (GitHub Pages)
A workflow at `.github/workflows/deploy-pages.yml` builds and deploys on push.
**One-time setup:** repo → Settings → Pages → Source: **GitHub Actions**.
The site then publishes to `https://dogstairsau.github.io/hughes-legal-website/`.

## Real brand assets
This sandbox couldn't reach `hugheslegal.com.au` (network egress allowlist), so the logo is a
faithful SVG recreation and images use placeholder slots. To use the real assets — no code
changes needed beyond the noted lines:

| Asset | Where | How |
|---|---|---|
| Logo | `components/Header.tsx` / `public/` | add `public/hughes-legal-logo.png`, swap the inline `<svg>` brand mark for `<Image>` |
| Hero banner | `components/Hero.tsx` | optional background image |
| Team headshots | `lib/team.ts` | drop files in `public/team/` and set each `photo:` path |
| Team group photo | `components/Why.tsx` | add `public/team-group.jpg`, set as `.why__photo` background |

Client-provided source URLs (fetch once the host is allowlisted):
- Logo: `https://hugheslegal.com.au/wp-content/uploads/2019/01/hughes-legal-logo.png`
- Hero: `https://hugheslegal.com.au/wp-content/uploads/2025/09/Banner-Image-3-copy-new-scaled.webp`

## Enquiry form
`components/Contact.tsx` validates and shows a success state but has **no backend**. Point it
at Formspree / Netlify Forms / your own endpoint where noted in the submit handler.
