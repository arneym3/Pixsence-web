import Hero from '@/components/hero'
import Features from '@/components/features-planet'
import Partners from '@/components/partners'
// Проверь, чтобы newsletter лежал именно по этому пути:
import Newsletter from '@/components/ui/newsletter' 

export const metadata = {
  title: 'Pixsence | Modular On-Prem Risk Platform',
  description: 'Turning fragmented signals into operational truth for critical infrastructure.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Partners />
      <Newsletter />
    </>
  );
}
