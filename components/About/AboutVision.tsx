"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_VISION } from "@/constants";

export const AboutVision: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
                className="lg:col-span-6 relative"
            >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src={ABOUT_VISION.image}
                        alt="Our Vision"
                        fill
                        className="object-cover transition-transform duration-1000 hover:scale-105"
                    />
                </div>
            </motion.div>

            <motion.div
                className="md:col-span-6"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-brand" />
                    <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px]">
                        {ABOUT_VISION.badge}
                    </span>
                </div>
                
                <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                    Bridging tradition with <br />
                    <span className="text-brand">high-precision science.</span>
                </h2>
                
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                    {ABOUT_VISION.content}
                </p>

                <div className="bg-slate-50 border-l-2 border-brand/20 p-6 md:p-8">
                    <p className="text-slate-400 text-sm font-medium italic leading-relaxed">
                        Establishing a global vanguard for sustainable Himalayan herbal innovation.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
