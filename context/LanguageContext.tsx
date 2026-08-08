"use client";

import React, { createContext, useContext } from "react";
import type { Locale } from "@/lib/site";

interface LanguageContextType {
    language: Locale;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
    language,
    children,
}: {
    language: Locale;
    children: React.ReactNode;
}) {
    return (
        <LanguageContext.Provider value={{ language }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
