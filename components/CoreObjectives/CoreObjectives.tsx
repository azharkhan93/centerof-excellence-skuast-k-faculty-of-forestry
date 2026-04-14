"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sprout, FlaskConical, Users, LucideIcon } from "lucide-react";
import { OBJECTIVES_DATA } from "@/constants";

const iconMap: Record<string, LucideIcon> = {
    Sprout: Sprout,
    FlaskConical: FlaskConical,
    Users: Users
};

import { useLoading } from "@/context/LoadingContext";

const ObjectiveCard = ({ item, index }: { item: typeof OBJECTIVES_DATA[0], index: number }) => {
    const Icon = iconMap[item.iconName] || Sprout;
    const { isLoaded } = useLoading();
    
    if (!isLoaded) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="relative p-6 md:p-7 bg-white border-l-4 border-brand shadow-[0_8px_20px_-12px_rgba(10,77,74,0.1)] hover:shadow-[0_15px_30px_-12px_rgba(10,77,74,0.15)] transition-all duration-300 flex flex-col items-start text-left h-full">
                {/* Index Number */}
                <span className="absolute top-4 right-6 text-5xl font-black text-brand/5 group-hover:text-brand/10 transition-colors duration-500 select-none">
                    0{index + 1}
                </span>

                <div className="mb-4 p-3 rounded-xl bg-brand/5 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300 relative z-10">
                    <Icon size={24} strokeWidth={2} />
                </div>
                
                <h3 className="text-xl font-bold text-[#0a4d4a] mb-2 leading-snug relative z-10">
                    {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 relative z-10">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
};

export const CoreObjectives: React.FC = () => {
    return (
        <section className="relative py-16 bg-slate-50/50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 text-brand font-bold mb-3"
                    >
                        <span className="uppercase tracking-[0.2em] text-[10px]">Institutional Pillars</span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold text-[#0a4d4a] leading-tight"
                    >
                        Core Objectives
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {OBJECTIVES_DATA.map((item, index) => (
                        <ObjectiveCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
