import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Careers' }
export default function CareerPage() {
  return (
    <main className="min-h-screen bg-brand-cream pt-24">
      <section className="py-24 lg:py-32">
        <div className="container-main">
          <p className="overline-label mb-4">Join the Team</p>
          <h1 className="section-heading mb-6">Careers at Lakeshore City</h1>
          <div className="gold-divider mt-6" />
        </div>
      </section>
    </main>
  )
}
