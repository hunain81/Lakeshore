import type { Metadata } from 'next'
import { cormorant, montserrat } from '@/lib/fonts'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Lakeshore City — Pakistan's Most Premium Lakeside Development",
    template: '%s | Lakeshore City',
  },
  description:
    'Lakeshore City at Khanpur Dam, Islamabad — an ultra-luxury lakeside residential and lifestyle development redefining premium living in Pakistan.',
  keywords: ['Lakeshore City', 'Khanpur Dam', 'luxury real estate', 'Pakistan', 'lakeside'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Lakeshore City',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
