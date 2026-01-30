import Hero from '@/components/hero'
import Features from '@/components/features-planet'
// 1. Импортируем партнеров
import Partners from '@/components/partners'
import Newsletter from '@/components/newsletter'

export const metadata = {
  title: 'Pixsence | Modular On-Prem Risk Platform',
  description: 'Turning fragmented signals into operational truth for critical infrastructure.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* 2. Вставляем блок партнеров сюда, перед Newsletter */}
      <Partners />
      <Newsletter />
    </>
  )
}
