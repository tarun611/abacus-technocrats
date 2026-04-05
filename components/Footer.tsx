import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white mt-20">
      
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-lg font-semibold tracking-wide">
            Abacus Technocrats Pvt. Ltd.
          </h2>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
            Integrated consultancy services in Master Planning, Design Consultancy,
            PMC and BIM solutions.
          </p>
        </div>

        {/* CENTER */}
        <div className="text-center">
          <h3 className="font-semibold mb-4 text-white">
            Quick Links
          </h3>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-400 justify-center">
            <Link href="/" className="hover:text-[#C5A46D] transition">Home</Link>
            <Link href="/about" className="hover:text-[#C5A46D] transition">About</Link>

            <Link href="/services" className="hover:text-[#C5A46D] transition">Services</Link>
            <Link href="/projects" className="hover:text-[#C5A46D] transition">Projects</Link>

            <Link href="/clients" className="hover:text-[#C5A46D] transition">Clients</Link>
            <Link href="/careers" className="hover:text-[#C5A46D] transition">Careers</Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:text-right">
          <h3 className="font-semibold mb-4 text-white">
            Contact
          </h3>

          <div className="text-sm text-gray-400 space-y-2">
            <p>Ahmedabad, India</p>

            <p>
              <a
                href="mailto:abacus.epc@gmail.com"
                className="hover:text-[#C5A46D] transition"
              >
                abacus.epc@gmail.com
              </a>
            </p>
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700"></div>

      {/* BOTTOM */}
      <div className="text-center text-sm text-gray-500 py-5">
        © 2026 Abacus Technocrats Pvt. Ltd. All rights reserved.
      </div>

    </footer>
  );
}