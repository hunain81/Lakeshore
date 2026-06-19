'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Check, ChevronDown, ArrowRight } from 'lucide-react'
import PremiumTable from '@/components/ui/PremiumTable'

// ─── Reveal helper ────────────────────────────────────────────────────────────
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
const PLOT_SIZES = [
  { id: '05-marla', label: '05 Marla', monthly: '25,000' },
  { id: '07-marla', label: '07 Marla', monthly: '35,000' },
  { id: '10-marla', label: '10 Marla', monthly: '45,000' },
  { id: '01-kanal', label: '01 Kanal', monthly: '75,000' },
] as const

const ZERO_CHARGES = [
  'No Down Payment',
  'No Confirmation Charges',
  'No Booking Charges',
  'No Possession Charges',
  'No Balloting Charges',
  'No Half-Yearly Charges',
]

const RES_HEADERS = [
  'Plot Size',
  '60 Monthly Instalments',
  'Balloting (6th Month)',
  'Final Payment',
  'Total Price',
]
const RES_ROWS: (string | number)[][] = [
  ['5 Marla',  25000,  100000,  200000, 1800000],
  ['7 Marla',  35000,  140000,  280000, 2520000],
  ['10 Marla', 45000,  180000,  360000, 3240000],
  ['1 Kanal',  75000,  300000,  600000, 5400000],
]

const COM_HEADERS = [
  'Plot Size',
  '60 Monthly Instalments',
  'Balloting (6th Month)',
  'Final Payment',
  'Total Price',
]
const COM_ROWS: (string | number)[][] = [
  ['4 Marla', 100000,  700000, 1400000,  8100000],
  ['6 Marla', 150000, 1000000, 2000000, 12100000],
  ['8 Marla', 200000, 1400000, 2800000, 16200000],
]

const FAQS = [
  {
    q: 'What is Lakeshore Residencia?',
    a: 'Lakeshore Residencia is the residential heart of Lakeshore City — a premium lakeside development at Khanpur Dam, 25 minutes from Islamabad D-12. It offers residential and commercial plots with zero upfront costs and flexible monthly instalments from PKR 25,000.',
  },
  {
    q: 'What plot sizes are available?',
    a: 'Residential plots are available in 05 Marla, 07 Marla, 10 Marla, and 01 Kanal. Commercial plots are available in 04 Marla, 06 Marla, and 08 Marla within the Executive Block.',
  },
  {
    q: 'Are apartments available at Lakeshore Residencia?',
    a: 'Yes. Apartment options include Studio, 1-Bedroom, and 2-Bedroom units — all designed with lakeside views and resort-grade finishing to the same premium standard as the villa plots.',
  },
  {
    q: 'What amenities are included within the masterplan?',
    a: 'Lakeshore Residencia is served by a dedicated Education Sector, Hospitals & Medical Facilities, Fine Dining Restaurants, a Marquee & Conference Centre, and a Cinepax Cinema — all within the masterplan boundary.',
  },
  {
    q: 'Is Lakeshore City NOC approved?',
    a: 'Yes. Lakeshore City holds official NOC No. 145-50, issued by the Tehsil Municipal Administration (TMA), covering 16,000 kanals of government-approved land at Khanpur Dam, Khyber Pakhtunkhwa.',
  },
  {
    q: 'How does the payment plan work?',
    a: 'All residential plots require zero down payment. Ownership begins from PKR 25,000/month over 60 monthly instalments. A single balloting payment is due in the 6th month, and a final payment at possession. No booking fee, no hidden charges.',
  },
  {
    q: 'How far is Lakeshore City from major landmarks?',
    a: 'Lakeshore City is approximately 25 minutes from Islamabad D-12, 35 minutes from Rawalpindi, and 15 minutes from Hasan Abdal Interchange, sitting directly on the shores of Khanpur Dam.',
  },
  {
    q: 'How does the PKR 25,000/month zero-down offer work?',
    a: 'On the 05 Marla residential plot, you secure ownership with no down payment — beginning with PKR 25,000 monthly for 60 months. A one-time balloting payment of PKR 100,000 is due in month 6, and a final payment of PKR 200,000 at possession. Total: PKR 1,800,000.',
  },
  {
    q: 'What sets Lakeshore Residencia apart?',
    a: 'No other development in Pakistan offers lakeside luxury with zero upfront costs, a government-approved NOC, and a world-class amenity ecosystem — from Cinepax Cinema to Hot Air Ballooning and a Replica of Lake Argyle — all within one masterplan.',
  },
  {
    q: 'How do I book my plot?',
    a: 'Click "Book Your Plot Now" or visit our sales office. Our team will guide you through plot selection, payment scheduling, and documentation. No upfront payment is required to begin the booking process.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ResidenciaPage() {
  const reduced = useReducedMotion() ?? false
  const [selected, setSelected] = useState<string>('05-marla')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main>

      {/* ════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
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
            background: 'linear-gradient(150deg, #061e1b 0%, #0B3B36 40%, #0D4540 75%, #0B3B36 100%)',
          }}
        />
        {/* Gold shimmer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 55% at 45% 55%, rgba(201,166,90,0.07) 0%, transparent 65%)',
          }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(6,30,27,0.5) 0%, transparent 100%)',
          }}
        />

        <div
          className="relative z-10 text-center px-6 lg:px-12 max-w-4xl mx-auto"
        >
          <Reveal reduced={reduced}>
            <p className="overline-label mb-4">Private Residences · Khanpur Dam</p>
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
                marginBottom: '1.75rem',
              }}
            >
              Lakeshore<br />Residencia
            </h1>
          </Reveal>

          <Reveal reduced={reduced} delay={0.16}>
            <div
              style={{
                width: '3rem',
                height: '1px',
                backgroundColor: '#C9A65A',
                opacity: 0.6,
                margin: '0 auto 1.75rem',
              }}
            />
          </Reveal>

          <Reveal reduced={reduced} delay={0.22}>
            <p
              lang="ur"
              dir="rtl"
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: 'rgba(246,241,231,0.75)',
                marginBottom: '2.5rem',
                letterSpacing: '0.02em',
              }}
            >
              اب بنائیں اپنا آشیانہ — 25,000 ماہانہ
            </p>
          </Reveal>

          <Reveal reduced={reduced} delay={0.3}>
            <Link
              href="/booking/client"
              className="btn-gold inline-flex items-center gap-3"
            >
              Book Your Plot Now
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PLOT SIZE SELECTOR
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#0B3B36', padding: '6rem 0 7rem' }}>
        <div className="container-main">
          <Reveal reduced={reduced}>
            <p className="overline-label mb-3">Choose Your Plot</p>
            <h2
              style={{
                fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 300,
                color: '#F6F1E7',
                marginBottom: '0.75rem',
              }}
            >
              Select your size —{' '}
              <br className="hidden lg:block" />
              ownership begins immediately.
            </h2>
            <div className="gold-divider mb-12" />
          </Reveal>

          <Reveal reduced={reduced} delay={0.1}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {PLOT_SIZES.map((size) => {
                const isActive = selected === size.id
                return (
                  <button
                    key={size.id}
                    onClick={() => setSelected(size.id)}
                    className="relative text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? '#F6F1E7' : '#051510',
                      border: isActive
                        ? '1px solid rgba(201,166,90,0.5)'
                        : '1px solid rgba(201,166,90,0.14)',
                      borderTop: `2px solid #C9A65A`,
                      padding: '1.75rem 1.5rem',
                    }}
                    aria-pressed={isActive}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                        fontSize: '0.55rem',
                        fontWeight: 500,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#C9A65A',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Residential
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                        fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                        fontWeight: 300,
                        color: isActive ? '#1C1C1C' : '#F6F1E7',
                        marginBottom: '0.5rem',
                        lineHeight: 1.1,
                      }}
                    >
                      {size.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                        fontSize: '0.7rem',
                        fontWeight: 300,
                        color: isActive ? 'rgba(28,28,28,0.6)' : 'rgba(246,241,231,0.45)',
                      }}
                    >
                      from PKR {size.monthly}/mo
                    </p>
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          ZERO CHARGES GRID
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#EDE7D9', padding: '6rem 0 7rem' }}>
        <div className="container-main">
          <Reveal reduced={reduced}>
            <h2
              style={{
                fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 300,
                lineHeight: 1.2,
                color: '#1C1C1C',
                maxWidth: '52ch',
                marginBottom: '1rem',
              }}
            >
              The Most Significant Real Estate Revolution<br className="hidden lg:block" /> in Affordable Living.
            </h2>
            <div className="gold-divider mb-12" />
          </Reveal>

          <Reveal reduced={reduced} delay={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ZERO_CHARGES.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.04 * i }}
                  className="flex items-center gap-4"
                  style={{
                    backgroundColor: '#F6F1E7',
                    padding: '1.25rem 1.5rem',
                    borderLeft: '2px solid #C9A65A',
                  }}
                >
                  <div
                    style={{
                      width: '1.75rem',
                      height: '1.75rem',
                      borderRadius: '50%',
                      border: '1px solid rgba(201,166,90,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={11} strokeWidth={2} style={{ color: '#C9A65A' }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: '#1C1C1C',
                    }}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          NARRATIVE
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#0B3B36', padding: '7rem 0' }}>
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <Reveal reduced={reduced}>
              <p className="overline-label mb-4" style={{ color: '#C9A65A' }}>
                Our Promise
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: '#F6F1E7',
                  marginBottom: '2rem',
                }}
              >
                Elevate Your Lifestyle at Lakeshore Residencia —<br className="hidden lg:block" /> Where Luxury Meets Affordability.
              </h2>
              <div
                style={{
                  width: '3rem',
                  height: '1px',
                  backgroundColor: '#C9A65A',
                  opacity: 0.5,
                  marginBottom: '2rem',
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                  fontSize: '1rem',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: 'rgba(246,241,231,0.65)',
                }}
              >
                At Lakeshore Residencia, we believe the path to an extraordinary home should never begin with an impossible payment. Our revolutionary zero-upfront ownership model allows you to secure your plot on the shores of Khanpur Dam with nothing down — simply commit to monthly instalments from PKR 25,000. No confirmation charges. No booking fee. No hidden costs. Just your plot, your pace, and a life you have always deserved.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PAYMENT PLANS
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#F6F1E7', padding: '7rem 0' }}>
        <div className="container-main">
          <Reveal reduced={reduced}>
            <p className="overline-label mb-3">Executive Block</p>
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
              All figures in Pakistani Rupees (PKR) · Located at Khanpur Dam — 25 min from Islamabad D-12
            </p>
          </Reveal>

          <div className="flex flex-col gap-14">
            <Reveal reduced={reduced} delay={0.08}>
              <PremiumTable
                title="Executive Block — Residential"
                headers={RES_HEADERS}
                rows={RES_ROWS}
                note="Zero down payment · No hidden charges · Prices subject to revision"
              />
            </Reveal>

            <div
              style={{
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(201,166,90,0.3), transparent)',
              }}
            />

            <Reveal reduced={reduced} delay={0.1}>
              <PremiumTable
                title="Executive Block — Commercial"
                headers={COM_HEADERS}
                rows={COM_ROWS}
                note="Commercial plots subject to availability · Prices subject to revision"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#EDE7D9', padding: '7rem 0' }}>
        <div className="container-main">
          <Reveal reduced={reduced}>
            <p className="overline-label mb-3">Frequently Asked</p>
            <h2 className="section-heading mb-3">Questions & Answers</h2>
            <div className="gold-divider mb-12" />
          </Reveal>

          <div className="max-w-3xl mx-auto">
            {FAQS.map((faq, i) => (
              <Reveal key={i} reduced={reduced} delay={0.03 * i}>
                <div
                  style={{
                    borderBottom: '1px solid rgba(201,166,90,0.18)',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-start cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                    style={{ padding: '1.5rem 0', textAlign: 'left', gap: '1rem' }}
                    aria-expanded={openFaq === i}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                        fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                        fontWeight: 400,
                        color: openFaq === i ? '#C9A65A' : '#1C1C1C',
                        transition: 'color 0.25s ease',
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={16}
                      strokeWidth={1.5}
                      style={{
                        color: '#C9A65A',
                        transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        flexShrink: 0,
                        marginTop: '0.15rem',
                      }}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        key="answer"
                        initial={reduced ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                            fontSize: '0.88rem',
                            fontWeight: 300,
                            lineHeight: 1.85,
                            color: 'rgba(28,28,28,0.68)',
                            paddingBottom: '1.5rem',
                          }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CTA STRIP
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#0B3B36', padding: '6rem 0' }}>
        <div className="container-main text-center">
          <Reveal reduced={reduced}>
            <p className="overline-label mb-4" style={{ color: '#C9A65A' }}>
              Begin Today
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
              Your Plot at Lakeshore Awaits.
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
              No down payment. No hidden charges. Just your future.
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
