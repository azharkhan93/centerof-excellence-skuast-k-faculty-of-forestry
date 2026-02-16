import { Navbar, Hero, About, Process, CTA, Testimonials, Footer } from "@/components";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
