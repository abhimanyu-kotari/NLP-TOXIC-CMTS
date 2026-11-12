# Automated Detection & Classification of Toxic Comments Using NLP

> **RV University · B.Sc. Computer Science (2025–2026)**  
> **Course:** Natural Language Processing  
> **Team:** Abhimanyu Kotari · Aniketh · Dhanush V.

---

## 📌 Project Overview
An end-to-end natural language processing presentation and interactive moderation system built with a hybrid sub-word and phrase-level TF-IDF feature union, multi-label One-vs-Rest classification, and real-time interactive Gradio evaluation.

### 🎯 Key Performance Benchmarks (Held-out Test: 31,915 comments)
- **Macro ROC-AUC:** `98.08%`
- **Macro Recall:** `0.83` (high toxic coverage)
- **Macro F1-Score:** `0.61` (robust under extreme 0.3% imbalance)
- **Inference Latency:** `~12 ms`

---

## 🛠️ Tech Stack & Architecture
- **Language & Runtime:** Python 3.11+, HTML5, CSS3, Vanilla JS (ES Modules)
- **Text Normalization:** NLTK (Tokenization, Negation-preserving stopword filter, Lemmatization)
- **Feature Extraction:** Scikit-learn `FeatureUnion` fusing Word TF-IDF (1–2 n-grams) & Character TF-IDF (3–5 n-grams)
- **Classifier:** `OneVsRestClassifier(LogisticRegression(class_weight='balanced', solver='lbfgs'))`
- **Deployment:** Interactive Web Interface with real-time probability thresholds

---

## 🚀 Live Demo & Deployment
This presentation is built as a zero-dependency standalone web deck with 100vh responsive layout, hardware-accelerated video playback, and 3D animated micro-widgets.

### Running Locally
```bash
# Clone the repository
git clone https://github.com/abhimanyu-kotari/NLP-TOXIC-CMTS.git

# Navigate into the project
cd NLP-TOXIC-CMTS

# Start a local HTTP server
python -m http.server 8081

# Open in browser
http://localhost:8081
```

### GitHub Pages Deployment
1. Go to **Settings** > **Pages** in this GitHub repository.
2. Under **Build and deployment** > **Source**, select `Deploy from a branch`.
3. Choose branch `main` and folder `/ (root)`.
4. Click **Save**. Your presentation will be live at `https://abhimanyu-kotari.github.io/NLP-TOXIC-CMTS/`!

---

## 📂 Repository Structure
```
NLP-TOXIC-CMTS/
├── index.html              # Presentation shell & HUD navigation
├── README.md               # Project documentation
├── .gitignore              # Ignored files
├── assets/                 # Video & media assets
│   ├── nlp_hero.mp4        # Slide 1 3D Comment Tunnel Showcase
│   ├── nlp_vid2.mp4        # Slide 2 Moderator Overload Video
│   └── nlp_vid3.mp4        # Slide 5 Feature Extraction Typing Demo
├── css/
│   └── design.css          # Master Design System (Pitch Black OLED + Cyber Violet)
└── js/
    ├── main.js             # Presentation engine & keyboard routing
    └── slides/             # Modular slide components (Slides 1 to 8)
        ├── slide1.js       # Title & Hero Stage
        ├── slide2.js       # Introduction & Problem Statement
        ├── slide3.js       # Project Objectives (6 with 3D micro-widgets)
        ├── slide4.js       # Dataset & 8-Stage Preprocessing Pipeline
        ├── slide5.js       # Proposed Methodology & Architecture
        ├── slide6.js       # Implementation & Tech Stack
        ├── slide7.js       # Evaluation Results & Gradio Web Simulator
        └── slide8.js       # Conclusion & Future Scope Roadmap
```

---

## 📜 License
Academic project conducted at RV University. All rights reserved.
