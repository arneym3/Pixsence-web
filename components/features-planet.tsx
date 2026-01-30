import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png"; 
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Power Engineering Risk Intelligence
            </h2>
            <p className="mt-4 text-gray-400">
              From Electrosafety to Digital Twins. A unified on-prem stack for critical power infrastructure.
            </p>
          </div>

          {/* Planet Section (Signals) */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image className="rounded-full bg-gray-900" src={PlanetImg} width={400} height={400} alt="Pixsence Core" />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image className="absolute -right-64 -top-20 z-10 max-w-none" src={PlanetOverlayImg} width={789} height={755} alt="Network" />
                  <div>
                    <Image className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80" src={PlanetTagImg01} width={253} height={56} alt="Power Signal" />
                    <Image className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30" src={PlanetTagImg02} width={241} height={56} alt="Telemetry" />
                    <Image className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25" src={PlanetTagImg03} width={243} height={56} alt="Audit Logs" />
                    <Image className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80" src={PlanetTagImg04} width={251} height={56} alt="Visual Data" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Modules Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 font-medium text-blue-400">GroundGuard & PowerQuality</h3>
              <p className="text-[15px] text-gray-400">Real-time electrosafety, grounding monitoring, and high-precision energy harmonics analytics.</p>
            </article>
            <article>
              <h3 className="mb-2 font-medium text-blue-400">Vision Guard (NVIDIA Metropolis)</h3>
              <p className="text-[15px] text-gray-400">Advanced CV stack for hazardous areas. PPE detection, zone control, and Industrial Jarvis voice on-prem.</p>
            </article>
            <article>
              <h3 className="mb-2 font-medium text-blue-400">AI Ops Copilot (CrewAI)</h3>
              <p className="text-[15px] text-gray-400">Multi-agent LLM systems for automated Root Cause Analysis and predictive maintenance drafts.</p>
            </article>
            <article>
              <h3 className="mb-2 font-medium text-gray-200">Digital Twin (Omniverse)</h3>
              <p className="text-[15px] text-gray-400">High-fidelity 3D asset modeling and physics-based simulation for predictive risk management.</p>
            </article>
            <article>
              <h3 className="mb-2 font-medium text-gray-200">AirSense & Ops Access</h3>
              <p className="text-[15px] text-gray-400">Gas/Climate telemetry combined with tamper-evident physical access audit trails and RBAC.</p>
            </article>
            <article>
              <h3 className="mb-2 font-medium text-gray-200">Deterministic Analytics</h3>
              <p className="text-[15px] text-gray-400">ETA-aware maintenance forecasting using PyTorch and Prophet for mission-critical power assets.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
