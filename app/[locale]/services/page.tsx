import { ServiceSection, WhatYouGetSection, PageHeader } from "@/components";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
    const t = useTranslations('nav');

    return (
        <main className=" min-h-screen">
            <PageHeader
                title="Services"
                description="Explore our comprehensive range of technology services, from custom software development to advanced cybersecurity solutions."
                bgColor="bg-slate-950"
                accentColor="from-emerald-500 to-teal-600"
            />
            <ServiceSection />
            <WhatYouGetSection />
        </main>
    );
}



