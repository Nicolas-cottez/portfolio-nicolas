"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download } from "lucide-react";

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative border-t border-cyan-400/10 mt-24 py-16 sm:py-20 text-center bg-[#060a11]/60 backdrop-blur-md"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-cyan-400 mb-6"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-neutral-300 mb-10"
      >
        Feel free to reach out if you’d like to discuss opportunities,
        collaborations, or ideas.
      </motion.p>

      <motion.div
        className="flex justify-center gap-8 mb-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
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
                ? "https://www.linkedin.com/in/nicolascottezabrate/"
                : i === 2
                ? "https://github.com/NicolasCottez"
                : "/resume.pdf"
            }
            target="_blank"
            whileHover={{
              scale: 1.3,
              rotate: 10,
              color: "#00ffff",
              textShadow: "0 0 15px rgba(0,255,255,0.8)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="hover:text-cyan-400 transition"
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-xs text-neutral-500"
      >
        © {new Date().getFullYear()} Nicolas Cottez-Abrate — All Rights Reserved.
      </motion.p>
    </footer>
  );
}
