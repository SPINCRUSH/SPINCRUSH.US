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
**Status:** IN PROGRESS

Header:
- [x] Sticky navbar
- [x] Logo
- [x] Home
- [x] Games
- [x] Promotions
- [ ] APK
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
- [ ] Final verification

### Phase 03 — Homepage
**Status:** NOT STARTED

Planned order:
- [ ] Promotional 16:9 carousel
- [ ] Hero / main introduction
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
- Navigation links: Home (`/`), Games (`/games`), Promotions (`/promotions`), APK (`/spin-crush-apk/`), Help (`/help`).
- Download APK CTA: `<a href="/download">` styled as green pill button.
- Mobile menu: Hamburger toggle button (`.navbar__toggle`) toggles `.navbar__nav.is-open` via JavaScript.
- Responsive: Menu visible on `min-width: 768px`, hidden (hamburger shown) below that.
- **APK link status:** Present in markup but marked as incomplete in Phase 02.

### Language Switcher
- Sticky positioning below navbar (`top: var(--navbar-height)`, `z-index: 99`).
- Pill-shaped container with EN | HI options.
- EN: UK flag + "EN", active state (`is-active`, `aria-current="true"`).
- HI: India flag + "HI", disabled state (`aria-disabled="true"`, `pointer-events: none`, opacity 0.5).
- **HI functionality:** Disabled until Hindi version is built.

### Footer
- Four-column grid layout (Brand, Explore, Help, Legal).
- Brand column: Logo + description text.
- Explore column: Home, Bonus, Games, Promotions, APK.
- Help column: How to Install, FAQ, Download Help, Contact.
- Legal column: Privacy Policy, Terms & Conditions, Disclaimer.
- Bottom bar: Copyright notice "© 2026 SPINCRUSH.US".
- Responsive: Single column on mobile, 2 columns at `min-width: 640px`, 4 columns at `min-width: 1024px`.
- **Final verification:** Pending.

---

## Current Homepage

### Implemented
- Global header (navbar)
- Floating language switcher
- Global footer
- Empty `<main>` with placeholder comment for future carousel

### Not Implemented
- Promotional 16:9 carousel
- Hero / main introduction section
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
- `assets/images/banners/` (directory exists, no files yet)

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
