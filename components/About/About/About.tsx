"use client";

import React from "react";
import Image from "next/image";
import { Check, Phone, Play, ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/Button";


import { ABOUT_INFO } from "@/constants";

export const About: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-20 items-center">

                    <div className="relative w-full">
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0">
                            <div className="absolute inset-0 z-0 bg-brand/5 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] transform -rotate-6 animate-pulse" />
                            <div className="relative z-10 w-full h-full overflow-hidden rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] border-8 border-white shadow-2xl">
                                <Image
                                    src="/images/hero2.webp"
                                    alt="Centre of Excellence Hall"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-10">
                        <div>
                            <span className="text-brand font-black tracking-[0.3em] uppercase text-[10px] block mb-4">
                                {ABOUT_INFO.badge}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 leading-tight mb-8 tracking-tight">
                                {ABOUT_INFO.title} <br />
                                <span className="text-brand">{ABOUT_INFO.subtitle}</span>
                            </h2>
                            <div className="space-y-6">
                                {ABOUT_INFO.description.split('\n\n').map((para, i) => (
                                    <p key={i} className="text-slate-600 text-lg leading-relaxed font-medium">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {ABOUT_INFO.points.map((point, idx) => (
                                <div key={idx} className="flex items-center space-x-4 p-4 bg-slate-50 border border-slate-100 rounded-xl group hover:border-brand/20 transition-all">
                                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand shadow-sm border border-slate-100 group-hover:bg-brand group-hover:text-white transition-all">
                                        <Check className="w-4 h-4" strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-900 font-bold text-xs uppercase tracking-tight">{point}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-slate-100">
                            <Button size="lg">
                                Explore Research Facilities
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
