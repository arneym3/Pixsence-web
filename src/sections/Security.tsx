import { ScrollReveal } from '@/components/ScrollReveal';
import { Server, WifiOff, Shield, Lock } from 'lucide-react';

const features = [
  {
    icon: Server,
    title: 'On-Premise Only',
    description:
      'Your data never leaves your perimeter. No cloud dependency. Full control over your infrastructure data.',
  },
  {
    icon: WifiOff,
    title: 'Air-Gap Ready',
    description:
      'Operates without internet connectivity. Modbus direct connection. Designed for isolated secure environments.',
  },
  {
    icon: Shield,
    title: 'AIFC Compliant',
    description:
      'Meets Astana International Financial Centre standards. English law framework. Kazakhstan-first compliance.',
  },
  {
    icon: Lock,
    title: 'Tamper-Evident Audit',
    description:
      'Cryptographically signed audit trail of every action. Full accountability for critical infrastructure events.',
  },
];

export function Security() {
  return (
    <section id="security" className="py-24 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="eyebrow mb-4">// ENTERPRISE GRADE</div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Built for critical
          </h2>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#888] mb-16">
            infrastructure.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="h-full p-6 rounded-2xl bg-[#121416] border border-white/5 card-hover">
                <div className="w-12 h-12 rounded-xl bg-[#c2e0d8]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#c2e0d8]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#888] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
