"use client";

import React, { useState, useEffect } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X } from "lucide-react";
import { NavLogo } from "./NavLogo";
import { DesktopNav } from "./DesktopNav";
import { NavActions } from "./NavActions";
import { MobileMenu } from "./MobileMenu";
import { TopBar } from "./TopBar";

export const Navbar: React.FC = () => {
    const t = useTranslations('nav');
    const locale = useLocale();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <TopBar />
            <nav className="flex items-center justify-between px-6 md:px-6 py-4 md:py-4 text-white">
                <NavLogo locale={locale} />

                <DesktopNav locale={locale} t={t} />

                <NavActions locale={locale} t={t} />

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden z-[60] p-2 bg-slate-800/50 backdrop-blur-md rounded-lg border border-white/10"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <MobileMenu
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                    locale={locale}
                    t={t}
                />
            </nav>
        </header>
    );
};


