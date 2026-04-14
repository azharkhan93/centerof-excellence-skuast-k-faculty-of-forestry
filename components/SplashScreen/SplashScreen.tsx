"use client";

import React, { useEffect } from "react";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import { COMPANY_INFO } from "@/constants";

const PercentCounter = () => {
    const [count, setCount] = React.useState(0);
 useEffect(() => {
        const controls = animate(0, 100, {
            duration: 2.5,
            ease: "easeInOut",
            onUpdate: (v) => setCount(Math.round(v))
        });
        return () => controls.stop();
    }, []);
    return <span className="text-[10px] text-brand mb-2">{count}%</span>;
};

export const SplashScreen = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden pointer-events-auto bg-white"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 2.2 }}
        >
            {/* Soft Background Gradient for Depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--brand-rgb)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />

            {/* Background Connecting Lines Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
                {/* Vertical Lines */}
                <div className="absolute inset-0 flex justify-around px-12">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                            key={`v-${i}`}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 1.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="w-[1px] h-full bg-brand/20 relative"
                        >
                            {/* Intersection Nodes */}
                            {[1, 2, 3, 4, 5, 6].map((node) => (
                                <div 
                                    key={`node-${i}-${node}`}
                                    className="absolute w-1.5 h-1.5 bg-brand/30 rounded-full -left-[3px]"
                                    style={{ top: `${node * 15}%` }}
                                />
                            ))}
                        </motion.div>
                    ))}
                </div>
                {/* Horizontal Lines */}
                <div className="absolute inset-0 flex flex-col justify-around py-12">
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={`h-${i}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="h-[1px] w-full bg-brand/20"
                        />
                    ))}
                </div>
            </div>

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center max-w-4xl text-center"
                >
                    {/* Logos Container with Pulse */}
                    <motion.div className="flex items-center gap-8 mb-12">
                        {COMPANY_INFO.logos.map((logo, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                    opacity: 1 
                                }}
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
                    </motion.div>

                    {/* Company Name */}
                    <div className="space-y-3">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight"
                        >
                            <span className="text-[#0a4d4a]">CENTRE OF EXCELLENCE</span>
                            <br />
                            <span className="text-[#0a4d4a]/40">ON HERBAL TECHNOLOGY</span>
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-[#0a4d4a]/30 font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase"
                        >
                            FACULTY OF FORESTRY, SKUAST-KASHMIR
                        </motion.p>
                    </div>

                    {/* Enhanced Progress Bar with Counter */}
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mt-16 flex flex-col items-center"
                    >
                        <PercentCounter />
                        <div className="relative w-48 h-[1px] bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 2.2, ease: "easeInOut", delay: 0.2 }}
                                className="absolute inset-0 bg-brand"
                            />
                            {/* Scanning Light Effect */}
                            <motion.div
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};         
