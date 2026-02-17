"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const AboutMission: React.FC = () => {
    const t = useTranslations("about_page");

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* background decorative element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 transform translate-x-20 z-0 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Visual Side - Overlapping Images */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-20"
                        >
                            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-8 border-white">
                                <Image
                                    src="/images/about/mission.jpg"
                                    alt="Our Mission"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-blue-900/10" />
                            </div>
                        </motion.div>

                        {/* Floating Glass Component */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, y: 50 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute -bottom-10 -right-4 lg:-right-12 z-30 bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white max-w-[280px] hidden md:block"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                </div>
                                <span className="font-bold text-slate-900 leading-tight">Secure & Scalable Solutions</span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Built on enterprise-grade architecture for maximum performance and security.
                            </p>
                        </motion.div>

                        {/* Background Shapes */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-20">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-[100px]" />
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-300 rounded-full blur-[100px]" />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 space-y-12">
                        <div className="max-w-xl">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block text-blue-600 font-bold tracking-[0.25em] uppercase text-xs mb-6 bg-blue-50 px-4 py-2 rounded-full"
                            >
                                {t('mission.badge')}
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-xl md:text-2xl text-black font-bold  mb-8 leading-[1.1]"
                            >
                                {t('mission.intro')}
                            </motion.h2>

                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="flex gap-6 items-start"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{t('mission.title')}</h3>
                                        <p className="text-slate-600 leading-relaxed font-medium">
                                            {t('mission.text')}
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="flex gap-6 items-start"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white shadow-lg shadow-orange-200">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{t('vision.title')}</h3>
                                        <p className="text-slate-600 leading-relaxed font-medium">
                                            {t('vision.text')}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

