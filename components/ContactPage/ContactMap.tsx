"use client";

import { CONTACT_INFO } from "@/constants";

export const ContactMap = () => {
    return (
        <div className="w-full h-[400px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative group shadow-sm">
            <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d105740.3234629638!2d74.80279039999999!3d34.085273599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38e1798b4b7d8fb3%3A0x4b9c02f540bb3c39!2sFaculty%20of%20forestry%20SKUAST-K%2C%207QFM%2BJVH%2C%20Benhama%2C%20Jammu%20and%20Kashmir%20191201!3m2!1d34.2740643!2d74.7847452!5e0!3m2!1sen!2sin!4v1776187833918!5m2!1sen!2sin"
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            />
          
            <div className="absolute inset-0 bg-slate-200/20 pointer-events-none" />
        </div>
    );
};
