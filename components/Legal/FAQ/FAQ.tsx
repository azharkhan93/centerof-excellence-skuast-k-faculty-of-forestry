"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
    {
        question: "What is the Center of Excellence on Herbal Technology?",
        answer: "The Center of Excellence on Herbal Technology is a dedicated research and innovation hub focused on exploring, developing, advancing the science, technology, and application of herbal products for health, wellness, and sustainable development."
    },
    {
        question: "What are the aims of the center?",
        answer: "The center aims to promote research and development in herbal technology; foster innovation in herbal product formulation and standardization; support sustainable cultivation and utilization of medicinal plants; provide education and training in herbal sciences; and collaborate with industry and academia for commercialization."
    },
    {
        question: "Who can benefit from the center’s services?",
        answer: "Researchers, students, herbal product manufacturers, healthcare professionals, farmers, and policymakers can benefit from the center’s resources, expertise, and collaborations."
    },
    {
        question: "What kind of research does the center conduct?",
        answer: "Research includes phytochemistry and standardization of herbal extracts; development of pharmaceuticals, nutraceuticals, and cosmeceuticals; sustainable cultivation and conservation; and scientific validation of traditional remedies."
    },
    {
        question: "Can I collaborate with the center on research projects?",
        answer: "Yes, the center welcomes collaborations with academic institutions, industries, and research organizations. Please contact us for partnership opportunities."
    },
    {
        question: "Does the center offer training programs or courses?",
        answer: "Yes, the center offers workshops, certification programs, and training sessions on extraction technology, cultivation, value addition, and sustainable practices."
    },
    {
        question: "Who can enroll in the training programs?",
        answer: "Students, researchers, industry professionals, and anyone interested in herbal sciences can enroll in our programs or write to us for customized trainings."
    },
    {
        question: "Can the center assist in developing herbal products?",
        answer: "Yes, the center provides expertise in formulation, standardization, and quality control of herbal products."
    },
    {
        question: "How can I get my herbal product tested or validated?",
        answer: "Visit our webpage or contact our testing and validation services team for information on product analysis, safety, and efficacy testing."
    },
    {
        question: "Does the center work on sustainable practices for medicinal plants?",
        answer: "Yes, the center promotes sustainable cultivation, harvesting, and conservation of medicinal and aromatic plants to ensure their long-term availability."
    },
    {
        question: "How can I learn about sustainable cultivation of plants?",
        answer: "The center offers resources, training, and consultancy services on sustainable agricultural practices for medicinal plants."
    },
    {
        question: "How can industries collaborate with the center?",
        answer: "Industries can collaborate through research partnerships, technology transfer, consultancy services, and joint product development initiatives."
    },
    {
        question: "Does the center provide consultancy services?",
        answer: "Yes, the center offers consultancy in areas such as commercial cultivation, extraction, herbal product development, quality control, and regulatory compliance."
    },
    {
        question: "Can I access the center’s database?",
        answer: "Yes, the center maintains a comprehensive database on herbal sciences, which is accessible to researchers and students."
    },
    {
        question: "Are there internship opportunities at the center?",
        answer: "Yes, the center offers internships for students and young researchers. Check our careers section for details."
    },
    {
        question: "Does the center organize events or conferences?",
        answer: "Yes, the center hosts seminars, conferences, and workshops on herbal technology and related fields. Check our events section for updates."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="max-w-4xl mx-auto space-y-4 pb-20">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-px bg-brand" />
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight">Frequently Asked Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FAQ_ITEMS.map((item, index) => (
                    <div 
                        key={index}
                        className={`group border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 h-fit ${
                            openIndex === index ? 'bg-slate-50 border-brand/20 shadow-sm' : 'bg-white hover:border-slate-200 shadow-sm'
                        }`}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left transition-colors"
                        >
                            <span className={`font-bold transition-colors ${
                                openIndex === index ? 'text-brand' : 'text-slate-800'
                            }`}>
                                {index + 1}. {item.question}
                            </span>
                            <div className={`p-2 rounded-full transition-colors ${
                                openIndex === index ? 'bg-brand text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                            }`}>
                                {openIndex === index ? (
                                    <Minus className="w-4 h-4" />
                                ) : (
                                    <Plus className="w-4 h-4" />
                                )}
                            </div>
                        </button>
                        
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};
