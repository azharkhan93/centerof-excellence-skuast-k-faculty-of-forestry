import { useState, useMemo } from 'react';
import { PRICING_DATABASE } from '@/constants';

export type UserCategory = 'entrepreneur' | 'scientist' | 'student' | 'farmer';

export interface BookingFormData {
    // Applicant Info
    applicantName: string;
    occupation: UserCategory | '';
    organization: string;
    address: string;
    contactNumber: string;
    email: string;

   
    isHADP: boolean;
    isStudentResearcher: boolean;
    registrationNumber: string;
    verificationFile: File | null;

   
    sampleType: string;
    sampleTypeOther: string;
    numberOfSamples: number;
    purpose: 'academic' | 'commercial' | 'other';
    purposeOther: string;

    // Selections
    selectedTests: string[];
    testOrganism: string;
    
    // Legal
    acknowledged: boolean;
}

export const useTestBooking = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState<BookingFormData>({
        applicantName: '',
        occupation: '',
        organization: '',
        address: '',
        contactNumber: '',
        email: '',
        isHADP: false,
        isStudentResearcher: false,
        registrationNumber: '',
        verificationFile: null,
        sampleType: '',
        sampleTypeOther: '',
        numberOfSamples: 1,
        purpose: 'academic',
        purposeOther: '',
        selectedTests: [],
        testOrganism: '',
        acknowledged: false
    });

    const updateField = (field: keyof BookingFormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleTest = (testId: string) => {
        setFormData(prev => {
            const isSelected = prev.selectedTests.includes(testId);
            return {
                ...prev,
                selectedTests: isSelected 
                    ? prev.selectedTests.filter(id => id !== testId)
                    : [...prev.selectedTests, testId]
            };
        });
    };

    const totalCost = useMemo(() => {
        if (!formData.occupation) return 0;
        
        // HADP Project Rule: Farmers are only free if registered
        if (formData.occupation === 'farmer' && formData.isHADP) return 0;

        return formData.selectedTests.reduce((acc, testId) => {
            const test = PRICING_DATABASE.find(t => t.id === testId);
            if (test) {
                // @ts-ignore
                const price = test.prices[formData.occupation] || 0;
                return acc + (price * (formData.numberOfSamples || 1));
            }
            return acc;
        }, 0);
    }, [formData.selectedTests, formData.occupation, formData.numberOfSamples, formData.isHADP]);

    const nextStep = () => setStep(s => Math.min(s + 1, 3));
    const prevStep = () => setStep(s => Math.max(s - 1, 0));

    return {
        step,
        setStep,
        formData,
        updateField,
        toggleTest,
        totalCost,
        nextStep,
        prevStep
    };
};
