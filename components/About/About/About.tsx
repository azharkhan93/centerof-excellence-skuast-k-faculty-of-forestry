"use client";

import React from "react";
import Image from "next/image";
import { Check, Phone, Play, ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/Button";


import { ABOUT_INFO } from "@/constants";
import { motion } from "framer-motion";

export const About: React.FC = () => {
    const [para1, para2] = ABOUT_INFO.description.split('\n\n');

    return (
        <section className="py-32 bg-white overflow-hidden relative">
            {/* Background scientific pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#0a4d4a 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-10">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Structured Image Frame */}
                            <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-[12px] border-slate-50">
                                <Image
                                    src="/images/hero2.webp" 
                                    alt="Centre of Excellence Hall"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            
                          
                            <div className="absolute inset-0 border-2 border-brand/20 rounded-[2.5rem] translate-x-6 -translate-y-6 -z-10" />
                            
                            
                            <div className="absolute -bottom-6 -right-6 bg-brand text-white p-8 rounded-3xl shadow-2xl hidden md:block">
                                <div className="text-4xl font-black mb-1">CoEHT</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest opacity-80">Scientific Distinction</div>
                            </div>
                        </motion.div>

                        {/* Relocated Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {ABOUT_INFO.points.map((point, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:border-brand/20 group">
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:bg-brand group-hover:text-white transition-all">
                                        <Check className="w-4 h-4" strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-800 font-bold text-[9px] uppercase tracking-wider">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-12 xl:col-span-7 flex flex-col pt-4">
                        <div className="mb-12">
                            <span className="text-brand font-black tracking-[0.4em] uppercase text-[10px] block mb-4">
                                {ABOUT_INFO.badge}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none mb-10 tracking-tighter">
                                {ABOUT_INFO.title} <br />
                                <span className="text-brand">{ABOUT_INFO.subtitle}</span>
                            </h2>
                            
                            {/* Lead Paragraph */}
                            <p className="text-sm md:text-xl text-slate-900 font-bold leading-tight mb-8 border-l-4 border-brand pl-8 py-2">
                                {para1}
                            </p>
                            
                           
                            <p className="text-slate-500 text-md leading-relaxed font-medium mb-10 max-w-3xl">
                                {para2}
                            </p>
                        </div>

                        <div>
                            <Button size="lg" className="rounded-2xl px-12 group">
                                <span className="flex items-center gap-3 font-black uppercase text-xs tracking-widest">
                                    Explore Facilities
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
