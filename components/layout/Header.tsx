"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <Link href="/">
          <div className="text-xl font-bold text-[#0A1F44] cursor-pointer">
            Abacus Technocrats
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#0A1F44]">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/careers">Careers</Link>
        </nav>

        <Link href="/contact">
          <button className="bg-[#0A1F44] text-white px-5 py-2 rounded-md hover:bg-[#D4AF37] transition">
            Get Consultation
          </button>
        </Link>

      </div>
    </header>
  );
}