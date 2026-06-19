# Lakeshore City — Remaining Prompts (7–15) condensed into 3

You've completed Prompts 0–6. Paste these three in order. Each still reads `design-system/MASTER.md`, uses 21st.dev Magic MCP for components, and targets Next.js + Tailwind + shadcn + Framer Motion. Build one batch, review in `npm run dev`, then continue.

---

## PROMPT A — The three project pages (Residencia · Farms · Club)

```
Read design-system/MASTER.md and follow it. Using 21st.dev Magic MCP, build THREE luxury pages: /residencia, /farms, /club. Shared premium treatment: cinematic hero, gold overline labels, serif headings, thin gold hairlines, slow scroll reveals, hover image zoom. Build ONE reusable premium table component (gold header row, alternating cream rows, hover highlight) and reuse it — on mobile every table collapses to stacked cards.

=== /residencia ===
1. Hero: logo lockup, title "Lakeshore Residencia", Urdu tagline "اب بنائیں اپنا آشیانہ 25,000 ماہانہ", CTA "Book Your Plot Now".
2. Plot sizes as selectable cards: 05 Marla, 07 Marla, 10 Marla, 01 Kanal.
3. Zero-charges benefits grid (thin-line check icons): No Down Payment, No Confirmation Charges, No Booking Charges, No Possession Charges, No Balloting Charges, No Half-Yearly Charges. Headline: "The Most Significant Real Estate Revolution in Affordable Living."
4. Narrative block: "Elevate Your Lifestyle at Lakeshore Residencia — Where Luxury Meets Affordability." + paragraph on homeownership without upfront costs.
5. PAYMENT PLAN — two tables (PKR):
   EXECUTIVE BLOCK (Residential):
   | Plot Size | 60 Monthly Installments | Balloting (6th Month) | Final Payment | Total Price |
   | 5 Marla | 25,000 | 100,000 | 200,000 | 1,800,000 |
   | 7 Marla | 35,000 | 140,000 | 280,000 | 2,520,000 |
   | 10 Marla | 45,000 | 180,000 | 360,000 | 3,240,000 |
   | 1 Kanal | 75,000 | 300,000 | 600,000 | 5,400,000 |
   EXECUTIVE BLOCK (Commercial):
   | 4 Marla | 100,000 | 700,000 | 1,400,000 | 8,100,000 |
   | 6 Marla | 150,000 | 1,000,000 | 2,000,000 | 12,100,000 |
   | 8 Marla | 200,000 | 1,400,000 | 2,800,000 | 16,200,000 |
   Note: "Located at Khanpur Dam — 25 min from Islamabad D-12."
6. FAQ accordion (shadcn) covering: what Residencia is, plot sizes, apartment types (Studio/1-bed/2-bed), amenities (Education sector, Hospitals, Restaurants, Marquee/Conference, Cinepax), NOC approval (16,000 kanals, NOC 145-50, from TMA), payment plan, road distances, the 25,000 zero-down offer, what sets it apart, how to book.
7. Contact strip + CTA "Get Your Membership".

=== /farms ===
1. Hero: title "Lakeshore Farms", sizes big: 02 / 04 / 08 Kanal Farm Houses, CTA "Book Your Farm House".
2. Narrative: "Find your slice of paradise, where the idyllic lake meets the serene mountains." + paragraph on rural living, hiking, biking, horseback riding.
3. Gold owner-perks card: "Farmhouse owners get 50% off club membership, free 2-hour guided boating, and 50% off Lakeshore Resort stays."
4. PAYMENT PLAN — two tables (PKR):
   FARM HOUSES — NEW PAYMENT PLAN:
   | Size (Kanal) | Booking 12.5% | Confirmation 12.5% | 30 Monthly Installments | 6 Bi-Annual Payments | Balloting 10% | Total Price |
   | 02 | 1,000,000 | 1,000,000 | 86,667 | 433,333 | 800,000 | 8,000,000 |
   | 04 | 1,812,500 | 1,812,500 | 157,083 | 785,417 | 1,450,000 | 14,500,000 |
   | 08 | 3,375,000 | 3,375,000 | 292,500 | 1,462,500 | 2,700,000 | 27,000,000 |
   FARM HOUSES — OLD RATES (secondary/reference styling):
   | 02 | 937,500 | 937,500 | 81,250 | 406,250 | 750,000 | 7,500,000 |
   | 04 | 1,750,000 | 1,750,000 | 151,666 | 758,333 | 1,400,000 | 14,000,000 |
   | 08 | 3,312,500 | 3,312,500 | 287,083 | 1,435,417 | 2,650,000 | 26,500,000 |
   Buttons: "Get Your Membership", "Download Payment Plan".
5. Closing lifestyle gallery placeholder (lake + mountains + farmhouse).

=== /club ===
1. Hero: "Lakeshore Club Membership", overline "An Invitation to the Extraordinary".
2. FOUR luxury tier cards (Platinum most premium — gold border, subtle shimmer): Bronze (Special), Silver (02 Kanal), Gold (04 Kanal), Platinum (08 Kanal). Note: "Residents gain membership for PKR 10 lakh. Farmhouse owners get 50% off + free 2-hour guided boating + 50% off Resort stays."
3. "Expand Your World" reciprocal clubs: Elite Club (High Mountain Point, near Islamabad) & Downtown Club (near Eighteen & Top City) at 50% off; 10 Reciprocal National Clubs; 30+ International Clubs across UAE, Maldives, Thailand, Malaysia, Indonesia, Qatar, Azerbaijan, Uzbekistan — render international reach as an elegant world-map motif or country list with gold pins.
4. Club amenities highlight grid linking to /features.
5. CTA "Get Your Membership".
```

---

## PROMPT B — Supporting pages (Features · Location · Payment Plan · Forms)

```
Read design-system/MASTER.md and follow it. Using 21st.dev Magic MCP, build /features, /location, /payment-plan, and the lead-capture pages (/booking, /contact, /career). Keep the luxury system consistent: cream + teal sections, gold accents, thin-line Lucide icons (no emoji), slow staggered reveals, generous whitespace.

=== /features === "Features & Facilities — an extravagant lifestyle, world-class amenities."
Alternating full-width parallax feature rows for the hero amenities (Lake Argyle replica, Floating Resort, Hot Air Ballooning [first in Pakistan], Cinepax), then a bento/masonry grid for the rest, grouped:
- CITY: Lake Argyle, Education Sector, Hospital, Club House/Conference Room, Marquee/Event Space, 5G Smart City.
- ADVENTURE & WATER: Boating, Floating Resort, Boat Dine-In, Cruise Boat, Water Park, Sky Diving/Parasailing, Hot Air Ballooning, Sky Walk, Archery, Shooting Range, Horse Riding.
- LEISURE & WELLNESS: Spa (Steam/Sauna/Jacuzzi), Gym, Mini Golf, Hiking Trails, Cinepax, Resorts, Wildlife Preservation.
Each card: thin-line icon + title + one-line description; hover = slow image zoom. Mobile single column.

=== /location === "Located at Khanpur Dam", overline "FIND US".
- Map area: Google Maps iframe slot in a teal frame + stylized location-map image slot.
- DISTANCES cards: 2.5 km from Mabali Island · 15 min from Islamabad D-12 · 20 km from Faisal Town, Wah Cantt · 04 km from Rajdani · 13 km from Multi Garden B-12.
- "How is Lakeshore City Unique?" grid: Both Waterfront & Hill View · Near Major Cities · PKR 10k Redemption Voucher · Cruise Boat experience · Surrounded by minority heritage sites.
- NEARBY HERITAGE editorial list: Buddhist (Jaulian Monastery, Dharmarajika Stupa, Mohra Moradu Stupa, Bhamala Stupa), Sikh (Gurdwara Panja Sahib), Hindu (Katas Raj Temples).

=== /payment-plan === "Flexible Luxury — Payment Plans", headline "Zero Down Payment. Start from PKR 25,000/month."
- shadcn Tabs switching: Residencia (Residential) / Residencia (Commercial) / Farm Houses — each tab reuses the SAME premium table component from Prompt A with the same numbers.
- Zero-charges reassurance row (No Down Payment, No Booking, No Confirmation, No Balloting, No Possession, No Half-Yearly).
- PDF download buttons + "Lakeshore Merging Policy" link. CTA "Talk to a Sales Advisor".

=== Lead-capture (shadcn forms + react-hook-form + zod, inline validation, success states, gold focus rings) ===
- /booking — tabs: CLIENT BOOKING (name, email, phone, project [Residencia/Farms/Club], plot size, message) and SALES PARTNER REGISTRATION (name, CNIC, city, experience, contact).
- /contact — contact form (name, email, phone, interest, message) + contact block (1st Floor Yasin Plaza, Blue Area, Islamabad · contact@lakeshorecity.com · +92 335 7775253) + styled map.
- /career — intro about joining Al Sadat Group, open-roles accordion placeholder, application form (name, email, phone, position, CV upload, message).
Submit buttons = gold with slow hover fill; accessible labels and error states throughout.
```

---

## PROMPT C — Final polish + QA (motion · performance · SEO · a11y · review)

```
Read design-system/MASTER.md. Do a final luxury polish pass across the WHOLE site (no new pages), then run a senior design-review QA and fix every issue you find.

POLISH & MOTION:
- Consistent fade-and-rise reveal on every section (Framer Motion, staggered, slow 300–500ms). Gate ALL motion behind prefers-reduced-motion.
- Subtle desktop custom cursor or thin gold link-underline animation; tasteful image hover zooms everywhere; elegant first-load page loader with the Lakeshore wordmark.
- Consistent vertical rhythm and section spacing site-wide. Replace any emoji/clip-art with thin-line Lucide icons. cursor-pointer on every clickable element; visible gold focus rings.

PERFORMANCE:
- next/image for all imagery, lazy-load below the fold, correct sizes, poster images for video. Subset/optimize fonts.

SEO & META:
- Per-page metadata echoing the current site (e.g. "Lakeshore City — Pakistan's Most Premium Lakeside Marvel"), Open Graph images, JSON-LD (RealEstateAgent/Place), sitemap.xml, robots.txt.

ACCESSIBILITY:
- WCAG AA contrast (watch gold-on-cream), alt text on all images, semantic landmarks, skip-to-content link, full keyboard nav.

QA AUDIT — review the full site as a luxury-brand design reviewer, list findings by severity, then apply fixes:
1. Brand consistency: teal/gold/cream system, serif+sans pairing, consistent spacing everywhere; no off-palette colors, SaaS gradients, or neon.
2. Luxury feel: whitespace, cinematic imagery, refined slow motion, premium tables (not plain HTML), clear type hierarchy.
3. Responsive at 375 / 768 / 1024 / 1440 px — especially payment tables (cards on mobile) and the navbar overlay.
4. Content accuracy: all prices, plot sizes, distances, NOC 145-50 / 16,000 kanals, and contact details (1st Floor Yasin Plaza, Blue Area, Islamabad · contact@lakeshorecity.com · +92 335 7775253) match spec.
5. Lighthouse: flag anything below 90 on Performance/Accessibility/Best-Practices/SEO and fix.
Finally, run through the ui-ux-pro-max pre-delivery checklist and resolve every item.
```
