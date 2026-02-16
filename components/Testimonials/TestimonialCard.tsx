"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/constants";

interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 h-full flex flex-col group"
        >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Quote className="w-8 h-8 text-white" fill="currentColor" />
            </div>

            {/* Project Type Badge */}
            <div className="mb-6 mt-4">
                <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-wider">
                    {testimonial.projectType}
                </span>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="flex-1 mb-6">
                <p className="text-gray-300 text-base leading-relaxed italic">
                    "{testimonial.testimonial}"
                </p>
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
                {/* Avatar */}
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-0.5 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                    </div>
                </div>

                {/* Name and Role */}
                <div className="flex-1 min-w-0">
                    <h4 className="text-white font-bold text-base truncate">
                        {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm truncate">
                        {testimonial.role}
                    </p>
                    <p className="text-blue-400 text-sm font-medium truncate">
                        {testimonial.company}
                    </p>
                </div>
            </div>

            {/* Decorative Gradient Orb */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
};
