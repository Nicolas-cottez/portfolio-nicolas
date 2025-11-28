"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center w-10 h-10 rounded-xl 
                 bg-[var(--accent)]/10 border border-[var(--accent)]/30 
                 text-[var(--accent)] hover:bg-[var(--accent)]/20 
                 transition-all duration-300 group overflow-hidden"
            aria-label="Toggle Language"
        >
            <motion.span
                key={language}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="font-bold text-sm font-mono"
            >
                {language.toUpperCase()}
            </motion.span>
        </motion.button>
    );
}
