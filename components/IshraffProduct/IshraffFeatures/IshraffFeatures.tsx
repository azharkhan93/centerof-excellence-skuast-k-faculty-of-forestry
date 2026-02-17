"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { ISHRAFF_CONTENT } from "@/constants";

const anim = {
    fadeUp: {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true }
    },
    fadeScale: {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true }
    }
};

const StatusItems = ({ items }: { items: string[] }) => (
    <ul className="grid grid-cols-1 gap-3">
        {items?.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-white/80 text-xs md:text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                {item}
            </li>
        ))}
    </ul>
);

const StatItem = ({ label, val }: { label: string; val: string }) => (
    <div className="text-center">
        <p className="text-blue-400 text-3xl font-bold mb-1">{val}</p>
        <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">{label}</p>
    </div>
);

export const IshraffFeatures: React.FC = () => {
    const { features } = ISHRAFF_CONTENT;
    const [f1, f2, f3] = features;

    return (
        <section className="py-32 overflow-hidden relative">
           
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-8 md:grid md:grid-cols-12 md:grid-rows-6 md:h-[1200px] lg:h-[900px]">

                    {/* Feature 1: Main Visionary Block */}
                    <motion.div {...anim.fadeScale} className="md:col-span-7 md:row-span-4 relative group rounded-[3rem] overflow-hidden bg-slate-900 border border-white/5 shadow-2xl">
                        <div className="absolute inset-0">
                            <Image src={f1.image} alt={f1.title} fill className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                        </div>
                        <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                            <div className="flex items-center gap-4 mb-6 text-blue-400 font-bold tracking-widest text-xs uppercase">
                                <span className="w-12 h-[1px] bg-blue-500" /> Visionary Control
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-xl">{f1.title}</h3>
                            <div className="flex flex-col md:flex-row gap-10">
                                <p className="text-slate-400 text-sm md:text-base max-w-xs">{f1.description}</p>
                                <StatusItems items={f1.items} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2: Organic Floating Block */}
                    <motion.div {...anim.fadeUp} transition={{ delay: 0.2 }} className="md:col-span-5 md:row-span-3 bg-white rounded-[3rem] p-10 flex flex-col shadow-2xl relative overflow-hidden">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">{f2.title}</h3>
                        <p className="text-slate-500 text-sm mb-8">{f2.description}</p>
                        <ul className="space-y-4">
                            {f2.items?.slice(0, 3).map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-800 font-medium text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> {item}
                                </li>
                            ))}
                        </ul>
                        <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 rounded-full overflow-hidden border-8 border-slate-50 shadow-inner group transition-transform duration-500 hover:scale-110">
                            <Image src={f2.image} alt={f2.title} fill className="object-cover" />
                        </div>
                    </motion.div>

                   
                    <motion.div
                        initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                        className="md:col-span-5 md:row-span-3 bg-blue-600 rounded-[3rem] p-10 text-white flex flex-col justify-between group overflow-hidden relative"
                    >
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold leading-tight">{f3.title}</h3>
                                <ArrowUpRight className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <ul className="flex flex-wrap gap-x-4 gap-y-2">
                                {f3.items?.map((item, i) => (
                                    <li key={i} className="px-4 py-2 rounded-full bg-white/10 text-[10px] font-semibold backdrop-blur-md">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8 flex items-center gap-6 relative z-10">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/20">
                                <Image src={f3.image} alt={f3.title} width={64} height={64} className="object-cover h-full" />
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">{f3.description}</p>
                        </div>
                    </motion.div>

                   
                    <motion.div {...anim.fadeUp} transition={{ delay: 0.6 }} className="hidden md:flex md:col-span-7 md:row-span-2 bg-slate-900 border border-white/5 rounded-[3rem] p-10 items-center justify-around">
                        <StatItem label="Uptime" val="99.9%" />
                        <StatItem label="Stakeholders" val="500+" />
                        <StatItem label="Efficiency" val="45%" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
