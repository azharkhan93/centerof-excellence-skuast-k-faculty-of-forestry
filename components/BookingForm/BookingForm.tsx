"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTestBooking } from "@/hooks/useTestBooking";
import { Button } from "@/components";
import { 
    ClipboardList, 
    User, 
    Beaker, 
    CheckCircle2,
    ShieldCheck,
    ChevronRight, 
    ChevronLeft,
} from "lucide-react";

// Sub-components
import { SuccessMessage } from "./SuccessMessage";
import { TestMatrix } from "./TestMatrix";
import { ApplicantBio } from "./ApplicantBio";
import { SampleProfile } from "./SampleProfile";
import { ReviewSubmit } from "./ReviewSubmit";

export const BookingForm: React.FC = () => {
    const { 
        step, 
        formData, 
        updateField, 
        toggleTest, 
        totalCost, 
        nextStep, 
        prevStep 
    } = useTestBooking();

    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isSubmitted) return <SuccessMessage />;

    const renderStep = () => {
        switch(step) {
            case 0: return <TestMatrix formData={formData} toggleTest={toggleTest} updateField={updateField} />;
            case 1: return <ApplicantBio formData={formData} updateField={updateField} />;
            case 2: return <SampleProfile formData={formData} updateField={updateField} />;
            case 3: return <ReviewSubmit formData={formData} totalCost={totalCost} updateField={updateField} />;
            default: return null;
        }
    };

    const steps = [
        { id: 0, title: "Select Tests", icon: <ClipboardList size={16} /> },
        { id: 1, title: "Applicant Info", icon: <User size={16} /> },
        { id: 2, title: "Sample Details", icon: <Beaker size={16} /> },
        { id: 3, title: "Review & Terms", icon: <ShieldCheck size={16} /> }
    ];

    return (
        <div className="max-w-5xl mx-auto">
            {/* Minimal Horizontal Stepper */}
            <div className="flex items-center justify-between mb-12 px-4 relative">
                <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10" />
                {steps.map((s, idx) => (
                    <div key={s.id} className="flex flex-col items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 bg-white ${step >= s.id ? 'border-brand text-brand' : 'border-slate-100 text-slate-300'}`}>
                            {step > s.id ? <CheckCircle2 size={18} fill="currentColor" className="text-white" /> : s.icon}
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${step >= s.id ? 'text-slate-900' : 'text-slate-300'}`}>{s.title}</span>
                    </div>
                ))}
            </div>

            {/* Main Form Container - Minimalist */}
            <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden p-8 lg:p-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderStep()}
                    </motion.div>
                </AnimatePresence>

                {/* Sticky-style Bottom Actions */}
                <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                    <div>
                        {/* Hide total on first step and for HADP Farmers as requested */}
                        {step !== 0 && step !== 3 && !(formData.occupation === 'farmer' && formData.isHADP) && (
                            <div className="flex flex-col animate-in fade-in slide-in-from-left-4">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Estimated Total</span>
                                <span className="text-xl font-bold text-slate-900">₹{totalCost.toLocaleString('en-IN')} <span className="text-[10px] text-slate-400 font-medium">*Excl. Tax</span></span>
                            </div>
                        )}
                    </div>
                    
                    <div className="flex gap-4">
                        <Button 
                            variant="outline" 
                            onClick={prevStep}
                            disabled={step === 0}
                            className={step === 0 ? 'hidden' : ''}
                        >
                            <ChevronLeft size={18} /> Back
                        </Button>
                        <Button 
                            onClick={() => {
                                if (step === 1) {
                                    const phoneRegex = /^[6-9]\d{9}$/;
                                    if (!phoneRegex.test(formData.contactNumber)) {
                                        alert("Please enter a valid 10-digit Indian mobile number.");
                                        return;
                                    }

                                    // Institutional Verification - Moved from Step 0 to Step 1
                                    if (formData.occupation === 'farmer' && formData.isHADP && !formData.verificationFile) {
                                        alert("Please upload your HADP Project verification document.");
                                        return;
                                    }
                                    if (formData.occupation === 'student' && formData.isStudentResearcher) {
                                        if (!formData.registrationNumber) {
                                            alert("Please enter your Student Registration Number.");
                                            return;
                                        }
                                        if (!formData.verificationFile) {
                                            alert("Please upload your Student ID or research verification.");
                                            return;
                                        }
                                    }
                                }
                                step === 3 ? handleSubmit() : nextStep();
                            }}
                            disabled={step === 3 && !formData.acknowledged}
                        >
                            {step === 3 ? 'Confirm & Submit' : 'Continue'} <ChevronRight size={18} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
