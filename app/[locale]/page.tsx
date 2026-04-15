import { Hero, Stats, About, CoreObjectives, AboutMandate, InnovationPillars, Process, Services, Testimonials, Facilities, LabTour, CTA, ContactWidget, ProductHighlight, AboutMission, WhyChoose, AboutRD } from "@/components";

export default function Home() {
    return (
        <main>
            <Hero />
            <Stats />
            <WhyChoose />
            {/* <AboutMission />
             <About />  */}
            <CoreObjectives />
            <AboutMandate />
            <InnovationPillars />
            <Process />
            <Testimonials />
            <AboutRD />
            <Facilities />
            <LabTour />
            {/* <CTA /> */}
            <ContactWidget />
        </main>
    );
}
