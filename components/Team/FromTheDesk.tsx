"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, GraduationCap } from "lucide-react";

interface FromTheDeskProps {
    pi: {
        name: string;
        role: string;
        specialty: string;
        image: string;
        message: string;
        badges: string[];
    };
}

export const FromTheDesk: React.FC<FromTheDeskProps> = ({ pi }) => {
    return (
        <section className="py-12 bg-slate-50/50 overflow-hidden border-b border-slate-100">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-2">
                        <span className="px-3 py-1 bg-brand/10 text-brand text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-brand/10">
                            Leadership Message
                        </span>
                        <div className="h-px w-16 bg-brand/20" />
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-white shadow-xl shadow-slate-200/40 flex flex-col md:flex-row items-stretch overflow-hidden group"
                >
                    {/* Image Section - Compact & Controlled */}
                    <div className="relative w-full md:w-[320px] h-[320px] md:h-auto overflow-hidden shrink-0">
                        <Image
                            src={pi.image}
                            alt={pi.name}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
                        
                        <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                            <h3 className="text-xl font-black uppercase tracking-tight leading-none mb-1">
                                {pi.name}
                            </h3>
                            <p className="text-[11px] font-medium text-brand-light flex items-center gap-2">
                                <GraduationCap size={14} />
                                {pi.role}
                            </p>
                        </div>
                    </div>

                    {/* Content Section - High density & Premium */}
                    <div className="relative p-6 lg:p-10 flex flex-col justify-center bg-white border-l border-slate-50 flex-grow">
                        <div className="absolute top-6 right-8 opacity-[0.02] rotate-12 pointer-events-none">
                            <Quote size={120} className="text-slate-900" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                                Message from <span className="text-brand">the PI</span>
                            </h2>

                            <div className="space-y-4">
                                {pi.message.split('\n\n').map((para, i) => (
                                    <p key={i} className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                                        {para}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col gap-0.5">
                                <span className="text-slate-900 font-bold uppercase tracking-widest text-[11px]">
                                    {pi.name}
                                </span>
                                <span className="text-brand font-bold text-[10px] uppercase tracking-widest">
                                    PI & MAPs Expert
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
