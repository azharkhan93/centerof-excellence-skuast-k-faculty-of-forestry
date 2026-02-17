"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import * as LucideIcons from "lucide-react";
import { CORE_VALUES } from "@/constants";

export const AboutValues: React.FC = () => {
    const t = useTranslations("about_page.values");

    return (
        <section className="py-24  relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container mx-auto px-6 md:px-16 text-center mb-16 relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
                >
                    {t('badge')}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-slate-950 mb-6"
                >
                    {t('title')}
                </motion.h2>
            </div>

            <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {CORE_VALUES.map((value, index) => {
                    // @ts-ignore
                    const Icon = LucideIcons[value.icon];
                    return (
                        <motion.div
                            key={value.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100 text-center"
                        >
                            <div className="w-20 h-20 mx-auto bg-slate-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                                {Icon && <Icon size={32} strokeWidth={1.5} />}
                            </div>
                            <h3 className="text-xl font-bold text-slate-950 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                                {t(`${value.key}.title`)}
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {t(`${value.key}.desc`)}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
