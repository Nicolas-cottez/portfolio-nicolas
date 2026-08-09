export type Project = {
  title: string;
  positioning: string;
  shortSummary: string;
  longDescription: string;
  tags: string[];
  github?: string;
  githubLinks?: { label: string; url: string }[];
  image?: string;
  type: "main" | "secondary";
  category?: "research" | "webdev" | "utilities" | "automation";
  status?: "completed" | "in-development";
  featured?: boolean;
};

export const projects: Record<string, Project[]> = {
  en: [
    /* ==========================================
     *  MAIN PROJECTS (4)
     * ========================================== */

    /* 1. BankLens — Bank Statement PDF Processor */
    {
      title: "BankLens",
      positioning: "Bank Statement PDF Processor",
      shortSummary: "An end-to-end pipeline that converts raw bank statements into structured financial data and interactive dashboards, combining rule-based extraction with a local LLM engine.",
      longDescription: `
### Overview
BankLens converts raw PDF bank statements into structured financial data. It combines a fast rule-based extraction engine with an optional local LLM (Ollama) for irregular layouts, then classifies each transaction and renders the result in interactive dashboards.

### Key Features
- PDF ingestion and transaction extraction
- Rule-based and AI-assisted classification
- Confidence scoring on every transaction
- Interactive financial dashboards (desktop + web)

### Tech Stack
Python · PyMuPDF · Pandas · Ollama · Streamlit
      `,
      tags: ["Python", "PyMuPDF", "Pandas", "Ollama", "Streamlit"],
      github: "https://github.com/Nicolas-cottez/releverToJson",
      image: "/images/financial_analyzer.png",
      type: "main",
      status: "completed",
      featured: true,
    },

    /* 2. PromptCare — Medical Record Summarisation (RAG) */
    {
      title: "PromptCare",
      positioning: "AI Assistant for Medical Record Summaries",
      shortSummary: "An AI assistant for medical record summarisation built on a RAG architecture. It analyses a natural-language request, retrieves the relevant information from the patient record, and generates a traceable, source-grounded synthesis.",
      longDescription: `
### Overview
PromptCare is an experimental medical-record summarisation system, developed as a year-long team project (6 students) at ECE Paris. Given a patient record and a natural-language request, it retrieves the relevant passages and generates a summary tailored to the requester — e.g. a nurse asking for treatments and alerts, or a patient asking for a plain-language explanation.

### Key Features
- Natural-language request parsing (clinician- vs. patient-facing summaries)
- Retrieval of relevant passages from the patient record
- Source-grounded synthesis to limit hallucinations
- Local execution, in line with healthcare data confidentiality constraints

### Target Architecture vs. Prototype
The target architecture is a fully local RAG pipeline — CamemBERT-bio embeddings, FAISS retrieval and LLaMA3-Med generation (16 GB+ GPU). The working prototype is intentionally lighter: TF-IDF and cosine-similarity retrieval with extractive, source-grounded synthesis, tested on fictitious patient records.

### Tech Stack
Prototype: Python · scikit-learn · TF-IDF · Cosine Similarity
Target architecture: RAG · CamemBERT-bio · FAISS · LLaMA3-Med
      `,
      tags: ["Python", "scikit-learn", "TF-IDF", "RAG", "NLP", "Healthcare"],
      image: "/images/medical_llm.png",
      type: "main",
      status: "completed",
    },

    /* 3. Local AI Trust Gateway */
    {
      title: "Local AI Trust Gateway",
      positioning: "Policy-Driven LLM Gateway",
      shortSummary: "An OpenAI-compatible gateway that screens every prompt for secrets and PII, applies declarative security policies, and routes requests to local or external models with a tamper-evident audit trail.",
      longDescription: `
### Overview
An enterprise-style LLM gateway exposing an OpenAI-compatible API. Every request is scanned for secrets and PII before execution, classified by sensitivity, and routed to a local model or an external API under a declarative policy — with every decision logged in a hash-chained audit trail.

### Key Features
- Secret and PII detection before every request
- Policy-as-data engine (YAML rules, explainable decisions)
- Local-first routing based on data sensitivity
- Tamper-evident, hash-chained audit log with monitoring dashboard

### Tech Stack
Python · FastAPI · Ollama · ChromaDB · SQLite · Streamlit · Docker
      `,
      tags: ["Python", "FastAPI", "Ollama", "Security", "LLM Gateway", "Docker"],
      type: "main",
      status: "in-development",
    },

    /* 4. Universal RAG System */
    {
      title: "Universal RAG System",
      positioning: "Document Question-Answering Pipeline",
      shortSummary: "A modular retrieval-augmented generation pipeline that ingests any document corpus and answers natural-language questions with cited context.",
      longDescription: `
### Overview
A modular RAG pipeline that ingests documents, builds vector indexes, and retrieves relevant context to ground LLM answers — with full session isolation between queries.

### Key Features
- Multi-format document ingestion (PDF, TXT, MD, HTML)
- Recursive chunking with semantic embeddings
- FAISS-based semantic retrieval
- Swappable LLM backend (local or cloud)

### Tech Stack
Python · LangChain · FAISS · Transformers · Streamlit
      `,
      tags: ["Python", "LangChain", "FAISS", "RAG", "LLM", "NLP"],
      github: "https://github.com/Nicolas-cottez/RAG",
      image: "/images/rag_system.png",
      type: "main",
      status: "completed",
      featured: true,
    },

    /* ==========================================
     *  SECONDARY — Research & Experiments
     * ========================================== */
    {
      title: "Applied ML & Deep Learning Research",
      positioning: "Applied Machine Learning & Deep Learning Research Portfolio",
      shortSummary: "Regression, classification, NLP, neural networks — from-scratch implementations and hyperparameter optimisation.",
      longDescription: `
### Machine Learning (Completed)
- **House Prices** — Normalisation, LinearRegression, MSE
- **Car Prices** — Mixed variables, categorical encoding
- **Titanic** — LogisticRegression, DecisionTree, cross-validation
- **Diabetes** — AUC, F1, robust metrics
- **Iris** — KNN, SVM, standardisation
- **Spam Detection** — Text cleaning, TF-IDF, Naive Bayes

### Deep Learning (Completed)
- **MNIST** — CNN (convolutions, ReLU, dropout, BatchNorm)
- **FFNN from scratch** — Forward/backward propagation, gradient descent
- **3D Classification** — Custom neural network, visualisation

### Deep Learning — Future Exploration
- Image classification with transfer learning (ResNet, EfficientNet)
- Sequence modelling with RNNs / LSTMs
- Generative models (VAE, GAN)
- Transformer architectures from scratch
      `,
      tags: ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Keras", "Pandas", "NumPy", "CNN", "NLP"],
      githubLinks: [
        { label: "Machine Learning", url: "https://github.com/Nicolas-cottez/machine-learning" },
        { label: "Deep Learning", url: "https://github.com/Nicolas-cottez/deep-learning" },
      ],
      image: "/images/ml_group.png",
      type: "secondary",
      category: "research",
      status: "completed",
    },

    /* ==========================================
     *  SECONDARY — Full-Stack & Mobile Development
     * ========================================== */
    {
      title: "Full-Stack Systems & Application Development",
      positioning: "Full-Stack Systems & Application Development",
      shortSummary: "Web platforms, mobile and native applications with authentication, CRUD operations and database management.",
      longDescription: `
### Web Applications
- **BlaBlaCar-like Platform** — PHP, MySQL, authentication, CRUD, session management
- **Car Purchase Website** — HTML, CSS, JavaScript, responsive UI, vehicle catalogue
- **Shopping Application** — Java, CSS, product catalogue, cart management, order processing
- **Portfolio Website** — Next.js, React, TypeScript, Framer Motion, responsive design

### Mobile Applications
- **Smart Tourism Map** — React Native / Expo, MapLibre GL, minimalist points-of-interest map for travellers, PostgreSQL + PostGIS backend

### Native Applications
- **Amusement Park Simulator** — C, Allegro 5, animation loop, 2D rendering engine
      `,
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Java", "Next.js", "React", "React Native", "TypeScript", "C"],
      image: "/images/web_dev.png",
      type: "secondary",
      category: "webdev",
      status: "completed",
    },

    /* ==========================================
     *  SECONDARY — AI Applications & Utilities
     * ========================================== */
    {
      title: "AI Applications & Utilities",
      positioning: "Practical AI tools built for real-world daily use.",
      shortSummary: "Desktop tools powered by local LLMs for everyday productivity.",
      longDescription: `
### AI Text Corrector — Windows Desktop App
A **fast, offline and privacy-friendly** text corrector that works anywhere on Windows with one click.

- Native **Windows system-tray application** (.NET 8)
- **Click-to-correct**: instantly fixes clipboard text
- Auto-copy of corrected version + optional auto-paste
- **100% offline** — powered by Ollama local server
- Custom tray menu: Correct, Restart Ollama, Open folder, Quit
- Standalone portable EXE with custom icon

**Stack**: C# / .NET 8, Windows Forms, Ollama, Mistral

*Stable version — used daily.*
      `,
      tags: ["C#", ".NET 8", "Ollama", "Mistral", "LLM", "Windows", "Desktop App"],
      github: "https://github.com/Nicolas-cottez/correcteur-ia",
      image: "/images/correcteur_app.png",
      type: "secondary",
      category: "utilities",
      status: "completed",
    },

    /* ==========================================
     *  SECONDARY — Edge AI & Automation
     * ========================================== */
    {
      title: "Edge AI & Automation Server — Raspberry Pi",
      positioning: "Self-hosted AI automation hub",
      shortSummary: "Raspberry Pi 5 running AI agents and n8n workflows for automated content generation and multi-platform publishing.",
      longDescription: `
### Self-Hosted AI Infrastructure
- Raspberry Pi 5 running **OpenClaw** AI agents for autonomous task execution
- **n8n** workflows orchestrating generative AI API calls, media processing (FFmpeg) and automated publishing
- Automated TikTok & YouTube Shorts publishing pipeline
- Fully Dockerised, always-on, accessible via Tailscale VPN
      `,
      tags: ["Raspberry Pi", "OpenClaw", "n8n", "Docker", "Automation"],
      image: "/images/raspberry_pi.png",
      type: "secondary",
      category: "automation",
      status: "completed",
    },
  ],

  fr: [
    /* ==========================================
     *  PROJETS PRINCIPAUX (4)
     * ========================================== */

    /* 1. BankLens */
    {
      title: "BankLens",
      positioning: "Traitement de relevés bancaires PDF",
      shortSummary: "Un pipeline complet qui transforme des relevés bancaires bruts en données financières structurées et tableaux de bord interactifs, combinant extraction par règles et LLM local.",
      longDescription: `
### Vue d'ensemble
BankLens transforme des relevés bancaires PDF en données financières structurées. Il combine un moteur d'extraction par règles rapide avec un LLM local optionnel (Ollama) pour les mises en page complexes, puis classifie chaque transaction et affiche le résultat dans des tableaux de bord interactifs.

### Fonctionnalités Clés
- Ingestion PDF et extraction des transactions
- Classification par règles et assistée par IA
- Score de confiance sur chaque transaction
- Tableaux de bord financiers interactifs (bureau + web)

### Stack Technique
Python · PyMuPDF · Pandas · Ollama · Streamlit
      `,
      tags: ["Python", "PyMuPDF", "Pandas", "Ollama", "Streamlit"],
      github: "https://github.com/Nicolas-cottez/releverToJson",
      image: "/images/financial_analyzer.png",
      type: "main",
      status: "completed",
      featured: true,
    },

    /* 2. PromptCare — Synthèse de dossiers médicaux (RAG) */
    {
      title: "PromptCare",
      positioning: "Assistant IA pour la synthèse de dossiers médicaux",
      shortSummary: "Système expérimental qui recherche les informations pertinentes dans un dossier patient et produit une synthèse adaptée au destinataire : patient, infirmier ou médecin.",
      longDescription: `
### Vue d'ensemble
PromptCare est un système expérimental de synthèse de dossiers médicaux développé en équipe de 6 étudiants à l'ECE Paris. À partir d'un dossier patient et d'une consigne en langage naturel, le système recherche les informations pertinentes et produit une synthèse adaptée au destinataire : patient, infirmier ou médecin.

### Fonctionnalités clés
- Interprétation de consignes en langage naturel
- Recherche des passages pertinents dans le dossier patient
- Génération d'une synthèse ancrée dans les sources
- Traçabilité des informations utilisées
- Traitement local pensé pour les contraintes de confidentialité des données de santé

### Architecture & prototype
L'architecture étudiée repose sur un pipeline RAG (Retrieval-Augmented Generation) entièrement local : CamemBERT-bio pour la vectorisation, FAISS pour la recherche sémantique et LLaMA3-Med pour la génération de la synthèse.

Un prototype fonctionnel plus léger a été développé en Python, utilisant TF-IDF, scikit-learn, la similarité cosinus et une synthèse extractive ancrée. Il permet de reproduire le fonctionnement du pipeline RAG sur des dossiers patients fictifs sans nécessiter de matériel spécialisé.

### Stack technique
Prototype : Python · scikit-learn · TF-IDF · Similarité cosinus
Architecture étudiée : RAG · CamemBERT-bio · FAISS · LLaMA3-Med
      `,
      tags: ["Python", "NLP", "RAG", "IA", "Santé"],
      image: "/images/medical_llm.png",
      type: "main",
      status: "completed",
    },

    /* 3. Local AI Trust Gateway */
    {
      title: "Local AI Trust Gateway",
      positioning: "Passerelle LLM avec politiques de sécurité",
      shortSummary: "Une passerelle compatible OpenAI qui analyse chaque prompt à la recherche de secrets et de données personnelles, applique des politiques de sécurité déclaratives, et route les requêtes vers un modèle local ou externe avec un journal d'audit infalsifiable.",
      longDescription: `
### Vue d'ensemble
Une passerelle LLM de type entreprise exposant une API compatible OpenAI. Chaque requête est analysée à la recherche de secrets et de données personnelles avant exécution, classifiée par niveau de sensibilité, puis routée vers un modèle local ou une API externe selon une politique déclarative — chaque décision étant journalisée dans un audit trail chaîné par hash.

### Fonctionnalités Clés
- Détection de secrets et de données personnelles avant chaque requête
- Moteur de politiques déclaratives (règles YAML, décisions explicables)
- Routage local par défaut selon la sensibilité des données
- Journal d'audit infalsifiable (chaîné par hash) avec tableau de bord de supervision

### Stack Technique
Python · FastAPI · Ollama · ChromaDB · SQLite · Streamlit · Docker
      `,
      tags: ["Python", "FastAPI", "Ollama", "Sécurité", "LLM Gateway", "Docker"],
      type: "main",
      status: "in-development",
    },

    /* 4. Universal RAG System */
    {
      title: "Système RAG Universel",
      positioning: "Pipeline de Question-Réponse sur Documents",
      shortSummary: "Un pipeline RAG modulaire qui ingère n'importe quel corpus documentaire et répond à des questions en langage naturel avec des sources citées.",
      longDescription: `
### Vue d'ensemble
Un pipeline RAG modulaire qui ingère des documents, construit des index vectoriels et récupère le contexte pertinent pour ancrer les réponses du LLM — avec isolation complète des sessions entre chaque requête.

### Fonctionnalités Clés
- Ingestion multi-format (PDF, TXT, MD, HTML)
- Chunking récursif avec embeddings sémantiques
- Recherche sémantique via FAISS
- Backend LLM interchangeable (local ou cloud)

### Stack Technique
Python · LangChain · FAISS · Transformers · Streamlit
      `,
      tags: ["Python", "LangChain", "FAISS", "RAG", "LLM", "NLP"],
      github: "https://github.com/Nicolas-cottez/RAG",
      image: "/images/rag_system.png",
      type: "main",
      status: "completed",
      featured: true,
    },

    /* ==========================================
     *  SECONDAIRE — Recherche & Expérimentations
     * ========================================== */
    {
      title: "Recherche ML & Deep Learning Appliqué",
      positioning: "Portfolio de Recherche Appliquée en Machine Learning & Deep Learning",
      shortSummary: "Régression, classification, NLP, réseaux de neurones — implémentations from scratch et optimisation d'hyperparamètres.",
      longDescription: `
### Machine Learning (Complété)
- **Prix Immobiliers** — Normalisation, Régression Linéaire, MSE
- **Prix de Voitures** — Variables mixtes, encodage catégoriel
- **Titanic** — Régression Logistique, Arbre de Décision, validation croisée
- **Diabète** — AUC, F1, métriques robustes
- **Iris** — KNN, SVM, standardisation
- **Détection de Spam** — Nettoyage de texte, TF-IDF, Naive Bayes

### Deep Learning (Complété)
- **MNIST** — CNN (convolutions, ReLU, dropout, BatchNorm)
- **FFNN from scratch** — Propagation avant/arrière, descente de gradient
- **Classification 3D** — Réseau de neurones custom, visualisation

### Deep Learning — Exploration Future
- Classification d'images avec transfer learning (ResNet, EfficientNet)
- Modélisation de séquences avec RNNs / LSTMs
- Modèles génératifs (VAE, GAN)
- Architectures Transformer from scratch
      `,
      tags: ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Keras", "Pandas", "NumPy", "CNN", "NLP"],
      githubLinks: [
        { label: "Machine Learning", url: "https://github.com/Nicolas-cottez/machine-learning" },
        { label: "Deep Learning", url: "https://github.com/Nicolas-cottez/deep-learning" },
      ],
      image: "/images/ml_group.png",
      type: "secondary",
      category: "research",
      status: "completed",
    },

    /* ==========================================
     *  SECONDAIRE — Développement Full-Stack & Mobile
     * ========================================== */
    {
      title: "Développement Full-Stack & Applications",
      positioning: "Systèmes Full-Stack & Développement d'Applications",
      shortSummary: "Plateformes web, applications mobiles et natives avec authentification, opérations CRUD et gestion de bases de données.",
      longDescription: `
### Applications Web
- **Plateforme type BlaBlaCar** — PHP, MySQL, authentification, CRUD, gestion de sessions
- **Site d'Achat de Voitures** — HTML, CSS, JavaScript, UI responsive, catalogue véhicules
- **Application Shopping** — Java, CSS, catalogue produits, gestion du panier, traitement des commandes
- **Site Portfolio** — Next.js, React, TypeScript, Framer Motion, design responsive

### Applications Mobiles
- **Smart Tourism Map** — React Native / Expo, MapLibre GL, carte minimaliste des points d'intérêt touristiques, backend PostgreSQL + PostGIS

### Applications Natives
- **Simulateur de Parc d'Attractions** — C, Allegro 5, boucle d'animation, moteur de rendu 2D
      `,
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Java", "Next.js", "React", "React Native", "TypeScript", "C"],
      image: "/images/web_dev.png",
      type: "secondary",
      category: "webdev",
      status: "completed",
    },

    /* ==========================================
     *  SECONDAIRE — Applications & Utilitaires IA
     * ========================================== */
    {
      title: "Applications & Utilitaires IA",
      positioning: "Outils IA pratiques conçus pour un usage quotidien.",
      shortSummary: "Outils desktop propulsés par des LLMs locaux pour la productivité quotidienne.",
      longDescription: `
### Correcteur IA — Application Windows
Un correcteur **rapide, hors-ligne et respectueux de la vie privée** utilisable partout sur Windows d'un seul clic.

- Application native **Windows** basée sur .NET 8
- **Correction instantanée** du texte dans le presse-papier
- Copie automatique du texte corrigé (+ option coller)
- **100 % hors-ligne** — propulsé par le serveur Ollama local
- Menu complet : Corriger, Redémarrer Ollama, Ouvrir le dossier, Quitter
- Exécutable portable avec icône personnalisée

**Stack** : C# / .NET 8, Windows Forms, Ollama, Mistral

*Version stable — utilisée quotidiennement.*
      `,
      tags: ["C#", ".NET 8", "Ollama", "Mistral", "LLM", "Windows", "Application Desktop"],
      github: "https://github.com/Nicolas-cottez/correcteur-ia",
      image: "/images/correcteur_app.png",
      type: "secondary",
      category: "utilities",
      status: "completed",
    },

    /* ==========================================
     *  SECONDAIRE — Edge AI & Automatisation
     * ========================================== */
    {
      title: "Serveur Edge AI & Automatisation — Raspberry Pi",
      positioning: "Hub d'automatisation IA auto-hébergé",
      shortSummary: "Raspberry Pi 5 exécutant des agents IA et des workflows n8n pour la génération de contenu automatisée et la publication multi-plateforme.",
      longDescription: `
### Infrastructure IA Auto-Hébergée
- Raspberry Pi 5 exécutant des agents IA **OpenClaw** pour l'exécution autonome de tâches
- Workflows **n8n** orchestrant les appels API d'IA générative, le traitement média (FFmpeg) et la publication automatisée
- Pipeline de publication automatisée TikTok & YouTube Shorts
- Entièrement Dockerisé, toujours actif, accessible via VPN Tailscale
      `,
      tags: ["Raspberry Pi", "OpenClaw", "n8n", "Docker", "Automatisation"],
      image: "/images/raspberry_pi.png",
      type: "secondary",
      category: "automation",
      status: "completed",
    },
  ],
};
