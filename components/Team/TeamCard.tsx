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
    // Polygon clip path: Top-right corner cut
    const polygonStyle = {
        clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${isPI ? 'lg:flex max-w-5xl mx-auto' : 'max-w-sm mx-auto'}`}
            style={polygonStyle}
        >
            {/* Border Layer (to simulate border with clip-path) */}
            <div className="absolute inset-0 border border-slate-100 pointer-events-none" style={polygonStyle} />

            {/* Image Section */}
            <div className={`relative ${isPI ? 'lg:w-[30%] h-64 lg:h-auto' : 'aspect-square'} overflow-hidden`}>
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Content Section */}
            <div className={`relative z-10 p-6 ${isPI ? 'lg:w-[70%] flex flex-col justify-center' : 'text-center'}`}>
                {isPI && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {member.badges?.map((badge, i) => (
                            <span key={i} className="px-2 py-0.5 bg-brand/5 text-brand text-[9px] font-black uppercase tracking-widest border border-brand/10">
                                {badge}
                            </span>
                        ))}
                    </div>
                )}
                
                <h3 className={`text-xl font-bold text-slate-900 ${isPI ? 'mb-1' : 'mb-0.5'}`}>
                    {member.name}
                </h3>
                <p className={`text-brand font-bold text-xs ${isPI ? 'mb-4' : 'mb-4'} flex items-center ${isPI ? 'justify-start' : 'justify-center'} gap-2`}>
                    {isPI && <GraduationCap size={14} className="text-brand-light" />}
                    {member.role}
                </p>

                {member.bio && (
                    <p className="text-slate-500 leading-relaxed mb-6 text-sm italic border-l-2 border-brand/20 pl-4 text-left max-w-2xl">
                        {member.bio}
                    </p>
                )}

                {!isPI && member.specialty && (
                    <div className="py-1 px-3 bg-slate-50 text-[10px] font-bold text-slate-500 border border-slate-100 mb-5 inline-block cursor-default">
                        {member.specialty}
                    </div>
                )}

                <div className={`flex items-center gap-3 ${isPI ? 'justify-start' : 'justify-center'}`}>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all cursor-pointer">
                        <Linkedin size={14} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-all cursor-pointer">
                        <Mail size={14} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
