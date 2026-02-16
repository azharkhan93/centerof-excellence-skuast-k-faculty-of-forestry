import { useState, useEffect, useCallback, useRef } from "react";
import { SERVICES } from "@/constants";

export const useHeroSlider = (delay = 6000, pause = 10000) => {
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
                index: (next + SERVICES.length) % SERVICES.length 
            };
        });
    }, []);

    const trigger = useCallback((action: () => void) => {
        if (pauseTimer.current) clearTimeout(pauseTimer.current);
        setState(s => ({ ...s, autoplay: false }));
        action();
        pauseTimer.current = setTimeout(() => setState(s => ({ ...s, autoplay: true })), pause);
    }, [pause]);

    useEffect(() => {
        if (!state.autoplay || state.isAnimating) return;
        const id = setInterval(() => move(state.index + 1), delay);
        return () => clearInterval(id);
    }, [state.index, state.autoplay, state.isAnimating, move, delay]);

    const getSvc = (offset: number) => SERVICES[(state.index + offset + SERVICES.length) % SERVICES.length];

    return {
        ...state,
        currentIndex: state.index,
        setIsAnimating: (val: boolean) => setState(s => ({ ...s, isAnimating: val })),
        nextSlide: () => trigger(() => move(state.index + 1)),
        prevSlide: () => trigger(() => move(state.index - 1)),
        handleThumbnailClick: (idx: number) => trigger(() => move(idx)),
        currentService: SERVICES[state.index],
        nextServices: [getSvc(1), getSvc(2)],
        totalSteps: SERVICES.length
    };
};
