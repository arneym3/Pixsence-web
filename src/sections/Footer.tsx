import { Linkedin, Send, Mail } from 'lucide-react';

const footerLinks = {
  platform: [
    { label: 'Monitor', href: '#modules' },
    { label: 'Executive', href: '#modules' },
    { label: 'AI Forecast', href: '#modules' },
    { label: 'Efficiency', href: '#modules' },
    { label: 'ROI', href: '#modules' },
    { label: 'Rules', href: '#modules' },
    { label: 'Map', href: '#modules' },
  ],
  solutions: [
    { label: 'Data Centers', href: '#' },
    { label: 'Colocation', href: '#' },
    { label: 'Telco', href: '#' },
    { label: 'Industrial', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: 'mailto:arneym3@gmail.com' },
    { label: 'LinkedIn', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                className="text-[#c2e0d8]"
              >
                <rect
                  x="2"
                  y="2"
                  width="24"
                  height="24"
                  rx="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 14h12M14 8v12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-headline text-lg text-white">Pixsence</span>
            </div>
            <p className="text-sm text-[#888] mb-6 max-w-xs">
              AI-Powered Data Center Intelligence
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#888] hover:text-white hover:bg-white/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#888] hover:text-white hover:bg-white/10 transition-all"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="mailto:arneym3@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#888] hover:text-white hover:bg-white/10 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-[#888] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-[#888] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-[#888] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-[#888] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#888]">
            © 2026 Pixsence Global · pixsence.com
          </p>
          <p className="text-sm text-[#888]">
            Built in Kazakhstan 🇰🇿
          </p>
        </div>

        {/* Tech line */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center">
          <p className="font-mono text-[10px] text-[#666]">
            Modbus/OPC UA → Kafka → TimescaleDB → AI Agent · On-Premise · Air-Gap Ready
          </p>
        </div>
      </div>
    </footer>
  );
}
