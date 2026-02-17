"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "../../Button";
import { LanguageSwitcher } from "../../LanguageSwitcher";
import { NAV_LINKS } from "@/constants";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    locale: string;
    t: (key: string) => string;
}

const menuVariants = {
    closed: {
        opacity: 0,
        x: "100%",
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    },
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.1
        }
    }
} as any;

const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
} as any;

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, locale, t }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="fixed inset-0 w-full h-screen bg-slate-950 z-50 flex flex-col p-8 pt-32"
                >
                    {/* Background Shimmer/Gradient */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.5)_0%,_transparent_50%)]" />
                        <div className="absolute top-1/2 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_rgba(249,115,22,0.3)_0%,_transparent_50%)]" />
                    </div>

                    {/* Navigation Links (Mobile) */}
                    <div className="flex flex-col gap-6 relative z-10 overflow-y-auto max-h-[60vh]">
                        {NAV_LINKS.map((link) => (
                            <motion.div key={link.href} variants={linkVariants} className="overflow-hidden relative group">
                                {link.subLinks ? (
                                    <div className="flex flex-col gap-4">
                                        <div className="text-xl md:text-5xl font-bold text-gray-400 uppercase tracking-widest text-sm flex items-center justify-between py-2">
                                            {t(link.labelKey)}
                                        </div>
                                        <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                                            {link.subLinks.map((sub) => {
                                                const IconComponent = sub.icon === 'Boxes' ? require('lucide-react').Boxes : null;
                                                return (
                                                    <Link
                                                        key={sub.href}
                                                        href={`/${locale}${sub.href}`}
                                                        onClick={onClose}
                                                        className="text-lg md:text-3xl font-bold hover:text-orange-400 transition-colors flex items-center gap-4"
                                                    >
                                                        {IconComponent && <IconComponent className="w-6 h-6 text-orange-400" />}
                                                        {t(sub.labelKey)}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href === "/" ? `/${locale}` : `/${locale}${link.href}`}
                                        onClick={onClose}
                                        className="text-xl md:text-5xl font-bold hover:text-orange-400 transition-colors flex items-center justify-between py-2"
                                    >
                                        <span className="relative">
                                            {t(link.labelKey)}
                                            <motion.span
                                                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: "100%" }}
                                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                            />
                                        </span>
                                        <motion.div
                                            initial={{ x: -10, opacity: 0 }}
                                            whileHover={{ x: 0, opacity: 1 }}
                                        >
                                            <ChevronRight className="w-8 h-8 text-orange-400" />
                                        </motion.div>
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Actions */}
                    <motion.div
                        variants={linkVariants}
                        className="mt-16 pt-8 border-t border-white/10 flex flex-col gap-6 relative z-10"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm tracking-widest uppercase">{t('language') || 'Language'}</span>
                            <LanguageSwitcher />
                        </div>
                        <Link href={`/${locale}/contact`} onClick={onClose}>
                            <Button variant="primary" size="lg" className="w-full justify-center text-lg">
                                {t('contact')}
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
