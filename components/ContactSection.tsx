"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Linkedin, Github, Download, Send, Sparkles } from "lucide-react";

export default function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const copyEmail = () => {
    navigator.clipboard.writeText("nicolascottezabrate@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      icon: Mail,
      href: "mailto:nicolascottezabrate@gmail.com",
      label: "Email",
      color: "#b366ff",
      isEmail: true,
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nicolas-cottez-abrate-a38838257",
      label: "LinkedIn",
      color: "#d4a5ff",
    },
    {
      icon: Github,
      href: "https://github.com/Nicolas-cottez",
      label: "GitHub",
      color: "#b366ff",
    },
    {
      icon: Download,
      href: "/CV_nicolascottezabrate.pdf",
      label: "Resume",
      color: "#d4a5ff",
    },
  ];

  return (
    <footer
      ref={containerRef}
      id="contact"
      className="relative py-12 sm:py-16 md:py-20 text-center text-[var(--text)] overflow-hidden bg-[#0d0b12]"
    >
      {/* Subtle background elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 left-1/4 w-64 h-64 bg-[var(--accent)] rounded-full blur-3xl opacity-5 pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity }}
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-[var(--accent-light)] rounded-full blur-3xl opacity-5 pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header with 3D effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 60 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            animate={{
              rotateY: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Send className="text-[var(--accent)] w-7 h-7 sm:w-8 sm:h-8" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Contact
            </h2>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
            <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg max-w-2xl">
              Open to new opportunities and collaborations
            </p>
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
          </motion.div>
        </motion.div>

        {/* Contact icons with enhanced effects */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              href={(link as any).isEmail ? undefined : link.href}
              onClick={(link as any).isEmail ? copyEmail : undefined}
              target={(link as any).isEmail ? undefined : "_blank"}
              rel={(link as any).isEmail ? undefined : "noopener noreferrer"}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 200, damping: 15 },
                },
              }}
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                y: -10,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 0.9 }}
              className="group relative cursor-pointer"
            >
              <motion.div
                className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-lg sm:rounded-xl md:rounded-2xl 
                          bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg)]
                          border-2 border-[var(--border)] group-hover:border-[var(--accent)]
                          flex items-center justify-center backdrop-blur-xl
                          shadow-lg group-hover:shadow-[0_0_40px_var(--accent-glow)]
                          transition-all duration-500"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Icon */}
                <link.icon 
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white transition-colors duration-300 relative z-10" 
                  style={{ transform: "translateZ(10px)" }}
                />

                {/* Animated ring on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-[var(--accent)]"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              {/* Label - Caché sur mobile */}
              <span className="hidden sm:block absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-[var(--text-muted)] whitespace-nowrap">
                {link.label}
              </span>
              
              {/* Copied feedback for email */}
              {(link as any).isEmail && copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs bg-[var(--accent)] text-white px-3 py-1.5 rounded whitespace-nowrap z-50">
                  Copied!
                </span>
              )}
            </motion.a>
          ))}
        </motion.div>


        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <p className="text-sm text-[var(--text-muted)]">
            Crafted with passion and precision
          </p>
          <p className="text-xs text-[var(--text-muted)]/70">
            © {new Date().getFullYear()} Nicolas Cottez-Abrate — All Rights Reserved.
          </p>
        </motion.div>

        {/* Decorative sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--accent)] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
