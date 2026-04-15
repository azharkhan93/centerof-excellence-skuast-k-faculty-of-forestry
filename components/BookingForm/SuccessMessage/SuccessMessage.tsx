"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components";

export const SuccessMessage: React.FC = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center py-20"
    >
        <div className="w-20 h-20 bg-brand/10 text-brand rounded-3xl flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Application Received</h3>
        <p className="text-slate-600 font-medium leading-relaxed mb-10">
            Your technical test booking has been initialized. A digital summary and further instructions for sample submission have been sent to your registered email.
        </p>
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-sm text-left mb-10">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-brand mb-4">Next Steps</h4>
            <ul className="space-y-3">
                <li className="flex gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                    Submit physical specimens to Laboratory PI
                </li>
                <li className="flex gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                    Complete payment via the shared bank transfer details
                </li>
            </ul>
        </div>
        <Button onClick={() => window.location.reload()}>Back to Portal</Button>
    </motion.div>
);
