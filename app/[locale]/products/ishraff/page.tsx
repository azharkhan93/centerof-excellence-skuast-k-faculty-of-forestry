"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/PageHeader";
import { ProductHighlight } from "@/components/ProductHighlight";
import { Process } from "@/components/Process";

export default function IshraffProductPage() {
    return (
        <main className="min-h-screen bg-slate-950">
            <PageHeader
                title="Ishraff"
                description="Streamline your workflow, manage tasks efficiently, and collaborate with your team in one powerful platform."
            />

           
        </main>
    );
}
