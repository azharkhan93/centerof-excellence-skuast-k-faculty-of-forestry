"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ABOUT_MISSION } from "@/constants";

export const AboutMission: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
                className="lg:col-span-5 relative lg:order-2"
            >
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src={ABOUT_MISSION.image}
                        alt="Our Mission"
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.div>

            <motion.div
                className="md:col-span-7 md:order-1"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-brand" />
                    <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px]">
                        {ABOUT_MISSION.badge}
                    </span>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                    Strengthening the MAPs sector <br />
                    <span className="text-brand">through translational research.</span>
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium max-w-2xl">
                    {ABOUT_MISSION.content}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {ABOUT_MISSION.points.map((point, idx) => (
                        <div key={idx} className="flex flex-col gap-3 group">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-black text-brand tracking-tighter transition-transform duration-300 group-hover:translate-x-1">
                                    0{idx + 1}
                                </span>
                                <div className="h-px flex-grow bg-slate-100" />
                            </div>
                            <span className="text-slate-800 font-bold text-sm tracking-tight">{point}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
