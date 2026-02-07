import { Header, Footer } from "@/components/layout";
import { Hero, Stats, Services, Process, WhyUs, About, Gallery, FAQ, Contact } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <Gallery />
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
