"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FolderOpen, Mail, ChevronDown } from "lucide-react";
import useScrollSpy from "@/hooks/useScrollSpy";

export default function HeroSection() {
  const sections = ["home", "about", "experience", "projects", "contact"];
  const activeId = useScrollSpy(sections);
  const showScroll = activeId === "home";

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-center md:justify-between 
                 min-h-[100svh] md:min-h-screen
                 px-6 sm:px-16 md:px-24 pt-20 pb-24 md:pt-20 md:pb-8 
                 text-left font-[Inter] overflow-hidden text-white bg-transparent"
    >
      {/* ===== Texte décalé droite ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-2xl z-10 md:ml-[calc(5%+20px)]"
      >
        <p className="text-[#b266ff] text-xs sm:text-sm font-mono tracking-wider mb-3">
          Hello, I'm
        </p>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-[1.1] text-white mb-4">
          Nicolas<span className="text-[#b266ff]">.</span>
        </h1>

        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-[#c8a3ff]/90 mt-2">
          A 4th-year Data & AI Engineering student.
        </h2>

        <p className="text-[#ddd]/70 text-sm sm:text-lg max-w-xl mt-6 leading-relaxed">
          I’m searching for a{" "}
          <span className="text-[#b266ff]">four-month internship</span> starting in{" "}
          <span className="text-[#b266ff]">April 2026</span>. I’m looking forward to meet and discuss my{" "}
          <span className="text-[#b266ff]">motivation</span> with you.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[#b266ff80]
                       text-[#b266ff] hover:bg-[#b266ff20] hover:shadow-[0_0_15px_#b266ff70] 
                       transition-all duration-300"
          >
            <FolderOpen className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[#b266ff80]
                       text-[#b266ff] hover:bg-[#b266ff20] hover:shadow-[0_0_15px_#b266ff70] 
                       transition-all duration-300"
          >
            <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            Contact
          </motion.a>
        </div>
      </motion.div>



      {/* ===== Indicateur scroll ===== */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            key="scroll-indicator"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-4 md:bottom-6 left-0 right-0 flex flex-col items-center text-[#b266ff]/70 pointer-events-none"
          >
            <span className="block text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#b266ff]/60 mb-1 text-center">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-[#b266ff]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
