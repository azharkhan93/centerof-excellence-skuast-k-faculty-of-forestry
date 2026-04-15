"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { RD_PRIORITIES_DATA } from "@/constants";

export const AboutRD: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Background architectural grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="mb-20">
                    <span className="text-brand-light font-black tracking-[0.3em] uppercase text-[10px] block mb-4">
                        R&D Framework
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Priority <span className="text-brand">Research</span> Areas
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800 overflow-hidden rounded-3xl">
                    {RD_PRIORITIES_DATA.map((item, idx) => {
                        // @ts-ignore
                        const Icon = LucideIcons[item.icon];
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-slate-900 p-8 hover:bg-slate-950 transition-all duration-500 group"
                            >
                                <div className="mb-10 flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                                        {Icon && <Icon size={24} strokeWidth={1.5} />}
                                    </div>
                                    <span className="text-[10px] font-black text-slate-700 tracking-tighter">
                                        0{item.id}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4 tracking-tight group-hover:text-brand transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
