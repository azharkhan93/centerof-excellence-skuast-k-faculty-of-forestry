"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import * as LucideIcons from "lucide-react";
import { CORE_VALUES } from "@/constants";


import { OBJECTIVES_DATA } from "@/constants";

export const AboutObjectives: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container mx-auto px-6 md:px-16 text-center mb-16 relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-4 block"
                >
                    Institutional Framework
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold text-slate-950 mb-6 tracking-tight"
                >
                    Scientific <span className="text-brand">Objectives</span>
                </motion.h2>
            </div>

            <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-3 gap-8 relative z-10">
                {OBJECTIVES_DATA.map((obj, index) => {
                    // @ts-ignore
                    const Icon = LucideIcons[obj.iconName];
                    return (
                        <motion.div
                            key={obj.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100"
                        >
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                                {Icon && <Icon size={28} strokeWidth={1.5} />}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-brand transition-colors">
                                {obj.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm font-medium">
                                {obj.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
