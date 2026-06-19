'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Leaf, Waves, Mountain } from 'lucide-react'

import { EASE_GOLD } from '@/lib/animations'
import PremiumTable from '@/components/ui/PremiumTable'

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
      transition={{ duration: 0.9, ease: EASE_GOLD, delay }}
    >
      {children}
    </motion.div>
  )
}

// ─── Table data ───────────────────────────────────────────────────────────────
const FARM_HEADERS = [
  'Size (Kanal)',
  'Booking 12.5%',
  'Confirmation 12.5%',
  '30 Monthly Instalments',
  '6 Bi-Annual Payments',
  'Balloting 10%',
  'Total Price',
]

const FARM_NEW_ROWS: (string | number)[][] = [
  ['02 Kanal', 1000000, 1000000,  86667,  433333,  800000,  8000000],
  ['04 Kanal', 1812500, 1812500, 157083,  785417, 1450000, 14500000],
  ['08 Kanal', 3375000, 3375000, 292500, 1462500, 2700000, 27000000],
]

const FARM_OLD_ROWS: (string | number)[][] = [
  ['02 Kanal',  937500,  937500,  81250,  406250,  750000,  7500000],
  ['04 Kanal', 1750000, 1750000, 151666,  758333, 1400000, 14000000],
  ['08 Kanal', 3312500, 3312500, 287083, 1435417, 2650000, 26500000],
]

const OWNER_PERKS = [
  { label: '50% Off', detail: 'Club Membership' },
  { label: 'Complimentary', detail: '2-Hour Guided Boating' },
  { label: '50% Off', detail: 'Lakeshore Resort Stays' },
]

const GALLERY_TILES = [
  { Icon: Waves,    label: 'Khanpur Lake',    bg: 'linear-gradient(150deg, #061e1b 0%, #0B3B36 50%, #0F4D45 100%)', photo: '' },
  { Icon: Mountain, label: 'Mountain Trails', bg: 'linear-gradient(135deg, #0D4540 0%, #0B3B36 60%, #082e2a 100%)', photo: '' },
  { Icon: Leaf,     label: 'Private Farmland', bg: 'linear-gradient(160deg, #082e2a 0%, #0B3B36 45%, #0F4D45 100%)', photo: '' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FarmsPage() {
  const reduced = useReducedMotion() ?? false

  return (
    <main>

      {/* ════════ HERO ════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '100vh',
          backgroundColor: '#061e1b',
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
            background: 'linear-gradient(135deg, #061e1b 0%, #0B3B36 35%, #104D46 65%, #0D4540 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 65% 50% at 60% 50%, rgba(201,166,90,0.06) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(6,30,27,0.5) 0%, transparent 100%)' }}
        />

        <div
          className="relative z-10 text-center px-6 lg:px-12 max-w-5xl mx-auto"
        >
          <Reveal reduced={reduced}>
            <p className="overline-label mb-4">Farmhouse Ownership · Khanpur Dam</p>
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
                marginBottom: '2rem',
              }}
            >
              Lakeshore Farms
            </h1>
          </Reveal>

          <Reveal reduced={reduced} delay={0.14}>
            <div className="flex items-center justify-center gap-6 lg:gap-10 mb-8">
              {['02', '04', '08'].map((size, i) => (
                <React.Fragment key={size}>
                  <div className="text-center">
                    <p
                      style={{
                        fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 300,
                        color: '#F6F1E7',
                        lineHeight: 1,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {size}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                        fontSize: '0.55rem',
                        fontWeight: 500,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'rgba(201,166,90,0.75)',
                        marginTop: '0.3rem',
                      }}
                    >
                      Kanal
                    </p>
                  </div>
                  {i < 2 && (
                    <span
                      style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        color: 'rgba(201,166,90,0.4)',
                        fontWeight: 100,
                        lineHeight: 1,
                      }}
                    >
                      /
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </Reveal>

          <Reveal reduced={reduced} delay={0.18}>
            <p
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.6rem',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(246,241,231,0.45)',
                marginBottom: '2.5rem',
              }}
            >
              Farm Houses Available
            </p>
          </Reveal>

          <Reveal reduced={reduced} delay={0.24}>
            <Link href="/booking/client" className="btn-gold inline-flex items-center gap-3">
              Book Your Farm House
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ════════ NARRATIVE ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#F6F1E7', padding: '7rem 0' }}>
        <div className="container-main">
          <div className="max-w-3xl">
            <Reveal reduced={reduced}>
              <p className="overline-label mb-3">The Vision</p>
              <h2
                style={{
                  fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontWeight: 300,
                  lineHeight: 1.25,
                  color: '#1C1C1C',
                  marginBottom: '1.75rem',
                }}
              >
                Find your slice of paradise, where the idyllic lake meets the serene mountains.
              </h2>
              <div className="gold-divider mb-6" />
              <p
                style={{
                  fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                  fontSize: '1rem',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: '#3A3A3A',
                }}
              >
                Lakeshore Farms offer something that cannot be manufactured: true land ownership at the intersection of water and sky. Each farm plot is a canvas — for private retreats, organic gardens, or simply the freedom of open acreage beside Khanpur Dam. Spend mornings on horseback through mountain trails, afternoons navigating the lake by boat, and evenings watching the sun dissolve into the water from your own terrace. This is not a property. This is a way of life.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════ OWNER PERKS ═════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#EDE7D9', padding: '0 0 7rem' }}>
        <div className="container-main">
          <Reveal reduced={reduced}>
            <div
              style={{
                border: '1px solid rgba(201,166,90,0.45)',
                background: 'linear-gradient(135deg, rgba(201,166,90,0.04) 0%, transparent 60%)',
                padding: '3rem',
              }}
              className="lg:p-12"
            >
              <p className="overline-label mb-3">Exclusive Owner Benefits</p>
              <h3
                style={{
                  fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 400,
                  color: '#1C1C1C',
                  marginBottom: '2rem',
                  lineHeight: 1.3,
                }}
              >
                Farmhouse owners receive extraordinary privileges as part of the Lakeshore family.
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {OWNER_PERKS.map((perk, i) => (
                  <motion.div
                    key={i}
                    initial={reduced ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: EASE_GOLD, delay: 0.07 * i }}
                    style={{ borderTop: '2px solid #C9A65A', paddingTop: '1.25rem' }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                        fontSize: '1.5rem',
                        fontWeight: 300,
                        color: '#C9A65A',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {perk.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: '#1C1C1C',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {perk.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ PAYMENT PLANS ═══════════════════════════════════════ */}
      <section style={{ backgroundColor: '#F6F1E7', padding: '7rem 0' }}>
        <div className="container-main">
          <Reveal reduced={reduced}>
            <p className="overline-label mb-3">Farm Houses</p>
            <h2 className="section-heading mb-3">Payment Plans</h2>
            <div className="gold-divider mb-4" />
            <p
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.82rem',
                fontWeight: 300,
                color: 'rgba(28,28,28,0.55)',
                marginBottom: '3.5rem',
              }}
            >
              All figures in Pakistani Rupees (PKR) · Khanpur Dam, Khyber Pakhtunkhwa
            </p>
          </Reveal>

          <div className="flex flex-col gap-14">
            <Reveal reduced={reduced} delay={0.06}>
              <PremiumTable
                title="Farm Houses — New Payment Plan"
                headers={FARM_HEADERS}
                rows={FARM_NEW_ROWS}
                note="Prices subject to revision · Contact our sales team for full details"
              />
            </Reveal>

            <div>
              <div
                style={{
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, rgba(201,166,90,0.3), transparent)',
                  marginBottom: '3.5rem',
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                  fontSize: '0.6rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(28,28,28,0.38)',
                  marginBottom: '1rem',
                }}
              >
                Previous Rates — Reference Only
              </p>
              <Reveal reduced={reduced} delay={0.1}>
                <PremiumTable
                  title="Farm Houses — Old Rates"
                  headers={FARM_HEADERS}
                  rows={FARM_OLD_ROWS}
                  dimmed={true}
                  note="These rates are no longer available. Shown for reference purposes only."
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ GALLERY ═════════════════════════════════════════════ */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ minHeight: '52vh' }}>
          {GALLERY_TILES.map((tile, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden group"
              style={{ minHeight: '44vw', background: tile.bg }}
              initial={reduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.0, ease: 'easeOut', delay: 0.08 * i }}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                style={
                  tile.photo
                    ? { backgroundImage: `url(${tile.photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { background: tile.bg }
                }
              />
              {tile.photo && (
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(6,30,27,0.85) 0%, rgba(6,30,27,0.25) 60%, rgba(6,30,27,0.15) 100%)' }}
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(201,166,90,0.06) 0%, transparent 70%)',
                }}
              />
              <div
                className="absolute top-0 left-0 right-0"
                style={{ height: '1px', backgroundColor: 'rgba(201,166,90,0.2)' }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                <tile.Icon
                  size={22}
                  strokeWidth={1.25}
                  style={{ color: 'rgba(201,166,90,0.6)', marginBottom: '0.75rem' }}
                />
                <p
                  className="transition-transform duration-500 group-hover:-translate-y-1"
                  style={{
                    fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                    fontSize: '1.4rem',
                    fontWeight: 300,
                    color: '#F6F1E7',
                  }}
                >
                  {tile.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                    fontSize: '0.58rem',
                    fontWeight: 400,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(246,241,231,0.35)',
                    marginTop: '0.3rem',
                  }}
                >
                  Photography placeholder
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════ CTA ═════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#0B3B36', padding: '6rem 0' }}>
        <div className="container-main text-center">
          <Reveal reduced={reduced}>
            <p className="overline-label mb-4" style={{ color: '#C9A65A' }}>
              Own Your Slice of Paradise
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 300,
                color: '#F6F1E7',
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}
            >
              Your Farm. Your Lake. Your Life.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.88rem',
                fontWeight: 300,
                color: 'rgba(246,241,231,0.55)',
                marginBottom: '2.5rem',
              }}
            >
              Choose from 02, 04, or 08 Kanal farm houses at Khanpur Dam.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking/client" className="btn-gold inline-flex items-center gap-3">
                Get Your Membership
                <ArrowRight size={13} strokeWidth={1.5} />
              </Link>
              <Link href="/payment-plan" className="btn-ghost inline-flex items-center gap-3">
                Download Payment Plan
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}
