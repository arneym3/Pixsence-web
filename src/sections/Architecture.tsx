import { ScrollReveal } from '@/components/ScrollReveal';
import { Check, ArrowRight } from 'lucide-react';

const flowSteps = [
  {
    title: 'Equipment Layer',
    items: ['UPS', 'CRAC', 'PDU', 'Generators', 'Power Meters'],
    protocols: ['Modbus', 'OPC UA'],
  },
  {
    title: 'Data Layer',
    items: ['Kafka Streams', 'TimescaleDB', 'Redis Cache'],
    protocols: ['Real-time ingest'],
  },
  {
    title: 'AI Layer',
    items: ['AI Agent', 'Anomaly Detection', 'Failure Prediction', 'ETA Calculation'],
    protocols: ['ML Models'],
  },
  {
    title: 'Action Layer',
    items: ['Alerts', 'Tickets', 'Reports', 'Dashboard'],
    protocols: ['Multi-channel'],
  },
];

const facts = [
  'Vendor-agnostic: Vertiv, Schneider, APC, Caterpillar',
  '20+ Docker containers, single compose deploy',
  'EN / RU / KK localization',
  'REST API for CMDB integration',
];

export function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="eyebrow mb-4">// ARCHITECTURE</div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white mb-16">
            Built for on-premise.
            <br />
            <span className="text-[#888]">Designed for scale.</span>
          </h2>
        </ScrollReveal>

        {/* Flow Diagram */}
        <ScrollReveal delay={100}>
          <div className="relative mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {flowSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="p-5 rounded-2xl bg-[#121416] border border-white/5 h-full">
                    <div className="font-mono text-xs text-[#c2e0d8] mb-3">
                      {step.title}
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {step.items.map((item, i) => (
                        <li key={i} className="text-sm text-white">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t border-white/5">
                      <span className="text-[10px] text-[#888] font-mono">
                        {step.protocols}
                      </span>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  {index < flowSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-[#c2e0d8]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tech badges */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Modbus / OPC UA', 'Kafka + TimescaleDB', 'On-Premise', 'Air-Gap Ready'].map(
              (badge, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10 text-sm text-[#c2e0d8]"
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </ScrollReveal>

        {/* Facts */}
        <ScrollReveal delay={300}>
          <div className="grid sm:grid-cols-2 gap-4">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#121416] border border-white/5"
              >
                <Check className="w-5 h-5 text-[#4ade80] flex-shrink-0" />
                <span className="text-sm text-[#888]">{fact}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
