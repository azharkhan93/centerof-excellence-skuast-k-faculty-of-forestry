"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';

import { SERVICES } from "@/constants";
import { ServiceItem } from "./ServiceItem";
import { Button } from "../Button";

export const Services: React.FC = () => {
    const t = useTranslations('services');

    // Get translated services from message files
    const translatedServices = useMemo(() => {
        return SERVICES.map((service, index) => ({
            ...service,
            title: t(`items.${index}.title`),
            subtitle: t(`items.${index}.subtitle`),
            description: t(`items.${index}.description`),
            location: t(`items.${index}.location`)
        }));
    }, [t]);

    const displayedServices = translatedServices.slice(0, 3);

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 max-w-3xl mx-auto"
                >
                    <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                        {t('badge')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-gray-900 text-lg">
                        {t('description')}
                    </p>
                </motion.div>

                {/* Services List */}
                <div className="max-w-5xl mx-auto mb-12">
                    <ul className="space-y-0">
                        {displayedServices.map((service, index) => (
                            <ServiceItem key={service.id} service={service} index={index} />
                        ))}
                    </ul>
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex justify-center"
                >
                    <Link href="/services">
                        <Button size="lg" variant="primary">
                            <span className="flex items-center gap-2">
                                {t('viewAll')}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
