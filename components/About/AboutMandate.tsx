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
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Scientific Grid Overlays */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#0a4d4a 1px, transparent 1px), linear-gradient(90deg, #0a4d4a 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand font-black tracking-[0.4em] uppercase text-[10px] block mb-4">
                        Institutional Responsibility
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
                        Mandate of <span className="text-brand">CoEHT</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Technical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {MANDATE_DATA.items.map((item, idx) => {
                            const Icon = iconMap[idx];
                            const isEven = idx % 2 === 0;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}
                                >
                                    {/* Central Marker */}
                                    <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-white border-4 border-slate-50 shadow-xl rounded-2xl flex items-center justify-center transform -translate-x-1/2 z-20 md:mt-2">
                                        <div className="w-2 h-2 rounded-full bg-brand" />
                                    </div>

                                    {/* Content Area */}
                                    <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div className="group">
                                            <div className={`flex items-center gap-4 mb-4 ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                                                <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">
                                                    <Icon size={18} strokeWidth={2} />
                                                </div>
                                                <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-brand transition-colors">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Empty space for the other side */}
                                    <div className="hidden md:block md:w-5/12" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
