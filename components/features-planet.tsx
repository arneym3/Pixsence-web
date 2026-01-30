// ... (импорты остаются те же)

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
          {/* ... (код планеты остается без изменений) */}

          {/* Full Modules Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 font-medium text-blue-400">GroundGuard & PowerQuality</h3>
              <p className="text-[15px] text-gray-400">Real-time electrosafety, grounding monitoring, and high-precision grid stability analytics.</p>
            </article>
            <article>
              <h3 className="mb-2 font-medium text-blue-400">Vision Guard (NVIDIA Metropolis)</h3>
              <p className="text-[15px] text-gray-400">Advanced CV stack for hazardous areas. PPE detection, zone control, and thermal anomaly monitoring.</p>
            </article>
            <article>
              <h3 className="mb-2 font-medium text-blue-400">AI Ops Copilot (CrewAI)</h3>
              <p className="text-[15px] text-gray-400">On-prem LLM agents for automated Root Cause Analysis and engineering reporting.</p>
            </article>
            <article>
              <h3 className="mb-2 font-medium text-gray-200">Digital Twin (Omniverse)</h3>
              <p className="text-[15px] text-gray-400">Real-time 3D asset modeling and simulation for predictive risk management.</p>
            </article>
            <article>
              <h3 className="mb-2 font-medium text-gray-200">AirSense & Ops Access</h3>
              <p className="text-[15px] text-gray-400">Environmental telemetry combined with tamper-evident physical access audit trails.</p>
            </article>
            <article>
              <h3 className="mb-2 font-medium text-gray-200">Deterministic Forecasting</h3>
              <p className="text-[15px] text-gray-400">ETA-aware maintenance forecasting using PyTorch and Prophet for mission-critical assets.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
