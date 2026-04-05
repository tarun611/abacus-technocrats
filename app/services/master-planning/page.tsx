export default function MasterPlanningPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F8F5F0] pt-6 pb-12 md:pb-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B2B2B]">
          Master Planning
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Strategic planning solutions for large-scale developments including
          townships, institutional campuses, and infrastructure projects.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#2B2B2B]">
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
              className="w-full h-[400px] object-cover rounded-2xl shadow-md"
            />
          </div>

        </div>
      </section>

      {/* SERVICES SCOPE */}
      <section className="py-16 md:py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#2B2B2B] text-center">
            Scope of Services
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

            {[
              "Land Use Planning & Zoning",
              "Infrastructure Planning (Roads, Utilities)",
              "Campus & Township Planning",
              "Urban Development Strategies",
              "Environmental & Sustainability Considerations",
              "Site Layout Optimization",
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl border border-gray-100 text-gray-600 shadow-sm"
              >
                ✔ {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROJECT EXPERIENCE */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#2B2B2B] text-center">
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
      <section className="py-16 md:py-20 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
            Our Planning Approach
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 text-gray-600">

            {[
              "Site Analysis & Feasibility Study",
              "Conceptual Planning & Zoning",
              "Infrastructure Integration",
              "Detailed Master Plan Development",
              "Implementation Strategy",
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