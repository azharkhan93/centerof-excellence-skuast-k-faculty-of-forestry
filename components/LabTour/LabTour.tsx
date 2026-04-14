"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { LAB_TOUR_DATA } from "@/constants";
import { Button } from "@/components/Button";

export const LabTour: React.FC = () => {
    return (
        <section className="relative h-[450px] md:h-[550px] w-full overflow-hidden bg-black">
            {/* Immersive Background */}
            <motion.div 
                className="absolute inset-0"
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <Image
                    src={LAB_TOUR_DATA.mainImage}
                    alt="Laboratory Tour"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent" />
            </motion.div>

            {/* Content Left Aligned */}
            <div className="absolute inset-0 z-20 flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <span className="inline-block px-3 py-1 bg-brand/20 border border-brand/30 rounded-full text-brand text-[10px] items-center md:text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            {LAB_TOUR_DATA.subtitle}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {LAB_TOUR_DATA.title}
                        </h2>
                        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                            {LAB_TOUR_DATA.description}
                        </p>

                        <div className="flex items-center gap-6">
                            <Button variant="primary" size="lg" className="rounded-full px-8 group relative overflow-hidden">
                                <span className="flex items-center gap-3 relative z-10 transition-transform group-hover:scale-105">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                        <Play size={16} fill="white" className="ml-0.5" />
                                    </div>
                                    <span className="font-bold tracking-wide">Watch Tour</span>
                                </span>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Overlay for depth */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
};
