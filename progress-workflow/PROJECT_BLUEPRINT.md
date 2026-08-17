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
- Download APK CTA
- Visited links must remain muted gray; generic `a:visited` green must NOT apply to navbar links.

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
- Legal

Preferred current brand description:

"Spin Crush — your YONO destination for slots, online casino, and gaming in India."

This wording may be refined later.

### Explore
- Home
- Games
- Promotions
- Spin Crush APK
- Visited links must remain muted gray; generic `a:visited` green must NOT apply to footer links.

### Legal
- Privacy Policy (`/privacy.html`) — FINAL / LOCKED
- Terms & Conditions (`/terms.html`) — FINAL / LOCKED
- Disclaimer (`/disclaimer.html`) — FINAL / LOCKED
- Contact Us (`/contact.html`) — supporting trust/contact page

### Responsible Gaming
- NOT required for current website scope.
- SPINCRUSH.US is an informational/gaming information and APK-download platform. It does not operate a backend real-money gaming account system and does not provide website-side deposits, withdrawals, wagering, or user balance functionality.
- Do not create a Responsible Gaming page unless project scope and verified legal/compliance requirements justify it.
- If the APK's actual functionality, operator status, jurisdiction, licensing, or real-money gaming capabilities change, legal/compliance review must be reopened.

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
- Support/payment-related sections

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

### Support
- `/install/`
- `/download-help/`
- `/contact.html`

### Legal
- `/privacy.html`
- `/terms.html`
- `/disclaimer.html`

### Localization (later)
- `/hi/`

Do not create these pages until their development phase.

## URL ARCHITECTURE (FINALIZED & LOCKED)

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

### Navigation Targets

Navbar:

| Label | Target |
|---|---|
| Home | / |
| Games | /games/ |
| Promotions | /promotions/ |
| Promo Code | /promo-code/ |
| APK | /spin-crush-apk/ |

Footer:

| Label | Target |
|---|---|
| Home | / |
| Games | /games/ |
| Promotions | /promotions/ |
| Spin Crush APK | /spin-crush-apk/ |
| Contact | /contact.html |
| Privacy | /privacy.html |
| Terms | /terms.html |
| Disclaimer | /disclaimer.html |

### Changelog

URL architecture finalized and locked. Non-legal pages use folder/index.html with directory-based public URLs; legal/trust pages retain root-level .html URLs. Migration of any existing non-legal root-level pages remains a separate implementation task.

### Implementation Audit (2026-08-14)

- `contact.html` internal links corrected: all non-legal relative `.html` links replaced with locked directory URLs.
- `games/index.html` asset paths corrected: root-absolute `/assets/...` references converted to filesystem-relative `../assets/...` paths.
- Canonical, OG, and JSON-LD URL architecture audited and found correct across all existing HTML files.
- URL architecture is now treated as locked for all future page development.

## ASSET PATH ARCHITECTURE (LOCKED)

Asset references MUST be relative to the actual filesystem location of the HTML document.

### Root

Root-level HTML files (`index.html`, `privacy.html`, `terms.html`, `disclaimer.html`, `contact.html`):

```html
<link rel="stylesheet" href="assets/css/style.css">
<script src="assets/js/script.js">
<img src="assets/images/...">
```

### One-level directory

One-level directory `index.html` files (e.g. `games/index.html`, `promotions/index.html`):

```html
<link rel="stylesheet" href="../assets/css/style.css">
<script src="../assets/js/script.js">
<img src="../assets/images/...">
```

### Two-level directory

Two-level directory `index.html` files (e.g. `games/slots/index.html`):

```html
<link rel="stylesheet" href="../../assets/css/style.css">
<script src="../../assets/js/script.js">
<img src="../../assets/images/...">
```

### Rules

- The public URL does **not** determine the relative asset prefix.
- The physical filesystem depth determines it.
- This applies to all local assets: CSS, JS, images, favicon, fonts, downloads, and other local files.
- Do not create duplicate asset directories inside page directories.
- Structured data, Open Graph, and Twitter Card image URLs may use absolute URLs (`https://spincrush.us/assets/...`) because they are consumed by external crawlers and social platforms.

## MASTER TEMPLATE RULE (LOCKED)

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
- global asset path convention
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
- asset conventions
- URL architecture

### FIRST IMPLEMENTATION EXAMPLE

`/games/` (`games/index.html`) has already been synchronized with the master template as the first implementation example.

All future non-legal pages must follow the same pattern.

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
- Promotional 16:9 carousel (3 slides: branding image, Jackpot Lotto, Referral Bonus)
- Primary homepage messaging (YONO Slots, first deposit bonus, daily rewards)
- Games section (Slots, Casino Games, Rummy)
- Promotions/content section with highlights
- Platform section (Mobile Access, Profile, Leaderboard, Support, Payment Options)
- APK conversion section
- Payment information where appropriate
- FAQ section
- Additional homepage sections

### Phase 04 — Core Pages
- Games
- Promotions
- Spin Crush APK

### Phase 05 — Support
- How to Install
- Contact Us

### Phase 06 — Legal
- Privacy Policy
- Terms & Conditions
- Disclaimer

### Phase 07 — SEO
- Homepage SEO implemented (title, meta description, canonical, OG, Twitter, JSON-LD, image dimensions)
- Keyword implementation for future pages
- Metadata for future pages
- Canonical for future pages
- Robots
- Open Graph for future pages
- Structured data for future pages (SoftwareApplication, FAQPage)
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

## GAMES ENTITY BLUEPRINT — FROZEN / AUTHORITATIVE

STATUS:
FROZEN / AUTHORITATIVE

This Games taxonomy is the authoritative source of truth for all future
internal-linking and entity-structure work on SPINCRUSH.US.

No entity, parent, or canonical URL in this blueprint may be changed
without a documented blueprint revision. The taxonomy below overrides
any generic definitions of casino, gambling, card games, dice games,
lottery games, or board games.

==================================================
PURPOSE
==================================================

The Games taxonomy defines the parent-child entity hierarchy for the
Spin Crush Games Collection at /games/. It establishes:

1. Which entities exist
2. The parent-child relationship for each entity
3. The canonical URL for every entity
4. The internal-linking hierarchy for future implementation

==================================================
AUTHORITATIVE GAMES ENTITY TABLE
==================================================

| Entity          | Parent        | Canonical URL |
|----------------|---------------|---------------|
| Casino Games   | Games         | /games/casino-games/ |
| Roulette       | Casino Games  | /games/casino-games/roulette/ |
| Blackjack      | Casino Games  | /games/casino-games/blackjack/ |
| Baccarat       | Casino Games  | /games/casino-games/baccarat/ |
| Poker          | Casino Games  | /games/casino-games/poker/ |
| Sic Bo         | Casino Games  | /games/casino-games/sic-bo/ |
| Teen Patti     | Casino Games  | /games/casino-games/teen-patti/ |
| Andar Bahar    | Casino Games  | /games/casino-games/andar-bahar/ |
| Dragon Tiger   | Casino Games  | /games/casino-games/dragon-tiger/ |
| 7 Up Down      | Casino Games  | /games/casino-games/7-up-down/ |
| Slots          | Games         | /games/slots/ |
| Rummy          | Games         | /games/rummy/ |
| Crash          | Games         | /games/crash/ |
| Wingo Lottery  | Games         | /games/wingo-lottery/ |
| Jhandi Munda   | Games         | /games/jhandi-munda/ |
| Ludo           | Games         | /games/ludo/ |

==================================================
FINAL ENTITY HIERARCHY
==================================================

Games
├── Casino Games
│   ├── Roulette
│   ├── Blackjack
│   ├── Baccarat
│   ├── Poker
│   ├── Sic Bo
│   ├── Teen Patti
│   ├── Andar Bahar
│   ├── Dragon Tiger
│   └── 7 Up Down
│
├── Slots
├── Rummy
├── Crash
├── Wingo Lottery
├── Jhandi Munda
└── Ludo

==================================================
NON-NEGOTIABLE TAXONOMY RULES
==================================================

1. Casino Games is a top-level child of Games.

2. Roulette, Blackjack, Baccarat, Poker, Sic Bo, Teen Patti,
   Andar Bahar, Dragon Tiger, and 7 Up Down are CHILDREN of
   Casino Games.

3. The canonical URLs for those nine casino games MUST remain
   under:

   /games/casino-games/

4. Slots is NOT a child of Casino Games.
   Slots is a direct child of Games:

   /games/slots/

5. Rummy is NOT a child of Casino Games.
   Rummy is a direct child of Games:

   /games/rummy/

6. Crash is NOT a child of Casino Games.
   Crash is a direct child of Games:

   /games/crash/

7. Wingo Lottery is a direct child of Games:

   /games/wingo-lottery/

8. Jhandi Munda is a direct child of Games:

   /games/jhandi-munda/

9. Ludo is a direct child of Games:

   /games/ludo/

10. Do NOT move Crash under Casino Games.

11. Do NOT move Slots under Casino Games.

12. Do NOT move Rummy under Casino Games.

13. Do NOT flatten Casino Games children into direct children
    of Games.

14. Do NOT change any canonical URL in this blueprint.

15. Do NOT infer taxonomy from generic definitions of casino,
    gambling, card games, dice games, lottery games, or board games.
    The blueprint above is the site's authoritative taxonomy.

16. Do NOT use the existence or absence of an HTML page as a reason
    to change this taxonomy.

17. If a canonical page does not yet exist, mark it as:
    "BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED"
    rather than changing its parent or URL.

==================================================
INTERNAL LINKING RULE
==================================================

The blueprint establishes the following canonical relationship:

Games
→ Casino Games
→ Casino Games child

Therefore:

/games/
    → /games/casino-games/
        → /games/casino-games/roulette/
        → /games/casino-games/blackjack/
        → /games/casino-games/baccarat/
        → /games/casino-games/poker/
        → /games/casino-games/sic-bo/
        → /games/casino-games/teen-patti/
        → /games/casino-games/andar-bahar/
        → /games/casino-games/dragon-tiger/
        → /games/casino-games/7-up-down/

While Games-level entities remain:

/games/
    → /games/slots/
    → /games/rummy/
    → /games/crash/
    → /games/wingo-lottery/
    → /games/jhandi-munda/
    → /games/ludo/

==================================================
ENTITY COUNT VALIDATION
==================================================

Total entities: 16

Breakdown:
- Casino Games: 1
- Casino Games children: 9
  (Roulette, Blackjack, Baccarat, Poker, Sic Bo, Teen Patti,
   Andar Bahar, Dragon Tiger, 7 Up Down)
- Games-level entities: 6
  (Slots, Rummy, Crash, Wingo Lottery, Jhandi Munda, Ludo)

1 + 9 + 6 = 16

Every entity appears exactly once.
Every parent is correct.
Every canonical URL is correct.

==================================================
IMPLEMENTATION GAPS
==================================================

The following canonical pages have NOT yet been verified as existing:

- /games/casino-games/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/casino-games/roulette/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/casino-games/blackjack/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/casino-games/baccarat/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/casino-games/poker/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/casino-games/sic-bo/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/casino-games/teen-patti/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/casino-games/andar-bahar/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/casino-games/dragon-tiger/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/casino-games/7-up-down/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/slots/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/rummy/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/crash/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/wingo-lottery/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/jhandi-munda/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)
- /games/ludo/ (BLUEPRINT ENTITY — PAGE NOT YET IMPLEMENTED)

These gaps are recorded for future implementation planning only.
They do not constitute a request to create, modify, or infer
production pages.

==================================================
END GAMES ENTITY BLUEPRINT

==================================================

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

CONFIRMED PROMOTIONS DATA

==================================================

Source:
Project-provided promotion data

Status:
Confirmed source data for future Promotions page implementation.

==================================================

PROMOTIONS CATEGORIES

==================================================

A. Deposit & Check-in Promotions
- Daily Bonus Check-in
- First Deposit Bonus

B. Events & Prize Promotions
- Jackpot Lotto
- Leaderboards
- Lucky Chest Event
- Lucky Gullak
- Lucky Wheel
- Mystery Bonus

C. Referral Promotions
- Refer & Earn

D. Cashback / Card Promotions
- Weekly & Monthly Card

==================================================

DAILY BONUS CHECK-IN

==================================================

Title:
Daily Bonus Check-in

Core concept:
Unlock free daily check-in rewards when you make a qualifying deposit.

Confirmed details:

- Each VIP level has its own deposit requirement to activate the benefit.
- Once activated, users can enjoy daily rewards based on their VIP level.
- Make a qualifying deposit to unlock check-in days.
- Different VIP levels have different deposit requirements.
- Bonus amounts vary by VIP level.
- Higher VIP levels enjoy higher rewards.
- Users should refer to the VIP table for check-in days after deposit.
- Users should log in every day to maintain their streak.
- If a user misses even one day, the streak resets and starts again from Day 1.

Do NOT invent:
- exact VIP levels
- exact deposit requirements
- exact reward amounts
- exact check-in schedule

unless those details already exist in confirmed project documentation.

==================================================

FIRST DEPOSIT BONUS

==================================================

Title:
First Deposit Bonus

Confirmed headline:
170%

Confirmed concept:
Make your first three deposits and receive a special bonus reward each time you top up.

Confirmed details:

- The first three deposits each come with an exclusive bonus offer.
- Users receive a special bonus reward on each of their first three deposits.
- The promotion gives users more opportunities to play at Spin Crush.

Preserve the confirmed 170% figure.

Do NOT invent:
- individual bonus percentages for deposit 1, 2, or 3
- minimum deposit amounts
- maximum bonus amounts
- wagering requirements

unless separately confirmed.

==================================================

JACKPOT LOTTO

==================================================

Title:
Jackpot Lotto

Confirmed headline:
Collect Ticket per Day and Win up to 24% of the Prize Pool

Confirmed details:

- Participate in Jackpot Lotto and win from the daily prize pool.
- Deposit at least ₹50 to activate the event.
- Earn tickets through deposits and turnover.
- The event resets daily at 00:00.
- The draw takes place at 23:55.
- Each account can earn up to 100 tickets per day.
- Every ticket has a chance to win.
- Multiple prizes can be won in a single day.
- Collecting more tickets increases winning chances.

Daily prize distribution:

- 1st Prize — 1 winner shares 24% of the prize pool.
- 2nd Prize — 7 winners share 4% each.
- 3rd Prize — 50 winners share 0.4% each.
- Lucky Prize — 1,000 winners share 0.03% each.

The source value "?50" has been normalized to ₹50 because "?" represents the lost ₹ symbol.

Do not alter the confirmed prize distribution.

==================================================

LEADERBOARDS

==================================================

Title:
Leaderboards

Confirmed concept:
Compete for higher rankings and earn bigger rewards.

Confirmed prize pool:
₹185,000

Do NOT invent:
- ranking period
- number of winners
- exact prize distribution
- scoring mechanics
- ranking algorithm
- eligibility requirements

unless separately confirmed.

==================================================

LUCKY CHEST EVENT

==================================================

Title:
Lucky Chest Event

Confirmed concept:
Get rewards from your downline.

Confirmed details:

- Share your referral link with friends.
- When a friend registers through your link and becomes a valid downline, they count toward your progress.
- Once the required number of valid downlines is reached, you can open the treasure chest and receive cash rewards.

Valid downline requirements:

- Deposit more than ₹100.
- Achieve turnover of more than ₹5,000.

The source values "?1oo" and "?5ooo" have been normalized to ₹100 and ₹5,000 because "?" represents the lost ₹ symbol.

Do NOT invent:
- exact number of downlines required
- additional eligibility requirements
- reward amounts

unless separately confirmed.

==================================================

LUCKY GULLAK

==================================================

Title:
Lucky Gullak

Confirmed concept:
Catch the pot reward.

Confirmed details:

- Stay online and join the Lucky Gullak event.
- Rewards are distributed randomly throughout the day.
- Random rewards are given to online players.
- Users participate by staying logged in during the event.
- The longer a user stays online, the higher their chances of receiving a reward.

Do NOT invent:
- exact reward amounts
- exact event schedule
- guaranteed reward frequency
- minimum online duration

==================================================

LUCKY WHEEL

==================================================

Title:
Lucky Wheel

Confirmed concept:
Spin the Lucky Wheel for a chance to win exciting rewards.

Confirmed details:

- Deposit the required amount to unlock a free spin.
- Prizes may include:
  - Coins
  - Bonuses
  - Free Spins Voucher
  - Deposit Rewards Voucher
- The wheel resets daily.
- Users can participate again the following day.

Confirmed CTA concept:
Deposit now, spin the wheel, and discover your rewards.

Do NOT invent:
- exact deposit requirement
- exact prize values
- number of spins
- probability or odds

unless separately confirmed.

==================================================

MYSTERY BONUS

==================================================

Title:
Mystery Bonus

Confirmed concept:
Play Spin Crush daily to receive mystery bonuses.

Do NOT invent:
- reward amounts
- eligibility requirements
- timing
- frequency
- deposit requirements

==================================================

REFER & EARN

==================================================

Title:
Refer & Earn

Confirmed concept:
Invite friends to play Spin Crush and earn referral rewards.

Confirmed flow:

1. Copy your invite link from the "Make Money" page.
2. Share it with friends.
3. Friends register.
4. Claim rewards in the "My Rewards" page.

Confirmed valid registration requirement:

- Friend binds a phone number.
- Reward: ₹5 for each valid registration.

The original source showed "F5"; this is confirmed as ₹5 because the source extraction replaced the Indian Rupee symbol.

Confirmed friend betting reward:

- Friends bet.
- User receives 1% of the friend's total bet amount.

Confirmed leaderboard component:

- Top 500 agents are rewarded weekly.
- Higher rank earns more.

Do NOT invent:
- exact weekly prize amounts
- exact leaderboard prize distribution
- ranking formula
- additional eligibility requirements

unless separately confirmed.

==================================================

WEEKLY & MONTHLY CARD

==================================================

Title:
Weekly & Monthly Card

Confirmed concept:
Choose a weekly or monthly card to receive daily cashback.

The original source contains the following values:

EVERY
CYCLE
DEPOSIT
BONUS
FIRST DAY
DAY
TIME

50
20
10
10
7 DAYS

100
14
100+2
2
7 DAYS

200
30
10
7 DAYS
160+10

500
70
10
500+10
7 DAYS
14

1,000
175
1,000+14
7 DAYS

2,000
420
2,000+60
60
7 DAYS

150
300
300+5
30 DAYS
5

8,000
920
5,000+164
164
30 DAYS

350
20,000
2,500
12,000+350
30 DAYS

IMPORTANT:

The numeric source data is available, but the extraction does not preserve reliable column alignment.

DO NOT infer which value belongs to which column.

DO NOT create a finalized public-facing table from this data.

Store this as:

"Weekly & Monthly Card — confirmed raw source data; table column alignment requires verification against the original source before publication."

Do not discard the raw values.

Do not invent missing column relationships.

==================================================

DATA NORMALIZATION

==================================================

The original source contained OCR/text-extraction formatting issues.

Normalize the confirmed currency values as follows:

- ?5o → ₹50
- ?50 → ₹50
- ?1oo → ₹100
- ?5ooo → ₹5,000
- F5 → ₹5

Reason:
The original "?" or "F" represents the Indian Rupee symbol "₹" lost or corrupted during extraction.

These normalized values are confirmed.

Do not mark these specific values as "requiring verification."

The only current verification issue is the structural column alignment of the Weekly & Monthly Card data.

==================================================

FUTURE PROMOTIONS PAGE

==================================================

These promotion details are intended to become the source of truth for:

/promotions/

The future page should eventually provide more detailed explanations of each promotion.

For now:

DO NOT create /promotions/.

DO NOT create new HTML files.

DO NOT create new routes.

DO NOT add this detailed content to the homepage.

The homepage should continue using concise promotional teaser copy.

==================================================

HOMEPAGE PROTECTION

==================================================

Do NOT modify the existing homepage Promotions section.

Do NOT change:

- "Spin Crush Promotions" H2
- current Promotions intro
- Promotions image
- Promotions CTA
- Promotions layout
- Promotions CSS

Do not replace the homepage teaser with the detailed promotion mechanics.

==================================================

END CONFIRMED PROMOTIONS DATA

==================================================

