'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

// ─── Count-up hook (no extra packages) ───────────────────────────────────────
function useCountUp(end: number, duration: number, trigger: boolean, reduced: boolean) {
  const [value, setValue] = useState(reduced ? end : 0)

  useEffect(() => {
    if (!trigger || reduced) { setValue(end); return }
    const startTime = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3) // cubic easeOut
      setValue(Math.round(end * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [trigger, end, duration, reduced])

  return value
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  {
    id: 'kanals',
    isCount: true,
    end: 16000,
    display: '',
    unit: 'Kanals',
    label: 'NOC-Approved Area',
  },
  {
    id: 'noc',
    isCount: false,
    end: 0,
    display: '145-50',
    unit: 'NOC Number',
    label: 'Govt. of KPK Certified',
  },
  {
    id: 'distance',
    isCount: true,
    end: 25,
    display: '',
    unit: 'Minutes',
    label: 'From Islamabad D-12',
  },
  {
    id: 'views',
    isCount: false,
    end: 0,
    display: '2-IN-1',
    unit: 'Views',
    label: 'Waterfront & Hill View',
  },
] as const

const PARTNERS = [
  'Islamabad Chamber of Commerce',
  'Rawalpindi Chamber',
  'PowerChina',
  'PTDC',
  'KPCTI',
  'The Tourist Universe',
]

// ─── Individual stat item ──────────────────────────────────────────────────────
function StatItem({
  stat,
  trigger,
  reduced,
}: {
  stat: (typeof STATS)[number]
  trigger: boolean
  reduced: boolean
}) {
  const count = useCountUp(stat.end, 2.2, trigger && stat.isCount, reduced)
  const displayValue = stat.isCount ? count.toLocaleString() : stat.display

  return (
    <div className="text-center py-12 px-6 lg:px-8">
      <p
        style={{
          fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
          fontSize: 'clamp(2.8rem, 5vw, 4.6rem)',
          fontWeight: 300,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          color: '#C9A65A',
          marginBottom: '0.4rem',
        }}
      >
        {displayValue}
      </p>
      <p
        style={{
          fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
          fontSize: '0.62rem',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#F6F1E7',
          marginBottom: '0.3rem',
        }}
      >
        {stat.unit}
      </p>
      <p
        style={{
          fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
          fontSize: '0.58rem',
          fontWeight: 300,
          letterSpacing: '0.13em',
          textTransform: 'uppercase',
          color: 'rgba(246,241,231,0.38)',
        }}
      >
        {stat.label}
      </p>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function TrustBand() {
  const reduced = useReducedMotion() ?? false
  const statsRef = useRef<HTMLDivElement>(null)
  const inView = useInView(statsRef, { once: true, margin: '-80px' })

  return (
    <section style={{ backgroundColor: '#0B3B36' }} aria-label="Key facts and partners">
      {/* ── Top hairline ──────────────────────────────────── */}
      <div
        style={{
          height: '1px',
          background:
            'linear-gradient(to right, transparent 0%, rgba(201,166,90,0.45) 20%, rgba(201,166,90,0.45) 80%, transparent 100%)',
        }}
      />

      {/* ── Stats row ─────────────────────────────────────── */}
      <div ref={statsRef}>
        <motion.div
          className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4"
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.id}
              className={i < STATS.length - 1 ? 'lg:border-r' : ''}
              style={
                i < STATS.length - 1
                  ? { borderRightColor: 'rgba(201,166,90,0.15)' }
                  : undefined
              }
            >
              <StatItem stat={stat} trigger={inView} reduced={reduced} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Mid hairline ──────────────────────────────────── */}
      <div
        style={{
          height: '1px',
          background:
            'linear-gradient(to right, transparent 0%, rgba(201,166,90,0.18) 10%, rgba(201,166,90,0.18) 90%, transparent 100%)',
        }}
      />

      {/* ── Partner logos ─────────────────────────────────── */}
      <motion.div
          className="max-w-[1440px] mx-auto px-6 xl:px-10 py-10 lg:py-12"
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <p
          className="text-center mb-8"
          style={{
            fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
            fontSize: '0.55rem',
            fontWeight: 500,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'rgba(246,241,231,0.28)',
          }}
        >
          Esteemed Partners &amp; Affiliates
        </p>

        {/* Gold hairline above logos */}
        <div
          className="mx-auto mb-8"
          style={{ width: '3rem', height: '1px', backgroundColor: '#C9A65A', opacity: 0.3 }}
        />

        <div className="flex flex-wrap items-center justify-center gap-x-10 lg:gap-x-16 gap-y-5">
          {PARTNERS.map((partner) => (
            <span
              key={partner}
              className="cursor-default select-none"
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(246,241,231,0.22)',
                transition: 'color 0.4s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#C9A65A'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'rgba(246,241,231,0.22)'
              }}
            >
              {partner}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Bottom hairline ───────────────────────────────── */}
      <div
        style={{
          height: '1px',
          background:
            'linear-gradient(to right, transparent 0%, rgba(201,166,90,0.18) 10%, rgba(201,166,90,0.18) 90%, transparent 100%)',
        }}
      />

      {/* ── Developer credit ──────────────────────────────── */}
      <motion.div
        className="text-center py-7"
        initial={reduced ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <p
          style={{
            fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
            fontSize: '0.6rem',
            fontWeight: 300,
            letterSpacing: '0.1em',
            color: 'rgba(246,241,231,0.3)',
          }}
        >
          Developed by{' '}
          <span style={{ color: 'rgba(201,166,90,0.6)', fontWeight: 500 }}>Al Sadat Group</span>
          {' '}— established 1975, with offices across Pakistan, Dubai and England.
        </p>
      </motion.div>
    </section>
  )
}
