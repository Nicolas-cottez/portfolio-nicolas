"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { LOCALE_ORDER, type Locale } from "@/lib/site";

export default function LanguageToggle() {
    const { language } = useLanguage();
    const router = useRouter();

    // Preserve the current in-page anchor (#projects, #contact, …) across the language switch.
    const goTo = (lang: Locale) => (e: React.MouseEvent) => {
        e.preventDefault();
        const hash = typeof window !== "undefined" ? window.location.hash : "";
        router.push(`/${lang}${hash}`);
    };

    return (
        <div
            role="group"
            aria-label="Language"
            className="flex items-center gap-1 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-1"
        >
            {LOCALE_ORDER.map((lang) => {
                const active = language === lang;
                return (
                    <motion.a
                        key={lang}
                        href={`/${lang}`}
                        onClick={goTo(lang)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-current={active ? "page" : undefined}
                        className={`px-3 py-1.5 rounded-lg text-sm font-bold font-mono tracking-wide transition-colors duration-300 ${active
                                ? "bg-[var(--accent)]/25 text-[var(--accent-light)]"
                                : "text-[#888] hover:text-white"
                            }`}
                    >
                        {lang.toUpperCase()}
                    </motion.a>
                );
            })}
        </div>
    );
}
