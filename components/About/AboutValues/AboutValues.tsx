"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import * as LucideIcons from "lucide-react";
import { CORE_VALUES } from "@/constants";


import { OBJECTIVES_DATA } from "@/constants";

export const AboutObjectives: React.FC = () => {
    return (
        <div className="w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 tracking-tight">
                {OBJECTIVES_DATA.title}
            </h3>

            <div className="space-y-6">
                {OBJECTIVES_DATA.items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl hover:border-brand/20 transition-all duration-300"
                    >
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center font-black text-xs">
                            0{index + 1}
                        </div>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
