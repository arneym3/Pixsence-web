import { ArrowRight, Play } from 'lucide-react';
import { DashboardMockup } from '@/components/DashboardMockup';

const heroWords = ['Predict', 'failures.', 'Protect', 'uptime.', 'Cut', 'energy', 'waste.'];

const metrics = [
  { value: '< 30', unit: 'min', label: 'setup time' },
  { value: '72h', unit: 'ahead', label: 'failure prediction' },
  { value: '−34%', unit: '', label: 'MTTR improvement' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 teal-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0e0e]/50 to-[#0e0e0e]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="eyebrow mb-6">// AI-POWERED DATA CENTER INTELLIGENCE</div>

            {/* Headline with word animation */}
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              {heroWords.map((word, index) => (
                <span
                  key={index}
                  className="hero-word inline-block mr-[0.25em]"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-[#888] leading-relaxed mb-8 max-w-md">
              Pixsence monitors your data center equipment in real-time, predicts
              failures before they happen, and gives engineers AI-powered insights
              to act fast.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="mailto:arneym3@gmail.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="btn-secondary inline-flex items-center gap-2">
                <Play className="w-4 h-4" />
                See How It Works
              </button>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap gap-8">
              {metrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex items-baseline gap-1">
                    <span className="font-mono text-2xl text-[#facc15]">
                      {metric.value}
                    </span>
                    {metric.unit && (
                      <span className="font-mono text-sm text-[#c2e0d8]">
                        {metric.unit}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#888]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Dashboard Mockup */}
          <div className="relative">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
