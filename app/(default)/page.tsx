import Hero from '../../components/hero'
import Features from '../../components/features-planet'
// Добавляем /ui/ в путь, так как файл лежит там
import Newsletter from '../../components/ui/newsletter' 

export const metadata = {
  title: 'Pixsence - Modular on-prem Risk Platform',
  description: 'Turning fragmented signals into operational truth for critical infrastructure.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Newsletter />
    </>
  )
}
