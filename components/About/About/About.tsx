"use client";

import React from "react";
import Image from "next/image";
import { Check, Phone, Play, ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/Button";


export const About: React.FC = () => {
    const t = useTranslations('about');

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    
                    <div className="relative">
                        <div className="relative w-full aspect-[4/3] lg:aspect-square">
                           
                            <div className="absolute inset-0 z-0 bg-blue-50/50 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] transform -rotate-6 animate-pulse" />

                            <div className="relative z-10 w-full h-full overflow-hidden rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] border-8 border-white shadow-2xl">
                                <Image
                                    src="/images/about/team.png"
                                    alt="Expert Team"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>


                           
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl z-0" />
                        </div>
                    </div>


                    <div className="flex flex-col space-y-8">
                        <div>
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm block mb-3">
                                {t('badge')}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                                {t('title')} <br />
                                <span className="text-blue-600">{t('subtitle')}</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {t('description')}
                            </p>
                        </div>

                      
                        <div className="space-y-4">
                            {[
                                t('stats.clients'),
                                t('stats.projects'),
                                t('stats.experience')
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-3 group">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Check className="w-4 h-4" strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                      
                        <div className="w-full h-px bg-gray-100" />

                        <div className="flex flex-wrap items-center gap-8">
                          
                            <div className="bg-white p-6 shadow-xl shadow-blue-500/5 border-l-4 border-blue-600 flex items-center space-x-5 min-w-[240px]">
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    <div className="relative w-10 h-10 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-slate-800">2+</div>
                                    <div className="text-sm text-gray-500 font-medium">{t('stats.experience')}</div>
                                </div>
                            </div>


                            <div className="flex items-center space-x-6">
                                <Button size="md" >
                                    {t('exploreMore')}
                                </Button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
