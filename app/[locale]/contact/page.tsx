import React from "react";
import {  PageHeader } from "@/components";
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations('nav');
    return (
        <div className="min-h-screen">
            <PageHeader
                title={t('contact')}
                description="Have a question or looking to start a project? We'd love to hear from you. Get in touch with our team today."
                bgColor="bg-slate-900"
                accentColor="from-orange-400 to-orange-600"
            />
           
        </div>
    );
}



