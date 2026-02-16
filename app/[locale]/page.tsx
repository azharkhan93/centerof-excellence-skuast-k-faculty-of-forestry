import { Navbar, Hero, About, Process, Services, Testimonials, CTA, Footer, ContactWidget } from "@/components";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Process />
            <Services />
            <Testimonials />
            <CTA />
            <Footer />
            <ContactWidget />
        </main>
    );
}
