/**
 * Slide 3: Project Objectives (PDF Page 3)
 * Exact alignment with the 6 core research deliverables,
 * enhanced with rich, custom 3D animated visual micro-widgets inside each card.
 */

export const slide3 = {
  id: 3,
  title: 'Project Objectives',
  badge: '02 // PROJECT OBJECTIVES',

  render() {
    return `
<div class="slide3-nlp-container">

  <!-- Header -->
  <div class="slide-header">
    <div class="label-pill">
      <span>02 // PROJECT OBJECTIVES</span>
    </div>
    <h2 class="section-title">
      Project Objectives &amp; Engineering Deliverables
    </h2>
    <p class="section-body">
      A systematic six-phase engineering pipeline designed to deliver an end-to-end, high-precision content moderation framework.
    </p>
  </div>

  <!-- 6 Objective Cards Grid (3x2) with 3D Animated Visual Micro-Stages -->
  <div class="objectives-grid-6">

    <!-- Card 01: Automated Detection (3D Holographic Radar Scanner) -->
    <div class="obj-card highlight">
      <div class="obj-card-top">
        <span class="obj-num">01</span>
        <span class="obj-badge-pill">NEURAL PARSER</span>
      </div>
      <div class="obj-text-wrap">
        <h3 class="obj-title">Automated Detection</h3>
        <p class="obj-desc">
          Detect toxic comments automatically using real-time NLP token stream parsing without human screening.
        </p>
      </div>

      <!-- 3D Radar Stage -->
      <div class="obj-3d-stage radar-stage">
        <div class="radar-circle ring-1"></div>
        <div class="radar-circle ring-2"></div>
        <div class="radar-circle ring-3"></div>
        <div class="radar-crosshair-x"></div>
        <div class="radar-crosshair-y"></div>
        <div class="radar-sweep"></div>
        <div class="radar-blip blip-1" title="Threat Detected"></div>
        <div class="radar-blip blip-2" title="Insult Detected"></div>
        <div class="stage-tag"><span>● 3D RADAR // SCANNING TOKENS</span></div>
      </div>
    </div>

    <!-- Card 02: Multi-Label Categorization (3D Multi-Layer Hex Prism) -->
    <div class="obj-card">
      <div class="obj-card-top">
        <span class="obj-num">02</span>
        <span class="obj-badge-pill">MULTI-LABEL</span>
      </div>
      <div class="obj-text-wrap">
        <h3 class="obj-title">Granular Categorization</h3>
        <p class="obj-desc">
          Simultaneously classify comments across 6 distinct categories: toxic, severe toxic, obscene, threat, insult, and identity hate.
        </p>
      </div>

      <!-- 3D Layered Isometric Stack Stage -->
      <div class="obj-3d-stage iso-stack-stage">
        <div class="iso-plane layer-1"><span class="plane-lbl">1. TOXIC</span></div>
        <div class="iso-plane layer-2"><span class="plane-lbl">2. SEVERE</span></div>
        <div class="iso-plane layer-3"><span class="plane-lbl">3. OBSCENE</span></div>
        <div class="iso-plane layer-4"><span class="plane-lbl">4. THREAT</span></div>
        <div class="iso-plane layer-5"><span class="plane-lbl">5. INSULT</span></div>
        <div class="iso-plane layer-6"><span class="plane-lbl">6. IDENTITY HATE</span></div>
        <div class="iso-laser-beam"></div>
        <div class="stage-tag"><span>● 3D PRISM // 6-CLASS STACK</span></div>
      </div>
    </div>

    <!-- Card 03: Noise Cleaning Pipeline (3D Data Centrifuge) -->
    <div class="obj-card">
      <div class="obj-card-top">
        <span class="obj-num">03</span>
        <span class="obj-badge-pill">8-STAGE FLOW</span>
      </div>
      <div class="obj-text-wrap">
        <h3 class="obj-title">Noise Cleaning Pipeline</h3>
        <p class="obj-desc">
          Preprocess raw text to eliminate slang, URLs, HTML tags, and character elongations while retaining negations.
        </p>
      </div>

      <!-- 3D Centrifuge Pipeline Stage -->
      <div class="obj-3d-stage centrifuge-stage">
        <div class="cent-inlet">
          <span class="raw-particle p1">soooo</span>
          <span class="raw-particle p2">#$@%</span>
        </div>
        <div class="cent-core">
          <div class="vortex-ring vr-1"></div>
          <div class="vortex-ring vr-2"></div>
          <div class="vortex-ring vr-3"></div>
        </div>
        <div class="cent-outlet">
          <span class="clean-token-cube">clean_token</span>
          <span class="negation-lock">not_toxic ✓</span>
        </div>
        <div class="stage-tag"><span>● 3D CENTRIFUGE // SANITIZER</span></div>
      </div>
    </div>

    <!-- Card 04: Sub-Word Feature Extraction (3D Rotating N-Gram Cube) -->
    <div class="obj-card">
      <div class="obj-card-top">
        <span class="obj-num">04</span>
        <span class="obj-badge-pill">FEATURE UNION</span>
      </div>
      <div class="obj-text-wrap">
        <h3 class="obj-title">Sub-Word Feature Extraction</h3>
        <p class="obj-desc">
          Engineer hybrid word n-grams (1–2 words) and character n-grams (3–5 chars) to defeat obfuscations and typos.
        </p>
      </div>

      <!-- 3D Rotating Matrix Cube Stage -->
      <div class="obj-3d-stage cube-stage">
        <div class="cube-3d-wrap">
          <div class="cube-3d">
            <div class="cube-face front">WORD[1-2]</div>
            <div class="cube-face back">CHAR[3-5]</div>
            <div class="cube-face right">TF-IDF</div>
            <div class="cube-face left">LEET-RESIST</div>
            <div class="cube-face top">DENSE 50K</div>
            <div class="cube-face bottom">SPARSE</div>
          </div>
        </div>
        <div class="stage-tag"><span>● 3D TENSOR // N-GRAM CUBE</span></div>
      </div>
    </div>

    <!-- Card 05: Model Optimization (3D Loss Landscape & Decision Plane) -->
    <div class="obj-card">
      <div class="obj-card-top">
        <span class="obj-num">05</span>
        <span class="obj-badge-pill">BALANCED LR</span>
      </div>
      <div class="obj-text-wrap">
        <h3 class="obj-title">Model Optimization</h3>
        <p class="obj-desc">
          Train and evaluate One-vs-Rest Logistic Regression with balanced weighting overcoming severe minority imbalances.
        </p>
      </div>

      <!-- 3D Decision Hyperplane Stage -->
      <div class="obj-3d-stage hyperplane-stage">
        <div class="plane-surface">
          <div class="hp-cluster benign">
            <span class="c-point cp-b1"></span>
            <span class="c-point cp-b2"></span>
            <span class="c-point cp-b3"></span>
          </div>
          <div class="hp-divider"></div>
          <div class="hp-cluster toxic">
            <span class="c-point cp-t1"></span>
            <span class="c-point cp-t2"></span>
            <span class="c-point cp-t3"></span>
          </div>
        </div>
        <div class="stage-tag"><span>● 3D HYPERPLANE // BALANCED LOSS</span></div>
      </div>
    </div>

    <!-- Card 06: Web App Deployment (3D Interactive Gradio Shield) -->
    <div class="obj-card">
      <div class="obj-card-top">
        <span class="obj-num">06</span>
        <span class="obj-badge-pill">GRADIO DEMO</span>
      </div>
      <div class="obj-text-wrap">
        <h3 class="obj-title">Web App Deployment</h3>
        <p class="obj-desc">
          Deploy an interactive browser-based web application with sensitivity sliders for real-time live testing.
        </p>
      </div>

      <!-- 3D Gradio Shield Stage -->
      <div class="obj-3d-stage shield-stage">
        <div class="shield-3d-ring outer"></div>
        <div class="shield-3d-ring mid"></div>
        <div class="shield-3d-core">
          <span class="shield-icon">🛡️</span>
          <span class="shield-latency">12 ms</span>
        </div>
        <div class="shield-packet-stream">
          <span class="packet-dot"></span>
          <span class="packet-dot"></span>
        </div>
        <div class="stage-tag"><span>● 3D SHIELD // GRADIO INFERENCE</span></div>
      </div>
    </div>

  </div>

</div>
`;
  },

  mount() {
    return () => {};
  }
};
