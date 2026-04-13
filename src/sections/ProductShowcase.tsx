import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import { Activity, Clock, CheckCircle, AlertTriangle, Gauge, TrendingDown, DollarSign, Zap } from 'lucide-react';

const tabs = [
  { id: 'monitor', label: 'Monitor' },
  { id: 'forecast', label: 'AI Forecast' },
  { id: 'executive', label: 'Executive' },
];

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('monitor');

  return (
    <section className="py-24 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="eyebrow mb-4">// SEE IT IN ACTION</div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            From raw telemetry
          </h2>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#888] mb-12">
            to actionable intelligence.
          </h2>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={100}>
          <div className="flex gap-2 mb-8 p-1 rounded-xl bg-[#121416] border border-white/5 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tab Content */}
        <ScrollReveal delay={150}>
          <div className="relative min-h-[400px]">
            {/* Monitor Tab */}
            {activeTab === 'monitor' && (
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  {/* Device cards */}
                  <div className="p-4 rounded-xl bg-[#121416] border border-[#ff6b4a]/50 alarm-pulse">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#ff6b4a]/10 flex items-center justify-center">
                          <AlertTriangle className="w-5 h-5 text-[#ff6b4a]" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">DGU-M1</div>
                          <div className="text-xs text-[#888]">Caterpillar C32</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded bg-[#ff6b4a]/10 text-[#ff6b4a] text-xs font-mono">
                        ALARM
                      </span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-[#ff6b4a]/5">
                      <Clock className="w-4 h-4 text-[#ff6b4a]" />
                      <span className="font-mono text-sm text-[#ff6b4a]">
                        AI ETA 04:22:11
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#121416] border border-[#facc15]/30">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#facc15]/10 flex items-center justify-center">
                          <Activity className="w-5 h-5 text-[#facc15]" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">UPS-A2</div>
                          <div className="text-xs text-[#888]">Vertiv Liebert</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded bg-[#facc15]/10 text-[#facc15] text-xs font-mono">
                        WARN
                      </span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-[#facc15]/5">
                      <Clock className="w-4 h-4 text-[#facc15]" />
                      <span className="font-mono text-sm text-[#facc15]">
                        AI ETA 22:15:00
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#121416] border border-[#4ade80]/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#4ade80]/10 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-[#4ade80]" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">CRAC-01</div>
                          <div className="text-xs text-[#888]">Schneider</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded bg-[#4ade80]/10 text-[#4ade80] text-xs font-mono">
                        OK
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Real-time status of every device
                  </h3>
                  <p className="text-[#888] leading-relaxed mb-6">
                    AI ETA countdown tells engineers exactly how long before predicted
                    failure. Prioritized by urgency, colored by severity.
                  </p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="font-mono text-2xl text-[#facc15]">10s</div>
                      <div className="text-xs text-[#888]">refresh rate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-2xl text-[#c2e0d8]">∞</div>
                      <div className="text-xs text-[#888]">devices</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AI Forecast Tab */}
            {activeTab === 'forecast' && (
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="p-6 rounded-2xl bg-[#121416] border-l-4 border-[#c2e0d8]">
                  <div className="flex items-center gap-2 mb-4">
                    <Activity className="w-5 h-5 text-[#c2e0d8]" />
                    <span className="font-mono text-sm text-[#c2e0d8]">
                      WHY AI DECIDED THIS
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-sm text-[#888] leading-relaxed">
                      Generator exhaust temperature has risen 8°C over the past 72 hours,
                      following a pattern that preceded 3 similar failures in the last 6 months.
                    </p>
                    <p className="text-sm text-[#888] leading-relaxed">
                      Oil pressure trending down. Vibration spectrum shows bearing degradation
                      signature at 4.2kHz.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#1a1a1a] mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#888]">Predicted failure</span>
                      <span className="font-mono text-sm text-[#ff6b4a]">68h</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#888]">Recommended action</span>
                      <span className="text-sm text-[#facc15]">attention</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 py-2 rounded-lg bg-white/5 text-sm text-white hover:bg-white/10 transition-colors">
                      Acknowledge
                    </button>
                    <button className="flex-1 py-2 rounded-lg bg-[#c2e0d8]/10 text-sm text-[#c2e0d8] hover:bg-[#c2e0d8]/20 transition-colors">
                      Create Ticket
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Every AI decision explained
                  </h3>
                  <p className="text-[#888] leading-relaxed mb-6">
                    Engineers understand why, not just what. Full reasoning with
                    historical patterns, sensor correlations, and recommended actions.
                  </p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="font-mono text-2xl text-[#4ade80]">94%</div>
                      <div className="text-xs text-[#888]">AI confidence</div>
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-2xl text-[#c2e0d8]">72h</div>
                      <div className="text-xs text-[#888]">avg. warning time</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Executive Tab */}
            {activeTab === 'executive' && (
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#121416] border border-white/5 text-center">
                    <Gauge className="w-8 h-8 text-[#c2e0d8] mx-auto mb-3" />
                    <div className="font-mono text-3xl text-white mb-1">1.42</div>
                    <div className="text-xs text-[#888]">PUE</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#121416] border border-white/5 text-center">
                    <Activity className="w-8 h-8 text-[#4ade80] mx-auto mb-3" />
                    <div className="font-mono text-3xl text-white mb-1">85.5</div>
                    <div className="text-xs text-[#888]">Health Score</div>
                  </div>
                  <div className="col-span-2 p-5 rounded-2xl bg-[#121416] border border-white/5">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Zap className="w-4 h-4 text-[#facc15]" />
                          <AnimatedNumber value={14} className="text-2xl text-[#facc15]" />
                        </div>
                        <div className="text-xs text-[#888]">Prevented/month</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <DollarSign className="w-4 h-4 text-[#4ade80]" />
                          <AnimatedNumber value={68} prefix="$" suffix="k" className="text-2xl text-[#4ade80]" />
                        </div>
                        <div className="text-xs text-[#888]">Avg. savings</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <TrendingDown className="w-4 h-4 text-[#c2e0d8]" />
                          <span className="font-mono text-2xl text-[#c2e0d8]">10.4</span>
                        </div>
                        <div className="text-xs text-[#888]">MTTR (min)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    One screen. Complete picture.
                  </h3>
                  <p className="text-[#888] leading-relaxed mb-6">
                    Built for leadership, trusted by engineers. PUE, efficiency metrics,
                    ROI tracking, and operational health — all in one dashboard.
                  </p>
                  <div className="p-4 rounded-xl bg-[#121416] border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#888]">Monthly ROI</span>
                      <span className="font-mono text-lg text-[#4ade80]">+340%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-[#c2e0d8] to-[#4ade80]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal delay={200}>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <span className="font-mono text-2xl text-[#facc15]">14</span>
              <span className="text-sm text-[#888] ml-2">incidents prevented/month</span>
            </div>
            <div className="text-center">
              <span className="font-mono text-2xl text-[#4ade80]">$68k</span>
              <span className="text-sm text-[#888] ml-2">average savings</span>
            </div>
            <div className="text-center">
              <span className="font-mono text-2xl text-[#c2e0d8]">94%</span>
              <span className="text-sm text-[#888] ml-2">AI confidence</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
