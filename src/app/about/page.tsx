'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { EASE_GOLD } from '@/lib/animations'

// ─── Data ─────────────────────────────────────────────────────────────────────
const CHAIRMAN_TITLES = [
  'Chairman, Lakeshore City',
  'Chairman, Seventeen Villas',
  'Chairman, Al Sadat Homes',
  'Chairman, Youth Excellence Solidarity (YES) Pakistan',
  'Chairman, Tourism for Interfaith Peace (TIP)',
  'Chairman, Hospitality Committee, ICCI',
]

const CHAIRMAN_QUOTE =
  'To me, leadership is about building platforms that create opportunity and progress for people. Through projects like Lakeshore City, my vision is to use real estate and tourism as engines of economic growth — not just for investors, but for communities, for the nation, and for generations yet to come. We are not simply building homes; we are creating a way of life that Pakistan has always deserved.'

const TIMELINE = [
  {
    year: '1975',
    title: 'Founded in Karachi',
    body: "Al Sadat Group established in Karachi, pioneering Pakistan's organised timber trade from the ground up.",
    isCurrent: false,
  },
  {
    year: '1980s',
    title: 'Timber Wholesale Network',
    body: 'Expanded a timber wholesale network across all major Pakistani cities, becoming a trusted national supplier.',
    isCurrent: false,
  },
  {
    year: '2000s',
    title: 'Global Timber Imports',
    body: 'Transitioned into international timber imports, partnering with suppliers across Europe, Africa, and Southeast Asia.',
    isCurrent: false,
  },
  {
    year: '2015',
    title: 'Al Sadat Associates',
    body: "Established Al Sadat Associates — the Group's formal entry into real-estate consultancy and project marketing.",
    isCurrent: false,
  },
  {
    year: '2018',
    title: 'Al Sadat Marketing',
    body: 'Launched Al Sadat Marketing, scaling property advisory services to a national client base.',
    isCurrent: false,
  },
  {
    year: '2021',
    title: 'Blue Area, Islamabad',
    body: "Opened a flagship office in Blue Area, Islamabad — establishing the Group at the heart of Pakistan's capital.",
    isCurrent: false,
  },
  {
    year: '2023',
    title: 'Lakeshore City Founded',
    body: "Lakeshore City conceptualised and launched at Khanpur Dam — Pakistan's most ambitious lakeside development.",
    isCurrent: false,
  },
  {
    year: 'Today',
    title: 'A Global Footprint',
    body: 'Offices across Pakistan, Dubai & England. Multiple luxury developments under way — with more to come.',
    isCurrent: true,
  },
]

const PARTNERS = [
  'Islamabad Chamber of Commerce',
  'Rawalpindi Chamber',
  'PowerChina',
  'PTDC',
  'KPCTI',
  'The Tourist Universe',
]

// ─── Reveal wrapper ──────────────────────────────────────────────────────────
function Reveal({
  children,
  delay = 0,
  reduced,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  reduced: boolean
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.95, ease: EASE_GOLD, delay }}
    >
      {children}
    </motion.div>
  )
}

// ─── Hairline component ───────────────────────────────────────────────────────
function Hairline({ opacity = 0.5 }: { opacity?: number }) {
  return (
    <div
      style={{
        width: '3rem',
        height: '1px',
        backgroundColor: '#C9A65A',
        opacity,
        marginBottom: '1.25rem',
      }}
    />
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const reduced = useReducedMotion() ?? false

  return (
    <main>

      {/* ══════════════════════════════════════════════
          1. PAGE HERO
      ══════════════════════════════════════════════ */}
      <section
        className="relative flex items-end lg:items-center"
        style={{
          minHeight: '65vh',
          backgroundColor: '#0B3B36',
          paddingTop: '9rem',
          paddingBottom: '5rem',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 55% at 60% 45%, rgba(201,166,90,0.06) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(180deg, transparent 0px, transparent 18px, rgba(201,166,90,0.7) 18px, rgba(201,166,90,0.7) 19px)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal reduced={reduced}>
            <p
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.6rem',
                fontWeight: 500,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: '#C9A65A',
                marginBottom: '1rem',
              }}
            >
              Our Story
            </p>
            <Hairline />
            <h1
              style={{
                fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)',
                fontWeight: 300,
                lineHeight: 1.06,
                letterSpacing: '-0.015em',
                color: '#F6F1E7',
                maxWidth: '18ch',
              }}
            >
              Discover a Luxurious Lifestyle at Lakeshore City
            </h1>
          </Reveal>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '1px',
            background:
              'linear-gradient(to right, transparent, rgba(201,166,90,0.35) 20%, rgba(201,166,90,0.35) 80%, transparent)',
          }}
        />
      </section>

      {/* ══════════════════════════════════════════════
          2. CHAIRMAN'S MESSAGE
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#F6F1E7', padding: '6rem 0 7rem' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* ── Portrait panel ────────────────────────────────────────────── */}
            <Reveal reduced={reduced} delay={0.05} className="lg:w-2/5 flex-shrink-0">
              {/* Portrait placeholder — replace outer div with next/image when photo is ready */}
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '3/4',
                  maxWidth: '400px',
                  background: 'linear-gradient(145deg, #061e1b 0%, #0B3B36 45%, #0F4D45 80%, #0a2e2a 100%)',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'radial-gradient(ellipse 65% 60% at 45% 38%, rgba(201,166,90,0.08) 0%, transparent 70%)',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    style={{
                      fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                      fontSize: '5rem',
                      fontWeight: 300,
                      color: 'rgba(201,166,90,0.18)',
                      lineHeight: 1,
                      letterSpacing: '0.1em',
                    }}
                  >
                    SSH
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                      fontSize: '0.48rem',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      color: 'rgba(201,166,90,0.15)',
                      marginTop: '0.5rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    Portrait Placeholder
                  </span>
                </div>
                <div
                  className="absolute top-0 left-0 right-0"
                  style={{ height: '2px', backgroundColor: '#C9A65A', opacity: 0.3 }}
                />
              </div>

              {/* Name & titles */}
              <div className="mt-6 max-w-xs">
                <p
                  style={{
                    fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                    fontSize: '1.4rem',
                    fontWeight: 400,
                    color: '#1C1C1C',
                    marginBottom: '0.75rem',
                  }}
                >
                  Syed Sadat Hussain Shah
                </p>
                <div
                  style={{
                    width: '2.5rem',
                    height: '1px',
                    backgroundColor: '#C9A65A',
                    opacity: 0.5,
                    marginBottom: '0.85rem',
                  }}
                />
                <ul className="space-y-1.5">
                  {CHAIRMAN_TITLES.map((title) => (
                    <li
                      key={title}
                      style={{
                        fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                        fontSize: '0.66rem',
                        fontWeight: 300,
                        color: 'rgba(11,59,54,0.58)',
                        lineHeight: 1.65,
                      }}
                    >
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* ── Pull-quote panel ──────────────────────────────────────────── */}
            <Reveal reduced={reduced} delay={0.15} className="lg:w-3/5 flex flex-col justify-center">
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
                Chairman&apos;s Message
              </p>
              <Hairline />

              <div className="relative" style={{ marginBottom: '2.5rem' }}>
                {/* Large decorative quotation mark */}
                <span
                  aria-hidden="true"
                  className="absolute select-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                    fontSize: '10rem',
                    fontWeight: 300,
                    color: '#C9A65A',
                    opacity: 0.1,
                    lineHeight: 1,
                    top: '-3rem',
                    left: '-1.25rem',
                  }}
                >
                  &ldquo;
                </span>
                <blockquote
                  style={{
                    fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.85rem)',
                    fontWeight: 300,
                    lineHeight: 1.62,
                    letterSpacing: '-0.005em',
                    color: '#1C1C1C',
                    fontStyle: 'italic',
                    paddingLeft: '0.25rem',
                  }}
                >
                  {CHAIRMAN_QUOTE}
                </blockquote>
              </div>

              {/* Attribution */}
              <div style={{ paddingLeft: '0.25rem' }}>
                <div
                  style={{
                    width: '2rem',
                    height: '1px',
                    backgroundColor: '#C9A65A',
                    opacity: 0.45,
                    marginBottom: '0.75rem',
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                    fontSize: '0.62rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(11,59,54,0.45)',
                  }}
                >
                  Syed Sadat Hussain Shah — Chairman, Lakeshore City
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. TIMELINE
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#0B3B36', padding: '6rem 0 7rem' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <Reveal reduced={reduced} className="mb-16 lg:mb-20">
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
              Developers &amp; Owners
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.12,
                color: '#F6F1E7',
                marginBottom: '1.25rem',
              }}
            >
              Al Sadat Group —{' '}
              <span style={{ color: 'rgba(201,166,90,0.7)', fontStyle: 'italic' }}>
                five decades of vision
              </span>
            </h2>
            <div style={{ width: '3rem', height: '1px', backgroundColor: '#C9A65A', opacity: 0.5 }} />
          </Reveal>

          {/* Vertical timeline */}
          <div className="relative max-w-3xl">
            {/* Track line */}
            <div
              className="absolute top-2 bottom-2"
              style={{ left: '4.25rem', width: '1px', background: 'rgba(201,166,90,0.15)' }}
              aria-hidden="true"
            />
            {/* Animated fill */}
            <motion.div
              className="absolute top-2"
              style={{
                left: '4.25rem',
                width: '1px',
                background: 'linear-gradient(to bottom, rgba(201,166,90,0.5), rgba(201,166,90,0.2))',
                transformOrigin: 'top',
              }}
              initial={reduced ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 2.0, ease: 'easeOut', delay: 0.3 }}
              aria-hidden="true"
            />

            <div>
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="flex gap-8 relative"
                  style={{ paddingBottom: i < TIMELINE.length - 1 ? '2.75rem' : 0 }}
                  initial={reduced ? false : { opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.85,
                    ease: EASE_GOLD,
                    delay: 0.05 + i * 0.06,
                  }}
                >
                  {/* Year */}
                  <div
                    className="flex-shrink-0 text-right pt-0.5"
                    style={{ width: '3.75rem' }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: item.isCurrent ? '#C9A65A' : 'rgba(201,166,90,0.45)',
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Node */}
                  <div className="relative flex-shrink-0" style={{ width: '1rem', paddingTop: '0.3rem' }}>
                    <div
                      style={{
                        width: item.isCurrent ? '10px' : '6px',
                        height: item.isCurrent ? '10px' : '6px',
                        borderRadius: '50%',
                        backgroundColor: item.isCurrent ? '#C9A65A' : 'rgba(201,166,90,0.38)',
                        boxShadow: item.isCurrent ? '0 0 16px rgba(201,166,90,0.45)' : 'none',
                        marginLeft: '3px',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: '0.1rem' }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                        fontSize: '1.3rem',
                        fontWeight: 400,
                        lineHeight: 1.2,
                        color: item.isCurrent ? '#C9A65A' : '#F6F1E7',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                        fontSize: '0.76rem',
                        fontWeight: 300,
                        lineHeight: 1.85,
                        color: 'rgba(246,241,231,0.42)',
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. VISION & MISSION
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#F6F1E7', padding: '6rem 0 7rem' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal reduced={reduced} className="mb-16">
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
              Our Purpose
            </p>
            <div style={{ width: '3rem', height: '1px', backgroundColor: '#C9A65A', opacity: 0.5 }} />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">

            {/* Vision */}
            <Reveal reduced={reduced} delay={0.06}>
              <div
                className="relative overflow-hidden"
                style={{
                  backgroundColor: '#0B3B36',
                  padding: '3.25rem 3rem 3.5rem',
                  minHeight: '360px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0"
                  style={{ height: '2px', background: 'linear-gradient(to right, #C9A65A, rgba(201,166,90,0.25))' }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(ellipse 70% 60% at 15% 85%, rgba(201,166,90,0.05) 0%, transparent 65%)',
                  }}
                />
                <div className="relative z-10">
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
                    Vision
                  </p>
                  <div style={{ width: '2.5rem', height: '1px', backgroundColor: '#C9A65A', opacity: 0.45, marginBottom: '1.75rem' }} />
                  <p
                    style={{
                      fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                      fontSize: 'clamp(1.35rem, 2.5vw, 2rem)',
                      fontWeight: 300,
                      lineHeight: 1.55,
                      letterSpacing: '-0.005em',
                      color: '#F6F1E7',
                      fontStyle: 'italic',
                    }}
                  >
                    &ldquo;To establish Pakistan&apos;s most iconic lakeside destination — where pristine nature, world-class luxury, and generational investment opportunity converge.&rdquo;
                  </p>
                </div>
                <span
                  className="absolute bottom-4 right-6 select-none pointer-events-none"
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                    fontSize: '9rem',
                    fontWeight: 300,
                    lineHeight: 1,
                    color: 'rgba(201,166,90,0.06)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  V
                </span>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal reduced={reduced} delay={0.14}>
              <div
                className="relative overflow-hidden"
                style={{
                  backgroundColor: '#EDE7D9',
                  border: '1px solid rgba(201,166,90,0.22)',
                  padding: '3.25rem 3rem 3.5rem',
                  minHeight: '360px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0"
                  style={{ height: '2px', background: 'linear-gradient(to right, #C9A65A, rgba(201,166,90,0.2))' }}
                />
                <div className="relative z-10">
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
                    Mission
                  </p>
                  <div style={{ width: '2.5rem', height: '1px', backgroundColor: '#C9A65A', opacity: 0.45, marginBottom: '1.75rem' }} />
                  <p
                    style={{
                      fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                      fontSize: 'clamp(1.35rem, 2.5vw, 2rem)',
                      fontWeight: 300,
                      lineHeight: 1.55,
                      letterSpacing: '-0.005em',
                      color: '#1C1C1C',
                      fontStyle: 'italic',
                    }}
                  >
                    &ldquo;To develop world-class real-estate and hospitality infrastructure through integrity, innovation, and an unwavering commitment to the communities and the nation we serve.&rdquo;
                  </p>
                </div>
                <span
                  className="absolute bottom-4 right-6 select-none pointer-events-none"
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                    fontSize: '9rem',
                    fontWeight: 300,
                    lineHeight: 1,
                    color: 'rgba(11,59,54,0.06)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  M
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. ESTEEMED PARTNERS
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#0B3B36' }}>
        <div
          style={{
            height: '1px',
            background:
              'linear-gradient(to right, transparent, rgba(201,166,90,0.3) 20%, rgba(201,166,90,0.3) 80%, transparent)',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-16">
          <Reveal reduced={reduced} className="text-center mb-10">
            <p
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.55rem',
                fontWeight: 500,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'rgba(201,166,90,0.55)',
                marginBottom: '0.75rem',
              }}
            >
              Esteemed Partners &amp; Affiliates
            </p>
            <div
              className="mx-auto"
              style={{ width: '3rem', height: '1px', backgroundColor: '#C9A65A', opacity: 0.3 }}
            />
          </Reveal>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-12 lg:gap-x-20 gap-y-5"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, ease: EASE_GOLD }}
          >
            {PARTNERS.map((partner) => (
              <span
                key={partner}
                className="cursor-default select-none"
                style={{
                  fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                  fontSize: '0.64rem',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(246,241,231,0.2)',
                  transition: 'color 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#C9A65A'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(246,241,231,0.2)'
                }}
              >
                {partner}
              </span>
            ))}
          </motion.div>
        </div>

        <div
          style={{
            height: '1px',
            background:
              'linear-gradient(to right, transparent, rgba(201,166,90,0.3) 20%, rgba(201,166,90,0.3) 80%, transparent)',
          }}
        />
      </section>

    </main>
  )
}
