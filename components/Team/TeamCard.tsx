"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail, GraduationCap } from "lucide-react";

interface MemberProps {
    member: {
        name: string;
        role: string;
        specialty?: string;
        image: string;
        bio?: string;
        badges?: string[];
    };
    isPI?: boolean;
}

export const TeamCard: React.FC<MemberProps> = ({ member, isPI }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative bg-white transition-all duration-500 border border-slate-100 shadow-sm hover:shadow-xl ${isPI ? 'hidden' : 'w-full md:w-[280px]'}`}
        >
            {/* Image Section - Compact & Standardized */}
            <div className={`relative aspect-[4/3] overflow-hidden`}>
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/5 group-hover:opacity-0 transition-opacity duration-500" />
            </div>

            {/* Content Section - High Density */}
            <div className="relative z-10 p-5">
                <div className="mb-3 flex flex-col gap-0.5">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand transition-colors duration-300">
                        {member.name}
                    </h3>
                    <p className="text-[10px] font-black uppercase tracking-wider text-brand/80">
                        {member.role}
                    </p>
                </div>

                {member.specialty && (
                    <p className="text-[11px] leading-relaxed text-slate-500 line-clamp-2 mb-4 h-8 italic">
                        {member.specialty}
                    </p>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-sm bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all cursor-pointer">
                            <Linkedin size={12} />
                        </div>
                        <div className="w-7 h-7 rounded-sm bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all cursor-pointer">
                            <Mail size={12} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
