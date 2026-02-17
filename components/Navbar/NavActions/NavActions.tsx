"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../../Button";
import { LanguageSwitcher } from "../../LanguageSwitcher";

interface NavActionsProps {
    locale: string;
    t: (key: string) => string;
}

export const NavActions: React.FC<NavActionsProps> = ({ locale, t }) => {
    return (
        <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link href={`/${locale}/contact`}>
                <Button variant="primary" size="md">
                    {t('contact')}
                </Button>
            </Link>
        </div>
    );
};
