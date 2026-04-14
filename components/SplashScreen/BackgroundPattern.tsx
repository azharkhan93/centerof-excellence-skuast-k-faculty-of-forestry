"use client";

import React from "react";
import { motion } from "framer-motion";
import { SPRING_EASE, GRID_CONFIG } from "@/constants/splash";

export const BackgroundPattern: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--brand-rgb)_0%,_transparent_70%)] opacity-[0.03]" />
            
            {/* Vertical Grid Lines */}
            <div className="absolute inset-0 flex justify-around px-12 opacity-[0.15]">
                {Array.from({ length: GRID_CONFIG.verticalLines }).map((_, i) => (
                    <motion.div
                        key={`v-${i}`}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1.5, delay: i * 0.1, ease: SPRING_EASE }}
                        className="w-[1px] h-full bg-brand/20 relative"
                    >
                        {Array.from({ length: GRID_CONFIG.nodesPerLine }).map((_, n) => (
                            <div 
                                key={n} 
                                className="absolute w-1.5 h-1.5 bg-brand/30 rounded-full -left-[3px]" 
                                style={{ top: `${n * 15}%` }} 
                            />
                        ))}
                    </motion.div>
                ))}
            </div>
            
            {/* Horizontal Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-around py-12 opacity-[0.15]">
                {Array.from({ length: GRID_CONFIG.horizontalLines }).map((_, i) => (
                    <motion.div
                        key={`h-${i}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: i * 0.15, ease: SPRING_EASE }}
                        className="h-[1px] w-full bg-brand/20"
                    />
                ))}
            </div>
        </div>
    );
};
