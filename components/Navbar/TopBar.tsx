"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";
import { CONTACT_INFO, COMPANY_INFO } from "@/constants";

export const TopBar: React.FC = () => {
    return (
        <div className="w-full bg-slate-950/40 backdrop-blur-md border-b border-white/5 py-2 px-6 md:px-16 flex justify-between items-center text-[10px] md:text-xs font-medium tracking-widest  text-white/60">
            <div className="flex items-center gap-6">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-brand transition-colors">
                    <Mail size={12} className="text-brand" />
                    <span className="hidden sm:inline">{CONTACT_INFO.email}</span>
                </a>
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-brand transition-colors">
                    <Phone size={12} className="text-brand" />
                    <span>{CONTACT_INFO.phone}</span>
                </a>
            </div>
            <div className="hidden md:block">
                <span>{COMPANY_INFO.tagline}</span>
            </div>
        </div>
    );
};
