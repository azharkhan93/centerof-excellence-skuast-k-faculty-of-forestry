"use client";

import React from "react";
import { FormInput } from "@/components";
import { Dropdown } from "../../Dropdown";
import { SPECIMEN_TYPE_OPTIONS, PURPOSE_OPTIONS } from "@/constants";
import { BookingFormData } from "@/hooks/useTestBooking";

interface SampleProfileProps {
    formData: any;
    updateField: (field: keyof BookingFormData, value: any) => void;
}

export const SampleProfile: React.FC<SampleProfileProps> = ({ formData, updateField }) => (
    <div>
        <div className="mb-10">
            <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Specimen Profile</h3>
            <p className="text-slate-500 text-sm font-medium">Technical details regarding the provided samples.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-6">
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
                    containerClassName="md:col-span-3"
                    value={formData.purposeOther} 
                    onChange={(e) => updateField('purposeOther', e.target.value)} 
                    placeholder="Describe specific analysis goals" 
                />
            )}
        </div>
    </div>
);
