"use client";

import React from "react";
import { FormInput } from "@/components";
import { BookingFormData } from "@/hooks/useTestBooking";
import { Dropzone } from "../../Dropzone/Dropzone";

interface ApplicantBioProps {
    formData: any;
    updateField: (field: keyof BookingFormData, value: any) => void;
}

export const ApplicantBio: React.FC<ApplicantBioProps> = ({ formData, updateField }) => (
    <div>
        <div className="mb-10">
            <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Applicant Bio</h3>
            <p className="text-slate-500 text-sm font-medium">Administrative details for analytical reporting.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-6">
            <FormInput 
                label="Full Name" 
                variant="light"
                value={formData.applicantName} 
                onChange={(e) => updateField('applicantName', e.target.value)} 
                placeholder="Enter your name" 
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
                containerClassName="md:col-span-3"
                value={formData.email} 
                onChange={(e) => updateField('email', e.target.value)} 
                placeholder="Result reports will be sent here" 
            />

            <FormInput 
                label="Corresponding Address" 
                variant="light"
                type="textarea"
                rows={2}
                containerClassName="md:col-span-3"
                value={formData.address} 
                onChange={(e) => updateField('address', e.target.value)} 
                placeholder="Full mailing address" 
            />

            {(formData.isHADP || formData.isStudentResearcher) && (
                <div className="md:col-span-3 space-y-6 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-4">
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
