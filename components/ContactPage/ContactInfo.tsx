"use client";

import { CONTACT_INFO } from "@/constants";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const ContactInfo = () => {
    const t = useTranslations('contactPage.info');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-slate-600">
                    <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">{t('visitUs.title')}</h3>
                <p className="text-slate-600 leading-relaxed">
                    {CONTACT_INFO.address}<br />
                    {CONTACT_INFO.city}, {CONTACT_INFO.country}
                </p>
            </motion.div>

            {/* Email */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-slate-600">
                    <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">{t('emailUs.title')}</h3>
                <p className="text-slate-500 mb-2 font-medium">{t('emailUs.subtitle')}</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
                    {CONTACT_INFO.email}
                </a>
            </motion.div>

           
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-slate-600">
                    <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">{t('callUs.title')}</h3>
                <p className="text-slate-500 mb-2 font-medium">{t('callUs.subtitle')}</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
                    {CONTACT_INFO.phone}
                </a>
            </motion.div>

            {/* Working Hours */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-slate-600">
                    <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">{t('businessHours.title')}</h3>
                <p className="text-slate-500 font-medium">{t('businessHours.days')}</p>
                <p className="text-slate-900 font-semibold">{t('businessHours.time')}</p>
            </motion.div>
        </div>
    );
};
