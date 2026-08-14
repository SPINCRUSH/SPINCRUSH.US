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
- "Explore Spin Crush Games" section with three linked category cards: Slots (`/games/slots/`), Casino Games (`/games/casino/`), Rummy (`/games/rummy/`), plus "View All Games" (`/games/`)
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
