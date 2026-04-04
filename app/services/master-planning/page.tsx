export default function MasterPlanningPage() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-[#0A1F44] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Master Planning
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Strategic planning solutions for large-scale developments including
          townships, institutional campuses, and infrastructure projects.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Comprehensive Planning Solutions
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              We provide master planning services for complex developments,
              ensuring efficient land utilization, infrastructure integration,
              and sustainable design strategies.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our expertise includes planning of institutional campuses,
              urban infrastructure, industrial zones, and township developments.
            </p>
          </div>

          <div>
            <img
              src="/images/services/master.jpg"
              alt="Master Planning"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* SERVICES SCOPE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0A1F44] text-center">
            Scope of Services
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8 text-gray-600">

            <p>✔ Land Use Planning & Zoning</p>
            <p>✔ Infrastructure Planning (Roads, Utilities)</p>
            <p>✔ Campus & Township Planning</p>
            <p>✔ Urban Development Strategies</p>
            <p>✔ Environmental & Sustainability Considerations</p>
            <p>✔ Site Layout Optimization</p>

          </div>

        </div>
      </section>

      {/* PROJECT EXPERIENCE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0A1F44] text-center">
            Project Experience
          </h2>

          <div className="mt-10 max-w-3xl mx-auto text-gray-600 text-center">

            <p>
              Our experience includes master planning of large-scale institutional
              campuses such as the development of 92-acre campus planning for
              North Gujarat University at Vadali.
            </p>

            <p className="mt-4">
              We have also contributed to planning for various institutional,
              infrastructure, and urban development projects across Gujarat and India.
            </p>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0A1F44]">
            Our Planning Approach
          </h2>

          <div className="mt-10 space-y-4 text-gray-600">

            <p>1. Site Analysis & Feasibility Study</p>
            <p>2. Conceptual Planning & Zoning</p>
            <p>3. Infrastructure Integration</p>
            <p>4. Detailed Master Plan Development</p>
            <p>5. Implementation Strategy</p>

          </div>

        </div>
      </section>

    </main>
  );
}