"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ISHRAFF_CONTENT } from "@/constants";

export const IshraffOversight: React.FC = () => {
    const { strategic } = ISHRAFF_CONTENT;

    return (
        <section className="py-24 ">
            <div className="container mx-auto px-6">
                {/* Divider Section */}
                <div className="relative flex items-center justify-center mb-24">
                    <div className="absolute left-0 right-0 h-[1px] bg-slate-600" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10 bg-[#FCFCF9] px-8 py-2 border border-[#48CBB0]/20 rounded-full"
                    >
                        <span className="text-[10px] md:text-xs font-bold text-[#48CBB0] tracking-[0.3em] uppercase">
                            {strategic.divider}
                        </span>
                    </motion.div>
                </div>

                {/* S-Curve Feature */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <div className="relative aspect-[1.4/1] rounded-[2rem] overflow-hidden bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 p-6 md:p-8">
                            <div className="relative w-full h-full rounded-xl overflow-hidden group">
                                <Image
                                    src={strategic.sCurve.image}
                                    alt={strategic.sCurve.title}
                                    fill
                                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 max-w-xl"
                    >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#48CBB0]/10 text-[#48CBB0] mb-8">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-[#1A365D] mb-6 leading-tight">
                            {strategic.sCurve.title}
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            {strategic.sCurve.description}
                        </p>
                    </motion.div>
                </div>

                {/* Portfolio Oversight Feature */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <div className="relative aspect-[1.4/1] rounded-[2rem] overflow-hidden bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 p-6 md:p-8">
                            <div className="relative w-full h-full rounded-xl overflow-hidden group">
                                <Image
                                    src={strategic.portfolio.image}
                                    alt={strategic.portfolio.title}
                                    fill
                                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 max-w-xl"
                    >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#48CBB0]/10 text-[#48CBB0] mb-8">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12h.01M9 12h.01M15 12h.01" />
                            </svg>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-[#1A365D] mb-6 leading-tight">
                            {strategic.portfolio.title}
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            {strategic.portfolio.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
