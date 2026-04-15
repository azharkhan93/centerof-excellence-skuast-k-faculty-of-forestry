"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { RD_PRIORITIES_DATA } from "@/constants";

export const AboutRD: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden relative">
            {/* Soft decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="mb-20 text-center">
                    <span className="text-brand font-black tracking-[0.3em] uppercase text-[10px] block mb-4">
                        R&D Framework
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Priority <span className="text-brand">Research</span> Areas
                    </h2>
                    <div className="mt-6 h-1 w-12 bg-brand mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {RD_PRIORITIES_DATA.map((item, idx) => {
                        // @ts-ignore
                        const Icon = LucideIcons[item.icon];
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-brand/20 transition-all duration-500 group relative overflow-hidden"
                            >
                                {/* Subtle numbering */}
                                <div className="absolute top-6 right-8 text-4xl font-black text-slate-50 group-hover:text-brand/5 transition-colors">
                                    0{item.id}
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-10 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                                        {Icon && <Icon size={26} strokeWidth={1.5} />}
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight group-hover:text-brand transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand group-hover:w-full transition-all duration-700" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
