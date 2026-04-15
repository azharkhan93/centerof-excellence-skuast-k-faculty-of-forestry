import React from "react";
import { PageHeader, TrainingWorkshops, Internships } from "@/components";

export default function TrainingInternshipsPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Practical Trainings & Internships"
                description="Developing human resource through specialized technical programs and collaborative research engagements in the herbal technology sector."
                bgColor="bg-slate-900"
                accentColor="from-brand to-brand-dark"
            />
            
            <TrainingWorkshops />
            
            <Internships />

            {/* CTA Section */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Certification & Professional Recognition</h3>
                    <p className="max-w-3xl mx-auto text-slate-600 font-medium mb-10 leading-relaxed">
                        Participants in our training and internship programs receive an official institutional certificate upon successful completion. This certification serves to enhance professional credentials and validate technical expertise in instrumentation and plant-based technologies.
                    </p>
                    <div className="inline-flex items-center gap-6 px-8 py-4 bg-white border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-400">
                        Institutional Recognition <div className="w-1.5 h-1.5 rounded-full bg-brand" /> Standardized Evaluation
                    </div>
                </div>
            </section>
        </main>
    );
}
