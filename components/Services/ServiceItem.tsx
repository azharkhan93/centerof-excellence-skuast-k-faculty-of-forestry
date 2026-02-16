"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Service } from "@/constants";
import { useServiceAnimation } from "@/hooks/useServiceAnimation";

interface ServiceItemProps {
    service: Service;
    index: number;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ service, index }) => {
    const { ref, isInView, variants } = useServiceAnimation(index);

    return (
        <motion.li
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className="group relative border-b border-slate-800/50 py-8 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
        >
            {/* Gradient Line Accent */}
            <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-blue-500 to-blue-900 group-hover:h-full transition-all duration-500" />

            {/* Hover Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-start justify-between gap-8 relative z-10 pl-6">
                <div className="flex-1">
                    {/* Number and Subtitle */}
                    <div className="flex items-center gap-4 mb-3">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="relative"
                        >
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center backdrop-blur-sm">
                                <span className="text-blue-400 font-mono text-lg font-bold">0{service.id}</span>
                            </div>
                            <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                        <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-xs text-black  uppercase tracking-wider">
                            {service.subtitle}
                        </span>
                    </div>

                    {/* Title - Always Visible */}
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black text-base leading-relaxed mb-3 max-w-2xl">
                        {service.description}
                    </p>

                    {/* Location Badge */}
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-sm text-blue-400/80 font-medium">{service.location}</span>
                    </div>
                </div>

                {/* Animated Arrow Button */}
                <motion.div
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-shrink-0 w-14 h-14 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-blue-600 group-hover:border-blue-500 transition-all duration-300 cursor-pointer shadow-lg group-hover:shadow-blue-500/50"
                >
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </motion.div>
            </div>
        </motion.li>
    );
};
