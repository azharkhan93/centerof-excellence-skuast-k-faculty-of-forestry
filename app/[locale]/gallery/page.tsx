import { PageHeader, GalleryMasonry } from "@/components";
import { useTranslations } from "next-intl";

export default function GalleryPage() {
    const t = useTranslations('nav');

    return (
        <main className="min-h-screen">
            <PageHeader
                title={t('gallery')}
                description="A visual journey through our laboratories, botanical archives, and the sustainable forestry projects at SKUAST-K Kashmir."
                bgColor="bg-slate-900"
                accentColor="from-brand to-brand-dark"
            />

            <section className="py-24 bg-white relative">
                {/* Decorative Pattern Background */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#0a4d4a 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Institutional Archives
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            A curated selection of the Centre's analytical milestones, botanical germplasm collections, and research documentation.
                        </p>
                    </div>
                    
                    {/* Masonry Grid with Filtering */}
                    <GalleryMasonry />
                </div>
            </section>
        </main>
    );
}
