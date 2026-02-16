"use client";

import React, { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        if (locale === newLocale) return;

        startTransition(() => {
          
            const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
            router.push(newPathname);
        });
    };

    return (
        <div className="relative">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500 transition-colors cursor-pointer"
            >
                <Languages className="w-4 h-4 text-blue-400" />
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => switchLocale('en')}
                        disabled={isPending}
                        className={`text-sm font-medium transition-colors ${locale === 'en'
                                ? 'text-blue-400'
                                : 'text-gray-400 hover:text-white'
                            }`}
                        aria-label="Switch to English"
                    >
                        EN
                    </button>
                    <span className="text-gray-600">|</span>
                    <button
                        onClick={() => switchLocale('ar')}
                        disabled={isPending}
                        className={`text-sm font-medium transition-colors ${locale === 'ar'
                                ? 'text-blue-400'
                                : 'text-gray-400 hover:text-white'
                            }`}
                        aria-label="Switch to Arabic"
                    >
                        AR
                    </button>
                </div>
            </motion.div>
        </div>
    );
};
