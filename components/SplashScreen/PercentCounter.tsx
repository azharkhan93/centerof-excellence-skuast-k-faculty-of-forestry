"use client";

import React, { useState, useEffect } from "react";
import { animate } from "framer-motion";

export const PercentCounter: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controls = animate(0, 100, {
            duration: 1.2,
            ease: "easeInOut",
            onUpdate: (v) => setCount(Math.round(v))
        });
        return () => controls.stop();
    }, []);

    return <span className="text-[10px] text-brand mb-2">{count}%</span>;
};
