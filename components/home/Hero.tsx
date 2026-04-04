export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          Integrated Planning, Design & Project Management Solutions
        </h1>

        <p className="mt-6 text-lg max-w-xl text-gray-200">
          Delivering high-performance infrastructure and buildings through
          advanced BIM-driven execution and engineering expertise.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
            View Projects
          </button>

          <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}