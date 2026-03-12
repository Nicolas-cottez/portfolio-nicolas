"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ChevronDown, Rocket, FlaskConical, Code2, Cpu } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";


// ─── Project Card (Main Projects) ───────────────────────────────
function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
          opacity: 1, y: 0, scale: 1,
          transition: { type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 },
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
      {/* In Development Badge */}
      {project.status === "in-development" && (
        <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-md
                        border border-[var(--accent)]/50 bg-[var(--accent)]/10
                        text-[var(--accent)] text-[10px] font-semibold uppercase tracking-widest
                        backdrop-blur-sm">
          {t.inDevelopment}
        </div>
      )}

      {/* Image */}
      <div className="relative w-full h-full">
        <Image src={project.image} alt={project.title} fill className="object-cover transition-all duration-400 group-hover:scale-110" />
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">{project.title}</h3>
          <p className="text-[var(--accent)]/80 text-xs font-medium uppercase tracking-wider mb-3 text-center">
            {project.positioning}
          </p>
          <p className="text-[#ccc] text-center text-sm leading-relaxed mb-4 line-clamp-3">
            {project.shortSummary}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {project.tags.slice(0, 3).map((tag: string) => (
              <motion.span
                key={tag}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="px-3 py-1.5 rounded-lg bg-[var(--accent)]/20 border border-[var(--accent)]/50
                         text-white font-medium text-xs font-['JetBrains_Mono']"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient for title (when not hovered) */}
      {!isHovered && (
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/100 via-black/90 to-transparent">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-[0_0_16px_black]">
            {project.title}
          </h3>
        </div>
      )}
    </motion.div>
  );
}


// ─── Secondary Section (Collapsible) ────────────────────────────
function SecondarySection({
  project,
  icon: Icon,
  sectionTitle,
  sectionSubtitle,
}: {
  project: Project;
  icon: React.ElementType;
  sectionTitle: string;
  sectionSubtitle: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full rounded-2xl border border-[var(--border)] bg-[rgba(15,10,25,0.6)] backdrop-blur-sm
                 hover:border-[var(--accent)]/30 transition-all duration-300 overflow-hidden"
    >
      {/* Header — always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left group"
      >
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[var(--accent)]/15 border border-[var(--accent)]/30
                        flex items-center justify-center">
          <Icon size={20} className="text-[var(--accent)]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-white truncate">{sectionTitle}</h3>
          <p className="text-[#888] text-xs sm:text-sm mt-0.5">{sectionSubtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Tags preview */}
          <div className="hidden sm:flex gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-[var(--accent)]/10 border border-[var(--accent)]/20
                           text-[var(--accent)] text-[10px] font-['JetBrains_Mono']"
              >
                {tag}
              </span>
            ))}
          </div>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={20} className="text-[#666] group-hover:text-white transition-colors" />
          </motion.div>
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-[var(--border)]">
              {/* Description */}
              <div className="project-description prose prose-invert max-w-none text-[#ccc] text-sm mt-5
                            prose-headings:text-white prose-headings:font-bold
                            prose-h3:text-base prose-h3:mt-6 prose-h3:mb-3
                            prose-h3:pl-3 prose-h3:border-l-2 prose-h3:border-[var(--accent)]
                            prose-strong:text-[var(--accent-light)]
                            prose-li:marker:text-[var(--accent)]
                            prose-li:text-sm prose-li:leading-relaxed prose-li:my-0.5
                            prose-p:my-2 prose-p:leading-relaxed
                            prose-code:bg-[var(--accent)]/10 prose-code:text-[var(--accent)]
                            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
                            prose-pre:bg-[#0a0612] prose-pre:border prose-pre:border-[var(--accent)]/20 prose-pre:rounded-xl
                            prose-pre:text-xs prose-pre:font-['JetBrains_Mono']">
                <ReactMarkdown>{project.longDescription}</ReactMarkdown>
              </div>

              {/* All Tags */}
              <div className="flex flex-wrap gap-1.5 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-[var(--accent)]/10 border border-[var(--accent)]/25
                               text-[var(--accent)] text-xs font-['JetBrains_Mono']"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              {project.github && project.github !== "no" && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl
                             bg-[var(--accent)]/15 border border-[var(--accent)]/35
                             text-white text-sm hover:bg-[var(--accent)]/25 transition-all"
                >
                  <Github size={16} />
                  {t.viewOnGithub}
                </motion.a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


// ─── Main Component ─────────────────────────────────────────────
export default function ProjectsSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language].projects;
  const currentProjects = projects[language];

  const mainProjects = currentProjects.filter((p) => p.type === "main");
  const researchProject = currentProjects.find((p) => p.type === "secondary" && p.category === "research");
  const webdevProject = currentProjects.find((p) => p.type === "secondary" && p.category === "webdev");
  const utilitiesProject = currentProjects.find((p) => p.type === "secondary" && p.category === "utilities");

  const sectionIcons: Record<string, React.ElementType> = {
    research: FlaskConical,
    webdev: Code2,
    utilities: Cpu,
  };

  const sectionTitles: Record<string, { title: string; subtitle: string }> = {
    research: { title: t.researchTitle, subtitle: t.researchSubtitle },
    webdev: { title: t.webdevTitle, subtitle: t.webdevSubtitle },
    utilities: { title: t.utilitiesTitle, subtitle: t.utilitiesSubtitle },
  };

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
          {t.title}
        </h2>
        <div className="h-1 w-24 mx-auto bg-[var(--accent)] rounded-full mb-6" />
        <p className="text-[#999] max-w-2xl mx-auto text-sm sm:text-base">
          {t.subtitle}
        </p>
      </motion.div>

      {/* ─── Main Projects Grid ─────────────────────────── */}
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
        {mainProjects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i}
            onClick={() => setSelected(i)}
          />
        ))}

        {/* Coming Soon Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60, scale: 0.95 },
            visible: {
              opacity: 1, y: 0, scale: 1,
              transition: { type: "spring", stiffness: 100, damping: 15, delay: mainProjects.length * 0.1 },
            },
          }}
          className="relative rounded-2xl overflow-hidden h-[350px]
                     border-2 border-dashed border-[var(--accent)]/30
                     bg-gradient-to-br from-[#0f0a15] to-[#1a0f2e]
                     flex flex-col items-center justify-center gap-4
                     transition-all duration-400"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket size={48} className="text-[var(--accent)]/50" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white/40">
            {language === "fr" ? "Bientôt disponible" : "Coming Soon"}
          </h3>
          <p className="text-[#666] text-sm text-center px-6 max-w-xs">
            {language === "fr"
              ? "Un nouveau projet est en cours de développement..."
              : "A new project is currently in development..."}
          </p>
        </motion.div>
      </motion.div>

      {/* ─── Secondary Sections ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent mb-8" />
        </motion.div>

        <div className="flex flex-col gap-4">
          {researchProject && (
            <SecondarySection
              project={researchProject}
              icon={sectionIcons.research}
              sectionTitle={sectionTitles.research.title}
              sectionSubtitle={sectionTitles.research.subtitle}
            />
          )}
          {webdevProject && (
            <SecondarySection
              project={webdevProject}
              icon={sectionIcons.webdev}
              sectionTitle={sectionTitles.webdev.title}
              sectionSubtitle={sectionTitles.webdev.subtitle}
            />
          )}
          {utilitiesProject && (
            <SecondarySection
              project={utilitiesProject}
              icon={sectionIcons.utilities}
              sectionTitle={sectionTitles.utilities.title}
              sectionSubtitle={sectionTitles.utilities.subtitle}
            />
          )}
        </div>
      </div>

      {/* ─── Modal ──────────────────────────────────────── */}
      <AnimatePresence>
        {selected !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative max-w-3xl w-full bg-[rgba(15,15,25,0.95)] backdrop-blur-xl
                           border border-[var(--accent)]/40 rounded-2xl sm:rounded-3xl
                           shadow-[0_0_50px_rgba(178,102,255,0.3)] max-h-[80vh] sm:max-h-[85vh]
                           overflow-hidden flex flex-col mt-16 sm:mt-20"
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button — sticky at top */}
                <div className="sticky top-0 z-[70] flex justify-end p-4 sm:p-5 pb-0">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelected(null)}
                    className="p-2.5 sm:p-3 rounded-full 
                             bg-black/90 hover:bg-black
                             ring-2 ring-white/30 hover:ring-white/50
                             text-white transition-all
                             shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                  >
                    <X size={20} strokeWidth={3} className="sm:w-6 sm:h-6 drop-shadow-lg" />
                  </motion.button>
                </div>

                {/* Scrollable content */}
                <div className="overflow-y-auto modal-scroll px-5 sm:px-8 md:px-10 pb-5 sm:pb-8 md:pb-10 -mt-6">
                  {/* In-Development Badge in Modal */}
                  {mainProjects[selected]?.status === "in-development" && (
                    <div className="inline-block mb-4 px-3 py-1 rounded-md
                                    border border-[var(--accent)]/50 bg-[var(--accent)]/10
                                    text-[var(--accent)] text-[10px] font-semibold uppercase tracking-widest">
                      {t.inDevelopment}
                    </div>
                  )}

                  {/* Modal Image */}
                  {mainProjects[selected]?.image && (
                    <div className="relative w-full h-48 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6">
                      <Image
                        src={mainProjects[selected].image}
                        alt={mainProjects[selected].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                    {mainProjects[selected]?.title}
                  </h2>
                  <p className="text-[var(--accent)]/70 text-xs sm:text-sm font-medium uppercase tracking-wider mb-4 sm:mb-6">
                    {mainProjects[selected]?.positioning}
                  </p>

                  {/* Markdown content — improved readability */}
                  <div
                    className="project-description prose prose-invert prose-sm sm:prose-base max-w-none text-[#ddd]
                              prose-headings:text-white prose-headings:font-bold
                              prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                              prose-h3:pl-4 prose-h3:border-l-[3px] prose-h3:border-[var(--accent)]
                              prose-strong:text-[var(--accent-light)]
                              prose-li:marker:text-[var(--accent)]
                              prose-li:my-1 prose-li:leading-relaxed
                              prose-p:my-2.5 prose-p:leading-relaxed prose-p:text-[#ccc]
                              prose-code:bg-[var(--accent)]/10 prose-code:text-[var(--accent)]
                              prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
                              prose-pre:bg-[#0a0612] prose-pre:border prose-pre:border-[var(--accent)]/20
                              prose-pre:rounded-xl prose-pre:text-xs prose-pre:font-['JetBrains_Mono']
                              prose-ul:my-2 prose-ol:my-2
                              mb-6"
                  >
                    <ReactMarkdown>{mainProjects[selected]?.longDescription || ""}</ReactMarkdown>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                    {mainProjects[selected]?.tags.map((tag: string) => (
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

                  {/* GitHub — only if link exists and is valid */}
                  {mainProjects[selected]?.github && mainProjects[selected]?.github !== "no" && (
                    <div className="flex gap-4">
                      <motion.a
                        href={mainProjects[selected].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)]/20
                                 border border-[var(--accent)]/40 text-white hover:bg-[var(--accent)]/30
                                 transition-all duration-300"
                      >
                        <Github size={20} />
                        {t.viewOnGithub}
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
