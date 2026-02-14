import { Header, Footer } from "@/components/layout";
import { Hero, Stats, Services, Process, WhyUs, About, Gallery, CaseStudies, FAQ, Contact } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <Gallery />
        <CaseStudies />
        <Services />
        <WhyUs />
        <About />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
