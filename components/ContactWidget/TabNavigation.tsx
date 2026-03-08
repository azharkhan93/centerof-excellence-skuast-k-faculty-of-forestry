"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

type TabType = "contact" | "callback";

interface Tab {
    id: TabType;
    label: string;
    icon: string;
}

interface TabNavigationProps {
    tabs: Tab[];
    activeTab: TabType;
    onTabChange: (tabId: TabType) => void;
}

const iconMap = {
    Mail,
    Phone
};

export const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div className="flex border-b border-slate-700/50 bg-slate-800/50">
            {tabs.map((tab) => {
                const Icon = iconMap[tab.icon as keyof typeof iconMap];
                return (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`flex-1 py-3 px-2 text-xs md:text-sm font-medium transition-colors relative ${activeTab === tab.id
                                ? "text-blue-400"
                                : "text-slate-400 hover:text-slate-300"
                            }`}
                    >
                        <div className="flex items-center justify-center gap-1.5">
                            <Icon className="w-4 h-4" />
                            <span className="hidden sm:inline">{tab.label}</span>
                        </div>
                        {activeTab === tab.id ? (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            />
                        ): null}
                    </button>
                );
            })}
        </div>
    );
};
