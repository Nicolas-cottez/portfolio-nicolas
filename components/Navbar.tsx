"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import useScrollSpy from "@/hooks/useScrollSpy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const sections = ["home", "about", "experience", "projects", "contact"];
  const activeId = useScrollSpy(sections);

  // Gestion du scroll pour flouter la barre
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Application du thème clair/sombre
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-md bg-[var(--bg)]/90 border-b border-cyan-400/10 shadow-[0_0_20px_rgba(0,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1600px] mx-auto flex items-center justify-between py-4 px-4 sm:px-6 md:px-10">
        {/* Logo */}
        <span
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-[var(--accent)] tracking-wider hover:opacity-80 transition cursor-pointer"
        >
          CV
        </span>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-10 items-center text-base uppercase tracking-widest text-neutral-300">
          {sections.map((id) => {
            const isActive = activeId === id;
            return (
              <motion.span
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative group cursor-pointer ${
                  isActive ? "text-[var(--accent)] font-semibold" : "hover:text-[var(--accent)]/80"
                } transition-colors`}
                whileHover={{ y: -2 }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--accent)] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.span>
            );
          })}

          {/* Bouton de changement de thème */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="ml-4 p-2 rounded-md border border-[var(--accent)]/40 text-[var(--accent)] hover:bg-[var(--accent)]/10 transition"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md border border-[var(--accent)]/40 text-[var(--accent)] hover:bg-[var(--accent)]/10 z-[60]"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-[64px] z-50 bg-[var(--bg)]/95 backdrop-blur-lg border-t border-[var(--accent)]/10 px-6 py-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-5 text-base uppercase tracking-widest text-neutral-300">
              {sections.map((id) => {
                const isActive = activeId === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-left py-3 px-4 rounded-md border ${
                      isActive
                        ? "border-[var(--accent)]/60 text-[var(--accent)] bg-[var(--accent)]/10"
                        : "border-[var(--accent)]/30 hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
                    } transition-all duration-300`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                );
              })}

              {/* Bouton thème sur mobile */}
              <button
                onClick={toggleTheme}
                className="mt-6 flex items-center justify-center gap-2 py-2 border border-[var(--accent)]/40 rounded-md text-[var(--accent)] hover:bg-[var(--accent)]/10 transition"
              >
                {theme === "light" ? (
                  <>
                    <Moon size={18} /> Dark Mode
                  </>
                ) : (
                  <>
                    <Sun size={18} /> Light Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
