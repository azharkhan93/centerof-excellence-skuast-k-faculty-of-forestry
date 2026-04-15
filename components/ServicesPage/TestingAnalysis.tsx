"use client";

import React from "react";
import { motion } from "framer-motion";
import { SERVICES_PAGE_DATA } from "@/constants";
import * as LucideIcons from "lucide-react";

export const TestingAnalysis: React.FC = () => {
    const { testingAnalysis } = SERVICES_PAGE_DATA;

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Scientific Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#0a4d4a 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="mb-12 max-w-2xl">
                    <span className="text-brand font-black tracking-[0.4em] uppercase text-[10px] block mb-3">
                        Scientific Portal
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-4">
                        {testingAnalysis.title}
                    </h2>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                        Professional analytical services following standardized SOPs for accurate results.
                    </p>
                </div>

                {/* Compact Registration Annexures */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {testingAnalysis.annexures.map((annexure, idx) => (
                        <motion.div
                            key={annexure.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className={`relative p-6 rounded-2xl border ${annexure.color === 'brand' ? 'border-brand/20 bg-brand/[0.01]' : 'border-slate-200 bg-slate-50/30'} group`}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className={`px-3 py-1 rounded-md text-[9px] font-black tracking-widest uppercase ${annexure.color === 'brand' ? 'bg-brand text-white' : 'bg-slate-900 text-white'}`}>
                                    {annexure.label}
                                </span>
                                <LucideIcons.FileText className="text-slate-300 group-hover:text-brand transition-colors" size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
                                {annexure.title}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a href={annexure.sopPath} className="px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold text-[11px] hover:border-brand hover:text-brand transition-all flex items-center justify-center gap-2">
                                    <LucideIcons.Download size={14} /> SOPs
                                </a>
                                <a href={annexure.formPath} className="px-4 py-2.5 rounded-lg bg-brand text-white font-bold text-[11px] hover:bg-brand-dark transition-all flex items-center justify-center gap-2">
                                    <LucideIcons.PenTool size={14} /> Register Now
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tighter Technical Domains Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {testingAnalysis.categories.map((cat, idx) => {
                        // @ts-ignore
                        const Icon = LucideIcons[cat.icon] || LucideIcons.FlaskConical;
                        return (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="group bg-white border border-slate-100 p-6 rounded-2xl hover:border-brand/20 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="mb-6 w-10 h-10 rounded-xl bg-slate-50 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-300">
                                    <Icon size={18} strokeWidth={2} />
                                </div>
                                <h4 className="text-base font-bold text-slate-900 mb-4 tracking-tight group-hover:text-brand transition-colors">
                                    {cat.title}
                                </h4>
                                <ul className="space-y-2.5 flex-grow">
                                    {cat.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-[11px] md:text-xs text-slate-500 font-medium leading-tight">
                                            <div className="mt-1 w-1 h-1 rounded-full bg-slate-300 group-hover:bg-brand transition-colors shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
