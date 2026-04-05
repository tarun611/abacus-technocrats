export default function AboutPage() {
  return (
    <main className="pt-[70px]">

      {/* HERO SECTION */}
      <section className="bg-[#F8F5F0] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B]">
            About Abacus Technocrats
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Delivering engineering excellence since 2004 through integrated planning,
            design, and project management solutions.
          </p>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#2B2B2B]">
              Who We Are
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Abacus Technocrats Pvt. Ltd. is a multidisciplinary engineering consultancy
              firm established in 2004, driven by professionals with strong civil and
              electrical expertise.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We specialize in delivering end-to-end solutions across master planning,
              design consultancy, project management, and BIM services for government,
              institutional, and industrial sectors.
            </p>
          </div>

          <div>
            <img
              src="/images/services/about.jpg"
              alt="About"
              className="w-full h-[400px] object-cover rounded-2xl shadow-md"
            />
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
            Our Experience
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8">

            {[
              { value: "20+", label: "Years Experience" },
              { value: "200+", label: "Projects Delivered" },
              { value: "Multi", label: "Sector Expertise" },
              { value: "Pan India", label: "Project Presence" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-3xl font-bold text-[#C5A46D]">{item.value}</h3>
                <p className="mt-2 text-gray-600">{item.label}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#2B2B2B] text-center">
            Our Expertise
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">

            {[
              {
                title: "Institutional Projects",
                desc: "Hospitals, universities, laboratories, and campus developments.",
              },
              {
                title: "Oil & Gas Infrastructure",
                desc: "CNG, LNG, CGS stations and drill-site infrastructure projects.",
              },
              {
                title: "Commercial & Residential",
                desc: "Township planning, office buildings, and residential developments.",
              },
              {
                title: "Government Projects",
                desc: "Public infrastructure and institutional developments across Gujarat and India.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg text-[#2B2B2B]">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
            Our Approach
          </h2>

          <div className="mt-10 grid md:grid-cols-5 gap-4 text-gray-600">

            {[
              "Planning & Feasibility",
              "Design & Engineering",
              "Execution & Monitoring",
              "Quality & Cost Control",
              "Project Closure & Handover",
            ].map((step, i) => (
              <div key={i} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                {step}
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}