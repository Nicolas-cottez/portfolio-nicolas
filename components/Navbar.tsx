"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, FolderOpen, Mail, Download, Menu, X } from "lucide-react";
import useScrollSpy from "@/hooks/useScrollSpy";

export default function Navbar() {
  const sections = ["home", "about", "experience", "projects", "contact"];
  const activeId = useScrollSpy(sections);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#0A0612]/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(178,102,255,0.15)]" 
            : "bg-gradient-to-b from-[#0A0612]/80 to-transparent backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between relative">
          {/* Logo + Nom */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 z-10"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] 
                           rounded-lg blur-md group-hover:blur-lg transition-all opacity-50"></div>
              <div className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] 
                           flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">N</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg tracking-tight">
                Nicolas <span className="text-[var(--accent-light)]">Cottez Abrate</span>
              </div>
              <div className="text-[#888] text-[10px] font-mono tracking-wider">AI Engineer</div>
            </div>
          </motion.div>

          {/* Navigation Desktop - Design Sobre et Neutre */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map(({ id, label, icon: Icon }) => {
              const active = activeId === id;
              return (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2
                    ${
                      active
                        ? "bg-[var(--accent)]/10 text-[var(--accent)] font-medium"
                        : "text-[#999] hover:text-white hover:bg-white/5"
                    }`}
                >
                  <Icon size={19} strokeWidth={active ? 2 : 1.5} />
                  <span className="text-[15px]">{label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Resume Button Desktop */}
          <motion.a
            href="/CV_nicolascottezabrate.pdf"
            download
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(178,102,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl 
                     bg-gradient-to-r from-[var(--accent)]/25 to-[var(--accent-dark)]/20
                     border border-[var(--accent)]/50 text-white font-medium text-sm
                     hover:from-[var(--accent)]/35 hover:to-[var(--accent-dark)]/30
                     shadow-[0_0_15px_rgba(178,102,255,0.15)]
                     transition-all duration-300 group"
          >
            <Download size={16} className="group-hover:rotate-12 transition-transform" />
            <span>Resume</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[var(--accent)]/20 border border-[var(--accent)]/40
                     text-white hover:bg-[var(--accent)]/30 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-[#0A0612] border-l border-[var(--accent)]/30 
                       z-50 lg:hidden overflow-y-auto shadow-[-10px_0_50px_rgba(178,102,255,0.2)]"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-white font-bold text-lg">
                    Menu
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-[var(--accent)]/20 text-white"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="space-y-2">
                  {navItems.map(({ id, label, icon: Icon }, index) => {
                    const active = activeId === id;
                    return (
                      <motion.button
                        key={id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => {
                          scrollToSection(id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl 
                          transition-all duration-300 font-medium
                          ${
                            active
                              ? "bg-gradient-to-r from-[var(--accent)]/30 to-[var(--accent-dark)]/20 text-white border border-[var(--accent)]/40"
                              : "text-[#aaa] hover:text-white hover:bg-[var(--accent)]/10 border border-transparent"
                          }`}
                      >
                        <Icon size={20} strokeWidth={active ? 2.5 : 1.8} />
                        <span>{label}</span>
                      </motion.button>
                    );
                  })}
                </div>

                <motion.a
                  href="/CV_nicolascottezabrate.pdf"
                  download
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-4 rounded-xl 
                           bg-gradient-to-r from-[var(--accent)]/25 to-[var(--accent-dark)]/20
                           border border-[var(--accent)]/50 text-white font-medium
                           hover:from-[var(--accent)]/35 hover:to-[var(--accent-dark)]/30
                           transition-all duration-300"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
