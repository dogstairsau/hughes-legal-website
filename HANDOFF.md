# HANDOFF — read me first

This is a **preview marketing site for Hughes Legal** (Essendon lawyers since 1983),
built to pitch the client a new custom site to replace their hacked WordPress.
It is standalone and has **no connection to the live hugheslegal.com.au site.**

- **Live preview:** https://dogstairsau.github.io/hughes-legal-website/
- **Repo:** dogstairsau/hughes-legal-website · **Branch:** `claude/eloquent-ritchie-94a44j`
- **Stack:** Next.js 15 (App Router, TS) → static export (`output: 'export'`) → GitHub Pages (auto-deploys on push)
- Run: `npm install` → `npm run dev` (localhost:3000) · build: `npm run build` (→ `./out`)

## Why this doc exists
Previous sessions ran under a **restrictive network egress policy** (allowlist).
GitHub + npm were reachable; everything else (the client's site, image CDNs, the
headless-browser download) returned `403 Host not in allowlist`. That blocked two things:
1. Pulling the firm's **real assets** → site is full of placeholders.
2. Installing a **browser to screenshot** → design was built blind.

The user is switching this environment to **Full network access**. In the new session,
**do these first.**

## STEP 1 — Confirm access
```bash
curl -sS -o /dev/null -w "%{http_code}\n" https://hugheslegal.com.au/   # expect 200, not 403
```
If still 403, the policy change didn't take — tell the user to set Full network access and start a new session.

## STEP 2 — Pull the REAL brand assets (biggest "finished" win)
Save into `/public` and self-host (stop using the external CDN in `lib/images.ts`).

- **Logo:** https://hugheslegal.com.au/wp-content/uploads/2019/01/hughes-legal-logo.png → `public/logo.png`
- **Hero banner:** https://hugheslegal.com.au/wp-content/uploads/2025/09/Banner-Image-3-copy-new-scaled.webp → `public/hero.webp`
- **Team headshots (all 7):** scrape from https://hugheslegal.com.au/about-us/our-people/
  Save to `public/team/<firstname>.jpg`. People (with emails) are the source of truth in `lib/team.ts`:
  Gerard Hughes (Partner), David Blunt (Partner), Chris Hughes (Partner),
  James Marchesani (Partner), Vince Roccisano (Solicitor), Luke Di Lizio (Solicitor),
  Jesse Manunzio (Senior Property Conveyancer).
- Grab brand colours from the live CSS if they differ from current (`--teal`, `--clay`).
- Also pull 1–2 real office/people photos if available for the path cards & "why" section.

Then wire them:
- `components/Header.tsx` → swap the `HL` text mark for the real logo `<img>`.
- `lib/team.ts` → set each person's `photo: "/team/<name>.jpg"` (People + hero-less cards update automatically).
- `lib/images.ts` → repoint `hero`, `boardroom`/path images, `street` to local `/public` files.
- `components/Why.tsx`, `components/Paths.tsx`, `components/CtaBand.tsx`, `components/Hero.tsx` use those.

## STEP 3 — Get eyes on it (stop building blind)
```bash
npx playwright@latest install chromium    # now reachable with full access
```
Then script a screenshot of `npm run build && npx serve out` (or `next dev`) at desktop + mobile widths,
and ACTUALLY LOOK before/after each change.

## STEP 4 — Polish pass (the user said it "feels unfinished")
Known weak spots to fix once real assets are in and you can see it:
- Team: real headshots replace the initials-monogram tiles (`.person__photo` / `components/People.tsx`).
- Replace generic AI imagery with the firm's real photos.
- Tighten spacing/rhythm, check hero balance, verify the Google Map embed renders,
  check mobile (≤600px) and tablet (≤1000px) breakpoints.
- Confirm no broken images anywhere (was a risk with the external CDN).

## Decisions already locked
- **Brand font = Lato** for everything incl. headlines (user chose strict brand; no serif).
- Sharp corners (no rounded), custom line icons (`components/icons.tsx`), no emoji.
- IA: hero → **personal vs business path chooser** (kept near top) → services → why → people → local map → CTA → contact.
- Audit asks implemented: value-prop H1, one-business-day promise on the form, debt-recovery/SMSF surfaced, LegalService JSON-LD + OG, local Essendon section.

## Deploy notes
- Workflow: `.github/workflows/deploy-pages.yml` (build → upload `out` → Pages). Pages is enabled (Source: GitHub Actions). Repo is public.
- Push to the branch = auto-deploy. Verify run success via the GitHub MCP `actions_list` (parse JSON; responses are large).

## Project map
```
app/layout.tsx     fonts (Lato), SEO metadata, JSON-LD
app/page.tsx       section order
app/globals.css    all styling + brand tokens (top of file)
components/*        Header, Hero, Paths, TrustBand, Features, Services, Why, People, LocalMap, CtaBand, Contact, Footer, icons
lib/team.ts        team data + brand constants (set photo paths here)
lib/images.ts      image URLs (repoint to /public after pulling real assets)
```
