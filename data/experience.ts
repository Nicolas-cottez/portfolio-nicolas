export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
  tech?: string[];
  detailSections?: {
    title: string;
    content: string;
  }[];
};

export const experiences: { en: Experience[]; fr: Experience[] } = {
  en: [
    {
      company: "Antenic",
      location: "Paris, France",
      role: "R&D Intern — Data & Artificial Intelligence",
      period: "April–August 2026",
      description: [
        "Designed and developed a local AI copilot to support internal procedure search, field-note structuring and report-drafting workflows.",
        "Participated in functional scoping by gathering user needs, identifying relevant use cases and translating operational requirements into product features.",
        "Contributed to improvements of the internal application and developed an activity dashboard based on operational KPIs to support monitoring and decision-making.",
      ],
      tech: ["Python", "FastAPI", "Streamlit", "Ollama", "ChromaDB", "SQL", "Docker"],
      detailSections: [
        {
          title: "Technical implementation",
          content: "Developed a local RAG pipeline combining a locally hosted model, semantic search and structured document retrieval. Built with Python, FastAPI, Streamlit, Ollama, ChromaDB and SQL, the solution supports procedure search, field-note structuring and report-drafting workflows.",
        },
        {
          title: "Functional scoping & business needs",
          content: "The project began with understanding how diagnostic professionals work, gathering their needs, selecting priority use cases and defining the operational KPIs used to assess solution adoption and impact.",
        },
      ],
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
      period: "Avril–août 2026",
      description: [
        "Conception et développement d'un copilote IA local pour faciliter la recherche dans les procédures internes, la structuration des notes terrain et les processus de rédaction de rapports.",
        "Participation au cadrage fonctionnel par le recueil des besoins utilisateurs, l'identification des cas d'usage pertinents et la traduction des exigences opérationnelles en fonctionnalités produit.",
        "Contribution à l'amélioration de l'application interne et développement d'un tableau de bord d'activité fondé sur des KPI opérationnels afin de faciliter le suivi et la prise de décision.",
      ],
      tech: ["Python", "FastAPI", "Streamlit", "Ollama", "ChromaDB", "SQL", "Docker"],
      detailSections: [
        {
          title: "Implémentation technique",
          content: "Développement d'un pipeline RAG local combinant un modèle hébergé localement, la recherche sémantique et une recherche documentaire structurée. Construite avec Python, FastAPI, Streamlit, Ollama, ChromaDB et SQL, la solution facilite la recherche dans les procédures, la structuration des notes terrain et la rédaction de rapports.",
        },
        {
          title: "Cadrage fonctionnel et besoins métier",
          content: "Le projet a commencé par la compréhension du fonctionnement des diagnostiqueurs, le recueil de leurs besoins, la sélection des cas d'usage prioritaires et la définition des KPI opérationnels permettant d'évaluer l'adoption de la solution et son impact.",
        },
      ],
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
