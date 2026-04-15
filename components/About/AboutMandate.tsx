"use client";

import React from "react";
import { motion } from "framer-motion";
import { MANDATE_DATA } from "@/constants";
import { ShieldCheck, Target, Map, GraduationCap, Share2 } from "lucide-react";

const iconMap: Record<number, any> = {
    0: ShieldCheck,
    1: Target,
    2: Map,
    3: GraduationCap,
    4: Share2
};

export const AboutMandate: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50/50 relative overflow-hidden">
            {/* Scientific Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#0a4d4a 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <span className="text-brand font-black tracking-[0.4em] uppercase text-[10px] block mb-2">
                            Institutional Framework
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a4d4a] tracking-tight">
                            Our <span className="text-slate-900 underline decoration-brand/30 underline-offset-8">Mandate</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 text-sm max-w-md font-medium leading-relaxed">
                        Core strategic responsibilities defining the operational scope and ethical standards of the Centre.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MANDATE_DATA.items.map((item, idx) => {
                        const Icon = iconMap[idx] || ShieldCheck;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="group relative bg-white border border-slate-200 p-7 rounded-2xl shadow-sm hover:shadow-md hover:border-brand/40 transition-all duration-300 flex flex-col"
                            >
                                {/* Professional Top Accent */}
                                <div className="absolute top-0 left-0 w-12 h-1 bg-brand/20 group-hover:w-full group-hover:bg-brand transition-all duration-500 rounded-t-full" />
                                
                                <div className="mb-6 flex items-start justify-between">
                                    <div className="w-10 h-10 rounded-lg bg-brand/5 text-brand flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={20} strokeWidth={2} />
                                    </div>
                                    <span className="text-xs font-black text-slate-300 group-hover:text-brand transition-colors">
                                        PILLAR 0{idx + 1}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight group-hover:text-brand transition-colors">
                                    {item.title}
                                </h3>
                                
                                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium line-clamp-4">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
