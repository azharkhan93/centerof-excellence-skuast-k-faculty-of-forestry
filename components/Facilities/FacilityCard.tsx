"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LucideIcon, Microscope, Zap, Waves, FlaskConical } from "lucide-react";

interface FacilityCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    icon: string;
    index: number;
}

const iconMap: Record<string, LucideIcon> = {
    Microscope,
    Zap,
    Waves,
    FlaskConical
};

export const FacilityCard: React.FC<FacilityCardProps> = ({ title, description, image, icon, index }) => {
    const Icon = iconMap[icon] || Microscope;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand/30 transition-all duration-500 h-[380px] md:h-[420px]"
        >
            {/* Background Image Container */}
            <div className="h-1/2 relative overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Content Section */}
            <div className="relative z-10 px-6 pb-6 pt-2 flex flex-col h-1/2">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center group-hover:bg-brand transition-all duration-500 shadow-sm">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">
                        {title}
                    </h3>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand/60 group-hover:text-brand transition-colors">
                        Precision Lab
                    </span>
                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                        <div className="w-1 h-1 rounded-full bg-brand" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
