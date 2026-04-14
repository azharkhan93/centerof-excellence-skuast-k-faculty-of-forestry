"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_DATA } from "@/constants";

export const GalleryHero: React.FC = () => {
    const [index, setIndex] = useState(0);
    const featuredImages = GALLERY_DATA.slice(0, 4); // Use first 4 as featured

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % featuredImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [featuredImages.length]);

    return (
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-slate-900 border-b border-white/5">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={featuredImages[index].image}
                        alt={featuredImages[index].title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40" />
            <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        key={`text-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="text-brand-light font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                            Featured Highlight
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                            {featuredImages[index].title}
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                            {featuredImages[index].description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {featuredImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-12 bg-brand' : 'w-4 bg-white/20'}`}
                    />
                ))}
            </div>
            
            {/* Visual Grain Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
        </section>
    );
};
