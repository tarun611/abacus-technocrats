import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import BIMSection from "@/components/home/BIMSection";
import CTA from "@/components/home/CTA";
import ClientLogos from "@/components/ClientLogos"; // ✅ NEW

export default function Home() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <section className="py-16 md:py-24">
        <AboutPreview />
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24 bg-[#F8F5F0]">
        <Services />
      </section>

      {/* PROJECTS */}
      <section className="py-16 md:py-24">
        <Projects />
      </section>

      {/* BIM */}
      <section className="py-16 md:py-24 bg-[#F8F5F0]">
        <BIMSection />
      </section>

      {/* CLIENT LOGO SCROLL (NEW PREMIUM SECTION) */}
      <section className="py-16 md:py-24 bg-white">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#2B2B2B] mb-10">
          Trusted By Leading Clients
        </h2>

        <ClientLogos />
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <CTA />
      </section>

    </main>
  );
}