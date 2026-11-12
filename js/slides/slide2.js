/**
 * Slide 2: Introduction & Problem Statement (PDF Page 2)
 * Features 4 core systemic challenges, Video 2 (Manual Moderation Overload),
 * and the illustrative NLP classification flow.
 */

export const slide2 = {
  id: 2,
  title: 'Introduction & Problem Statement',
  badge: '01 // PROBLEM STATEMENT',

  render() {
    return `
<div class="slide2-nlp-container">

  <!-- Header -->
  <div class="slide-header">
    <div class="label-pill">
      <span>01 // PROBLEM STATEMENT</span>
    </div>
    <h2 class="section-title">
      Introduction &amp; Problem Statement
    </h2>
    <p class="section-body">
      The exponential growth of digital discourse has triggered an epidemic of online abuse that overwhelms human moderation workforces.
    </p>
  </div>

  <!-- Main Split Layout: Left Problem Cards (2x2) / Right Video 2 Showcase & Example -->
  <div class="slide2-split-layout">

    <!-- Left: 4 Core Challenge Cards (2x2 Grid) -->
    <div class="problem-grid-2x2">

      <!-- Card 1: Content Volume Explosion -->
      <div class="prob-card">
        <div class="prob-card-top">
          <div class="prob-icon-wrap">💬</div>
          <span class="prob-seq">01</span>
        </div>
        <h3 class="prob-title">Content Volume Explosion</h3>
        <p class="prob-desc">
          Huge volumes of user-generated content flood online forums, social media, and digital platforms every second.
        </p>
      </div>

      <!-- Card 2: Pervasive Toxicity -->
      <div class="prob-card">
        <div class="prob-card-top">
          <div class="prob-icon-wrap" style="color:var(--coral);">⚠️</div>
          <span class="prob-seq">02</span>
        </div>
        <h3 class="prob-title">Pervasive Toxicity</h3>
        <p class="prob-desc">
          Proliferation of abusive, offensive, obscene, violent threats, insults, and identity hate speech targeting community members.
        </p>
      </div>

      <!-- Card 3: Manual Moderation Failure -->
      <div class="prob-card">
        <div class="prob-card-top">
          <div class="prob-icon-wrap" style="color:var(--amber);">⏱️</div>
          <span class="prob-seq">03</span>
        </div>
        <h3 class="prob-title">Manual Moderation Failure</h3>
        <p class="prob-desc">
          Manual human review is exceptionally time-consuming, expensive, inconsistent, and mathematically impossible to scale.
        </p>
      </div>

      <!-- Card 4: Automated NLP Solution -->
      <div class="prob-card accent">
        <div class="prob-card-top">
          <div class="prob-icon-wrap">🤖</div>
          <span class="prob-seq">04</span>
        </div>
        <h3 class="prob-title text-violet">Automated NLP Solution</h3>
        <p class="prob-desc">
          Automated natural language processing models evaluate and filter harmful remarks in real time with high statistical fidelity.
        </p>
      </div>

    </div>

    <!-- Right: Video 2 Showcase Stage + Illustrative Example Callout -->
    <div class="slide2-right-col">

      <!-- Video 2 Showcase Box -->
      <div class="s2-video-card">
        <div class="s2-video-header">
          <div class="s2-v-title">
            <span class="live-indicator"></span>
            <span>MODERATION OVERLOAD FEED // LIVE</span>
          </div>
          <span class="hud-mono" style="font-size:0.68rem; color:var(--text-muted);">MONITOR v1.8</span>
        </div>

        <div class="s2-video-viewport">
          <video id="nlp-s2-video" class="s2-video-el" src="assets/nlp_vid2.mp4" muted loop playsinline preload="auto"></video>
          <div class="video-overlay-hud top">
            <span class="hud-pill live">● MANUAL QUEUE CONGESTION</span>
            <span class="hud-pill">SCALE BOTTLENECK</span>
          </div>
          <div class="video-overlay-hud bottom">
            <div class="video-status-indicator">
              <span class="v-dot"></span>
              <span>HUMAN FATIGUE LIMIT EXCEEDED</span>
            </div>
            <span class="hud-pill mono">SEAMLESS LOOP</span>
          </div>
        </div>
      </div>

      <!-- Illustrative Example Callout matching PDF Page 2 -->
      <div class="illustrative-example-box compact">
        <div class="ex-left">
          <span class="ex-eyebrow">ILLUSTRATIVE LIVE EXAMPLE // REAL-TIME INGESTION</span>
          <div class="ex-quote">
            “You are an idiot, nobody wants you here.”
          </div>
        </div>
        <div class="ex-flow">
          <div class="classifier-node">
            <span class="cnode-sub">MODEL</span>
            <div class="cnode-title">NLP Classifier</div>
          </div>
          <div class="ex-arrow">→</div>
          <div class="verdict-badges">
            <div class="v-badge toxic">
              <span>● TOXIC (94%)</span>
            </div>
            <div class="v-badge clean">
              <span>○ NON-TOXIC (6%)</span>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</div>
`;
  },

  mount() {
    const video = document.getElementById('nlp-s2-video');
    if (!video) return () => {};

    let isDisposed = false;
    video.loop = true;
    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.warn('Slide 2 video autoplay prevented:', err);
      });
    }

    return () => {
      isDisposed = true;
      video.pause();
    };
  }
};
