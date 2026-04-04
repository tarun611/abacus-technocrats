export default function BIMPage() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-[#0A1F44] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Building Information Modelling (BIM)
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Transforming project delivery through digital modelling, coordination,
          and data-driven construction processes.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Technology-Driven Project Delivery
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              We leverage Building Information Modelling (BIM) to enhance
              design accuracy, improve coordination, and reduce project risks.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              BIM enables real-time collaboration between stakeholders,
              ensuring efficient planning, execution, and lifecycle management
              of projects.
            </p>
          </div>

          <div>
            <img
              src="/images/services/bim-main.jpg"
              alt="BIM"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* BIM LEVELS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0A1F44] text-center">
            Our BIM Capabilities
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-[#0A1F44]">3D BIM</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Accurate 3D modelling and visualization of building components.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-[#0A1F44]">4D BIM</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Time-based scheduling and construction sequencing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-[#0A1F44]">5D BIM</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Cost estimation and financial planning integration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold text-[#0A1F44]">Clash Detection</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Identification and resolution of design conflicts before execution.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0A1F44] text-center">
            BIM Services
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8 text-gray-600">

            <p>✔ 3D Modelling & Visualization</p>
            <p>✔ Clash Detection & Coordination</p>
            <p>✔ Quantity Take-Offs (BOQ Integration)</p>
            <p>✔ 4D Construction Scheduling</p>
            <p>✔ 5D Cost Estimation</p>
            <p>✔ Shop Drawings & As-Built Models</p>
            <p>✔ Interdisciplinary Coordination</p>
            <p>✔ Digital Project Management</p>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0A1F44]">
            Benefits of BIM
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6 text-gray-600">

            <p>✔ Reduced design errors and rework</p>
            <p>✔ Improved project coordination</p>
            <p>✔ Accurate cost estimation</p>
            <p>✔ Better project visualization</p>
            <p>✔ Faster project delivery</p>
            <p>✔ Enhanced decision making</p>

          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0A1F44]">
            Our BIM Approach
          </h2>

          <div className="mt-10 space-y-4 text-gray-600">

            <p>1. Data Collection & Model Setup</p>
            <p>2. 3D Modelling & Coordination</p>
            <p>3. Clash Detection & Resolution</p>
            <p>4. Integration with Schedule & Cost</p>
            <p>5. Final Model & Documentation</p>

          </div>

        </div>
      </section>

    </main>
  );
}