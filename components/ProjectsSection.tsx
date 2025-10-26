"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderOpen, X, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view on mount and resize
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden px-6 py-16 sm:px-10 min-h-[90vh] text-white"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 mb-12"
      >
        <FolderOpen className="text-cyan-400 w-8 h-8" />
        <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-400">
          Projects
        </h2>
      </motion.div>

      {/* Projects Grid */}
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
            className="cursor-pointer rounded-2xl bg-white/5 border border-cyan-400/20 
                       p-6 backdrop-blur-md text-center hover:border-cyan-400/40
                       transition-all duration-500 shadow-[0_0_20px_rgba(0,255,255,0.05)]"
          >
            <h3 className="text-cyan-300 font-semibold text-lg mb-3">
              {p.title}
            </h3>
            <p className="text-neutral-400 text-sm mb-4">{p.shortSummary}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {p.tags.slice(0, 3).map((t, j) => (
                <span
                  key={j}
                  className="px-2 py-0.5 rounded-full text-xs border border-cyan-400/25 text-cyan-200/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`project-${selected}`}
              className="relative max-w-2xl w-full bg-[#0a0f18] border border-cyan-400/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,255,255,0.2)] overflow-y-auto max-h-[85vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, type: 'spring' }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-cyan-300 transition"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-cyan-300 font-semibold text-2xl mb-4">
                {projects[selected].title}
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                {projects[selected].longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[selected].tags.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-full text-xs border border-cyan-400/25 text-cyan-200/90 bg-cyan-400/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub button shown only if github !== "no" */}
              {projects[selected].github && projects[selected].github !== "no" && (
                <a
                  href={projects[selected].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 border border-cyan-400/40 rounded-md text-cyan-300 
                             hover:bg-cyan-900/30 hover:border-cyan-400 transition-all duration-300"
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
