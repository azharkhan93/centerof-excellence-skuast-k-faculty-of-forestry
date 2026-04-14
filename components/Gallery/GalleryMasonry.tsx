"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_DATA } from "@/constants";
import { GalleryItem } from "./GalleryItem";
import { GallerySpotlight } from "./GallerySpotlight";
import { GalleryFilter } from "./GalleryFilter";

export const GalleryMasonry: React.FC = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredItems = activeTab === "All" 
        ? GALLERY_DATA 
        : GALLERY_DATA.filter(item => item.category === activeTab);

    return (
        <div className="w-full">
            {/* Live Autoplay Preview Anchor */}
            <GallerySpotlight />

            {/* Enhanced Segmented Filter Tabs */}
            <GalleryFilter activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Masonry Grid - Filtered Archive */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item) => (
                        <GalleryItem key={item.id} item={item} />
                    ))}
                </AnimatePresence>
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
                <div className="py-20 text-center">
                    <p className="text-slate-400 font-medium italic">No visual archives found in this category.</p>
                </div>
            )}

            {/* Subtle Footer Landmark */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex justify-center">
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
                    End of Institutional Archive • SKUAST-K Kashmir
                </span>
            </div>
        </div>
    );
};
