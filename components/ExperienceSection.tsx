"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section
      id="experience"
      className="relative flex flex-col justify-center items-center text-center text-white 
                 px-5 sm:px-10 md:px-16 max-w-7xl mx-auto min-h-[90vh] overflow-hidden mb-20 sm:mb-24"
    >
      {/* --- Title with cinematic entrance --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotateX: 20 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 text-center sm:text-left"
      >
        <Briefcase className="text-cyan-400 w-7 h-7 sm:w-8 sm:h-8 mb-1 sm:mb-0" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 tracking-tight">
          Professional Experience
        </h2>
      </motion.div>


      {/* --- Cards Layout --- */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        viewport={{ once: true }}
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: {
                opacity: 0,
                y: 120,
                x: i % 2 === 0 ? -100 : 100,
                rotate: i % 2 === 0 ? -4 : 4,
                scale: 0.9,
              },
              visible: {
                opacity: 1,
                y: 0,
                x: 0,
                rotate: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  duration: 0.8,
                },
              },
            }}
            whileHover={
              !isMobile
                ? {
                    scale: 1.05,
                    rotateY: 2,
                    boxShadow: "0 0 35px rgba(0,255,255,0.35)",
                    borderColor: "rgba(0,255,255,0.5)",
                  }
                : {}
            }
            className="p-6 rounded-2xl border border-cyan-400/15 bg-white/5 backdrop-blur-sm 
                       hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,255,255,0.1)]
                       transition-all duration-500 flex flex-col items-start text-left
                       w-full max-w-[420px] mx-auto"
          >
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-300 mb-1"
            >
              {exp.role}
            </motion.h3>

            <p className="text-xs sm:text-sm text-neutral-400 mb-2">
              {exp.company} — {exp.location}
            </p>
            <p className="text-[11px] sm:text-xs text-neutral-500 mb-3">
              {exp.period}
            </p>

            <ul className="list-disc list-inside text-neutral-300 text-xs sm:text-sm md:text-base space-y-1 pl-2">
              {exp.description.map((line, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {line}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
