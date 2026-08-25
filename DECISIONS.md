# Decisions still needing confirmation

This branch (`brand-content-seo-upgrade`) keeps the visual identity and homepage concept. Public copy follows `DANSK-LYNG-master-copy-zh-v3`: Chinese is the source; English is a natural rewrite of the same meaning. The items below should not be treated as proven until a human confirms them.

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

## Claims kept off the public site (v3)

Master-copy “實施優先順序” and “上線資料狀態” are internal notes. They are not headings or pages.

Confirmed facts that **may** appear: West Jutland coast; 30+ collection sites north to south; heather as the main source in full bloom; bloom roughly August–September (not fixed dates); centrifuge; no high heat; crystallisation control for a fine spreadable texture; nothing added; 450 g glass jar only; heath as managed conservation land with cyclic renewal.

The following were previously public or listed as confirmable, and are **not** shown on the live pages:

| Claim | Why it stays off |
|---|---|
| Beekeepers have more than forty years of harvest knowledge | Not in v3 public copy; reads as a CV claim |
| “Raw” / 生蜜 / single-flower as a legal label claim | Needs market-by-market legal check; process is described as centrifuge, no high heat, nothing added |
| Intertek, moisture / HMF / diastase / pollen reports | Testing is an importer/destination-market matter, not public copy |
| Filling certificates with every lot | Confirmed internally; not for public display |
| Danish Beekeepers Association as a quality comparison | Not in v3 |
| Named reserves: Borris Hede, Nationalpark Thy, Hanstholm | Need official confirmation of which sites are actually used |
| Heather bloom of six to eight weeks, or fixed mid-August to mid-September dates | v3 uses late summer, roughly August–September |
| “The heather is out” / 2026 bloom banner | Removed |
| HS code 0409.00.00 | Internal classification, not public |
| MOQ, exclusivity, case/pallet, discounts, payment terms, 10–14 week timelines, “available now” | Wholesale page is editorial; terms stay in private conversation |
| Founder name / resume (Victoria Gravesen) | About is why the brand exists, not a CV |
| Spoon-closes-behind gel poetry; port-wine colour | Replaced by fine / velvet texture and red-brown to deep burgundy |

Public high-quality language, if used, should rest on source and process — not on unpublished tests or filling papers.

## Forms are not a backend

- Trade enquiry: fields match the master form. Submit opens a `mailto:` to `hej@dansklyng.com` and says so. It must not say the enquiry was received.
- Footer subscribe: no input field and no success message until a list is connected. The footer points to email.
- Draft of the enquiry is stored in `localStorage` on this device only.

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
- New first-class page: `/zh/heath` and `/en/heath` (石楠與荒原), listed in the master navigation.
