import { About, AboutTabsSection, WhyChoose, AboutRD, AboutJourney, PageHeader } from "@/components";
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations('nav');
    return (
        <div className=" min-h-screen">
            <PageHeader
                title={t('about')}
                description="The Centre of Excellence on Herbal Technology is dedicated to bridging Himalayan biodiversity with world-class scientific evaluation."
                bgColor="bg-slate-900"
                accentColor="from-brand to-brand-dark"
            />

            <About />
            <AboutTabsSection />
            {/* <WhyChoose /> */}
            
            <AboutJourney />
        </div>
    );
}
