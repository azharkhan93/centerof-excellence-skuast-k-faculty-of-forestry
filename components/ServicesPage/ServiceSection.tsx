"use client";

import { SERVICES_PAGE_DATA } from "@/constants";
import { ServiceItem } from "./ServiceItem";
import { motion } from "framer-motion";

export const ServiceSection = () => {
    return (
        <section className="py-20 md:py-32 ">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-black font-mono text-sm tracking-[0.2em] uppercase mb-4 block"
                    >
                        {SERVICES_PAGE_DATA.hero.subtitle}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight"
                    >
                        {SERVICES_PAGE_DATA.hero.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                    >
                        {SERVICES_PAGE_DATA.hero.description}
                    </motion.p>
                </div>

                {/* Services List */}
                <div className="max-w-6xl mx-auto space-y-12 md:space-y-0">
                    {SERVICES_PAGE_DATA.services.map((service, index) => (
                        <ServiceItem
                            key={service.id}
                            index={index}
                            {...service}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};
