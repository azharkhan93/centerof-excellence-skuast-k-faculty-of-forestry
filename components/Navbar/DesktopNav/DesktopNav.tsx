"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { NAV_LINKS } from "@/constants";

interface DesktopNavProps {
    locale: string;
    t: (key: string) => string;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ locale, t }) => {
    return (
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {NAV_LINKS.map((link) => (
                <div key={link.href} className="relative group shrink-0">
                    {link.subLinks ? (
                        <div className="flex items-center gap-1 cursor-default hover:text-brand transition-colors uppercase tracking-wider text-[10px] py-2 whitespace-nowrap lg:gap-1.5">
                            {t(link.labelKey)}
                            <ChevronRight className="w-3 h-3 rotate-90 opacity-60" />

                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100">
                                <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 min-w-[200px] shadow-2xl">
                                    <div className="flex flex-col gap-2">
                                        {link.subLinks.map((sub) => {
                                            const IconComponent = sub.icon === 'Boxes' ? require('lucide-react').Boxes : null;
                                            return (
                                                <Link
                                                    key={sub.href}
                                                    href={`/${locale}${sub.href}`}
                                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors group/sub"
                                                >
                                                    {IconComponent && <IconComponent className="w-5 h-5 text-brand group-hover/sub:scale-110 transition-transform" />}
                                                    <span className="text-sm whitespace-nowrap">{t(sub.labelKey)}</span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Link
                            href={link.href === "/" ? `/${locale}` : `/${locale}${link.href}`}
                            className="hover:text-brand transition-colors uppercase tracking-wider text-[10px] relative group block py-2 whitespace-nowrap"
                        >
                            {t(link.labelKey)}
                            <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-brand transition-all duration-300 group-hover:w-full" />
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
};
