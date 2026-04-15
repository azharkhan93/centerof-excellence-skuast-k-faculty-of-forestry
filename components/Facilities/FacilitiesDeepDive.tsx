"use client";

import React from "react";
import { motion } from "framer-motion";
import { FACILITIES_DATA } from "@/constants";
import * as LucideIcons from "lucide-react";

export const FacilitiesDeepDive: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Engineering Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#0a4d4a 1px, transparent 1px), linear-gradient(90deg, #0a4d4a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Introduction Section */}
                <div className="mb-20 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-brand font-black tracking-[0.4em] uppercase text-[10px] block mb-4">
                            Institutional Resource
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 max-w-2xl leading-[1.1]">
                            Advanced <span className="text-brand">Research Infrastructure</span>
                        </h2>
                        <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                            CoEHT is equipped with state-of-the-art research facilities for advanced analytical, experimental, and technological applications. By leveraging cutting-edge technology, the Centre aims to foster innovation, facilitate knowledge-sharing, and contribute to the growth and development of the herbal sector.
                        </p>
                    </motion.div>
                </div>

                {/* Facilities Technical Ledger */}
                <div className="border-t border-slate-100 flex flex-col">
                    {FACILITIES_DATA.map((facility, idx) => {
                        // @ts-ignore
                        const Icon = LucideIcons[facility.icon] || LucideIcons.Zap;
                        return (
                            <motion.div
                                key={facility.id}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="group relative py-10 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 hover:bg-slate-50/50 transition-colors px-4 -mx-4 rounded-xl"
                            >
                                {/* Leading ID & Icon */}
                                <div className="flex items-center gap-6 lg:w-1/4 shrink-0">
                                    <span className="text-[10px] font-black text-slate-300 font-mono tracking-widest">
                                        {(idx + 1).toString().padStart(2, '0')}
                                    </span>
                                    <div className="w-12 h-12 rounded-xl bg-white text-brand border border-slate-100 flex items-center justify-center group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-500 shadow-sm">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 tracking-tight lg:hidden">
                                        {facility.title}
                                    </h3>
                                </div>

                                {/* Title & Main Desc */}
                                <div className="lg:w-1/3">
                                    <h3 className="text-xl font-bold text-slate-900 tracking-tight hidden lg:block mb-2 group-hover:text-brand transition-colors">
                                        {facility.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                        {facility.description}
                                    </p>
                                </div>

                                {/* Technical Specs (Tags) */}
                                <div className="lg:w-5/12 flex flex-wrap gap-2">
                                    {facility.features?.map((feature, i) => (
                                        <div 
                                            key={i} 
                                            className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[10px] font-bold text-slate-600 uppercase tracking-tighter group-hover:border-brand/20 group-hover:text-slate-800 transition-all shadow-sm"
                                        >
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Side Action/Status */}
                                <div className="hidden lg:flex items-center gap-2 text-brand/20 group-hover:text-brand transition-colors">
                                    <LucideIcons.ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
