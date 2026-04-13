import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  Brain, 
  Monitor, 
  BarChart3, 
  TrendingUp, 
  Settings, 
  BookOpen 
} from 'lucide-react';

const modules = [
  {
    icon: Brain,
    title: 'AI Failure Prediction',
    badge: 'Core',
    badgeColor: 'bg-[#c2e0d8]/10 text-[#c2e0d8]',
    description:
      'Detects anomalies 72 hours before failure using historical patterns and real-time telemetry. Prioritized ETA countdown on every device.',
  },
  {
    icon: Monitor,
    title: 'Real-Time Monitor',
    badge: 'Core',
    badgeColor: 'bg-[#c2e0d8]/10 text-[#c2e0d8]',
    description:
      'Live equipment dashboard, 10-second refresh. ALARM cards pulse. Every metric, every device, one screen.',
  },
  {
    icon: BarChart3,
    title: 'Executive Dashboard',
    badge: 'Core',
    badgeColor: 'bg-[#c2e0d8]/10 text-[#c2e0d8]',
    description:
      'PUE, health score, MTTR, and ROI at a glance. Built for CTOs and site managers.',
  },
  {
    icon: TrendingUp,
    title: 'Efficiency & ROI',
    badge: 'Analytics',
    badgeColor: 'bg-[#facc15]/10 text-[#facc15]',
    description:
      'Track PUE, DCiE, CO₂ footprint. See exactly how much money Pixsence saved you this month.',
  },
  {
    icon: Settings,
    title: 'Rules Designer',
    badge: 'Operations',
    badgeColor: 'bg-[#888]/20 text-[#888]',
    description:
      '40+ configurable alert rules. Visual threshold editor. Multi-channel dispatch: Slack, email, Telegram, PagerDuty.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base RAG',
    badge: 'AI',
    badgeColor: 'bg-purple-500/10 text-purple-400',
    description:
      'AI search across equipment datasheets and manuals. Ask in plain language, get exact page references.',
  },
];

export function Modules() {
  return (
    <section id="modules" className="py-24 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="eyebrow mb-4">// PLATFORM CAPABILITIES</div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Everything your team needs.
          </h2>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#888] mb-12">
            Nothing they don't.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="h-full p-6 rounded-2xl bg-[#121416] border border-white/5 card-hover group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#c2e0d8]/10 transition-colors">
                    <module.icon className="w-6 h-6 text-[#c2e0d8]" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium ${module.badgeColor}`}>
                    {module.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {module.title}
                </h3>
                <p className="text-sm text-[#888] leading-relaxed">
                  {module.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
