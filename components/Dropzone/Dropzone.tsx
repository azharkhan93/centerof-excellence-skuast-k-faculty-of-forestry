"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, FileText, X, CheckCircle2 } from "lucide-react";

interface DropzoneProps {
    onFileSelect: (file: File | null) => void;
    label?: string;
    accept?: string;
    maxSize?: number; 
    className?: string;
}

export const Dropzone: React.FC<DropzoneProps> = ({
    onFileSelect,
    label = "Upload Verification Document",
    accept = ".pdf,.jpg,.jpeg,.png",
    maxSize = 5,
    className = ""
}) => {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = (selectedFile: File) => {
        if (selectedFile.size > maxSize * 1024 * 1024) {
            alert(`File size exceeds ${maxSize}MB limit.`);
            return;
        }
        setFile(selectedFile);
        onFileSelect(selectedFile);
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const removeFile = (e: React.MouseEvent) => {
        e.stopPropagation();
        setFile(null);
        onFileSelect(null);
        if (inputRef.current) inputRef.current.value = "";
    };

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-3">
                    {label}
                </label>
            )}

            <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={onDrop}
                onClick={() => inputRef.current?.click()}
                className={`relative group cursor-pointer border-2 border-dashed rounded-2xl transition-all duration-300 min-h-[140px] flex flex-col items-center justify-center p-6 ${
                    isDragging 
                    ? "border-brand bg-brand/5 scale-[1.01]" 
                    : file 
                        ? "border-emerald-500/30 bg-emerald-50/30" 
                        : "border-slate-200 bg-slate-50 hover:border-brand/30 hover:bg-white"
                }`}
            >
                <input
                    type="file"
                    ref={inputRef}
                    className="hidden"
                    accept={accept}
                    onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                />

                <AnimatePresence mode="wait">
                    {!file ? (
                        <motion.div
                            key="prompt"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-center"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                <UploadCloud className="text-brand" size={24} />
                            </div>
                            <p className="text-sm font-bold text-slate-700 mb-1">Click to upload or drag and drop</p>
                            <p className="text-[10px] font-medium text-slate-400">PDF, JPG or PNG (max. {maxSize}MB)</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="file"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full flex items-center gap-4 bg-white p-3 rounded-xl border border-emerald-500/20 shadow-sm"
                        >
                            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
                                <FileText size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-slate-900 truncate">{file.name}</p>
                                <p className="text-[10px] font-medium text-slate-400">
                                    {(file.size / 1024).toFixed(1)} KB • <span className="text-emerald-500">Ready for review</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-emerald-500" size={18} />
                                <button
                                    onClick={removeFile}
                                    className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-rose-500 transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
