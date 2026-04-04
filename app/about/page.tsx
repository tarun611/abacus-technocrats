export default function AboutPage() {
  return (
    <main className="pt-24">

      {/* HERO SECTION */}
      <section className="bg-[#0A1F44] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Abacus Technocrats
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Delivering engineering excellence since 2004 through integrated planning,
            design, and project management solutions.
          </p>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
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
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* EXPERIENCE / HIGHLIGHTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0A1F44]">
            Our Experience
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8">

            <div>
              <h3 className="text-3xl font-bold text-[#D4AF37]">20+</h3>
              <p className="mt-2 text-gray-600">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#D4AF37]">200+</h3>
              <p className="mt-2 text-gray-600">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#D4AF37]">Multi</h3>
              <p className="mt-2 text-gray-600">Sector Expertise</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#D4AF37]">Pan India</h3>
              <p className="mt-2 text-gray-600">Project Presence</p>
            </div>

          </div>

        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0A1F44] text-center">
            Our Expertise
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold text-lg text-[#0A1F44]">
                Institutional Projects
              </h3>
              <p className="mt-2 text-gray-600">
                Hospitals, universities, laboratories, and campus developments.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold text-lg text-[#0A1F44]">
                Oil & Gas Infrastructure
              </h3>
              <p className="mt-2 text-gray-600">
                CNG, LNG, CGS stations and drill-site infrastructure projects.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold text-lg text-[#0A1F44]">
                Commercial & Residential
              </h3>
              <p className="mt-2 text-gray-600">
                Township planning, office buildings, and residential developments.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold text-lg text-[#0A1F44]">
                Government Projects
              </h3>
              <p className="mt-2 text-gray-600">
                Public infrastructure and institutional developments across Gujarat and India.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0A1F44]">
            Our Approach
          </h2>

          <div className="mt-10 space-y-4 text-gray-600">

            <p>1. Planning & Feasibility</p>
            <p>2. Design & Engineering</p>
            <p>3. Execution & Monitoring</p>
            <p>4. Quality & Cost Control</p>
            <p>5. Project Closure & Handover</p>

          </div>

        </div>
      </section>

    </main>
  );
}