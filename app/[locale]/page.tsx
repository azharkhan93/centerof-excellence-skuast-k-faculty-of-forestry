import { Hero, Stats, About, CoreObjectives, InnovationPillars, Process, Services, Testimonials, Facilities, LabTour, CTA, ContactWidget, ProductHighlight } from "@/components";

export default function Home() {
    return (
        <main>
            <Hero />
            <Stats />
            <About />
            <CoreObjectives />
            <InnovationPillars />
            <Process />
            <Testimonials />
            <Facilities />
            <LabTour />
            {/* <CTA /> */}
            <ContactWidget />
        </main>
    );
}
