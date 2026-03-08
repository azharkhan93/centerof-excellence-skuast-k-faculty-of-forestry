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
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7606824.173827398!2d50.8434710151109!3d21.418644984994188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd69f66a9d59bbf%3A0x3a064c7665b1a817!2sOman!5e0!3m2!1sen!2sin!4v1772891660811!5m2!1sen!2sin${encodeURIComponent(CONTACT_INFO.city)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            />
          
            <div className="absolute inset-0 bg-slate-200/20 pointer-events-none" />
        </div>
    );
};
