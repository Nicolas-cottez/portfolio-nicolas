export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
  tech?: string[];
};

export const experiences: { en: Experience[]; fr: Experience[] } = {
  en: [
    {
      company: "Antenic",
      location: "Paris, France",
      role: "R&D Intern — Data & Artificial Intelligence",
      period: "April 2026 – August 2026 · 4 months",
      description: [
        "Designed a local AI copilot for internal procedure search, field-note structuring and report-drafting assistance.",
        "Built a document knowledge base with semantic retrieval, source citations and missing-information detection.",
        "Contributed to internal application improvements and developed an activity-monitoring dashboard using Python and SQL.",
      ],
      tech: ["Python", "FastAPI", "Streamlit", "Ollama", "ChromaDB", "SQL", "Docker"],
    },
    {
      company: "FORVIA Group",
      location: "Brières-les-Scellés (91)",
      role: "Engineering Intern – Electronics Department",
      period: "July–August 2025 · 2 months",
      description: [
        "Managed and updated electronic component libraries.",
        "3D modelling and PCB routing using Zuken CR-8000 (Design Force).",
        "Collaborated with hardware teams to optimise electronic system design.",
      ],
      tech: ["Zuken CR-8000", "PCB Design", "3D Modelling"],
    },
    {
      company: "SIMERIS",
      location: "Lyon, France",
      role: "Engineering Intern – Industrial Process Optimisation",
      period: "January 2024 – February 2024 · 2 months",
      description: [
        "Implemented 5S methodology for process improvement.",
        "Designed industrial tool parts in 3D (SolidWorks).",
        "Maintained internal databases and integrated 3D printing workflows.",
      ],
      tech: ["SolidWorks", "3D Printing"],
    },
    {
      company: "La Poste · Public Finance Centre · Carrefour",
      location: "France",
      role: "Seasonal Employment",
      period: "2023 – 2025 · 6 months total",
      description: [
        "Administrative support, document archiving, mail processing and logistics.",
      ],
    },
  ],
  fr: [
    {
      company: "Antenic",
      location: "Paris, France",
      role: "Stagiaire R&D — Data & Intelligence Artificielle",
      period: "Avril 2026 – Août 2026 · 4 mois",
      description: [
        "Conception d'un copilote IA local pour la recherche dans les procédures internes, la structuration des notes terrain et l'aide à la rédaction de rapports.",
        "Mise en place d'une base documentaire avec recherche sémantique, citation des sources et détection des informations manquantes.",
        "Participation aux évolutions de l'application interne et développement d'un tableau de bord de suivi d'activité en Python et SQL.",
      ],
      tech: ["Python", "FastAPI", "Streamlit", "Ollama", "ChromaDB", "SQL", "Docker"],
    },
    {
      company: "Groupe FORVIA",
      location: "Brières-les-Scellés (91)",
      role: "Stagiaire Ingénieur – Département Électronique",
      period: "Juillet–Août 2025 · 2 mois",
      description: [
        "Gestion et mise à jour des bibliothèques de composants électroniques.",
        "Modélisation 3D et routage PCB sur Zuken CR-8000 (Design Force).",
        "Collaboration avec les équipes hardware pour optimiser la conception des systèmes électroniques.",
      ],
      tech: ["Zuken CR-8000", "PCB Design", "Modélisation 3D"],
    },
    {
      company: "SIMERIS",
      location: "Lyon, France",
      role: "Stagiaire Ingénieur – Optimisation des Processus Industriels",
      period: "Janvier 2024 – Février 2024 · 2 mois",
      description: [
        "Mise en place de la méthode 5S pour l'amélioration des processus.",
        "Conception de pièces d'outillage industriel en 3D (SolidWorks).",
        "Maintenance des bases de données internes et intégration de flux d'impression 3D.",
      ],
      tech: ["SolidWorks", "Impression 3D"],
    },
    {
      company: "La Poste · Centre des Finances Publiques · Carrefour",
      location: "France",
      role: "Emplois Saisonniers",
      period: "2023 – 2025 · 6 mois au total",
      description: [
        "Support administratif, archivage de documents, traitement du courrier et logistique.",
      ],
    },
  ],
};
