/**
 * Slide 5: Proposed Methodology & ML Architecture (PDF Page 5)
 * Word & Character TF-IDF FeatureUnion, Video 3 (Large Cinematic Vector Stream),
 * and One-vs-Rest Logistic Regression with Balanced Class Weights.
 */

export const slide5 = {
  id: 5,
  title: 'Proposed Methodology & Model Architecture',
  badge: '04 // METHODOLOGY & ML PIPELINE',

  render() {
    return `
<div class="slide5-nlp-container">

  <!-- Header -->
  <div class="slide-header">
    <div class="label-pill">
      <span>04 // PROPOSED METHODOLOGY</span>
    </div>
    <h2 class="section-title">
      Proposed Methodology &amp; Feature Architecture
    </h2>
    <p class="section-body">
      A hybrid sub-word and phrase-level feature union pipeline feeding into six balanced One-vs-Rest Logistic Regression classifiers.
    </p>
  </div>

  <!-- Split Layout: Left Technical Architecture Cards / Right Video 3 Showcase & Specs -->
  <div class="slide5-split-layout">

    <!-- Left: 3 Core Methodology Columns -->
    <div class="methodology-cards-stack">

      <!-- Card 1: Word-Level TF-IDF -->
      <div class="method-card">
        <div class="m-card-header">
          <div class="m-head-row">
            <span class="m-badge">FEATURE STREAM A</span>
            <span class="m-pill accent">Unigram + Bigram</span>
          </div>
          <h3 class="m-title">Word-Level TF-IDF</h3>
        </div>
        <p class="m-desc">
          Extracts semantic vocabulary patterns and compound offensive collocations (e.g. "hate you"). Sublinear term scaling suppresses repetitive word spam.
        </p>
        <div class="m-meta-strip">
          <span class="m-meta-tag">N-Gram: 1–2 words</span>
          <span class="m-meta-tag">Sublinear TF: True</span>
          <span class="m-meta-tag">Max Features: 10,000</span>
        </div>
      </div>

      <!-- Card 2: Character-Level TF-IDF -->
      <div class="method-card">
        <div class="m-card-header">
          <div class="m-head-row">
            <span class="m-badge">FEATURE STREAM B</span>
            <span class="m-pill accent">3–5 Char N-Grams</span>
          </div>
          <h3 class="m-title">Character-Level TF-IDF</h3>
        </div>
        <p class="m-desc">
          Extracts sub-word character sequences, defeating intentional obfuscation, creative misspellings, and masked bypasses like "1diot" and "f**k".
        </p>
        <div class="m-meta-strip">
          <span class="m-meta-tag">N-Gram: 3–5 chars</span>
          <span class="m-meta-tag">Leet Invariance</span>
          <span class="m-meta-tag">Max Features: 20,000</span>
        </div>
      </div>

      <!-- Card 3: FeatureUnion + One-vs-Rest Model -->
      <div class="method-card highlight">
        <div class="m-card-header">
          <div class="m-head-row">
            <span class="m-badge">COMBINED CLASSIFIER</span>
            <span class="m-pill accent">Balanced Loss</span>
          </div>
          <h3 class="m-title text-violet">FeatureUnion &amp; One-vs-Rest</h3>
        </div>
        <p class="m-desc">
          Horizontally concatenates word and character vectors into a single feature space, training 6 binary Logistic Regressors with <code>class_weight='balanced'</code>.
        </p>
        <div class="m-meta-strip">
          <span class="m-meta-tag">Split: 80% Train / 20% Test</span>
          <span class="m-meta-tag">Solver: L-BFGS</span>
          <span class="m-meta-tag highlight">Balanced Class Weight</span>
        </div>
      </div>

    </div>

    <!-- Right: Video 3 Large Showcase + Sleek Architecture Telemetry Bar -->
    <div class="slide5-right-col">

      <!-- Large Cinematic Video 3 Showcase Box -->
      <div class="s5-video-card">
        <div class="s5-video-header">
          <div class="s5-v-title">
            <span class="live-indicator"></span>
            <span>VECTOR PROJECTION PIPELINE // ACTIVE</span>
          </div>
          <span class="hud-mono" style="font-size:0.68rem; color:var(--text-muted);">TF-IDF ENGINE</span>
        </div>

        <div class="s5-video-viewport">
          <video id="nlp-s5-video" class="s5-video-el" src="assets/nlp_vid3.mp4" muted loop playsinline preload="auto"></video>
          <div class="video-overlay-hud top">
            <span class="hud-pill live">● FEATURE EXTRACTION STREAM</span>
            <span class="hud-pill">SUB-WORD &amp; N-GRAMS</span>
          </div>
          <div class="video-overlay-hud bottom">
            <div class="video-status-indicator">
              <span class="v-dot"></span>
              <span>HIGH-DIMENSIONAL VECTOR MAPPING</span>
            </div>
            <span class="hud-pill mono">SEAMLESS LOOP</span>
          </div>
        </div>
      </div>

      <!-- Single-Row Sleek Feature Space Telemetry Radar Bar (Matching Slide 1 & Slide 2) -->
      <div class="scanner-radar-bar" style="margin-top:0.4rem; padding: 0.75rem 1rem;">
        <div class="radar-stat-col">
          <span class="radar-k">WORD VOCAB</span>
          <span class="radar-v">10,000 (1–2g)</span>
        </div>
        <div class="radar-stat-col">
          <span class="radar-k">CHAR N-GRAMS</span>
          <span class="radar-v">20,000 (3–5g)</span>
        </div>
        <div class="radar-stat-col">
          <span class="radar-k">FEATURE FUSION</span>
          <span class="radar-v accent">FeatureUnion</span>
        </div>
        <div class="radar-stat-col">
          <span class="radar-k">CLASSIFIER</span>
          <span class="radar-v" style="color:var(--mint);">Balanced LR</span>
        </div>
      </div>

    </div>

  </div>

</div>
`;
  },

  mount() {
    const video = document.getElementById('nlp-s5-video');
    if (!video) return () => {};

    let isDisposed = false;
    video.loop = true;
    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.warn('Slide 5 video autoplay prevented:', err);
      });
    }

    return () => {
      isDisposed = true;
      video.pause();
    };
  }
};
