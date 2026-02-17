import { Services, PageHeader } from "@/components";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
    const t = useTranslations('nav');
    return (
        <div className="bg-slate-950 min-h-screen">
            <PageHeader
                title={t('services')}
                description="Explore our comprehensive range of technology services, from custom software development to advanced cybersecurity solutions."
                bgColor="bg-slate-950"
                accentColor="from-emerald-500 to-teal-600"
            />
            <div className="py-12">
                <Services />
            </div>
        </div>
    );
}



