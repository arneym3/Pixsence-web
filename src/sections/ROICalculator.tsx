import { useState, useMemo } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight, TrendingUp, Shield, Clock, DollarSign } from 'lucide-react';

export function ROICalculator() {
  const [deviceCount, setDeviceCount] = useState(50);

  // Pricing tiers
  const getPricePerDevice = (count: number) => {
    if (count <= 25) return 50;
    if (count <= 75) return 45;
    if (count <= 150) return 40;
    return 35;
  };

  // Calculations
  const calculations = useMemo(() => {
    const avgIncidentCost = 50000;
    const incidentsPerDevice = 0.2; // per year
    const savingsRate = 0.85;
    const pricePerDevice = getPricePerDevice(deviceCount);

    const totalIncidents = Math.round(deviceCount * incidentsPerDevice);
    const preventedIncidents = Math.round(totalIncidents * savingsRate);
    const annualSavings = preventedIncidents * avgIncidentCost;
    const pixsenceCost = deviceCount * pricePerDevice * 12;
    const netSavings = annualSavings - pixsenceCost;
    const roi = pixsenceCost > 0 ? (netSavings / pixsenceCost) : 0;

    return {
      annualSavings,
      pixsenceCost,
      netSavings,
      roi,
      preventedIncidents,
      pricePerDevice,
    };
  }, [deviceCount]);

  const formatCurrency = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}k`;
    return `$${value}`;
  };

  return (
    <section className="py-24 bg-[#0e0e0e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="eyebrow mb-4">// ROI CALCULATOR</div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            See your potential savings
          </h2>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#888] mb-12">
            before you buy.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="p-8 rounded-3xl bg-[#121416] border border-white/5">
            {/* Slider */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#888]">Number of devices</span>
                <span className="font-mono text-2xl text-[#facc15]">{deviceCount}</span>
              </div>
              <input
                type="range"
                min="25"
                max="300"
                step="5"
                value={deviceCount}
                onChange={(e) => setDeviceCount(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-xs text-[#666]">
                <span>25</span>
                <span>100</span>
                <span>200</span>
                <span>300</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 rounded-xl bg-[#1a1a1a]">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-[#facc15]" />
                </div>
                <div className="font-mono text-2xl text-[#facc15] mb-1">
                  {formatCurrency(calculations.annualSavings)}
                </div>
                <div className="text-xs text-[#888]">Annual savings</div>
              </div>

              <div className="text-center p-4 rounded-xl bg-[#1a1a1a]">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-[#4ade80]" />
                </div>
                <div className="font-mono text-2xl text-[#4ade80] mb-1">
                  {calculations.roi.toFixed(1)}×
                </div>
                <div className="text-xs text-[#888]">ROI</div>
              </div>

              <div className="text-center p-4 rounded-xl bg-[#1a1a1a]">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-[#c2e0d8]" />
                </div>
                <div className="font-mono text-2xl text-white mb-1">
                  {calculations.preventedIncidents}
                </div>
                <div className="text-xs text-[#888]">Incidents prevented/year</div>
              </div>

              <div className="text-center p-4 rounded-xl bg-[#1a1a1a]">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-[#888]" />
                </div>
                <div className="font-mono text-2xl text-[#888] mb-1">
                  {formatCurrency(calculations.pixsenceCost)}
                </div>
                <div className="text-xs text-[#888]">Pixsence annual cost</div>
              </div>
            </div>

            {/* Price per device */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-sm text-[#888]">Price per device:</span>
              <span className="font-mono text-lg text-[#c2e0d8]">
                ${calculations.pricePerDevice}/mo
              </span>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="mailto:arneym3@gmail.com?subject=ROI%20Analysis%20Request"
                className="inline-flex items-center gap-2 text-[#c2e0d8] hover:text-white transition-colors"
              >
                Get detailed analysis
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
