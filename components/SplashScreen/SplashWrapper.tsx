"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SplashScreen } from "./SplashScreen";
import { useLoading } from "@/context/LoadingContext";

interface SplashWrapperProps {
    children: React.ReactNode;
}

export const SplashWrapper: React.FC<SplashWrapperProps> = ({ children }) => {
    const [isSplashActive, setIsSplashActive] = useState(true);
    const { setIsLoaded } = useLoading();

    useEffect(() => {
        if (!isSplashActive) {
            document.body.style.overflow = "unset";
            return;
        }

        // Disable scrolling while splash is active
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setIsSplashActive(false);
            // Broadcast that loading is finished
            setIsLoaded(true);
            // Restore scrolling after delay
            document.body.style.overflow = "unset";
        }, 1500); // Unified timing for branding display

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "unset";
        };
    }, [setIsLoaded, isSplashActive]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isSplashActive && <SplashScreen key="splash" />}
            </AnimatePresence>
            
            <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ 
                    opacity: isSplashActive ? 0 : 1, 
                    y: isSplashActive ? 15 : 0 
                }}
                transition={{ 
                    duration: 1.2, 
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2 // Matches the start of the clip-path lift
                }}
            >
                {children}
            </motion.div>
        </>
    );
};
