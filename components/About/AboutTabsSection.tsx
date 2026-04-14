"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AboutVision } from "./AboutVision";
import { AboutMission } from "./AboutMission";

const tabs = [
    { id: "vision", label: "Our Vision", component: AboutVision },
    { id: "mission", label: "Our Mission", component: AboutMission }
];

export const AboutTabsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    
                    {/* Minimalist Sidebar Layout */}
                    <div className="w-full lg:w-56 lg:sticky lg:top-32 flex-shrink-0">
                        <div className="flex flex-row lg:flex-col items-start gap-8 lg:gap-10 border-b lg:border-b-0 lg:border-l border-slate-100 pb-4 lg:pb-0 lg:pl-6 scrollbar-hide">
                            {tabs.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className="relative group py-1"
                                    >
                                        <span className={`text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500
                                            ${isActive ? "text-brand" : "text-slate-400 group-hover:text-slate-600"}`}>
                                            {tab.label}
                                        </span>
                                        
                                        {isActive && (
                                            <motion.div
                                                layoutId="tabUnderline"
                                                className="absolute -bottom-4 left-0 h-0.5 w-full bg-brand lg:hidden"
                                            />
                                        )}
                                        {isActive && (
                                            <motion.div
                                                layoutId="tabSideBorder"
                                                className="hidden lg:block absolute -left-[27px] top-0 h-full w-[3px] bg-brand rounded-full"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                        
                        <div className="hidden lg:block mt-20">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-4 italic">
                                Institutional Pillars
                            </h4>
                            <div className="w-12 h-px bg-slate-200" />
                        </div>
                    </div>

                    {/* Content Component with cross-fade transition */}
                    <div className="flex-grow min-w-0 w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                                className="w-full"
                            >
                                {(() => {
                                    const ActiveComponent = tabs.find(t => t.id === activeTab)?.component;
                                    return ActiveComponent ? <ActiveComponent /> : null;
                                })()}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};
