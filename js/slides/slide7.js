/**
 * Slide 7: Results & Application Demo (PDF Page 7)
 * 31,915 Test Set Evaluation + Fully Interactive Gradio Web App Simulator
 */

export const slide7 = {
  id: 7,
  title: 'Results & Interactive Gradio Demo',
  badge: '06 // EVALUATION & DEMO',

  render() {
    return `
<div class="slide7-nlp-container">

  <!-- Header -->
  <div class="slide-header">
    <div class="label-pill">
      <span>06 // RESULTS &amp; APPLICATION DEMO</span>
    </div>
    <h2 class="section-title">
      Evaluation Results &amp; Interactive Gradio Demo
    </h2>
    <p class="section-body">
      Benchmarked across 31,915 held-out test comments, achieving a commanding 98.08% Macro ROC-AUC ranking score.
    </p>
  </div>

  <!-- 3 Top Metric KPI Cards matching PDF Page 7 -->
  <div class="results-kpi-row">

    <div class="kpi-card highlight">
      <div class="kpi-score accent">98.08%</div>
      <div class="kpi-meta">
        <span class="kpi-title text-violet">Macro ROC-AUC</span>
        <span class="kpi-sub">Ranking Quality, Not Accuracy</span>
      </div>
    </div>

    <div class="kpi-card">
      <div class="kpi-score" style="color:var(--mint);">0.83</div>
      <div class="kpi-meta">
        <span class="kpi-title">Macro Recall</span>
        <span class="kpi-sub">High Toxic Safety Coverage</span>
      </div>
    </div>

    <div class="kpi-card">
      <div class="kpi-score">0.61</div>
      <div class="kpi-meta">
        <span class="kpi-title">Macro F1-Score</span>
        <span class="kpi-sub">Robust on Rare Imbalance</span>
      </div>
    </div>

  </div>

  <!-- Interactive Gradio App Simulator matching PDF Page 7 Mockup -->
  <div class="gradio-window">

    <div class="gradio-titlebar">
      <div class="traffic-lights">
        <span class="t-dot red"></span>
        <span class="t-dot yellow"></span>
        <span class="t-dot green"></span>
      </div>
      <div class="app-title">Toxic Comment Detector // Gradio · localhost:7860</div>
      <span class="hud-mono" style="font-size:0.68rem; color:var(--mint); font-weight:700;">● MODEL ACTIVE</span>
    </div>

    <div class="gradio-body">

      <!-- Left Input Panel -->
      <div class="gradio-left">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="input-label">TEST COMMENT INPUT:</span>
          <span style="font-family:var(--font-mono); font-size:0.7rem; color:var(--text-muted);">Max 500 chars</span>
        </div>

        <textarea id="nlp-test-input" class="comment-input-box" rows="2">You are an idiot, nobody wants you here.</textarea>

        <!-- Controls: Threshold slider & Analyze button -->
        <div class="controls-row">
          <div class="slider-group">
            <span class="input-label" style="font-size:0.7rem;">Threshold:</span>
            <input type="range" id="nlp-thresh-slider" min="0.10" max="0.90" step="0.05" value="0.50" style="flex:1; accent-color:var(--violet);">
            <span id="nlp-thresh-val" class="slider-val">0.50</span>
          </div>

          <button id="nlp-btn-analyze" class="btn-analyze">Analyze Comment</button>
        </div>

        <!-- Preset Test Samples for Instant Clicking -->
        <div class="sample-chips-row">
          <span style="font-family:var(--font-mono); font-size:0.68rem; color:var(--text-muted);">Presets:</span>
          <span class="sample-chip" data-text="You are an idiot, nobody wants you here.">Sample A (Insult)</span>
          <span class="sample-chip" data-text="Thank you for providing such helpful clarification on this article!">Sample B (Clean)</span>
          <span class="sample-chip" data-text="I will hunt you down and destroy your account you f**king 1diot">Sample C (Threat+Obfuscated)</span>
          <span class="sample-chip" data-text="This isn't bad at all, actually quite impressive work.">Sample D (Negation)</span>
        </div>
      </div>

      <!-- Right Output Verdict & Class Probabilities Panel -->
      <div class="gradio-right">

        <!-- Verdict Banner -->
        <div id="nlp-verdict-box" class="verdict-banner-box">
          <div>
            <div style="font-family:var(--font-mono); font-size:0.65rem; color:var(--text-muted); text-transform:uppercase;">MODEL VERDICT:</div>
            <div id="nlp-verdict-text" class="v-big">TOXIC COMMENT</div>
          </div>
          <div class="v-cleaned">
            <span style="color:var(--text-muted);">Cleaned tokens:</span>
            <strong id="nlp-cleaned-tokens" style="color:#fff; margin-left:0.3rem;">idiot nobody want</strong>
          </div>
        </div>

        <!-- 6 Probability Bars matching PDF Page 7 -->
        <div class="prediction-bars-list">

          <!-- Toxic -->
          <div class="p-bar-row">
            <div class="p-bar-info">
              <span class="p-bar-cls">Toxic</span>
              <span id="pb-val-toxic" class="p-bar-pct high">94.2%</span>
            </div>
            <div class="p-bar-track"><div id="pb-fill-toxic" class="p-bar-fill toxic" style="width:94.2%;"></div></div>
          </div>

          <!-- Severe Toxic -->
          <div class="p-bar-row">
            <div class="p-bar-info">
              <span class="p-bar-cls">Severe Toxic</span>
              <span id="pb-val-severe" class="p-bar-pct">12.1%</span>
            </div>
            <div class="p-bar-track"><div id="pb-fill-severe" class="p-bar-fill" style="width:12.1%;"></div></div>
          </div>

          <!-- Obscene -->
          <div class="p-bar-row">
            <div class="p-bar-info">
              <span class="p-bar-cls">Obscene</span>
              <span id="pb-val-obscene" class="p-bar-pct high">88.4%</span>
            </div>
            <div class="p-bar-track"><div id="pb-fill-obscene" class="p-bar-fill toxic" style="width:88.4%;"></div></div>
          </div>

          <!-- Threat -->
          <div class="p-bar-row">
            <div class="p-bar-info">
              <span class="p-bar-cls">Threat</span>
              <span id="pb-val-threat" class="p-bar-pct">4.2%</span>
            </div>
            <div class="p-bar-track"><div id="pb-fill-threat" class="p-bar-fill" style="width:4.2%;"></div></div>
          </div>

          <!-- Insult -->
          <div class="p-bar-row">
            <div class="p-bar-info">
              <span class="p-bar-cls">Insult</span>
              <span id="pb-val-insult" class="p-bar-pct high">91.7%</span>
            </div>
            <div class="p-bar-track"><div id="pb-fill-insult" class="p-bar-fill toxic" style="width:91.7%;"></div></div>
          </div>

          <!-- Identity Hate -->
          <div class="p-bar-row">
            <div class="p-bar-info">
              <span class="p-bar-cls">Identity Hate</span>
              <span id="pb-val-hate" class="p-bar-pct">6.0%</span>
            </div>
            <div class="p-bar-track"><div id="pb-fill-hate" class="p-bar-fill" style="width:6.0%;"></div></div>
          </div>

        </div>

      </div>

    </div>

  </div>

</div>
`;
  },

  mount() {
    const inputEl = document.getElementById('nlp-test-input');
    const sliderEl = document.getElementById('nlp-thresh-slider');
    const sliderValEl = document.getElementById('nlp-thresh-val');
    const btnAnalyze = document.getElementById('nlp-btn-analyze');
    const verdictBox = document.getElementById('nlp-verdict-box');
    const verdictText = document.getElementById('nlp-verdict-text');
    const cleanedTokensEl = document.getElementById('nlp-cleaned-tokens');

    const bars = {
      toxic: { fill: document.getElementById('pb-fill-toxic'), val: document.getElementById('pb-val-toxic') },
      severe: { fill: document.getElementById('pb-fill-severe'), val: document.getElementById('pb-val-severe') },
      obscene: { fill: document.getElementById('pb-fill-obscene'), val: document.getElementById('pb-val-obscene') },
      threat: { fill: document.getElementById('pb-fill-threat'), val: document.getElementById('pb-val-threat') },
      insult: { fill: document.getElementById('pb-fill-insult'), val: document.getElementById('pb-val-insult') },
      hate: { fill: document.getElementById('pb-fill-hate'), val: document.getElementById('pb-val-hate') },
    };

    const runInference = () => {
      const text = (inputEl.value || '').trim();
      const thresh = parseFloat(sliderEl.value || '0.50');
      sliderValEl.textContent = thresh.toFixed(2);

      let p = { toxic: 0.05, severe: 0.02, obscene: 0.03, threat: 0.01, insult: 0.04, hate: 0.02 };
      let cleaned = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

      const lower = text.toLowerCase();
      if (lower.includes('idiot') || lower.includes('nobody want')) {
        p.toxic = 0.942; p.severe = 0.121; p.obscene = 0.884; p.threat = 0.042; p.insult = 0.917; p.hate = 0.060;
        cleaned = 'idiot nobody want';
      } else if (lower.includes('destroy') || lower.includes('hunt') || lower.includes('f**k')) {
        p.toxic = 0.985; p.severe = 0.742; p.obscene = 0.962; p.threat = 0.895; p.insult = 0.948; p.hate = 0.180;
        cleaned = 'hunt destroy account f k 1diot';
      } else if (lower.includes('thank') || lower.includes('helpful') || lower.includes('impressive')) {
        p.toxic = 0.032; p.severe = 0.005; p.obscene = 0.012; p.threat = 0.002; p.insult = 0.018; p.hate = 0.004;
        cleaned = lower.includes('thank') ? 'thank provide helpful clarification article' : 'not bad actually quite impressive work';
      } else {
        // generic evaluation
        let countBad = (lower.match(/(stupid|dumb|hate|kill|ugly|trash|loser|bad)/g) || []).length;
        if (countBad > 0) {
          p.toxic = Math.min(0.95, 0.4 + countBad * 0.25);
          p.insult = Math.min(0.92, 0.35 + countBad * 0.25);
          p.obscene = Math.min(0.85, 0.2 + countBad * 0.2);
        }
      }

      cleanedTokensEl.textContent = cleaned || '(empty)';

      const isToxicOverall = p.toxic >= thresh || p.insult >= thresh || p.threat >= thresh || p.obscene >= thresh;

      if (isToxicOverall) {
        verdictBox.style.background = 'rgba(239, 68, 68, 0.12)';
        verdictBox.style.borderColor = 'var(--coral-border)';
        verdictText.textContent = 'TOXIC COMMENT DETECTED';
        verdictText.style.color = 'var(--coral)';
      } else {
        verdictBox.style.background = 'rgba(16, 185, 129, 0.12)';
        verdictBox.style.borderColor = 'var(--mint-border)';
        verdictText.textContent = 'CLEAN / NON-TOXIC';
        verdictText.style.color = 'var(--mint)';
      }

      for (const [k, v] of Object.entries(p)) {
        if (!bars[k]) continue;
        const pct = (v * 100).toFixed(1) + '%';
        bars[k].val.textContent = pct;
        bars[k].fill.style.width = pct;
        if (v >= thresh) {
          bars[k].val.className = 'p-bar-pct high';
          bars[k].fill.className = 'p-bar-fill toxic';
        } else {
          bars[k].val.className = 'p-bar-pct';
          bars[k].fill.className = 'p-bar-fill';
        }
      }
    };

    if (sliderEl) sliderEl.addEventListener('input', runInference);
    if (btnAnalyze) btnAnalyze.addEventListener('click', runInference);

    // Preset clicks
    document.querySelectorAll('.sample-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        inputEl.value = chip.dataset.text;
        runInference();
      });
    });

    runInference();
    return () => {};
  }
};
