import { Hero, Stats, About, CoreObjectives, AboutMandate, WhoWeServe, InnovationPillars, Process, Services, Testimonials, Facilities, LabTour, CTA, ContactWidget, ProductHighlight, AboutMission, WhyChoose, AboutRD } from "@/components";

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
            <WhoWeServe />
            <InnovationPillars />
            <Process />
            <Testimonials />
            <AboutRD />
            <Facilities />
            {/* <WhoWeServe /> */}
            <LabTour />
            {/* <CTA /> */}
            <ContactWidget />
        </main>
    );
}
