"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "../Button";
import { LanguageSwitcher } from "../LanguageSwitcher";

export const Navbar: React.FC = () => {
    const t = useTranslations('nav');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
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

    const navLinks = [
        { href: "#services", label: t('services') },
        { href: "#about", label: t('about') },
        { href: "#process", label: t('process') },
        { href: "#testimonials", label: t('testimonials') },
    ];

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

    return (
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-6 md:py-8 text-white">
            {/* Logo Section */}
            <div className="flex items-center gap-2 z-[60]">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-400 rounded-full flex items-center justify-center overflow-hidden">
                    <Image src="/next.svg" alt="Logo" width={24} height={24} className="invert w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-xl md:text-2xl font-bold tracking-tight">Foxico</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-12 text-sm font-medium">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="hover:text-orange-400 transition-colors uppercase tracking-widest text-[10px] relative group"
                    >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-400 transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>

            {/* Right Side Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
                <LanguageSwitcher />
                <Button variant="primary" size="md">
                    {t('contact')}
                </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="lg:hidden z-[60] p-2 bg-slate-800/50 backdrop-blur-md rounded-lg border border-white/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
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
                        <div className="flex flex-col gap-8 relative z-10">
                            {navLinks.map((link, index) => (
                                <motion.div key={link.href} variants={linkVariants} className="overflow-hidden relative group">
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-2xl md:text-5xl font-bold hover:text-orange-400 transition-colors flex items-center justify-between py-2"
                                    >
                                        <span className="relative">
                                            {link.label}
                                            {/* Shimmer Line */}
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
                            <Button variant="primary" size="lg" className="w-full justify-center text-lg">
                                {t('contact')}
                            </Button>
                        </motion.div>

                        {/* Bottom Decoration */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-auto text-gray-500 text-xs tracking-tighter uppercase flex justify-between items-center"
                        >
                            <span>© Foxico 2024</span>
                            <div className="flex gap-4">
                                <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
                                <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

