export default function ClientsPage() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-[#0A1F44] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Clients
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Trusted by leading government bodies, institutions, and private sector organizations.
        </p>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">

            <img src="/images/logos/germi.png" className="mx-auto h-16 opacity-80 hover:opacity-100 transition" />
            <img src="/images/logos/gujarat-gas.png" className="mx-auto h-16 opacity-80 hover:opacity-100 transition" />
            <img src="/images/logos/adani.png" className="mx-auto h-16 opacity-80 hover:opacity-100 transition" />
            <img src="/images/logos/tcgl.png" className="mx-auto h-16 opacity-80 hover:opacity-100 transition" />
            <img src="/images/logos/gujarat-university.png" className="mx-auto h-16 opacity-80 hover:opacity-100 transition" />
            <img src="/images/logos/rnb.png" className="mx-auto h-16 opacity-80 hover:opacity-100 transition" />
            <img src="/images/logos/govt-gujarat.png" className="mx-auto h-16 opacity-80 hover:opacity-100 transition" />
            <img src="/images/logos/private.png" className="mx-auto h-16 opacity-80 hover:opacity-100 transition" />

          </div>

        </div>
      </section>

      {/* CLIENT LIST (TEXT FORMAT) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0A1F44]">
            Key Clients
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-4 text-gray-600">

            <p>✔ Gujarat Energy Research & Management Institute (GERMI)</p>
            <p>✔ Gujarat Gas Limited</p>
            <p>✔ Adani Total Gas Limited</p>
            <p>✔ Tourism Corporation of Gujarat Limited (TCGL)</p>
            <p>✔ Gujarat University</p>
            <p>✔ Road & Building Department, Govt. of Gujarat</p>
            <p>✔ Various Government Departments</p>
            <p>✔ Private Sector Clients</p>

          </div>

        </div>
      </section>

      {/* TRUST STATEMENT */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0A1F44]">
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