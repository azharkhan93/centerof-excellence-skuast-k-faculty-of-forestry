"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface DropdownProps {
    label?: string;
    value: string;
    options: { label: string; value: string }[];
    onChange: (val: string) => void;
    placeholder?: string;
    className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ 
    label, value, options, onChange, placeholder = "Select option", className = "" 
}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const selected = options.find(o => o.value === value);

    useEffect(() => {
        const close = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, []);

    return (
        <div className={`relative w-full ${className}`} ref={ref}>
            {label && <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">{label}</label>}
            
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl border transition-all duration-300 bg-slate-50 text-slate-900 ${open ? "border-brand ring-2 ring-brand/10" : "border-slate-200 hover:border-slate-300"}`}
            >
                <span className={`text-sm font-bold ${!selected ? "text-slate-400" : ""}`}>{selected?.label || placeholder}</span>
                <motion.div animate={{ rotate: open ? 180 : 0 }} className="text-brand"><ChevronDown size={18} /></motion.div>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 4, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl p-2 max-h-60 overflow-y-auto custom-scrollbar"
                    >
                        {options.map((opt) => (
                            <li key={opt.value}>
                                <button
                                    type="button"
                                    onClick={() => { onChange(opt.value); setOpen(false); }}
                                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${value === opt.value ? "bg-brand/5 text-brand" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
                                >
                                    {opt.label}
                                    {value === opt.value && <Check size={14} />}
                                </button>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};
