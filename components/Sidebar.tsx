"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed bottom-0 left-0 z-50 flex-col items-center gap-6 px-6 py-8 text-neutral-500">
      <a
        href="https://github.com/Nicolas-cottez"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400 transition-all duration-300 hover:scale-110"
        title="GitHub"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="www.linkedin.com/in/nicolas-cottez-abrate-a38838257"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400 transition-all duration-300 hover:scale-110"
        title="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="mailto:nicolascottezabrate@gmail.com"
        className="hover:text-cyan-400 transition-all duration-300 hover:scale-110"
        title="Email"
      >
        <Mail className="w-5 h-5" />
      </a>
      <div className="w-[1px] h-24 bg-neutral-700 mt-6" />
    </aside>
  );
}
