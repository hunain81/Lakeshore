'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Waves,
  Ship,
  Wind,
  ChevronsDown,
  Film,
  Droplets,
  Trophy,
  Wifi,
  ArrowRight,
  Anchor,
} from 'lucide-react'

// ─── Types ─────────────────────────────────────────────────────────────────────
type IconComp = React.FC<{ size?: number; strokeWidth?: number }>

interface Experience {
  id: string
  Icon: IconComp
  overline?: string
  title: string
  caption: string
  dark: boolean
  bg: string
  hero?: boolean   // the big Lake Argyle tile
  wide?: boolean   // full-width bottom row tile
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const EXPERIENCES: Experience[] = [
  // ── Row 1–2: hero (col-span-2, row-span-2) ────────────────────────────────
  {
    id: 'lake-argyle',
    Icon: Waves,
    overline: 'Centrepiece Attraction',
    title: 'Replica of Lake Argyle',
    caption: "A mirror of Australia's majestic lake — crafted here at the foot of Khanpur Dam",
    dark: true,
    bg: 'linear-gradient(150deg, #061e1b 0%, #0B3B36 38%, #0D4540 68%, #0F4D45 100%)',
    hero: true,
  },
  // ── Row 1: right two tiles ─────────────────────────────────────────────────
  {
    id: 'floating-resort',
    Icon: Anchor,
    title: 'Floating Resort & Boat Dine-In',
    caption: 'Dine on the water as the sun sets over Khanpur',
    dark: false,
    bg: '#EDE7D9',
  },
  {
    id: 'hot-air-balloon',
    Icon: Wind,
    title: 'Hot Air Ballooning',
    caption: "Pakistan's first ever — sunrise from above the lake",
    dark: true,
    bg: '#0B3B36',
  },
  // ── Row 2: right two tiles ─────────────────────────────────────────────────
  {
    id: 'skydiving',
    Icon: ChevronsDown,
    title: 'Sky Diving & Parasailing',
    caption: "Freefall over Khanpur's dramatic landscape",
    dark: false,
    bg: '#F6F1E7',
  },
  {
    id: 'cruise',
    Icon: Ship,
    title: 'Cruise Boat & Boating',
    caption: 'Glide the mirror-calm waters at dusk',
    dark: true,
    bg: '#0D4540',
  },
  // ── Row 3: four equal tiles ────────────────────────────────────────────────
  {
    id: 'cinema',
    Icon: Film,
    title: 'Cinepax Cinema',
    caption: 'Blockbusters where the night comes alive',
    dark: false,
    bg: '#EDE7D9',
  },
  {
    id: 'spa',
    Icon: Droplets,
    title: 'Spa: Steam, Sauna & Jacuzzi',
    caption: 'Restore in absolute lakeside tranquility',
    dark: true,
    bg: '#0B3B36',
  },
  {
    id: 'sports',
    Icon: Trophy,
    title: 'Mini Golf, Archery & Horse Riding',
    caption: 'The great outdoors all in one address',
    dark: false,
    bg: '#F6F1E7',
  },
  {
    id: '5g',
    Icon: Wifi,
    title: '5G Smart City',
    caption: 'Future infrastructure embedded in nature',
    dark: true,
    bg: '#0F4D45',
  },
]

// ─── Individual bento tile ─────────────────────────────────────────────────────
function BentoTile({
  exp,
  reduced,
  style,
  className = '',
}: {
  exp: Experience
  reduced: boolean
  style?: React.CSSProperties
  className?: string
}) {
  const iconColor = exp.dark ? 'rgba(201,166,90,0.75)' : '#0B3B36'
  const titleColor = exp.dark ? '#F6F1E7' : '#0B3B36'
  const captionColor = exp.dark ? 'rgba(246,241,231,0.5)' : 'rgba(11,59,54,0.5)'

  return (
    <motion.div
      className={`relative overflow-hidden group/tile ${className}`}
      style={style}
      whileHover={
        reduced
          ? {}
          : {
              y: -5,
              boxShadow: exp.dark
                ? '0 20px 56px rgba(6,30,27,0.28)'
                : '0 20px 56px rgba(11,59,54,0.12)',
            }
      }
      transition={{ duration: 0.38, ease: 'easeOut' }}
    >
      {/* Background (zooms on hover) */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tile:scale-[1.04]"
        style={{ background: exp.bg }}
      >
        {/* Gold shimmer on dark tiles */}
        {exp.dark && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 80% 65% at 50% 30%, rgba(201,166,90,0.08) 0%, transparent 70%)',
            }}
          />
        )}
        {/* Water-ripple texture for hero tile */}
        {exp.hero && (
          <div
            className="absolute bottom-0 left-0 right-0 h-2/5 opacity-[0.04]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(180deg, transparent 0px, transparent 13px, rgba(201,166,90,0.9) 13px, rgba(201,166,90,0.9) 14px)',
            }}
          />
        )}
      </div>

      {/* Gold top hairline */}
      <div
        className="absolute top-0 left-0 right-0 z-10"
        style={{ height: '1px', background: 'rgba(201,166,90,0.3)' }}
      />

      {/* Tile content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 lg:p-7">
        {/* Icon */}
        <div>
          <exp.Icon size={exp.hero ? 26 : 20} strokeWidth={1.25} style={{ color: iconColor } as React.CSSProperties} />
        </div>

        {/* Text block — rises on hover */}
        <div className="transition-transform duration-500 ease-out group-hover/tile:-translate-y-2">
          {exp.overline && (
            <p
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.52rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C9A65A',
                marginBottom: '0.45rem',
              }}
            >
              {exp.overline}
            </p>
          )}

          <h3
            style={{
              fontFamily: exp.hero
                ? "var(--font-display, 'Cormorant Garamond', Georgia, serif)"
                : "var(--font-body, 'Montserrat', sans-serif)",
              fontSize: exp.hero ? 'clamp(1.55rem, 3vw, 2.4rem)' : '0.75rem',
              fontWeight: exp.hero ? 300 : 500,
              lineHeight: 1.18,
              letterSpacing: exp.hero ? '-0.01em' : '0',
              color: titleColor,
              marginBottom: '0.4rem',
            }}
          >
            {exp.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
              fontSize: exp.hero ? '0.78rem' : '0.62rem',
              fontWeight: 300,
              lineHeight: 1.65,
              color: captionColor,
            }}
          >
            {exp.caption}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function SignatureExperiences() {
  const reduced = useReducedMotion() ?? false

  const hero = EXPERIENCES[0]           // Lake Argyle — big tile
  const row12 = EXPERIENCES.slice(1, 5) // 4 tiles filling rows 1–2 right side
  const row3 = EXPERIENCES.slice(5)     // 4 tiles in row 3

  return (
    <section style={{ backgroundColor: '#F6F1E7', padding: '6rem 0 7rem' }}>
      <div className="max-w-[1440px] mx-auto px-6 xl:px-10">

        {/* ── Section header ──────────────────────── */}
        <motion.div
          className="mb-14 lg:mb-16 max-w-2xl"
          initial={reduced ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
              fontSize: '0.6rem',
              fontWeight: 500,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#C9A65A',
              marginBottom: '1rem',
            }}
          >
            Signature Experiences
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: '#1C1C1C',
              marginBottom: '1.25rem',
            }}
          >
            Amenities that redefine<br className="hidden lg:block" /> a standard of living
          </h2>
          <div
            style={{ width: '3rem', height: '1px', backgroundColor: '#C9A65A', opacity: 0.5 }}
          />
        </motion.div>

        {/* ── Bento grid ──────────────────────────── */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          {/*
            DESKTOP LAYOUT (lg, 4 cols):
            ┌─────────────────┬──────────┬──────────┐
            │                 │  tile 1  │  tile 2  │ row 1 (260px)
            │   Lake Argyle   ├──────────┼──────────┤
            │   (col×2 row×2) │  tile 3  │  tile 4  │ row 2 (260px)
            ├────────┬────────┬──────────┬──────────┤
            │ tile 5 │ tile 6 │  tile 7  │  tile 8  │ row 3 (260px)
            └────────┴────────┴──────────┴──────────┘

            MOBILE LAYOUT (2 cols):
            Lake Argyle spans 2 cols, 1 row.
            All others: 1 col each.
          */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3.5"
            style={{ gridAutoRows: '250px' }}
          >
            {/* Hero tile */}
            <BentoTile
              exp={hero}
              reduced={reduced}
              className="col-span-2 lg:row-span-2"
            />

            {/* Right-side row 1–2 tiles (4 tiles) */}
            {row12.map((exp) => (
              <BentoTile key={exp.id} exp={exp} reduced={reduced} />
            ))}

            {/* Bottom row (4 tiles) */}
            {row3.map((exp) => (
              <BentoTile key={exp.id} exp={exp} reduced={reduced} />
            ))}
          </div>
        </motion.div>

        {/* ── Closing CTA ─────────────────────────── */}
        <motion.div
          className="mt-14 flex items-center justify-center"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
        >
          <Link
            href="/features"
            className="group inline-flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm"
            style={{ textDecoration: 'none' }}
          >
            {/* Decorative left rule */}
            <span
              className="hidden sm:block h-px bg-[#C9A65A] transition-all duration-500 ease-out group-hover:w-12"
              style={{ width: '2.5rem', opacity: 0.5 }}
            />

            <span
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#0B3B36',
                borderBottom: '1px solid rgba(11,59,54,0.22)',
                paddingBottom: '2px',
                transition: 'color 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLSpanElement
                el.style.color = '#C9A65A'
                el.style.borderColor = 'rgba(201,166,90,0.5)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLSpanElement
                el.style.color = '#0B3B36'
                el.style.borderColor = 'rgba(11,59,54,0.22)'
              }}
            >
              View All Features &amp; Facilities
            </span>

            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
              style={{ color: '#C9A65A' }}
            />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
