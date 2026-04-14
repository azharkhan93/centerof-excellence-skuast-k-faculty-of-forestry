import { Variants, Transition } from "framer-motion";

export type CubicBezier = [number, number, number, number];

export type SplashTransition = Transition & {
    ease: CubicBezier;
};

export interface SplashVariants {
    container: Variants;
    item: Variants;
}
