"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { COMPANY_JOURNEY } from "@/constants";

export const AboutJourney: React.FC = () => {
    const t = useTranslations("about_page.journey");

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-16 text-center mb-20">
                <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                    {t('badge')}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-950">
                    {t('title')}
                </h2>
            </div>

            <div className="container mx-auto px-6 md:px-16 max-w-5xl">
                <div className="relative">
                    {/* Center line for desktop */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-slate-100 h-full hidden lg:block" />

                    <div className="space-y-12 lg:space-y-0">
                        {COMPANY_JOURNEY.map((item, index) => (
                            <div key={item.id} className={`lg:flex items-center justify-between ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                              
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                    className="lg:w-5/12 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
                                >
                                    <span className="text-2xl font-black text-blue-600/20 mb-2 block">{item.year}</span>
                                    <h3 className="text-xl font-bold text-slate-950 mb-3">{t(`${item.key}.title`)}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{t(`${item.key}.desc`)}</p>
                                </motion.div>

                                {/* Dot / Spacer */}
                                <div className="hidden lg:flex items-center justify-center w-2/12 relative z-10">
                                    <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md" />
                                </div>

                                {/* Placeholder for balance */}
                                <div className="hidden lg:block lg:w-5/12" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
