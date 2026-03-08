"use client";

import { useState } from "react";
import { Button, FormInput } from "@/components";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const ContactPageForm = () => {
    const t = useTranslations('contactPage.form');

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
       
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
        >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('title')}</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                        label={t('nameLabel')}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="light"
                        placeholder={t('namePlaceholder')}
                        required
                    />
                    <FormInput
                        label={t('emailLabel')}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="light"
                        placeholder={t('emailPlaceholder')}
                        required
                    />
                </div>

                <FormInput
                    label={t('subjectLabel')}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="light"
                    placeholder={t('subjectPlaceholder')}
                    required
                />

                <FormInput
                    label={t('messageLabel')}
                    type="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="light"
                    rows={5}
                    placeholder={t('messagePlaceholder')}
                    required
                />

                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/10 disabled:opacity-50"
                >
                    {isSubmitting ? t('sendingButton') : t('sendButton')}
                    <Send className="w-4 h-4 ml-2" />
                </Button>
            </form>
        </motion.div>
    );
};
