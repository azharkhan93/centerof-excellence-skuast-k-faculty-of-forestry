"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, UserPlus, PlusSquare, Users, CheckSquare } from "lucide-react";
import { ISHRAFF_CONTENT } from "@/constants";

const iconMap: Record<string, any> = {
    LayoutGrid,
    UserPlus,
    PlusSquare,
    Users,
    CheckSquare
};

const WorkflowStep = ({ step, index, isLast }: { step: any, index: number, isLast: boolean }) => {
    const Icon = iconMap[step.icon];

    return (
        <div className="flex-1 relative group">
            {/* Connection Line */}
            {!isLast && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[1px] bg-slate-200" />
            )}

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4"
            >
                {/* Step Indicator */}
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-4">
                    {step.step}
                </span>

                {/* Icon Container */}
                <div className="w-24 h-24 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-300 relative">
                    {Icon && <Icon className="w-10 h-10 text-slate-800" />}
                    <div className="absolute inset-0 rounded-[2rem] bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    {step.title}
                </h3>
                <p className="text-xs text-slate-400 max-w-[150px] leading-relaxed">
                    {step.description}
                </p>
            </motion.div>
        </div>
    );
};

export const IshraffWorkflow: React.FC = () => {
    const { workflow } = ISHRAFF_CONTENT;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        {workflow.title}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: 100 }}
                        viewport={{ once: true }}
                        className="h-1 bg-slate-100 mx-auto rounded-full relative overflow-hidden"
                    >
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "0%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute inset-0 bg-blue-600"
                        />
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 md:gap-0 md:items-start items-center justify-between">
                    {workflow.steps.map((step, idx) => (
                        <WorkflowStep
                            key={step.id}
                            step={step}
                            index={idx}
                            isLast={idx === workflow.steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
