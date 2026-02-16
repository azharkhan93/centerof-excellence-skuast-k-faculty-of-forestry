"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, CheckCircle, TrendingUp, Award } from "lucide-react";

import { TESTIMONIALS } from "@/constants";
import { useTestimonialSlider } from "@/hooks/useTestimonialSlider";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials: React.FC = () => {
    const {
        currentIndex,
        goToSlide
    } = useTestimonialSlider({
        totalSlides: TESTIMONIALS.length,
        autoPlayInterval: 5000,
        slidesToShow: 3
    });

    // Calculate visible testimonials based on screen size
    const getVisibleTestimonials = () => {
        // Show 3 cards on desktop, 2 on tablet, 1 on mobile
        return TESTIMONIALS.slice(currentIndex, currentIndex + 3);
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                            Testimonials
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what our clients have to say about working with us.
                        </p>
                    </motion.div>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    {/* Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <AnimatePresence mode="popLayout">
                            {visibleTestimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <TestimonialCard
                                        testimonial={testimonial}
                                        index={index}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination Dots Only */}
                    <div className="flex items-center justify-center gap-2">
                        {Array.from({ length: TESTIMONIALS.length - 2 }).map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => goToSlide(index)}
                                className={`transition-all ${currentIndex === index
                                    ? "w-8 h-2 bg-blue-500"
                                    : "w-2 h-2 bg-slate-700 hover:bg-slate-600"
                                    } rounded-full`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>


                {/* Stats Section */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-slate-800"
                    >
                        {[
                            { label: "Happy Clients", value: "500+", Icon: Users },
                            { label: "Projects Completed", value: "1,200+", Icon: CheckCircle },
                            { label: "Success Rate", value: "98%", Icon: TrendingUp },
                            { label: "Years Experience", value: "15+", Icon: Award }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="mb-2 flex items-center justify-center">
                                    <stat.Icon className="w-8 h-8 text-blue-400" />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-900 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-xs uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
