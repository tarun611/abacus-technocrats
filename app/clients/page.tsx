export default function ClientsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F8F5F0] pt-6 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B]">
          Our Clients
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trusted by leading government bodies, institutions, and private sector organizations.
        </p>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

            {[
              "/images/logos/germi.png",
              "/images/logos/gujarat-gas.png",
              "/images/logos/adani.png",
              "/images/logos/tcgl.png",
              "/images/logos/gujarat-university.png",
              "/images/logos/rnb.png",
              "/images/logos/govt-gujarat.png",
              "/images/logos/private.png",
            ].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <img
                  src={logo}
                  className="h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
                  alt="client"
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CLIENT LIST */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
            Key Clients
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">

            {[
              "Gujarat Energy Research & Management Institute (GERMI)",
              "Gujarat Gas Limited",
              "Adani Total Gas Limited",
              "Tourism Corporation of Gujarat Limited (TCGL)",
              "Gujarat University",
              "Road & Building Department, Govt. of Gujarat",
              "Various Government Departments",
              "Private Sector Clients",
            ].map((item, i) => (
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

      {/* TRUST STATEMENT */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#2B2B2B]">
            Building Long-Term Partnerships
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Our client relationships are built on trust, quality delivery, and
            consistent performance. We strive to exceed expectations and deliver
            value in every project we undertake.
          </p>

        </div>
      </section>

    </main>
  );
}