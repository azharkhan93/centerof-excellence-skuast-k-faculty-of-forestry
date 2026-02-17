"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Clock, Cpu } from "lucide-react";
import { ISHRAFF_CONTENT } from "@/constants";

const iconMap: Record<string, any> = {
    ShieldAlert,
    Clock,
    Cpu
};

export const IshraffModules: React.FC = () => {
    const { modules } = ISHRAFF_CONTENT;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        {modules.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-lg max-w-2xl mx-auto"
                    >
                        {modules.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {modules.items.map((module: any, idx: number) => {
                        const Icon = iconMap[module.icon];
                        return (
                            <motion.div
                                key={module.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 overflow-hidden"
                            >
                                {/* Top Header */}
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                                        {Icon && <Icon className="w-7 h-7" />}
                                    </div>
                                    <span className="px-4 py-1.5 rounded-full bg-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                                        {module.status}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:translate-x-1 transition-transform">
                                    {module.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                    {module.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {module.tags.map((tag: string) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 text-[11px] font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Abstract Background Effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
