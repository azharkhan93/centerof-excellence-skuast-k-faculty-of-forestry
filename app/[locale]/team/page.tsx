import { PageHeader, TeamCard } from "@/components";
import { FromTheDesk } from "@/components/Team/FromTheDesk";
import { useTranslations } from "next-intl";
import { PI_DATA, TEAM_MEMBERS, INSTITUTIONAL_LEADERSHIP } from "@/constants";

export default function TeamPage() {
    const t = useTranslations('nav');

    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                title={t('team')}
                description="The multidisciplinary experts and researchers advancing the science of Himalayan medicinal biodiversity at SKUAST-Kashmir."
                bgColor="bg-slate-900"
                accentColor="from-brand to-brand-dark"
            />

            {/* Institutional Patronage & Leadership */}
            <section className="py-16 bg-slate-50/30">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="mb-12 flex flex-col items-center text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-3">
                            Institutional Patronage
                        </span>
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">University Leadership</h2>
                        <div className="h-1 w-12 bg-brand mt-4 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {INSTITUTIONAL_LEADERSHIP.map((leader) => (
                            <div key={leader.id} className="bg-white p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow group">
                                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-50 mb-4 border-2 border-slate-50 group-hover:border-brand/20 transition-colors">
                                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h3 className="text-sm font-bold text-slate-900 mb-1">{leader.name}</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand mb-1">{leader.role}</p>
                                <span className="text-[9px] font-medium text-slate-400 uppercase tracking-tighter">{leader.organization}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Message - From the Desk */}
            <FromTheDesk pi={PI_DATA} />

            <section className="py-24 border-t border-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <div className="flex justify-center mb-4">
                            <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full">
                                Institutional Directory
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Scientific <span className="text-brand">Expert</span> Roster
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Our team unites specialists in phytochemistry, molecular biology, and silviculture to provide industry-leading analytical services and research.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-8">
                        {TEAM_MEMBERS.map((member) => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}
