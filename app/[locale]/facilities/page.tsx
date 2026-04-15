import React from "react";
import { PageHeader, FacilitiesDeepDive, LabTour } from "@/components";
import { useTranslations } from "next-intl";

export default function FacilitiesPage() {
    const t = useTranslations('nav');

    return (
        <main className="min-h-screen">
            <PageHeader
                title="Our Facilities"
                description="Equipped with world-class analytical instrumentation to support advanced phytochemical evaluation and medicinal plant research."
                bgColor="bg-slate-900"
                accentColor="from-brand to-brand-dark"
            />
            
            <FacilitiesDeepDive />
            
            <LabTour />
        </main>
    );
}
