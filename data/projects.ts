export const projects = {
  en: [
    /* ------------------------------------------
     * 1. MACHINE LEARNING
     * ------------------------------------------ */
    {
      title: "Machine Learning",
      shortSummary: "Regression, classification and basic NLP projects.",
      longDescription: `
### Regression
- **House prices** — Normalization, LinearRegression, MSE  
- **Car prices** — Mixed variables, categorical encoding

### Classification
- **Titanic** — LogisticRegression, DecisionTreeClassifier, cross-validation  
- **Diabetes** — AUC, F1, robust metrics

### Multi-class & NLP
- **Iris** — KNN, SVM, standardization  
- **Spam** — Text cleaning, TF-IDF, Naive Bayes
      `,
      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "TF-IDF",
        "NLP"
      ],
      github: "https://github.com/Nicolas-cottez/machine-learning",
      image: "/images/ml_group.png"
    },

    /* ------------------------------------------
     * 2. DEEP LEARNING
     * ------------------------------------------ */
    {
      title: "Deep Learning",
      shortSummary: "MNIST project completed + Deep Learning roadmap.",
      longDescription: `
### Completed project
- **MNIST** — CNN (convolutions, ReLU, dropout, BatchNorm)

### Planned projects
- **CIFAR-10** — Deep CNN, data augmentation  
- **MNIST Autoencoder** — Reconstruction, MSE  
- **IMDB Sentiment** — Embeddings, LSTM  
- **Time series forecasting** — LSTM (sliding windows)  
- **Voice commands** — Spectrograms, 1D/2D CNN  
- **Simple generative text** — RNN  
- **Real-time vision** — OpenCV + CNN (webcam)  
- **Recommendation** — Collaborative filtering
      `,
      tags: [
        "Python",
        "TensorFlow",
        "Keras",
        "NumPy",
        "CNN",
        "Deep Learning"
      ],
      github: "https://github.com/Nicolas-cottez/deep-learning",
      image: "/images/dl_mnist.png"
    },

    /* ------------------------------------------
     * 3. WEB & APPLICATION DEV
     * ------------------------------------------ */
    {
      title: "Web & Application Development",
      shortSummary: "Web projects and native applications.",
      longDescription: `
### Web applications
- **BlaBlaCar-like platform** — PHP, MySQL, authentication, CRUD

### Native applications
- **Amusement park simulator (C)** — Allegro 5, animation loop, 2D rendering
      `,
      tags: [
        "HTML",
        "CSS",
        "PHP",
        "MySQL",
        "C",
        "Allegro5"
      ],
      github: "no",
      image: "/images/web_dev.png"
    },

    /* ------------------------------------------
     * 4. PROMPTCARE — MEDICAL SUMMARY GENERATOR
     * ------------------------------------------ */
    {
      title: "PromptCare — Medical Summary Generator (In progress)",
      shortSummary: "Prompt-guided medical summarization using biomedical LLMs.",
      longDescription: `
### Goal
Generate a **reliable, structured and contextualized** medical summary from a raw medical record, driven by a user prompt.

### Features
- Selection of relevant information (diagnosis, treatment, history)  
- Strict application of the prompt (tone, format, level of detail)  
- Verification via **medical ontologies** (MeSH, SNOMED CT)

### Technologies
- Biomedical LLMs: **Clinical-T5, BioGPT, PubMedBERT**  
- Pipelines: **LangChain**, Transformers  
- Interface: **Streamlit / Gradio**  
- Data: MIMIC-III light, MedNLI, i2b2

### Progress
- Literature review and state-of-the-art analysis  
- First intelligent prompts  
- Ongoing integration of LLMs + ontologies
      `,
      tags: [
        "Python",
        "Streamlit",
        "Gradio",
        "LangChain",
        "Transformers",
        "Clinical-T5",
        "BioGPT",
        "PubMedBERT",
        "MeSH",
        "SNOMED CT",
        "NLP",
        "LLM"
      ],
      github: "no",
      image: "/images/medical_llm.png"
    },

    /* ------------------------------------------
     * 5. COMING SOON
     * ------------------------------------------ */
    {
      title: "Coming Soon",
      shortSummary: "Upcoming project.",
      longDescription: "",
      tags: [],
      github: "no",
      image: "/images/coming_soon.png"
    },

    /* ------------------------------------------
     * 6. COMING SOON
     * ------------------------------------------ */
    {
      title: "Coming Soon",
      shortSummary: "Upcoming project.",
      longDescription: "",
      tags: [],
      github: "no",
      image: "/images/coming_soon.png"
    }
  ],
  fr: [
    /* ------------------------------------------
     * 1. MACHINE LEARNING
     * ------------------------------------------ */
    {
      title: "Machine Learning",
      shortSummary: "Projets de régression, classification et NLP basique.",
      longDescription: `
### Régression
- **Prix immobiliers** — Normalisation, Régression Linéaire, MSE  
- **Prix de voitures** — Variables mixtes, encodage catégoriel

### Classification
- **Titanic** — Régression Logistique, Arbre de Décision, validation croisée  
- **Diabète** — AUC, F1, métriques robustes

### Multi-classe & NLP
- **Iris** — KNN, SVM, standardisation  
- **Spam** — Nettoyage de texte, TF-IDF, Naive Bayes
      `,
      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "TF-IDF",
        "NLP"
      ],
      github: "https://github.com/Nicolas-cottez/machine-learning",
      image: "/images/ml_group.png"
    },

    /* ------------------------------------------
     * 2. DEEP LEARNING
     * ------------------------------------------ */
    {
      title: "Deep Learning",
      shortSummary: "Projet MNIST terminé + Roadmap Deep Learning.",
      longDescription: `
### Projet terminé
- **MNIST** — CNN (convolutions, ReLU, dropout, BatchNorm)

### Projets prévus
- **CIFAR-10** — Deep CNN, augmentation de données  
- **MNIST Autoencoder** — Reconstruction, MSE  
- **IMDB Sentiment** — Embeddings, LSTM  
- **Prévision de séries temporelles** — LSTM (fenêtres glissantes)  
- **Commandes vocales** — Spectrogrammes, 1D/2D CNN  
- **Génération de texte simple** — RNN  
- **Vision temps réel** — OpenCV + CNN (webcam)  
- **Recommandation** — Filtrage collaboratif
      `,
      tags: [
        "Python",
        "TensorFlow",
        "Keras",
        "NumPy",
        "CNN",
        "Deep Learning"
      ],
      github: "https://github.com/Nicolas-cottez/deep-learning",
      image: "/images/dl_mnist.png"
    },

    /* ------------------------------------------
     * 3. WEB & APPLICATION DEV
     * ------------------------------------------ */
    {
      title: "Développement Web & Applications",
      shortSummary: "Projets web et applications natives.",
      longDescription: `
### Applications Web
- **Plateforme type BlaBlaCar** — PHP, MySQL, authentification, CRUD

### Applications Natives
- **Simulateur de parc d'attractions (C)** — Allegro 5, boucle d'animation, rendu 2D
      `,
      tags: [
        "HTML",
        "CSS",
        "PHP",
        "MySQL",
        "C",
        "Allegro5"
      ],
      github: "no",
      image: "/images/web_dev.png"
    },

    /* ------------------------------------------
     * 4. PROMPTCARE — MEDICAL SUMMARY GENERATOR
     * ------------------------------------------ */
    {
      title: "PromptCare — Générateur de Résumés Médicaux (En cours)",
      shortSummary: "Résumé médical guidé par prompt utilisant des LLMs biomédicaux.",
      longDescription: `
### Objectif
Générer un résumé médical **fiable, structuré et contextualisé** à partir d'un dossier médical brut, piloté par un prompt utilisateur.

### Fonctionnalités
- Sélection des informations pertinentes (diagnostic, traitement, antécédents)  
- Application stricte du prompt (ton, format, niveau de détail)  
- Vérification via **ontologies médicales** (MeSH, SNOMED CT)

### Technologies
- LLMs Biomédicaux : **Clinical-T5, BioGPT, PubMedBERT**  
- Pipelines : **LangChain**, Transformers  
- Interface : **Streamlit / Gradio**  
- Données : MIMIC-III light, MedNLI, i2b2

### Avancement
- Revue de littérature et état de l'art  
- Premiers prompts intelligents  
- Intégration en cours des LLMs + ontologies
      `,
      tags: [
        "Python",
        "Streamlit",
        "Gradio",
        "LangChain",
        "Transformers",
        "Clinical-T5",
        "BioGPT",
        "PubMedBERT",
        "MeSH",
        "SNOMED CT",
        "NLP",
        "LLM"
      ],
      github: "no",
      image: "/images/medical_llm.png"
    },

    /* ------------------------------------------
     * 5. COMING SOON
     * ------------------------------------------ */
    {
      title: "Bientôt",
      shortSummary: "Projet à venir.",
      longDescription: "",
      tags: [],
      github: "no",
      image: "/images/coming_soon.png"
    },

    /* ------------------------------------------
     * 6. COMING SOON
     * ------------------------------------------ */
    {
      title: "Bientôt",
      shortSummary: "Projet à venir.",
      longDescription: "",
      tags: [],
      github: "no",
      image: "/images/coming_soon.png"
    }
  ]
};
