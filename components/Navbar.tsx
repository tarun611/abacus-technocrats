"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Clients", path: "/clients" },
  { name: "Careers", path: "/careers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Abacus Technocrats"
            width={140}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative text-sm font-medium ${
                    isActive
                      ? "text-[#2B2B2B]"
                      : "text-gray-600 hover:text-[#2B2B2B]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <Link href="/contact">
            <div className="bg-[#C5A46D] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#b8965f]">
              Contact
            </div>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl text-[#2B2B2B]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4 shadow-md">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 text-base font-medium hover:text-[#C5A46D]"
            >
              {item.name}
            </Link>
          ))}

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <div className="mt-4 bg-[#C5A46D] text-white px-5 py-3 rounded-lg text-center">
              Contact
            </div>
          </Link>

        </div>
      )}

    </header>
  );
}