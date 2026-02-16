"use client";

import React from "react";
import { Settings2, FileCheck, Users, Handshake } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Choose A Service",
        description: "In a free hour, when our power of choice is untrammeled and",
        icon: Settings2,
        position: "bottom"
    },
    {
        id: 2,
        title: "Define Requirements",
        description: "In a free hour, when our power of choice is untrammeled and",
        icon: FileCheck,
        position: "top"
    },
    {
        id: 3,
        title: "Request A Meeting",
        description: "In a free hour, when our power of choice is untrammeled and",
        icon: Users,
        position: "bottom"
    },
    {
        id: 4,
        title: "Final Solution",
        description: "In a free hour, when our power of choice is untrammeled and",
        icon: Handshake,
        position: "top"
    }
];

export const Process: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs block mb-4">
                        HOW IT WORK
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Standard Work Process
                    </h2>
                </div>

                <div className="relative">
                    {/* SVG Connecting Line for Desktop */}
                    <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 hidden lg:block overflow-visible pointer-events-none">
                        <svg width="100%" height="240" viewBox="0 0 1200 240" fill="none" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <path
                                d="M50,180 L350,60 L650,180 L950,60 L1150,180"
                                stroke="#2563eb"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                                className="opacity-30"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4">
                        {steps.map((step, idx) => (
                            <div
                                key={step.id}
                                className={`flex flex-col items-center text-center relative group ${step.position === "top" ? "lg:-translate-y-12" : "lg:translate-y-12"
                                    } transition-transform duration-500`}
                            >
                                {/* Icon Container */}
                                <div className="relative mb-8">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl shadow-blue-500/10 border border-gray-50 relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        <step.icon className="w-10 h-10 text-blue-600" />
                                    </div>

                                    {/* Step Number */}
                                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20 border-2 border-white">
                                        {step.id}
                                    </div>

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="max-w-[240px]">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
