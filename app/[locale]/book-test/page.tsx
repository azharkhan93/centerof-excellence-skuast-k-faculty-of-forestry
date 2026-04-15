import React from "react";
import { PageHeader, BookingForm } from "@/components";
import { Mail, Phone, Info } from "lucide-react";

export default function BookTestPage() {
    return (
        <main className="min-h-screen bg-slate-50/50">
            <PageHeader
                title="Application for Testing"
                description="Digital portal for institutional analytical services, phytochemical evaluation, and laboratory test bookings at CoEHT."
                bgColor="bg-slate-900"
                accentColor="from-brand to-brand-dark"
            />
            
            <div className="py-20 px-6">
                <BookingForm />
            </div>

        </main>
    );
}
