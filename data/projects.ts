export const projects = [
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
];
