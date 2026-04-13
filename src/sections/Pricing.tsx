import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 50,
    annualPrice: 42,
    devices: 'Up to 25 devices',
    sites: '1 site',
    features: ['Core Monitor', 'Executive Dash', 'Basic Rules'],
    cta: 'Get Started',
    ctaStyle: 'secondary',
    popular: false,
  },
  {
    name: 'Standard',
    monthlyPrice: 45,
    annualPrice: 38,
    devices: 'Up to 75 devices',
    sites: '3 sites',
    features: [
      'AI Forecast',
      'ROI Dashboard',
      'Advanced Rules',
      '+ Starter features',
    ],
    cta: 'Start Trial',
    ctaStyle: 'primary',
    popular: true,
  },
  {
    name: 'Professional',
    monthlyPrice: 40,
    annualPrice: 34,
    devices: 'Up to 150 devices',
    sites: '5 sites',
    features: [
      'Efficiency Analytics',
      'Handover Journeys',
      'API Access',
      '+ Standard features',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'secondary',
    popular: false,
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    devices: '150+ devices',
    sites: 'Unlimited sites',
    features: [
      'All modules included',
      'SLA guarantee',
      'Dedicated CSM',
      'Custom integrations',
    ],
    cta: 'Talk to Us',
    ctaStyle: 'secondary',
    popular: false,
  },
];

const faqs = [
  {
    q: 'Do I need cloud connectivity?',
    a: 'No. Pixsence runs entirely on-premise. Internet is optional for updates and support.',
  },
  {
    q: 'What equipment does Pixsence support?',
    a: 'Any device with Modbus or OPC UA. Vertiv, Schneider, APC, Caterpillar are pre-configured.',
  },
  {
    q: 'How long does setup take?',
    a: 'Under 30 minutes with Docker Compose. Our team assists remotely during onboarding.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes — 30-day pilot with your actual equipment. Full platform access, no credit card required.',
  },
  {
    q: "What's included in Enterprise?",
    a: 'Custom pricing, SLA guarantee, dedicated support engineer, and custom integrations.',
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-24 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="eyebrow mb-4">// PRICING</div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Simple per-device pricing.
          </h2>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#888] mb-8">
            No surprises.
          </h2>
        </ScrollReveal>

        {/* Toggle */}
        <ScrollReveal delay={100}>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-[#888]'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`toggle-switch ${isAnnual ? 'active' : ''}`}
            />
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-[#888]'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="px-2 py-1 rounded-full bg-[#4ade80]/10 text-[#4ade80] text-xs">
                −15%
              </span>
            )}
          </div>
        </ScrollReveal>

        {/* Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div
                className={`relative h-full p-6 rounded-2xl border ${
                  plan.popular
                    ? 'bg-[#121416] border-[#facc15]/30'
                    : 'bg-[#121416] border-white/5'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-[#facc15] text-[#3a2800] text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    {plan.monthlyPrice ? (
                      <>
                        <span className="font-mono text-3xl text-white">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-sm text-[#888]">/device/mo</span>
                      </>
                    ) : (
                      <span className="font-mono text-3xl text-white">Custom</span>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-[#888]">
                  <p>{plan.devices}</p>
                  <p>{plan.sites}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#888]">
                      <Check className="w-4 h-4 text-[#4ade80] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:arneym3@gmail.com"
                  className={`block w-full py-3 rounded-xl text-center text-sm font-semibold transition-all ${
                    plan.ctaStyle === 'primary'
                      ? 'bg-[#facc15] text-[#3a2800] hover:shadow-lg hover:shadow-[#facc15]/20'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FAQ */}
        <ScrollReveal delay={400}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-[#121416] border border-white/5 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="text-sm text-white">{faq.q}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-4 h-4 text-[#888] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#888] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-[#888] leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
