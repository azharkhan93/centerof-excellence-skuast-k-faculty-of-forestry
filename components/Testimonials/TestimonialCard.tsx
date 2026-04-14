"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/constants";
import { useTranslations } from "next-intl";

interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
    const t = useTranslations('testimonials');

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="relative bg-slate-800 rounded-xl p-6 h-full flex flex-col group testimonial-card-advanced overflow-hidden"
            style={{
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)"
            }}
        >

            <span className="testimonial-shimmer-container">
                <span className="testimonial-card-shimmer" />
            </span>


            <div className="absolute inset-0 rounded-xl border-2 border-brand/30 group-hover:border-brand/60 transition-all duration-300 pointer-events-none"
                style={{
                    clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)"
                }}
            />


            <div className="absolute top-0 right-0 w-5 h-5 bg-brand/20 group-hover:bg-brand/40 transition-all duration-300"
                style={{
                    clipPath: "polygon(100% 0, 100% 100%, 0 0)"
                }}
            />


            <div className="mb-4 relative z-10">
                <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center border border-brand/30">
                    <Quote className="w-5 h-5 text-brand" />
                </div>
            </div>


            <div className="flex items-center gap-0.5 mb-3 relative z-10">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
            </div>


            <blockquote className="flex-1 mb-4 relative z-10">
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                    "{t(`reviews.${index}.testimonial`)}"
                </p>
            </blockquote>


            <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50 relative z-10">

                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">
                        {t(`reviews.${index}.name`).split(' ').map(n => n[0]).join('')}
                    </span>
                </div>


                <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm truncate">
                        {t(`reviews.${index}.name`)}
                    </h4>
                    <p className="text-gray-400 text-xs truncate">
                        {t(`reviews.${index}.role`)} {t(`reviews.${index}.company`) ? `• ${t(`reviews.${index}.company`)}` : ''}
                    </p>
                </div>


                <div className="flex-shrink-0">
                    <span className="inline-block px-2 py-1 bg-brand/10 border border-brand/20 rounded text-brand-light text-[10px] font-medium uppercase tracking-wide">
                        {t(`reviews.${index}.projectType`)}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};
