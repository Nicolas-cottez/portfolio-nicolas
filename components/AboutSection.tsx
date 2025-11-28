"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, Code2, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  const sections = [
    {
      icon: User,
      title: t.aboutMe,
      content: t.content,
    },
    {
      icon: Code2,
      title: t.technicalSkills,
      skills: [
        "Python", "JavaScript", "Java", "C", "SQL",
        "Pandas", "NumPy", "Matplotlib", "Scikit-learn",
        "Git", "Linux", "Power BI",
        "VS Code", "SolidWorks"
      ],
    },
    {
      icon: Languages,
      title: t.languages,
      languages: [
        { lang: t.langNames.English, level: "TOEFL 89 | TOEIC 900" },
        { lang: t.langNames.Japanese, level: "A1" },
        { lang: t.langNames.Spanish, level: "A2" },
        { lang: t.langNames.Chinese, level: "A0" }
      ],
    }
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            {t.title}
          </h2>
          <div className="h-1 w-24 mx-auto bg-[var(--accent)] rounded-full" />
        </motion.div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 px-4">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="relative group flex flex-col"
            >
              {/* Column Content */}
              <div className="relative flex-1 flex flex-col min-h-[400px]">
                {/* Giant Icon */}
                <motion.div
                  className="flex justify-center mb-8"
                  whileHover={{ scale: 1.1, rotateY: 15 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-[var(--accent)]/20 blur-3xl rounded-full" />
                    <section.icon className="w-24 h-24 text-[var(--accent)] relative z-10" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
                  {section.title}
                </h3>

                {/* Content */}
                {section.content && (
                  <div className="text-[#ddd] text-center leading-relaxed px-4 space-y-3">
                    {section.content}
                  </div>
                )}

                {section.skills && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {section.skills.map((skill: string) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 rounded-lg bg-[#15101f] border border-[var(--accent)]/20 
                                 text-[#ddd] text-sm font-['JetBrains_Mono'] hover:border-[var(--accent)]/40 
                                 transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                )}

                {section.languages && (
                  <div className="space-y-3 max-w-xs mx-auto">
                    {section.languages.map((item: any, idx: number) => {
                      const levelMap: any = {
                        "TOEFL 89 | TOEIC 900": 95,
                        "A2": 40,
                        "A1": 30,
                        "A0": 15
                      };
                      const percentage = levelMap[item.level] || 50;

                      return (
                        <motion.div
                          key={item.lang}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="space-y-1"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium text-sm">{item.lang}</span>
                            <span className="text-[var(--accent)] font-['JetBrains_Mono'] text-[11px] tracking-tight">
                              {item.level}
                            </span>
                          </div>
                          {/* Progress bar */}
                          <div className="h-1.5 bg-[#15101f] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: idx * 0.1 + 0.2, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-full"
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Subtle border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[var(--accent)]/20 
                           rounded-2xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
