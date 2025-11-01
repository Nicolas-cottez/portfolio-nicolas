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

  const updatedExperiences = experiences.map((exp) =>
    exp.role === "Seasonal Worker"
      ? {
          ...exp,
          company: "La Poste — Summer 2024-2025",
          location: "",
          period: "",
          description: [
            "Organized, Sorted, Delivered, Mail.",
            "──────────────",
            "Public Finance Center — France, Summer 2023",
            "Reorganized and archived administrative records.",
            "Assisted internal teams and managed logistics operations.",
          ],
        }
      : exp
  );

  return (
    <section
      id="experience"
      className="relative flex flex-col justify-center items-center text-center 
                 px-5 sm:px-10 md:px-16 max-w-7xl mx-auto min-h-[90vh] overflow-hidden mb-20 sm:mb-24 
                 text-[var(--text)]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotateX: 20 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
      >
        <Briefcase className="text-[var(--accent)] w-8 h-8 sm:w-9 sm:h-9" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--accent)] tracking-tight">
          Professional Experience
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        initial="hidden"
        whileInView="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        viewport={{ once: true }}
      >
        {updatedExperiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 120, x: i % 2 === 0 ? -100 : 100 },
              visible: { opacity: 1, y: 0, x: 0, transition: { type: "spring", stiffness: 100 } },
            }}
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            className="p-6 rounded-2xl border border-[var(--accent)]/25 bg-[var(--bg)]/60 backdrop-blur-md 
                       hover:border-[var(--accent)]/60 hover:shadow-[0_0_30px_var(--accent)]/25
                       transition-all duration-500 flex flex-col items-start text-left w-full max-w-[420px] mx-auto"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--accent)] mb-1">
              {exp.role}
            </h3>

            <p className="text-xs sm:text-sm text-[var(--text)]/70 mb-2">
              {exp.company} {exp.location && `— ${exp.location}`}
            </p>
            {exp.period && <p className="text-[11px] sm:text-xs text-[var(--text)]/50 mb-3">{exp.period}</p>}

            <ul className="list-disc list-inside text-[var(--text)]/80 text-xs sm:text-sm md:text-base space-y-1 pl-2">
              {exp.description.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
