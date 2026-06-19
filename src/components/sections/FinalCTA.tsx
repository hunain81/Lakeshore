'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

// ─── Section ──────────────────────────────────────────────────────────────────
export default function FinalCTA() {
  const reduced = useReducedMotion() ?? false
  const [registerHovered, setRegisterHovered] = useState(false)

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: '88vh' }}
    >
      {/* ── Background: lake at twilight (swap with <Image fill> when photo available) */}
      <div className="absolute inset-0">
        {/* Base deep lake gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(165deg, #020c0b 0%, #051510 20%, #071a17 38%, #0B3B36 65%, #0a3230 82%, #061e1b 100%)',
          }}
        />
        {/* Gold shimmer — moonlight on water */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 40% at 55% 60%, rgba(201,166,90,0.06) 0%, transparent 65%)',
          }}
        />
        {/* Horizontal water-ripple lines */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 opacity-[0.025]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(180deg, transparent 0px, transparent 18px, rgba(201,166,90,0.7) 18px, rgba(201,166,90,0.7) 19px)',
          }}
        />
        {/* Top vignette */}
        <div
          className="absolute top-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, rgba(6,30,27,0.6) 0%, transparent 100%)',
          }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to top, rgba(6,30,27,0.7) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Content ──────────────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center px-6 xl:px-10 max-w-[1440px] mx-auto">
        {/* Gold overline */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
              fontSize: '0.6rem',
              fontWeight: 500,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: '#C9A65A',
              marginBottom: '1.5rem',
            }}
          >
            Begin Your Journey
          </p>
        </motion.div>

        {/* Gold horizontal hairline */}
        <motion.div
          className="mx-auto mb-8"
          style={{ width: '3rem', height: '1px', backgroundColor: '#C9A65A', opacity: 0.5 }}
          initial={reduced ? false : { opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.5, scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />

        {/* Serif headline */}
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          style={{
            fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#F6F1E7',
            marginBottom: '1.75rem',
          }}
        >
          Your Lakeside Life<br />Begins Here.
        </motion.h2>

        {/* Subline */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          style={{
            fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
            fontSize: 'clamp(0.82rem, 1.5vw, 0.96rem)',
            fontWeight: 300,
            lineHeight: 1.9,
            color: 'rgba(246,241,231,0.55)',
            maxWidth: '46ch',
            margin: '0 auto 3rem',
          }}
        >
          Zero down payment. Start your ownership journey from just{' '}
          <span style={{ color: 'rgba(201,166,90,0.85)', fontWeight: 400 }}>PKR 25,000/month</span>
          {' '}— your own piece of paradise on the shores of Khanpur Dam.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
        >
          {/* Primary: gold fill */}
          <Link
            href="/booking/client"
            className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm"
            style={{
              textDecoration: 'none',
              backgroundColor: registerHovered ? '#b8903e' : '#C9A65A',
              color: '#0B3B36',
              padding: '0.95rem 2.5rem',
              transition: 'background-color 0.35s ease',
            }}
            onMouseEnter={() => setRegisterHovered(true)}
            onMouseLeave={() => setRegisterHovered(false)}
          >
            <span
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Register Now
            </span>
            <ArrowRight
              size={13}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          {/* Secondary: cream outline */}
          <Link
            href="/payment-plan"
            className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm"
            style={{
              textDecoration: 'none',
              backgroundColor: 'transparent',
              color: '#F6F1E7',
              border: '1px solid rgba(246,241,231,0.35)',
              padding: '0.95rem 2.5rem',
              transition: 'border-color 0.35s ease, color 0.35s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(201,166,90,0.55)'
              el.style.color = '#C9A65A'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(246,241,231,0.35)'
              el.style.color = '#F6F1E7'
            }}
          >
            <Download size={13} strokeWidth={1.5} />
            <span
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Download Payment Plan
            </span>
          </Link>
        </motion.div>

        {/* Fine print */}
        <motion.p
          className="mt-10"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
            fontSize: '0.56rem',
            fontWeight: 300,
            letterSpacing: '0.12em',
            color: 'rgba(246,241,231,0.25)',
          }}
        >
          NOC No. 145-50 · Lakeshore City at Khanpur Dam · 16,000 Kanals
        </motion.p>
      </div>

      {/* ── Decorative bottom rule ────────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '1px',
          background:
            'linear-gradient(to right, transparent 0%, rgba(201,166,90,0.3) 20%, rgba(201,166,90,0.3) 80%, transparent 100%)',
        }}
      />
    </section>
  )
}
