"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { COMPANY_JOURNEY } from "@/constants";

export const AboutJourney: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 transform translate-x-1/2 -z-1" />

            <div className="container mx-auto px-6 md:px-16 text-center mb-20">
                <span className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">
                    Our Milestones
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight">
                    A Journey of <span className="text-brand">Innovation</span>
                </h2>
            </div>

            <div className="container mx-auto px-6 md:px-16 max-w-5xl">
                <div className="relative">
                   
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-slate-100 h-full hidden lg:block" />

                    <div className="grid grid-cols-1 gap-12 lg:gap-24">
                        {COMPANY_JOURNEY.map((item, index) => (
                            <div key={item.id} className={`lg:flex items-center justify-between ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                              
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                    className="lg:w-5/12 p-8 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-brand/20 transition-all group"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-3xl font-black text-brand/10">{item.year}</span>
                                        <div className="h-px flex-grow bg-slate-100" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>

                                {/* Dot / Spacer */}
                                <div className="hidden lg:flex items-center justify-center w-2/12 relative z-10">
                                    <div className="w-4 h-4 rounded-full bg-brand border-4 border-white shadow-lg group-hover:scale-125 transition-transform" />
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
