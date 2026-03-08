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
            onClick={onClick}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50 flex items-center justify-center group hover:shadow-xl hover:shadow-blue-500/60 transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
                boxShadow: isOpen
                    ? "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
                    : "0 10px 15px -3px rgba(59, 130, 246, 0.5)"
            }}
        >
            <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <X className="w-6 h-6 text-white" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="open"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <MessageSquare className="w-6 h-6 text-white" />
                    </motion.div>
                )}
            </AnimatePresence>

          
            {!isOpen && (
                <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />
            )}
        </motion.button>
    );
};
