import { useState, useEffect, useCallback, useRef } from "react";
import type { Service } from "@/constants";

export const useHeroSlider = (services: Service[], delay = 3000, pause = 5000) => {
    const [state, setState] = useState({
        index: 0,
        direction: 0,
        isAnimating: false,
        autoplay: true
    });
    const pauseTimer = useRef<any>(null);

    const move = useCallback((next: number) => {
        setState(s => {
            if (s.isAnimating || next === s.index) return s;
            return {
                ...s,
                direction: next > s.index ? 1 : -1,
                index: (next + services.length) % services.length
            };
        });
    }, [services.length]);

    const trigger = useCallback((action: () => void) => {
        if (pauseTimer.current) clearTimeout(pauseTimer.current);
        setState(s => ({ ...s, autoplay: false }));
        action();
        pauseTimer.current = setTimeout(() => setState(s => ({ ...s, autoplay: true })), pause);
    }, [pause]);

    useEffect(() => {
        if (!state.autoplay) return;
        const id = setInterval(() => move(state.index + 1), delay);
        return () => clearInterval(id);
    }, [state.index, state.autoplay, move, delay]);

    const getSvc = (offset: number) => services[(state.index + offset + services.length) % services.length];

    return {
        ...state,
        currentIndex: state.index,
        setIsAnimating: (val: boolean) => setState(s => ({ ...s, isAnimating: val })),
        nextSlide: () => trigger(() => move(state.index + 1)),
        prevSlide: () => trigger(() => move(state.index - 1)),
        handleThumbnailClick: (idx: number) => trigger(() => move(idx)),
        currentService: services[state.index],
        nextServices: [getSvc(1), getSvc(2)],
        totalSteps: services.length
    };
};
