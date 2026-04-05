export default function Clients() {
  return (
    <section className="pt-6 pb-12 md:pb-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-[#0A1F44]">
          Our Clients
        </h2>

        <p className="mt-4 text-gray-600">
          Trusted by leading organizations and institutions.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">

          <img src="/images/logos/client1.png" alt="Client" className="mx-auto h-12 opacity-70 hover:opacity-100 transition" />
          <img src="/images/logos/client2.png" alt="Client" className="mx-auto h-12 opacity-70 hover:opacity-100 transition" />
          <img src="/images/logos/client3.png" alt="Client" className="mx-auto h-12 opacity-70 hover:opacity-100 transition" />
          <img src="/images/logos/client4.png" alt="Client" className="mx-auto h-12 opacity-70 hover:opacity-100 transition" />

        </div>

      </div>

    </section>
  );
}