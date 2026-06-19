'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// ─── Slide data ──────────────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 'city',
    overline: "IT'S LAKE O'CLOCK",
    headline: "Pakistan's Most\nPremium Lakeside\nMarvel",
    subline:
      'Lakeshore City brings you Lakeshore Residencia, Lakeshore Farmhouses and Lakeshore Club. Bask in the serenity of Lakeshore.',
    cta: { label: 'Explore Now', href: '/about' },
    ctaSecondary: { label: 'Register Now', href: '/booking' },
    video: '',
    poster: '',
    gradient: 'from-[#061e1b] via-[#0B3B36] to-[#0a2e2a]',
  },
  {
    id: 'residencia',
    overline: 'Lakeshore Residencia',
    headline: "Private Residences\nat the Water's\nEdge",
    subline:
      'Elegantly appointed apartments and villas overlooking the still waters of Khanpur — where every morning begins with the lake.',
    cta: { label: 'View Residences', href: '/residencia' },
    ctaSecondary: { label: 'Floor Plans', href: '/residencia#plans' },
    video: '',
    poster: '',
    gradient: 'from-[#081f1c] via-[#0D4540] to-[#092824]',
  },
  {
    id: 'farms',
    overline: 'Lakeshore Farmhouses',
    headline: "Farm Estates\nAmid Nature's\nSplendour",
    subline:
      'Private farmhouse plots set amid lush landscape — space, silence, and a connection to the land that only Khanpur can offer.',
    cta: { label: 'Discover Farms', href: '/farms' },
    ctaSecondary: { label: 'Enquire Now', href: '/contact' },
    video: '',
    poster: '',
    gradient: 'from-[#071a17] via-[#0B3B36] to-[#0c3530]',
  },
  {
    id: 'club',
    overline: 'Lakeshore Club',
    headline: "A Private World\nAll Your\nOwn",
    subline:
      'The Lakeshore Club — a members-only sanctuary of wellness, gastronomy, and recreation, set against an uninterrupted lakeside horizon.',
    cta: { label: 'Enter the Club', href: '/club' },
    ctaSecondary: { label: 'Membership', href: '/booking' },
    video: '',
    poster: '',
    gradient: 'from-[#050f0e] via-[#0a2e2a] to-[#0B3B36]',
  },
] as const

// ─── Animation variants ───────────────────────────────────────────────────────
const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const textChild = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
  },
}

const bgVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 1.6, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
}

// ─── Scroll cue ──────────────────────────────────────────────────────────────
function ScrollCue({ reduced }: { reduced: boolean }) {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
      <span
        style={{
          fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          color: 'rgba(201,166,90,0.7)',
          textTransform: 'uppercase',
        }}
      >
        Scroll
      </span>
      <motion.div
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={18} color="rgba(201,166,90,0.7)" strokeWidth={1.5} />
      </motion.div>
    </div>
  )
}

// ─── Dot indicators ───────────────────────────────────────────────────────────
function Dots({
  total,
  active,
  onSelect,
}: {
  total: number
  active: number
  onSelect: (i: number) => void
}) {
  return (
    <div className="absolute bottom-10 right-8 md:right-12 flex gap-3 z-20 items-center">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onSelect(i)}
          className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-full"
        >
          <motion.div
            animate={{
              width: i === active ? 28 : 6,
              backgroundColor: i === active ? '#C9A65A' : 'rgba(201,166,90,0.35)',
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ height: 2, borderRadius: 2 }}
          />
        </button>
      ))}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const reduced = useReducedMotion() ?? false
  const containerRef = useRef<HTMLDivElement>(null)

  // Parallax — only when motion is allowed
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 700], [0, reduced ? 0 : 160])

  // Auto-advance every 7 s
  const advance = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((c) => (c + 1) % SLIDES.length)
  }, [isAnimating])

  useEffect(() => {
    const timer = setInterval(advance, 7000)
    return () => clearInterval(timer)
  }, [advance])

  const goTo = (i: number) => {
    if (i === current || isAnimating) return
    setIsAnimating(true)
    setCurrent(i)
  }

  const slide = SLIDES[current]

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
      aria-label="Lakeshore City hero"
    >
      {/* ── Background layer (crossfade) ──────────────────────────── */}
      <AnimatePresence
        initial={false}
        onExitComplete={() => setIsAnimating(false)}
      >
        <motion.div
          key={slide.id}
          className="absolute inset-0 z-0"
          variants={reduced ? {} : bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {/* Parallax wrapper */}
          <motion.div
            className="absolute inset-[-10%]"
            style={{ y: reduced ? 0 : parallaxY }}
          >
            {/* Video (drop your drone footage here) */}
            {slide.video ? (
              <video
                key={slide.video}
                autoPlay
                muted
                loop
                playsInline
                poster={slide.poster || undefined}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            ) : slide.poster ? (
              /* Static poster image fallback */
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={slide.poster}
                alt=""
                role="presentation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              /* CSS gradient placeholder — replace with real media */
              <div
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
              >
                {/* Subtle texture overlay to suggest depth */}
                <div className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'radial-gradient(ellipse 80% 60% at 50% 40%, #C9A65A 0%, transparent 70%)',
                  }}
                />
                {/* Water shimmer lines */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(180deg, transparent 0px, transparent 14px, rgba(201,166,90,0.6) 14px, rgba(201,166,90,0.6) 15px)',
                  }}
                />
              </div>
            )}
          </motion.div>

          {/* Cinematic gradient overlay — legibility + mood */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(to bottom, rgba(11,59,54,0.25) 0%, rgba(11,59,54,0.55) 40%, rgba(6,30,27,0.82) 80%, rgba(6,30,27,0.95) 100%)',
            }}
          />
          {/* Left vignette */}
          <div
            className="absolute inset-0 z-10 hidden md:block"
            style={{
              background:
                'linear-gradient(to right, rgba(6,30,27,0.6) 0%, transparent 60%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Content layer ────────────────────────────────────────── */}
      <div className="relative z-20 flex flex-col justify-center h-full pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto w-full px-6 xl:px-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`text-${slide.id}`}
              variants={reduced ? {} : textContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.35 } }}
              className="max-w-3xl"
            >
              {/* Overline */}
              <motion.p
                variants={reduced ? {} : textChild}
                style={{
                  fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C9A65A',
                  marginBottom: '1.25rem',
                }}
              >
                {slide.overline}
              </motion.p>

              {/* Gold hairline */}
              <motion.div
                variants={reduced ? {} : textChild}
                style={{
                  width: '3rem',
                  height: '1px',
                  backgroundColor: '#C9A65A',
                  marginBottom: '1.5rem',
                  opacity: 0.7,
                }}
              />

              {/* Headline */}
              <motion.h1
                variants={reduced ? {} : textChild}
                style={{
                  fontFamily:
                    "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  marginBottom: '1.75rem',
                  whiteSpace: 'pre-line',
                }}
              >
                {slide.headline}
              </motion.h1>

              {/* Subline */}
              <motion.p
                variants={reduced ? {} : textChild}
                style={{
                  fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: 'rgba(246,241,231,0.72)',
                  maxWidth: '44ch',
                  marginBottom: '2.5rem',
                }}
              >
                {slide.subline}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={reduced ? {} : textChild}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href={slide.cta.href}
                  className="group inline-flex items-center justify-center px-9 py-3.5 text-[0.75rem] font-medium tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A]"
                  style={{
                    border: '1px solid #C9A65A',
                    color: '#C9A65A',
                    letterSpacing: '0.18em',
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#C9A65A'
                    e.currentTarget.style.color = '#1C1C1C'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#C9A65A'
                  }}
                >
                  {slide.cta.label}
                </Link>

                <Link
                  href={slide.ctaSecondary.href}
                  className="inline-flex items-center justify-center px-9 py-3.5 text-[0.75rem] font-medium tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  style={{
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: 'rgba(255,255,255,0.85)',
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'
                    e.currentTarget.style.color = '#ffffff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
                  }}
                >
                  {slide.ctaSecondary.label}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Scroll cue ───────────────────────────────────────────── */}
      <ScrollCue reduced={reduced} />

      {/* ── Slide indicators ─────────────────────────────────────── */}
      <Dots total={SLIDES.length} active={current} onSelect={goTo} />

      {/* ── Progress bar (thin gold line, auto-advance timer) ─────── */}
      {!reduced && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-20">
          <motion.div
            key={`progress-${current}`}
            className="h-full bg-[#C9A65A]/60"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 7, ease: 'linear' }}
          />
        </div>
      )}
    </section>
  )
}
