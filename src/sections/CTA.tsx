import { ScrollReveal } from '@/components/ScrollReveal';
import { ArrowRight, Download, Mail } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-[#0e0e0e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 teal-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0e0e]/80 to-[#0e0e0e]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Ready to stop reacting
            <br />
            <span className="text-[#888]">and start predicting?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-lg text-[#888] mb-10 max-w-xl mx-auto">
            Join data centers in Kazakhstan and MENA running Pixsence.
            30-minute setup. No cloud. No vendor lock-in.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:arneym3@gmail.com"
              className="btn-primary inline-flex items-center gap-2 text-base"
            >
              Request Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <button className="btn-secondary inline-flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Datasheet
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex items-center justify-center gap-2 text-sm text-[#888]">
            <Mail className="w-4 h-4" />
            <span>Questions?</span>
            <a
              href="mailto:arneym3@gmail.com"
              className="text-[#c2e0d8] hover:text-white transition-colors"
            >
              arneym3@gmail.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
