"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Button } from "@/components";
import { SERVICES } from "@/constants";
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

import { useLoading } from "@/context/LoadingContext";

export const Hero: React.FC = () => {
    const t = useTranslations('hero');
    const tServices = useTranslations('services');
    const { isLoaded } = useLoading();

    const translatedServices = useMemo(() => {
        return SERVICES.map((service, index) => ({
            ...service,
            title: tServices(`items.${index}.title`),
            subtitle: tServices(`items.${index}.subtitle`),
            description: tServices(`items.${index}.description`),
            location: tServices(`items.${index}.location`)
        }));
    }, [tServices]);

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
    } = useHeroSlider(translatedServices);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white ">
            {/* Background Image with Reveal Animation */}
            <AnimatePresence initial={true} custom={direction} onExitComplete={() => setIsAnimating(false)}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    onAnimationStart={() => setIsAnimating(true)}
                    variants={backgroundVariants}
                    initial="enter"
                    animate={isLoaded ? "center" : "enter"}
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


            {/* Content Section */}
            <div className="absolute left-6 md:left-24 top-[40%] md:top-1/2 -translate-y-1/2 z-20 max-w-[calc(100%-3rem)] md:max-w-xl pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="pointer-events-auto"
                        variants={contentVariants}
                        initial="enter"
                        animate={isLoaded ? "center" : "enter"}
                        exit="exit"
                    >
                        <motion.h2
                            variants={subtitleVariants}
                            className="text-sm md:text-lg font-bold tracking-[0.4em] mb-2 md:mb-4 text-white uppercase"
                        >
                            {currentService.subtitle}
                        </motion.h2>
                        <motion.div variants={titleVariants}>
                            <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] md:leading-[1] tracking-tight mb-6 md:mb-8 drop-shadow-2xl">
                                {currentService.title}
                            </h1>
                        </motion.div>
                        <motion.p
                            variants={descriptionVariants}
                            className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm md:max-w-md mb-8 md:mb-10 font-normal"
                        >
                            {currentService.description}
                        </motion.p>
                        <motion.div variants={buttonVariants}>
                            <Button variant="primary" size="lg" className="scale-90 md:scale-100 origin-left">
                                <span className="flex items-center gap-3">
                                    {t('explore')} <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Thumbnails Section */}
            <div className="absolute right-6 md:right-24 top-[70%] md:top-1/2 -translate-y-1/2 z-20 flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start max-h-[40vh] md:max-h-none overflow-visible">
                <AnimatePresence mode="popLayout" initial={false}>
                    {nextServices.map((service, idx) => {
                        const targetIndex = SERVICES.findIndex(s => s.id === service.id);
                        const isActive = idx === 0;
                        
                        return (
                            <motion.div
                                key={`thumbnail-${service.id}`}
                                layout
                                custom={idx}
                                variants={thumbnailVariants}
                                initial="enter"
                                animate={isLoaded ? "center" : "enter"}
                                exit="exit"
                                className={`relative w-32 h-48 md:w-48 md:h-[300px] rounded-[16px] md:rounded-[20px] overflow-hidden cursor-pointer group border shadow-3xl flex-shrink-0 transition-all duration-500 
                                    ${isActive ? 'border-brand/60 scale-105 z-30 shadow-brand/20' : 'border-white/10 opacity-60 hover:opacity-100'}`}
                                onClick={() => handleThumbnailClick(targetIndex)}
                            >
                                <Image 
                                    src={service.image} 
                                    alt={service.title} 
                                    fill 
                                    className={`object-cover transition-all duration-700 ${isActive ? 'scale-105' : 'group-hover:scale-110'}`}
                                    sizes="(max-width: 768px) 160px, 256px"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/95 ${isActive ? 'via-brand/5' : 'via-black/30'} to-transparent`} />

                                <div className="absolute top-3 right-3 md:top-5 md:right-5 z-30">
                                    <button className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all 
                                        ${isActive ? 'bg-brand text-white' : 'bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black'}`}>
                                        <Bookmark className="w-4 h-4 md:w-5 md:h-5" />
                                    </button>
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-30">
                                    <h3 className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-1 drop-shadow-md transition-colors ${isActive ? 'text-white' : 'text-white/70'}`}>
                                        {service.location}
                                    </h3>
                                    <div className="flex gap-1">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className={`w-0.5 h-0.5 md:w-1 md:h-1 rounded-full ${i <= (targetIndex + 1) ? "bg-brand" : "bg-white/30"}`} />
                                        ))}
                                    </div>
                                </div>

                                {isActive && (
                                    <div className="absolute top-0 left-0 w-full h-1 bg-brand/50" />
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>


            {/* Navigation Buttons */}
            <div className="absolute bottom-6 md:bottom-12 left-6 md:left-1/2 md:-translate-x-1/2 z-40 flex items-center gap-4 md:gap-6">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group active:scale-95 shadow-lg"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group active:scale-95 shadow-lg"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>


            <div className="absolute bottom-8 md:bottom-16 right-6 md:right-24 z-30 flex items-center gap-4 md:gap-6 text-xs md:text-sm font-bold tracking-[0.3em]">
                <span className="opacity-50 font-mono">0{currentIndex + 1}</span>
                <div className="w-20 md:w-32 h-[1px] md:h-[2px] bg-white/10 relative overflow-hidden">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        key={currentIndex}
                        transition={{ duration: 3, ease: "linear" }}
                        className="absolute top-0 left-0 h-full bg-white w-full origin-left"
                    />
                </div>
                <span className="opacity-50 font-mono">0{totalSteps}</span>
            </div>

            <div className="hidden md:flex absolute left-12 top-1/2 -translate-y-1/2 z-30 flex-col gap-12 items-center">
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
