"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { DemoRequestForm } from "./DemoRequestForm";

export const ProductHighlight = () => {
    const locale = useLocale();
    const t = useTranslations('productHighlight');
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    // Number of features defined in translations
    const features = [
        t('features.0'),
        t('features.1'),
        t('features.2')
    ];

    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">


                    <div className="w-full md:w-1/2 relative flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-sm"
                        >
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] bg-slate-100 group"
                                whileHover={{ scale: 1.03 }}
                            >
                                <Image
                                    src="/images/img34.webp"
                                    alt={t('title')}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="bg-slate-50 p-1.5 inline-block rounded-lg mb-3">
                            <span className="text-slate-800 font-semibold px-2 text-sm">{t('badge')}</span>
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                            {t('title')}
                        </h2>

                        <p className="text-base text-slate-600 mb-6 leading-relaxed">
                            {t('description')}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <CheckCircle className="w-4 h-4 text-slate-900 flex-shrink-0" />
                                    <span className="text-slate-700 text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-5 md:gap-11 flex-row  items-center">
                            <Link href={`/${locale}/products/ishraff`}>
                                <Button
                                    variant="primary"
                                    size="md"

                                >
                                    {t('knowMore')}
                                </Button>
                            </Link>
                            <Button
                                variant="primary"
                                size="md"
                                onClick={() => setIsDemoModalOpen(true)}
                            >
                                {t('bookDemo')}
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

            <Modal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
                title={t('modalTitle')}
                width="max-w-xl"
            >
                <DemoRequestForm onSuccess={() => setIsDemoModalOpen(false)} />
            </Modal>
        </section>
    );
};
