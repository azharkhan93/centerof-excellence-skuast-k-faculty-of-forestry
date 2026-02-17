import { Hero, About, Process, Services, Testimonials, CTA, ContactWidget, ProductHighlight } from "@/components";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Process />
            <ProductHighlight />
            <Services />
            <Testimonials />
            <CTA />
            <ContactWidget />
        </main>
    );

}
