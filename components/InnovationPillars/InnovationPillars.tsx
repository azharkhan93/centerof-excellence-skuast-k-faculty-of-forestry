"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { PILLARS_DATA } from "@/constants";

const MarqueeRow = ({ items, direction = "left", speed = 30 }: { items: typeof PILLARS_DATA, direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden py-4 select-none">
            <motion.div
                animate={{
                    x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
                whileHover={{ animationPlayState: "paused" }}
                className="flex flex-nowrap gap-6 w-max"
            >
                {/* Double the items for seamless loop */}
                {[...items, ...items, ...items].map((item, idx) => {
                    const Icon = (LucideIcons as any)[item.icon] || LucideIcons.HelpCircle;
                    return (
                        <div
                            key={`${item.id}-${idx}`}
                            className="group relative bg-white/80 backdrop-blur-xl border border-slate-200/50 border-l-4 border-l-brand p-8 min-w-[320px] md:min-w-[450px] transition-all duration-500 hover:-translate-y-1 hover:bg-white overflow-hidden"
                        >
                            {/* Technical Pattern Background */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-500" 
                                style={{ backgroundImage: 'radial-gradient(#0a4d4a 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                            />

                            <div className="relative z-10 flex items-start gap-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-brand/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                                    <div className="relative p-4 rounded-2xl bg-brand/5 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>
                                </div>
                                
                                <div className="flex flex-col">
                                    <h4 className="text-[#0a4d4a] font-extrabold text-xl mb-3 tracking-tight group-hover:text-brand transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-500 text-base leading-relaxed line-clamp-2 group-hover:text-slate-700 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Corner Tech Accent */}
                            <div className="absolute bottom-0 right-0 w-12 h-12 bg-brand/5 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export const InnovationPillars = () => {
    // Split pillars into two rows
    const firstRow = PILLARS_DATA.slice(0, 3);
    const secondRow = PILLARS_DATA.slice(3, 6);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 right-10 w-96 h-96 bg-brand rounded-full blur-[120px]" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 mb-16 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Innovation Pillars
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-lg"
                    >
                        Pioneering the future of herbal technology through scientific excellence, 
                        sustainable research, and advanced phytochemical evaluation.
                    </motion.p>
                </div>
            </div>

            {/* Marquee Rows Container - Constrained Width */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="space-y-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <MarqueeRow items={firstRow} direction="left" speed={25} />
                    <MarqueeRow items={secondRow} direction="right" speed={30} />
                </div>
            </div>
        </section>
    );
};
