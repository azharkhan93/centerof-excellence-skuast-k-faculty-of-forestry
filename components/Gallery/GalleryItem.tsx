"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryItemProps {
    item: {
        id: number;
        title: string;
        category: string;
        image: string;
        description: string;
    };
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-6 break-inside-avoid group cursor-pointer"
        >
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-100">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-brand/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-white"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-light mb-2 block">
                            {item.category}
                        </span>
                        <h4 className="text-xl font-bold mb-2 leading-tight">
                            {item.title}
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                </div>
                
                {/* Structural Border Accent (Polygon-esque) */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
        </motion.div>
    );
};
