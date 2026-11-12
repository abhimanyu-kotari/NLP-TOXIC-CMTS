/**
 * Slide 1: Title & Hero Stage — Automated Toxic Comment Detection
 * RV University · B.Sc. Computer Science · Academic Year: 2025–2026
 * Features live interactive Token Stream Scanner with seamless instant-loop video showcase.
 */

export const slide1 = {
  id: 1,
  title: 'Automated Detection and Classification of Toxic Comments Using NLP',
  badge: 'RV UNIVERSITY · NLP PROJECT',

  render() {
    return `
<div class="slide1-nlp-container">

  <!-- Left: Editorial Title, Academic Credentials & Key Metric KPIs -->
  <div class="hero-left">

    <div class="uni-badge-row">
      <span class="uni-tag">RV UNIVERSITY</span>
      <span class="dept-tag">B.Sc. Computer Science · Academic Year: 2025–2026</span>
    </div>

    <h1 class="hero-nlp-title">
      Automated Detection &amp; Classification of <span class="text-violet">Toxic Comments</span> Using NLP
    </h1>

    <p class="hero-nlp-sub">
      An end-to-end natural language processing pipeline engineered with hybrid sub-word and phrase-level TF-IDF feature union, multi-label One-vs-Rest classification, and real-time interactive moderation.
    </p>

    <!-- Pipeline Badges -->
    <div class="hero-nlp-tags">
      <span class="nlp-tag highlight">Word &amp; Char TF-IDF</span>
      <span class="nlp-tag">One-vs-Rest Logistic Regression</span>
      <span class="nlp-tag">Gradio Deployment</span>
      <span class="nlp-tag">159,571 Jigsaw Corpus</span>
    </div>

    <!-- Team Credits Box matching User Slide -->
    <div class="team-credits-card">
      <div class="credits-title">PROJECT INVESTIGATORS</div>
      <div class="team-names">
        Abhimanyu Kotari &nbsp;·&nbsp; Aniketh &nbsp;·&nbsp; Dhanush V.
      </div>
      <div class="guide-row">
        <span class="guide-lbl">Course &amp; Academic Year:</span>
        <span class="guide-val">Natural Language Processing · B.Sc. (CS) 2025–2026</span>
      </div>
    </div>

    <!-- Key Benchmark Metrics Grid (Fills Space Harmoniously) -->
    <div class="hero-kpi-grid">
      <div class="hkpi-item">
        <span class="hkpi-val">159,571</span>
        <span class="hkpi-lbl">Corpus Scale</span>
      </div>
      <div class="hkpi-item">
        <span class="hkpi-val accent">98.08%</span>
        <span class="hkpi-lbl">Macro ROC-AUC</span>
      </div>
      <div class="hkpi-item">
        <span class="hkpi-val" style="color:var(--mint);">83.0%</span>
        <span class="hkpi-lbl">Macro Recall</span>
      </div>
      <div class="hkpi-item">
        <span class="hkpi-val">12 ms</span>
        <span class="hkpi-lbl">Latency</span>
      </div>
    </div>

    <!-- Interaction Hint -->
    <div class="interaction-hint">
      <span class="hint-icon">▶</span>
      <span>Autonomous NLP Moderation Stream · Seamless real-time loop</span>
    </div>

  </div>

  <!-- Right: Hero Video Showcase & HUD Overlay -->
  <div class="hero-right">

    <div class="scanner-header">
      <div class="scanner-title">
        <span class="live-indicator"></span>
        <span>NLP TOKEN MODERATION STREAM // ACTIVE</span>
      </div>
      <span class="hud-mono" style="font-size:0.7rem; color:var(--text-muted);">INSPECTION ENGINE v2.4</span>
    </div>

    <div class="scanner-stage" id="nlp-video-stage">

      <!-- Video element with auto-play and seamless instant loop -->
      <video id="nlp-hero-video" class="hero-video-el" src="assets/nlp_hero.mp4" muted loop playsinline preload="auto"></video>

      <!-- HUD Top Overlay on Video (Pinned to top corners) -->
      <div class="video-overlay-hud top">
        <span class="hud-pill live">● AI_MODERATION // LIVE INGESTION</span>
        <span class="hud-pill">TF-IDF + OVR</span>
      </div>

      <!-- HUD Bottom Overlay on Video (Pinned to bottom corners) -->
      <div class="video-overlay-hud bottom">
        <div class="video-status-indicator" id="nlp-status-indicator">
          <span class="v-dot"></span>
          <span id="nlp-status-text">LIVE NLP FEED</span>
        </div>
        <span class="hud-pill mono">SEAMLESS LOOP</span>
      </div>

      <!-- Fallback Token Stream (visible only if video fails to load) -->
      <div class="tokens-stream-fallback" id="nlp-tokens-fallback" style="display:none;">
        <div class="stream-row">
          <span class="t-chip clean">great_discussion</span>
          <span class="t-chip clean">thank_you</span>
          <span class="t-chip flagged">@#$%_idiot</span>
          <span class="t-chip clean">helpful_insight</span>
        </div>
        <div class="stream-row">
          <span class="t-chip clean">constructive_feedback</span>
          <span class="t-chip flagged">get_lost_loser</span>
          <span class="t-chip clean">wikipedia_edit</span>
        </div>
        <div class="stream-row">
          <span class="t-chip flagged">threat_detected</span>
          <span class="t-chip clean">neutral_factual</span>
          <span class="t-chip clean">verified_editor</span>
        </div>
      </div>

    </div>

  </div>

</div>
`;
  },

  mount() {
    const video = document.getElementById('nlp-hero-video');
    const fallback = document.getElementById('nlp-tokens-fallback');
    const statusText = document.getElementById('nlp-status-text');

    if (!video) return;

    let isDisposed = false;

    const handleError = () => {
      if (isDisposed) return;
      video.style.display = 'none';
      if (fallback) fallback.style.display = 'flex';
      if (statusText) statusText.textContent = 'SIMULATED TOKEN STREAM // ACTIVE';
    };
    video.addEventListener('error', handleError);

    video.loop = true;
    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.warn('Autoplay prevented or pending interaction:', err);
      });
    }

    return () => {
      isDisposed = true;
      video.removeEventListener('error', handleError);
      video.pause();
    };
  }
};
