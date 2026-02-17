"use client";

import React from "react";

interface FormInputProps {
    label?: string;
    type?: "text" | "email" | "tel" | "textarea" | "select";
    name?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    required?: boolean;
    placeholder?: string;
    className?: string; // Additional classes for the input itself
    containerClassName?: string; // Container classes (like grid spans)
    variant?: "dark" | "light";
    rows?: number; // for textarea
    options?: { label: string; value: string }[]; // for select
}

export const FormInput: React.FC<FormInputProps> = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    required = false,
    placeholder,
    className = "",
    containerClassName = "",
    variant = "dark",
    rows = 4,
    options = []
}) => {
    const isDark = variant === "dark";

    // Label styles
    const labelBase = "block text-sm font-medium mb-2";
    const labelTheme = isDark ? "text-slate-300" : "text-slate-700";

    // Input base styles
    const inputBase = "w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

    // Theme specific styles
    const darkInput = "bg-slate-800/50 border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-2.5 border";
    const lightInput = "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 border";

    const inputTheme = isDark ? darkInput : lightInput;
    const finalInputClasses = `${inputBase} ${inputTheme} ${className}`;

    const renderInput = () => {
        if (type === "textarea") {
            return (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange as any}
                    required={required}
                    rows={rows}
                    placeholder={placeholder}
                    className={`${finalInputClasses} resize-none`}
                />
            );
        }

        if (type === "select") {
            return (
                <select
                    name={name}
                    value={value}
                    onChange={onChange as any}
                    required={required}
                    className={finalInputClasses}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value} className={isDark ? "bg-slate-900" : "bg-white"}>
                            {option.label}
                        </option>
                    ))}
                </select>
            );
        }

        return (
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange as any}
                required={required}
                placeholder={placeholder}
                className={finalInputClasses}
            />
        );
    };

    return (
        <div className={containerClassName}>
            {label && (
                <label className={`${labelBase} ${labelTheme}`}>
                    {label}
                </label>
            )}
            {renderInput()}
        </div>
    );
};
