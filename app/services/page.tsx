import Link from "next/link";

const services = [
  {
    title: "Master Planning",
    desc: "Strategic planning solutions for large-scale developments including townships, campuses, and infrastructure projects.",
    link: "/services/master-planning",
  },
  {
    title: "Design Consultancy",
    desc: "Comprehensive architectural, structural, and MEP design services for technically complex projects.",
    link: "/services/design-consultancy",
  },
  {
    title: "Project Management Consultancy",
    desc: "End-to-end project management ensuring quality, cost control, and timely delivery.",
    link: "/services/pmc",
  },
  {
    title: "Building Information Modelling",
    desc: "Advanced BIM solutions for coordination, visualization, and efficient project execution.",
    link: "/services/bim",
  },
];

export default function ServicesPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F8F5F0] pt-6 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B]">
          Our Services
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Delivering integrated consultancy services across planning, design,
          execution, and digital construction technologies.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              
              <div className="group p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer bg-white">
                
                <h2 className="text-2xl font-semibold text-[#2B2B2B] group-hover:text-[#C5A46D] transition">
                  {service.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {service.desc}
                </p>

                <span className="inline-block mt-6 text-[#C5A46D] font-medium group-hover:translate-x-1 transition">
                  Learn More →
                </span>

              </div>

            </Link>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
            Why Choose Us
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">

            {[
              "Integrated end-to-end consultancy services",
              "Strong experience in government and institutional projects",
              "Expertise in Oil & Gas infrastructure",
              "Technology-driven approach with BIM integration",
              "Focus on quality, cost, and timely delivery",
              "Experienced multidisciplinary engineering team",
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-600"
              >
                ✔ {item}
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}