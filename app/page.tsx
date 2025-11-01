"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import NeuralBackground3D from "@/components/NeuralBackground3D";
import Sidebar from "@/components/Sidebar";
import RightColumn from "@/components/RightColumn";
import ScrollProgress from "@/components/ScrollProgress";
import { motion, AnimatePresence } from "framer-motion";

function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07060d]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2 } }}
        >
          {/* halo violet */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-[#b266ff]/15 blur-[120px]"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* cercle animé */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          >
            <motion.div className="w-24 h-24 border-4 border-[#b266ff] rounded-full opacity-80 blur-[1px]" />
            <motion.span
              className="absolute text-[#b266ff] font-semibold text-xl"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Loading...
            </motion.span>
          </motion.div>

          {/* texte bas */}
          <motion.p
            className="absolute bottom-12 text-[#b266ff]/70 text-sm tracking-widest font-mono"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            CodeZenith Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <main className="relative min-h-screen overflow-x-hidden text-neutral-100">
        <NeuralBackground3D />
        <Navbar />
        <ScrollProgress />
        <Sidebar />
        <RightColumn />

        <section id="home" className="relative z-10">
          <HeroSection />
        </section>

        <section id="about" className="relative z-10">
          <AboutSection />
        </section>

        <section id="experience" className="relative z-10">
          <ExperienceSection />
        </section>

        <section id="projects" className="relative z-10">
          <ProjectsSection />
        </section>

        <section id="contact" className="relative z-10">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
