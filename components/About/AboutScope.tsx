"use client";

import React from "react";
import { motion } from "framer-motion";
import { SCOPE_DATA } from "@/constants";

export const AboutScope: React.FC = () => {
    return (
        <div className="w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 tracking-tight">
                Institutional <span className="text-brand">Scope</span>
            </h3>

            <div className="flex flex-wrap gap-3">
                {SCOPE_DATA.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-800 font-bold text-xs md:text-sm uppercase tracking-tight hover:bg-brand hover:text-white hover:border-brand transition-all cursor-default"
                    >
                        {item}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
