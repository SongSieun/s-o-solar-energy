import { Header, Footer } from "@/components/layout";
import { Hero, Services, Process, WhyUs, Testimonials, About, FAQ, Contact } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
