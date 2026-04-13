import { ScrollReveal } from '@/components/ScrollReveal';

const partners = [
  { name: 'Abris', logo: 'Abris' },
  { name: 'Vertiv', logo: 'Vertiv' },
  { name: 'Schneider Electric', logo: 'Schneider' },
  { name: 'Caterpillar', logo: 'CAT' },
  { name: 'APC', logo: 'APC' },
  { name: 'Liebert', logo: 'Liebert' },
];

const badges = [
  'NVIDIA Inception',
  'AIFC Astana Hub',
  'Hub71',
];

export function SocialProof() {
  return (
    <section className="py-16 border-y border-white/5 bg-[#0e0e0e]">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-center text-sm text-[#888]">
            Trusted by data centers in Kazakhstan and MENA
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="marquee-track flex items-center gap-16 whitespace-nowrap">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-[#666] hover:text-[#c2e0d8] transition-colors cursor-default"
              >
                <span className="font-headline text-xl">{partner.logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-white/10 text-xs text-[#888]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
