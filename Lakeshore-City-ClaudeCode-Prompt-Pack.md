# Lakeshore City — Ultra-Luxury Rebuild
## Claude Code Prompt Pack (paste in order)

This is a sequence of copy-paste prompts for **Claude Code**, built to use your two installed tools:

- **ui-ux-pro-max skill** — auto-generates the design system (style, colors, typography, anti-patterns) and persists it to `design-system/MASTER.md`.
- **21st.dev Magic MCP** — generates the actual React/Tailwind/shadcn components (`/ui` or "use 21st magic").

**Target stack:** Next.js (App Router) + TypeScript + Tailwind + shadcn/ui + Framer Motion.

**How to use this file:** Paste **Prompt 0** first and let it finish. Then paste **Prompt 1**, wait for it to complete, review, then continue. Do not paste two prompts at once. After each build prompt, run `npm run dev` and eyeball the section before moving on.

---

## DESIGN DIRECTION (read once — it's baked into every prompt below)

Ultra-luxury lakeside real estate. The emotional target is "private members' club meets five-star resort brochure," not "property listing site." Reference feeling: Aman Resorts, Six Senses, Sotheby's International Realty, St. Regis.

- **Palette:** deep lake teal / emerald (`#0B3B36`–`#0F4D45`) + warm antique gold (`#C9A65A`/`#B8860B`) + ivory/cream (`#F6F1E7`) + soft charcoal (`#1C1C1C`). Gold is an accent only — never fill large areas with it.
- **Typography:** an elegant high-contrast serif for display headings (e.g. Cormorant Garamond / Playfair Display) paired with a clean grotesque sans for body (e.g. Inter / Montserrat). Generous letter-spacing on small caps labels.
- **Layout:** full-bleed cinematic imagery, very generous whitespace, thin gold hairline dividers, small-caps overline labels above headings, large editorial type.
- **Motion:** slow, refined. Fade-and-rise reveals on scroll, parallax on hero media, subtle image zoom on hover, smooth 300–500ms easing. Nothing bouncy or fast. Always respect `prefers-reduced-motion`.
- **Avoid (anti-patterns):** purple/blue SaaS gradients, neon, emoji icons, harsh drop shadows, cramped spacing, generic stock-photo carousels, clip-art icons. Icons = thin-line (Lucide) only.

---

## PROMPT 0 — Project scaffold + design system

```
I'm rebuilding an ultra-luxury lakeside real-estate website called "Lakeshore City" (Pakistan's most premium lakeside development, located at Khanpur Dam near Islamabad). Before writing any UI, use the ui-ux-pro-max skill to generate a complete design system for a LUXURY REAL ESTATE / HIGH-END PROPERTY brand, then persist it.

Design intent:
- Mood: five-star resort + private members' club, not a property listing site. References: Aman, Six Senses, Sotheby's International Realty.
- Palette: deep lake teal/emerald (#0B3B36–#0F4D45), warm antique gold accent (#C9A65A), ivory/cream (#F6F1E7), soft charcoal (#1C1C1C). Gold is accent-only.
- Typography: high-contrast elegant serif for display (Cormorant Garamond or Playfair Display) + clean sans for body (Inter or Montserrat).
- Effects: slow cinematic scroll reveals, parallax hero, subtle hover zoom, thin gold hairline dividers, small-caps overline labels. Respect prefers-reduced-motion.
- Anti-patterns to avoid: SaaS purple gradients, neon, emoji icons, harsh shadows, cramped spacing.

Then scaffold the project:
- Next.js (App Router) + TypeScript + Tailwind + shadcn/ui + Framer Motion + lucide-react.
- Configure the fonts above via next/font.
- Put the palette into Tailwind theme tokens (brand.teal, brand.gold, brand.cream, brand.charcoal) and CSS variables.
- Create the folder structure for these routes: / (home), /about, /residencia, /farms, /club, /features, /location, /payment-plan, /booking, /career, /contact.
- Save the design system to design-system/MASTER.md so every later prompt can read it.

Do the design-system step first and show me the recommended palette/type/effects before scaffolding.
```

---

## PROMPT 1 — Global navbar + footer

```
Read design-system/MASTER.md and follow it. Use 21st.dev Magic MCP to generate a luxury sticky navbar and a footer as shared layout components.

NAVBAR:
- Transparent over the hero, transitions to a frosted ivory/teal bar on scroll (smooth).
- Left: "Lakeshore City" wordmark with a small tagline "Pakistan's Most Premium Lakeside Marvel".
- Center/right nav links: Home, About Us, then a "Lakeshore City" dropdown (Residencia, Farms, Club), Payment Plan, Location, then a "Bookings" dropdown (Sales Partner Registration, Client Booking Form), Career, Client Login (external).
- Right: a gold outline "Contact Us" button.
- Thin gold hairline under the bar. Elegant hover underlines. Mobile: full-screen overlay menu with serif links and slow fade.

FOOTER:
- Deep teal background, cream text, gold hairline accents.
- Columns: brand blurb + Al Sadat Group credit; quick links; the three projects; contact block (Address: 1st Floor Yasin Plaza, Blue Area, Islamabad — Email: contact@lakeshorecity.com — Phone: +92 335 7775253).
- Social icons (Facebook, Twitter/X, Instagram, Email) as thin-line icons.
- Trust line: "NOC Approved — 16,000 Kanals — NOC No. 145-50".
- Bottom: copyright + small print.

Make both fully responsive and accessible (keyboard nav, focus states).
```

---

## PROMPT 2 — Home hero (cinematic)

```
Read design-system/MASTER.md. Build the homepage hero using 21st.dev Magic MCP. This is the single most important section — it must feel like a luxury resort film.

- Full-viewport (100vh) cinematic hero with a background video/image slot (placeholder for a slow drone shot over a lake at golden hour). Dark teal gradient overlay for text legibility.
- Overline (small caps, gold): "IT'S LAKE O'CLOCK".
- Huge serif headline: "Pakistan's Most Premium Lakeside Marvel".
- Subline: "Lakeshore City brings you Lakeshore Residencia, Lakeshore Farmhouses and Lakeshore Club. Bask in the serenity of Lakeshore."
- Two CTAs: solid gold "Explore Now" + ghost/outline "Register Now".
- Slow parallax on the media, fade-and-rise on the text on load, a subtle scroll-cue at the bottom.
- Optional: a refined slider that cycles 4 hero slides (Lakeshore City / Farms / Residencia / Club), each with its own headline and CTA, with elegant slow crossfade and minimal dot indicators in gold.

Respect prefers-reduced-motion (static fallback). Mobile: keep the type large and legible, reduce overlay video to a poster image.
```

---

## PROMPT 3 — Home "Three Pillars" section

```
Read design-system/MASTER.md. Build a "Three Pillars" showcase section for the homepage using 21st.dev Magic MCP.

Three large editorial cards (or alternating full-width image rows), one per offering:
1. LAKESHORE RESIDENCIA — "Step into a life where your dreams find a home without the burden of down payments." CTA → /residencia.
2. LAKESHORE FARMS — "Find your slice of paradise, where the idyllic lake meets the serene mountains." CTA → /farms.
3. LAKESHORE CLUB — "Designs that enhance feelings of closeness, and hopefully, happiness." CTA → /club.

Style: large full-bleed image with a teal gradient wash, gold overline label, serif title, one line of body, thin gold "Explore →" link. On hover, slow image zoom + caption rise. Stagger the reveals on scroll. Make it feel like turning pages of a luxury brochure.
```

---

## PROMPT 4 — Home: signature experiences / amenities teaser

```
Read design-system/MASTER.md. Build a "Signature Experiences" section for the homepage using 21st.dev Magic MCP — a refined bento-style grid teasing the marquee amenities, linking to /features.

Feature these headline experiences with thin-line icons and one-line captions:
- Replica of Lake Argyle
- Floating Resort & Boat Dine-In
- Hot Air Ballooning (first ever in Pakistan)
- Sky Diving / Parasailing
- Cruise Boat & Boating
- Cinepax cinema
- Spa: Steam, Sauna & Jacuzzi
- Mini Golf, Archery, Horse Riding
- 5G Smart City

Layout: asymmetric bento grid, varying tile sizes, large hero tile for "Lake Argyle". Cream background, teal tiles, gold hairlines, subtle hover lift and image zoom. Closing CTA: "View All Features & Facilities" → /features.
```

---

## PROMPT 5 — Home: trust / credibility band + closing CTA

```
Read design-system/MASTER.md. Build two closing homepage sections with 21st.dev Magic MCP.

1) TRUST BAND (deep teal):
- Big gold stat row: "16,000 Kanals NOC-Approved" · "NOC No. 145-50" · "25 min from Islamabad D-12" · "Both Waterfront & Hill View".
- Below: a quiet logo strip of esteemed partners (placeholders: Islamabad Chamber of Commerce, Rawalpindi Chamber, PowerChina, PTDC, KPCTI, The Tourist Universe) — grayscale, gold on hover.
- One line: "Developed by Al Sadat Group — established 1975, with offices across Pakistan, Dubai and England."

2) FINAL CTA (full-bleed lake image, dark wash):
- Serif headline: "Your Lakeside Life Begins Here."
- Subline about zero down payment, starting from just PKR 25,000/month.
- Gold "Register Now" + outline "Download Payment Plan".

Slow reveals, count-up animation on the stats (respect reduced-motion).
```

---

## PROMPT 6 — About Us page

```
Read design-system/MASTER.md and design-system/pages/about.md if it exists. Build the /about page with 21st.dev Magic MCP — an elegant editorial layout.

Sections:
1. Page hero: overline "OUR STORY", serif title "Discover a Luxurious Lifestyle at Lakeshore City".
2. CHAIRMAN'S MESSAGE: portrait image slot of "Syed Sadat Hussain Shah", his titles (Chairman, Lakeshore City; Chairman, Seventeen Villas; Chairman, Al Sadat Homes; Chairman, Youth Excellence Solidarity (YES) Pakistan; Chairman, Tourism for Interfaith Peace (TIP); Chairman, Hospitality Committee ICCI), and his quote:
   "To me, leadership is about building platforms that create opportunity and progress for people. Through projects like Lakeshore City, my vision is to use real estate and tourism as engines of economic growth..." (pull full quote). Style as a large pull-quote with gold quotation mark.
3. DEVELOPERS & OWNERS — Al Sadat Group: a timeline (1975 founding in Karachi → 1980s timber wholesale → 2000s global timber imports → 2015 Al Sadat Associates → 2018 Al Sadat Marketing → 2021 Blue Area Islamabad office → 2023 Lakeshore City founded → today: offices in Pakistan, Dubai & England). Render as a refined vertical timeline with gold nodes.
4. VISION and MISSION as two elegant facing cards.
5. ESTEEMED PARTNERS logo strip.

Editorial spacing, serif headings, thin gold rules. Reveal animations on scroll.
```

---

## PROMPT 7 — Lakeshore Residencia page (with payment tables)

```
Read design-system/MASTER.md. Build /residencia with 21st.dev Magic MCP. Luxury landing page for the residential offering.

Sections:
1. Hero with logo lockup, overline, title "Lakeshore Residencia", Urdu tagline "اب بنائیں اپنا آشیانہ 25,000 ماہانہ", CTA "Book Your Plot Now".
2. Plot sizes as elegant selectable cards: 05 Marla, 07 Marla, 10 Marla, 01 Kanal.
3. "Zero-charges" benefits grid with thin-line check icons: No Down Payment, No Confirmation Charges, No Booking Charges, No Possession Charges, No Balloting Charges, No Half-Yearly Charges. Headline: "The Most Significant Real Estate Revolution in Affordable Living."
4. A short luxury narrative block: "Elevate Your Lifestyle at Lakeshore Residencia — Where Luxury Meets Affordability." + the descriptive paragraph about homeownership without upfront costs.
5. PAYMENT PLAN — two responsive luxury tables (gold header row, alternating cream rows, hover highlight):

EXECUTIVE BLOCK (Residential):
| Plot Size | 60 Monthly Installments | Balloting (6th Month) | Final Payment | Total Price |
| 5 Marla | 25,000 | 100,000 | 200,000 | 1,800,000 |
| 7 Marla | 35,000 | 140,000 | 280,000 | 2,520,000 |
| 10 Marla | 45,000 | 180,000 | 360,000 | 3,240,000 |
| 1 Kanal | 75,000 | 300,000 | 600,000 | 5,400,000 |

EXECUTIVE BLOCK (Commercial):
| Plot Size | 60 Monthly Installments | Balloting (6th Month) | Final Payment | Total Price |
| 4 Marla | 100,000 | 700,000 | 1,400,000 | 8,100,000 |
| 6 Marla | 150,000 | 1,000,000 | 2,000,000 | 12,100,000 |
| 8 Marla | 200,000 | 1,400,000 | 2,800,000 | 16,200,000 |

(All amounts in PKR. Add a small note: "Located at Khanpur Dam — 25 min from Islamabad D-12.")
6. FAQ accordion (shadcn Accordion) using the site's existing Q&As: what is Residencia, plot sizes, apartment types (Studio/1-bed/2-bed), amenities (Education sector, Hospitals, Restaurants, Marquee/Conference, Cinepax), NOC approval (16,000 kanals, NOC 145-50, from TMA), payment plan, distance from major roads, the 25,000 zero-down offer, what sets it apart, how to book.
7. Contact strip: Address / contact@lakeshorecity.com / +92 335 7775253. CTA "Get Your Membership".

Make tables genuinely premium — not a plain HTML table. Mobile: tables become stacked cards.
```

---

## PROMPT 8 — Lakeshore Farms page (with payment tables)

```
Read design-system/MASTER.md. Build /farms with 21st.dev Magic MCP.

Sections:
1. Hero: logo lockup, title "Lakeshore Farms", sizes shown big: 02 / 04 / 08 Kanal Farm Houses. CTA "Book Your Farm House".
2. Narrative: "Find your slice of paradise, where the idyllic lake meets the serene mountains." + paragraph about rural living, hiking, biking, horseback riding.
3. Owner perks callout (gold card): "Farmhouse owners receive 50% off club membership, free boating with an expert guide for 2+ hours, and 50% off stays at Lakeshore Resort."
4. PAYMENT PLAN — two luxury tables (label them clearly):

FARM HOUSES — NEW PAYMENT PLAN:
| Size (Kanal) | Booking 12.5% | Confirmation 12.5% | 30 Monthly Installments | 6 Bi-Annual Payments | Balloting 10% | Total Price |
| 02 | 1,000,000 | 1,000,000 | 86,667 | 433,333 | 800,000 | 8,000,000 |
| 04 | 1,812,500 | 1,812,500 | 157,083 | 785,417 | 1,450,000 | 14,500,000 |
| 08 | 3,375,000 | 3,375,000 | 292,500 | 1,462,500 | 2,700,000 | 27,000,000 |

FARM HOUSES — OLD RATES (show as secondary/struck-through reference):
| 02 | 937,500 | 937,500 | 81,250 | 406,250 | 750,000 | 7,500,000 |
| 04 | 1,750,000 | 1,750,000 | 151,666 | 758,333 | 1,400,000 | 14,000,000 |
| 08 | 3,312,500 | 3,312,500 | 287,083 | 1,435,417 | 2,650,000 | 26,500,000 |

(All PKR.) Buttons: "Get Your Membership", "Download Payment Plan".
5. Closing lifestyle gallery placeholder (lake + mountains + farmhouse).

Same premium table treatment; mobile collapses to cards.
```

---

## PROMPT 9 — Lakeshore Club page (membership tiers)

```
Read design-system/MASTER.md. Build /club with 21st.dev Magic MCP — the most aspirational page, like a private members' club.

Sections:
1. Hero: title "Lakeshore Club Membership", overline "An Invitation to the Extraordinary".
2. MEMBERSHIP TIERS as four luxury pricing/tier cards (Platinum should feel most premium — gold border, subtle shimmer):
   - Bronze (Special)
   - Silver (02 Kanal)
   - Gold (04 Kanal)
   - Platinum (08 Kanal)
   Note: "Lakeshore residents gain club membership for PKR 10 lakh. Farmhouse owners receive 50% off membership + free 2-hour guided boating + 50% off Lakeshore Resort stays."
3. "EXPAND YOUR WORLD" reciprocal-clubs section:
   - Elite Club (High Mountain Point, near Islamabad) and Downtown Club (near Eighteen & Top City) — 50% discount at each.
   - 10 Reciprocal National Clubs.
   - 30+ Reciprocal International Clubs across UAE, Maldives, Thailand, Malaysia, Indonesia, Qatar, Azerbaijan, Uzbekistan — with member discounts.
   Render the international reach as an elegant world-map motif or a refined country list with gold pins.
4. Club amenities highlight grid (link to /features): boating, spa, cinema, gym, mini golf, etc.
5. CTA: "Get Your Membership".

Luxurious cards, gold foil feel, slow hover transitions.
```

---

## PROMPT 10 — Features & Facilities page

```
Read design-system/MASTER.md. Build /features with 21st.dev Magic MCP — a rich, immersive amenities showcase. Headline: "Features & Facilities — an extravagant lifestyle, world-class amenities."

Group the amenities into elegant categorized sections, each item a card with a thin-line Lucide icon, title, and the one-line description from the source:

CITY INFRASTRUCTURE: Lake Argyle (replica), Education Sector, Hospital, Club House / Conference Room, Marquee / Event Space, 5G Smart City.

ADVENTURE & WATER: Boating, Floating Resort, Boat Dine-In, Cruise Boat, Water Park, Sky Diving / Parasailing, Hot Air Ballooning (first in Pakistan), Sky Walk, Archery, Shooting Range, Horse Riding Club.

LEISURE & WELLNESS: Spa (Steam, Sauna & Jacuzzi), Gym (sauna, jacuzzi, trainers), Mini Golf Course, Hiking Trails, Cinepax, Resorts, Wildlife Preservation.

Layout: alternating full-width feature rows for the 3–4 "hero" amenities (Lake Argyle, Floating Resort, Hot Air Ballooning, Cinepax) with large imagery + parallax, then a bento/masonry grid for the rest. Cream + teal sections, gold accents, staggered scroll reveals. Each card hover = slow image zoom. Mobile: single column, keep imagery prominent.
```

---

## PROMPT 11 — Location page

```
Read design-system/MASTER.md. Build /location with 21st.dev Magic MCP.

Sections:
1. Hero: "Located at Khanpur Dam" with overline "FIND US".
2. Interactive map area: an embedded map placeholder (Google Maps iframe slot) styled with a teal frame, plus a stylized illustrated location map image slot.
3. DISTANCES grid (cards with thin-line icons):
   - 2.5 km from Mabali Island
   - 15 min drive from Islamabad D-12
   - 20 km from Faisal Town, Wah Cantt
   - 04 km from Rajdani
   - 13 km from Multi Garden B-12
4. "How is Lakeshore City Unique?" feature grid:
   - Both Waterfront and Hill View
   - Near Major Cities in Pakistan
   - PKR 10k Redemption Voucher for club members
   - Cruise Boat ownership experience
   - Surrounded by minority religious heritage sites
5. NEARBY HERITAGE section (elegant editorial list): Buddhist sites (Jaulian Monastery, Dharmarajika Stupa, Mohra Moradu Stupa, Bhamala Stupa), Sikh (Gurdwara Panja Sahib), Hindu (Katas Raj Temples).

Refined, map-forward, lots of whitespace. Reveal animations on the distance cards.
```

---

## PROMPT 12 — Payment Plan page

```
Read design-system/MASTER.md. Build /payment-plan with 21st.dev Magic MCP as a clean, premium overview that consolidates all plans.

- Hero: "Flexible Luxury — Payment Plans" with the headline benefit "Zero Down Payment. Start from PKR 25,000/month."
- A toggle or tabbed switcher (shadcn Tabs) between: Residencia (Residential), Residencia (Commercial), Farm Houses. Each tab shows the matching premium table from Prompts 7 & 8 (reuse the same table component).
- A "zero-charges" reassurance row (No Down Payment, No Booking, No Confirmation, No Balloting, No Possession, No Half-Yearly).
- Download buttons for PDF payment plans, and a "Lakeshore Merging Policy" link.
- CTA: "Get Your Membership" / "Talk to a Sales Advisor".

Keep the numbers consistent with the project pages. Tables collapse to cards on mobile.
```

---

## PROMPT 13 — Booking, Contact & Career forms

```
Read design-system/MASTER.md. Build the lead-capture pages with 21st.dev Magic MCP, using shadcn form components with validation (react-hook-form + zod). Luxury form styling: generous spacing, gold focus rings, serif section titles.

1. /booking — two forms in tabs:
   - CLIENT BOOKING FORM: name, email, phone, project (Residencia/Farms/Club), plot size, message.
   - SALES PARTNER REGISTRATION: name, CNIC, city, experience, contact details.
2. /contact — "Register Now" / contact form: name, email, phone, interest, message, plus the contact block (1st Floor Yasin Plaza, Blue Area, Islamabad · contact@lakeshorecity.com · +92 335 7775253) and a styled map.
3. /career — elegant careers page: intro about joining Al Sadat Group, an open-roles list placeholder (accordion), and an application form (name, email, phone, position, CV upload, message).

Add inline validation, success states, and accessible labels/errors. Style the submit as a gold button with a slow hover fill.
```

---

## PROMPT 14 — Polish pass: motion, micro-interactions, performance, SEO, a11y

```
Read design-system/MASTER.md. Do a final luxury polish pass across the whole site (no new pages).

MOTION & FEEL:
- Add a smooth global scroll feel and consistent fade-and-rise reveal on every section (Framer Motion, staggered). Keep it slow and refined (300–500ms). Gate ALL motion behind prefers-reduced-motion.
- Add a subtle custom cursor or thin gold link-underline animation for desktop. Tasteful image hover zooms everywhere.
- Add an elegant page-transition/loader with the Lakeshore wordmark on first load.

POLISH:
- Ensure consistent vertical rhythm and section spacing site-wide.
- Replace any emoji/clip-art with thin-line Lucide icons.
- cursor-pointer on every clickable element; visible focus rings (gold) for keyboard nav.

PERFORMANCE:
- next/image for all imagery, lazy-load below the fold, proper sizes, poster images for any video.
- Subset/optimize fonts.

SEO & META:
- Per-page metadata (titles/descriptions echoing the current site, e.g. "Lakeshore City — Pakistan's Most Premium Lakeside Marvel"), Open Graph images, JSON-LD (RealEstateAgent / Place), sitemap.xml, robots.txt.

ACCESSIBILITY:
- WCAG AA contrast (watch gold-on-cream), alt text on all images, semantic landmarks, skip-to-content link.

Run through the ui-ux-pro-max pre-delivery checklist and fix every item.
```

---

## PROMPT 15 — Final QA review

```
Read design-system/MASTER.md. Act as a senior design reviewer for a luxury brand. Audit the full site against these criteria and produce a checklist of issues + fixes, then apply the fixes:

1. Brand consistency: every page uses the teal/gold/cream system, the serif+sans pairing, and consistent spacing. No off-palette colors, no SaaS gradients, no neon.
2. Luxury feel: generous whitespace, cinematic imagery, refined slow motion, premium tables (not plain HTML), elegant typography hierarchy.
3. Responsiveness at 375 / 768 / 1024 / 1440 px — especially the payment tables (must become cards on mobile) and the navbar overlay.
4. Accessibility: contrast, focus states, reduced-motion, alt text, keyboard nav.
5. Content accuracy: confirm all prices, plot sizes, distances, NOC number (145-50 / 16,000 kanals), and contact details (1st Floor Yasin Plaza, Blue Area, Islamabad · contact@lakeshorecity.com · +92 335 7775253) match the spec.
6. Performance: Lighthouse pass — flag anything below 90 on Performance/Accessibility/Best Practices/SEO and fix.

List findings by severity, then implement the fixes.
```

---

## Tips for best results

- After Prompt 0, **open `design-system/MASTER.md`** and tweak the palette/fonts if you want — every later prompt reads from it, so one edit there propagates everywhere.
- For each section, if 21st.dev gives you a component you like but want refined, follow up with: *"Refine this to match design-system/MASTER.md — more whitespace, slower motion, gold hairline dividers, larger serif heading."*
- Supply real imagery early (drone lake shots, golden-hour, farmhouse, club interiors). Luxury lives or dies on photography — swap placeholders for high-res assets before launch.
- Keep the gold restrained. If a section looks "cheap," it's usually too much gold, shadows too harsh, or spacing too tight.
- Generate one section per prompt, review in `npm run dev`, then continue. Don't batch.
