import { CubicBezier } from "@/types/splash";

export const SPLASH_TRANSITION_EASE: CubicBezier = [0.85, 0, 0.15, 1];
export const SPRING_EASE: CubicBezier = [0.22, 1, 0.36, 1];

export const SPLASH_TRANSITION = {
    duration: 1.2,
    ease: SPLASH_TRANSITION_EASE,
    delay: 0.8
};

export const GRID_CONFIG = {
    verticalLines: 5,
    horizontalLines: 4,
    nodesPerLine: 6
};
