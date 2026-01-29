export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              Pixsence
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-400 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Modular on-prem Operations & Engineering Risk Platform
              </p>
              <p className="text-md text-gray-500 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                We turn fragmented signals into asset models, risk events, and tamper-evident audit trails. Built for air-gapped environments.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="mailto:arneym3@gmail.com">Request a pilot</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Get the deck</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
