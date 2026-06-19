import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Reserve' }
export default function BookingPage() {
  return (
    <main className="min-h-screen bg-brand-teal-900 pt-24">
      <section className="py-24 lg:py-32">
        <div className="container-main">
          <p className="overline-label mb-4">Secure Your Place</p>
          <h1 className="section-heading-light mb-6">Reserve a Residence</h1>
          <div className="gold-divider mt-6" />
        </div>
      </section>
    </main>
  )
}
