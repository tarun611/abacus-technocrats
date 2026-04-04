export default function ContactPage() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-[#0A1F44] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Get in touch with us for planning, design, and project consultancy services.
        </p>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div>

            <h2 className="text-2xl font-semibold text-[#0A1F44]">
              Office Address
            </h2>

            <p className="mt-4 text-gray-600">
              Abacus Technocrats Pvt. Ltd.<br />
              1001, Sears Tower,<br />
              Gulbai Tekra, Near Panchwati Cross Road,<br />
              Off C.G. Road,<br />
              Ahmedabad – 380006, Gujarat, India
            </p>

            <h2 className="text-2xl font-semibold text-[#0A1F44] mt-8">
              Contact Details
            </h2>

            <p className="mt-4 text-gray-600">
              📞 +91 79 4002 0046<br />
              📞 +91 79 2642 2168<br />
              ✉️ abacus.epc@gmail.com
            </p>

          </div>

          {/* RIGHT FORM */}
          <div>

            <h2 className="text-2xl font-semibold text-[#0A1F44]">
              Send a Message
            </h2>

            <form className="mt-6 space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-md"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded-md"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border p-3 rounded-md"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border p-3 rounded-md"
              />

              <button
                type="submit"
                className="bg-[#0A1F44] text-white px-6 py-3 rounded-md hover:bg-[#D4AF37] transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* MAP (OPTIONAL) */}
      <section className="h-[400px]">
        <iframe
          src="https://www.google.com/maps?q=Gulbai+Tekra+Ahmedabad&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>

    </main>
  );
}