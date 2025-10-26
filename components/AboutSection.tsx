"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  const skills = [
    "Python", "C/Java/SQL/JavaScript/HTML/CSS/PHP",
    "Git", "Linux", "Jupyter", "Pandas", "NumPy", "Matplotlib",
    "Scikit-learn", "Power BI", "Visual Studio Code", "SolidWorks"
  ];

  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex flex-col justify-center items-center text-white px-6 sm:px-10 max-w-6xl mx-auto overflow-hidden mb-40 sm:mb-32"
    >
      {/* --- Title --- */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 text-center tracking-tight"
      >
        About Me
      </motion.h2>

      {/* --- Text Block --- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-neutral-300 text-sm sm:text-base leading-relaxed max-w-3xl mb-6 px-3"
      >
        I’m a <span className="text-cyan-400 font-medium">4th-year engineering student</span> in{" "}
        <span className="text-cyan-400">Data Science</span> and{" "}
        <span className="text-cyan-400">Artificial Intelligence</span> at{" "}
        <span className="text-cyan-400">ECE Paris</span>. My interests focus on the practical side of{" "}
        <span className="text-cyan-400">AI</span> — exploring how automation, data processing, and
        intelligent systems can assist people in daily life. I aim to strengthen my skills in{" "}
        <span className="text-cyan-400">Machine Learning</span>,{" "}
        <span className="text-cyan-400">Data Engineering</span>, and{" "}
        <span className="text-cyan-400">AI model integration</span> through concrete professional
        experience. My long-term goal is to lead an{" "}
        <span className="text-cyan-400">AI mission</span> that combines technical excellence with
        real-world impact.
      </motion.p>

      {/* --- Divider --- */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-3/4 sm:w-2/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"
      />

      {/* --- Skills --- */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-8 max-w-5xl px-3"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05 },
          },
        }}
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            variants={{
              hidden: { opacity: 0, scale: 0.5, y: 40 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { type: "spring", stiffness: 100, damping: 10 },
              },
            }}
            whileHover={{
              scale: 1.15,
              rotate: 2,
              boxShadow: "0 0 25px rgba(0,255,255,0.4)",
              backgroundColor: "rgba(0,255,255,0.1)",
              borderColor: "rgba(0,255,255,0.5)",
            }}
            className="px-4 sm:px-5 py-2 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/25 
                       text-xs sm:text-sm md:text-[15px] font-mono tracking-wide transition-all duration-300 shadow-[0_0_10px_rgba(0,255,255,0.1)]"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      {/* --- Languages Box --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-6 sm:gap-8 border border-cyan-400/20 bg-white/5 rounded-xl px-5 sm:px-8 md:px-10 py-5 sm:py-6 mt-2
                   backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.08)]
                   hover:shadow-[0_0_40px_rgba(0,255,255,0.25)] transition-all duration-500 w-[90%] sm:w-[80%] max-w-3xl"
      >
        {/* Left: English */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 w-full md:w-1/2"
        >
          <h3 className="text-cyan-400 font-semibold text-lg sm:text-xl">English</h3>
          <p className="text-neutral-300 text-xs sm:text-sm md:text-base">TOEFL 89 / TOEIC 900</p>
          <p className="text-neutral-400 text-xs sm:text-sm">Full English curriculum with complete immersion.</p>
        </motion.div>

        {/* Right: Other languages */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-end text-xs sm:text-sm gap-2 w-full md:w-1/2"
        >
          {[
            { name: "Japanese", level: "A2 — Conversational" },
            { name: "Spanish", level: "A2 — Basic understanding" },
            { name: "Chinese", level: "A0 — Learning basics" },
          ].map((lang, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(0,255,255,0.3)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="w-full md:w-auto border border-cyan-400/25 bg-cyan-400/5 px-4 sm:px-5 py-2 rounded-md text-cyan-300 transition-all duration-300 text-center md:text-left"
            >
              <span className="font-semibold text-cyan-400">{lang.name}</span>{" "}
              <span className="text-neutral-300">{lang.level}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
