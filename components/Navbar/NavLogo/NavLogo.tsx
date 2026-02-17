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
        <Link href={`/${locale}`} className="flex items-center gap-3 z-[60] group cursor-pointer">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <Image
                    src={COMPANY_INFO.logo}
                    alt={COMPANY_INFO.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-orange-400 group-hover:to-orange-500 transition-all duration-300">
                {COMPANY_INFO.name}
            </span>
        </Link>
    );
};
