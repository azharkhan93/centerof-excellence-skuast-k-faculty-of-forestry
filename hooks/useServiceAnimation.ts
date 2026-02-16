"use client";

import { useRef } from "react";
import { useInView, Variants } from "framer-motion";

export const useServiceAnimation = (index: number) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const variants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" as any
            }
        }
    };

    return { ref, isInView, variants };
};
