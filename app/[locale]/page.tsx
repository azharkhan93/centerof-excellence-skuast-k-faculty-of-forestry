import { Hero, Stats, About, CoreObjectives, InnovationPillars, Process, Services, Testimonials, Facilities, LabTour, CTA, ContactWidget, ProductHighlight, AboutMission, WhyChoose } from "@/components";

export default function Home() {
    return (
        <main>
            <Hero />
            <Stats />
            <WhyChoose />
            {/* <AboutMission />
             <About />  */}
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
