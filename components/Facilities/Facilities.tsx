"use client";

import React from "react";
import { motion } from "framer-motion";
import { FACILITIES_DATA } from "@/constants";
import { FacilityCard } from "./FacilityCard";

export const Facilities: React.FC = () => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-white">
           
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
              
                <div className="max-w-3xl mb-16 md:mb-24 text-center mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-brand/10 border border-brand/20 rounded-full text-brand text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
                            Precision Lab Units
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-[1.1]">
                            Our Specialized Facilities
                        </h2>
                        <p className="text-slate-600 text-lg md:text-xl leading-relaxed mx-auto max-w-2xl">
                            Equipped with world-class analytical instrumentation to support advanced phytochemical evaluation and medicinal plant research.
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {FACILITIES_DATA.slice(0, 4).map((facility, index) => (
                        <FacilityCard
                            key={facility.id}
                            {...facility}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
