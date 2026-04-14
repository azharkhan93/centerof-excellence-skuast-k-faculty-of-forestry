"use client";

import { motion } from "framer-motion";
import { MessageCircle, Share2, HelpCircle, ExternalLink, Clock } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const ContactDetailsSide = () => {
    const t = useTranslations('contactPage.side');

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
        >

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex-1">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                    <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('consultation.title')}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {t('consultation.description')}
                </p>

                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-colors cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-brand">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">{t('consultation.callTitle')}</p>
                            <p className="text-xs text-slate-500">{t('consultation.callSubtitle')}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-900/10 text-white">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand">
                        <Share2 className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-xl">{t('connect.title')}</h4>
                        <p className="text-slate-400 text-sm">{t('connect.subtitle')}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/5 transition-colors cursor-pointer flex items-center justify-center gap-2">
                        <span className="text-sm font-medium">{t('connect.linkedin')}</span>
                    </div>
                    <div className="bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/5 transition-colors cursor-pointer flex items-center justify-center gap-2">
                        <span className="text-sm font-medium">{t('connect.instagram')}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
