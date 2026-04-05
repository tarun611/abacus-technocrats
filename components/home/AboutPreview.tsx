export default function AboutPreview() {
  return (
    <section className="pt-6 pb-12 md:pb-20 bg-white">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE */}
        <div>
          <img
            src="/images/services/about.jpg"
            alt="About Abacus Technocrats"
            className="w-full h-[420px] object-cover rounded-xl shadow-sm"
          />
        </div>

        {/* CONTENT */}
        <div className="max-w-xl">
          
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-semibold text-text">
            About Abacus Technocrats
          </h2>

          {/* PARAGRAPH 1 */}
          <p className="mt-6 text-gray-500 leading-relaxed text-justify">
            Abacus Technocrats Pvt. Ltd. is a multidisciplinary engineering and consultancy firm committed to delivering integrated solutions across the entire project lifecycle. From concept planning to detailed design and on-site execution, we provide structured, efficient, and result-oriented services tailored to modern infrastructure and building developments.
          </p>

          {/* PARAGRAPH 2 */}
          <p className="mt-4 text-gray-500 leading-relaxed text-justify">
            Our expertise spans Master Planning, Design Consultancy, Project Management Consultancy (PMC), and Building Information Modelling (BIM), enabling us to handle complex projects with precision and clarity. By combining engineering excellence with digital innovation, we ensure optimized coordination, cost efficiency, and timely delivery.
          </p>

          {/* PARAGRAPH 3 */}
          <p className="mt-4 text-gray-500 leading-relaxed text-justify">
            With a strong focus on quality, collaboration, and technology-driven execution, we partner with clients to transform ideas into sustainable and high-performance built environments.
          </p>

          {/* SERVICES LIST */}
          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li>• Master Planning & Urban Development Strategies</li>
            <li>• Architectural, Structural & MEP Design Consultancy</li>
            <li>• Project Management Consultancy (PMC) & Execution Oversight</li>
            <li>• BIM-based Coordination, Visualization & Digital Construction</li>
          </ul>

          {/* BUTTON */}
          <button className="mt-8 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition shadow-sm hover:shadow-md">
            Read More
          </button>

        </div>

      </div>

    </section>
  );
}