"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nicolascottezabrate@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="hidden md:flex fixed bottom-0 left-0 z-50 flex-col items-center gap-6 px-6 py-8 text-neutral-400">
      <a
        href="https://github.com/Nicolas-cottez"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--accent-light)] transition-all duration-300 hover:scale-110"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/nicolas-cottez-abrate-a38838257"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--accent-light)] transition-all duration-300 hover:scale-110"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <button
        onClick={copyEmail}
        className="hover:text-[var(--accent-light)] transition-all duration-300 hover:scale-110 relative group"
        title="Copy email"
      >
        <Mail className="w-5 h-5" />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-[var(--accent)] text-white px-2 py-1 rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>

      {/* Barre verticale blanche réduite */}
      <div className="w-[2px] h-[168px] mt-6 bg-gradient-to-b from-neutral-400 via-neutral-500 to-transparent rounded-full" />
    </aside>
  );
}
