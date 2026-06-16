import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PersistentGemScene } from '@/components/three/PersistentGemScene'
import { HeroSection } from '@/sections/HeroSection'
import { BrandStorySection } from '@/sections/BrandStorySection'
import { GemsShowcaseSection } from '@/sections/GemsShowcaseSection'
import { CinematicVideoSection } from '@/sections/CinematicVideoSection'
import { InteractiveExperienceSection } from '@/sections/InteractiveExperienceSection'
import { StatisticsSection } from '@/sections/StatisticsSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { CTASection } from '@/sections/CTASection'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0A0A0A' }}>
      <PersistentGemScene />
      <Navbar />
      <HeroSection />
      <BrandStorySection />
      <GemsShowcaseSection />
      <CinematicVideoSection />
      <InteractiveExperienceSection />
      <StatisticsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
