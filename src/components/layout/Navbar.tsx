'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, X, Menu } from 'lucide-react'
import { EASE_GOLD } from '@/lib/animations'

// ─── Data ──────────────────────────────────────────────────────────────────────
type DropdownItem = { label: string; href: string }
type NavLink = { label: string; href: string; external?: boolean; dropdown?: never }
type NavDropdown = { label: string; dropdown: DropdownItem[]; href?: never; external?: never }
type NavItem = NavLink | NavDropdown

const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Lakeshore City',
    dropdown: [
      { label: 'Lakeshore Residencia', href: '/residencia' },
      { label: 'Lakeshore Farmhouses', href: '/farms' },
      { label: 'Lakeshore Club', href: '/club' },
    ],
  },
  { label: 'Payment Plan', href: '/payment-plan' },
  { label: 'Location', href: '/location' },
  {
    label: 'Bookings',
    dropdown: [
      { label: 'Sales Partner Registration', href: '/booking/partner' },
      { label: 'Client Booking Form', href: '/booking/client' },
    ],
  },
  { label: 'Career', href: '/career' },
  { label: 'Client Login', href: 'https://portal.lakeshorecity.com', external: true },
]

// ─── Desktop plain link ────────────────────────────────────────────────────────
function DesktopLink({ item, textColor }: { item: NavLink; textColor: string }) {
  return (
    <Link
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
      className="relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm"
      style={{
        fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
        fontSize: '0.68rem',
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: textColor,
        textDecoration: 'none',
        paddingBottom: '2px',
        transition: 'color 0.4s',
        whiteSpace: 'nowrap',
      }}
    >
      {item.label}
      {/* animated underline */}
      <span
        className="absolute bottom-0 left-0 h-px bg-[#C9A65A] w-0 group-hover:w-full group-focus-visible:w-full transition-all duration-300 ease-out"
      />
    </Link>
  )
}

// ─── Desktop dropdown ──────────────────────────────────────────────────────────
function DesktopDropdown({
  item,
  textColor,
}: {
  item: NavDropdown
  textColor: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative group flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm"
        style={{
          fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
          fontSize: '0.68rem',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: textColor,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          paddingBottom: '2px',
          transition: 'color 0.4s',
          whiteSpace: 'nowrap',
        }}
      >
        {item.label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ display: 'inline-flex', opacity: 0.7 }}
        >
          <ChevronDown size={11} strokeWidth={2} />
        </motion.span>
        <span
          className="absolute bottom-0 left-0 h-px bg-[#C9A65A] transition-all duration-300 ease-out"
          style={{ width: open ? '100%' : '0%' }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -6, scaleY: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-5 min-w-[220px] z-50"
            role="menu"
          >
            {/* Gold top line */}
            <div className="h-px w-full" style={{ background: 'rgba(201,166,90,0.8)' }} />
            <div
              style={{
                background: '#F6F1E7',
                boxShadow: '0 12px 40px rgba(11,59,54,0.18)',
              }}
            >
              {item.dropdown.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3.5 transition-all duration-200 focus-visible:outline-none focus-visible:bg-[#EDE7D9]"
                  style={{
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                    fontSize: '0.62rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#0B3B36',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(11,59,54,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#C9A65A'
                    e.currentTarget.style.paddingLeft = '1.75rem'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#0B3B36'
                    e.currentTarget.style.paddingLeft = '1.5rem'
                  }}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Mobile overlay link ────────────────────────────────────────────────────────
const overlayContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
}
const overlayItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_GOLD } },
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const textColor = scrolled ? '#0B3B36' : '#ffffff'
  const logoSubColor = scrolled ? 'rgba(11,59,54,0.5)' : 'rgba(255,255,255,0.5)'

  return (
    <>
      {/* ── Fixed bar ─────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out"
        style={{
          backgroundColor: scrolled ? 'rgba(246,241,231,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(1.2)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.2)' : 'none',
        }}
      >
        <div
          className="max-w-[1440px] mx-auto px-6 xl:px-10 h-[72px] flex items-center justify-between gap-6"
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="flex flex-col shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm"
          >
            <span
              style={{
                fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                fontSize: '1.3rem',
                fontWeight: 400,
                letterSpacing: '0.05em',
                color: textColor,
                lineHeight: 1.1,
                transition: 'color 0.5s',
              }}
            >
              Lakeshore City
            </span>
            <span
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.45rem',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: logoSubColor,
                lineHeight: 1,
                marginTop: '4px',
                transition: 'color 0.5s',
                whiteSpace: 'nowrap',
              }}
            >
              Pakistan's Most Premium Lakeside Marvel
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden xl:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {NAV.map((item) =>
              item.dropdown ? (
                <DesktopDropdown key={item.label} item={item} textColor={textColor} />
              ) : (
                <DesktopLink key={item.label} item={item as NavLink} textColor={textColor} />
              )
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden xl:inline-flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm"
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.62rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                border: '1px solid #C9A65A',
                color: '#C9A65A',
                padding: '0.55rem 1.35rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
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
              Contact Us
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={22} strokeWidth={1.5} style={{ color: textColor, transition: 'color 0.5s' }} />
            </button>
          </div>
        </div>

        {/* Thin gold hairline — appears on scroll */}
        <div
          className="h-px w-full transition-opacity duration-500"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(201,166,90,0.35) 30%, rgba(201,166,90,0.35) 70%, transparent)',
            opacity: scrolled ? 1 : 0,
          }}
        />
      </header>

      {/* ── Mobile fullscreen overlay ──────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ backgroundColor: '#0B3B36' }}
          >
            {/* Ambient gold glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(ellipse 80% 55% at 50% -10%, rgba(201,166,90,0.1) 0%, transparent 70%)',
              }}
            />

            {/* Top bar */}
            <div className="relative z-10 flex items-center justify-between px-6 h-[72px] shrink-0">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  color: '#F6F1E7',
                  textDecoration: 'none',
                }}
              >
                Lakeshore City
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} color="rgba(246,241,231,0.7)" />
              </button>
            </div>

            {/* Gold hairline */}
            <div
              className="mx-6 shrink-0"
              style={{ height: '1px', background: 'rgba(201,166,90,0.2)' }}
            />

            {/* Links */}
            <motion.nav
              variants={overlayContainer}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex-1 overflow-y-auto py-8 px-6"
              aria-label="Mobile navigation"
            >
              {NAV.map((item) => (
                <motion.div
                  key={item.label}
                  variants={overlayItem}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm text-left"
                        aria-expanded={mobileExpanded === item.label}
                      >
                        <span
                          style={{
                            fontFamily:
                              "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                            fontSize: 'clamp(1.75rem, 5.5vw, 2.5rem)',
                            fontWeight: 300,
                            color:
                              mobileExpanded === item.label
                                ? '#C9A65A'
                                : '#F6F1E7',
                            letterSpacing: '0.01em',
                            transition: 'color 0.3s',
                          }}
                        >
                          {item.label}
                        </span>
                        <motion.span
                          animate={{ rotate: mobileExpanded === item.label ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ display: 'inline-flex' }}
                        >
                          <ChevronDown
                            size={18}
                            strokeWidth={1.5}
                            color="rgba(201,166,90,0.6)"
                          />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-5 space-y-4">
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm"
                                  style={{
                                    fontFamily:
                                      "var(--font-body, 'Montserrat', sans-serif)",
                                    fontSize: '0.68rem',
                                    fontWeight: 400,
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(246,241,231,0.55)',
                                    textDecoration: 'none',
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'rgba(201,166,90,0.9)'
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color =
                                      'rgba(246,241,231,0.55)'
                                  }}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      onClick={() => setMobileOpen(false)}
                      className="block py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm"
                      style={{
                        fontFamily:
                          "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                        fontSize: 'clamp(1.75rem, 5.5vw, 2.5rem)',
                        fontWeight: 300,
                        color: '#F6F1E7',
                        letterSpacing: '0.01em',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#C9A65A'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#F6F1E7'
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Contact CTA at bottom of overlay */}
              <motion.div variants={overlayItem} className="pt-10 pb-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] rounded-sm"
                  style={{
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    border: '1px solid #C9A65A',
                    color: '#C9A65A',
                    padding: '0.85rem 2.5rem',
                    textDecoration: 'none',
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
                  Contact Us
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
