"use client";

import React from "react";
import { motion } from "framer-motion";
import { TRAINING_PAGE_DATA } from "@/constants";
import { GraduationCap, Clock, Users, BadgeCheck, Zap, Info } from "lucide-react";

export const TrainingWorkshops: React.FC = () => {
    const { workshops } = TRAINING_PAGE_DATA;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Scientific Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#0a4d4a 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="mb-20 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-brand font-black tracking-[0.4em] uppercase text-[10px] block mb-4">
                            Skill Development
                        </span>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-8 leading-[1.1]">
                            Practical Trainings & <span className="text-brand">Workshops</span>
                        </h2>
                        <p className="text-slate-600 text-lg md:text-md leading-relaxed font-medium">
                            {workshops.overview}
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {workshops.programs.map((program, idx) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex flex-col h-full rounded-3xl border border-slate-100 bg-slate-50/50 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
                        >
                            {/* Header */}
                            <div className="p-8 lg:p-10 bg-white border-b border-slate-100 flex items-center justify-between">
                                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                                    {program.title}
                                </h3>
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${idx === 0 ? 'bg-brand/10 text-brand' : 'bg-slate-900 text-white'}`}>
                                    {idx === 0 ? <Zap size={24} /> : <BadgeCheck size={24} />}
                                </div>
                            </div>

                            {/* Program Highlights */}
                            <div className="p-8 lg:p-10 flex-grow">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                                    <div className="w-4 h-px bg-slate-200" />
                                    Curriculum Highlights
                                </h4>
                                <ul className="space-y-4 mb-10">
                                    {program.highlights.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-sm text-slate-600 font-medium leading-relaxed">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Admin Details Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <DetailBlock icon={<GraduationCap size={16} />} title="Eligibility" value={program.details.eligibility} />
                                    <DetailBlock icon={<Users size={16} />} title="Seats" value={program.details.seats} />
                                    <DetailBlock icon={<Clock size={16} />} title="Schedule" value={program.details.schedule} />
                                    <DetailBlock icon={<Info size={16} />} title="Fee" value={program.details.fee} />
                                </div>
                            </div>

                            {/* Footer / Certification */}
                            <div className="px-8 py-6 lg:px-10 bg-slate-100/50 border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-wider">
                                    <BadgeCheck size={16} /> {program.details.certification}
                                </div>
                                {program.details.note && (
                                    <div className="text-[10px] font-bold text-slate-500 italic max-w-xs md:text-right">
                                        * {program.details.note}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-3xl bg-brand/5 border border-brand/20 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Ready to enhance your expertise?</h4>
                        <p className="text-slate-600 text-sm">For further details about our upcoming workshops, please feel free to reach out.</p>
                    </div>
                    <motion.a 
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-brand text-white rounded-2xl font-bold text-sm shadow-xl shadow-brand/20 hover:bg-brand-dark transition-all"
                    >
                        Inquire Now
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

const DetailBlock: React.FC<{ icon: React.ReactNode, title: string, value: string }> = ({ icon, title, value }) => (
    <div className="p-4 rounded-xl bg-white border border-slate-100 flex items-start gap-3">
        <div className="text-brand shrink-0 mt-0.5">{icon}</div>
        <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">{title}</p>
            <p className="text-xs font-bold text-slate-700 leading-tight">{value}</p>
        </div>
    </div>
);
