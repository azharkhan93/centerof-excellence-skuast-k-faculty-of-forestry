"use client";

import React from "react";
import { motion } from "framer-motion";
import { SCOPE_DATA } from "@/constants";

export const AboutScope: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16">
                    <span className="text-brand font-black tracking-[0.3em] uppercase text-[10px] block mb-4">
                        Technical Specialization
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Domain <span className="text-brand">Scope</span>
                    </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                    {SCOPE_DATA.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-800 font-bold text-sm uppercase tracking-tight hover:bg-brand hover:text-white hover:border-brand transition-all cursor-default"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
