"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { FormInput } from "../index";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface ContactFormProps {
    formData: FormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
    isSubmitting: boolean;
    submitStatus: "idle" | "success" | "error";
}

export const ContactForm: React.FC<ContactFormProps> = ({
    formData,
    onChange,
    onSubmit,
    isSubmitting,
    submitStatus
}) => {
    const t = useTranslations('contact');

    return (
        <motion.form
            key="contact"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onSubmit={onSubmit}
            className="space-y-4"
        >
            <FormInput
                label={t('form.name')}
                name="name"
                value={formData.name}
                onChange={onChange}
                required
                placeholder={t('form.placeholders.name')}
            />

            <FormInput
                label={t('form.email')}
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                required
                placeholder={t('form.placeholders.email')}
            />

            <FormInput
                label={t('form.message')}
                type="textarea"
                name="message"
                value={formData.message}
                onChange={onChange}
                required
                rows={4}
                placeholder={t('form.placeholders.message')}
            />

            {submitStatus === "success" && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm"
                >
                    {t('form.success.contact')}
                </motion.div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t('form.buttons.sending')}
                    </>
                ) : (
                    <>
                        <Send className="w-4 h-4" />
                        {t('form.buttons.send')}
                    </>
                )}
            </button>
        </motion.form>
    );
};
