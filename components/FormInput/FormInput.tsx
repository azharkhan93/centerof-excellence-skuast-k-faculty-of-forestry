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
    className?: string;
    containerClassName?: string; 
    variant?: "dark" | "light";
    rows?: number; 
    options?: { label: string; value: string }[]; 
    prefix?: string;
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
    options = [],
    prefix
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
        const inputProps = {
            name,
            value,
            onChange: onChange as any,
            required,
            placeholder,
            className: `${finalInputClasses} ${prefix ? (isDark ? 'pl-16' : 'pl-16') : ''} ${type === "textarea" ? 'resize-none' : ''}`,
            rows: type === "textarea" ? rows : undefined,
        };

        if (type === "textarea") {
            return <textarea {...inputProps} />;
        }

        if (type === "select") {
            return (
                <select {...inputProps} className={finalInputClasses}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value} className={isDark ? "bg-slate-900" : "bg-white"}>
                            {option.label}
                        </option>
                    ))}
                </select>
            );
        }

        return (
            <div className="relative group">
                {prefix && (
                    <div className={`absolute left-0 top-0 bottom-0 flex items-center px-4 font-black text-xs tracking-widest border-r transition-colors ${
                        isDark 
                        ? 'text-slate-500 bg-slate-800/80 border-slate-700' 
                        : 'text-brand bg-slate-100 border-slate-200'
                    } rounded-l-xl`}>
                        {prefix}
                    </div>
                )}
                <input type={type} {...inputProps} />
            </div>
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
