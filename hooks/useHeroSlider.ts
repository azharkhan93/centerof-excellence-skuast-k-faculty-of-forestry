import { useState, useEffect, useCallback, useRef } from "react";
import type { Service } from "@/constants";

export const useHeroSlider = (services: Service[], isLoaded: boolean = true, delay = 3000, pause = 5000) => {
    const [state, setState] = useState({
        index: 0,
        direction: 0,
        isAnimating: false,
        autoplay: true
    });
    const pauseTimer = useRef<any>(null);

    const move = useCallback((next: number) => {
        setState(s => {
            const nextMod = (next + services.length) % services.length;
            if (s.isAnimating || nextMod === s.index) return s;

         
            let direction = nextMod > s.index ? 1 : -1;
            
            // Handle wrap-around cases
            if (s.index === services.length - 1 && nextMod === 0) direction = 1;
            if (s.index === 0 && nextMod === services.length - 1) direction = -1;

            return {
                ...s,
                direction,
                index: nextMod
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
        if (!state.autoplay || !isLoaded) return;
        const id = setInterval(() => move(state.index + 1), delay);
        return () => clearInterval(id);
    }, [state.index, state.autoplay, move, delay, isLoaded]);

    const getSvc = (offset: number) => services[(state.index + offset + services.length) % services.length];

    return {
        ...state,
        currentIndex: state.index,
        setIsAnimating: (val: boolean) => setState(s => ({ ...s, isAnimating: val })),
        nextSlide: () => trigger(() => move(state.index + 1)),
        prevSlide: () => trigger(() => move(state.index - 1)),
        handleThumbnailClick: (idx: number) => trigger(() => move(idx)),
        currentService: services[state.index],
        nextServices: [getSvc(0), getSvc(1), getSvc(2)],
        totalSteps: services.length
    };
};
