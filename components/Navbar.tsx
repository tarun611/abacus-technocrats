"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Clients", href: "/clients" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Abacus Technocrats
        </Link>

        {/* Menu */}
        <nav className="flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}