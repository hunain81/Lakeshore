import HeroSlider from '@/components/sections/HeroSlider'
import ThreePillars from '@/components/sections/ThreePillars'
import SignatureExperiences from '@/components/sections/SignatureExperiences'
import TrustBand from '@/components/sections/TrustBand'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <ThreePillars />
      <SignatureExperiences />
      <TrustBand />
      <FinalCTA />
    </main>
  )
}
