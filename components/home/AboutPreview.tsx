export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE */}
        <div>
          <img
            src="/images/services/about.jpg"
            alt="About"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-[#0A1F44]">
            About Abacus Technocrats
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Abacus Technocrats Pvt. Ltd. is a multidisciplinary consultancy firm
            providing integrated solutions in Master Planning, Design Consultancy,
            Project Management Consultancy (PMC), and BIM services.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We combine technical expertise with innovative technologies to deliver
            efficient, cost-effective, and high-quality infrastructure and building
            projects.
          </p>

          <button className="mt-6 bg-[#0A1F44] text-white px-6 py-3 rounded-md hover:bg-[#D4AF37] transition">
            Read More
          </button>
        </div>

      </div>

    </section>
  );
}