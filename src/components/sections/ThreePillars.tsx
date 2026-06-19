'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { EASE_GOLD } from '@/lib/animations'
// ─── Data ─────────────────────────────────────────────────────────────────────
// `imageRight: true`  → image right column, text left  (flex-row-reverse on lg)
// `imageRight: false` → image left column, text right  (flex-row on lg)
const PILLARS = [
  {
    id: 'residencia',
    overline: 'Lakeshore Residencia',
    number: '01',
    title: 'Homes that hold\nyour dreams',
    body: 'Step into a life where your dreams find a home without the burden of down payments.',
    href: '/residencia',
    imageRight: true,
    bg: 'linear-gradient(140deg, #061e1b 0%, #0B3B36 38%, #0F4D45 72%, #0D4540 100%)',
    shimmerColor: 'rgba(201,166,90,0.1)',
    photo: '',
  },
  {
    id: 'farms',
    overline: 'Lakeshore Farms',
    number: '02',
    title: 'Paradise found\nin every acre',
    body: 'Find your slice of paradise, where the idyllic lake meets the serene mountains.',
    href: '/farms',
    imageRight: false,
    bg: 'linear-gradient(155deg, #071a17 0%, #0B3B36 42%, #0a2e2a 78%, #061e1b 100%)',
    shimmerColor: 'rgba(201,166,90,0.07)',
    photo: '',
  },
  {
    id: 'club',
    overline: 'Lakeshore Club',
    number: '03',
    title: 'Closeness\nbecoming happiness',
    body: 'Designs that enhance feelings of closeness, and hopefully, happiness.',
    href: '/club',
    imageRight: true,
    bg: 'linear-gradient(140deg, #0B3B36 0%, #0F4D45 45%, #050f0e 80%, #0B3B36 100%)',
    shimmerColor: 'rgba(201,166,90,0.09)',
    photo: '',
  },
] as const

// ─── Pillar card ──────────────────────────────────────────────────────────────
function PillarCard({
  pillar,
  index,
  reduced,
}: {
  pillar: (typeof PILLARS)[number]
  index: number
  reduced: boolean
}) {
  // HTML order: [image][text]. Reversing flex puts text first on desktop.
  const flexClass = pillar.imageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'

  // Image-to-text blend — gradient on the edge facing the text panel
  const blendGradient = pillar.imageRight
    ? 'linear-gradient(to left, rgba(11,59,54,0.88) 0%, rgba(11,59,54,0.12) 38%, transparent 60%)'
    : 'linear-gradient(to right, rgba(11,59,54,0.88) 0%, rgba(11,59,54,0.12) 38%, transparent 60%)'

  // Depth shadow inside text panel pointing toward image
  const panelShadow = pillar.imageRight
    ? 'linear-gradient(to right, rgba(6,30,27,0.5) 0%, transparent 55%)'
    : 'linear-gradient(to left, rgba(6,30,27,0.5) 0%, transparent 55%)'

  return (
    <motion.article
      className={`group flex flex-col ${flexClass}`}
      style={{ minHeight: '72vh' }}
      initial={reduced ? false : { opacity: 0, y: 52 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 1.05,
        ease: EASE_GOLD,
        delay: index * 0.06,
      }}
    >
      {/* ── Image panel ─────────────────────────────────────── */}
      <div
        className="relative overflow-hidden lg:w-[58%] flex-shrink-0"
        style={{ minHeight: '46vh' }}
      >
        <div
          className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          style={{
            background: pillar.bg,
            backgroundImage: pillar.photo ? `url(${pillar.photo})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark wash for photo readability */}
          {pillar.photo && (
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(6,30,27,0.42)' }}
            />
          )}
          {/* Centred gold radial shimmer */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(ellipse 72% 58% at 52% 42%, ${pillar.shimmerColor} 0%, transparent 68%)`,
            }}
          />
          {/* Horizontal water-ripple texture */}
          <div
            className="absolute bottom-0 left-0 right-0 h-2/5 opacity-[0.038]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(180deg, transparent 0px, transparent 14px, rgba(201,166,90,0.85) 14px, rgba(201,166,90,0.85) 15px)',
            }}
          />
          {/* Vignette corners */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at center, transparent 50%, rgba(6,30,27,0.45) 100%)',
            }}
          />
        </div>

        {/* Edge blend toward text panel */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{ background: blendGradient }}
        />

        {/* Large ghost issue number */}
        <span
          className="absolute z-10 select-none pointer-events-none"
          style={{
            bottom: '1.25rem',
            right: pillar.imageRight ? 'auto' : '1.75rem',
            left: pillar.imageRight ? '1.75rem' : 'auto',
            fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
            fontSize: 'clamp(6rem, 15vw, 12rem)',
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: 'rgba(201,166,90,0.09)',
          }}
          aria-hidden="true"
        >
          {pillar.number}
        </span>
      </div>

      {/* ── Text panel ──────────────────────────────────────── */}
      <div
        className="relative flex items-center lg:w-[42%] flex-shrink-0"
        style={{ backgroundColor: '#0B3B36', minHeight: '46vh' }}
      >
        {/* Inner depth shadow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: panelShadow }}
        />

        <div className="relative z-10 w-full px-10 py-14 lg:px-14 lg:py-16 max-w-[520px]">
          {/* Overline */}
          <p
            style={{
              fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
              fontSize: '0.6rem',
              fontWeight: 500,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#C9A65A',
              marginBottom: '0.85rem',
            }}
          >
            {pillar.overline}
          </p>

          {/* Gold hairline */}
          <div
            style={{
              width: '2.75rem',
              height: '1px',
              backgroundColor: '#C9A65A',
              opacity: 0.55,
              marginBottom: '1.5rem',
            }}
          />

          {/* Headline — rises 4px on hover */}
          <h2
            className="transition-transform duration-500 ease-out group-hover:-translate-y-1"
            style={{
              fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
              fontSize: 'clamp(2.4rem, 4.2vw, 4.2rem)',
              fontWeight: 300,
              lineHeight: 1.07,
              letterSpacing: '-0.015em',
              color: '#F6F1E7',
              marginBottom: '1.25rem',
              whiteSpace: 'pre-line',
            }}
          >
            {pillar.title}
          </h2>

          {/* Body — lags 75ms behind headline */}
          <p
            className="transition-transform duration-500 ease-out delay-75 group-hover:-translate-y-1"
            style={{
              fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
              fontSize: '0.82rem',
              fontWeight: 300,
              lineHeight: 1.92,
              color: 'rgba(246,241,231,0.6)',
              maxWidth: '34ch',
              marginBottom: '2.25rem',
            }}
          >
            {pillar.body}
          </p>

          {/* "Explore →" link */}
          <Link
            href={pillar.href}
            className="group/cta inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm"
            style={{ textDecoration: 'none' }}
          >
            <span
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.6rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C9A65A',
              }}
            >
              Explore
            </span>
            {/* Animated rule + arrowhead */}
            <span className="flex items-center gap-1.5" style={{ color: '#C9A65A' }}>
              <span
                className="inline-block h-px bg-[#C9A65A] transition-all duration-500 ease-out group-hover/cta:w-10"
                style={{ width: '1.75rem' }}
              />
              <ArrowRight
                size={12}
                strokeWidth={1.5}
                className="transition-transform duration-400 ease-out group-hover/cta:translate-x-1.5"
              />
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function ThreePillars() {
  const reduced = useReducedMotion() ?? false

  return (
    <section aria-label="Our three offerings">
      {/* Section intro — cream background */}
      <div style={{ backgroundColor: '#F6F1E7', paddingTop: '5.5rem', paddingBottom: '4.5rem' }}>
        <motion.div
          className="max-w-[1440px] mx-auto px-6 xl:px-10"
          initial={reduced ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE_GOLD }}
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
            What We Offer
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
            Three ways to live<br />at the water&apos;s edge
          </h2>
          <div
            style={{
              width: '3rem',
              height: '1px',
              backgroundColor: '#C9A65A',
              opacity: 0.5,
            }}
          />
        </motion.div>
      </div>

      {/* Gold hairline between intro and pillars */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, #F6F1E7 0%, rgba(201,166,90,0.35) 30%, rgba(201,166,90,0.35) 70%, #0B3B36 100%)' }} />

      {/* Pillar cards */}
      <div>
        {PILLARS.map((pillar, index) => (
          <PillarCard
            key={pillar.id}
            pillar={pillar}
            index={index}
            reduced={reduced}
          />
        ))}
      </div>
    </section>
  )
}
