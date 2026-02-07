import { Header, Footer } from "@/components/layout";
import { Hero, Services, Process, WhyUs, Testimonials, About, Gallery, FAQ, Contact } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Gallery />
        <Testimonials />
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
