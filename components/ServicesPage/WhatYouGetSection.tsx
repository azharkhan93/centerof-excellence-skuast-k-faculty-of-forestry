"use client";

import { SERVICES_PAGE_DATA } from "@/constants";
import { motion } from "framer-motion";
import { Handshake, Award, Lightbulb, Headphones } from "lucide-react";

const getIcon = (iconName: string) => {
    switch (iconName) {
        case "Handshake": return Handshake;
        case "Award": return Award;
        case "Lightbulb": return Lightbulb;
        case "Headphones": return Headphones;
        default: return Lightbulb;
    }
};

export const WhatYouGetSection = () => {
    return (
        <section className="py-24  overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
                    >
                        {SERVICES_PAGE_DATA.whatYouGet.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg leading-relaxed"
                    >
                        {SERVICES_PAGE_DATA.whatYouGet.subtitle}
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES_PAGE_DATA.whatYouGet.values.map((value, index) => {
                        const Icon = getIcon(value.icon);
                        return (
                            <motion.div
                                key={value.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group min-h-[220px]"
                            >
                                {/* Gradient Border & Notch */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-500/50 via-slate-700/30 to-slate-400/50 p-[1px] [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_24px),calc(100%_-_24px)_100%,0_100%)]">
                                    <div className="absolute inset-[1px] bg-slate-900 [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_24px),calc(100%_-_24px)_100%,0_100%)] md:bg-opacity-50 md:backdrop-blur-sm" />
                                </div>

                                {/* Content */}
                                <div className="relative h-full p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-white group-hover:text-slate-200 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-slate-200 transition-colors">
                                            {value.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>

                                    {/* Subtle Gradient Glow inside */}
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-slate-500/5 rounded-full blur-2xl group-hover:bg-slate-500/10 transition-colors duration-500" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};
