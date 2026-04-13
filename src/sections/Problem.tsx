import { ScrollReveal } from '@/components/ScrollReveal';
import { AlertTriangle, Database, Bell } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Reactive maintenance',
    description:
      'Engineers discover failures AFTER they happen. Average incident costs $50,000+ and 15+ hours to resolve.',
  },
  {
    icon: Database,
    title: 'Scattered data',
    description:
      'UPS, CRAC, generators, PDUs — each device has its own software. No unified view. No cross-device AI intelligence.',
  },
  {
    icon: Bell,
    title: 'No early warning',
    description:
      'Standard thresholds miss the subtle patterns that precede failures. By the time the alarm sounds, it\'s already too late.',
  },
];

export function Problem() {
  return (
    <section className="py-24 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="eyebrow mb-4">// THE PROBLEM</div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white mb-16">
            Data centers are flying blind
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="h-full p-6 rounded-2xl bg-[#121416] border border-white/5 card-hover">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b4a]/10 flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-[#ff6b4a]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-sm text-[#888] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center">
            <p className="text-[#c2e0d8] text-sm">
              Pixsence changes this <span className="inline-block animate-bounce">↓</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
