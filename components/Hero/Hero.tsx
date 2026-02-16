"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import { Button } from "@/components";
import {
    useHeroSlider,
    backgroundVariants,
    contentVariants,
    thumbnailVariants,
    subtitleVariants,
    titleVariants,
    descriptionVariants,
    buttonVariants
} from "@/hooks";

export const Hero: React.FC = () => {
    const {
        currentIndex,
        direction,
        isAnimating,
        setIsAnimating,
        nextSlide,
        prevSlide,
        handleThumbnailClick,
        currentService,
        nextServices,
        totalSteps
    } = useHeroSlider();

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Image with Reveal Animation */}
            <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    onAnimationStart={() => setIsAnimating(true)}
                    variants={backgroundVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={currentService.image}
                        alt={currentService.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </AnimatePresence>


            <div className="absolute left-24 top-1/2 -translate-y-1/2 z-20 max-w-2xl pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="pointer-events-auto"
                        variants={contentVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        <motion.h2
                            variants={subtitleVariants}
                            className="text-lg font-bold tracking-[0.4em] mb-4 text-white uppercase"
                        >
                            {currentService.subtitle}
                        </motion.h2>
                        <motion.div variants={titleVariants}>
                            <h1 className="text-5xl font-bold leading-[0.85] tracking-tight mb-8 drop-shadow-2xl">
                                {currentService.title}
                            </h1>
                        </motion.div>
                        <motion.p
                            variants={descriptionVariants}
                            className="text-white text-base leading-relaxed max-w-md mb-10 font-normal opacity-70"
                        >
                            {currentService.description}
                        </motion.p>
                        <motion.div variants={buttonVariants}>
                            <Button variant="primary" size="lg" >
                                <span className="flex items-center gap-3">
                                    Explore <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Right Side Thumbnails */}
            <div className="absolute right-24 top-1/2 -translate-y-1/2 z-20 flex gap-8 items-center">
                <AnimatePresence mode="popLayout" initial={false}>
                    {nextServices.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            layout
                            custom={idx}
                            variants={thumbnailVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="relative w-64 h-[400px] rounded-[24px] overflow-hidden cursor-pointer group border border-white/10 shadow-3xl flex-shrink-0"
                            onClick={() => handleThumbnailClick((service.id - 1))}
                        >
                            <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                            <div className="absolute top-5 right-5 z-30">
                                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                    <Bookmark size={18} />
                                </button>
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 z-30">
                                <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-1 drop-shadow-md text-white/90">{service.location}</h3>
                                <div className="flex gap-1.5">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className={`w-1 h-1 rounded-full ${i <= 4 ? "bg-white" : "bg-white/30"}`} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 flex items-center gap-6">
                <button
                    onClick={prevSlide}
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group active:scale-95"
                >
                    <ChevronLeft size={32} />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group active:scale-95"
                >
                    <ChevronRight size={32} />
                </button>
            </div>


            <div className="absolute bottom-16 right-24 z-30 flex items-center gap-6 text-sm font-bold tracking-[0.3em]">
                <span className="opacity-50 font-mono">0{currentIndex + 1}</span>
                <div className="w-32 h-[2px] bg-white/10 relative overflow-hidden">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        key={currentIndex}
                        transition={{ duration: 6, ease: "linear" }}
                        className="absolute top-0 left-0 h-full bg-white w-full origin-left"
                    />
                </div>
                <span className="opacity-50 font-mono">0{totalSteps}</span>
            </div>

            {/* Vertical Indicator */}
            <div className="absolute left-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-12 items-center">
                <div className="w-[1px] h-24 bg-white/10 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-white/20 bg-white/10" />
                </div>
                <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-xs font-bold backdrop-blur-xl bg-white/5">
                    0{currentIndex + 1}
                </div>
                <div className="w-[1px] h-24 bg-white/10 relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-white/20 bg-white/10" />
                </div>
            </div>
        </section>
    );
};
