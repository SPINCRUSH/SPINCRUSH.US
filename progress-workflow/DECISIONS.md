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
- Navbar items: **Home, Games, Promotions, APK, Help**, plus **Download APK** CTA.
- Global navbar and footer remain consistent across all pages.
- Homepage promotional carousel belongs inside **homepage `<main>`**, not the global header.
- On mobile, the primary Download APK CTA remains visible in the navbar outside the hamburger menu so users can access the primary conversion destination without opening navigation.
- Language switcher is **floating/sticky**, positioned below navbar and aligned right.
- EN uses the **UK flag**.
- HI uses the **India flag**.
- Hindi pages must **NOT** be created yet.
- Future pages must **NOT** be implemented before their designated phase.
- Unnecessary frameworks/libraries are **avoided**.
- Site must remain **lightweight** and **mobile-first**.
- Internal URLs use the **trailing-slash convention** for dynamic/content pages (e.g., `/games/`, `/promotions/`, `/help/`, `/install/`, `/download-help/`), and **direct `.html` convention** for static Legal & Trust pages (e.g., `/contact.html`, `/privacy.html`, `/terms.html`, `/disclaimer.html`).
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
  - `/contact/`
- Planned legal pages:
  - `/privacy/`
  - `/terms/`
  - `/disclaimer/`

---

## FUTURE IDEAS

- YONO messaging concept ("You Only Need One") — possible brand messaging, not yet confirmed as official positioning.
- DMCA page — only if a real requirement is identified later.
- Additional homepage sections beyond the planned order in Phase 03.
