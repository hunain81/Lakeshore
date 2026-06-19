'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

// Social icon type
type SocialIconProps = { size?: number; strokeWidth?: number }

// Inline SVGs for branded social icons (not in lucide-react)
const FacebookIcon = (_props: SocialIconProps) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const XIcon = (_props: SocialIconProps) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const InstagramIcon = (_props: SocialIconProps) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)

// ─── Data ──────────────────────────────────────────────────────────────────────
const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Payment Plan', href: '/payment-plan' },
  { label: 'Location', href: '/location' },
  { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '/contact' },
]

const PROJECTS = [
  {
    label: 'Lakeshore Residencia',
    href: '/residencia',
    desc: 'Luxury apartments & villas',
  },
  {
    label: 'Lakeshore Farmhouses',
    href: '/farms',
    desc: 'Private farm estates',
  },
  {
    label: 'Lakeshore Club',
    href: '/club',
    desc: 'Members-only sanctuary',
  },
]

const BOOKINGS = [
  { label: 'Sales Partner Registration', href: '/booking/partner' },
  { label: 'Client Booking Form', href: '/booking/client' },
]

const SOCIAL = [
  {
    Icon: FacebookIcon,
    href: 'https://facebook.com/lakeshorecity',
    label: 'Follow us on Facebook',
  },
  {
    Icon: XIcon,
    href: 'https://x.com/lakeshorecity',
    label: 'Follow us on X',
  },
  {
    Icon: InstagramIcon,
    href: 'https://instagram.com/lakeshorecity',
    label: 'Follow us on Instagram',
  },
  {
    Icon: () => <Mail size={14} strokeWidth={1.5} />,
    href: 'mailto:contact@lakeshorecity.com',
    label: 'Email us',
  },
]

// ─── Shared styles ─────────────────────────────────────────────────────────────
const colTitle: object = {
  fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
  fontSize: '0.6rem',
  fontWeight: 600,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: '#F6F1E7',
  marginBottom: '0.25rem',
}

const linkBase: object = {
  fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
  fontSize: '0.72rem',
  fontWeight: 300,
  color: 'rgba(246,241,231,0.58)',
  textDecoration: 'none',
  display: 'block',
  transition: 'color 0.25s, padding-left 0.25s',
}

// ─── Footer component (Server Component — no 'use client' needed) ──────────────
export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0B3B36' }}>
      {/* Top gold hairline */}
      <div
        style={{
          height: '1px',
          background:
            'linear-gradient(to right, transparent, rgba(201,166,90,0.4) 20%, rgba(201,166,90,0.4) 80%, transparent)',
        }}
      />

      {/* Main grid */}
      <div className="max-w-[1440px] mx-auto px-6 xl:px-10 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-14 lg:gap-8">

          {/* ── Column 1 — Brand (spans 2 cols on lg) ──────────────── */}
          <div className="sm:col-span-2 lg:col-span-2">
            {/* Wordmark */}
            <div className="mb-6">
              <h2
                style={{
                  fontFamily:
                    "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
                  fontSize: '2rem',
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  color: '#F6F1E7',
                  lineHeight: 1.05,
                  marginBottom: '6px',
                }}
              >
                Lakeshore City
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                  fontSize: '0.47rem',
                  fontWeight: 400,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C9A65A',
                  opacity: 0.8,
                }}
              >
                Pakistan's Most Premium Lakeside Marvel
              </p>
            </div>

            {/* Gold hairline */}
            <div
              style={{
                width: '3rem',
                height: '1px',
                backgroundColor: '#C9A65A',
                opacity: 0.5,
                marginBottom: '1.5rem',
              }}
            />

            {/* Brand blurb */}
            <p
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.78rem',
                fontWeight: 300,
                lineHeight: 1.9,
                color: 'rgba(246,241,231,0.6)',
                maxWidth: '34ch',
                marginBottom: '1.75rem',
              }}
            >
              A landmark development at Khanpur Dam, near Islamabad. Lakeshore
              City redefines luxury lakeside living in Pakistan — where nature,
              architecture, and community converge.
            </p>

            {/* Developer credit */}
            <p
              style={{
                fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                fontSize: '0.58rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(201,166,90,0.55)',
                marginBottom: '1.75rem',
              }}
            >
              A project by Al Sadat Group
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A65A] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0B3B36] rounded-sm"
                  style={{
                    width: 36,
                    height: 36,
                    border: '1px solid rgba(201,166,90,0.28)',
                    color: 'rgba(246,241,231,0.45)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C9A65A'
                    e.currentTarget.style.color = '#C9A65A'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(201,166,90,0.28)'
                    e.currentTarget.style.color = 'rgba(246,241,231,0.45)'
                  }}
                >
                  <Icon size={14} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2 — Quick Links ─────────────────────────────── */}
          <div>
            <h3 style={colTitle}>Quick Links</h3>
            <div
              style={{
                width: '2rem',
                height: '1px',
                background: 'rgba(201,166,90,0.35)',
                marginBottom: '1.5rem',
                marginTop: '0.5rem',
              }}
            />
            <ul className="space-y-3.5" role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={linkBase}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'rgba(201,166,90,0.85)'
                      e.currentTarget.style.paddingLeft = '0.4rem'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(246,241,231,0.58)'
                      e.currentTarget.style.paddingLeft = '0'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 — Our Projects ───────────────────────────── */}
          <div>
            <h3 style={colTitle}>Our Projects</h3>
            <div
              style={{
                width: '2rem',
                height: '1px',
                background: 'rgba(201,166,90,0.35)',
                marginBottom: '1.5rem',
                marginTop: '0.5rem',
              }}
            />
            <ul className="space-y-5" role="list">
              {PROJECTS.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    style={{ textDecoration: 'none' }}
                    onMouseEnter={(e) => {
                      const title = e.currentTarget.querySelector<HTMLSpanElement>('.proj-title')
                      if (title) title.style.color = '#C9A65A'
                    }}
                    onMouseLeave={(e) => {
                      const title = e.currentTarget.querySelector<HTMLSpanElement>('.proj-title')
                      if (title) title.style.color = 'rgba(246,241,231,0.58)'
                    }}
                  >
                    <span
                      className="proj-title"
                      style={{
                        fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                        fontSize: '0.72rem',
                        fontWeight: 400,
                        color: 'rgba(246,241,231,0.58)',
                        display: 'block',
                        transition: 'color 0.25s',
                      }}
                    >
                      {p.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                        fontSize: '0.58rem',
                        fontWeight: 300,
                        color: 'rgba(246,241,231,0.28)',
                        display: 'block',
                        marginTop: '2px',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {p.desc}
                    </span>
                  </Link>
                </li>
              ))}

              {/* Booking sub-links */}
              <li style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1rem' }}>
                <p style={{ ...colTitle, marginBottom: '0.75rem', opacity: 0.7 }}>
                  Bookings
                </p>
                <ul className="space-y-2.5" role="list">
                  {BOOKINGS.map((b) => (
                    <li key={b.href}>
                      <Link
                        href={b.href}
                        style={linkBase}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'rgba(201,166,90,0.85)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'rgba(246,241,231,0.58)'
                        }}
                      >
                        {b.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* ── Column 4 — Contact ────────────────────────────────── */}
          <div>
            <h3 style={colTitle}>Get in Touch</h3>
            <div
              style={{
                width: '2rem',
                height: '1px',
                background: 'rgba(201,166,90,0.35)',
                marginBottom: '1.5rem',
                marginTop: '0.5rem',
              }}
            />
            <ul className="space-y-5" role="list">
              {/* Address */}
              <li className="flex gap-3 items-start">
                <MapPin
                  size={13}
                  strokeWidth={1.5}
                  style={{ color: '#C9A65A', flexShrink: 0, marginTop: 3 }}
                  aria-hidden="true"
                />
                <address
                  style={{
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                    fontSize: '0.72rem',
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: 'rgba(246,241,231,0.58)',
                    fontStyle: 'normal',
                  }}
                >
                  1st Floor Yasin Plaza,
                  <br />
                  Blue Area, Islamabad
                </address>
              </li>

              {/* Email */}
              <li className="flex gap-3 items-start">
                <Mail
                  size={13}
                  strokeWidth={1.5}
                  style={{ color: '#C9A65A', flexShrink: 0, marginTop: 3 }}
                  aria-hidden="true"
                />
                <a
                  href="mailto:contact@lakeshorecity.com"
                  style={{
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                    fontSize: '0.72rem',
                    fontWeight: 300,
                    color: 'rgba(246,241,231,0.58)',
                    textDecoration: 'none',
                    transition: 'color 0.25s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'rgba(201,166,90,0.85)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(246,241,231,0.58)'
                  }}
                >
                  contact@lakeshorecity.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex gap-3 items-center">
                <Phone
                  size={13}
                  strokeWidth={1.5}
                  style={{ color: '#C9A65A', flexShrink: 0 }}
                  aria-hidden="true"
                />
                <a
                  href="tel:+923357775253"
                  style={{
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                    fontSize: '0.72rem',
                    fontWeight: 300,
                    color: 'rgba(246,241,231,0.58)',
                    textDecoration: 'none',
                    transition: 'color 0.25s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'rgba(201,166,90,0.85)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(246,241,231,0.58)'
                  }}
                >
                  +92 335 7775253
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Trust bar ─────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: '1px solid rgba(201,166,90,0.15)',
          borderBottom: '1px solid rgba(201,166,90,0.15)',
          padding: '1rem 0',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 xl:px-10">
          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
              fontSize: '0.58rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(201,166,90,0.65)',
            }}
          >
            NOC Approved&ensp;&middot;&ensp;16,000 Kanals&ensp;&middot;&ensp;NOC No.&nbsp;145-50
          </p>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────── */}
      <div style={{ backgroundColor: '#061e1b' }}>
        <div className="max-w-[1440px] mx-auto px-6 xl:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
              fontSize: '0.58rem',
              fontWeight: 300,
              letterSpacing: '0.1em',
              color: 'rgba(246,241,231,0.3)',
            }}
          >
            © {new Date().getFullYear()} Lakeshore City. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex gap-6">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Use', href: '/terms' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                  fontSize: '0.58rem',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  color: 'rgba(246,241,231,0.3)',
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'rgba(201,166,90,0.65)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(246,241,231,0.3)'
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}