"use client";

import React from "react";
import { motion } from "framer-motion";
import { INTERNSHIP_PAGE_DATA } from "@/constants";
import { Briefcase, Calendar, MapPin, GraduationCap, CheckCircle2, FlaskConical } from "lucide-react";

export const Internships: React.FC = () => {
    const { highlights } = INTERNSHIP_PAGE_DATA;

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Dark Engineering Grid */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-center mb-20">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-brand-light font-black tracking-[0.4em] uppercase text-[10px] block mb-4">
                                Career Excellence
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-[1.1]">
                                Institutional <span className="text-brand-light">Internships</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                                {INTERNSHIP_PAGE_DATA.overview}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <HighlightItem 
                                    icon={<Calendar className="text-brand-light" size={20} />} 
                                    title="Duration" 
                                    desc={highlights.duration} 
                                />
                                <HighlightItem 
                                    icon={<MapPin className="text-brand-light" size={20} />} 
                                    title="Mode" 
                                    desc={highlights.mode} 
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl"
                        >
                            <h4 className="text-lg font-bold mb-6 flex items-center gap-3">
                                <GraduationCap className="text-brand-light" />
                                Eligibility Criteria
                            </h4>
                            <div className="space-y-6">
                                {highlights.eligibility.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 shrink-0">
                                            <CheckCircle2 size={18} className="text-brand-light" />
                                        </div>
                                        <p className="text-sm text-slate-300 leading-relaxed font-medium">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Areas of Work Grid */}
                <div className="border-t border-white/10 pt-20">
                    <div className="text-center mb-16">
                        <h3 className="text-2xl font-bold tracking-tight">Areas of Specialized Engagement</h3>
                        <p className="text-slate-500 text-sm mt-3">Multidisciplinary fields where interns work alongside Centre experts</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highlights.areasOfWork.map((area, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-light/30 transition-all hover:bg-white/[0.08]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-brand-light/10 flex items-center justify-center text-brand-light group-hover:bg-brand-light group-hover:text-slate-900 transition-all">
                                        <FlaskConical size={20} />
                                    </div>
                                    <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors uppercase tracking-tight">
                                        {area}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const HighlightItem: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
    <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
        <div className="p-3 rounded-xl bg-slate-800 text-brand-light shrink-0">
            {icon}
        </div>
        <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{title}</p>
            <p className="text-sm font-bold text-white leading-tight">{desc}</p>
        </div>
    </div>
);
