import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export const metadata = {
  title: 'Pixsence - Modular on-prem Risk Platform',
  description: 'Turning fragmented signals into operational truth for critical infrastructure.',
}

export default function Home() {
  return (
    <>
      <Hero 
        title="Pixsence"
        subtitle="Modular on-prem Operations & Engineering Risk Platform"
        description="We turn fragmented signals (sensors, power quality, video, logs) into asset models and tamper-evident audit trails. Built for air-gapped environments."
      />
      
      {/* Секция с проблемами и решением */}
      <Zigzag 
        title="Operations teams don't need more dashboards"
        subtitle="They need operational truth. Pixsence is a standalone layer above your existing tools."
      />

      {/* Секция с модулями (GroundGuard, PowerQuality и т.д.) */}
      <Features 
        title="The Pixsence Ecosystem"
        subtitle="Enable modules as needed. Start with the basics, scale to AI-powered forecasting."
      />

      {/* Твой призыв к действию */}
      <Newsletter 
        title="Ready for a Pilot?"
        subtitle="Request access to the deck or schedule a technical deep-dive for your facility."
      />
    </>
  )
}
