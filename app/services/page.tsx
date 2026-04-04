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
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-[#0A1F44] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Services
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Delivering integrated consultancy services across planning, design,
          execution, and digital construction technologies.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              
              <div className="border rounded-lg p-8 hover:shadow-xl transition cursor-pointer">
                
                <h2 className="text-2xl font-semibold text-[#0A1F44]">
                  {service.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {service.desc}
                </p>

                <span className="inline-block mt-6 text-[#D4AF37] font-medium">
                  Learn More →
                </span>

              </div>

            </Link>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0A1F44]">
            Why Choose Us
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6 text-gray-600">

            <p>✔ Integrated end-to-end consultancy services</p>
            <p>✔ Strong experience in government and institutional projects</p>
            <p>✔ Expertise in Oil & Gas infrastructure</p>
            <p>✔ Technology-driven approach with BIM integration</p>
            <p>✔ Focus on quality, cost, and timely delivery</p>
            <p>✔ Experienced multidisciplinary engineering team</p>

          </div>

        </div>
      </section>

    </main>
  );
}