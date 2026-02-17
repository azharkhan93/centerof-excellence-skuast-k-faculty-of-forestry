"use client";

import React, { useState } from "react";
import { FormInput } from "@/components/FormInput";
import { Button } from "@/components/Button";
import { Send } from "lucide-react";

interface DemoRequestFormProps {
    onSuccess?: () => void;
}

export const DemoRequestForm: React.FC<DemoRequestFormProps> = ({ onSuccess }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSubmitting(false);
            setSubmitStatus("success");

            if (onSuccess) {
                setTimeout(() => {
                    onSuccess();
                    // Reset form after closing
                    setSubmitStatus("idle");
                    setFormData({ name: "", email: "", company: "", message: "" });
                }, 2000);
            }
        } catch (error) {
            setIsSubmitting(false);
            setSubmitStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                />
                <FormInput
                    label="Work Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@company.com"
                />
            </div>
            <FormInput
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                placeholder="Ishraff Tech"
            />
            <FormInput
                label="Anything else?"
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                placeholder="Tell us about your requirements..."
            />

            {submitStatus === "success" && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
                    Thank you! We'll be in touch shortly to schedule your demo.
                </div>
            )}

            {submitStatus === "error" && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    Something went wrong. Please try again later.
                </div>
            )}

            <Button
                variant="primary"
                className="w-full py-6 flex items-center justify-center gap-2"
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Scheduling..." : "Schedule Demo"}
            </Button>
        </form>
    );
};
