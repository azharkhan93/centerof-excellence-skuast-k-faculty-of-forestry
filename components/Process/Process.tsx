"use client";

import React from "react";
import { Settings2, FileCheck, Users, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { PROCESS_DATA } from "@/constants";

const iconMap = {
    Settings2,
    FileCheck,
    Users,
    Handshake
};

export const Process: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <span className="text-brand font-bold tracking-widest uppercase text-xs block mb-4">
                        Standard Workflow
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        How We Work
                    </h2>
                </div>

                <div className="relative">
                    {/* Connection Path (Animated) */}
                    <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 hidden lg:block overflow-visible pointer-events-none">
                        <svg width="100%" height="240" viewBox="0 0 1200 240" fill="none" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <motion.path
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.2 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                d="M50,180 L350,60 L650,180 L950,60 L1150,180"
                                stroke="var(--color-brand)"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4">
                        {PROCESS_DATA.map((step, idx) => {
                            const Icon = iconMap[step.iconName as keyof typeof iconMap];
                            const isEven = idx % 2 === 1;

                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className={`flex flex-col items-center text-center relative group ${isEven ? "lg:-translate-y-12" : "lg:translate-y-12"
                                        } transition-transform duration-500`}
                                >
                                    <div className="relative mb-8">
                                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl shadow-brand/10 border border-gray-50 relative z-10 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-10 h-10 text-brand" />
                                        </div>

                                        <div className="absolute -top-2 -left-2 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20 border-2 border-white">
                                            {step.id}
                                        </div>

                                        <div className="absolute inset-0 bg-brand/10 rounded-full blur-xl scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div className="max-w-[240px]">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
