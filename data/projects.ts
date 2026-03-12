export type Project = {
  title: string;
  positioning: string;
  shortSummary: string;
  longDescription: string;
  tags: string[];
  github?: string;
  image: string;
  type: "main" | "secondary";
  category?: "research" | "webdev" | "utilities";
  status?: "completed" | "in-development";
  featured?: boolean;
};

export const projects: Record<string, Project[]> = {
  en: [
    /* ==========================================
     *  MAIN PROJECTS (6)
     * ========================================== */

    /* 1. Bank Statement PDF Processor */
    {
      title: "Bank Statement PDF Processor",
      positioning: "End-to-end data pipeline from raw PDF to intelligent financial dashboard.",
      shortSummary: "Automated bank statement analysis: PDF extraction, transaction structuring, AI categorization & interactive Streamlit dashboard.",
      longDescription: `
### Problem
Bank statements in PDF format contain unstructured text that is extremely difficult to process programmatically. Manual categorization is time-consuming and error-prone.

### Solution
A complete data pipeline that ingests raw PDFs, extracts words with coordinates, reconstructs transactions, classifies them using AI, and presents actionable insights through an interactive dashboard.

### Architecture
\`\`\`
PDF Ingestion → Word Extraction (PyMuPDF)
  → Transaction Reconstruction → JSON Structuring
    → AI Classification → Pattern Detection
      → Streamlit Dashboard (charts, tables, KPIs)
\`\`\`

### Technical Stack
- **Extraction**: Python, PyMuPDF (fitz)
- **Processing**: Pandas, NumPy, custom parsing engine
- **Classification**: Scikit-learn, rule-based + ML hybrid
- **Visualization**: Streamlit, Plotly, Matplotlib
- **Data**: JSON schema, structured pipelines

### Key Features
- Coordinate-based word extraction from PDF pages
- Intelligent transaction boundary detection
- Hybrid AI categorization (rules + ML models)
- Interactive dashboard: pie charts, histograms, budget vs actual, KPIs
- Recurring expense detection & subscription tracking

### What It Demonstrates
- Data Engineering pipeline design
- Document parsing & NLP preprocessing
- ML model integration in production context
- Full-stack data product delivery
      `,
      tags: ["Python", "PyMuPDF", "Pandas", "Scikit-learn", "Streamlit", "Plotly", "NLP", "Data Pipeline"],
      github: "https://github.com/Nicolas-cottez/ai-financial-analyzer",
      image: "/images/financial_analyzer.png",
      type: "main",
      status: "completed",
      featured: true,
    },

    /* 2. Universal RAG System */
    {
      title: "Universal RAG System",
      positioning: "Modular retrieval-augmented generation architecture for any document corpus.",
      shortSummary: "Document ingestion, chunking, vector embeddings, semantic retrieval and LLM-powered question answering with stateless session management.",
      longDescription: `
### Problem
Querying large document corpora with natural language requires combining search precision with generative AI fluency. Off-the-shelf solutions lack customization and control.

### Solution
A modular RAG pipeline that ingests documents, chunks them intelligently, builds vector indexes, and retrieves relevant context to inject into LLM prompts — with full session isolation and memory reset capabilities.

### Architecture
\`\`\`
Document Upload → Text Extraction → Chunking (recursive)
  → Embedding Generation (sentence-transformers)
    → FAISS Vector Index → Semantic Retrieval
      → Prompt Injection → LLM Response → Session Management
\`\`\`

### Technical Stack
- **Ingestion**: Python, LangChain document loaders
- **Embeddings**: sentence-transformers, HuggingFace
- **Vector Store**: FAISS
- **LLM Integration**: LangChain (LCEL), OpenAI / Ollama
- **Interface**: Streamlit
- **Architecture**: Stateless sessions, memory reset per query

### Key Features
- Multi-format document support (PDF, TXT, MD, HTML)
- Recursive chunking with configurable overlap
- Semantic similarity search with score thresholds
- Stateless architecture — clean session isolation
- Swappable LLM backend (cloud or local)

### What It Demonstrates
- LLM application architecture (RAG pattern)
- Vector database engineering
- Prompt engineering & context management
- Production-grade modular design
      `,
      tags: ["Python", "LangChain", "FAISS", "Transformers", "Streamlit", "RAG", "LLM", "NLP"],
      github: "https://github.com/Nicolas-cottez/rag-system",
      image: "/images/rag_system.png",
      type: "main",
      status: "completed",
      featured: true,
    },

    /* 3. Edge AI & Automation Server — Raspberry Pi */
    {
      title: "Edge AI & Automation Server — Raspberry Pi",
      positioning: "Self-hosted AI automation hub: OpenClaw agents, gen AI pipelines and multi-platform publishing.",
      shortSummary: "Raspberry Pi 5 running OpenClaw AI agents, n8n automation workflows, gen AI API calls for content creation, and automated TikTok/Shorts publishing — all Dockerized.",
      longDescription: `
### Problem
Content creation across multiple platforms (YouTube Shorts, TikTok) requires repetitive manual work. Cloud-dependent AI workflows introduce latency, cost, and privacy concerns. A personal infrastructure layer provides full control and always-on availability.

### Solution
A Raspberry Pi 5 configured as a self-hosted edge AI server running OpenClaw and AI agents for automation. The system chains generative AI API calls, media processing, and automated publishing into fully autonomous workflows via n8n — all containerized with Docker.

### Architecture
\`\`\`
Raspberry Pi 5 (Docker)
  ├── OpenClaw — AI Agent Framework
  ├── n8n — Workflow Orchestration
  │     ├── Trigger (schedule/webhook)
  │     ├── Gen AI API Calls (text/video generation)
  │     ├── Media Processing (FFmpeg)
  │     └── Platform API Upload (TikTok, YouTube Shorts)
  ├── Nginx — Reverse Proxy + SSL
  └── Monitoring & Logging
\`\`\`

### Technical Stack
- **Hardware**: Raspberry Pi 5 (8GB)
- **AI Agents**: OpenClaw, custom agent pipelines
- **Orchestration**: n8n (self-hosted)
- **Gen AI**: OpenAI API, generative AI API calls
- **Media Processing**: FFmpeg, image pipelines
- **APIs**: YouTube Data API, TikTok API, SMTP
- **Infrastructure**: Docker, Docker Compose, Nginx, Tailscale VPN
- **OS**: Raspberry Pi OS (Debian-based)

### Key Features
- AI agents (OpenClaw) for autonomous task execution
- Dynamic prompt generation with variable injection
- Multi-format content creation (shorts, posts, videos)
- Automated TikTok & YouTube Shorts publishing
- Always-on personal AI server accessible via VPN
- Fully containerized — reproducible infrastructure
- Error handling, retry logic and monitoring

### What It Demonstrates
- Edge computing & infrastructure engineering
- AI agent orchestration (OpenClaw)
- Workflow automation architecture
- DevOps & self-hosted AI deployment
- API orchestration at scale
- LLM prompt engineering for production
      `,
      tags: ["Raspberry Pi", "OpenClaw", "n8n", "Docker", "OpenAI", "FFmpeg", "AI Agents", "Automation", "Edge Computing"],
      image: "/images/raspberry_pi.png",
      type: "main",
      status: "completed",
    },

    /* 4. PromptCare — Medical RAG System */
    {
      title: "PromptCare — Medical RAG System",
      positioning: "Domain-specific RAG architecture for medical document analysis and structured clinical summarization.",
      shortSummary: "RAG system for medical records: document ingestion, biomedical embeddings, semantic retrieval and LLM-powered clinical summary generation.",
      longDescription: `
### Problem
Raw medical records contain dense, unstructured clinical data. Extracting reliable, contextualized summaries requires domain expertise and consistent formatting — tasks poorly handled by general-purpose LLMs.

### Solution
A domain-specific RAG (Retrieval-Augmented Generation) system that ingests medical documents, builds biomedical vector indexes, retrieves relevant clinical context, and generates structured medical summaries using specialized biomedical LLMs.

### Architecture
\`\`\`
Medical Document Upload → Text Extraction
  → Biomedical Chunking & Embedding (PubMedBERT)
    → Vector Index (FAISS) → Semantic Retrieval
      → Prompt-Driven LLM Processing (Clinical-T5 / BioGPT)
        → Ontology Verification (MeSH, SNOMED CT)
          → Structured Summary Output
\`\`\`

### Technical Stack
- **RAG Framework**: LangChain, FAISS
- **LLMs**: Clinical-T5, BioGPT, PubMedBERT
- **Embeddings**: Biomedical sentence-transformers
- **Ontologies**: MeSH, SNOMED CT
- **Interface**: Streamlit / Gradio
- **Data Sources**: MIMIC-III light, MedNLI, i2b2

### Key Features
- RAG pipeline specialized for medical documents
- Biomedical embeddings for domain-specific retrieval
- Multi-LLM architecture (specialized biomedical models)
- Ontology-based output verification
- Configurable detail level, tone, and format
- Structured output: diagnosis, treatment, history sections

### Roadmap
- **Phase 1** ✅ — Literature review, state-of-the-art analysis
- **Phase 2** ✅ — Intelligent prompt design & template system
- **Phase 3** 🔄 — RAG pipeline + ontology integration
- **Phase 4** — Evaluation framework & clinical validation

### What It Demonstrates
- RAG architecture in healthcare domain
- Biomedical NLP expertise
- Vector database engineering for medical data
- Ontology integration & knowledge engineering
- Research-driven engineering methodology
      `,
      tags: ["Python", "RAG", "Clinical-T5", "BioGPT", "LangChain", "FAISS", "Transformers", "MeSH", "NLP", "LLM"],
      image: "/images/medical_llm.png",
      type: "main",
      status: "in-development",
    },

    /* 6. Smart Tourism Map */
    {
      title: "Smart Tourism Map",
      positioning: "Mobile-first intelligent city exploration with curated points of interest.",
      shortSummary: "Minimalist alternative to Google Maps focused on monuments and tourist landmarks with intelligent filtering and streamlined UX.",
      longDescription: `
### Problem
Google Maps is overloaded with information for tourists. Finding key landmarks and monuments in a new city requires sifting through restaurants, shops, and irrelevant pins.

### Solution
A mobile application focused exclusively on tourist-relevant points of interest — monuments, landmarks, museums — with intelligent filtering, clean UX, and major city coverage.

### Architecture
\`\`\`
City Selection → POI Database Query
  → Category Filtering (monuments, museums, landmarks)
    → Map Rendering (interactive layer)
      → Detail View → Navigation Integration
\`\`\`

### Technical Stack
- **Mobile**: React Native / Expo
- **Maps**: MapLibre / Mapbox GL
- **Backend**: Node.js, REST API
- **Database**: PostgreSQL + PostGIS
- **Data**: OpenStreetMap, curated datasets

### Key Features
- Major cities coverage with curated POI data
- Category-based intelligent filtering
- Minimalist, distraction-free map interface
- Offline map support for travelers
- Multi-language landmark descriptions

### Roadmap
- **Phase 1** ✅ — Core map rendering & POI display
- **Phase 2** 🔄 — Filtering system & UX refinement
- **Phase 3** — Offline mode & multi-city expansion
- **Phase 4** — User contributions & community features

### What It Demonstrates
- Mobile application engineering
- Geospatial data processing
- Product design & UX thinking
- Full-stack architecture (mobile + API + database)
      `,
      tags: ["React Native", "MapLibre", "Node.js", "PostgreSQL", "PostGIS", "Mobile", "UX"],
      image: "/images/tourism_map.png",
      type: "main",
      status: "in-development",
    },

    /* ==========================================
     *  SECONDARY — Research & Experiments
     * ========================================== */
    {
      title: "Applied ML & Deep Learning Research",
      positioning: "Applied Machine Learning & Deep Learning Research Portfolio",
      shortSummary: "Regression, classification, NLP, neural networks — from-scratch implementations and hyperparameter optimization.",
      longDescription: `
### Machine Learning (Completed)
- **House Prices** — Normalization, LinearRegression, MSE
- **Car Prices** — Mixed variables, categorical encoding
- **Titanic** — LogisticRegression, DecisionTree, cross-validation
- **Diabetes** — AUC, F1, robust metrics
- **Iris** — KNN, SVM, standardization
- **Spam Detection** — Text cleaning, TF-IDF, Naive Bayes

### Deep Learning (Completed)
- **MNIST** — CNN (convolutions, ReLU, dropout, BatchNorm)
- **FFNN from scratch** — Forward/backward propagation, gradient descent
- **3D Classification** — Custom neural network, visualization

### Deep Learning — Future Exploration
- Image classification with transfer learning (ResNet, EfficientNet)
- Sequence modeling with RNNs / LSTMs
- Generative models (VAE, GAN)
- Transformer architectures from scratch
      `,
      tags: ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Keras", "Pandas", "NumPy", "CNN", "NLP"],
      github: "https://github.com/Nicolas-cottez/machine-learning",
      image: "/images/ml_group.png",
      type: "secondary",
      category: "research",
      status: "completed",
    },

    /* ==========================================
     *  SECONDARY — Full-Stack Web Development
     * ========================================== */
    {
      title: "Full-Stack Systems & Application Development",
      positioning: "Full-Stack Systems & Application Development",
      shortSummary: "Web platforms and native applications with authentication, CRUD operations and database management.",
      longDescription: `
### Web Applications
- **BlaBlaCar-like Platform** — PHP, MySQL, authentication, CRUD, session management
- **Car Purchase Website** — HTML, CSS, JavaScript, responsive UI, vehicle catalog
- **Portfolio Website** — Next.js, React, TypeScript, Framer Motion, responsive design

### Native Applications
- **Amusement Park Simulator** — C, Allegro 5, animation loop, 2D rendering engine
      `,
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Next.js", "React", "TypeScript", "C"],
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
  ],

  fr: [
    /* ==========================================
     *  PROJETS PRINCIPAUX (6)
     * ========================================== */

    /* 1. Process de Relevés Bancaires PDF */
    {
      title: "Process de Relevés Bancaires PDF",
      positioning: "Pipeline de données complet : du PDF brut au dashboard financier intelligent.",
      shortSummary: "Analyse automatisée de relevés bancaires : extraction PDF, structuration des transactions, catégorisation IA & dashboard Streamlit interactif.",
      longDescription: `
### Problème
Les relevés bancaires en PDF contiennent du texte non structuré, extrêmement difficile à traiter. La catégorisation manuelle est chronophage et source d'erreurs.

### Solution
Un pipeline complet qui ingère les PDF bruts, extrait les mots avec leurs coordonnées, reconstruit les transactions, les classifie par IA et présente des insights via un dashboard interactif.

### Architecture
\`\`\`
Ingestion PDF → Extraction de mots (PyMuPDF)
  → Reconstruction des transactions → Structuration JSON
    → Classification IA → Détection de patterns
      → Dashboard Streamlit (graphiques, tableaux, KPIs)
\`\`\`

### Stack Technique
- **Extraction** : Python, PyMuPDF (fitz)
- **Traitement** : Pandas, NumPy, moteur de parsing custom
- **Classification** : Scikit-learn, hybride règles + ML
- **Visualisation** : Streamlit, Plotly, Matplotlib
- **Données** : Schéma JSON, pipelines structurés

### Fonctionnalités Clés
- Extraction de mots basée sur les coordonnées des pages PDF
- Détection intelligente des limites de transactions
- Catégorisation IA hybride (règles + modèles ML)
- Dashboard interactif : camemberts, histogrammes, budget vs réel, KPIs
- Détection des dépenses récurrentes & suivi d'abonnements

### Ce Que Ça Démontre
- Conception de pipelines Data Engineering
- Parsing de documents & prétraitement NLP
- Intégration de modèles ML en contexte de production
- Livraison d'un produit data complet
      `,
      tags: ["Python", "PyMuPDF", "Pandas", "Scikit-learn", "Streamlit", "Plotly", "NLP", "Data Pipeline"],
      github: "https://github.com/Nicolas-cottez/ai-financial-analyzer",
      image: "/images/financial_analyzer.png",
      type: "main",
      status: "completed",
      featured: true,
    },

    /* 2. Universal RAG System */
    {
      title: "Système RAG Universel",
      positioning: "Architecture de génération augmentée par la recherche pour tout corpus documentaire.",
      shortSummary: "Ingestion de documents, chunking, embeddings vectoriels, recherche sémantique et réponses LLM avec gestion de sessions stateless.",
      longDescription: `
### Problème
Interroger de grands corpus documentaires en langage naturel nécessite de combiner précision de recherche et fluidité générative. Les solutions prêtes à l'emploi manquent de personnalisation.

### Solution
Un pipeline RAG modulaire qui ingère des documents, les découpe intelligemment, construit des index vectoriels et récupère le contexte pertinent pour l'injecter dans les prompts LLM — avec isolation complète des sessions.

### Architecture
\`\`\`
Upload Document → Extraction Texte → Chunking (récursif)
  → Génération d'Embeddings (sentence-transformers)
    → Index Vectoriel FAISS → Recherche Sémantique
      → Injection dans Prompt → Réponse LLM → Gestion Session
\`\`\`

### Stack Technique
- **Ingestion** : Python, LangChain document loaders
- **Embeddings** : sentence-transformers, HuggingFace
- **Vector Store** : FAISS
- **Intégration LLM** : LangChain (LCEL), OpenAI / Ollama
- **Interface** : Streamlit
- **Architecture** : Sessions stateless, reset mémoire par requête

### Fonctionnalités Clés
- Support multi-format (PDF, TXT, MD, HTML)
- Chunking récursif avec chevauchement configurable
- Recherche par similarité sémantique avec seuils de score
- Architecture stateless — isolation propre des sessions
- Backend LLM interchangeable (cloud ou local)

### Ce Que Ça Démontre
- Architecture d'application LLM (pattern RAG)
- Ingénierie de bases vectorielles
- Prompt engineering & gestion de contexte
- Conception modulaire production-grade
      `,
      tags: ["Python", "LangChain", "FAISS", "Transformers", "Streamlit", "RAG", "LLM", "NLP"],
      github: "https://github.com/Nicolas-cottez/rag-system",
      image: "/images/rag_system.png",
      type: "main",
      status: "completed",
      featured: true,
    },

    /* 3. Serveur Edge AI & Automatisation — Raspberry Pi */
    {
      title: "Serveur Edge AI & Automatisation — Raspberry Pi",
      positioning: "Hub d'automatisation IA auto-hébergé : agents OpenClaw, pipelines d'IA générative et publication multi-plateforme.",
      shortSummary: "Raspberry Pi 5 exécutant des agents IA OpenClaw, workflows d'automatisation n8n, appels API d'IA générative et publication automatisée TikTok/Shorts — le tout Dockerisé.",
      longDescription: `
### Problème
La création de contenu sur plusieurs plateformes (YouTube Shorts, TikTok) nécessite un travail manuel répétitif. Les workflows IA dépendants du cloud introduisent latence, coûts et problèmes de confidentialité.

### Solution
Un Raspberry Pi 5 configuré comme serveur edge IA auto-hébergé exécutant OpenClaw et des agents IA pour l'automatisation. Le système chaîne appels API d'IA générative, traitement média et publication automatique en workflows autonomes via n8n — le tout conteneurisé avec Docker.

### Architecture
\`\`\`
Raspberry Pi 5 (Docker)
  ├── OpenClaw — Framework d'Agents IA
  ├── n8n — Orchestration de Workflows
  │     ├── Déclencheur (planification/webhook)
  │     ├── Appels API IA Générative (génération texte/vidéo)
  │     ├── Traitement Média (FFmpeg)
  │     └── Upload API Plateforme (TikTok, YouTube Shorts)
  ├── Nginx — Reverse Proxy + SSL
  └── Monitoring & Logging
\`\`\`

### Stack Technique
- **Matériel** : Raspberry Pi 5 (8 Go)
- **Agents IA** : OpenClaw, pipelines d'agents custom
- **Orchestration** : n8n (auto-hébergé)
- **IA Générative** : API OpenAI, appels API d'IA générative
- **Traitement Média** : FFmpeg, pipelines d'images
- **APIs** : YouTube Data API, TikTok API, SMTP
- **Infrastructure** : Docker, Docker Compose, Nginx, Tailscale VPN
- **OS** : Raspberry Pi OS (base Debian)

### Fonctionnalités Clés
- Agents IA (OpenClaw) pour l'exécution autonome de tâches
- Génération dynamique de prompts avec injection de variables
- Création de contenu multi-format (shorts, posts, vidéos)
- Publication automatisée TikTok & YouTube Shorts
- Serveur IA personnel toujours actif, accessible via VPN
- Entièrement conteneurisé — infrastructure reproductible
- Gestion des erreurs, logique de retry et monitoring

### Ce Que Ça Démontre
- Edge computing & ingénierie d'infrastructure
- Orchestration d'agents IA (OpenClaw)
- Architecture d'automatisation de workflows
- DevOps & déploiement IA auto-hébergé
- Orchestration d'APIs à grande échelle
- Prompt engineering LLM en production
      `,
      tags: ["Raspberry Pi", "OpenClaw", "n8n", "Docker", "OpenAI", "FFmpeg", "AI Agents", "Automation", "Edge Computing"],
      image: "/images/raspberry_pi.png",
      type: "main",
      status: "completed",
    },

    /* 4. PromptCare — Système RAG Médical */
    {
      title: "PromptCare — Système RAG Médical",
      positioning: "Architecture RAG spécialisée pour l'analyse de documents médicaux et la synthèse clinique structurée.",
      shortSummary: "Système RAG pour dossiers médicaux : ingestion de documents, embeddings biomédicaux, recherche sémantique et génération de résumés cliniques par LLM.",
      longDescription: `
### Problème
Les dossiers médicaux bruts contiennent des données cliniques denses et non structurées. Extraire des résumés fiables et contextualisés nécessite une expertise médicale et un formatage cohérent — tâches mal gérées par les LLMs généralistes.

### Solution
Un système RAG (Retrieval-Augmented Generation) spécialisé qui ingère des documents médicaux, construit des index vectoriels biomédicaux, récupère le contexte clinique pertinent et génère des résumés médicaux structurés via des LLMs biomédicaux spécialisés.

### Architecture
\`\`\`
Upload Document Médical → Extraction de Texte
  → Chunking & Embedding Biomédical (PubMedBERT)
    → Index Vectoriel (FAISS) → Recherche Sémantique
      → Traitement LLM guidé par Prompt (Clinical-T5 / BioGPT)
        → Vérification Ontologique (MeSH, SNOMED CT)
          → Sortie de Résumé Structuré
\`\`\`

### Stack Technique
- **Framework RAG** : LangChain, FAISS
- **LLMs** : Clinical-T5, BioGPT, PubMedBERT
- **Embeddings** : sentence-transformers biomédicaux
- **Ontologies** : MeSH, SNOMED CT
- **Interface** : Streamlit / Gradio
- **Sources de Données** : MIMIC-III light, MedNLI, i2b2

### Fonctionnalités Clés
- Pipeline RAG spécialisé pour documents médicaux
- Embeddings biomédicaux pour recherche spécifique au domaine
- Architecture multi-LLM (modèles biomédicaux spécialisés)
- Vérification des résultats par ontologies
- Niveau de détail, ton et format configurables
- Sortie structurée : sections diagnostic, traitement, antécédents

### Feuille de Route
- **Phase 1** ✅ — Revue de littérature, analyse de l'état de l'art
- **Phase 2** ✅ — Design de prompts intelligents & système de templates
- **Phase 3** 🔄 — Pipeline RAG + intégration ontologies
- **Phase 4** — Framework d'évaluation & validation clinique

### Ce Que Ça Démontre
- Architecture RAG dans le domaine de la santé
- Expertise en NLP biomédical
- Ingénierie de bases vectorielles pour données médicales
- Intégration d'ontologies & ingénierie des connaissances
- Méthodologie d'ingénierie orientée recherche
      `,
      tags: ["Python", "RAG", "Clinical-T5", "BioGPT", "LangChain", "FAISS", "Transformers", "MeSH", "NLP", "LLM"],
      image: "/images/medical_llm.png",
      type: "main",
      status: "in-development",
    },

    /* 6. Smart Tourism Map */
    {
      title: "Smart Tourism Map",
      positioning: "Exploration urbaine mobile-first avec points d'intérêt curatés.",
      shortSummary: "Alternative minimaliste à Google Maps axée sur les monuments et lieux touristiques avec filtrage intelligent et UX simplifiée.",
      longDescription: `
### Problème
Google Maps est surchargé d'informations pour les touristes. Trouver les monuments et sites clés dans une nouvelle ville nécessite de trier restaurants, commerces et pions non pertinents.

### Solution
Une application mobile exclusivement centrée sur les points d'intérêt touristiques — monuments, sites, musées — avec filtrage intelligent, UX épurée et couverture des grandes villes.

### Architecture
\`\`\`
Sélection de Ville → Requête Base de Données POI
  → Filtrage par Catégorie (monuments, musées, sites)
    → Rendu Carte (couche interactive)
      → Vue Détaillée → Intégration Navigation
\`\`\`

### Stack Technique
- **Mobile** : React Native / Expo
- **Cartes** : MapLibre / Mapbox GL
- **Backend** : Node.js, API REST
- **Base de Données** : PostgreSQL + PostGIS
- **Données** : OpenStreetMap, datasets curatés

### Fonctionnalités Clés
- Couverture des grandes villes avec données POI curatées
- Filtrage intelligent par catégorie
- Interface carte minimaliste, sans distraction
- Support de cartes hors-ligne pour voyageurs
- Descriptions de sites en plusieurs langues

### Feuille de Route
- **Phase 1** ✅ — Rendu carte principal & affichage POI
- **Phase 2** 🔄 — Système de filtrage & raffinement UX
- **Phase 3** — Mode hors-ligne & expansion multi-villes
- **Phase 4** — Contributions utilisateurs & fonctionnalités communautaires

### Ce Que Ça Démontre
- Ingénierie d'applications mobiles
- Traitement de données géospatiales
- Design produit & réflexion UX
- Architecture full-stack (mobile + API + base de données)
      `,
      tags: ["React Native", "MapLibre", "Node.js", "PostgreSQL", "PostGIS", "Mobile", "UX"],
      image: "/images/tourism_map.png",
      type: "main",
      status: "in-development",
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
      github: "https://github.com/Nicolas-cottez/machine-learning",
      image: "/images/ml_group.png",
      type: "secondary",
      category: "research",
      status: "completed",
    },

    /* ==========================================
     *  SECONDAIRE — Développement Web Full-Stack
     * ========================================== */
    {
      title: "Développement Full-Stack & Applications",
      positioning: "Systèmes Full-Stack & Développement d'Applications",
      shortSummary: "Plateformes web et applications natives avec authentification, opérations CRUD et gestion de bases de données.",
      longDescription: `
### Applications Web
- **Plateforme type BlaBlaCar** — PHP, MySQL, authentification, CRUD, gestion de sessions
- **Site d'Achat de Voitures** — HTML, CSS, JavaScript, UI responsive, catalogue véhicules
- **Site Portfolio** — Next.js, React, TypeScript, Framer Motion, design responsive

### Applications Natives
- **Simulateur de Parc d'Attractions** — C, Allegro 5, boucle d'animation, moteur de rendu 2D
      `,
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Next.js", "React", "TypeScript", "C"],
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
- **100% hors-ligne** — propulsé par le serveur Ollama local
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
  ],
};
