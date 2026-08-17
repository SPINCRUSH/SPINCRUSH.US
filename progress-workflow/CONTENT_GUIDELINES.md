# SPINCRUSH.US — Content Guidelines

## BRAND

- Use **"SPIN CRUSH"** in visible content.
- Domain remains **"SPINCRUSH.US"**.
- Keep branding consistent across all pages.

## AUDIENCE

- Indian players
- English first
- Hindi later

## STYLE

- Clear
- Natural
- Professional
- Modern
- Concise
- User-focused
- Avoid keyword stuffing
- Avoid generic AI-sounding copy
- Avoid exaggerated claims
- Avoid unsupported claims
- Navigation links (navbar/footer) must remain muted gray when visited; do not apply the generic green accent color to visited navigation links.

## SEO

- Use **"spin crush"** naturally in content.
- Use **"spin crush apk"** where relevant and contextually appropriate.
- Use **"spin crush apk download"** where search intent genuinely matches.
- Never force keywords into unrelated content.

## YONO

"YONO" means "You Only Need One."

YONO is used as brand messaging in homepage copy.
Do not present it as a factual, legal, or verified claim.

## PAYMENT

Payment methods (UPI, IMPS, Crypto, USDT) are listed on the homepage Platform section and FAQ as supported options.
Do not make additional availability claims beyond what is presented on the homepage.

## DO NOT INVENT

Do not create or claim the existence of:

- Bonuses
- Promotions
- Payment availability
- Licenses
- Certifications
- Official status
- Gambling or legal claims
- Security claims
- App features
- Download details

unless verified or explicitly provided later.

## LANGUAGE SWITCHER

The homepage language switcher is the **SINGLE SOURCE OF TRUTH** for all bilingual pages.

Reference files:
- `/index.html` for English pages
- `/hi/index.html` for Hindi pages

**ABSOLUTE RULES:**

1. **Visual order is ALWAYS `EN | HI` on every page.** Never reverse the order on Hindi pages.
2. **Never use `IN` as a visible language label.** `IN` belongs only to the locale/region value:
   - English locale → `en-IN`
   - Hindi locale → `hi-IN`
3. **Only the active/current state changes** between English and Hindi pages.
4. **Copy the language switcher structure exactly** from the corresponding homepage. Keep the same HTML structure, CSS classes, styling, accessibility attributes, and behavior.
5. **Only change the `href` targets** so they point to the equivalent language version of the current page.
6. **Do not infer or redesign** the switcher based on `en-IN` / `hi-IN`.

Required visible labels:
- English → `EN`
- Hindi → `HI`

Required switcher order (same on all pages):
- `EN | HI`

Active state:
- English page → `EN` is active, `HI` links to `/hi/...`
- Hindi page → `HI` is active, `EN` links to `/...`

Examples:
- `/games/` → `EN | HI` (EN active)
- `/hi/games/` → `EN | HI` (HI active)
- `/promotions/` → `EN | HI` (EN active)
- `/hi/promotions/` → `EN | HI` (HI active)

This rule applies to every current and future bilingual page. The homepage switcher is the only reference. Do not create alternative patterns.

## LEGAL PAGES

- Legal pages (`/privacy.html`, `/terms.html`, `/disclaimer.html`, `/contact.html`) are **FINAL / LOCKED**.
- Do not introduce unverified gambling, licensing, regulatory, compliance, or legal claims.
- Do not create Responsible Gaming content unless project scope and verified legal/compliance requirements justify it.
- Preserve the distinction between the website's informational/APK-download role and any functionality that may exist inside the APK.
- If the APK's actual functionality, operator status, jurisdiction, licensing, or real-money gaming capabilities change, legal/compliance review must be reopened.
