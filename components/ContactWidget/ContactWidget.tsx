"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingButton } from "./FloatingButton";
import { TabNavigation } from "./TabNavigation";
import { ContactForm } from "./ContactForm";
import { CallbackForm } from "./CallbackForm";
import { CONTACT_WIDGET_TABS, CONTACT_WIDGET_MESSAGES } from "@/constants";

type TabType = "contact" | "callback";

interface FormData {
    name: string;
    email: string;
    message: string;
    phone: string;
    preferredTime: string;
}

export const ContactWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<TabType>("contact");
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
        phone: "",
        preferredTime: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "", phone: "", preferredTime: "" });

        setTimeout(() => {
            setSubmitStatus("idle");
        }, 3000);
    };

    const handleCallbackSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "", phone: "", preferredTime: "" });

        setTimeout(() => {
            setSubmitStatus("idle");
        }, 3000);
    };

    const { header } = CONTACT_WIDGET_MESSAGES;

    return (
        <>
            {/* Floating Button */}
            <FloatingButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

            {/* Widget Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.9 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] md:w-[400px] max-h-[600px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-b border-slate-700/50 p-4">
                                <h3 className="text-lg font-bold text-white">{header.title}</h3>
                                <p className="text-sm text-slate-400">{header.subtitle}</p>
                            </div>

                            {/* Tabs */}
                            <TabNavigation
                                tabs={CONTACT_WIDGET_TABS}
                                activeTab={activeTab}
                                onTabChange={setActiveTab}
                            />

                            {/* Content */}
                            <div className="p-4 overflow-y-auto max-h-[450px]">
                                <AnimatePresence mode="wait">
                                    {activeTab === "contact" && (
                                        <ContactForm
                                            formData={formData}
                                            onChange={handleInputChange}
                                            onSubmit={handleContactSubmit}
                                            isSubmitting={isSubmitting}
                                            submitStatus={submitStatus}
                                        />
                                    )}

                                    {activeTab === "callback" && (
                                        <CallbackForm
                                            formData={formData}
                                            onChange={handleInputChange}
                                            onSubmit={handleCallbackSubmit}
                                            isSubmitting={isSubmitting}
                                            submitStatus={submitStatus}
                                        />
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
