"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare } from "lucide-react";

interface FloatingButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ isOpen, onClick }) => {
    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-brand to-brand-dark shadow-lg shadow-brand/50 flex items-center justify-center group hover:shadow-xl hover:shadow-brand/60 transition-shadow"
            aria-label="Contact Us"
        >
            <div className="relative w-8 h-8 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="w-8 h-8 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="message"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            className="relative"
                        >
                            <MessageSquare className="w-8 h-8 text-white" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pulse Animation */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-20" />
                )}
            </div>
        </motion.button>
    );
};
