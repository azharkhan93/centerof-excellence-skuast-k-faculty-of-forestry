"use client";

import React from "react";
import { IshraffFeatures, IshraffIntelligence, IshraffOversight, IshraffWorkflow, IshraffModules } from "@/components/IshraffProduct";
import { PageHeader } from "@/components";

export default function IshraffProductPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Ishraff"
                description="Streamline your workflow, manage tasks efficiently, and collaborate with your team in one powerful platform."
            />

            <IshraffIntelligence />
            <IshraffOversight />
            <IshraffWorkflow />
            <IshraffModules />
            <IshraffFeatures />

        </main>
    );
}
