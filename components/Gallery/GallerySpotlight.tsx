"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_DATA } from "@/constants";

export const GallerySpotlight: React.FC = () => {
    const [index, setIndex] = useState(0);
    const highlights = GALLERY_DATA.slice(0, 5); // 5 featured items

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % highlights.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [highlights.length]);

    return (
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-slate-900 mb-12 shadow-2xl border border-white/5 group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={highlights[index].image}
                        alt={highlights[index].title}
                        fill
                        className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-[2000ms]"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            {/* Glass Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent backdrop-blur-[2px]">
                <motion.div
                    key={`text-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-brand-light" />
                        <span className="text-brand-light font-black uppercase tracking-[0.3em] text-[10px]">
                            Live Archives • {highlights[index].category}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                        {highlights[index].title}
                    </h2>
                    <p className="text-slate-300/80 text-sm md:text-lg font-medium leading-relaxed italic">
                        "{highlights[index].description}"
                    </p>
                </motion.div>
            </div>

            {/* Autoplay Pulse Indicator */}
            <div className="absolute top-8 right-8 flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                <span className="text-[9px] font-black text-white/60 uppercase tracking-widest">Live Auto-Preview</span>
            </div>

            {/* Quick Indicators */}
            <div className="absolute bottom-8 right-8 flex gap-2 hidden md:flex">
                {highlights.map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-brand' : 'w-2 bg-white/20'}`}
                    />
                ))}
            </div>
        </div>
    );
};
