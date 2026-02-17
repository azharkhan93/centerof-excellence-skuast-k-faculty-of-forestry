"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceItemProps {
    title: string;
    description: string;
    image: string;
    index: number;
}

export const ServiceItem = ({ title, description, image, index }: ServiceItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12 md:py-16 border-b border-slate-800 last:border-0"
        >
            {/* Image Section */}
            <div className={`w-full md:w-1/2 relative md:p-6 order-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                <div className="relative overflow-hidden rounded-2xl aspect-video md:aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-500 ease-in-out">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />
                    <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-slate-500/10 to-slate-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content Section */}
            <div className={`w-full md:w-1/2 flex flex-col items-start space-y-4 md:space-y-6 order-2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                <div className="flex items-center gap-3">
                    <span className="text-slate-400 font-mono text-sm tracking-widest uppercase">0{index + 1}</span>
                    <div className="h-px w-12 bg-slate-500/30"></div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-black group-hover:text-green-500 transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-slate-400 text-lg leading-relaxed">
                    {description}
                </p>

                <div className="pt-4">
                    <button className="flex items-center gap-2 text-sm text-black font-medium hover:text-green-500 transition-colors group/btn">
                        <span>Learn More</span>
                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
