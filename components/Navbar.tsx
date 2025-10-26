"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import useScrollSpy from "@/hooks/useScrollSpy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sections = ["home", "about", "experience", "projects", "contact"];
  const activeId = useScrollSpy(sections);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          ? "backdrop-blur-md bg-[#070b12]/80 border-b border-cyan-400/10 shadow-[0_0_20px_rgba(0,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1600px] mx-auto flex items-center justify-between py-4 px-4 sm:px-6 md:px-10">
        <span
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-cyan-300 tracking-wider hover:text-cyan-100 transition cursor-pointer"
        >
          CV
        </span>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-10 text-base uppercase tracking-widest text-neutral-300">
          {sections.map((id) => {
            const isActive = activeId === id;
            return (
              <motion.span
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative group cursor-pointer ${
                  isActive ? "text-cyan-400 font-semibold" : "hover:text-cyan-200"
                } transition-colors`}
                whileHover={{ y: -2 }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.span>
            );
          })}
        </div>

        {/* Mobile button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md border border-cyan-400/30 text-cyan-300 hover:bg-cyan-900/20 z-[60]"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer with proper overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-[64px] z-50 bg-[#070b12]/95 backdrop-blur-lg border-t border-cyan-400/10 px-6 py-8 overflow-y-auto"
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
                        ? "border-cyan-400/60 text-cyan-400 bg-cyan-400/10"
                        : "border-cyan-400/20 hover:border-cyan-400/40 hover:text-cyan-200"
                    } transition-all duration-300`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
