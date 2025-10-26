"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FolderOpen, Mail, ChevronDown } from "lucide-react";
import useScrollSpy from "@/hooks/useScrollSpy";

export default function HeroSection() {
  const sections = ["home", "about", "experience", "projects", "contact"];
  const activeId = useScrollSpy(sections);
  const showScroll = activeId === "home";

  return (
    <section className="relative flex flex-col justify-center min-h-screen px-6 sm:px-16 md:px-24 text-left font-[Inter] overflow-hidden mb-8 sm:mb-12">
      {/* Animation container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 15, staggerChildren: 0.2 },
          },
        }}
        className="mx-auto sm:ml-12 md:ml-20 max-w-3xl"
      >
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-cyan-400 text-xs sm:text-sm font-mono tracking-wider mb-3 text-center sm:text-left"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[1.1] text-center sm:text-left"
        >
          <span className="text-white">Nicolas</span>
          <span className="text-cyan-400">.</span>
        </motion.h1>

        <motion.h2
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-lg sm:text-2xl md:text-3xl font-semibold text-neutral-400 mt-4 text-center sm:text-left"
        >
          A 4th-year Data & AI Engineering student.
        </motion.h2>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: "spring", damping: 14 }}
          className="text-neutral-400 text-sm sm:text-lg max-w-2xl mt-6 leading-relaxed text-center sm:text-left"
        >
          I’m searching for a <span className="text-cyan-400">four-month internship</span> starting in{" "}
          <span className="text-cyan-400">April 2026</span>. I’m looking forward to meet and discuss my{" "}
          <span className="text-cyan-400">motivation</span> with you.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { type: "spring", stiffness: 80, delayChildren: 0.2, staggerChildren: 0.15 },
            },
          }}
          className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 sm:gap-6 mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="group flex items-center gap-2 px-6 py-2 sm:px-7 sm:py-3 rounded-md border border-cyan-400/40 text-cyan-300 
            hover:bg-cyan-900/30 hover:border-cyan-400 transition-all duration-300 text-sm sm:text-base shadow-[0_0_10px_rgba(0,255,255,0.15)] hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]"
          >
            <FolderOpen className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="group flex items-center gap-2 px-6 py-2 sm:px-7 sm:py-3 rounded-md border border-cyan-400/40 text-cyan-300 
            hover:bg-cyan-900/30 hover:border-cyan-400 transition-all duration-300 text-sm sm:text-base shadow-[0_0_10px_rgba(0,255,255,0.15)] hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            Contact
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator visible seulement quand 'home' est actif */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            key="scroll-indicator"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center text-cyan-300/70"
          >
            <span className="block text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400 mb-1 text-center">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-cyan-400" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
