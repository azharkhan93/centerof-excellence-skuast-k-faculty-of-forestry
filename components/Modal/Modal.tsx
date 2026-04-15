"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
    data?: any;
    height?: string;
    width?: string;
    className?: string;
}

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 60,
        rotateX: -15
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 25,
            mass: 0.8,
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        transition: {
            duration: 0.2,
            ease: "easeOut" as const
        }
    }
};

const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
};

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    data,
    width = "max-w-2xl",
    height = "auto",
    className = ""
}) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);


    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen ? (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 perspective-[1000px]">
                   
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
                        transition={{ duration: 0.3 }}
                    />

                   
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{
                            width: width.includes("max-w") ? undefined : width,
                            height: height === "auto" ? undefined : height,
                            transformStyle: "preserve-3d"
                        }}
                        className={`relative w-full ${width.includes("max-w") ? width : ""} bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden border border-white/20 ${className}`}
                    >

                        <motion.div
                            variants={contentVariants}
                            className="flex items-center justify-between p-6 border-b border-slate-100"
                        >
                            {title ? (
                                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                                    {title}
                                </h3>
                            ) : null}
                            <button
                                onClick={onClose}
                                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all group"
                            >
                                <X className="w-6 h-6 cursor-pointer group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </motion.div>


                        <motion.div
                            variants={contentVariants}
                            className={`p-8 overflow-y-auto ${height !== "auto" ? "h-full pb-16" : ""}`}
                        >
                            {typeof children === "function" ? (children as any)(data) : children}
                        </motion.div>
                    </motion.div>
                </div>
            ) : null}
        </AnimatePresence>
    );
};
