export default function PMCPage() {
  return (
    <main className="pt-[70px]">

      {/* HERO */}
      <section className="bg-[#0A1F44] text-white pt-6 pb-12 md:pb-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Project Management Consultancy
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Delivering projects with precision through structured planning,
          execution control, and quality management.
        </p>
      </section>

      {/* INTRO */}
      <section className="pt-6 pb-12 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
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
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* STAGES */}
      <section className="pt-6 pb-12 md:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0A1F44] text-center">
            Project Lifecycle Management
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* PRE */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg text-[#0A1F44]">
                Pre-Execution Stage
              </h3>
              <ul className="mt-3 text-gray-600 space-y-2 text-sm">
                <li>• Project planning & scheduling</li>
                <li>• Vendor identification</li>
                <li>• Tender evaluation</li>
                <li>• Cost estimation</li>
              </ul>
            </div>

            {/* EXECUTION */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg text-[#0A1F44]">
                Execution Stage
              </h3>
              <ul className="mt-3 text-gray-600 space-y-2 text-sm">
                <li>• Site supervision</li>
                <li>• Quality control</li>
                <li>• Contractor coordination</li>
                <li>• Progress monitoring</li>
              </ul>
            </div>

            {/* POST */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg text-[#0A1F44]">
                Post-Execution Stage
              </h3>
              <ul className="mt-3 text-gray-600 space-y-2 text-sm">
                <li>• As-built documentation</li>
                <li>• Testing & commissioning</li>
                <li>• Final billing & closure</li>
                <li>• Maintenance support</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* KEY SERVICES */}
      <section className="pt-6 pb-12 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0A1F44] text-center">
            Key PMC Services
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">

            <p>✔ Project Planning & Scheduling</p>
            <p>✔ Cost Control & Budget Monitoring</p>
            <p>✔ Quality Assurance & Inspection</p>
            <p>✔ Contract Administration</p>
            <p>✔ Risk Management</p>
            <p>✔ Progress Reporting</p>
            <p>✔ Coordination with Stakeholders</p>
            <p>✔ Testing & Commissioning Support</p>

          </div>

        </div>
      </section>

      {/* PROJECT EXPERIENCE */}
      <section className="pt-6 pb-12 md:pb-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0A1F44]">
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
      <section className="pt-6 pb-12 md:pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0A1F44]">
            Our PMC Approach
          </h2>

          <div className="mt-10 space-y-4 text-gray-600">

            <p>1. Detailed Planning & Resource Allocation</p>
            <p>2. Continuous Monitoring & Reporting</p>
            <p>3. Strict Quality & Safety Compliance</p>
            <p>4. Cost Optimization & Risk Mitigation</p>
            <p>5. Timely Delivery & Client Satisfaction</p>

          </div>

        </div>
      </section>

    </main>
  );
}