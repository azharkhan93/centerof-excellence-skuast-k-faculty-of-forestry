"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Github,
    Twitter,
    Linkedin,
    Facebook,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight
} from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { SOCIAL_LINKS, CONTACT_INFO, COMPANY_INFO, NAV_LINKS } from "@/constants";
import { Modal, PrivacyPolicy, FAQ } from "@/components";

const socialIconMap = {
    github: Github,
    twitter: Twitter,
    linkedin: Linkedin,
    facebook: Facebook,
};

export const Footer: React.FC = () => {
    const t = useTranslations('footer');
    const n = useTranslations('nav');
    const locale = useLocale();
    const currentYear = new Date().getFullYear();
    
    // Modal States
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false);

    const localizedHref = (href: string) =>
        href.startsWith('#') ? href : `/${locale}${href}`;

    const footerSections = useMemo(() => [
        {
            id: 1,
            title: t('services.title'), // This is now 'Navigation' in en.json
            links: [
                ...NAV_LINKS.map((link, idx) => ({
                    id: idx + 1,
                    label: n(link.labelKey),
                    href: link.href
                }))
            ]
        },
        {
            id: 2,
            title: t('company.title'),
            links: [
                { id: 1, label: t('company.about'), href: "/about" },
                { id: 2, label: t('company.training'), href: "/training-and-internships" },
                { id: 4, label: t('company.contact'), href: "/contact" }
            ]
        },
        {
            id: 3,
            title: t('legal.title'),
            links: [
                { id: 1, label: t('legal.privacy'), onClick: () => setShowPrivacy(true) },
                { id: 2, label: "FAQ", onClick: () => setShowFAQ(true) },
                { id: 3, label: t('legal.cookies'), onClick: () => setShowPrivacy(true) }
            ]
        }
    ], [t, n]);

    return (
        <footer className="relative bg-slate-950 text-gray-300 overflow-hidden">
            {/* ... gradients and patterns ... */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link href="/" className="flex items-center gap-4 mb-6 group cursor-pointer inline-flex">
                                <div className="flex items-center gap-2">
                                    {COMPANY_INFO.logos.map((logo, idx) => (
                                        <div key={idx} className="relative w-10 h-10 flex items-center justify-center bg-white rounded-lg p-1 shadow-sm">
                                            <Image src={logo} alt={`${COMPANY_INFO.name}`} fill className="object-contain p-0.5" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col justify-center leading-tight">
                                    <span className="text-xs md:text-sm font-bold tracking-wider text-white uppercase group-hover:text-brand transition-colors">
                                        CENTRE OF EXCELLENCE ON HERBAL TECHNOLOGY
                                    </span>
                                    <span className="text-[10px] font-medium tracking-wide text-gray-400 uppercase">
                                        FACULTY OF FORESTRY, SKUAST-KASHMIR
                                    </span>
                                </div>
                            </Link>

                            <p className="text-brand font-medium mb-3">{t('tagline')}</p>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">{t('description')}</p>

                            <div className="flex items-center gap-3">
                                {SOCIAL_LINKS.map((social) => {
                                    const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
                                    return (
                                        <motion.a
                                            key={social.id}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-700 hover:border-brand/50 hover:bg-slate-700/50 transition-all group"
                                        >
                                            <Icon className="w-5 h-5 text-gray-400 group-hover:text-brand transition-colors" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {footerSections.map((section, sectionIndex) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                        >
                            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link: any) => (
                                    <li key={link.id}>
                                        {link.onClick ? (
                                            <button
                                                onClick={link.onClick}
                                                className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-1 group"
                                            >
                                                {link.label}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </button>
                                        ) : (
                                            <Link
                                                href={localizedHref(link.href)}
                                                className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-1 group"
                                            >
                                                {link.label}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* ... bottom sections (contact, copyright) ... */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="border-t border-slate-800 pt-8 mb-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start w-full gap-8 md:gap-4">
                        <div className="flex items-start gap-3 md:max-w-xs lg:max-w-sm">
                            <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-700 flex-shrink-0">
                                <MapPin className="w-5 h-5 text-brand" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">{t('contactInfo.address')}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {CONTACT_INFO.address}
                                    {(CONTACT_INFO.city || CONTACT_INFO.state || CONTACT_INFO.zip) && (
                                        <>
                                            <br />
                                            {CONTACT_INFO.city && `${CONTACT_INFO.city}, `}
                                            {CONTACT_INFO.state} {CONTACT_INFO.zip}
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-700 flex-shrink-0">
                                <Mail className="w-5 h-5 text-brand" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">{t('contactInfo.email')}</h4>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-brand transition-colors text-sm">{CONTACT_INFO.email}</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-700 flex-shrink-0">
                                <Phone className="w-5 h-5 text-brand" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm mb-1">{t('contactInfo.phone')}</h4>
                                <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-400 hover:text-brand transition-colors text-sm">{CONTACT_INFO.phone}</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="border-t border-slate-800 pt-8"
                >
                    <p className="text-gray-500 text-sm text-center">
                        © {currentYear} {COMPANY_INFO.name}. {t('copyright')}
                    </p>
                </motion.div>
            </div>

            {/* Institutional Modals */}
            <Modal
                isOpen={showPrivacy}
                onClose={() => setShowPrivacy(false)}
                title="Institutional Policy & Privacy"
                width="90vw"
                className="max-w-5xl bg-white"
                height="80vh"
            >
                <PrivacyPolicy />
            </Modal>

            <Modal
                isOpen={showFAQ}
                onClose={() => setShowFAQ(false)}
                title="Institutional Q&A"
                width="90vw"
                className="max-w-5xl bg-white"
                height="80vh"
            >
                <FAQ />
            </Modal>
        </footer>
    );
};
