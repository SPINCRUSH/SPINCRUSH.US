# SPINCRUSH.US — SEO Strategy

This document records SEO strategy and current implementation status.

## CURRENT IMPLEMENTATION STATUS

### Homepage (2026-08-13)
- Title and meta description implemented.
- Canonical URL implemented (`https://spincrush.us/`).
- Open Graph tags implemented (type, title, description, url, site_name, image).
- Twitter Card tags implemented (summary_large_image).
- JSON-LD structured data implemented (WebSite, Organization, WebPage).
- Image width and height attributes added for CLS prevention.
- Internal linking strategy implemented (contextual links to `/`, `/promotions/`, `/games/`, `/spin-crush-apk/`).

### Legal Pages (2026-08-14)
- Privacy Policy, Terms & Conditions, and Disclaimer are **finalized and locked**.
- Canonical URLs, Open Graph, Twitter Card, and JSON-LD implemented on all legal pages.
- Robots meta tag (`index, follow`) implemented on legal pages.
- Legal pages must not receive SEO-driven or marketing-driven copy changes.
- Any future legal changes must be based on verified facts and documented project requirements.

### Not Yet Implemented
- Robots meta tag / robots.txt (site-wide, beyond legal pages)
- XML sitemap
- hreflang annotations
- Structured data for future pages (SoftwareApplication, FAQPage)
- SEO for future core pages (/games/, /promotions/, spin-crush-apk/)

## PRIMARY KEYWORDS

- spin crush
- spin crush apk
- spin crush apk download

## TARGET AUDIENCE

- Indian users
- English-speaking Indian search audience initially
- Users searching for APK downloads and gaming platforms

## SEARCH INTENT

### Primary Intent
- Users searching for "spin crush apk" are looking to download the APK.
- Users searching for "spin crush apk download" have high conversion intent.
- Users searching for "spin crush" may be looking for general information or the platform itself.

### Secondary Intent
- Gaming-related queries (slots, casino, online games)
- Install queries
- Promotions/bonuses queries

## KEYWORD MAPPING PRINCIPLES

- Map primary keywords to high-priority pages (homepage, APK page).
- Map secondary keywords to relevant content sections (games, promotions).
- Avoid keyword cannibalization across pages.
- Maintain a logical hierarchy: homepage -> category pages -> detail pages.

## URL / SLUG PRINCIPLES

- Keep URLs short, descriptive, and lowercase.
- Use hyphens for word separation.
- Primary APK page: `/spin-crush-apk/`
- Avoid changing URLs once published without proper redirects.
- **Dual URL architecture (finalized & locked):**
  - Legal/trust pages remain root-level `.html` URLs: `/privacy.html`, `/terms.html`, `/disclaimer.html`, `/contact.html`.
   - All non-legal content pages use directory URLs (trailing slash, backed by `index.html`): `/games/`, `/promotions/`, `/promo-code/`, `/install/`, `/download-help/`, `/spin-crush-apk/`.
  - The `.html` filename must NOT appear in public URLs for non-legal pages.
   - Canonical, og:url, JSON-LD, sitemap, and internal-link URLs must use the folder URL for non-legal pages (e.g. `/games/`) and the `.html` URL for legal pages (e.g. `/privacy.html`).

### URL Architecture Implementation Audit (2026-08-14)

- `contact.html` internal links corrected: all non-legal relative `.html` links replaced with locked directory URLs.
- `games/index.html` asset paths corrected: root-absolute `/assets/...` references converted to filesystem-relative `../assets/...` paths.
- Canonical, OG, and JSON-LD URL architecture audited and found correct across all existing HTML files.
- URL architecture is now treated as locked for all future page development.

## TITLE / META PRINCIPLES

- Homepage title and meta description implemented.
- Titles should be unique per page, include primary keyword naturally, and stay under 60 characters where practical.
- Meta descriptions should be unique, compelling, and include relevant keywords naturally.
- Avoid keyword stuffing in titles or descriptions.

## H1 / H2 PRINCIPLES

- One `<h1>` per page, containing the primary keyword where natural.
- Use `<h2>` through `<h3>` for logical section hierarchy.
- Headings should describe content accurately and naturally.

## INTERNAL LINKING

- Link between related pages using descriptive anchor text.
- Ensure every important page is reachable from the navigation or footer.
- Use breadcrumbs where helpful.
- Link naturally from content sections to the APK page.

## IMAGE ALT TEXT

- Homepage images include descriptive alt text and width/height attributes for CLS prevention.
- Describe the image content accurately.
- Include relevant keywords only when they genuinely describe the image.
- Avoid generic alt text like "image" or "banner."

## CANONICAL PLANNING

- Homepage canonical implemented: `https://spincrush.us/`
- Every future page should have a canonical URL.
- APK page canonical: `/spin-crush-apk/`
- Avoid duplicate content across URLs.
- Canonical URL conventions (finalized & locked):
  - Non-legal pages: canonical must be the directory URL (e.g. `https://spincrush.us/games/`), NOT `/games.html`.
  - Legal pages: canonical must be the root-level `.html` URL (e.g. `https://spincrush.us/privacy.html`).

## OPEN GRAPH PLANNING

- Open Graph tags implemented on homepage.
- Twitter Card tags implemented on homepage.
- OG image uses `assets/images/branding/spin-crush.webp`.
- Plan OG tags for future core pages.

## STRUCTURED DATA PLANNING

- JSON-LD structured data implemented on homepage for:
  - WebSite
  - Organization
  - WebPage
- Plan JSON-LD structured data for future pages:
  - SoftwareApplication (for APK page)
  - FAQPage (for FAQ sections)

## HREFLANG PLANNING

- Prepare `hreflang` annotations for future `/hi/` version.
- Use `x-default` for the root URL.
- Do not implement until Hindi pages exist.

## AVOID

- Keyword stuffing
- Unsupported claims
- Duplicate content
- Thin content
- Cloaking or deceptive practices
- Auto-generated generic copy
