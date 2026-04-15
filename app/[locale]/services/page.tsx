import React from "react";
import { PageHeader, TestingAnalysis, ConsultingServices, CTA } from "@/components";
import { SERVICES_PAGE_DATA } from "@/constants";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
    const t = useTranslations('nav');
    const { hero } = SERVICES_PAGE_DATA;

    return (
        <main className="min-h-screen">
            <PageHeader 
                title={hero.title}
                description={hero.description}
                bgColor="bg-slate-900"
                accentColor="from-brand to-brand-dark"
            />
            
            <TestingAnalysis />
            <ConsultingServices />
            
            {/* <CTA /> */}
        </main>
    );
}
