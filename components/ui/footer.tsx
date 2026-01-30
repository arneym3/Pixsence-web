import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Pixsence Global. All rights reserved.
            </div>
          </div>

          {/* 2nd block: Platform */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-200">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-gray-500 transition hover:text-blue-500" href="#0">GroundGuard</Link></li>
              <li><Link className="text-gray-500 transition hover:text-blue-500" href="#0">PowerQuality</Link></li>
              <li><Link className="text-gray-500 transition hover:text-blue-500" href="#0">AirSense</Link></li>
              <li><Link className="text-gray-500 transition hover:text-blue-500" href="#0">Vision Guard</Link></li>
            </ul>
          </div>

          {/* 3rd block: Company */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-gray-500 transition hover:text-blue-500" href="https://linkedin.com/in/vitalya-batyan-5746551a3" target="_blank">LinkedIn</Link></li>
              <li><Link className="text-gray-500 transition hover:text-blue-500" href="mailto:arneym3@gmail.com">Contact Us</Link></li>
            </ul>
          </div>

          {/* 4th block: Connect */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-4">
            <h3 className="text-sm font-medium text-gray-200">Connect</h3>
            <ul className="flex gap-4">
              <li>
                <Link className="flex items-center justify-center text-blue-500 transition hover:text-blue-400" href="https://linkedin.com/in/vitalya-batyan-5746551a3" aria-label="LinkedIn">
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                    <path d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM10.2 24H6.8V12.8h3.4V24zM8.5 11.4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm15.5 12.6h-3.4V18c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.8 1.4-.1.2-.1.5-.1.8v6.2H13.5V12.8h3.3v1.5c.4-.7 1.2-1.7 3.1-1.7 2.3 0 4 1.5 4 4.7V24z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link className="flex items-center justify-center text-gray-400 transition hover:text-blue-500" href="https://github.com/arneym3/Pixsence-Global" aria-label="Github">
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Specs Row */}
        <div className="border-t border-gray-800 py-6 text-center">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">
            Security & Compliance: Air-Gapped Deployment | English Law (AIFC) | Tamper-Evident Audit Trail | TLS/VPN Protected
          </p>
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-blue-500/60">
            Industrial Stack: Modbus/OPC UA → Kafka → TimescaleDB → CrewAI
          </p>
        </div>
      </div>

      {/* Big text "Pixsence" background */}
      <div className="relative h-40 w-full select-none" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[100px] font-bold leading-none before:bg-linear-to-b before:from-gray-700/30 before:to-transparent before:bg-clip-text before:text-transparent before:content-['PIXSENCE'] md:text-[180px] lg:text-[220px]"></div>
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" aria-hidden="true">
          <div className="h-48 w-48 rounded-full border-[20px] border-blue-900/10 blur-[60px]"></div>
        </div>
      </div>
    </footer>
  );
}
