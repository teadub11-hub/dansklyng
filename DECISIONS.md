# Decisions still needing confirmation

This branch (`brand-content-seo-upgrade`) keeps the visual identity and homepage concept. It removes public commercial-status language, moves copy onto `/zh` and `/en` URLs, and adds essential SEO. The items below should not be treated as proven until a human confirms them.

## Production origin

- Code does **not** hardcode a domain.
- Set `VITE_SITE_ORIGIN` at launch (expected value, to confirm: `https://dansklyng.com`).
- Until it is set, canonical / hreflang / OG `url` / sitemap `<loc>` values are path-only.

## Photography and video

Placeholder generated assets still in use:

- `public/images/jar-*.jpg`
- `public/images/hero-heath.jpg`, `hives.jpg`, `honey-texture.jpg`, `forest.jpg`, `meadow.jpg`, `latesummer.jpg`, `table.jpg`
- `public/video/hero-heath.mp4`
- `public/og.jpg`

Replace with rights-cleared photography before calling the site production-complete.

## Claims to confirm (do not strengthen without evidence)

| Claim | Where it appears |
|---|---|
| Beekeepers have more than forty years of harvest knowledge on this heath | About, journal “Meet the beekeeper” |
| Honey is raw, unheated, coarsely strained; not pressed; not blended across seasons | Journal, product voice |
| Lynghonning 2025 was sent to Intertek (moisture, HMF, diastase, pollen) | FAQ, journal “What our honey is tested for” |
| Every lot ships with a filling certificate | FAQ, journal |
| Danish Beekeepers Association is the quality comparison | Journal |
| Origin landscape named as Borris Hede, Nationalpark Thy, Hanstholm | Journal “The heathlands of West Jutland” |
| Heather bloom window of about six to eight weeks, peaking mid-August to mid-September | Product, journal |
| “The heather is out” / West Jutland 2026 bloom banner | Homepage |
| HS code 0409.00.00 | Journal “What importing Danish honey involves” (classification only) |

Nothing on this list was newly invented in this branch. Several previously public claims were **removed** rather than restated: public MOQ, exclusive-partner status, named-market availability, 12-jar case pack as a public spec, pallet details, deposits, 10–14 week timelines, buyer-paid air freight, and “available now”.

## Forms are not a backend

- Partnership enquiry: draft in `localStorage` only. Success copy says the draft was saved on this device, not that Dansk Lyng received it.
- Footer subscribe: same. Copy says the mailing list is not connected to a server yet.
- Do not add a “we will reply in X days” promise until mail is actually wired.

## Unused scaffold (kept on purpose)

The brand site has no accounts and does not query a database. This branch does **not** delete the following, because removal is not demonstrably safe on the Grok / Vercel scaffold:

- `src/lib/auth/*` (Better Auth, preview OAuth — `PREVIEW_CLIENT_SECRET` stays empty in this public repo)
- `src/lib/db.ts` and PGLite
- `src/lib/multiplayer/*`
- `migrations/auth/0001_auth.sql`
- `scripts/grok-pwa-*`, `public/__grok/`, `server/middleware/grok-pwa.ts`
- Auth-off flag in `.grok/app-env.json` (`VITE_AUTH_ENABLED=false`)

The Grok “Created with Grok” preview chrome is a platform injector, not brand copy. It is not stripped in code.

## Legal / “preview site”

Public privacy / terms / cookies copy no longer calls this a preview site. It does state, honestly, that forms are not posted to a server. Revisit those pages when a backend exists.

## SEO notes

- `<html lang>` is `zh-Hant` or `en` from the URL.
- Each language page sets title, description, canonical, hreflang (`zh-Hant`, `en`, `x-default` → Chinese), Open Graph and Twitter tags.
- Organization JSON-LD on every localized page; Product JSON-LD on product pages; Article JSON-LD on journal entries.
- Platform PWA middleware may overwrite some `og:*` / `twitter:*` tags on HTML responses. Canonical, hreflang, JSON-LD and `sitemap.xml` / `robots.txt` are the durable search signals.
