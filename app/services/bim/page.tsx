export default function BIMPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F8F5F0] pt-6 pb-12 md:pb-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B2B2B]">
          Building Information Modelling (BIM)
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Transforming project delivery through digital modelling, coordination,
          and data-driven construction processes.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#2B2B2B]">
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
              className="w-full h-[400px] object-cover rounded-2xl shadow-md"
            />
          </div>

        </div>
      </section>

      {/* BIM CAPABILITIES */}
      <section className="py-16 md:py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#2B2B2B] text-center">
            Our BIM Capabilities
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {[
              {
                title: "3D BIM",
                desc: "Accurate 3D modelling and visualization of building components.",
              },
              {
                title: "4D BIM",
                desc: "Time-based scheduling and construction sequencing.",
              },
              {
                title: "5D BIM",
                desc: "Cost estimation and financial planning integration.",
              },
              {
                title: "Clash Detection",
                desc: "Identification and resolution of design conflicts before execution.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <h3 className="text-lg font-semibold text-[#2B2B2B]">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#2B2B2B] text-center">
            BIM Services
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

            {[
              "3D Modelling & Visualization",
              "Clash Detection & Coordination",
              "Quantity Take-Offs (BOQ Integration)",
              "4D Construction Scheduling",
              "5D Cost Estimation",
              "Shop Drawings & As-Built Models",
              "Interdisciplinary Coordination",
              "Digital Project Management",
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 bg-[#F8F5F0] rounded-xl border border-gray-100 text-gray-600"
              >
                ✔ {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 md:py-20 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
            Benefits of BIM
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

            {[
              "Reduced design errors and rework",
              "Improved project coordination",
              "Accurate cost estimation",
              "Better project visualization",
              "Faster project delivery",
              "Enhanced decision making",
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl border border-gray-100 text-gray-600"
              >
                ✔ {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
            Our BIM Approach
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 text-gray-600">

            {[
              "Data Collection & Model Setup",
              "3D Modelling & Coordination",
              "Clash Detection & Resolution",
              "Integration with Schedule & Cost",
              "Final Model & Documentation",
            ].map((step, i) => (
              <div
                key={i}
                className="p-4 bg-[#F8F5F0] rounded-lg shadow-sm border border-gray-100"
              >
                {step}
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}