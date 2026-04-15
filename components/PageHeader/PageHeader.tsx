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
    bgColor = "bg-brand-dark",
    accentColor = "from-brand to-brand-dark"
}) => {
    return (
        <section className={`relative pt-40 pb-28 overflow-hidden ${bgColor} border-b border-white/5`}>
            {/* High-End Institutional Background */}
            <div className="absolute inset-0 z-0">
                {/* Brand Gradients */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/30 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-light/20 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/4" />
                
                {/* Technical Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.05]"
                    style={{ 
                        backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }} 
                />
                
                {/* Subtle Botanical Texture (Geometric) */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ 
                        backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)`,
                        backgroundSize: '24px 24px'
                    }} 
                />
            </div>

            <div className="container mx-auto px-6 md:px-16 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-0.5 bg-brand-light" />
                            <span className="text-brand-light font-black uppercase tracking-[0.4em] text-[10px]">
                                Institutional Resource
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl  font-bold text-white mb-8 tracking-tighter leading-[1.1]">
                            {title}
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300/80 leading-relaxed max-w-2xl font-medium">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Glass Edge */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
};
