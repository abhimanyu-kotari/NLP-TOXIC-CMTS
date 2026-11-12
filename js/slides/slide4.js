/**
 * Slide 4: Dataset & Preprocessing Pipeline (PDF Page 4)
 * 159,571 Jigsaw Comments, 6 Classes + is_toxic, and 8-stage text normalization pipeline.
 */

export const slide4 = {
  id: 4,
  title: 'Dataset & Preprocessing Pipeline',
  badge: '03 // DATASET & PIPELINE',

  render() {
    return `
<div class="slide4-nlp-container">

  <!-- Header -->
  <div class="slide-header">
    <div class="label-pill">
      <span>03 // DATASET &amp; PREPROCESSING</span>
    </div>
    <h2 class="section-title">
      Dataset &amp; Preprocessing Workflow
    </h2>
    <p class="section-body">
      Curated from the benchmark Jigsaw Toxic Comment Classification corpus, standardizing raw internet chatter into high-fidelity linguistic vectors.
    </p>
  </div>

  <!-- Top Section: Dataset Scale & Multi-Label Breakdown matching PDF Page 4 -->
  <div class="dataset-metrics-bar">

    <div class="d-kpi-col">
      <div class="d-kpi-num">159,571</div>
      <div class="d-kpi-sub">Total Annotated Wikipedia Comments</div>
      <span style="font-family:var(--font-mono); font-size:0.7rem; color:var(--text-muted); margin-top:0.25rem;">SOURCE: JIGSAW / GOOGLE KAGGLE</span>
    </div>

    <div class="d-classes-col">
      <div class="d-classes-title">Six Original Toxicity Categories + Overall Label:</div>
      <div class="classes-pills-row">
        <span class="cls-chip">1. Toxic</span>
        <span class="cls-chip">2. Severe Toxic</span>
        <span class="cls-chip">3. Obscene</span>
        <span class="cls-chip">4. Threat</span>
        <span class="cls-chip">5. Insult</span>
        <span class="cls-chip">6. Identity Hate</span>
        <span class="cls-chip highlight">+ is_toxic (Overall Flag)</span>
      </div>
      <p style="font-size:0.78rem; color:var(--text-secondary); margin-top:0.3rem;">
        Multi-label problem: A single comment can simultaneously be tagged as <em>Toxic</em>, <em>Obscene</em>, and <em>Insult</em>.
      </p>
    </div>

  </div>

  <!-- 8-Stage Preprocessing Flow Grid matching PDF Page 4 -->
  <div class="preprocess-pipeline-grid">

    <!-- Step 1 -->
    <div class="prep-step-card">
      <div class="prep-num">1</div>
      <h4 class="prep-title">Raw Text</h4>
      <p class="prep-sub">Unstructured user comment string</p>
    </div>

    <!-- Step 2 -->
    <div class="prep-step-card">
      <div class="prep-num">2</div>
      <h4 class="prep-title">Lowercase</h4>
      <p class="prep-sub">Uniform case normalization</p>
    </div>

    <!-- Step 3 -->
    <div class="prep-step-card">
      <div class="prep-num">3</div>
      <h4 class="prep-title">URL / HTML</h4>
      <p class="prep-sub">Strips hyperlinks and web tags</p>
    </div>

    <!-- Step 4 -->
    <div class="prep-step-card">
      <div class="prep-num">4</div>
      <h4 class="prep-title">Slang &amp; Contractions</h4>
      <p class="prep-sub">Expands "don't" → "do not"</p>
    </div>

    <!-- Step 5 -->
    <div class="prep-step-card">
      <div class="prep-num">5</div>
      <h4 class="prep-title">Char Reduction</h4>
      <p class="prep-sub">Collapses "soooo" → "so"</p>
    </div>

    <!-- Step 6 (SPECIAL: Negations Retained) -->
    <div class="prep-step-card special">
      <div class="prep-num">6</div>
      <h4 class="prep-title text-mint">Stopwords Filter</h4>
      <p class="prep-sub">Removes noise; <strong>negations retained!</strong></p>
    </div>

    <!-- Step 7 -->
    <div class="prep-step-card">
      <div class="prep-num">7</div>
      <h4 class="prep-title">Lemmatization</h4>
      <p class="prep-sub">Reduces words to base lemma</p>
    </div>

    <!-- Step 8 -->
    <div class="prep-step-card">
      <div class="prep-num">8</div>
      <h4 class="prep-title">Clean Text</h4>
      <p class="prep-sub">Ready for TF-IDF vectorization</p>
    </div>

  </div>

  <!-- Real-World Transformation Demonstration Box -->
  <div class="interactive-cleaning-box">
    <div class="clean-flow-item" style="flex:1;">
      <span class="cf-label">INPUT NOISY RAW TEXT:</span>
      <div class="cf-box raw">“YOU are sooooo loooser!! Check http://spam.com, don't talk!!”</div>
    </div>

    <div style="font-size:1.4rem; color:var(--text-muted); font-family:var(--font-mono);">→</div>

    <div class="clean-flow-item" style="flex:1;">
      <span class="cf-label">PROCESSED CLEAN OUTPUT (NEGATIONS PRESERVED):</span>
      <div class="cf-box cleaned">“loser check not talk”</div>
    </div>
  </div>

</div>
`;
  },

  mount() {
    return () => {};
  }
};
