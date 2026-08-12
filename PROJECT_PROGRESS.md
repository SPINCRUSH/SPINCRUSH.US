# SPINCRUSH.US — Project Progress

## Project Overview

- **Target market:** India
- **Primary language:** English
- **Hindi localization:** /hi/ later
- **Primary conversion goal:** APK download
- **Primary SEO keywords:**
  - spin crush
  - spin crush apk
  - spin crush apk download
- **Brand display name:** Spin Crush
- **Domain:** spincrush.us
- **Visual direction:** dark, modern, premium, green accent, lightweight

---

## Current Architecture

The site uses a global-page structure:

- **Global Header:** Sticky `<header class="navbar">` containing the logo, primary navigation links (Home, Games, Promotions, APK, Help), and a "Download APK" CTA button. Included on every page.
- **Page-specific Main content:** Each page has its own `<main>` element. The homepage main currently contains a placeholder comment for the future promotional carousel.
- **Global Footer:** Sticky `<footer class="site-footer">` with four columns: Brand, Explore, Help, Legal. Included on every page.
- **Homepage-specific carousel:** Planned as a 16:9 promotional carousel inside the homepage `<main>`. Not yet implemented.
- **Future multilingual structure:** English at root `/`. Hindi planned at `/hi/` with `hreflang` annotations. Language switcher UI exists but HI is disabled until Hindi pages are built.

---

## Development Rules

- Build component-by-component.
- Review each component before continuing.
- Do not build the entire homepage at once.
- Global header and footer must remain consistent across pages.
- Homepage carousel belongs inside homepage `<main>`, not the global header.
- Hindi version is built only after the English website is completed.
- Do not add features that have not been decided.
- Avoid unnecessary libraries/frameworks.
- Keep the website mobile-first.

---

## Master Workflow

### Phase 01 — Foundation
**Status:** COMPLETE

Tasks:
- [x] Project structure
- [x] index.html foundation
- [x] CSS foundation
- [x] JS foundation
- [x] Branding assets
- [x] Favicon
- [x] Mobile-first foundation

### Phase 02 — Global UI
**Status:** COMPLETE / LOCKED

Header:
- [x] Sticky navbar
- [x] Logo
- [x] Home
- [x] Games
- [x] Promotions
- [x] APK
- [x] Help
- [x] Download APK CTA
- [x] Mobile menu

Language Switcher:
- [x] Floating/sticky positioning
- [x] EN
- [x] HI
- [x] UK flag
- [x] India flag
- [x] EN active
- [x] HI disabled for now

Footer:
- [x] Brand column
- [x] Explore column
- [x] Help column
- [x] Legal column
- [x] Final verification — audit completed, issues fixed, Phase 02 LOCKED

### Phase 03 — Homepage
**Status:** IN PROGRESS

Planned order:
- [x] Promotional 16:9 carousel
- [x] Hero / main introduction
- [ ] Games section
- [ ] Promotions section
- [ ] Spin Crush APK section
- [ ] Supporting information section
- [ ] FAQ/help preview
- [ ] Final download CTA

### Phase 04 — Core Pages
**Status:** NOT STARTED

Planned:
- [ ] /games/
- [ ] /promotions/
- [ ] /spin-crush-apk/
- [ ] /help/

### Phase 05 — APK / Conversion
**Status:** NOT STARTED

Target:
- [ ] Spin Crush APK information
- [ ] Latest APK information
- [ ] Download section
- [ ] Installation information
- [ ] Requirements
- [ ] Features
- [ ] FAQ
- [ ] Conversion flow

### Phase 06 — Help
**Status:** NOT STARTED

Planned:
- [ ] How to Install
- [ ] FAQ
- [ ] Download Help
- [ ] Contact Us

### Phase 07 — Legal
**Status:** NOT STARTED

Planned:
- [ ] Privacy Policy
- [ ] Terms & Conditions
- [ ] Disclaimer
- [ ] Copyright / DMCA review before launch

### Phase 08 — SEO
**Status:** NOT STARTED

Planned:
- [ ] Titles
- [ ] Meta descriptions
- [ ] Canonicals
- [ ] Robots
- [ ] Sitemap
- [ ] Open Graph
- [ ] Structured data
- [ ] Heading hierarchy
- [ ] Image alt text
- [ ] Internal linking
- [ ] SEO keyword mapping

### Phase 09 — Hindi
**Status:** NOT STARTED

Planned:
- [ ] /hi/
- [ ] Hindi content
- [ ] hreflang
- [ ] Hindi metadata
- [ ] Language switcher functionality

### Phase 10 — QA & Launch
**Status:** NOT STARTED

Planned:
- [ ] Responsive QA
- [ ] Browser QA
- [ ] Link audit
- [ ] Image audit
- [ ] Performance
- [ ] Accessibility
- [ ] SEO audit
- [ ] Conversion audit
- [ ] Final content audit
- [ ] Production readiness

---

## Current Project Tree

```
SPINCRUSH.US/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── banners/
│       ├── branding/
│       │   ├── favicon.ico
│       │   ├── images.webp
│       │   └── logo.webp
│       └── flag/
│           ├── india.svg
│           └── uk.svg
```

---

## Current Global Components

### Navbar
- Sticky positioning implemented (`position: sticky; top: 0; z-index: 100`).
- Logo: `<a href="/">` with `logo.webp` (32px height).
- Navigation links: Home (`/`), Games (`/games/`), Promotions (`/promotions/`), APK (`/spin-crush-apk/`), Help (`/help/`).
- Download APK CTA: `<a href="/spin-crush-apk/">` styled as green pill button.
- Mobile menu: Hamburger toggle button (`.navbar__toggle`) toggles `.navbar__nav.is-open` via JavaScript.
- Responsive: Menu visible on `min-width: 768px`, hidden (hamburger shown) below that.
- **APK link status:** Implemented at `/spin-crush-apk/`.
- **URL consistency:** All internal links use trailing-slash convention.

### Language Switcher
- Sticky positioning below navbar (`top: var(--navbar-height)`, `z-index: 99`).
- Pill-shaped container with EN | HI options.
- EN: UK flag + "EN", active state (`is-active`, `aria-current="true"`).
- HI: India flag + "HI", disabled state (`aria-disabled="true"`, `pointer-events: none`, opacity 0.5).
- **HI functionality:** Disabled until Hindi version is built.

### Footer
- Four-column grid layout (Brand, Explore, Help, Legal).
- Brand column: Logo + description text.
- Explore column: Home, Games, Promotions, Spin Crush APK. (Bonus link removed.)
- Help column: How to Install, FAQ, Download Help, Contact.
- Legal column: Privacy Policy, Terms & Conditions, Disclaimer.
- Bottom bar: Copyright notice "© 2026 SPINCRUSH.US".
- Responsive: Single column on mobile, 2 columns at `min-width: 640px`, 4 columns at `min-width: 1024px`.
- **Final verification:** Complete. Phase 02 LOCKED.

---

## Current Homepage

### Implemented
- Global header (navbar)
- Floating language switcher
- Global footer
- Promotional 16:9 carousel inside `<main>`
- "What is Spin Crush?" introduction section

### Not Implemented
- Games section
- Promotions section
- Spin Crush APK section
- Supporting information section
- FAQ/help preview
- Final download CTA

---

## Current SEO Status

### Implemented
- `lang="en"` attribute on `<html>`
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<title>SPINCRUSH.US</title>`
- `<meta name="description" content="">` (empty, needs content)
- Favicon linked
- Semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<nav>`)
- ARIA roles and labels for accessibility

### Not Implemented
- Page-specific titles and meta descriptions
- Canonical URLs
- Robots meta tag / robots.txt
- XML sitemap
- Open Graph tags
- Structured data (JSON-LD)
- Heading hierarchy (`<h1>`, `<h2>`, etc.) — homepage has no headings yet
- Image alt text optimization
- Internal linking strategy
- SEO keyword mapping per page
- hreflang annotations

---

## Current Assets

### Branding
- `assets/images/branding/favicon.ico`
- `assets/images/branding/logo.webp` (used in navbar and footer)
- `assets/images/branding/images.webp`

### Flags
- `assets/images/flag/uk.svg` (language switcher — EN)
- `assets/images/flag/india.svg` (language switcher — HI, disabled)

### Banners
- `assets/images/banners/carousel/jackpot-lotto.webp`
- `assets/images/banners/carousel/mystery-bonus.webp`
- `assets/images/banners/carousel/refer-and-earn.webp`

---

## Payment Methods — Planned

The website should account for these payment methods in future relevant sections, such as the homepage, Spin Crush APK page, or Help/payment-related content:

- UPI Payment
- IMPS Bank Transfer
- Crypto Payment
- USDT

**Note:** These are planned/recorded payment methods only. Availability is not confirmed. No payment method UI has been added yet.

---

## Phase 02 Final Verification Audit

**Date:** 2026-08-12
**Status:** COMPLETE — Phase 02 LOCKED

### PASS
- Navbar sticky behavior, order, labels, CTA, desktop/mobile behavior, accessibility attributes
- Language switcher EN/HI labels, flags, active/disabled states, positioning, accessibility
- Footer 4-column structure, brand description, legal links, responsive grid, copyright
- Asset paths (logo, favicon, flags) — all referenced files exist
- CSS responsive breakpoints, z-index hierarchy, sticky positioning, mobile menu behavior
- JavaScript mobile menu toggle and aria-expanded updates
- HTML semantic structure and accessibility attributes

### NEEDS FIX (all resolved)
1. ~~Footer Explore column contains "Bonus" link not in blueprint~~ → **Removed**
2. ~~Footer Explore APK label mismatch~~ → **Changed to "Spin Crush APK"**
3. ~~URL trailing slash inconsistency~~ → **Standardized to trailing-slash convention across navbar and footer**
4. ~~Unused asset: `assets/images/branding/images.webp`~~ → **Retained per confirmation; not deleted**

### INFORMATIONAL
- `assets/images/branding/images.webp` exists and is retained for future use.
- `assets/images/banners/` directory exists but is empty (expected for Phase 02).
- Homepage `<main>` contains only placeholder comment (expected for Phase 02).
- No structured data, Open Graph, or advanced SEO yet (Phase 08).
- Hindi `/hi/` pages do not exist yet (as planned).
- No payment UI implemented yet (as planned).

### OUT OF SCOPE
- Homepage carousel (Phase 03)
- Core pages: /games/, /promotions/, /spin-crush-apk/, /help/ (Phase 04)
- Support pages (Phase 05)
- Legal pages (Phase 06)
- SEO implementation (Phase 08)
- Hindi localization (Phase 09)
- QA & Launch (Phase 10)

---

## Future / Potential Features (Backlog)

### Demo Slots / Demo Games

- **STATUS:** POTENTIAL / FUTURE — NOT confirmed. Not implemented.
- Recorded in the future-feature backlog only.
- See `progress-workflow/PROJECT_BLUEPRINT.md` → "FUTURE / POTENTIAL FEATURES" for full details.
- **NOT done:** No demo games, iframes, UI, `/games/` page, navbar entries, homepage section, or promotional claims have been added. Implementation is gated on verifying provider, licensing, embedding permission, demo source, mobile compatibility, performance, security, UX, and the APK conversion flow.
- **Primary conversion goal (unchanged):** APK download.

---

## Decisions Log

- Brand display name is "Spin Crush".
- Primary keyword is "spin crush".
- APK keyword cluster includes "spin crush apk" and "spin crush apk download".
- APK page canonical path will be `/spin-crush-apk/`.
- Navbar includes APK link and separate Download APK CTA.
- Promotions page will contain promotions and bonuses.
- Language switcher format is UK flag + EN | India flag + HI.
- Hindi version will be added later at `/hi/`.
- Global header and footer must remain consistent across all pages.
- Homepage carousel is page-specific and belongs inside homepage `<main>`.
- Mobile-first design approach.
- Avoid unnecessary libraries/frameworks.
- Build component-by-component with review between components.

---

## Development Log

| Date | What Was Completed | Files Changed | Current Status | Next Step |
|------|-------------------|---------------|----------------|-----------|
| 2026-08-12 | PROJECT_PROGRESS.md created | PROJECT_PROGRESS.md | Phase 02 — Global UI (IN PROGRESS) | Complete Phase 02 verification, then begin Phase 03 Homepage carousel |
| 2026-08-12 | Created /progress-workflow/ documentation system | PROJECT_PROGRESS.md, progress-workflow/*.md | Phase 02 — Global UI (IN PROGRESS) | Complete Phase 02 verification, then begin Phase 03 Homepage carousel |
| 2026-08-12 | Phase 02 final verification audit completed | PROJECT_PROGRESS.md | Phase 02 — Global UI (IN PROGRESS, audit done, needs fixes before lock) | Review audit findings, implement fixes, then lock Phase 02 |
| 2026-08-12 | Phase 02 fixes completed and LOCKED | index.html, PROJECT_PROGRESS.md, progress-workflow/DECISIONS.md | Phase 02 — Global UI (COMPLETE / LOCKED) | Phase 03 — Homepage (promotional 16:9 carousel) |
| 2026-08-12 | Built Phase 03 promotional 16:9 carousel | index.html, assets/css/style.css, assets/js/script.js | Phase 03 — Homepage (IN PROGRESS) | Plan/build next homepage section |
| 2026-08-12 | Integrated real carousel banner assets | index.html, assets/css/style.css, PROJECT_PROGRESS.md | Phase 03 — Homepage (IN PROGRESS) | Review carousel visually before next homepage section |
| 2026-08-12 | Built Phase 03.2 "What is Spin Crush?" section | index.html, assets/css/style.css, PROJECT_PROGRESS.md | Phase 03 — Homepage (IN PROGRESS) | Review section visually before next homepage component |
