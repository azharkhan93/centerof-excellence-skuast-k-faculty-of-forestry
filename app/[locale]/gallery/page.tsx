"use client";

import React from "react";
import { PageHeader } from "@/components";
import { useTranslations } from "next-intl";

export default function GalleryPage() {
    const t = useTranslations('nav');

    return (
        <main className="min-h-screen">
            <PageHeader
                title={t('gallery')}
                description="A visual journey through our laboratories, botanical archives, and the sustainable forestry projects at SKUAST-K Kashmir."
                bgColor="bg-slate-900"
                accentColor="from-brand to-brand-dark"
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
                        Institutional Gallery
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">
                        Capturing the intersection of Himalayan tradition and state-of-the-art scientific exploration.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Placeholder for future gallery items */}
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="aspect-square rounded-2xl bg-slate-50 border border-slate-100 animate-pulse flex items-center justify-center">
                                <IconPlaceholder />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

const IconPlaceholder = () => (
    <svg className="w-8 h-8 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);
