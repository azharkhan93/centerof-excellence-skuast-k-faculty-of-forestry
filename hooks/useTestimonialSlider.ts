"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTestimonialSliderProps {
    totalSlides: number;
    autoPlayInterval?: number;
    slidesToShow?: number;
}

interface UseTestimonialSliderReturn {
    currentIndex: number;
    nextSlide: () => void;
    prevSlide: () => void;
    goToSlide: (index: number) => void;
    isPaused: boolean;
    pauseAutoPlay: () => void;
    resumeAutoPlay: () => void;
}

export const useTestimonialSlider = ({
    totalSlides,
    autoPlayInterval = 5000,
    slidesToShow = 1
}: UseTestimonialSliderProps): UseTestimonialSliderReturn => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = totalSlides - slidesToShow;
            return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
    }, [totalSlides, slidesToShow]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = totalSlides - slidesToShow;
            return prevIndex <= 0 ? maxIndex : prevIndex - 1;
        });
    }, [totalSlides, slidesToShow]);

    const goToSlide = useCallback((index: number) => {
        const maxIndex = totalSlides - slidesToShow;
        const clampedIndex = Math.max(0, Math.min(index, maxIndex));
        setCurrentIndex(clampedIndex);
    }, [totalSlides, slidesToShow]);

    const pauseAutoPlay = useCallback(() => {
        setIsPaused(true);
    }, []);

    const resumeAutoPlay = useCallback(() => {
        setIsPaused(false);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (isPaused || totalSlides <= slidesToShow) return;

        const interval = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [isPaused, nextSlide, autoPlayInterval, totalSlides, slidesToShow]);

    return {
        currentIndex,
        nextSlide,
        prevSlide,
        goToSlide,
        isPaused,
        pauseAutoPlay,
        resumeAutoPlay
    };
};
