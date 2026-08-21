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
- **Page-specific Main content:** Each page has its own `<main>` element. The homepage main currently contains the promotional carousel, homepage intro, Games, Promotions, APK, and FAQ sections.
- **Global Footer:** Sticky `<footer class="site-footer">` with four columns: Brand, Explore, Help, Legal. Included on every page.
- **Homepage-specific carousel:** Implemented as a 16:9 promotional carousel inside the homepage `<main>` with 3 slides (branding image + promotional banners).
- **Future multilingual structure:** English at root `/`. Hindi planned at `/hi/` with `hreflang` annotations. Language switcher UI exists but HI is disabled until Hindi pages are built.

---

## URL Architecture (FINALIZED & LOCKED)

SPINCRUSH.US uses a dual URL architecture:

- Legal/trust pages remain root-level `.html` URLs.
- All non-legal content pages use directory URLs backed by `index.html`.

This architecture is intentional and must be preserved for all future pages.

### LEGAL / TRUST (root-level `.html`)

These pages are LOCKED and must NOT be migrated into folders.

| File | Public URL |
|---|---|
| privacy.html | /privacy.html |
| terms.html | /terms.html |
| disclaimer.html | /disclaimer.html |
| contact.html | /contact.html |

### NON-LEGAL CONTENT (folder/index.html)

The `.html` filename must NOT appear in public URLs for non-legal pages.

| File | Public URL |
|---|---|
| games/index.html | /games/ |
| promotions/index.html | /promotions/ |
| promo-code/index.html | /promo-code/ |
| help/index.html | /help/ |
| install/index.html | /install/ |
| download-help/index.html | /download-help/ |
| spin-crush-apk/index.html | /spin-crush-apk/ |

### MIGRATION NOTE

Existing non-legal root-level `.html` pages, if any, must be reviewed and migrated to the folder/index.html architecture before final page freeze. This migration is NOT part of the documentation update.

### LINK & METADATA RULE

All future internal links, canonical URLs, og:url, JSON-LD URLs, sitemap entries, and navigation links for non-legal sections MUST use the public folder URL:

/games/

NOT:

/games.html

Legal pages continue using their `.html` URLs.

### MASTER TEMPLATE RULE (LOCKED)

`index.html` is the **MASTER PAGE TEMPLATE** for all future public non-legal pages.

Before creating or modifying any future public page, the implementation MUST:

1. Read `progress-workflow/PROJECT_BLUEPRINT.md`
2. Read `progress-workflow/DECISIONS.md`
3. Read `PROJECT_PROGRESS.md`
4. Inspect `index.html` as the MASTER TEMPLATE
5. Reuse the established homepage template architecture

### LOCKED MASTER TEMPLATE COMPONENTS

The following components MUST be inherited from `index.html` for every future public non-legal page:

- HTML document structure
- `<head>` structure
- SEO metadata pattern
- canonical pattern
- Open Graph pattern
- Twitter metadata pattern
- JSON-LD architecture
  - WebSite entity
  - Organization entity
  - WebPage entity
- navbar
- logo
- language switcher
- mobile navigation
- APK CTA
- footer
- footer columns
- accessibility attributes
- filesystem-relative asset path convention
- global internal-link architecture

### HOMEPAGE-ONLY COMPONENTS

The following remain **exclusive to `index.html`** unless the blueprint explicitly says otherwise:

- Homepage carousel
- Homepage promotions section
- Homepage platform section
- Homepage FAQ section

### NON-HOMEPAGE PAGES

A non-homepage page may omit homepage-only sections while still inheriting the master template's:

- Head architecture
- SEO structure
- JSON-LD entity architecture
- navbar
- language switcher
- main layout system
- APK conversion section where applicable
- footer
- accessibility conventions
- filesystem-relative asset conventions
- URL architecture

### FIRST IMPLEMENTATION EXAMPLE

`/games/` (`games/index.html`) has already been synchronized with the master template as the first implementation example.

All future non-legal pages must follow the same pattern.

### Changelog

URL architecture finalized and locked. Non-legal pages use folder/index.html with directory-based public URLs; legal/trust pages retain root-level .html URLs. Migration of any existing non-legal root-level pages remains a separate implementation task.

### Asset Path Architecture (LOCKED)

Asset references must be relative to the actual filesystem location of the HTML document:
- Root-level files: `assets/...`
- One-level directory files: `../assets/...`
- Two-level directory files: `../../assets/...`

The public URL does not determine the relative asset prefix; the physical filesystem depth determines it. This applies to CSS, JS, images, favicon, fonts, downloads, and all local assets. Structured data, Open Graph, and Twitter Card image URLs may use absolute URLs.

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
- [x] Homepage H1
- [x] Homepage opening refinement
- [x] Animated green card border prototype
- [x] Mobile persistent Download APK CTA
- [x] Games section
- [x] Promotions section
- [x] Spin Crush APK section
- [x] Final download CTA
- [x] FAQ section
- [x] Platform section

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
- [ ] Conversion flow

### Phase 06 — Help
**Status:** NOT STARTED

Planned:
- [ ] How to Install
- [ ] Download Help
- [ ] Contact Us

### Phase 07 — Legal
**Status:** COMPLETE / LOCKED

Completed:
- [x] Privacy Policy (`/privacy.html`)
- [x] Terms & Conditions (`/terms.html`)
- [x] Disclaimer (`/disclaimer.html`)
- [x] Contact page (`/contact.html`) — supporting trust/contact page
- [x] Legal/trust architecture finalized
- [x] No remaining blocker in the legal/trust area
- [x] Responsible Gaming page — NOT NEEDED FOR CURRENT WEBSITE SCOPE

Notes:
- SPINCRUSH.US is documented as an informational/gaming information and APK-download platform.
- The website does not operate a backend real-money gaming account system and does not provide website-side deposits, withdrawals, wagering, or user balance functionality.
- If the APK's actual functionality, operator status, jurisdiction, licensing, or real-money gaming capabilities change, legal/compliance review must be reopened.

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
- **Positioning:** `position: fixed` overlay below navbar (FROZEN — see "Language Switcher Positioning Freeze" below).
- `top: var(--navbar-height)` (64px) — sits directly under navbar.
- `right: 11.2rem` on desktop; `right: 1rem` for `max-width: 1024px`.
- `z-index: 99` — below navbar (`z-index: 100`), above carousel.
- `margin: 0` — horizontal/vertical controlled by `top`/`right` only.
- No longer participates in normal flow; carousel is not pushed down.
- Pill-shaped container with EN | HI options.
- EN: UK flag + "EN", active state (`is-active`, `aria-current="true"`).
- HI: India flag + "HI", disabled state (`aria-disabled="true"`, `pointer-events: none`, opacity 0.5).
- **HI functionality:** Disabled until Hindi version is built.

### Footer
- Four-column grid layout (Brand, Explore, Help, Legal).
- Brand column: Logo + description text.
- Explore column: Home, Games, Promotions, Spin Crush APK. (Bonus link removed.)
- Help column: How to Install, Download Help, Contact.
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
- Promotional 16:9 carousel inside `<main>` with 3 slides (branding image, Jackpot Lotto, Referral Bonus)
- Carousel images relocated from `assets/images/banners/carousel/` to `assets/images/banners/promotions/`
- Carousel semantic refinement: visual labels instead of headings, descriptions removed
- Carousel visible CTA buttons removed; promotional banners made clickable and link to `/promotions/`
- Homepage H1 below carousel: "Spin Crush 🚀 YONO Slots Online with First Deposit Bonus & Daily Rewards"
- Homepage intro paragraph with contextual internal link to homepage
- "Explore Spin Crush Games" section with three linked category cards: Slots (`/games/slots/`), Casino Games (`/games/casino-games/`), Rummy (`/games/rummy/`), plus "View All Games" (`/games/`)
- "Spin Crush Promotions" section with inner wrapper (content + media), promotional highlights (4 blocks), promotional image, and `/promotions/` CTA
- "Explore the Spin Crush Platform" section with 5 content blocks: Mobile Access, Your Profile, Leaderboard, Support & Help, Payment Options
- "Get Spin Crush APK" unified conversion block with:
  - H2: "Get Spin Crush APK"
  - Intro paragraph with contextual link to `/spin-crush-apk/`
  - APK information table (App, Version 1.1.7, Size 40 MB, Download Free)
  - Right column: Spin Crush branding image (`assets/images/branding/images.webp`) with verified badge
  - Download CTA below branding image: "Download Spin Crush APK" → `/assets/downloads/spincrush.apk`
- FAQ section with 6 expandable items wrapped in panel (CTA removed)
- Animated green card border prototype
- Mobile navbar persistent Download APK CTA: visible outside hamburger on mobile, links to `/spin-crush-apk/`
- Carousel interaction refined: banners are clickable, controls and indicators remain independent, responsive/accessibility verified
- Homepage SEO implemented: title, meta description, canonical URL, Open Graph, Twitter Card, JSON-LD structured data, image width/height attributes
- Global CSS spacing system implemented via custom properties (`--section-padding-x`, `--section-gap`, `--radius-pill`, `--color-panel`, `--shadow-panel`)

### Not Implemented
- Supporting information section (absorbed into Platform and APK sections)
- /games/ page
- /promotions/ page
- /spin-crush-apk/ page
- /help/ page
- Other Phase 04–10 items

---

## Spacing Audit

**Status:** READ-ONLY AUDIT COMPLETE — recommendations recorded for future global application.

### Observed Issues
- Earlier homepage sections exhibited excessive vertical whitespace and inconsistent padding.
- Affected sections included Games and Promotions during their initial implementation pass.

### Current State
- Global spacing system applied via CSS custom properties (`--section-padding-x`, `--section-gap`, `--radius-pill`, `--color-panel`, `--shadow-panel`).
- Spacing has been tightened and standardized across homepage sections (Games, Promotions, APK, FAQ, Platform).

### Recommendation
- After homepage design is finalized, apply a consistent spacing scale globally.
- Do not apply a half-finished spacing system mid-design.

---

## Current SEO Status

### Implemented
- `lang="en"` attribute on `<html>`
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<title>SPIN CRUSH 🚀 YONO Slots | Claim Bonuses & Get Latest APK</title>`
- `<meta name="description" content="SPIN CRUSH is your destination for YONO slots online, casino games, rummy, and more, with attractive bonuses all in one place. Get the latest Android APK now!">`
- `<link rel="canonical" href="https://spincrush.us/">`
- Open Graph tags (type, title, description, url, site_name, image)
- Twitter Card tags (summary_large_image)
- JSON-LD structured data (WebSite, Organization, WebPage)
- Favicon linked
- Semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<nav>`)
- ARIA roles and labels for accessibility
- Image width and height attributes for CLS prevention

### Not Implemented
- Robots meta tag / robots.txt
- XML sitemap
- hreflang annotations
- Hindi `/hi/` pages
- Structured data for future pages (SoftwareApplication, FAQPage)

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
- `assets/images/banners/promotions/promotions.webp`
- `assets/images/banners/promotions/jackpot-lotto.webp`
- `assets/images/banners/promotions/refer-and-earn.webp`
- `assets/images/banners/promotions/mystery-bonus-spin-crush.webp`
- `assets/images/branding/spin-crush.webp` (carousel slide)

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
- `assets/images/branding/images.webp` exists and is now actively used in the APK section.
- Carousel assets are in `assets/images/banners/promotions/` (jackpot-lotto.webp, refer-and-earn.webp).
- Promotions assets are in `assets/images/banners/promotions/` (promotions.webp, promo-code.webp, mystery-bonus-spin-crush.webp).
- Homepage `<main>` now contains implemented sections (carousel, games, promotions, APK, FAQ).
- No structured data, Open Graph, or advanced SEO yet (Phase 08).
- Hindi `/hi/` pages do not exist yet (as planned).
- No payment UI implemented yet (as planned).
- Footer FAQ link removed during homepage refinement; FAQ section remains on homepage without a dedicated CTA.

### OUT OF SCOPE
- Homepage carousel (Phase 03)
- Core pages: /games/, /promotions/, /spin-crush-apk/, /help/ (Phase 04)
- Support pages (Phase 05)
- Legal pages (Phase 06)
- SEO implementation (Phase 08)
- Hindi localization (Phase 09)
- QA & Launch (Phase 10)

---

## Language Switcher Positioning Freeze

**Date:** 2026-08-13
**Status:** COMPLETE — FROZEN / VERIFIED

### Problem

The `.lang-switcher` initially used `position: sticky` with `top: var(--navbar-height)`. While sticky keeps the element visible on scroll, it **still participates in normal document flow** — meaning it consumes vertical space (~36px) that pushes `.carousel` downward.

The structure is:
```html
<body>
  <header class="navbar">...</header>
  <div class="lang-switcher">...</div>
  <main>
    <section class="carousel">...</section>
  </main>
</body>
```

- `.lang-switcher` is a **direct child of `<body>`** (not a sibling of `.carousel`).
- `.carousel` lives inside `<main>`.
- HTML structure is **not changed**.

### Solution: `position: fixed` overlay

`.lang-switcher` was changed from `position: sticky` to `position: fixed`. This removes it from normal flow entirely — the carousel is no longer pushed down, and the switcher remains visible during scroll.

### Final Implementation (`assets/css/style.css`)

**`.lang-switcher`:**
```css
.lang-switcher {
    position: fixed;
    top: var(--navbar-height);   /* 64px — directly under navbar */
    right: 11.2rem;               /* desktop horizontal position preserved */
    z-index: 99;                  /* below navbar (100), above carousel (0) */
    width: fit-content;
    margin: 0;                    /* removed flow-based margin positioning */
}

@media (max-width: 1024px) {
    .lang-switcher {
        right: 1rem;              /* safe right spacing on mobile/tablet */
    }
}
```

**`main`:**
```css
main {
    min-height: calc(100vh - var(--navbar-height) - 200px);
    padding-top: 0;
}
```

**`html`:**
```css
html {
    scroll-padding-top: calc(var(--navbar-height) + 16px);
}
```

### Keputusan Desain

| Keputusan | Nilai |
|---|---|
| Position mode | `fixed` (bukan `sticky`) |
| Top position | `var(--navbar-height)` = 64px |
| Desktop right | `11.2rem` |
| Mobile/tablet right | `1rem` (`@media max-width: 1024px`) |
| z-index switcher | `99` |
| z-index navbar | `100` |
| Margin | `0` (semua dikontrol via `top`/`right`) |
| `--lang-switcher-height` | Tetap didefinisikan (36px) — tidak dihapus, tetapi tidak lagi dipakai di `scroll-padding-top` atau `main min-height` |

### Dependency Adjustment

`--lang-switcher-height` (36px) remains defined in `:root` as a CSS custom property but its only two usages were removed:
1. `html { scroll-padding-top }` — no longer includes `--lang-switcher-height` because the switcher is fixed (not in flow).
2. `main { min-height }` — no longer subtracts `--lang-switcher-height` because the switcher no longer takes vertical space in normal flow.

### Overflow & Safety

- No horizontal `left`, `margin-left: auto`, or large fixed right margins on mobile.
- `right: 1rem` on mobile ensures the switcher stays within viewport.
- No `!important` overrides introduced.
- No duplicate `.lang-switcher` selector exists.
- Carousel `overflow: hidden`, `position: relative`, `max-width: 1200px`, and `aspect-ratio: 16/9` remain unchanged.
- Navbar remains `position: sticky`, `top: 0`, `z-index: 100`.
- HTML structure and JavaScript are unchanged.

### Dampak Terhadap Komponen Lain

| Komponen | Terdampak |
|---|---|
| `.navbar` | Tidak ada — tetap sticky `z-index: 100` |
| `.carousel` | Tidak ada — `position: relative` tidak berubah; autoplay, controls, indicators, responsive behavior tidak terdampak |
| `<main>` | Padding-top dihapus (0); min-height tidak lagi mengurangi `--lang-switcher-height` |
| `<body>` | Tidak ada perubahan — hanya `.lang-switcher` dan anak-anaknya yang berubah positioning |
| Scroll behavior | Anchor navigation `scroll-padding-top` disesuaikan agar hanya menghitung navbar (64px) + 16px |
| Accessibility | Tidak ada perubahan — `role="region"`, `aria-label`, `aria-current`, `aria-disabled`, `tabindex` tetap |

---

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
| 2026-08-12 | Added homepage H1 above carousel | index.html, assets/css/style.css, PROJECT_PROGRESS.md | Phase 03 — Homepage (IN PROGRESS) | Review heading hierarchy before next homepage section |
| 2026-08-12 | Refined Phase 03 homepage opening structure | index.html, assets/css/style.css, PROJECT_PROGRESS.md | Phase 03 — Homepage (IN PROGRESS) | Audit homepage opening visually and semantically before next section |
| 2026-08-12 | Prototyped animated green card borders | assets/css/style.css, PROJECT_PROGRESS.md | Phase 03 — Homepage (IN PROGRESS) | Evaluate animated border visual treatment |
| 2026-08-12 | Improved mobile navbar APK CTA | index.html, assets/css/style.css, PROJECT_PROGRESS.md, progress-workflow/DECISIONS.md | Phase 03 — Homepage (IN PROGRESS) | Continue homepage layout/skeleton work after reviewing updated global mobile navigation |
| 2026-08-12 | Implemented Games section with linked category cards | index.html, assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Review Games section visually |
| 2026-08-12 | Implemented Promotions section with image block | index.html, assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Review Promotions section visually |
| 2026-08-12 | Merged APK sections into unified conversion block | index.html, assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Review APK section visually |
| 2026-08-12 | Removed FAQ CTA and footer FAQ link | index.html, assets/css/style.css, PROJECT_PROGRESS.md, progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/DECISIONS.md | Phase 03 — Homepage (IN PROGRESS) | Continue homepage refinement |
| 2026-08-13 | Confirmed Promotions source data added to project blueprint for future /promotions/ page implementation | progress-workflow/PROJECT_BLUEPRINT.md | Documentation | Promotions page source data stored for future implementation |
| 2026-08-13 | Implemented homepage SEO, Platform section, expanded FAQ, and global CSS spacing system | index.html, assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Review updated homepage visually |
| 2026-08-13 | Reorganized carousel banner assets and added branding carousel slide | assets/images/, index.html | Phase 03 — Homepage (IN PROGRESS) | Verify carousel and assets visually |
| 2026-08-13 | FROZEN: Language switcher positioning changed from sticky to fixed overlay | assets/css/style.css, PROJECT_PROGRESS.md, progress-workflow/DECISIONS.md | Phase 03 — Homepage (IN PROGRESS) | Carousel no longer pushed down by lang-switcher; scroll-padding-top and main min-height adjusted; no HTML/JS changes |
| 2026-08-13 | Created Legal & Trust pages: privacy.html, terms.html, disclaimer.html, contact.html; updated footer links to direct .html URLs | index.html, assets/css/style.css, privacy.html, terms.html, disclaimer.html, contact.html, progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/DECISIONS.md | Phase 06 — Legal (STARTED) / Phase 05 — Support (STARTED) | Verify pages render consistently with homepage template |
| 2026-08-14 | FROZEN: Navigation color fix — prevented `a:visited` from overriding navbar/footer link colors | assets/css/style.css, PROJECT_PROGRESS.md, progress-workflow/DECISIONS.md, progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/CONTENT_GUIDELINES.md | Phase 02 — Global UI (COMPLETE / LOCKED) | No further navigation color changes; active-page styling not introduced |
| 2026-08-14 | URL architecture finalized and locked in documentation; no code/HTML changes | progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/DECISIONS.md, PROJECT_PROGRESS.md, progress-workflow/SEO_STRATEGY.md | Documentation | Verify no HTML/CSS/JS files changed; no files created, renamed, moved, or committed |
| 2026-08-14 | URL architecture implementation audit completed and corrections applied | contact.html, games/index.html, PROJECT_PROGRESS.md, progress-workflow/DECISIONS.md, progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/SEO_STRATEGY.md | URL Architecture — IMPLEMENTED / LOCKED | Future pages must follow locked directory URL convention |
| 2026-08-14 | Master template rule locked: index.html is the master template for all future public non-legal pages | PROJECT_PROGRESS.md, progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/DECISIONS.md | Documentation — MASTER TEMPLATE LOCKED | Future pages must inherit template architecture from index.html; /games/ synchronized as first implementation example |
| 2026-08-14 | Asset path architecture locked: filesystem-relative paths enforced for all local assets | games/index.html, PROJECT_PROGRESS.md, progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/DECISIONS.md | Documentation — ASSET PATH ARCHITECTURE LOCKED | Future pages must use filesystem-relative asset paths based on HTML file depth; /games/ uses ../assets/ |
| 2026-08-12 | Completed homepage foundation and updated project blueprint | index.html, assets/css/style.css, progress-workflow/PROJECT_BLUEPRINT.md | Phase 03 — Homepage (IN PROGRESS) | Begin homepage sections |
| 2026-08-12 | Synced project progress and decisions | PROJECT_PROGRESS.md, progress-workflow/DECISIONS.md | Documentation | Continue development |
| 2026-08-12 | Updated project documentation | PROJECT_PROGRESS.md, progress-workflow/*.md | Documentation | Continue development |
| 2026-08-12 | Built Phase 03 homepage carousel | index.html, assets/css/style.css, assets/js/script.js | Phase 03 — Homepage (IN PROGRESS) | Plan/build next homepage section |
| 2026-08-12 | Integrated Phase 03 carousel banners | index.html, assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Review carousel visually |
| 2026-08-12 | Built Phase 03.2 What is Spin Crush section | index.html, assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Review section visually |
| 2026-08-12 | Added homepage H1 | index.html, assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Review heading hierarchy |
| 2026-08-12 | Refined Phase 03 homepage opening | index.html, assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Audit opening visually |
| 2026-08-12 | Prototyped animated green card borders | assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Evaluate visual treatment |
| 2026-08-12 | Improved mobile navbar APK CTA | index.html, assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Continue layout work |
| 2026-08-12 | Refined animated green card border | assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Evaluate visual treatment |
| 2026-08-12 | Fixed animated green card outline | assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Verify card visuals |
| 2026-08-12 | Refined Phase 03.5 animated card border | assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Verify border visuals |
| 2026-08-12 | Refined promotional carousel interaction | index.html, assets/css/style.css, assets/js/script.js | Phase 03 — Homepage (IN PROGRESS) | Verify carousel behavior |
| 2026-08-13 | FROZEN: Language switcher positioning frozen | assets/css/style.css, PROJECT_PROGRESS.md, progress-workflow/DECISIONS.md | Phase 03 — Homepage (IN PROGRESS) | No HTML/JS changes needed |
| 2026-08-13 | Created Legal & Trust pages | privacy.html, terms.html, disclaimer.html, contact.html, index.html | Phase 06 — Legal (COMPLETE) | Verify pages render correctly |
| 2026-08-13 | Locked legal and trust pages | PROJECT_PROGRESS.md, progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/DECISIONS.md | Documentation — LEGAL LOCKED | No further legal changes |
| 2026-08-13 | Reorganized carousel banner assets | assets/images/, index.html | Phase 03 — Homepage (IN PROGRESS) | Verify carousel and assets |
| 2026-08-13 | Implemented homepage SEO, Platform section, expanded FAQ, and global CSS spacing system | index.html, assets/css/style.css | Phase 03 — Homepage (IN PROGRESS) | Review updated homepage |
| 2026-08-14 | Fixed navigation color override | assets/css/style.css, PROJECT_PROGRESS.md, progress-workflow/DECISIONS.md, progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/CONTENT_GUIDELINES.md | Phase 02 — Global UI (COMPLETE / LOCKED) | No further navigation color changes |
| 2026-08-14 | Finalized URL architecture in docs | progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/DECISIONS.md, PROJECT_PROGRESS.md, progress-workflow/SEO_STRATEGY.md | Documentation | Verify no code changes needed |
| 2026-08-14 | Implemented URL architecture corrections | contact.html, games/index.html, PROJECT_PROGRESS.md, progress-workflow/DECISIONS.md, progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/SEO_STRATEGY.md | URL Architecture — IMPLEMENTED / LOCKED | Future pages follow locked convention |
| 2026-08-14 | Locked master template rule | PROJECT_PROGRESS.md, progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/DECISIONS.md | Documentation — MASTER TEMPLATE LOCKED | Future pages inherit from index.html |
| 2026-08-14 | Locked asset path architecture | games/index.html, PROJECT_PROGRESS.md, progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/DECISIONS.md | Documentation — ASSET PATH ARCHITECTURE LOCKED | Future pages use filesystem-relative paths |
| 2026-08-14 | Created 404 error page | 404.html, assets/css/style.css | Phase 03 — Homepage (COMPLETE) | 404 page branded and functional |
| 2026-08-14 | Created robots.txt and sitemap.xml | robots.txt, sitemap.xml | Phase 08 — SEO (PARTIALLY COMPLETE) | Sitemap includes all public URLs |
| 2026-08-14 | Created promo-code.js and styles | assets/js/promo-code.js, assets/css/style.css, promo-code/index.html | Phase 04 — Core Pages (COMPLETE) | Promo code generator functional |
| 2026-08-14 | Added Google Analytics | index.html, all pages | Phase 08 — SEO (PARTIALLY COMPLETE) | gtag.js tracking active |
| 2026-08-14 | Built Hindi homepage and legal pages | hi/index.html, hi/privacy.html, hi/terms.html, hi/disclaimer.html, hi/contact.html | Phase 09 — Hindi (STARTED) | Hindi content pages in progress |
| 2026-08-14 | Built Hindi content pages | hi/games/index.html, hi/games/casino-games/index.html, hi/promotions/index.html, hi/promo-code/index.html, hi/spin-crush-apk/index.html | Phase 09 — Hindi (STARTED) | Hindi game detail pages pending |
| 2026-08-14 | Expanded homepage carousel to 12 slides | index.html, assets/css/style.css, assets/js/script.js | Phase 03 — Homepage (COMPLETE) | All promotional banners linked |
| 2026-08-14 | Added image-shine CSS effect | assets/css/style.css | Phase 03 — Homepage (COMPLETE) | Reusable visual effect |
| 2026-08-14 | Added FAQPage structured data | index.html, games/casino-games/index.html, spin-crush-apk/index.html, promo-code/index.html | Phase 08 — SEO (PARTIALLY COMPLETE) | FAQ schema implemented |
| 2026-08-14 | Added BreadcrumbList structured data | games/index.html, games/casino-games/index.html, games/casino-games/blackjack/index.html, games/casino-games/roulette/index.html, spin-crush-apk/index.html, promo-code/index.html | Phase 08 — SEO (PARTIALLY COMPLETE) | Breadcrumb schema implemented |
| 2026-08-14 | Added ItemList structured data | promotions/index.html | Phase 08 — SEO (PARTIALLY COMPLETE) | ItemList schema for promotions |
| 2026-08-14 | Added ContactPage structured data | contact.html | Phase 08 — SEO (PARTIALLY COMPLETE) | ContactPage schema implemented |
| 2026-08-14 | Added PrivacyPolicy structured data | privacy.html | Phase 08 — SEO (PARTIALLY COMPLETE) | PrivacyPolicy schema implemented |
| 2026-08-14 | Removed Help from global UI | index.html, PROJECT_PROGRESS.md, progress-workflow/PROJECT_BLUEPRINT.md, progress-workflow/DECISIONS.md | Phase 02 — Global UI (COMPLETE / LOCKED) | Help links removed from navbar and footer |
| 2026-08-14 | Added APK download tracking | assets/js/script.js | Phase 05 — APK / Conversion (COMPLETE) | gtag event tracking for APK downloads |
| 2026-08-14 | Added hidden utility class for promo-code.js | assets/css/style.css | Phase 04 — Core Pages (COMPLETE) | Required by promo-code.js |
| 2026-08-14 | Updated footer across all pages | all HTML files | Phase 02 — Global UI (COMPLETE / LOCKED) | Help column removed; Contact added to legal pages |
| 2026-08-14 | Updated legal pages with full SEO and structured data | privacy.html, terms.html, disclaimer.html, contact.html | Phase 07 — Legal (COMPLETE / LOCKED) | Legal pages fully synchronized with master template |
| 2026-08-20 | Localization audit of HI casino game pages | audit-report-hi-en-casino-games.md, FINAL_AUDIT_REPORT.md | Phase 09 — Hindi | Comprehensive EN↔HI parity audit completed for all 9 casino game pages; identified navbar, H1, breadcrumb, aria-label, footer, title, image alt, and structural inconsistencies |
| 2026-08-20 | Added floating mobile APK CTA button | assets/css/style.css, 404.html, contact.html, disclaimer.html, index.html, privacy.html, promo-code/index.html, promotions/index.html, spin-crush-apk/index.html, terms.html, games/casino-games/blackjack/index.html, games/casino-games/index.html, games/casino-games/roulette/index.html, games/index.html, hi/*.html, hi/games/*.html, hi/games/casino-games/*.html | Phase 05 — APK / Conversion | Persistent `.floating-apk-btn` (fixed, bottom-center, visible on mobile only) added to all pages for APK conversion; CSS defined with hover/focus/reduced-motion support |
| 2026-08-20 | Localized Hindi homepage, legal, content, and casino-games index pages | hi/index.html, hi/privacy.html, hi/terms.html, hi/disclaimer.html, hi/contact.html, hi/games/index.html, hi/games/casino-games/index.html, hi/promotions/index.html, hi/promo-code/index.html, hi/spin-crush-apk/index.html | Phase 09 — Hindi | Title, meta description, OG, Twitter, JSON-LD WebSite/Organization/WebPage name and description, areaServed, and breadcrumb translated/localized from English to Hindi; language switcher enabled; hreflang wired |
| 2026-08-21 | Fixed Dragon Tiger navbar Promotions label | hi/games/casino-games/dragon-tiger/index.html | Phase 02 — Global UI | Navbar label `ऑफर` → `प्रचार` to match the other 8 HI game pages; href `/hi/promotions/` unchanged |
| 2026-08-21 | Standardized Hindi SEO title/naming pattern | hi/games/casino-games/7-up-down/index.html, andar-bahar/index.html, baccarat/index.html, blackjack/index.html, dragon-tiger/index.html, poker/index.html, roulette/index.html, sic-bo/index.html, teen-patti/index.html | Phase 08 — SEO / Phase 09 — Hindi | Changed page-title pattern from `{Game} पर Spin Crush` to `{Game} on Spin Crush` across `<title>`, H1, meta description, og:title, og:description, twitter:title, twitter:description, and JSON-LD WebPage name/description on all 9 HI casino game pages; game names preserved as protected English terms |

---

## Navbar Consistency Audit (2026-08-21)

**Scope:** Read-only audit of navbar across all 9 HI casino game pages.

**Finding:** 8 of 9 HI game pages use the nav label `प्रचार` for the Promotions link (`/hi/promotions/`). Dragon Tiger used `ऑफर` — an inconsistency.

**Resolution:** Dragon Tiger navbar label corrected to `प्रचार` to match the established majority pattern. All other navbar fields (header structure, logo href/aria-label, nav item order, mobile toggle, language switcher, hreflang/lang attributes, active state, accessibility attributes) were already identical.

---

## Hindi Localization Pattern (2026-08-21)

**Scope:** SEO title/naming consistency across all 9 HI casino game pages.

**Finding:** All pages used `{Game Name} पर Spin Crush` in title tags, H1, OG/Twitter metadata, and JSON-LD schema fields. To align Hindi SEO titles with the established English pattern (`{Game} on Spin Crush`), the Hindi `पर` particle was replaced with the English `on` in the standardized title format; game names remain as protected English terms.

**Resolution:** Changed `{Game Name} पर Spin Crush` → `{Game Name} on Spin Crush` on all 9 HI game pages across all metadata fields. Protected terminology (7 Up Down, Andar Bahar, Baccarat, Blackjack, Dragon Tiger, Poker, Roulette, Sic Bo, Teen Patti, Spin Crush) preserved unchanged.

---

## Floating Mobile APK CTA (2026-08-20)

**Scope:** Persistent APK download CTA across all pages.

**Implementation:** Added `.floating-apk-btn` CSS class (fixed positioning, bottom-center, z-index 200, visible only on `max-width: 767px`) and corresponding `<a>` markup on all EN and HI pages including 404. The button links to `/assets/downloads/spincrush.apk` with `rel="nofollow"` and an accessible `aria-label="Download Spin Crush APK"`.
