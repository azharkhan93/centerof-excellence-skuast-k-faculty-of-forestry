import { Variants } from "framer-motion";

export const backgroundVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        clipPath: direction > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
        opacity: 1,
        scale: 1.1,
        filter: "brightness(0.3)"
    }),
    center: {
        x: 0,
        clipPath: "inset(0 0 0 0%)",
        opacity: 1,
        scale: 1,
        filter: "brightness(0.6)",
        transition: {
            x: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
            clipPath: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
            scale: { duration: 2, ease: "easeOut" },
            filter: { duration: 1.2 }
        }
    },
    exit: (direction: number) => ({
        x: direction < 0 ? "100%" : "-100%",
        opacity: 1,
        scale: 0.95,
        transition: { 
            x: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
            duration: 1.2 
        }
    })
};

export const contentVariants: Variants = {
    enter: { opacity: 0 },
    center: { 
        opacity: 1,
        transition: { 
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    },
    exit: { 
        opacity: 0,
        transition: { duration: 0.4 }
    }
};

export const subtitleVariants: Variants = {
    enter: { opacity: 0, y: 10 },
    center: { 
        opacity: 0.6, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const titleVariants: Variants = {
    enter: { clipPath: "inset(0 100% 0 0)" },
    center: { 
        clipPath: "inset(0 0% 0 0)",
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    }
};

export const descriptionVariants: Variants = {
    enter: { opacity: 0, y: 20 },
    center: { 
        opacity: 0.8, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const buttonVariants: Variants = {
    enter: { opacity: 0, scale: 0.8 },
    center: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const thumbnailVariants: Variants = {
    enter: (idx: number) => ({ 
        opacity: 0, 
        x: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : 200, 
        y: typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 0,
        scale: 0.8 
    }),
    center: (idx: number) => ({ 
        opacity: 1, 
        x: 0, 
        y: 0,
        scale: 1,
        transition: { delay: idx * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }),
    exit: { 
        opacity: 0, 
        x: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : -200, 
        y: typeof window !== 'undefined' && window.innerWidth < 768 ? -50 : 0,
        scale: 0.8,
        transition: { duration: 0.6 }
    }
};
