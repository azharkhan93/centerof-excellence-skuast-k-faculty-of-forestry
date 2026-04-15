"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { COMPANY_INFO } from "@/constants";
import { SPRING_EASE } from "@/constants/splash";
import { PercentCounter } from "./PercentCounter";

const brandingVariants: Record<string, Variants> = {
    container: {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: SPRING_EASE } }
    },
    item: {
        initial: { opacity: 0, y: 10 },
        animate: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i, duration: 0.8 }
        })
    }
};

export const BrandingSection: React.FC = () => {
    return (
        <motion.div 
            variants={brandingVariants.container} 
            initial="initial" 
            animate="animate" 
            className="flex flex-col items-center max-w-4xl"
        >
            {/* Logos Container with Pulse */}
            <div className="flex items-center gap-8 mb-12">
                {COMPANY_INFO.logos.map((logo, idx) => (
                    <motion.div
                        key={idx}
                        animate={{ scale: [1, 1.05, 1], opacity: 1 }}
                        transition={{ 
                            scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                            opacity: { delay: 0.2 + idx * 0.2, duration: 0.6 }
                        }}
                        className="relative w-24 h-24 md:w-32 md:h-32"
                    >
                        <Image 
                            src={logo} 
                            alt="Institutional Logo" 
                            fill 
                            className="object-contain drop-shadow-[0_10px_30px_rgba(10,77,74,0.1)]" 
                            priority 
                        />
                    </motion.div>
                ))}
            </div>

            {/* Company Name & Tagline */}
            <div className="space-y-3">
                <motion.h1 
                    custom={0.4} 
                    variants={brandingVariants.item} 
                    className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-brand"
                >
                    CENTRE OF EXCELLENCE
                    <br />
                    <span className="opacity-40">ON HERBAL TECHNOLOGY</span>
                </motion.h1>
                <motion.p 
                    custom={0.8} 
                    variants={brandingVariants.item} 
                    className="text-brand/30 font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase"
                >
                    FACULTY OF FORESTRY, SKUAST-KASHMIR
                </motion.p>
            </div>

            {/* Progress Section */}
            <motion.div 
                custom={1} 
                variants={brandingVariants.item} 
                className="mt-16 flex flex-col items-center"
            >
                <PercentCounter />
                <div className="relative w-48 h-[1px] bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ x: "-100%" }} 
                        animate={{ x: "0%" }} 
                        transition={{ duration: 1.0, ease: "easeInOut", delay: 0.2 }} 
                        className="absolute inset-0 bg-brand" 
                    />
                    <motion.div 
                        animate={{ x: ["-100%", "200%"] }} 
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} 
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" 
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};
