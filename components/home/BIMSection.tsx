export default function BIMSection() {
  return (
    <section className="pt-6 pb-12 md:pb-20 bg-[#0A1F44] text-white">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* CONTENT */}
        <div>
          <h2 className="text-3xl font-bold">
            BIM-Driven Project Delivery
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            We leverage advanced Building Information Modelling (BIM) technologies
            to enhance project coordination, minimize errors, and improve efficiency
            throughout the project lifecycle.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✔ 3D Modelling & Visualization</li>
            <li>✔ Clash Detection & Coordination</li>
            <li>✔ Quantity Take-Offs (BOQ Integration)</li>
            <li>✔ 4D Scheduling & 5D Cost Control</li>
          </ul>

          <button className="mt-8 bg-[#D4AF37] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
            Explore BIM Services
          </button>
        </div>

        {/* IMAGE */}
        <div>
          <img
            src="/images/services/bim-main.jpg"
            alt="BIM"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>

    </section>
  );
}