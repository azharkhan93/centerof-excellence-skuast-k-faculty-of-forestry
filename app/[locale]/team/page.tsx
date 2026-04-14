"use client";

import React from "react";
import { PageHeader } from "@/components";
import { useTranslations } from "next-intl";

export default function TeamPage() {
    const t = useTranslations('nav');

    return (
        <main className="min-h-screen">
            <PageHeader
                title={t('team')}
                description="Meet the dedicated experts and researchers behind the Faculty of Forestry and the Centre of Excellence on Herbal Technology."
                bgColor="bg-slate-900"
                accentColor="from-brand to-brand-dark"
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
                        Our Scientific Experts
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">
                        Our team consists of leading botanists, phytochemical analysts, and forestry experts committed to advancing Himalayan herbal technology.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Placeholder for future team members */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="aspect-square rounded-3xl bg-slate-50 border border-slate-100 animate-pulse flex items-center justify-center">
                                <span className="text-slate-300 font-medium">Coming Soon</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
