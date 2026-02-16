"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { CONTACT_WIDGET_MESSAGES, CALLBACK_TIME_SLOTS } from "@/constants";

interface FormData {
    name: string;
    phone: string;
    preferredTime: string;
}

interface CallbackFormProps {
    formData: FormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
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
            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder={placeholders.name}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number
                </label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder={placeholders.phone}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                    Preferred Time
                </label>
                <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                    {CALLBACK_TIME_SLOTS.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                            {slot.label}
                        </option>
                    ))}
                </select>
            </div>

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
