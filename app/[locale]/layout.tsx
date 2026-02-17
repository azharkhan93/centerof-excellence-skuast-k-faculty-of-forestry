import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { TranslatedConstantsProvider } from '@/hooks/useTranslatedConstants';
import { Navbar, Footer, ContactWidget } from '@/components';

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Validate locale
    if (!locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <TranslatedConstantsProvider>
                <div className="relative min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <ContactWidget />
                    <Footer />
                </div>
            </TranslatedConstantsProvider>
        </NextIntlClientProvider>
    );

}
