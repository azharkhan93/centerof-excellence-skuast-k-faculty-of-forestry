import { AboutMission, AboutValues, AboutJourney, PageHeader } from "@/components";
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations('nav');
    return (
        <div className=" min-h-screen">
            <PageHeader
                title={t('about')}
                description="We are a team of dedicated professionals committed to delivering innovative technology solutions that empower businesses worldwide."
                bgColor="bg-slate-950"
            />

            <AboutMission />
            <AboutValues />
            <AboutJourney />
        </div>
    );
}
