"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Code2, User } from "lucide-react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        return p + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0612fc] backdrop-blur-[3px]"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 1 } }}
        >
          {/* Titre */}
          <motion.h1
            className="text-[var(--accent)] text-3xl sm:text-4xl font-bold mb-2 drop-shadow-[0_0_10px_var(--accent-glow)] tracking-widest uppercase"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            MY PROFILE
          </motion.h1>

          <motion.p
            className="text-[var(--accent-light)]/80 mb-6 tracking-widest text-sm font-light"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading Portfolio...
          </motion.p>

          {/* Barre de progression avec effet glow */}
          <div className="relative w-60 sm:w-80 h-[6px] bg-[var(--bg-tertiary)]/50 rounded-full overflow-hidden mb-3 shadow-[0_0_10px_var(--accent-glow)]">
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[var(--accent-dark)] to-[var(--accent-light)] shadow-[0_0_15px_var(--accent-glow)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
          <p className="text-xs text-[var(--accent)]/70 mb-8">{progress}%</p>

          {/* Icônes animées depuis le haut */}
          <motion.div
            className="flex gap-6 text-[var(--accent)] mb-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 },
              },
            }}
          >
            {[Github, Code2, User].map((Icon, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { y: -40, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { type: "spring", stiffness: 80, damping: 12 },
                  },
                }}
              >
                <Icon className="w-5 h-5 opacity-70 hover:opacity-100 transition-transform hover:scale-110 drop-shadow-[0_0_8px_var(--accent-glow)]" />
              </motion.div>
            ))}
          </motion.div>

          {/* Signature */}
          <motion.p
            className="text-[var(--accent)]/70 text-xs tracking-widest font-mono drop-shadow-[0_0_8px_var(--accent-glow)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Designed by Nicolas
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
