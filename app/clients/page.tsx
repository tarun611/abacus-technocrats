export default function ClientsPage() {
  const logos = [
    "adani.png",
    "agp.png",
    "ayurvedik.png",
    "client2.png",
    "germi.png",
    "gspc.png",
    "gspl.png",
    "gujarat-gas.png",
    "mahanagargas.png",
    "piu.png",
    "reliance.png", // ⚠️ must exist
    "rnb.png",
    "tcgl.png",
  ];

  const clients = [
    "Adani Group",
    "AG&P",
    "Ayurvedik Department",
    "MCX (Multi Commodity Exchange)",
    "Gujarat Energy Research & Management Institute (GERMI)",
    "GSPC (Gujarat State Petroleum Corporation)",
    "GSPL (Gujarat State Petronet Limited)",
    "Gujarat Gas Limited",
    "Mahanagar Gas Limited",
    "PIU - Govt. of Gujarat",
    "Reliance Industries Limited",
    "Road & Building Department, Govt. of Gujarat",
    "Tourism Corporation of Gujarat Limited (TCGL)",
  ];

  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F8F5F0] pt-6 pb-12 md:pb-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2B2B2B]">
          Our Clients
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trusted by leading government bodies, institutions, and private sector organizations.
        </p>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">

            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-5 md:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <img
                  src={`/images/logos/${logo}`}
                  alt={logo}
                  className="h-10 md:h-12 w-full object-contain mx-auto grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CLIENT LIST */}
      <section className="py-16 md:py-20 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
            Key Clients
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

            {clients.map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-600"
              >
                ✔ {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 md:py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
            Building Long-Term Partnerships
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Our client relationships are built on trust, quality delivery, and
            consistent performance.
          </p>

        </div>
      </section>

    </main>
  );
}