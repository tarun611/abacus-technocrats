import Link from "next/link";

const services = [
  {
    title: "Master Planning",
    desc: "Strategic land development and urban planning solutions.",
    image: "/images/services/master.jpg",
    link: "/services/master-planning",
  },
  {
    title: "Design Consultancy",
    desc: "Architectural, structural, and MEP design services.",
    image: "/images/services/design.jpg",
    link: "/services/design-consultancy",
  },
  {
    title: "Project Management Consultancy",
    desc: "End-to-end project execution and management.",
    image: "/images/services/pmc.jpg",
    link: "/services/pmc",
  },
  {
    title: "Building Information Modelling",
    desc: "Advanced BIM solutions for coordination and efficiency.",
    image: "/images/services/bim.jpg",
    link: "/services/bim",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-light">
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-text">
          Our Core Services
        </h2>

        {/* SUBTEXT */}
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
          We provide integrated consultancy services covering planning, design,
          execution, and digital construction technologies.
        </p>

        {/* GRID */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              
              <div className="group bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition duration-300 cursor-pointer">
                
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 text-left">
                  
                  <h3 className="text-lg font-semibold text-text">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* LINK */}
                  <span className="inline-block mt-4 text-sm text-primary font-medium group-hover:underline">
                    Explore →
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}