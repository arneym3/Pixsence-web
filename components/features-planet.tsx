import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
// Важно: теги 01-04 — это картинки-плашки. Текст на них в шаблонеCruip обычно нарисован, 
// но мы поменяем подписи здесь, чтобы ты знал, что на что менять в графике.
import PlanetTagImg01 from "@/public/images/planet-tag-01.png"; 
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Turn fragmented signals into operational truth
            </h2>
            <p className="mt-4 text-gray-400">
              Pixsence connects to your existing infrastructure to unify risk monitoring across all domains.
            </p>
          </div>

          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Pixsence Core"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Network Decoration"
                  />
                  <div>
                    {/* ТУТ ТВОИ СИГНАЛЫ (На картинках-тегах стоит заменить текст в Photoshop/Figma) */}
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01} // Текст на картинке: "Power Quality"
                      width={253}
                      height={56}
                      alt="Power Meters"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src={PlanetTagImg02} // Текст на картинке: "Sensors/IoT"
                      width={241}
                      height={56}
                      alt="Sensors"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src={PlanetTagImg03} // Текст на картинке: "Access Logs"
                      width={243}
                      height={56}
                      alt="Access Control"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg04} // Текст на картинке: "Video Analytics"
                      width={251}
                      height={56}
                      alt="CCTV Signals"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Operational Truth</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Stop guessing. Get the real state of your assets across fragmented systems in one unified layer.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Deterministic Risk</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Full lifecycle of every incident: from Warning to Alarm, with provable action playbooks and evidence.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Tamper-Evident Audit</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Every config change and operator action is recorded in an immutable log. Accountability by design.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Air-Gapped Ready</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Deploy in fully isolated environments. No cloud required for core risk processing and security.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Modular Core</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Enable GroundGuard, PowerQuality or AirSense as needed. Pixsence grows with your facility.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>AI Ops Copilot</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Deterministic RCA drafts and ETA-aware forecasting to prevent downtime before it happens.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
