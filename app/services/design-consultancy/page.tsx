export default function DesignConsultancyPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F8F5F0] pt-6 pb-12 md:pb-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B2B2B]">
          Design Consultancy
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Comprehensive architectural, structural, and MEP design solutions
          for technically complex projects across sectors.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#2B2B2B]">
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
              className="w-full h-[400px] object-cover rounded-2xl shadow-md"
            />
          </div>

        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-16 md:py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#2B2B2B] text-center">
            Our Design Services
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

            {[
              {
                title: "Architectural & Interior Design",
                desc: "Concept development, space planning, façade design, and interior solutions for functional and aesthetic excellence.",
              },
              {
                title: "Structural Design",
                desc: "Safe and efficient structural systems designed for durability, performance, and compliance with engineering standards.",
              },
              {
                title: "Electrical & ELV Design",
                desc: "HT/LT systems, lighting, power distribution, networking, CCTV, fire alarm, and automation systems.",
              },
              {
                title: "Plumbing & Fire Fighting",
                desc: "Water supply systems, drainage networks, rainwater systems, and fire protection design solutions.",
              },
              {
                title: "HVAC Design",
                desc: "Ventilation, air conditioning systems, ducting, and energy-efficient climate control solutions.",
                full: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 bg-white rounded-xl border border-gray-100 shadow-sm ${
                  item.full ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="text-lg font-semibold text-[#2B2B2B]">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROJECT EXPERIENCE */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
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
      <section className="py-16 md:py-20 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
            Our Design Approach
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 text-gray-600">

            {[
              "Understanding Client Requirements",
              "Concept & Preliminary Design",
              "Detailed Engineering & Drawings",
              "Interdisciplinary Coordination",
              "Cost Optimization & Value Engineering",
            ].map((step, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
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