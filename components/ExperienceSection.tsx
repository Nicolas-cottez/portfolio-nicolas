"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const spotlightMobileRef = useRef<HTMLDivElement>(null);
  const spotlightDesktopRef = useRef<HTMLDivElement>(null);
  const timelineDotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Manipulation directe du DOM pour éviter les re-renders
  useEffect(() => {
    let boundsCache = { top: 0, height: 0, viewportHeight: 0 };
    let rafId: number;
    
    const updateBounds = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;
        boundsCache = {
          top: rect.top + scrollTop,
          height: rect.height,
          viewportHeight: window.innerHeight,
        };
      }
    };
    
    const checkScroll = () => {
      if (boundsCache.height > 0) {
        const currentScrollY = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;
        const start = boundsCache.top - boundsCache.viewportHeight * 0.5;
        const end = boundsCache.top + boundsCache.height - boundsCache.viewportHeight * 0.5;
        const range = end - start;
        const progress = Math.max(0, Math.min(1, (currentScrollY - start) / range));
        const percentage = progress * 100;
        
        // Manipuler directement le DOM
        if (spotlightMobileRef.current) {
          spotlightMobileRef.current.style.top = `${percentage}%`;
        }
        if (spotlightDesktopRef.current) {
          spotlightDesktopRef.current.style.top = `${percentage}%`;
        }
        
        // Détecter quel dot est proche de la lumière basé sur positions réelles
        const numDots = timelineDotsRef.current.length;
        if (numDots > 0 && timelineRef.current && boundsCache.height > 0) {
          const timelineTop = boundsCache.top;
          const timelineHeight = boundsCache.height;
          const ballAbsoluteY = timelineTop + (percentage / 100) * timelineHeight;
          
          let closestIndex = -1;
          let minDistance = Infinity;
          
          for (let i = 0; i < numDots; i++) {
            const dot = timelineDotsRef.current[i];
            if (dot) {
              const dotRect = dot.getBoundingClientRect();
              const dotAbsoluteY = dotRect.top + currentScrollY;
              const distance = Math.abs(ballAbsoluteY - dotAbsoluteY);
              
              if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
              }
            }
          }
          
          // Activer si distance < 80px (environ 1 card height / 3)
          if (minDistance < 80) {
            setActiveIndex(closestIndex);
          } else {
            setActiveIndex(-1);
          }
        }
      }
      rafId = requestAnimationFrame(checkScroll);
    };
    
    // Init
    setTimeout(() => {
      updateBounds();
      checkScroll();
    }, 1000);
    
    // Resize
    const handleResize = () => {
      updateBounds();
    };
    window.addEventListener("resize", handleResize);
    
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
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
      ref={containerRef}
      id="experience"
      className="relative flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 max-w-6xl mx-auto min-h-screen py-24 overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white">
          Experience
        </h2>
        <div className="h-1 w-24 mx-auto bg-[var(--accent)] rounded-full" />
      </motion.div>

      {/* 3D Timeline */}
      <div ref={timelineRef} className="relative w-full">
        {/* Ligne Verticale Chronologique - AVANT-PLAN z-50 */}
        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[5px] bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-[var(--accent)]/60 shadow-[0_0_15px_rgba(178,102,255,0.5)] z-50 rounded-full" />
        
        {/* Faisceau lumineux électrique qui suit le scroll - Mobile */}
        <div
          ref={spotlightMobileRef}
          className="md:hidden absolute w-48 h-48 pointer-events-none z-[55]"
          style={{
            left: "2rem",
            top: "0%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Point central électrique */}
          <div className="absolute inset-[42%] bg-white rounded-full shadow-[0_0_20px_5px_rgba(178,102,255,1)]" />
          {/* Particules électriques */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--accent-light)] rounded-full"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: [0, Math.cos(i * Math.PI / 2) * 60, 0],
                y: [0, Math.sin(i * Math.PI / 2) * 60, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Faisceau lumineux électrique qui suit le scroll - Desktop */}
        <div
          ref={spotlightDesktopRef}
          className="hidden md:block absolute w-64 h-64 pointer-events-none z-[55]"
          style={{
            left: "50%",
            top: "0%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Point central électrique */}
          <div className="absolute inset-[45%] bg-white rounded-full shadow-[0_0_30px_8px_rgba(178,102,255,1)]" />
          {/* Particules électriques */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[var(--accent-light)] rounded-full"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: [0, Math.cos(i * Math.PI / 3) * 100, 0],
                y: [0, Math.sin(i * Math.PI / 3) * 100, 0],
                opacity: [0, 1, 0],
                scale: [0, 2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Experience Cards */}
        <div className="space-y-16 md:space-y-24 relative">
          {updatedExperiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80,
                }}
                className={`flex items-center gap-0 ${
                  !isMobile && isLeft ? "md:flex-row-reverse" : ""
                } relative`}
              >
                {/* Timeline Node + Ligne horizontale */}
                <div className="absolute left-[calc(2rem-8px)] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-[60]">
                  {/* Point violet */}
                  <motion.div
                    ref={(el) => {
                      if (el) timelineDotsRef.current[index] = el;
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                    animate={{
                      scale: activeIndex === index ? 1.5 : 1,
                    }}
                    className="relative"
                  >
                    {/* Glow autour du point - Amplifié quand activé */}
                    <motion.div 
                      className="absolute inset-0 bg-[var(--accent)] rounded-full blur-lg"
                      animate={{
                        opacity: activeIndex === index ? 1 : 0.7,
                        scale: activeIndex === index ? 2 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Node Circle */}
                    <motion.div 
                      className="relative w-6 h-6 rounded-full bg-[var(--accent)] border-[4px] border-[#0A0612]"
                      animate={{
                        boxShadow: activeIndex === index 
                          ? "0 0 40px rgba(178,102,255,1), 0 0 60px rgba(178,102,255,0.8)" 
                          : "0 0 20px rgba(178,102,255,1)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  
                  {/* Ligne horizontale du point vers card - Desktop uniquement */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "60px", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                    className={`hidden md:block absolute h-[2px] bg-gradient-to-r ${
                      isLeft 
                        ? "left-3 from-[var(--accent)] to-[var(--accent)]/30" 
                        : "right-3 from-[var(--accent)]/30 to-[var(--accent)]"
                    }`}
                  />
                </div>

                {/* Spacer pour écarter du centre */}
                <div className="w-20 md:w-[calc(50%+20px)] flex-shrink-0" />

                {/* Experience Card */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    rotateY: isLeft && !isMobile ? -3 : 3,
                  }}
                  animate={{
                    scale: activeIndex === index ? 1.03 : 1,
                    boxShadow: activeIndex === index 
                      ? "0 0 40px rgba(178,102,255,0.6), 0 0 80px rgba(178,102,255,0.3)"
                      : "none",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative w-full md:w-[calc(50%-80px)] md:max-w-xl p-6 md:p-8 rounded-2xl bg-[#0f0a15] border border-[var(--border)] hover:border-[var(--accent)]/40"
                  style={{
                    transformStyle: "preserve-3d",
                    borderColor: activeIndex === index ? "rgba(178,102,255,0.8)" : undefined,
                  }}
                >

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                        {exp.role}
                      </h3>
                      
                      {/* Si subjobs existe, afficher la structure spéciale */}
                      {(exp as any).subjobs ? (
                        <div className="space-y-4">
                          {(exp as any).subjobs.map((subjob: any, subjobIdx: number) => (
                            <div key={subjobIdx}>
                              {subjobIdx > 0 && (
                                <div className="h-px bg-gradient-to-r from-transparent via-neutral-700/30 to-transparent my-5" />
                              )}
                              
                              <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-2">
                                <Briefcase className="w-4 h-4 text-[var(--accent)]" />
                                <p className="font-medium">{subjob.company}</p>
                              </div>

                              {subjob.location && (
                                <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs mb-2">
                                  <MapPin className="w-4 h-4 text-[var(--accent)]" />
                                  <p>{subjob.location}</p>
                                </div>
                              )}

                              <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs mb-3">
                                <Calendar className="w-4 h-4 text-[var(--accent)]" />
                                <p>{subjob.period}</p>
                              </div>

                              <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                                {subjob.description.map((desc: string, i: number) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.05 }}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-[var(--accent)] mt-1 flex-shrink-0">▸</span>
                                    <span>{desc}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-2">
                            <Briefcase className="w-4 h-4 text-[var(--accent)]" />
                            <p className="font-medium">{exp.company}</p>
                          </div>

                          {exp.location && (
                            <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs mb-2">
                              <MapPin className="w-4 h-4 text-[var(--accent)]" />
                              <p>{exp.location}</p>
                            </div>
                          )}

                          {exp.period && (
                            <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs mb-4">
                              <Calendar className="w-4 h-4 text-[var(--accent)]" />
                              <p>{exp.period}</p>
                            </div>
                          )}

                          <div className="h-px bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/50 to-[var(--accent)]/0 mb-4" />

                          <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                            {exp.description.map((desc, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + i * 0.05 }}
                                className="flex items-start gap-2"
                              >
                                <span className="text-[var(--accent)] mt-1 flex-shrink-0">▸</span>
                                <span>{desc}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </>
                      )}
                    </motion.div>
                  </div>

                </motion.div>

                {/* Spacer for desktop alignment */}
                {!isMobile && <div className="flex-1 max-w-md md:max-w-lg hidden md:block" />}
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
