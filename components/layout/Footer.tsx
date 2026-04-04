import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Abacus Technocrats Pvt. Ltd.
          </h2>
          <p className="text-sm text-gray-300">
            Integrated consultancy services in planning, design, PMC and BIM.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Master Planning</li>
            <li>Design Consultancy</li>
            <li>PMC</li>
            <li>BIM</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-300">Ahmedabad, India</p>
          <p className="text-sm text-gray-300">info@abacus.com</p>
        </div>

      </div>

      <div className="text-center text-sm text-gray-400 py-4 border-t border-gray-700">
        © 2026 Abacus Technocrats Pvt. Ltd.
      </div>
    </footer>
  );
}