export default function DesignConsultancyPage() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-[#0A1F44] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Design Consultancy
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Comprehensive architectural, structural, and MEP design solutions
          for technically complex projects across sectors.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Integrated Design Expertise
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              We provide complete design consultancy services covering
              architectural planning, structural engineering, and MEP systems
              for institutional, commercial, and infrastructure projects.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our multidisciplinary approach ensures coordination between all
              design disciplines, resulting in efficient, cost-effective, and
              high-performance building solutions.
            </p>
          </div>

          <div>
            <img
              src="/images/services/design.jpg"
              alt="Design Consultancy"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0A1F44] text-center">
            Our Design Services
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">

            {/* ARCHITECTURE */}
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[#0A1F44]">
                Architectural & Interior Design
              </h3>
              <p className="mt-3 text-gray-600">
                Concept development, space planning, façade design, and interior
                solutions for functional and aesthetic excellence.
              </p>
            </div>

            {/* STRUCTURE */}
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[#0A1F44]">
                Structural Design
              </h3>
              <p className="mt-3 text-gray-600">
                Safe and efficient structural systems designed for durability,
                performance, and compliance with engineering standards.
              </p>
            </div>

            {/* ELECTRICAL */}
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[#0A1F44]">
                Electrical & ELV Design
              </h3>
              <p className="mt-3 text-gray-600">
                HT/LT systems, lighting, power distribution, networking,
                CCTV, fire alarm, and automation systems.
              </p>
            </div>

            {/* PLUMBING */}
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[#0A1F44]">
                Plumbing & Fire Fighting
              </h3>
              <p className="mt-3 text-gray-600">
                Water supply systems, drainage networks, rainwater systems,
                and fire protection design solutions.
              </p>
            </div>

            {/* HVAC */}
            <div className="p-6 bg-white rounded-lg shadow md:col-span-2">
              <h3 className="text-xl font-semibold text-[#0A1F44]">
                HVAC Design
              </h3>
              <p className="mt-3 text-gray-600">
                Ventilation, air conditioning systems, ducting, and energy-efficient
                climate control solutions for all building types.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PROJECT EXPERIENCE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0A1F44]">
            Project Experience
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We have delivered design consultancy services for large-scale
            institutional and infrastructure projects including hospitals,
            universities, laboratories, and commercial developments.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our experience includes projects such as GERMI building,
            Gujarat University developments, and various CNG/LNG station
            designs across India.
          </p>

        </div>
      </section>

      {/* APPROACH */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0A1F44]">
            Our Design Approach
          </h2>

          <div className="mt-10 space-y-4 text-gray-600">

            <p>1. Understanding Client Requirements</p>
            <p>2. Concept & Preliminary Design</p>
            <p>3. Detailed Engineering & Drawings</p>
            <p>4. Interdisciplinary Coordination</p>
            <p>5. Cost Optimization & Value Engineering</p>

          </div>

        </div>
      </section>

    </main>
  );
}