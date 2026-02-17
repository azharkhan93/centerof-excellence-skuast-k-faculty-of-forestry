"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    description: string;
    bgColor?: string;
    accentColor?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    bgColor = "bg-slate-950",
    accentColor = "from-blue-600 to-indigo-600"
}) => {
    return (
        <section className={`relative pt-32 pb-20 overflow-hidden ${bgColor}`}>
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-[120px]" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 md:px-16 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                            {title}
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Transition - Subtle Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </section>
    );
};
