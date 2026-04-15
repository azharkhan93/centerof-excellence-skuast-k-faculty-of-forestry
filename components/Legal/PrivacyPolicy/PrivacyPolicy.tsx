"use client";

import React from "react";
import { motion } from "framer-motion";

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="space-y-10 text-slate-700 leading-relaxed max-w-4xl mx-auto pb-20">
            {/* Disclaimer Section */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-brand" />
                    <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-tight">Disclaimer</h2>
                </div>
                <p className="text-lg">
                    The information provided on the <span className="font-semibold text-brand">Center of Excellence on Herbal Technology-SKUAST Kashmir</span> webpage is for educational and informational purposes only. While we strive to ensure accuracy, completeness, and reliability, we do not guarantee or warrant the correctness of the content.
                </p>
                <div className="mt-4 p-6 bg-slate-50 rounded-2xl italic text-slate-600">
                    The Center of Excellence on Herbal Technology-SKUAST Kashmir shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or reliance on the information provided on this webpage.
                </div>
                <p className="mt-4">
                    Links to external sites are provided for convenience and do not imply endorsement of their content. By using this webpage, you agree to these terms and acknowledge that the use of herbal products should be based on informed decision-making and professional guidance.
                </p>
            </section>

            {/* Privacy Policy Section */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-brand" />
                    <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-tight">Privacy Policy</h2>
                </div>
                <p>
                    The Center of Excellence on Herbal Technology-SKUAST Kashmir respects the privacy of its visitors. We do not collect personal data; however, any information stored by default during your visit is not accessed or shared.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-white border border-slate-100 shadow-sm rounded-xl">
                        <h3 className="font-bold text-slate-900 mb-2">Cookies & Experience</h3>
                        <p className="text-sm text-slate-500">Cookies may be used to enhance user experience and site functionality.</p>
                    </div>
                    <div className="p-5 bg-white border border-slate-100 shadow-sm rounded-xl">
                        <h3 className="font-bold text-slate-900 mb-2">Terms Agreement</h3>
                        <p className="text-sm text-slate-500">By using our website, you agree to our privacy terms. Contact us for any inquiries.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
