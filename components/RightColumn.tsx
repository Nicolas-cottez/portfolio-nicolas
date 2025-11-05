"use client";
import { useState } from "react";

export default function RightColumn() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nicolascottezabrate@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="hidden md:flex fixed bottom-0 right-0 z-50 flex-col items-center gap-6 px-6 py-8 text-neutral-400">
      <button
        onClick={copyEmail}
        className="text-sm font-mono tracking-widest hover:text-[var(--accent-light)] transition-all [writing-mode:vertical-rl] [text-orientation:mixed] relative group"
        title="Copy email"
      >
        nicolascottezabrate@gmail.com
        {copied && (
          <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-xs bg-[var(--accent)] text-white px-2 py-1 rounded whitespace-nowrap [writing-mode:horizontal-tb]">
            Copied!
          </span>
        )}
      </button>

      {/* Barre verticale blanche réduite */}
      <div className="w-[2px] h-[168px] mt-6 bg-gradient-to-b from-neutral-400 via-neutral-500 to-transparent rounded-full" />
    </aside>
  );
}
