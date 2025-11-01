"use client";
import { useState, useMemo, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Transition } from "framer-motion";

type Card = { id: string; title: string; content: React.ReactNode };

export default function AboutSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const cards: Card[] = useMemo(
    () => [
      {
        id: "about",
        title: "About Me",
        content: (
          <p className="text-neutral-200 text-base leading-relaxed text-center">
            I’m a <span className="text-cyan-400 font-medium">4th-year engineering student</span> in{" "}
            <span className="text-cyan-400">Data Science</span> and{" "}
            <span className="text-cyan-400">Artificial Intelligence</span> at{" "}
            <span className="text-cyan-400">ECE Paris</span>.  
            I’m passionate about building practical{" "}
            <span className="text-cyan-400">AI systems</span> that create real impact.
          </p>
        ),
      },
      {
        id: "skills",
        title: "Technical Skills",
        content: (
          <div className="flex flex-wrap justify-center items-center gap-3">
            {[
              "Python","C/Java/SQL/JavaScript","Git","Linux","Pandas",
              "NumPy","Matplotlib","Scikit-learn","Power BI","VS Code","SolidWorks",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-mono bg-cyan-400/5 shadow-[0_0_10px_rgba(0,255,255,0.15)] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        ),
      },
      {
        id: "languages",
        title: "Languages",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center text-center">
            {[
              { name: "English", level: "TOEFL 89 / TOEIC 900" },
              { name: "Japanese", level: "A2 — Conversational" },
              { name: "Spanish", level: "A2 — Basic understanding" },
              { name: "Chinese", level: "A0 — Learning basics" },
            ].map((lang, i) => (
              <div
                key={i}
                className="rounded-xl border border-cyan-400/25 bg-[#0b111a]/80 p-4 text-cyan-300 w-[180px] h-[90px] flex flex-col justify-center mx-auto shadow-[0_0_18px_rgba(0,255,255,0.08)] hover:shadow-[0_0_25px_rgba(0,255,255,0.25)] transition-all"
              >
                <h4 className="text-cyan-400 font-semibold text-base">{lang.name}</h4>
                <p className="text-sm text-neutral-300">{lang.level}</p>
              </div>
            ))}
          </div>
        ),
      },
    ],
    []
  );

  const n = cards.length;
  const circularOffset = useCallback((i: number, center: number) => {
    let d = i - center;
    d = (d + n) % n;
    if (d > n / 2) d -= n;
    return d;
  }, [n]);

  const next = () => setIndex((p) => (p + 1) % n);
  const prev = () => setIndex((p) => (p - 1 + n) % n);

  const CARD_W = 560;
  const CARD_H = 320;
  const SIDE_SCALE = 0.9;
  const GAP_X = 360;
  const SIDE_ROT = 12;
  const TRANSITION: Transition = { type: "spring", stiffness: 120, damping: 18, mass: 0.6 };

  if (isMobile) {
    return (
      <section id="about" className="relative text-white px-4 pt-4 pb-8">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="snap-center shrink-0 w-[85vw] max-w-[640px] rounded-2xl border border-cyan-400/20 bg-[#0b111a]/80 p-5 shadow-[0_0_15px_rgba(0,255,255,0.1)]"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4 text-center">{card.title}</h3>
              <div className="text-sm leading-relaxed text-center">{card.content}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center pt-4 pb-8 overflow-hidden text-white"
    >
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-[9%] z-20 text-cyan-400 hover:text-cyan-200 transition-transform duration-300 hover:scale-125"
      >
        <ChevronLeft size={110} />
      </button>

      <div className="relative w-full max-w-[1600px] h-[360px] flex items-center justify-center">
        {cards.map((card, i) => {
          const off = circularOffset(i, index);
          const x = off === 0 ? 0 : off === -1 ? -GAP_X : GAP_X;
          const scale = off === 0 ? 1 : SIDE_SCALE;
          const opacity = off === 0 ? 1 : 0.5;
          const rotateY = off === -1 ? SIDE_ROT : off === 1 ? -SIDE_ROT : 0;
          const zIndex = off === 0 ? 30 : 20;
          const isVisible = Math.abs(off) <= 1;

          return (
            <motion.div
              key={card.id}
              className="absolute top-1/2 left-1/2 rounded-2xl border border-cyan-400/20 bg-[#0b111a]/90 backdrop-blur-md shadow-[0_0_25px_rgba(0,255,255,0.15)] flex flex-col justify-center text-center p-6"
              style={{
                width: CARD_W,
                height: CARD_H,
                x: "-50%",
                y: "-50%",
                zIndex,
                pointerEvents: off === 0 ? "auto" : "none",
                visibility: isVisible ? "visible" : "hidden",
              }}
              animate={{ translateX: x, translateY: off === 0 ? 0 : 20, scale, opacity, rotateY }}
              transition={TRANSITION}
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{card.title}</h3>
              <div className="text-sm md:text-base leading-relaxed">{card.content}</div>
            </motion.div>
          );
        })}
      </div>

      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-[9%] z-20 text-cyan-400 hover:text-cyan-200 transition-transform duration-300 hover:scale-125"
      >
        <ChevronRight size={110} />
      </button>
    </section>
  );
}
