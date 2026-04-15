"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, CheckCircle2 } from "lucide-react";
import { PRICING_DATABASE, TEST_CATEGORIES, OCCUPATION_OPTIONS } from "@/constants";
import { BookingFormData } from "@/hooks/useTestBooking";
import { Dropdown } from "../../Dropdown";

interface TestMatrixProps {
    formData: any;
    toggleTest: (testId: string) => void;
    updateField: (field: keyof BookingFormData, value: any) => void;
}

export const TestMatrix: React.FC<TestMatrixProps> = ({ formData, toggleTest, updateField }) => {
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
