"use client";

export default function ClientLogos() {
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
    "reliance.png",
    "rnb.png",
    "tcgl.png",
  ];

  return (
    <div className="overflow-hidden py-10 bg-white">
      <div className="flex w-max animate-scroll gap-16 items-center">

        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={`/images/logos/${logo}`}
            alt={logo}
            className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition"
          />
        ))}

      </div>
    </div>
  );
}