# SPINCRUSH.US — Decisions Log

This file records confirmed decisions that should not be changed casually.
For current progress, see `PROJECT_PROGRESS.md`.
For long-term architecture, see `PROJECT_BLUEPRINT.md`.

---

## CONFIRMED DECISIONS

- Visible brand name is **"SPIN CRUSH"**.
- Domain is **SPINCRUSH.US**.
- Target market is **India**.
- Primary language is **English**.
- Main conversion goal is **APK download**.
- Primary APK URL is **`/spin-crush-apk/`**.
- Navbar items: **Home, Games, Promotions, APK**, plus **Download APK** CTA.
- Global navbar and footer remain consistent across all pages.
- Navbar and footer visited links must remain muted gray (`var(--color-text-muted)`). The generic `a:visited` green color (`var(--color-accent)`) must NOT apply to navigation links.
- Homepage promotional carousel belongs inside **homepage `<main>`**, not the global header.
- On mobile, the primary Download APK CTA remains visible in the navbar outside the hamburger menu so users can access the primary conversion destination without opening navigation.
- Language switcher is **floating/sticky**, positioned below navbar and aligned right.
- EN uses the **UK flag**.
- HI uses the **India flag**.
- Hindi pages must **NOT** be created yet.
- Future pages must **NOT** be implemented before their designated phase.
- Unnecessary frameworks/libraries are **avoided**.
- Site must remain **lightweight** and **mobile-first**.
- Internal URLs use the **trailing-slash convention** for dynamic/content pages (e.g., `/games/`, `/promotions/`, `/install/`, `/download-help/`), and **direct `.html` convention** for static Legal & Trust pages (e.g., `/contact.html`, `/privacy.html`, `/terms.html`, `/disclaimer.html`).
- Homepage carousel uses 3 slides: branding image, Jackpot Lotto, Referral Bonus.
- Carousel banner images are stored in `assets/images/banners/promotions/`.
- Homepage includes a Platform section covering Mobile Access, Profile, Leaderboard, Support, and Payment Options.
- Homepage FAQ expanded to 6 items and wrapped in a panel.
- Footer brand description updated to include YONO slots messaging.
- Homepage SEO baseline implemented: title, meta description, canonical URL, Open Graph, Twitter Card, JSON-LD structured data.
- Global CSS custom properties implemented for spacing, panel colors, shadows, and pill radius.
- Homepage key homepage images include width and height attributes to prevent layout shift.
- Language switcher uses `position: fixed` (not sticky) to overlay below the navbar without consuming vertical flow space; carousel is not pushed down.
  - Desktop: `right: 11.2rem`
  - Mobile/tablet (`max-width: 1024px`): `right: 1rem`
  - `top: var(--navbar-height)` keeps it directly below the sticky navbar
  - `z-index: 99` keeps it below navbar (`z-index: 100`)
  - `--lang-switcher-height` variable is retained but no longer used in `scroll-padding-top` or `main min-height`
  - HTML structure and JavaScript are unchanged
- Legal & Trust pages use direct `.html` URLs (not folder-based):
  - `/privacy.html`
  - `/terms.html`
  - `/disclaimer.html`
  - `/contact.html`
  - Legal pages: privacy, terms, disclaimer — created as root-level `.html`
  - Contact: email verified from homepage JSON-LD (`hanakusnadi178@gmail.com`)
- Legal & Trust pages are **FINAL / LOCKED**:
  - Locked pages: `/privacy.html`, `/terms.html`, `/disclaimer.html`, `/contact.html`
  - No Responsible Gaming page is required for the current website scope.
  - SPINCRUSH.US is an informational/gaming information and APK-download platform. It does not operate a backend real-money gaming account system and does not provide website-side deposits, withdrawals, wagering, or user balance functionality.
  - Future changes involving real-money gambling operations, accounts, deposits, withdrawals, wagering, licensing, or jurisdiction must trigger a new legal/compliance review.
  - Existing legal pages must not receive SEO-driven or marketing-driven legal copy changes.
  - Any future legal changes must be based on verified facts and documented project requirements.
- **URL architecture finalized and locked.**
  - Legal/trust pages remain root-level `.html` URLs: `/privacy.html`, `/terms.html`, `/disclaimer.html`, `/contact.html` — LOCKED, must NOT migrate into folders.
   - All non-legal content pages use directory URLs backed by `index.html`: `/games/`, `/promotions/`, `/promo-code/`, `/install/`, `/download-help/`, `/spin-crush-apk/`.
  - The `.html` filename must NOT appear in public URLs for non-legal pages.
  - Future internal links, canonical URLs, og:url, JSON-LD URLs, sitemap entries, and navigation links for non-legal sections MUST use the folder URL (e.g. `/games/`, not `/games.html`).
  - Legal pages continue using their `.html` URLs.
  - Existing non-legal root-level `.html` pages, if any, must be reviewed and migrated to the folder/index.html architecture before final page freeze. This migration is a separate implementation task.
- URL architecture implementation audit completed (2026-08-14).
  - `contact.html` internal links corrected: all non-legal relative `.html` links replaced with locked directory URLs (`/games/`, `/promotions/`, `/promo-code/`, `/install/`, `/download-help/`, `/spin-crush-apk/`).
  - `games/index.html` asset paths corrected: root-absolute `/assets/...` references converted to filesystem-relative `../assets/...` paths.
  - Canonical, OG, and JSON-LD URL architecture audited and found correct across all existing HTML files.
  - URL architecture is now treated as locked for all future page development.
- **Asset path architecture (LOCKED).**
  - Asset references MUST be relative to the actual filesystem location of the HTML document, not the public URL.
  - Root-level files (`index.html`, legal pages): `assets/...`
  - One-level directory files (`games/index.html`): `../assets/...`
  - Two-level directory files: `../../assets/...`
  - The public URL does not determine the relative asset prefix; the physical filesystem depth determines it.
  - This applies to CSS, JS, images, favicon, fonts, downloads, and all local assets.
  - Structured data, Open Graph, and Twitter Card image URLs may use absolute URLs (`https://spincrush.us/assets/...`).
  - Do not create duplicate asset directories inside page directories.
- **`index.html` is the MASTER PAGE TEMPLATE** for all future public non-legal pages.
  - Before creating or modifying any future public page, the implementation MUST read `progress-workflow/PROJECT_BLUEPRINT.md`, `progress-workflow/DECISIONS.md`, `PROJECT_PROGRESS.md`, and inspect `index.html` as the MASTER TEMPLATE.
  - Future pages MUST inherit the structural/template system from `index.html`.
  - Do NOT create a new navbar or footer pattern.
  - Do NOT invent alternative header/footer structures.
  - Do NOT create unnecessary page-specific variants when an existing homepage component can be reused.
  - Page-specific content is allowed, but the global template structure must remain consistent.
  - Homepage-only components (carousel, homepage promotions, platform section, FAQ) remain exclusive to `index.html` unless the blueprint explicitly says otherwise.
  - `/games/` (`games/index.html`) has already been synchronized with the master template as the first implementation example.

---

## PLANNED REQUIREMENTS

- Hindi localization will be added later at **`/hi/`**.
- Planned payment methods (availability not confirmed):
  - UPI Payment
  - IMPS Bank Transfer
  - Crypto Payment
  - USDT
- Planned support pages:
  - `/install/`
  - `/download-help/`
  - `/contact.html` (Legal & Trust — locked root-level `.html`)

---

## FUTURE IDEAS

- YONO messaging concept ("You Only Need One") — possible brand messaging, not yet confirmed as official positioning.
- DMCA page — only if a real requirement is identified later.
- Additional homepage sections beyond the planned order in Phase 03.
