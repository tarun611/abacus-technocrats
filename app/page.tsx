import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import BIMSection from "@/components/home/BIMSection";
import Clients from "@/components/home/Clients";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />

      <section className="py-16 md:py-24">
        <AboutPreview />
      </section>

      <section className="py-16 md:py-24 bg-light">
        <Services />
      </section>

      <section className="py-16 md:py-24">
        <Projects />
      </section>

      <section className="py-16 md:py-24 bg-light">
        <BIMSection />
      </section>

      <section className="py-16 md:py-24">
        <Clients />
      </section>

      <section className="py-16 md:py-24">
        <CTA />
      </section>
    </main>
  );
}