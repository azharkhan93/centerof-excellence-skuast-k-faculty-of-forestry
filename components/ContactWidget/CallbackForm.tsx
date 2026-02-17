"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { CONTACT_WIDGET_MESSAGES, CALLBACK_TIME_SLOTS } from "@/constants";
import { FormInput } from "../index";

interface FormData {
    name: string;
    phone: string;
    preferredTime: string;
}

interface CallbackFormProps {
    formData: FormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
    isSubmitting: boolean;
    submitStatus: "idle" | "success" | "error";
}

export const CallbackForm: React.FC<CallbackFormProps> = ({
    formData,
    onChange,
    onSubmit,
    isSubmitting,
    submitStatus
}) => {
    const { placeholders, buttons, success } = CONTACT_WIDGET_MESSAGES;

    return (
        <motion.form
            key="callback"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onSubmit={onSubmit}
            className="space-y-4"
        >
            <FormInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={onChange}
                required
                placeholder={placeholders.name}
            />

            <FormInput
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={onChange}
                required
                placeholder={placeholders.phone}
            />

            <FormInput
                label="Preferred Time"
                type="select"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={onChange}
                required
                options={CALLBACK_TIME_SLOTS}
            />

            {submitStatus === "success" && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm"
                >
                    {success.callback}
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
                        {buttons.submitting}
                    </>
                ) : (
                    <>
                        <Phone className="w-4 h-4" />
                        {buttons.requestCallback}
                    </>
                )}
            </button>
        </motion.form>
    );
};
