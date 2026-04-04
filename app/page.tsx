import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import BIMSection from "@/components/home/BIMSection";
import Clients from "@/components/home/Clients";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <Projects />
      <BIMSection />
      <Clients />
      <CTA />
    </>
  );
}