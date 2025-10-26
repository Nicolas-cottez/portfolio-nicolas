"use client";
import useScrollProgress from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-[70px] right-2 bottom-0 w-[2px] bg-cyan-950/40 z-40">
      <div
        className="absolute top-0 left-0 w-full bg-cyan-400"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}
