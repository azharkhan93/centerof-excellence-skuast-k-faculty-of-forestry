"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../Button";

export const Navbar: React.FC = () => {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-16 py-8 text-white">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center overflow-hidden">
                    <Image src="/next.svg" alt="Logo" width={24} height={24} className="invert" />
                </div>
                <span className="text-2xl font-bold tracking-tight">Foxico</span>
            </div>

            <div className="flex items-center gap-12 text-sm font-medium">
                <Link href="#" className="hover:text-orange-400 transition-colors uppercase tracking-widest text-[10px]">Services</Link>
                <Link href="#" className="hover:text-orange-400 transition-colors uppercase tracking-widest text-[10px]">Products</Link>
                <Link href="#" className="hover:text-orange-400 transition-colors uppercase tracking-widest text-[10px]">Security</Link>
                <Link href="#" className="hover:text-orange-400 transition-colors uppercase tracking-widest text-[10px]">About</Link>
            </div>

            <div className="flex items-center gap-8">
                <Button variant="primary" size="md">
                    Join Now
                </Button>
            </div>
        </nav>
    );
};
