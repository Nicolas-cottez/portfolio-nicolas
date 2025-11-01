"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderOpen, X, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden px-6 py-16 sm:px-10 min-h-[90vh] text-[var(--text)]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 mb-12"
      >
        <FolderOpen className="text-[var(--accent)] w-8 h-8" />
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--accent)]">
          Projects
        </h2>
      </motion.div>

      <motion.div
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        viewport={{ once: true }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50, rotateX: -10 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: { type: "spring", stiffness: 100, damping: 12 },
              },
            }}
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            onClick={() => setSelected(i)}
            className="cursor-pointer rounded-2xl border border-[var(--accent)]/25 bg-[var(--bg)]/50 backdrop-blur-md 
                       hover:border-[var(--accent)]/50 hover:shadow-[0_0_25px_var(--accent)]/20
                       transition-all duration-500 flex flex-col justify-between p-6 text-center min-h-[220px]"
          >
            <h3 className="text-[var(--accent)] font-semibold text-lg mb-3">
              {p.title}
            </h3>
            <p className="text-[var(--text)]/70 text-sm mb-4">{p.shortSummary}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {p.tags.slice(0, 3).map((t, j) => (
                <span
                  key={j}
                  className="px-2 py-0.5 rounded-full text-xs border border-[var(--accent)]/30 text-[var(--accent)]/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg)]/80 backdrop-blur-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`project-${selected}`}
              className="relative max-w-2xl w-full bg-[var(--bg)] border border-[var(--accent)]/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_var(--accent)]/25 overflow-y-auto max-h-[85vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, type: 'spring' }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-[var(--text)]/60 hover:text-[var(--accent)] transition"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-[var(--accent)] font-semibold text-2xl mb-4">
                {projects[selected].title}
              </h3>

              <p className="text-[var(--text)]/80 text-sm sm:text-base leading-relaxed mb-6">
                {projects[selected].longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[selected].tags.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-full text-xs border border-[var(--accent)]/25 text-[var(--accent)]/90 bg-[var(--accent)]/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {projects[selected].github && projects[selected].github !== "no" && (
                <a
                  href={projects[selected].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 border border-[var(--accent)]/40 rounded-md text-[var(--accent)] 
                             hover:bg-[var(--accent)]/10 hover:border-[var(--accent)] transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
