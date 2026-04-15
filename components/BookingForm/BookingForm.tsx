"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTestBooking } from "@/hooks/useTestBooking";
import { 
    Button,
    FormInput,
    
} from "@/components";
import { 
    ClipboardList, 
    User, 
    Beaker, 
    CheckCircle2,
    ShieldCheck,
    ChevronRight, 
    ChevronLeft,
} from "lucide-react";
import { PRICING_DATABASE, TEST_CATEGORIES, BOOKING_TERMS } from "@/constants";
import { Dropdown } from "../Dropdown";
import { Dropzone } from "../Dropzone/Dropzone";

// --- CONSTANTS ---

const OCCUPATION_OPTIONS = [
    { label: "Entrepreneur", value: "entrepreneur" },
    { label: "Scientist", value: "scientist" },
    { label: "Student Researcher", value: "student" },
    { label: "Farmer", value: "farmer" }
];

const SPECIMEN_TYPE_OPTIONS = [
    { label: "Plant / Plant Part", value: "Plant" },
    { label: "Honey", value: "Honey" },
    { label: "NTFPs", value: "NTFPs" },
    { label: "Essential Oil", value: "Essential oil" },
    { label: "Herbal Formulation", value: "Herbal Products" },
    { label: "Other", value: "Other" }
];

const PURPOSE_OPTIONS = [
    { label: "Academic Research", value: "academic" },
    { label: "Commercial / Industrial", value: "commercial" },
    { label: "Other (Please specify below)", value: "other" }
];

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
                        {/* Hide total on first step as requested */}
                        {step !== 0 && step !== 3 && (
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
                            <ChevronLeft size={18} className="mr-2" /> Back
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
                            {step === 3 ? 'Confirm & Submit' : 'Continue'} <ChevronRight size={18} className="ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- SUCCESS STATE ---

const SuccessMessage: React.FC = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center py-20"
    >
        <div className="w-20 h-20 bg-brand/10 text-brand rounded-3xl flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Application Received</h3>
        <p className="text-slate-600 font-medium leading-relaxed mb-10">
            Your technical test booking has been initialized. A digital summary and further instructions for sample submission have been sent to your registered email.
        </p>
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-sm text-left mb-10">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-brand mb-4">Next Steps</h4>
            <ul className="space-y-3">
                <li className="flex gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                    Submit physical specimens to Laboratory PI
                </li>
                <li className="flex gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                    Complete payment via the shared bank transfer details
                </li>
            </ul>
        </div>
        <Button onClick={() => window.location.reload()}>Back to Portal</Button>
    </motion.div>
);

// --- FORM STEP COMPONENTS ---

const TestMatrix: React.FC<{ formData: any, toggleTest: any, updateField: any }> = ({ formData, toggleTest, updateField }) => {
    return (
        <div>
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-xl">
                    <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Technical Test Selection</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">Browse our analytical catalog. Please select your category first to view your specific institutional pricing and eligible discounts.</p>
                </div>
                
                <div className="w-full md:w-72 shrink-0">
                    <Dropdown 
                        label="I am applying as a:" 
                        value={formData.occupation}
                        onChange={(val: string) => updateField('occupation', val)}
                        options={OCCUPATION_OPTIONS}
                    />
                </div>
            </div>

            <AnimatePresence>
                {formData.occupation === 'farmer' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-6 overflow-hidden">
                        <div className="p-4 rounded-xl bg-brand/5 border border-brand/10">
                            <label className="flex items-center gap-4 cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    checked={formData.isHADP}
                                    onChange={(e) => updateField('isHADP', e.target.checked)}
                                    className="w-5 h-5 rounded border-slate-300 text-brand focus:ring-brand"
                                />
                                <span className="text-[11px] font-bold text-slate-700 leading-tight">
                                    *Services are free to farmers registered under <span className="text-brand">HADP Project No. 5</span> on MAPs.
                                </span>
                            </label>
                        </div>
                    </motion.div>
                )}

                {formData.occupation === 'student' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-6 overflow-hidden">
                        <div className="p-4 rounded-xl bg-brand/5 border border-brand/10">
                            <label className="flex items-center gap-4 cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    checked={formData.isStudentResearcher}
                                    onChange={(e) => updateField('isStudentResearcher', e.target.checked)}
                                    className="w-5 h-5 rounded border-slate-300 text-brand focus:ring-brand"
                                />
                                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-tight">I am student researcher</span>
                            </label>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!formData.occupation ? (
                <div className="py-20 text-center border-2 border-dashed border-slate-100 rounded-3xl">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                        <User size={32} />
                    </div>
                    <h4 className="text-slate-900 font-bold mb-2">Awaiting Category Selection</h4>
                    <p className="text-slate-400 text-xs max-w-xs mx-auto">Please select your role from the dropdown above to unlock the institutional pricing matrix.</p>
                </div>
            ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {TEST_CATEGORIES.map(cat => {
                        const tests = PRICING_DATABASE.filter(t => t.cat === cat.id);
                        return (
                            <div key={cat.id} className="mb-12 last:mb-0">
                                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand border-b border-brand/10 pb-4 mb-6">{cat.label}</h5>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5">
                                    {tests.map(test => {
                                        const isSelected = formData.selectedTests.includes(test.id);
                                        // @ts-ignore
                                        const price = test.prices[formData.occupation] ?? test.prices.entrepreneur;
                                        return (
                                            <button
                                                key={test.id}
                                                onClick={() => toggleTest(test.id)}
                                                className={`group flex items-center gap-3 p-2 rounded-lg border transition-all text-left min-h-[54px] ${isSelected ? 'bg-brand/5 border-brand ring-1 ring-brand/10' : 'bg-white border-slate-100 hover:border-slate-300 shadow-sm shadow-slate-200/50'}`}
                                            >
                                                <div className={`w-3.5 h-3.5 rounded-sm border shrink-0 flex items-center justify-center transition-colors ${isSelected ? 'bg-brand border-brand text-white' : 'bg-slate-50 border-slate-200 group-hover:border-brand/30'}`}>
                                                    {isSelected && <CheckCircle2 size={10} />}
                                                </div>
                                                <div className="flex-1 min-w-0 pr-1">
                                                    <span className={`block text-[10px] font-bold leading-tight truncate ${isSelected ? 'text-slate-900' : 'text-slate-600'}`}>{test.title}</span>
                                                    <span className={`text-[8px] font-black tracking-tight ${formData.occupation === 'farmer' && price === 0 ? 'text-brand' : 'text-slate-400'}`}>
                                                        {formData.occupation === 'farmer' && price === 0 ? 'FREE' : `₹${price.toLocaleString()}`}
                                                    </span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

const ApplicantBio: React.FC<{ formData: any, updateField: any }> = ({ formData, updateField }) => (
    <div>
        <div className="mb-10">
            <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Applicant Bio</h3>
            <p className="text-slate-500 text-sm font-medium">Administrative details for analytical reporting.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <FormInput 
                label="Full Name" 
                variant="light"
                value={formData.applicantName} 
                onChange={(e) => updateField('applicantName', e.target.value)} 
                placeholder="Enter your name" 
                containerClassName="md:col-span-2"
            />
            
            <FormInput 
                label="Institutional Affiliation" 
                variant="light"
                value={formData.organization} 
                onChange={(e) => updateField('organization', e.target.value)} 
                placeholder="University / Industry name" 
            />
            
            <FormInput 
                label="Contact Number" 
                variant="light"
                type="tel"
                prefix="+91"
                value={formData.contactNumber} 
                onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                    updateField('contactNumber', val);
                }} 
                placeholder="10-digit mobile number" 
            />

            <FormInput 
                label="Email Address" 
                variant="light"
                type="email"
                containerClassName="md:col-span-2"
                value={formData.email} 
                onChange={(e) => updateField('email', e.target.value)} 
                placeholder="Result reports will be sent here" 
            />

            <FormInput 
                label="Corresponding Address" 
                variant="light"
                type="textarea"
                rows={2}
                containerClassName="md:col-span-2"
                value={formData.address} 
                onChange={(e) => updateField('address', e.target.value)} 
                placeholder="Full mailing address" 
            />

            {(formData.isHADP || formData.isStudentResearcher) && (
                <div className="md:col-span-2 space-y-6 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand">Institutional Verification Required</h4>
                    
                    {formData.isHADP && formData.occupation === 'farmer' && (
                        <Dropzone 
                            label="HADP Registration Document" 
                            onFileSelect={(file) => updateField('verificationFile', file)}
                        />
                    )}

                    {formData.isStudentResearcher && formData.occupation === 'student' && (
                        <div className="grid md:grid-cols-2 gap-6">
                            <FormInput 
                                label="Registration Number"
                                variant="light"
                                value={formData.registrationNumber}
                                onChange={(e) => updateField('registrationNumber', e.target.value)}
                                placeholder="University ID / Roll No."
                            />
                            <Dropzone 
                                label="Student ID / Research Proof" 
                                onFileSelect={(file) => updateField('verificationFile', file)}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    </div>
);

const SampleProfile: React.FC<{ formData: any, updateField: any }> = ({ formData, updateField }) => (
    <div>
        <div className="mb-10">
            <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Specimen Profile</h3>
            <p className="text-slate-500 text-sm font-medium">Technical details regarding the provided samples.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <Dropdown 
                label="Type of Specimen" 
                value={formData.sampleType}
                onChange={(val: string) => updateField('sampleType', val)}
                options={SPECIMEN_TYPE_OPTIONS}
            />

            <FormInput 
                label="Specimen Count" 
                variant="light"
                type="text"
                value={formData.numberOfSamples.toString()}
                onChange={(e) => updateField('numberOfSamples', parseInt(e.target.value) || 0)} 
                placeholder="Number of samples" 
            />

            <Dropdown 
                label="Research / Commercial Purpose" 
                className="md:col-span-2"
                value={formData.purpose}
                onChange={(val: string) => updateField('purpose', val)}
                options={PURPOSE_OPTIONS}
            />

            {formData.purpose === 'other' && (
                <FormInput 
                    label="Specific Testing Objective" 
                    variant="light"
                    type="textarea"
                    rows={2}
                    containerClassName="md:col-span-2"
                    value={formData.purposeOther} 
                    onChange={(e) => updateField('purposeOther', e.target.value)} 
                    placeholder="Describe specific analysis goals" 
                />
            )}
        </div>
    </div>
);

const ReviewSubmit: React.FC<{ formData: any, totalCost: number, updateField: any }> = ({ formData, totalCost, updateField }) => (
    <div>
        <div className="mb-10">
            <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Acknowledgement & Terms</h3>
            <p className="text-slate-500 text-sm font-medium">Legal requirements and institutional mandate confirmation.</p>
        </div>

        <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-brand mb-6">Standard Operating Terms</h4>
                <div className="space-y-4">
                    {BOOKING_TERMS.map((term, i) => (
                        <div key={i} className="flex gap-4">
                            <span className="text-[10px] font-bold text-slate-300 shrink-0">{(i+1).toString().padStart(2, '0')}</span>
                            <p className="text-[11px] text-slate-600 leading-relaxed font-medium">{term}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`p-6 rounded-2xl border transition-all ${formData.acknowledged ? 'bg-brand/5 border-brand' : 'bg-slate-50 border-slate-200'}`}>
                <label className="flex items-center gap-4 cursor-pointer">
                    <input 
                        type="checkbox" 
                        checked={formData.acknowledged}
                        onChange={(e) => updateField('acknowledged', e.target.checked)}
                        className="w-5 h-5 rounded border-slate-300 text-brand focus:ring-brand" 
                    />
                    <span className="text-xs font-bold text-slate-800">I have read and agree to all terms of laboratory usage and result reporting.</span>
                </label>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
                <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Summary Submission</span>
                    <h5 className="font-bold text-sm text-brand-light">₹{totalCost.toLocaleString('en-IN')} ESTIMATED TOTAL</h5>
                </div>
                <div className="flex items-center gap-2 text-brand-light text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                    <CheckCircle2 size={16} /> Digital Review Required
                </div>
            </div>
        </div>
    </div>
);
