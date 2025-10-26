"use client";

export default function RightColumn() {
  return (
    <aside className="hidden md:flex fixed bottom-0 right-0 z-50 flex-col items-center gap-6 px-6 py-8 text-neutral-500">
      <a
        href="mailto:nicolascottezabrate@gmail.com"
        className="text-sm font-mono tracking-widest text-neutral-500 hover:text-cyan-400 transition [writing-mode:vertical-rl] [text-orientation:mixed]"
      >
        nicolascottezabrate@gmail.com
      </a>
      <div className="w-[1px] h-24 bg-neutral-700 mt-6" />
    </aside>
  );
}
