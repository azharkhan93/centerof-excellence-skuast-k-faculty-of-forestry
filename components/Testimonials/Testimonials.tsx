"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, CheckCircle, TrendingUp, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import { TESTIMONIALS } from "@/constants";
import { useTestimonialSlider } from "@/hooks/useTestimonialSlider";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials: React.FC = () => {
    const t = useTranslations('testimonials');
    const [direction, setDirection] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);

    const { currentIndex, nextSlide, prevSlide, goToSlide } = useTestimonialSlider({
        totalSlides: TESTIMONIALS.length,
        autoPlayInterval: 5000,
        slidesToShow: 1
    });


    useEffect(() => {
        if (currentIndex !== prevIndex) {
            setDirection(currentIndex > prevIndex ? 1 : -1);
            setPrevIndex(currentIndex);
        }
    }, [currentIndex, prevIndex]);


    const getVisibleCards = () => {
        const total = TESTIMONIALS.length;
        const prevIdx = currentIndex === 0 ? total - 1 : currentIndex - 1;
        const nextIdx = currentIndex === total - 1 ? 0 : currentIndex + 1;

        return [
            { testimonial: TESTIMONIALS[prevIdx], position: 'left' as const, index: prevIdx },
            { testimonial: TESTIMONIALS[currentIndex], position: 'center' as const, index: currentIndex },
            { testimonial: TESTIMONIALS[nextIdx], position: 'right' as const, index: nextIdx }
        ];
    };

    // Animation variants
    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0, scale: 0.8 }),
        center: { x: 0, opacity: 1, scale: 1, zIndex: 3 },
        left: { x: '-80%', opacity: 0.5, scale: 0.85, zIndex: 2 },
        right: { x: '80%', opacity: 0.5, scale: 0.85, zIndex: 2 },
        exit: (dir: number) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0, scale: 0.8 })
    };

    return (
        <section className="relative py-24">
            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-2 bg-brand/10 border border-brand/30 rounded-full text-brand text-sm font-semibold uppercase tracking-wider mb-4">
                            {t('badge')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {t('title')}
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {t('description')}
                        </p>
                    </motion.div>
                </div>

                {/* Carousel */}
                <div className="relative max-w-6xl mx-auto mb-12">
                    <div className="relative h-[500px] md:h-[450px] flex items-center justify-center overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            {getVisibleCards().map((card) => (
                                <motion.div
                                    key={card.index}
                                    custom={direction}
                                    variants={variants}
                                    initial={card.position === 'center' ? 'enter' : card.position}
                                    animate={card.position}
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.3 },
                                        scale: { duration: 0.3 }
                                    }}
                                    className="absolute w-full max-w-md md:max-w-lg"
                                    style={{ pointerEvents: card.position === 'center' ? 'auto' : 'none' }}
                                >
                                    <TestimonialCard testimonial={card.testimonial} index={card.index} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <button
                        onClick={() => { setDirection(-1); prevSlide(); }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-all z-10 group"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                        onClick={() => { setDirection(1); nextSlide(); }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-all z-10 group"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mb-16">
                    {TESTIMONIALS.map((_, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                goToSlide(index);
                            }}
                            className={`transition-all ${currentIndex === index ? "w-8 h-2 bg-brand" : "w-2 h-2 bg-slate-700 hover:bg-slate-600"
                                } rounded-full`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>


                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-800"
                    >
                        {[
                            { label: t('stats.clients'), value: "30+", Icon: Users },
                            { label: t('stats.projects'), value: "20+", Icon: CheckCircle },
                            { label: t('stats.successRate'), value: "100%", Icon: TrendingUp },
                            { label: t('stats.experience'), value: "5+", Icon: Award }
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
                                    <stat.Icon className="w-8 h-8 text-brand" />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-dark mb-1">
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
