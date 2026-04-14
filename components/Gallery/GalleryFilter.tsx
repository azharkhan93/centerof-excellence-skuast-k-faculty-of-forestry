"use client";

import React from "react";
import { motion } from "framer-motion";
import { GALLERY_CATEGORIES, GALLERY_DATA } from "@/constants";

interface GalleryFilterProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const GalleryFilter: React.FC<GalleryFilterProps> = ({ activeTab, setActiveTab }) => {
    // Helper to get item count per category
    const getCount = (category: string) => {
        if (category === "All") return GALLERY_DATA.length;
        return GALLERY_DATA.filter(item => item.category === category).length;
    };

    return (
        <div className="flex justify-center mb-16 px-4">
            <div className="bg-slate-50/50 backdrop-blur-xl border border-slate-200/60 p-1.5 rounded-full flex flex-wrap justify-center items-center shadow-sm">
                {GALLERY_CATEGORIES.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`relative px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group ${
                            activeTab === category 
                                ? 'text-white' 
                                : 'text-slate-500 hover:text-brand'
                        }`}
                    >
                        <span className="relative z-10">{category}</span>
                        
                        <span className={`relative z-10 px-1.5 py-0.5 rounded-md text-[8px] transition-colors duration-300 ${
                            activeTab === category 
                                ? 'bg-white/20 text-white' 
                                : 'bg-slate-100 text-slate-400 group-hover:bg-brand/10 group-hover:text-brand'
                        }`}>
                            {getCount(category)}
                        </span>

                        {activeTab === category && (
                            <motion.div
                                layoutId="activeFilterPill"
                                className="absolute inset-0 bg-brand rounded-full shadow-lg shadow-brand/20"
                                transition={{ 
                                    type: "spring", 
                                    bounce: 0.15, 
                                    duration: 0.6 
                                }}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};
