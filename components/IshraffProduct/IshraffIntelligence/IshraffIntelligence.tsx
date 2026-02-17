"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ISHRAFF_CONTENT } from "@/constants";

export const IshraffIntelligence: React.FC = () => {
    const { operational } = ISHRAFF_CONTENT;

    return (
        <section className="py-24 ">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] md:text-sm font-bold text-[#48CBB0] tracking-[0.2em] mb-4 block"
                    >
                        {operational.header}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-[#1A365D] mb-6"
                    >
                        {operational.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg leading-relaxed"
                    >
                        {operational.subtitle}
                    </motion.p>
                </div>

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
                            {operational.divider}
                        </span>
                    </motion.div>
                </div>

                {/* Content Section */}
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
                                    src={operational.feature.image}
                                    alt={operational.feature.title}
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-[#1A365D] mb-6 leading-tight">
                            {operational.feature.title}
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            {operational.feature.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
