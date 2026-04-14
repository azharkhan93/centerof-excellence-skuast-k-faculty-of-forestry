"use client";

import React from "react";
import { motion } from "framer-motion";
import { SPLASH_TRANSITION } from "@/constants/splash";
import { BackgroundPattern } from "./BackgroundPattern";
import { BrandingSection } from "./BrandingSection";

export const SplashScreen: React.FC = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden pointer-events-auto bg-white"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={SPLASH_TRANSITION}
        >
            <BackgroundPattern />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6">
                <BrandingSection />
            </div>
        </motion.div>
    );
};
