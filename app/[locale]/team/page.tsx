import { PageHeader, TeamCard } from "@/components";
import { useTranslations } from "next-intl";
import { PI_DATA, TEAM_MEMBERS } from "@/constants";

export default function TeamPage() {
    const t = useTranslations('nav');

    return (
        <main className="min-h-screen bg-slate-50/30">
            <PageHeader
                title={t('team')}
                description="Meet the dedicated experts and researchers behind the Faculty of Forestry and the Centre of Excellence on Herbal Technology."
                bgColor="bg-slate-900"
                accentColor="from-brand to-brand-dark"
            />

            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    
                    {/* Principal Investigator Section */}
                    <div className="mb-24">
                        <div className="mb-10 flex items-center gap-4">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Lead Leadership</h2>
                            <div className="h-px flex-grow bg-slate-100" />
                        </div>
                        <TeamCard member={PI_DATA} isPI />
                    </div>

                    {/* Team Directory Section */}
                    <div>
                        <div className="mb-12 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                                Scientific Expert Directory
                            </h2>
                            <p className="text-slate-500 text-lg">
                                Our multidisciplinary team is specialized in phytochemical evaluation, molecular authentication, and Himalayan biodiversity conservation.
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-6">
                            {TEAM_MEMBERS.map((member) => (
                                <TeamCard key={member.id} member={member} />
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
