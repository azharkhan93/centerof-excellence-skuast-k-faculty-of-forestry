"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Cloud, Database, Cpu, Lock, Zap, Globe } from "lucide-react";
import { Button } from "../Button/Button";

const TECH_ICONS = [Code2, Smartphone, Cloud, Database, Cpu, Lock, Zap, Globe, Code2, Smartphone, Cloud, Database];

const IconRow = ({ icons, direction }: { icons: typeof TECH_ICONS; direction: "ltr" | "rtl" }) => (
    <div className="flex items-center justify-center gap-4">
        {icons.map((Icon, index) => (
            <motion.div
                key={`${direction}-${index}`}
                initial={{ x: direction === "ltr" ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                animate={{ x: direction === "ltr" ? [0, 20, 0] : [0, -20, 0] }}
                transition={{
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                }}
                className="bg-slate-800/80 backdrop-blur-sm p-2.5 rounded-lg shadow-lg border border-blue-500/20 hover:border-blue-500/50 hover:bg-slate-700/80 transition-all"
            >
                <Icon className="w-4 h-4 text-blue-400" />
            </motion.div>
        ))}
    </div>
);

export const CTA: React.FC = () => {
    return (
        <section className="relative py-16 bg-slate-950 overflow-hidden">
            
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                   
                    <div className="flex-1 text-left max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-bold text-white mb-4"
                        >
                            A Better Way to Build Digital Solutions
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-400 text-lg mb-8"
                        >
                            Turn your ideas into a real website quickly. Select from thousands of free and premium website templates and customize them as you like.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <Button size="lg" variant="primary">Get Started</Button>
                            <Button size="lg" variant="outline">Get Premium</Button>
                        </motion.div>
                    </div>

                 
                    <div className="flex-shrink-0 relative w-full lg:w-[400px] h-[300px] flex items-center justify-center">
                      
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="absolute w-64 h-64 rounded-full bg-blue-500/20 blur-3xl" />
                            <div className="absolute w-48 h-48 rounded-full bg-blue-600/30 blur-2xl" />
                            <div className="absolute w-32 h-32 rounded-full bg-blue-700/40 blur-xl" />

                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/50"
                            >
                                <Zap className="w-8 h-8 text-white" fill="currentColor" />
                            </motion.div>
                        </motion.div>

                        <div className="absolute inset-0 flex flex-col justify-center gap-8 overflow-hidden">
                            <IconRow icons={TECH_ICONS.slice(0, 6)} direction="ltr" />
                            <IconRow icons={TECH_ICONS.slice(6, 12)} direction="rtl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
