import { Hero, Stats, About, CoreObjectives, InnovationPillars, Process, Services, Testimonials, Facilities, LabTour, CTA, ContactWidget, ProductHighlight, AboutMission } from "@/components";

export default function Home() {
    return (
        <main>
            <Hero />
            <Stats />
            {/* <AboutMission /> */}
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
