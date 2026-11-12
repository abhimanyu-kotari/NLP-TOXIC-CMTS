/**
 * Slide 6: Implementation & Technologies Used (PDF Page 6)
 * Python, Colab, Pandas, NLTK, Scikit-learn, Gensim (exploration callout), Gradio, Joblib.
 */

export const slide6 = {
  id: 6,
  title: 'Implementation & Technologies Used',
  badge: '05 // IMPLEMENTATION & STACK',

  render() {
    return `
<div class="slide6-nlp-container">

  <!-- Header -->
  <div class="slide-header">
    <div class="label-pill">
      <span>05 // IMPLEMENTATION &amp; TECH STACK</span>
    </div>
    <h2 class="section-title">
      Implementation &amp; Technologies Used
    </h2>
    <p class="section-body">
      A modular, high-throughput Python NLP technology stack leveraging industry-standard machine learning libraries.
    </p>
  </div>

  <!-- 8 Core Technologies Grid (4x2) matching PDF Page 6 -->
  <div class="tech-grid-8">

    <!-- 1. Python -->
    <div class="tech-card">
      <div class="tech-icon-wrap">🐍</div>
      <h3 class="tech-name">Python</h3>
      <p class="tech-role">Core programming language for data loading, regex cleaning, and model pipelines.</p>
    </div>

    <!-- 2. Google Colab -->
    <div class="tech-card">
      <div class="tech-icon-wrap">☁️</div>
      <h3 class="tech-name">Google Colab</h3>
      <p class="tech-role">Cloud notebook environment providing high-RAM runtime for 159k comment vectorization.</p>
    </div>

    <!-- 3. Pandas & NumPy -->
    <div class="tech-card">
      <div class="tech-icon-wrap">📊</div>
      <h3 class="tech-name">Pandas &amp; NumPy</h3>
      <p class="tech-role">Tabular data manipulation, multi-label matrix handling, and vectorized array calculations.</p>
    </div>

    <!-- 4. NLTK -->
    <div class="tech-card">
      <div class="tech-icon-wrap">📖</div>
      <h3 class="tech-name">NLTK</h3>
      <p class="tech-role">Natural Language Toolkit: tokenization, negation-preserving stopwords, and WordNet lemmatizer.</p>
    </div>

    <!-- 5. Scikit-learn -->
    <div class="tech-card" style="border-color:var(--violet-border);">
      <div class="tech-icon-wrap" style="color:var(--violet);">⚙️</div>
      <h3 class="tech-name text-violet">Scikit-learn</h3>
      <p class="tech-role">TfidfVectorizer, FeatureUnion, OneVsRestClassifier, LogisticRegression, and ROC-AUC metrics.</p>
    </div>

    <!-- 6. Gensim (Exploration) -->
    <div class="tech-card" style="border-color:var(--amber-border);">
      <div class="tech-icon-wrap" style="color:var(--amber);">🔤</div>
      <h3 class="tech-name text-amber">Gensim</h3>
      <p class="tech-role">Word2Vec dense embeddings exploration (investigated separately from the TF-IDF pipeline).</p>
    </div>

    <!-- 7. Gradio -->
    <div class="tech-card" style="border-color:var(--mint-border);">
      <div class="tech-icon-wrap" style="color:var(--mint);">💻</div>
      <h3 class="tech-name text-mint">Gradio</h3>
      <p class="tech-role">Interactive testing UI generating real-time web demos and sensitivity slider controls.</p>
    </div>

    <!-- 8. Joblib -->
    <div class="tech-card">
      <div class="tech-icon-wrap">💾</div>
      <h3 class="tech-name">Joblib</h3>
      <p class="tech-role">Serialized disk persistence: saves fitted TF-IDF FeatureUnion and trained classifier weights.</p>
    </div>

  </div>

  <!-- Gensim Word2Vec Exploration Callout Banner matching PDF Page 6 bottom note -->
  <div class="word2vec-callout-banner">
    <span class="w2v-badge">CRITICAL RESEARCH NOTE</span>
    <p class="w2v-text">
      <strong>Word2Vec Exploration:</strong> Dense Word2Vec semantic embeddings were explored separately in the notebook to evaluate distributional similarity. However, <strong>character + word TF-IDF FeatureUnion</strong> was chosen for the primary production pipeline because character n-grams proved vastly superior at catching obfuscated and misspelled profanities.
    </p>
  </div>

</div>
`;
  },

  mount() {
    return () => {};
  }
};
