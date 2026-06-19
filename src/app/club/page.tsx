'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Waves,
  Wind,
  Anchor,
  Film,
  Droplets,
  Trophy,
  ChevronsDown,
  Wifi,
  Globe,
  Star,
  MapPin,
} from 'lucide-react'

function Reveal({
  children,
  delay = 0,
  reduced,
}: {
  children: React.ReactNode
  delay?: number
  reduced: boolean
}) {
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const TIERS = [
  {
    id: 'bronze',
    name: 'Bronze',
    badge: 'Special',
    qualifier: 'Community Member',
    dark: false,
    bg: '#F6F1E7',
    border: 'rgba(201,166,90,0.2)',
    topBorder: '#C9A65A',
    textColor: '#1C1C1C',
    subColor: 'rgba(28,28,28,0.5)',
    perks: [
      'Access to Lakeshore Community',
      'Recreational facility access',
      'Member dining discounts',
      'Community events & networking',
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    badge: '02 Kanal',
    qualifier: '02 Kanal Farmhouse Owner',
    dark: true,
    bg: '#0D4540',
    border: 'rgba(201,166,90,0.2)',
    topBorder: '#C9A65A',
    textColor: '#F6F1E7',
    subColor: 'rgba(246,241,231,0.5)',
    perks: [
      'All Bronze privileges',
      'Priority event booking',
      '50% off club membership',
      'Complimentary 2-hr guided boating',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    badge: '04 Kanal',
    qualifier: '04 Kanal Farmhouse Owner',
    dark: true,
    bg: '#0B3B36',
    border: 'rgba(201,166,90,0.25)',
    topBorder: '#C9A65A',
    textColor: '#F6F1E7',
    subColor: 'rgba(246,241,231,0.5)',
    perks: [
      'All Silver privileges',
      'Spa, steam & sauna access',
      '50% off Lakeshore Resort stays',
      'Guest invitations (4/year)',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    badge: '08 Kanal',
    qualifier: '08 Kanal Farmhouse Owner',
    dark: true,
    bg: '#061e1b',
    border: 'rgba(201,166,90,0.55)',
    topBorder: '#C9A65A',
    textColor: '#F6F1E7',
    subColor: 'rgba(246,241,231,0.55)',
    platinum: true,
    perks: [
      'All Gold privileges',
      'Unlimited guided boating',
      'Private lounge & concierge',
      '30+ international reciprocal clubs',
    ],
  },
]

const AMENITIES = [
  { Icon: Waves,      title: 'Replica of Lake Argyle',         dark: true  },
  { Icon: Wind,       title: 'Hot Air Ballooning',              dark: true  },
  { Icon: Anchor,     title: 'Floating Resort & Boat Dine-In', dark: false },
  { Icon: Film,       title: 'Cinepax Cinema',                 dark: false },
  { Icon: Droplets,   title: 'Spa: Steam, Sauna & Jacuzzi',   dark: true  },
  { Icon: Trophy,     title: 'Mini Golf, Archery & Horse Riding', dark: false },
  { Icon: ChevronsDown, title: 'Sky Diving & Parasailing',    dark: true  },
  { Icon: Wifi,       title: '5G Smart City Infrastructure',   dark: false },
]

const INTL_CLUBS = [
  { region: 'Middle East',       countries: ['United Arab Emirates', 'Qatar']                     },
  { region: 'South Asia',        countries: ['Maldives']                                           },
  { region: 'Southeast Asia',    countries: ['Thailand', 'Malaysia', 'Indonesia']                  },
  { region: 'Central Asia',      countries: ['Azerbaijan', 'Uzbekistan']                           },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ClubPage() {
  const reduced = useReducedMotion() ?? false

  return (
    <main>

      {/* ════════ HERO ════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '100vh',
          backgroundColor: '#020c0b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '9rem',
          paddingBottom: '5rem',
        }}
      >
        {/* CSS gradient background — swap for real photo when ready */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(165deg, #020c0b 0%, #051510 30%, #061e1b 60%, #0B3B36 100%)',
          }}
        />
        {/* Gold shimmer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 55% 45% at 50% 52%, rgba(201,166,90,0.08) 0%, transparent 65%)',
          }}
        />
        {/* Circular motif */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '60vmin',
            height: '60vmin',
            borderRadius: '50%',
            border: '1px solid rgba(201,166,90,0.08)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: '40vmin',
            height: '40vmin',
            borderRadius: '50%',
            border: '1px solid rgba(201,166,90,0.05)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(2,12,11,0.6) 0%, transparent 100%)' }}
        />

        <div
          className="relative z-10 text-center px-6 lg:px-12 max-w-4xl mx-auto"
        >
          <Reveal reduced={reduced}>
            <p className="overline-label mb-4">An Invitation to the Extraordinary</p>
          </Reveal>

          <Reveal reduced={reduced} delay={0.08}>
            <h1
              style={{
                fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                fontWeight: 300,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                color: '#F6F1E7',
                marginBottom: '1.5rem',
              }}
            >
              Lakeshore Club<br />Membership
            </h1>
          </Reveal>

          <Reveal reduced={reduced} delay={0.16}>
            <div
              style={{
                width: '3rem',
                height: '1px',
                backgroundColor: '#C9A65A',
                opacity: 0.55,
                margin: '0 auto 1.75rem',
              }}
            />
          </Reveal>

          <Reveal reduced={reduced} delay={0.22}>
            <p
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.82rem',
                fontWeight: 300,
                lineHeight: 1.85,
                color: 'rgba(246,241,231,0.55)',
                maxWidth: '42ch',
                margin: '0 auto 2.5rem',
              }}
            >
              Members-only access to over 40 clubs worldwide. A life curated for those who expect nothing but the finest.
            </p>
          </Reveal>

          <Reveal reduced={reduced} delay={0.28}>
            <Link href="/booking/client" className="btn-gold inline-flex items-center gap-3">
              Get Your Membership
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ════════ MEMBERSHIP NOTE ═════════════════════════════════════ */}
      <section style={{ backgroundColor: '#F6F1E7', padding: '5rem 0 2rem' }}>
        <div className="container-main">
          <Reveal reduced={reduced}>
            <div
              className="max-w-3xl mx-auto text-center"
              style={{
                borderBottom: '1px solid rgba(201,166,90,0.2)',
                paddingBottom: '4rem',
              }}
            >
              <p className="overline-label mb-3">How Membership Works</p>
              <p
                style={{
                  fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: '#1C1C1C',
                }}
              >
                Residents gain membership for{' '}
                <span style={{ color: '#C9A65A', fontWeight: 400 }}>PKR 10 Lakh</span>.
                Farmhouse owners receive{' '}
                <span style={{ color: '#C9A65A', fontWeight: 400 }}>50% off</span>{' '}
                club membership, complimentary guided boating, and half-price resort stays.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ TIER CARDS ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#F6F1E7', padding: '4rem 0 7rem' }}>
        <div className="container-main">
          <Reveal reduced={reduced}>
            <p className="overline-label mb-3">Membership Tiers</p>
            <h2 className="section-heading mb-3">Choose Your Level</h2>
            <div className="gold-divider mb-12" />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {TIERS.map((tier, i) => (
              <motion.div
                key={tier.id}
                className="relative overflow-hidden flex flex-col"
                initial={reduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.07 * i }}
                style={{
                  backgroundColor: tier.bg,
                  border: `1px solid ${tier.border}`,
                  borderTop: `2px solid ${tier.topBorder}`,
                  padding: '2rem 1.75rem 2rem',
                }}
              >
                {/* Platinum shimmer overlay */}
                {tier.platinum && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(135deg, transparent 0%, rgba(201,166,90,0.06) 50%, transparent 100%)',
                      animation: 'shimmer 4s ease-in-out infinite',
                    }}
                  />
                )}
                {tier.platinum && (
                  <style>{`
                    @keyframes shimmer {
                      0%, 100% { opacity: 0.5; }
                      50% { opacity: 1; }
                    }
                    @media (prefers-reduced-motion: reduce) {
                      @keyframes shimmer { 0%, 100% { opacity: 0.7; } }
                    }
                  `}</style>
                )}

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <span
                      style={{
                        fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                        fontSize: '0.52rem',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#C9A65A',
                        backgroundColor: 'rgba(201,166,90,0.1)',
                        padding: '0.3rem 0.6rem',
                      }}
                    >
                      {tier.badge}
                    </span>
                    {tier.platinum && (
                      <Star
                        size={14}
                        strokeWidth={1.5}
                        style={{ color: '#C9A65A', flexShrink: 0 }}
                      />
                    )}
                  </div>

                  {/* Tier name */}
                  <h3
                    style={{
                      fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                      fontSize: '2.2rem',
                      fontWeight: 300,
                      color: tier.textColor,
                      letterSpacing: '-0.01em',
                      marginBottom: '0.3rem',
                      lineHeight: 1.0,
                    }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                      fontSize: '0.6rem',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      color: tier.subColor,
                      marginBottom: '1.75rem',
                    }}
                  >
                    {tier.qualifier}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      height: '1px',
                      backgroundColor: 'rgba(201,166,90,0.2)',
                      marginBottom: '1.5rem',
                    }}
                  />

                  {/* Perks */}
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {tier.perks.map((perk, pi) => (
                      <li
                        key={pi}
                        className="flex items-start gap-2.5"
                      >
                        <span
                          style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            backgroundColor: '#C9A65A',
                            marginTop: '0.45rem',
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                            fontSize: '0.75rem',
                            fontWeight: 300,
                            color: tier.textColor,
                            lineHeight: 1.6,
                            opacity: 0.85,
                          }}
                        >
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ EXPAND YOUR WORLD ═══════════════════════════════════ */}
      <section style={{ backgroundColor: '#EDE7D9', padding: '7rem 0' }}>
        <div className="container-main">
          <Reveal reduced={reduced}>
            <p className="overline-label mb-3">Reciprocal Access</p>
            <h2 className="section-heading mb-3">Expand Your World</h2>
            <div className="gold-divider mb-12" />
          </Reveal>

          {/* Local clubs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {[
              {
                name: 'Elite Club',
                location: 'High Mountain Point, near Islamabad',
                detail: 'Members enjoy 50% reciprocal access at this exclusive mountain retreat above the capital.',
              },
              {
                name: 'Downtown Club',
                location: 'Near Eighteen & Top City, Islamabad',
                detail: 'Urban convenience with the same premium standard — 50% off for all Lakeshore Club members.',
              },
            ].map((club, i) => (
              <Reveal key={i} reduced={reduced} delay={0.06 * i}>
                <div
                  style={{
                    backgroundColor: '#F6F1E7',
                    borderTop: '2px solid #C9A65A',
                    border: '1px solid rgba(201,166,90,0.18)',
                    padding: '2rem',
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin
                      size={14}
                      strokeWidth={1.5}
                      style={{ color: '#C9A65A', marginTop: '0.2rem', flexShrink: 0 }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                          fontSize: '1.35rem',
                          fontWeight: 400,
                          color: '#1C1C1C',
                          marginBottom: '0.2rem',
                        }}
                      >
                        {club.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                          fontSize: '0.6rem',
                          fontWeight: 500,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(201,166,90,0.8)',
                        }}
                      >
                        {club.location}
                      </p>
                    </div>
                    <span
                      style={{
                        marginLeft: 'auto',
                        fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                        fontSize: '0.58rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#C9A65A',
                        backgroundColor: 'rgba(201,166,90,0.1)',
                        padding: '0.3rem 0.6rem',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      50% Off
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                      fontSize: '0.82rem',
                      fontWeight: 300,
                      lineHeight: 1.75,
                      color: '#3A3A3A',
                    }}
                  >
                    {club.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* National + International counts */}
          <Reveal reduced={reduced} delay={0.1}>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12"
            >
              {[
                { count: '10', label: 'Reciprocal National Clubs', sub: 'Across Pakistan' },
                { count: '30+', label: 'International Clubs', sub: 'Worldwide' },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#0B3B36',
                    padding: '2rem',
                    borderTop: '2px solid rgba(201,166,90,0.4)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                      fontSize: '3.5rem',
                      fontWeight: 300,
                      color: '#C9A65A',
                      lineHeight: 1,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {stat.count}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#F6F1E7',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {stat.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                      fontSize: '0.6rem',
                      fontWeight: 300,
                      letterSpacing: '0.12em',
                      color: 'rgba(246,241,231,0.4)',
                    }}
                  >
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* International regions */}
          <Reveal reduced={reduced} delay={0.14}>
            <div
              style={{
                borderTop: '1px solid rgba(201,166,90,0.2)',
                paddingTop: '2.5rem',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe
                  size={16}
                  strokeWidth={1.25}
                  style={{ color: '#C9A65A' }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                    fontSize: '0.6rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(28,28,28,0.5)',
                  }}
                >
                  International Destinations
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {INTL_CLUBS.map((region, i) => (
                  <motion.div
                    key={i}
                    initial={reduced ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.06 * i }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                        fontSize: '0.55rem',
                        fontWeight: 600,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#C9A65A',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {region.region}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {region.countries.map((country, ci) => (
                        <li
                          key={ci}
                          className="flex items-center gap-2"
                        >
                          <span
                            style={{
                              width: '4px',
                              height: '4px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(201,166,90,0.6)',
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                              fontSize: '0.78rem',
                              fontWeight: 300,
                              color: '#1C1C1C',
                            }}
                          >
                            {country}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ AMENITIES GRID ══════════════════════════════════════ */}
      <section style={{ backgroundColor: '#0B3B36', padding: '7rem 0' }}>
        <div className="container-main">
          <Reveal reduced={reduced}>
            <p className="overline-label mb-3" style={{ color: '#C9A65A' }}>
              Club Amenities
            </p>
            <h2
              className="section-heading-light mb-3"
            >
              A World of Extraordinary Experiences
            </h2>
            <div
              style={{
                width: '3rem',
                height: '1px',
                backgroundColor: '#C9A65A',
                opacity: 0.5,
                marginBottom: '3.5rem',
              }}
            />
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {AMENITIES.map((amenity, i) => (
              <motion.div
                key={i}
                className="group"
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
                whileHover={reduced ? {} : { y: -4 }}
                style={{
                  backgroundColor: amenity.dark ? '#061e1b' : '#0D4540',
                  border: '1px solid rgba(201,166,90,0.12)',
                  borderTop: '1px solid rgba(201,166,90,0.25)',
                  padding: '1.75rem 1.5rem',
                  cursor: 'default',
                  transition: 'transform 0.35s ease',
                }}
              >
                <amenity.Icon
                  size={20}
                  strokeWidth={1.25}
                  style={{ color: 'rgba(201,166,90,0.7)', marginBottom: '1rem' }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    lineHeight: 1.4,
                    color: 'rgba(246,241,231,0.85)',
                  }}
                >
                  {amenity.title}
                </p>
              </motion.div>
            ))}
          </div>

          <Reveal reduced={reduced} delay={0.12}>
            <div className="mt-12 text-center">
              <Link
                href="/features"
                className="group inline-flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                style={{ textDecoration: 'none' }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                    fontSize: '0.62rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(246,241,231,0.65)',
                    borderBottom: '1px solid rgba(201,166,90,0.3)',
                    paddingBottom: '2px',
                    transition: 'color 0.3s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLSpanElement
                    el.style.color = '#C9A65A'
                    el.style.borderColor = 'rgba(201,166,90,0.65)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLSpanElement
                    el.style.color = 'rgba(246,241,231,0.65)'
                    el.style.borderColor = 'rgba(201,166,90,0.3)'
                  }}
                >
                  View All Features &amp; Facilities
                </span>
                <ArrowRight
                  size={13}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                  style={{ color: '#C9A65A' }}
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ CTA ═════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'linear-gradient(165deg, #020c0b 0%, #061e1b 50%, #0B3B36 100%)',
          padding: '7rem 0',
        }}
      >
        <div className="container-main text-center">
          <Reveal reduced={reduced}>
            <p className="overline-label mb-4" style={{ color: '#C9A65A' }}>
              Begin Your Membership
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                color: '#F6F1E7',
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}
            >
              A Privilege Reserved<br />for the Discerning Few.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.88rem',
                fontWeight: 300,
                color: 'rgba(246,241,231,0.5)',
                marginBottom: '2.75rem',
                maxWidth: '40ch',
                margin: '0 auto 2.75rem',
              }}
            >
              Join a global network of extraordinary destinations. Enquire today.
            </p>
            <Link href="/booking/client" className="btn-gold inline-flex items-center gap-3">
              Get Your Membership
              <ArrowRight size={13} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  )
}
