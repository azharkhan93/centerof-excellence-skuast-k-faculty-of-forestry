"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { BOOKING_TERMS } from "@/constants";
import { BookingFormData } from "@/hooks/useTestBooking";

interface ReviewSubmitProps {
    formData: any;
    totalCost: number;
    updateField: (field: keyof BookingFormData, value: any) => void;
}

export const ReviewSubmit: React.FC<ReviewSubmitProps> = ({ formData, totalCost, updateField }) => (
    <>
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
                    <h5 className="font-bold text-sm text-brand-light">
                        {formData.occupation === 'farmer' && formData.isHADP 
                            ? 'FREE (HADP PROJECT)' 
                            : `₹${totalCost.toLocaleString('en-IN')} ESTIMATED TOTAL`}
                    </h5>
                </div>
                <div className="flex items-center gap-2 text-brand-light text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                    <CheckCircle2 size={16} /> Digital Review Required
                </div>
            </div>
        </div>
    </>
);
