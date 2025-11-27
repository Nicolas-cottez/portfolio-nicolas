"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Rocket } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";
import ReactMarkdown from "react-markdown";


// Project Card with Image Thumbnail
function ProjectCard({ project, index, onClick }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const hasImage = project.image && !project.title.includes("Coming Soon");

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: index * 0.1,
          },
        },
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer rounded-2xl overflow-hidden h-[350px] bg-[#0f0a15]
                 border border-[var(--border)] hover:border-[var(--accent)]/40
                 transition-all duration-400 shadow-lg hover:shadow-xl hover:shadow-[var(--accent)]/20"
    >
      {/* Image or Placeholder */}
      {hasImage ? (
        <div className="relative w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-400 group-hover:scale-110"
          />
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center p-6"
          >
            <h3 className="text-2xl font-bold text-white mb-3 text-center">
              {project.title}
            </h3>
            <p className="text-[#ddd] text-center text-sm leading-relaxed mb-4">
              {project.shortSummary}
            </p>
            {/* 3 First Tags - Plus gros et voyants */}
            <div className="flex flex-wrap gap-2.5 justify-center">
              {project.tags.slice(0, 3).map((tag: string) => (
                <motion.span
                  key={tag}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-2 rounded-lg bg-[var(--accent)]/30 border-2 border-[var(--accent)]/70
                           text-white font-semibold text-sm font-['JetBrains_Mono']
                           shadow-lg shadow-[var(--accent)]/20"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        // Coming Soon Style
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#15101f] to-[#0f0a15]">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Rocket className="w-16 h-16 text-[var(--accent)]/60 mb-4" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-3 text-center">
            {project.title}
          </h3>
          <p className="text-[#999] text-center text-sm">
            {project.shortSummary}
          </p>
        </div>
      )}

      {/* Bottom gradient for title (when not hovered) */}
      {hasImage && !isHovered && (
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/100 via-black/90 to-transparent">
          <h3 className="text-2xl font-extrabold text-white drop-shadow-[0_0_16px_black]">
            {project.title}
          </h3>
        </div>
      )}
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative w-full px-6 py-32 sm:px-12 min-h-screen text-white overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
          Projects
        </h2>
        <div className="h-1 w-24 mx-auto bg-[var(--accent)] rounded-full mb-6" />
        <p className="text-[#999] max-w-2xl mx-auto text-sm sm:text-base">
          A curated showcase of interactive projects and experiments
        </p>
      </motion.div>

      {/* Project Cards Grid - Symétrique */}
      <motion.div
        className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i}
            onClick={() => setSelected(i)}
          />
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative max-w-3xl w-full bg-[rgba(15,15,25,0.95)] backdrop-blur-xl
                           border border-[var(--accent)]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10
                           shadow-[0_0_50px_rgba(178,102,255,0.3)] overflow-y-auto max-h-[85vh] sm:max-h-[90vh]"
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button - Toujours visible même sur images claires */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-3 rounded-full 
                           bg-black/90 hover:bg-black
                           ring-2 ring-white/30 hover:ring-white/50
                           text-white transition-all z-[70]
                           shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                >
                  <X size={20} strokeWidth={3} className="sm:w-6 sm:h-6 drop-shadow-lg" />
                </motion.button>

                {/* Modal Image (if exists) */}
                {projects[selected].image && !projects[selected].title.includes("Coming Soon") && (
                  <div className="relative w-full h-48 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6">
                    <Image
                      src={projects[selected].image}
                      alt={projects[selected].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                  {projects[selected].title}
                </h2>

                <div
                  className="prose prose-invert max-w-none text-[#ddd]
                            prose-headings:text-white prose-strong:text-white
                            prose-li:marker:text-[var(--accent)] mb-4 sm:mb-6"
                >
                  <ReactMarkdown>
                    {projects[selected].longDescription}
                  </ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {projects[selected].tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg 
                               bg-[var(--accent)]/10 border border-[var(--accent)]/30
                               text-[var(--accent)] text-xs sm:text-sm font-['JetBrains_Mono']"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {projects[selected].github !== "no" && (
                  <div className="flex gap-4">
                    <motion.a
                      href={projects[selected].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)]/20
                               border border-[var(--accent)]/40 text-white hover:bg-[var(--accent)]/30
                               transition-all duration-300"
                    >
                      <Github size={20} />
                      View on GitHub
                    </motion.a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
