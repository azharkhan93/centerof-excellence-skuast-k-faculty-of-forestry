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
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.city)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            />
            {/* Overlay for inactive state */}
            <div className="absolute inset-0 bg-slate-200/20 pointer-events-none" />
        </div>
    );
};
