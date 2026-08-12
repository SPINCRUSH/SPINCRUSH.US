# SPINCRUSH.US — Project Blueprint

## PROJECT

- **Website:** SPINCRUSH.US
- **Brand name in visible content:** SPIN CRUSH
- **Domain:** SPINCRUSH.US
- **Target market:** India
- **Primary language:** English
- **Hindi localization:** Will be added later at `/hi/` (do NOT create yet)
- **Mobile-first:** Yes
- **Main conversion goal:** APK download

## VISUAL DIRECTION

- Modern
- Clean
- Premium
- Lightweight
- Dark theme
- Green as primary accent
- Avoid excessive neon
- Avoid excessive gradients
- Avoid clutter
- Avoid generic template styling

## CORE BRAND POSITIONING

SPIN CRUSH is a gaming platform for Indian players featuring slots,
online casino games, and other gaming/entertainment experiences.

Possible brand messaging concept:

"YONO — You Only Need One"

Treat YONO only as a possible messaging concept.
Do not treat it as a confirmed legal, trademark, or factual claim.

## PRIMARY CONVERSION

- **Main conversion goal:** APK download
- **Primary APK keyword:** "spin crush apk"
- **Additional keyword:** "spin crush apk download"

## GLOBAL UI

Global header and footer must remain consistent across all pages.

### Navbar
- Home
- Games
- Promotions
- APK
- Help
- Download APK CTA

### APK URL
- `/spin-crush-apk/`

The homepage promotional carousel belongs inside the homepage `<main>`.
It is NOT part of the global header.

## LANGUAGE SWITCHER

- Floating/sticky positioning
- Top-right below navbar
- EN + UK flag
- HI + India flag
- English active
- Hindi unavailable until `/hi/` exists

## FOOTER

Main areas:
- Brand
- Explore
- Help
- Legal

Preferred current brand description:

"Spin Crush — your YONO destination for slots, online casino, and gaming in India."

This wording may be refined later.

### Explore
- Home
- Games
- Promotions
- Spin Crush APK

### Help
- How to Install
- FAQ
- Download Help
- Contact Us

### Legal
- Privacy Policy
- Terms & Conditions
- Disclaimer

### DMCA
Do not create a DMCA page unless a real requirement is identified later.

## PAYMENT METHODS — PLANNED

- UPI Payment
- IMPS Bank Transfer
- Crypto Payment
- USDT

These may later be used in:
- Homepage
- Spin Crush APK page
- Help/payment-related sections

IMPORTANT:
These payment methods are planned/recorded requirements only.
Their availability is NOT confirmed.

Do not make availability claims.
Do not add payment UI yet.

## SITE ARCHITECTURE

### Core
- `/`
- `/games/`
- `/promotions/`
- `/spin-crush-apk/`
- `/help/`

### Support
- `/install/`
- `/faq/`
- `/download-help/`
- `/contact/`

### Legal
- `/privacy/`
- `/terms/`
- `/disclaimer/`

### Localization (later)
- `/hi/`

Do not create these pages until their development phase.

## DEVELOPMENT PHASES

### Phase 01 — Foundation
- Project structure
- HTML/CSS/JS foundation
- Branding assets
- Git/GitHub

### Phase 02 — Global UI
- Sticky navbar
- Logo
- Mobile navigation
- Floating language switcher
- Footer
- Global consistency

### Phase 03 — Homepage
- Promotional 16:9 carousel
- Primary homepage messaging
- Games section
- Promotions/content
- APK conversion section
- Payment information where appropriate
- Additional homepage sections

### Phase 04 — Core Pages
- Games
- Promotions
- Spin Crush APK
- Help

### Phase 05 — Support
- How to Install
- FAQ
- Download Help
- Contact Us

### Phase 06 — Legal
- Privacy Policy
- Terms & Conditions
- Disclaimer

### Phase 07 — SEO
- Keyword implementation
- Metadata
- Canonical
- Robots
- Open Graph
- Structured data
- Internal linking
- Image SEO
- Hreflang preparation

### Phase 08 — Hindi
- `/hi/`
- Hindi localization
- Language linking
- Hreflang

### Phase 09 — QA
- Mobile
- Desktop
- Links
- Images
- Performance
- Accessibility
- SEO
- Conversion flow

### Phase 10 — Production
- Cloudflare
- aaPanel
- SSL
- Production deployment
- Final QA

## FUTURE / POTENTIAL FEATURES

> The items below are NOT confirmed. They are recorded possibilities only and must
> NOT be treated as confirmed architecture or confirmed features. Do not implement
> any of them until explicitly verified and decided.

### Demo Slots / Demo Games

- **STATUS:** POTENTIAL / FUTURE — NOT confirmed. Not currently implemented.
- **Concept:** SPIN CRUSH may eventually provide selected demo slots or demo games
  that users can play directly on the website without downloading the APK first.
- **Potential user flow:**
  Search / Homepage / Games → Explore Spin Crush Games → Try Demo → Experience the
  game → Download Spin Crush APK
- **Potential location:**
  - Primary: `/games/`
  - Homepage may later contain a small Games/Demo preview section
  - Demo functionality should NOT become the primary conversion goal
- **Primary conversion goal (unchanged):** APK download
- **Verification required before implementation** (do not assume any of these hold
  until explicitly verified):
  - Game/demo provider
  - Permission or licensing to display the games
  - Whether embedding is technically permitted
  - Available demo-game source
  - Mobile compatibility
  - Performance impact
  - Security considerations
  - User experience
  - Whether the demo can naturally support the APK conversion flow
- **NOT done:** No demo games, iframes, UI, `/games/` page, navbar entries, or
  promotional claims have been added.

## FUTURE GAMES CONTENT ARCHITECTURE — REVISED

STATUS:
PLANNED / FUTURE — NOT IMPLEMENTED.

The `/games/` page will serve as the main Spin Crush Games Collection / Games Hub.

The Games Hub should contain ALL verified and available game categories, not only the categories currently highlighted on the homepage.

The homepage currently highlights representative categories:

- Slots
- Casino Games
- Rummy

These are NOT the complete or final list of Spin Crush game categories.

The `/games/` architecture must remain expandable based on the actual verified Spin Crush game inventory.

Conceptual structure:

/games/
    ├── Slots
    ├── Casino Games
    ├── Rummy
    ├── Other verified game categories
    └── ...

==================================================

GAME CATEGORY PAGES

==================================================

When a game category has sufficient verified content and meaningful user/search intent, it may receive its own category page.

Preferred URL pattern:

`/games/{category}/`

Examples:

`/games/slots/`
`/games/rummy/`
`/games/casino/`

Additional categories may be added later when verified.

Do NOT assume that every future game category automatically requires its own page.

Do NOT create category pages until the actual game inventory/content has been verified.

==================================================

ONE-PAGE CATEGORY CONTENT MODEL

==================================================

IMPORTANT ARCHITECTURE DECISION:

Do NOT create separate `how-to-play`, `guide`, `features`, `game-types`, or similar subpages by default.

Instead, each major game category should ideally have ONE concise category page that summarizes the important information in a structured and scannable way.

Example:

`/games/slots/`

may contain:

1. Introduction
   - What are Slots?
   - Short explanation of the category

2. How Slots Work
   - Brief general explanation of gameplay

3. Types of Slots
   - Short explanation of relevant slot formats/types

4. Slot Features
   - Brief explanation of relevant mechanics/features

5. Available Slot Games
   - Selected/verified game examples where applicable

6. Short educational/gameplay information
   - Only what is useful to users
   - Avoid unnecessary long-form content

7. APK CTA
   - Guide users toward the Spin Crush APK where appropriate

The same general content model can be adapted to other categories.

Example:

`/games/rummy/`

may cover:
- What is Rummy?
- How Rummy works
- Relevant Rummy variations
- Basic gameplay concepts
- Available/verified Rummy games
- Short educational information
- APK CTA

Example:

`/games/casino/`

may cover:
- What are Casino Games?
- General explanation
- Relevant casino game types
- Short explanations of individual game types
- Available/verified games
- Basic gameplay information
- APK CTA

==================================================

CONTENT LENGTH PRINCIPLE

==================================================

Category pages should NOT become long-form articles by default.

The goal is:

"One page that summarizes the category clearly."

Content should be:
- concise
- scannable
- useful
- structured with clear sections
- easy to understand on mobile
- focused on user discovery

Avoid unnecessarily long explanations.

If a category can be explained effectively in several short sections, do not split it into multiple URLs.

==================================================

HOW-TO / GUIDE URL POLICY

==================================================

Do NOT create:

`/games/{category}/how-to-play/`

by default.

Do NOT create:

`/games/{category}/guide/`

by default.

Do NOT create multiple educational subpages simply to separate basic category information.

The preferred architecture is to keep basic:
- how it works
- how to play
- game types
- mechanics
- features

inside the main category page:

`/games/{category}/`

A dedicated educational subpage should only be considered later if there is a strong, verified reason such as:
- substantial unique educational content
- clearly different search intent
- significant content depth
- genuine user need
- SEO justification

This must be decided individually rather than automatically.

If a dedicated educational page is ever justified in the future, use:

`/games/{category}/how-to-play/`

as the preferred naming convention.

Do NOT create both `/guide/` and `/how-to-play/` for the same intent.

==================================================

CONTENT VERIFICATION

==================================================

Before publishing category-specific information, verify:

- Actual game categories
- Actual game titles
- Available game mechanics
- Available features
- Available variations
- Whether games are actually available through Spin Crush
- Licensing/permission where relevant
- Whether game/demo content can be displayed
- Accuracy of gameplay information

Do not present generic game mechanics as confirmed Spin Crush features unless verified.

Do not invent game titles, features, bonuses, payment methods, or availability claims.

==================================================

FUTURE INTERNAL LINKING

==================================================

The intended hierarchy is:

Homepage
    ↓
/games/
    ↓
/games/{category}/
    ↓
APK conversion

Example:

Homepage
→ Explore Spin Crush Games
→ `/games/`

`/games/`
→ Slots
→ `/games/slots/`

`/games/slots/`
→ Download Spin Crush APK
→ `/spin-crush-apk/`

The Games content should support discovery and understanding while the primary site conversion goal remains APK download.

==================================================

ARCHITECTURE PRINCIPLE

==================================================

The future Games content architecture should prioritize:

ONE CATEGORY = ONE COMPREHENSIVE BUT CONCISE PAGE

rather than:

ONE CATEGORY = MANY SMALL EDUCATIONAL PAGES

The goal is to avoid unnecessary URL proliferation, duplicated content, thin pages, and excessive maintenance.

Only create additional subpages when there is a strong content, user-intent, or SEO justification.

==================================================

END FUTURE GAMES CONTENT ARCHITECTURE

==================================================

PROMO CODE FEATURE

==================================================

STATUS:
PLANNED / FUTURE — NOT IMPLEMENTED.

SPIN CRUSH will have a dedicated Promo Code feature.

URL:

`/promo-code/`

The feature is related to Promotions but has its own dedicated page because it is an interactive promotional feature.

Navbar:

`Promo Code`

The navbar item should point to:

`/promo-code/`

==================================================

PROMOTIONAL PURPOSE

==================================================

The Promo Code feature is intended to allow users to generate a promotional code.

Users may receive a bonus of up to:

`₹200`

Confirmed promotional positioning:

"Generate a Promo Code and get a bonus of up to ₹200."

IMPORTANT:
The final public-facing wording may be refined later after the actual promotional mechanics are verified.

Do NOT claim:
- guaranteed ₹200
- unlimited promo codes
- guaranteed eligibility
- guaranteed redemption
- specific expiry dates
- specific wagering requirements
- specific minimum deposits
- specific payment requirements
- any other conditions that have not yet been verified

==================================================

ARCHITECTURE

==================================================

Keep these two concepts separate:

`/promotions/`

Purpose:
Promotional content hub.

`/promo-code/`

Purpose:
Dedicated Promo Code generation feature.

The Promotions page may introduce and link to the Promo Code feature.

The Promo Code page will contain the actual generation functionality when implemented.

==================================================

PAGE ARCHITECTURE

==================================================

Record:

`/promo-code/`

as a planned core feature/page.

Do NOT create:

- `/promo-code/generate/`
- `/promo-code/how-to/`
- `/promo-code/guide/`
- other Promo Code subpages

unless a future requirement explicitly requires them.

==================================================

RELATIONSHIP TO HOMEPAGE

==================================================

Homepage:

Promotions
↓
APK Conversion
↓
APK Information
↓
FAQ

The homepage does not need to contain the Promo Code generator.

The homepage may later contain a promotional teaser or CTA linking to:

`/promo-code/`

if this is determined to improve the conversion flow.

==================================================

ASSET

==================================================

The project currently contains:

`assets/images/banners/promo-code.webp`

This asset is currently untracked.

Record its existence, but do NOT mark it as a required Promo Code UI asset until its final usage is decided.

Do NOT modify the image.

==================================================

FUTURE IMPLEMENTATION

==================================================

The Promo Code generator is planned but is NOT implemented yet.

Future implementation may require:

- JavaScript
- Promo code generation logic
- User interaction
- Validation
- Promotional rules

Do NOT assume the implementation method yet.

Do NOT create the generator during this documentation task.

==================================================

END PROMO CODE FEATURE

==================================================

