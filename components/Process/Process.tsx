"use client";

import React, { useMemo } from "react";
import { Settings2, FileCheck, Users, Handshake } from "lucide-react";
import { useTranslations } from 'next-intl';

const processIcons = [
    { icon: Settings2, position: "bottom" },
    { icon: FileCheck, position: "top" },
    { icon: Users, position: "bottom" },
    { icon: Handshake, position: "top" }
] as const;

export const Process: React.FC = () => {
    const t = useTranslations('process');

    const steps = useMemo(() => {
        return processIcons.map((item, index) => ({
            id: index + 1,
            title: t(`steps.${index}.title`),
            description: t(`steps.${index}.description`),
            icon: item.icon,
            position: item.position
        }));
    }, [t]);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs block mb-4">
                        {t('badge')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        {t('title')}
                    </h2>
                </div>

                <div className="relative">

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

                                <div className="relative mb-8">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl shadow-blue-500/10 border border-gray-50 relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        <step.icon className="w-10 h-10 text-blue-600" />
                                    </div>


                                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20 border-2 border-white">
                                        {step.id}
                                    </div>


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
