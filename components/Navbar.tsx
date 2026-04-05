"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8">
          
          <nav className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative text-sm font-medium transition ${
                    isActive
                      ? "text-[#2B2B2B]"
                      : "text-gray-600 hover:text-[#2B2B2B]"
                  }`}
                >
                  {item.name}

                  {/* underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#C5A46D] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* CONTACT BUTTON */}
          <Link href="/contact">
            <div className="bg-[#C5A46D] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#b8965f] transition shadow-md">
              Contact
            </div>
          </Link>

        </div>

      </div>

    </header>
  );
}