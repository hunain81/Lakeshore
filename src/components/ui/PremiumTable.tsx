'use client'

import React, { useState } from 'react'

interface PremiumTableProps {
  title?: string
  headers: string[]
  rows: (string | number)[][]
  note?: string
  dimmed?: boolean
}

export default function PremiumTable({
  title,
  headers,
  rows,
  note,
  dimmed = false,
}: PremiumTableProps) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  const fmt = (cell: string | number): string =>
    typeof cell === 'number' ? cell.toLocaleString('en-US') : cell

  return (
    <div style={{ opacity: dimmed ? 0.68 : 1, transition: 'opacity 0.3s ease' }}>
      {title && (
        <h3
          style={{
            fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)",
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            fontWeight: 400,
            color: '#1C1C1C',
            marginBottom: '1rem',
          }}
        >
          {title}
        </h3>
      )}

      {/* ── Desktop table ─────────────────────────────────────────────── */}
      <div className="hidden sm:block overflow-x-auto" style={{ borderRadius: '2px' }}>
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: '#0B3B36' }}>
              {headers.map((h, i) => (
                <th
                  key={i}
                  style={{
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                    fontSize: '0.57rem',
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#C9A65A',
                    padding: '0.9rem 1.2rem',
                    textAlign: i === 0 ? 'left' : 'right',
                    whiteSpace: 'nowrap',
                    borderBottom: '1px solid rgba(201,166,90,0.2)',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                onMouseEnter={() => setHoveredRow(ri)}
                onMouseLeave={() => setHoveredRow(null)}
                style={{
                  backgroundColor:
                    hoveredRow === ri
                      ? 'rgba(201,166,90,0.07)'
                      : ri % 2 === 0
                      ? '#F6F1E7'
                      : '#EDE7D9',
                  transition: 'background-color 0.22s ease',
                  cursor: 'default',
                }}
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    style={{
                      fontFamily:
                        ci === 0
                          ? "var(--font-display, 'Cormorant Garamond', Georgia, serif)"
                          : "var(--font-body, 'Montserrat', sans-serif)",
                      fontSize: ci === 0 ? '1.05rem' : '0.82rem',
                      fontWeight: ci === 0 ? 500 : ci === row.length - 1 ? 600 : 400,
                      color: ci === row.length - 1 ? '#C9A65A' : '#1C1C1C',
                      padding: '0.85rem 1.2rem',
                      textAlign: ci === 0 ? 'left' : 'right',
                      borderBottom: '1px solid rgba(201,166,90,0.08)',
                    }}
                  >
                    {fmt(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mobile stacked cards ───────────────────────────────────────── */}
      <div className="sm:hidden flex flex-col gap-3">
        {rows.map((row, ri) => (
          <div
            key={ri}
            style={{
              backgroundColor: '#F6F1E7',
              border: '1px solid rgba(201,166,90,0.15)',
              borderTop: '2px solid #C9A65A',
              padding: '1rem 1.25rem',
            }}
          >
            {row.map((cell, ci) => (
              <div
                key={ci}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  padding: '0.4rem 0',
                  borderBottom:
                    ci < row.length - 1 ? '1px solid rgba(201,166,90,0.08)' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
                    fontSize: '0.53rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(28,28,28,0.42)',
                    flexShrink: 0,
                    marginRight: '0.75rem',
                  }}
                >
                  {headers[ci]}
                </span>
                <span
                  style={{
                    fontFamily:
                      ci === 0
                        ? "var(--font-display, 'Cormorant Garamond', Georgia, serif)"
                        : "var(--font-body, 'Montserrat', sans-serif)",
                    fontSize: ci === 0 ? '1.05rem' : '0.82rem',
                    fontWeight: ci === row.length - 1 ? 600 : 400,
                    color: ci === row.length - 1 ? '#C9A65A' : '#1C1C1C',
                    textAlign: 'right',
                  }}
                >
                  {fmt(cell)}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {note && (
        <p
          style={{
            fontFamily: "var(--font-body, 'Montserrat', sans-serif)",
            fontSize: '0.68rem',
            fontWeight: 300,
            color: 'rgba(28,28,28,0.42)',
            marginTop: '0.875rem',
            fontStyle: 'italic',
          }}
        >
          {note}
        </p>
      )}
    </div>
  )
}
