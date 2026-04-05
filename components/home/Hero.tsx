export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[70px]">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {/* Softer overlay (premium look) */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        
        {/* HEADING */}
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl">
          Integrated Planning, Design & Project Management Solutions
        </h1>

        {/* SUBTEXT */}
        <p className="mt-6 text-lg md:text-xl max-w-xl text-gray-200 leading-relaxed">
          Delivering high-performance infrastructure and buildings through
          advanced BIM-driven execution and engineering expertise.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-4">
          
          {/* PRIMARY BUTTON */}
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition shadow-sm hover:shadow-md">
            View Projects
          </button>

          {/* SECONDARY BUTTON */}
          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
}