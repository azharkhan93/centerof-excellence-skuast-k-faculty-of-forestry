import { Hero, Stats, About, CoreObjectives, InnovationPillars, Process, Services, Testimonials, CTA, ContactWidget, ProductHighlight } from "@/components";

export default function Home() {
    return (
        <main>
            <Hero />
            <Stats />
            <About />
            <CoreObjectives />
            <InnovationPillars />
            <Process />
            {/* <ProductHighlight /> */}
            {/* <Services /> */}
            <Testimonials />
            <CTA />
            <ContactWidget />
        </main>
    );

}
