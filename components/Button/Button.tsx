"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className = "",
    variant = "primary",
    size = "md",
    isLoading = false,
    disabled,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
        primary: "bg-brand text-white hover:bg-brand-dark shadow-md btn-primary-advanced",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
        danger: "bg-red-600 text-white hover:bg-red-700 shadow-md",
    };

    const sizes = {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-8 text-base",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button
            className={combinedClassName}
            disabled={disabled || isLoading}
            {...props}
        >
            {variant === "primary" && (
                <span className="btn-shimmer-container">
                    <span className="btn-primary-advanced-shimmer" />
                </span>
            )}
            {isLoading ? (
                <span className="mr-2 h-4 w-4 animate-spin rounded-full  border-2 border-current border-t-transparent" />
            ) : null}
            <span className="relative z-10">{children}</span>
        </button>
    );
};
