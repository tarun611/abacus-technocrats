"use client";

export default function HexLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 backdrop-blur-md animate-fade-in">
      
      <div className="relative w-28 h-28">

        {/* OUTER HEX */}
        <div
          className="absolute inset-0 clip-hex border-[3px] bg-white"
          style={{
            borderColor: "#8A9B88",
            boxShadow: "0 0 30px rgba(138,155,136,0.25)",
          }}
        ></div>

        {/* INNER BASE */}
        <div className="absolute inset-3 clip-hex bg-[#8A9B88]/10"></div>

        {/* LIGHT SWEEP */}
        <div
          className="absolute inset-3 clip-hex animate-hex-sweep"
          style={{
            background:
              "linear-gradient(120deg, transparent 35%, rgba(255,255,255,0.9), transparent 65%)",
          }}
        ></div>

      </div>

    </div>
  );
}