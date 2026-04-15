"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { WHY_CHOOSE_DATA } from "@/constants";

export const WhyChoose: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:grid md:grid-cols-12 gap-20 items-center">
                    
                    
                    <div className="md:col-span-5 relative">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Medium Image */}
                            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src="/images/hero2.webp" 
                                    alt="Research Excellence"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Smaller Floating Image */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-10 -right-10 w-44 h-44 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden md:block"
                            >
                                <Image
                                    src="/images/hero2.webp"
                                    alt="Advanced Instrumentation"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand/10 rounded-full blur-2xl -z-1" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-brand/20 rounded-[2rem] -rotate-3 -z-1 translate-x-4" />
                        </motion.div>
                    </div>

                    {/* Content Section - High Density */}
                    <div className="lg:col-span-7">
                        <div className="mb-12">
                            <span className="text-brand font-black tracking-[0.3em] uppercase text-[10px] block mb-4">
                                Strategic Advantage
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                                Why Choose <span className="text-brand">CoEHT</span>
                            </h2>
                            <p className="mt-6 text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
                                We bridge the gap between Himalayan biodiversity and global industrial requirements through clinical precision and rapid technological intervention.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                            {WHY_CHOOSE_DATA.map((item, idx) => {
                                // @ts-ignore
                                const Icon = LucideIcons[item.icon];
                                return (
                                    <motion.div 
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-5 group"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand group-hover:text-white transition-all shadow-sm border border-slate-100">
                                            {Icon && <Icon size={20} strokeWidth={2} />}
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tight group-hover:text-brand transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
