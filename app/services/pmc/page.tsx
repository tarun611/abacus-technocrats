export default function PMCPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F8F5F0] pt-6 pb-12 md:pb-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B2B2B]">
          Project Management Consultancy
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Delivering projects with precision through structured planning,
          execution control, and quality management.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#2B2B2B]">
              End-to-End Project Management
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              We provide comprehensive Project Management Consultancy (PMC)
              services tailored to client requirements, ensuring projects are
              delivered on time, within budget, and with the highest quality standards.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our PMC services cover the entire lifecycle of a project from
              pre-execution planning to final handover and post-completion support.
            </p>
          </div>

          <div>
            <img
              src="/images/services/pmc.jpg"
              alt="PMC"
              className="w-full h-[400px] object-cover rounded-2xl shadow-md"
            />
          </div>

        </div>
      </section>

      {/* STAGES */}
      <section className="py-16 md:py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#2B2B2B] text-center">
            Project Lifecycle Management
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {[
              {
                title: "Pre-Execution Stage",
                items: [
                  "Project planning & scheduling",
                  "Vendor identification",
                  "Tender evaluation",
                  "Cost estimation",
                ],
              },
              {
                title: "Execution Stage",
                items: [
                  "Site supervision",
                  "Quality control",
                  "Contractor coordination",
                  "Progress monitoring",
                ],
              },
              {
                title: "Post-Execution Stage",
                items: [
                  "As-built documentation",
                  "Testing & commissioning",
                  "Final billing & closure",
                  "Maintenance support",
                ],
              },
            ].map((stage, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="font-semibold text-lg text-[#2B2B2B]">
                  {stage.title}
                </h3>
                <ul className="mt-3 text-gray-600 space-y-2 text-sm">
                  {stage.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* KEY SERVICES */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#2B2B2B] text-center">
            Key PMC Services
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

            {[
              "Project Planning & Scheduling",
              "Cost Control & Budget Monitoring",
              "Quality Assurance & Inspection",
              "Contract Administration",
              "Risk Management",
              "Progress Reporting",
              "Coordination with Stakeholders",
              "Testing & Commissioning Support",
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

      {/* PROJECT EXPERIENCE */}
      <section className="py-16 md:py-20 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
            Project Experience
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We have successfully managed large-scale projects including
            hospital developments, institutional buildings, infrastructure works,
            and oil & gas facilities across India.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our portfolio includes projects such as 500 bedded hospitals,
            GERMI building, tourism infrastructure projects, and
            multiple CNG/LNG station developments.
          </p>

        </div>
      </section>

      {/* APPROACH */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
            Our PMC Approach
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 text-gray-600">

            {[
              "Detailed Planning & Resource Allocation",
              "Continuous Monitoring & Reporting",
              "Strict Quality & Safety Compliance",
              "Cost Optimization & Risk Mitigation",
              "Timely Delivery & Client Satisfaction",
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