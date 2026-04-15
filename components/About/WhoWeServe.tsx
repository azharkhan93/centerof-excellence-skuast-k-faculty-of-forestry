"use client";

import React from "react";
import { motion } from "framer-motion";
import { SERVED_AUDIENCE } from "@/constants";
import * as LucideIcons from "lucide-react";

export const WhoWeServe: React.FC = () => {
    return (
        <section className="py-12 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Compact Side Heading */}
                    <div className="shrink-0">
                        <span className="text-brand font-black tracking-[0.4em] uppercase text-[10px] block mb-1">
                            Target Ecosystem
                        </span>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">
                            Who We <span className="text-brand">Serve</span>
                        </h2>
                    </div>

                    {/* High-Density Badge Grid */}
                    <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
                        {SERVED_AUDIENCE.map((item, idx) => {
                            // @ts-ignore
                            const Icon = LucideIcons[item.icon] || LucideIcons.CheckCircle2;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-brand/30 hover:shadow-md transition-all duration-300 group cursor-default"
                                >
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-300">
                                        <Icon size={16} strokeWidth={2} />
                                    </div>
                                    <span className="text-[11px] md:text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors leading-tight">
                                        {item.title}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
