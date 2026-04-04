export default function CTA() {
  return (
    <section className="relative py-20">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/cta.jpg"
          alt="CTA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-bold">
          Let’s Build Your Next Project
        </h2>

        <p className="mt-4 text-gray-300">
          Get in touch with us for planning, design, and project management solutions.
        </p>

        <button className="mt-8 bg-[#D4AF37] text-black px-8 py-3 rounded-md font-semibold hover:opacity-90 transition">
          Contact Us
        </button>

      </div>

    </section>
  );
}