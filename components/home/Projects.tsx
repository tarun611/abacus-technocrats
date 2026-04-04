const projects = [
  {
    title: "Commercial Complex",
    location: "Ahmedabad",
    image: "/images/projects/project1.jpg",
  },
  {
    title: "Residential Township",
    location: "Gujarat",
    image: "/images/projects/project2.jpg",
  },
  {
    title: "Institutional Campus",
    location: "India",
    image: "/images/projects/project3.jpg",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0A1F44]">
            Featured Projects
          </h2>

          <p className="mt-4 text-gray-600">
            Delivering excellence across diverse sectors and project scales.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                
                <div className="text-center text-white">
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm">{project.location}</p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}