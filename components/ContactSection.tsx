"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download } from "lucide-react";

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative border-t border-[var(--accent)]/20 mt-24 py-16 sm:py-20 text-center 
                 bg-[var(--bg)]/60 backdrop-blur-md text-[var(--text)]"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-[var(--accent)] mb-6"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[var(--text)]/80 mb-10"
      >
        Feel free to reach out if you’d like to discuss opportunities or collaborations.
      </motion.p>

      <motion.div
        className="flex justify-center gap-8 mb-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        viewport={{ once: true }}
      >
        {[Mail, Linkedin, Github, Download].map((Icon, i) => (
          <motion.a
            key={i}
            href={
              i === 0
                ? "mailto:nicolascottezabrate@gmail.com"
                : i === 1
                ? "https://www.linkedin.com/in/nicolas-cottez-abrate-a38838257"
                : i === 2
                ? "https://github.com/Nicolas-cottez"
                : "/CV_nicolascottezabrate.pdf"
            }
            target="_blank"
            whileHover={{
              scale: 1.3,
              rotate: 10,
              color: "var(--accent)",
              textShadow: "0 0 15px var(--accent)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="hover:text-[var(--accent)] transition"
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-xs text-[var(--text)]/50"
      >
        © {new Date().getFullYear()} Nicolas Cottez-Abrate — All Rights Reserved.
      </motion.p>
    </footer>
  );
}
