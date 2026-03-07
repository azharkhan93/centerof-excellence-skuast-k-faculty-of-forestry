"use client";

import React from "react";
import { PageHeader, ContactInfo, ContactMap, ContactPageForm, ContactDetailsSide } from "@/components";
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations('nav');
    const tContact = useTranslations('contactPage');

    return (
        <main className="min-h-screen ">
            <PageHeader
                title={t('contact')}
                description={tContact('header.description')}
                bgColor="bg-slate-950"
                accentColor="from-blue-600 to-indigo-600"
            />

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <ContactInfo />

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-20 items-stretch">
                        <div className="lg:w-1/2 w-full">
                            <ContactPageForm />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <ContactDetailsSide />
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="max-w-screen-xl mx-auto">
                            <ContactMap />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
