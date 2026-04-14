"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Flower2, Dna, Leaf, Cpu } from "lucide-react";
import { STATS_DATA } from "@/constants";

const iconMap = {
    Flower2: Flower2,
    Dna: Dna,
    Leaf: Leaf,
    Cpu: Cpu
};

import { useLoading } from "@/context/LoadingContext";

const NumberCounter = ({ target, suffix = "" }: { target: string, suffix?: string }) => {
    const [display, setDisplay] = useState(0);
    const { isLoaded } = useLoading();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const numericTarget = parseInt(target) || 0;
    const hasPlus = target.includes("+");

    useEffect(() => {
        if (isInView && isLoaded) {
            const controls = animate(0, numericTarget, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (value) => setDisplay(Math.round(value))
            });
            return () => controls.stop();
        }
    }, [numericTarget, isInView, isLoaded]);

    return (
        <span ref={ref} className="tabular-nums">
            {display}{hasPlus ? "+" : ""}
        </span>
    );
};

const StatCard = ({ item, index }: { item: typeof STATS_DATA[0], index: number }) => {
    const Icon = iconMap[item.icon as keyof typeof iconMap];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full"
        >
            <div className="relative h-full p-3 md:p-5 rounded-xl md:rounded-2xl bg-white border border-dotted border-brand shadow-[0_10px_25px_-10px_rgba(10,77,74,0.15)] hover:shadow-[0_15px_35px_-10px_rgba(10,77,74,0.25)] transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
                <div className="mb-1.5 p-2 md:p-2.5 rounded-full bg-brand/5 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <Icon size={16} className="md:w-5 md:h-5" />
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-base md:text-xl font-extrabold text-[#0a4d4a] tracking-tight mb-0.5">
                        <NumberCounter target={item.value} />
                    </div>
                    <span className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none text-center">
                        {item.label}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export const Stats: React.FC = () => {
    return (
        <section className="relative py-12 z-10 -mt-12 md:-mt-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {STATS_DATA.map((item, index) => (
                        <StatCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
