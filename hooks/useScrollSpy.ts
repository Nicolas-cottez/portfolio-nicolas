"use client";
import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds: string[], offset = 150) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleId = "";
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleId = entry.target.id;
          }
        });
        if (visibleId) setActiveId(visibleId);
      },
      {
        root: null,
        // ↑ Ajusté pour détecter le bas de page (footer compris)
        rootMargin: `-${offset}px 0px -20% 0px`,
        // ↑ avant : -50% => maintenant plus permissif
        threshold: [0.1, 0.25, 0.5],
        // ↑ seuil abaissé, la section devient active plus tôt
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
