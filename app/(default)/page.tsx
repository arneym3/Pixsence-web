import Hero from '@/components/hero'
import Features from '@/components/features-planet'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'

export const metadata = {
  title: 'Pixsence - Modular on-prem Risk Platform',
  description: 'Turning fragmented signals into operational truth for critical infrastructure.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Features />
      <Newsletter />
    </>
  )
}
