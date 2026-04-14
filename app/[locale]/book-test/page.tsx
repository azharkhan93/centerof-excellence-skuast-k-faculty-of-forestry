"use client";

import React from "react";
import { PageHeader } from "@/components";
import { useTranslations } from "next-intl";

export default function BookTestPage() {
    const t = useTranslations('nav');

    return (
        <main className="min-h-screen">
            <PageHeader
                title={t('bookTest')}
                description="Our seamless online booking system for laboratory testing, designed to streamline collaboration between researchers and industry."
                bgColor="bg-slate-900"
                accentColor="from-brand to-brand-dark"
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
                        Digital Test Booking System
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">
                        This module is currently being optimized to provide the best possible experience for our stakeholders. Check back soon for the full interactive booking experience.
                    </p>
                    
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand/10 border border-brand/20 rounded-full text-brand font-semibold text-sm">
                        <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                        System Upgrade in Progress
                    </div>
                </div>
            </section>
        </main>
    );
}
