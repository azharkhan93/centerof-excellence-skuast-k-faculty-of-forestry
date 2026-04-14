"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/constants";

interface NavLogoProps {
    locale: string;
}

export const NavLogo: React.FC<NavLogoProps> = ({ locale }) => {
    return (
        <Link href={`/${locale}`} className="flex items-center gap-4 z-[60] group cursor-pointer">
            <div className="flex items-center gap-3">
                {COMPANY_INFO.logos.map((logo, idx) => (
                    <div key={idx} className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white rounded-xl p-1 shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <Image
                            src={logo}
                            alt={`${COMPANY_INFO.name} logo ${idx + 1}`}
                            fill
                            className="object-contain p-0.5"
                        />
                    </div>
                ))}
            </div>
            <div className="hidden sm:flex flex-col justify-center leading-tight">
                <span className="text-[10px] md:text-[13px] font-bold tracking-wider text-white uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-orange-400 group-hover:to-orange-500 transition-all duration-300">
                    CENTRE OF EXCELLENCE ON HERBAL TECHNOLOGY
                </span>
                <span className="text-[8px] md:text-[10px] font-medium tracking-wide text-white/70 uppercase">
                    FACULTY OF FORESTRY, SKUAST-KASHMIR
                </span>
            </div>
        </Link>
    );
};
