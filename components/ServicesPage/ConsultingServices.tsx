"use client";

import React from "react";
import { motion } from "framer-motion";
import { SERVICES_PAGE_DATA } from "@/constants";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const ConsultingServices: React.FC = () => {
    const { consulting } = SERVICES_PAGE_DATA;

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Light Scientific Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to right, #0a4d4a 1px, transparent 1px), linear-gradient(to bottom, #0a4d4a 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                    <div className="lg:w-1/2">
                        <span className="text-brand font-black tracking-[0.4em] uppercase text-[9px] block mb-4">
                            Expert Advisory
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 leading-tight text-slate-900">
                            {consulting.title}
                        </h2>
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 font-medium">
                            Tailored institutional consulting for large-scale herbal production and market integration.
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                            <div className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Site Surveys</span>
                            </div>
                            <div className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Techno-Economic</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-1 gap-3">
                            {consulting.items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    className="group relative flex items-center gap-4 p-4 rounded-xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-brand/30 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
                                >
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-500">
                                        <CheckCircle2 size={16} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-slate-700 group-hover:text-slate-900 transition-colors font-bold text-xs md:text-sm tracking-tight">
                                            {item}
                                        </p>
                                    </div>
                                    <ArrowRight className="text-slate-200 group-hover:text-brand group-hover:translate-x-1 transition-all" size={16} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
