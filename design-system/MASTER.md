# LAKESHORE CITY — Master Design System

> Global Source of Truth. Every page inherits these rules.  
> Check `design-system/pages/[page-name].md` first; if it exists, its rules override this file.

---

## Brand Identity

| Field | Value |
|-------|-------|
| **Project** | Lakeshore City |
| **Location** | Khanpur Dam, near Islamabad, Pakistan |
| **Category** | Ultra-luxury lakeside real-estate development |
| **Mood** | Five-star resort + private members' club |
| **References** | Aman Resorts · Six Senses · Sotheby's International Realty |
| **NOT** | A property listing site. No stock-photo realtor energy. |

---

## Color Palette

### Primary Tokens (Tailwind `brand.*`)

| Token | CSS Variable | Hex | Usage |
|-------|-------------|-----|-------|
| `brand-teal-900` | `--color-teal-900` | `#0B3B36` | Darkest teal — hero backgrounds, footer |
| `brand-teal-800` | `--color-teal-800` | `#0D4540` | Section backgrounds |
| `brand-teal-700` | `--color-teal-700` | `#0F4D45` | Navbar, deep surfaces |
| `brand-gold` | `--color-gold` | `#C9A65A` | ACCENT ONLY — hairlines, overlines, hover glows, CTAs |
| `brand-gold-light` | `--color-gold-light` | `#E2C47E` | Gold hover/shimmer state |
| `brand-cream` | `--color-cream` | `#F6F1E7` | Primary background, card fills |
| `brand-cream-dark` | `--color-cream-dark` | `#EDE7D9` | Subtle section alternate |
| `brand-charcoal` | `--color-charcoal` | `#1C1C1C` | Body text, headings on light bg |
| `brand-charcoal-soft` | `--color-charcoal-soft` | `#3A3A3A` | Secondary body text |
| `brand-white` | `--color-white` | `#FFFFFF` | Overlay text on dark teal |

### Color Rules
- **Gold is accent-only.** Never use as background fill or large block.
- Teal backgrounds always pair with ivory/white text.
- Cream backgrounds pair with charcoal text.
- Gold hairline dividers: `border-[0.5px] border-brand-gold/40`
- Never use: purple, neon, bright blue, red, or high-saturation colors.

---

## Typography

### Font Stack

| Role | Family | Weights | Usage |
|------|--------|---------|-------|
| **Display / Serif** | Cormorant Garamond | 300, 400, 500, 600 | H1, H2, hero headlines, section titles |
| **Body / Sans** | Montserrat | 300, 400, 500, 600 | Body text, nav, labels, captions |

### Next.js Font Config (`src/lib/fonts.ts`)
```ts
import { Cormorant_Garamond, Montserrat } from 'next/font/google'

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})
```

### Type Scale

| Level | Size | Font | Weight | Letter-spacing | Notes |
|-------|------|------|--------|----------------|-------|
| `display-xl` | clamp(3.5rem, 8vw, 7rem) | Cormorant | 300 | -0.02em | Hero headline |
| `display-lg` | clamp(2.5rem, 5vw, 4.5rem) | Cormorant | 400 | -0.01em | Section hero |
| `h1` | clamp(2rem, 3.5vw, 3rem) | Cormorant | 400 | 0 | Page title |
| `h2` | clamp(1.5rem, 2.5vw, 2.25rem) | Cormorant | 400 | 0 | Section heading |
| `h3` | 1.25rem | Cormorant | 500 | 0 | Card heading |
| `overline` | 0.6875rem | Montserrat | 500 | 0.2em | SMALL-CAPS LABEL above headings |
| `body-lg` | 1.125rem | Montserrat | 300 | 0 | Lead paragraph |
| `body` | 1rem | Montserrat | 300 | 0 | Body copy |
| `caption` | 0.875rem | Montserrat | 400 | 0.05em | Meta, captions |

### Overline Pattern (small-caps gold label above headings)
```tsx
<p className="text-[0.6875rem] font-montserrat font-medium tracking-[0.2em] uppercase text-brand-gold mb-3">
  Our Vision
</p>
<h2 className="font-cormorant text-display-lg text-brand-charcoal">
  A New Standard of Living
</h2>
```

---

## Spacing & Layout

| Token | Value | Usage |
|-------|-------|-------|
| Section vertical padding | `py-24 lg:py-32` | Standard section spacing |
| Container | `max-w-7xl mx-auto px-6 lg:px-12` | All page content |
| Card gap | `gap-6 lg:gap-8` | Grid/flex card spacing |
| Component inner | `p-8 lg:p-12` | Cards, panels |
| Hairline divider | `border-t border-brand-gold/30 my-16` | Section separators |

**Golden rule: generous whitespace. If it feels spacious, add 20% more.**

---

## Effects & Animation

### Principles
- All animations: **slow and cinematic**, never snappy or bouncy.
- Default duration: `0.8s–1.2s` ease-out for reveals; `0.3s` for micro-interactions.
- Always wrap in `useReducedMotion` check; provide static fallback.

### Framer Motion Presets

#### Fade-Up Reveal (standard section entrance)
```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}
```

#### Stagger Children
```ts
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}
```

#### Parallax Hero (use `useScroll` + `useTransform`)
```ts
// Inside hero component
const { scrollY } = useScroll()
const y = useTransform(scrollY, [0, 600], [0, 180])
// Apply: <motion.div style={{ y }} />
```

#### Hover Zoom (image cards)
```tsx
<div className="overflow-hidden">
  <motion.img
    whileHover={{ scale: 1.04 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="w-full h-full object-cover"
  />
</div>
```

#### Reduced Motion Wrapper
```ts
import { useReducedMotion } from 'framer-motion'

export function useSafeAnimation(variants: Variants) {
  const reduce = useReducedMotion()
  return reduce ? {} : variants
}
```

### Dividers
```tsx
// Gold hairline divider
<div className="w-16 h-px bg-brand-gold mx-auto my-8" />
// or full-width subtle
<hr className="border-t border-brand-gold/25 my-16" />
```

---

## Component Patterns

### Navbar
- Transparent on hero, transitions to `bg-brand-teal-900/95 backdrop-blur-md` on scroll.
- Logo: wordmark in Cormorant + gold accent mark.
- Links: Montserrat 500, tracking-wide, 14px, white/80 → white on hover.
- CTA button: gold outline → gold fill on hover.

### Buttons
```tsx
// Primary CTA
<button className="border border-brand-gold text-brand-gold px-8 py-3 text-sm font-montserrat font-medium tracking-[0.15em] uppercase hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300">
  Enquire Now
</button>

// Ghost / secondary
<button className="border border-white/40 text-white px-8 py-3 text-sm font-montserrat font-medium tracking-[0.15em] uppercase hover:border-white hover:text-white transition-all duration-300">
  Learn More
</button>
```

### Cards
- Background: `bg-brand-cream` or `bg-white`
- No hard box shadows. Use subtle `shadow-[0_4px_32px_rgba(0,0,0,0.06)]`.
- Gold top-line accent on feature cards: `border-t-2 border-brand-gold`
- Image aspect ratio: 16:9 for landscape, 3:4 for portrait property shots.

### Section Pattern
```tsx
<section className="py-24 lg:py-32 bg-brand-cream">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <p className="overline-label">Category</p>
    <h2 className="section-heading">Heading</h2>
    <div className="w-12 h-px bg-brand-gold mt-6 mb-12" />
    {/* content */}
  </div>
</section>
```

---

## Anti-Patterns (NEVER USE)

| Forbidden | Reason |
|-----------|--------|
| Purple / violet gradients | SaaS aesthetic — wrong brand |
| Neon / electric colors | Cheap, clashes with luxury palette |
| Emoji as icons | Use Lucide React SVG icons only |
| Harsh drop shadows | `box-shadow: 0 10px 30px rgba(0,0,0,0.4)` — too heavy |
| Cramped spacing | Min 16px between elements; sections min py-20 |
| Bouncy spring animations | `stiffness: 300+` — feels app-like, not cinematic |
| Stock photo realtor aesthetic | No "family in front of house" imagery |
| Bright blue links (`#0000FF`) | Use gold or teal for interactive color |
| All-caps body text | Only overline labels use uppercase |
| Flat emoji favicon | Use custom SVG mark |

---

## Tailwind Config Tokens

```ts
// tailwind.config.ts — extend.colors
brand: {
  teal: {
    900: '#0B3B36',
    800: '#0D4540',
    700: '#0F4D45',
  },
  gold: '#C9A65A',
  'gold-light': '#E2C47E',
  cream: '#F6F1E7',
  'cream-dark': '#EDE7D9',
  charcoal: '#1C1C1C',
  'charcoal-soft': '#3A3A3A',
},
fontFamily: {
  cormorant: ['var(--font-display)', 'Georgia', 'serif'],
  montserrat: ['var(--font-body)', 'system-ui', 'sans-serif'],
},
```

---

## CSS Variables (`globals.css`)

```css
:root {
  --color-teal-900: #0B3B36;
  --color-teal-800: #0D4540;
  --color-teal-700: #0F4D45;
  --color-gold: #C9A65A;
  --color-gold-light: #E2C47E;
  --color-cream: #F6F1E7;
  --color-cream-dark: #EDE7D9;
  --color-charcoal: #1C1C1C;
  --color-charcoal-soft: #3A3A3A;
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Montserrat', system-ui, sans-serif;
}
```

---

## Routes & Page Purposes

| Route | Page | Primary Mood |
|-------|------|-------------|
| `/` | Home | Cinematic first impression, brand statement |
| `/about` | About | Story, vision, developers behind the project |
| `/residencia` | Residencia | Apartment/villa inventory, floor plans |
| `/farms` | Farms | Farmhouse plots — nature, privacy, land |
| `/club` | Club | Members' club amenities, lifestyle |
| `/features` | Features | Development features, infrastructure |
| `/location` | Location | Khanpur Dam setting, connectivity, maps |
| `/payment-plan` | Payment Plan | Flexible payment options — clean, trustworthy |
| `/booking` | Booking | Lead capture / reservation form |
| `/career` | Career | Recruitment page |
| `/contact` | Contact | Enquiry + location map |

---

## Pre-Delivery Checklist (every component)

- [ ] No emojis as icons — Lucide React SVGs only
- [ ] `cursor-pointer` on all interactive elements
- [ ] Hover states: smooth `transition-all duration-300`
- [ ] Text contrast ≥ 4.5:1 (charcoal on cream ✓, white on teal ✓)
- [ ] Focus rings visible (`focus-visible:ring-2 focus-visible:ring-brand-gold`)
- [ ] `prefers-reduced-motion` respected via `useReducedMotion()`
- [ ] Responsive: 375px · 768px · 1024px · 1440px
- [ ] No horizontal scroll on mobile
- [ ] Images: `alt` text, `priority` on hero, `lazy` on below-fold
- [ ] No harsh box-shadows
- [ ] Spacing: never less than `py-20` for sections
