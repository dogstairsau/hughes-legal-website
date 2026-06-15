# Hughes Legal — landing page

A fast, custom, dependency-free landing page for Hughes Legal (Essendon lawyers since 1983).
Plain HTML/CSS/JS — no WordPress, no build step, no plugins to keep patched. Drop it on any
static host (Netlify, Cloudflare Pages, Vercel, S3) and it runs.

## Why this approach
The previous site was a WordPress install that was hacked. This rebuild removes that entire
attack surface: there is no admin panel, no database, and no third-party plugins. The whole
site is static files.

## Structure
```
index.html              # the page
assets/css/styles.css   # all styling (brand tokens at top of file)
assets/js/main.js       # nav, form validation, team rendering
assets/img/             # logo, hero banner, headshots, favicon
```

## What the page does (built to the audit recommendations)
- **Value-prop H1** — "Essendon's local lawyers, trusted since 1983" (location + longevity + intent), not a greeting.
- **Personal vs Commercial routing** — the hero pushes visitors into a "Where can we help?" chooser that splits into Personal/Family and Business/Commercial, then guides them into the matching services.
- **Trust signals** — established 1983, 40+ years, the real team heroed, privacy/confidentiality, local-community framing.
- **Conversion** — enquiry form leads with a **"reply within one business day"** commitment and routes by service.
- **Debt recovery & SMSF surfaced** — debt recovery gets outcome-focused copy ("turn unpaid invoices back into cash flow") in a feature card.
- **SEO/GEO** — descriptive title + meta description, Open Graph, and `LegalService` JSON-LD with address, hours and area served.

## Brand
- Font: **Lato** (matches the current site)
- Primary: teal `#15b89a` · Accent: orange `#e8843c` · Ink: navy `#16242f`

## Dropping in the real assets
The environment that built this couldn't reach `hugheslegal.com.au` (network egress
allowlist), so the logo is a faithful SVG recreation and images use placeholder slots.
To use the real assets, just add the files — no code changes needed beyond the noted lines:

| Asset | Where | How |
|---|---|---|
| Logo | header | save as `assets/img/hughes-legal-logo.png`, then swap the inline `<svg>` brand mark in `index.html` for an `<img>` |
| Hero banner | hero | save as `assets/img/hero-banner.webp` (already referenced — it appears automatically) |
| Team group photo | "Why us" | save as `assets/img/team-group.jpg` and set it as the `.why__photo` background |
| Headshots | "Our people" | save to `assets/img/team/` and set each `photo:` path in the `team` array in `main.js` |

Source URLs provided by the client (fetch once the host is allowlisted):
- Logo: `https://hugheslegal.com.au/wp-content/uploads/2019/01/hughes-legal-logo.png`
- Hero: `https://hugheslegal.com.au/wp-content/uploads/2025/09/Banner-Image-3-copy-new-scaled.webp`

## Wiring the form
`main.js` validates and shows a success state but has **no backend**. Point it at an email/CRM
endpoint (Formspree, Netlify Forms, or a POST to your handler) where noted in the submit handler.

## Run locally
```
python3 -m http.server 8000
# open http://localhost:8000
```
