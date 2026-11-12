/**
 * Slide 8: Conclusion & Future Scope (PDF Page 8)
 * Project Conclusion, Deep Learning/Transformer Roadmap, Multilingual Extension, Thank You.
 */

export const slide8 = {
  id: 8,
  title: 'Conclusion & Future Scope',
  badge: '07 // CONCLUSION & ROADMAP',

  render() {
    return `
<div class="slide8-nlp-container">

  <!-- Header -->
  <div class="slide-header">
    <div class="label-pill">
      <span>07 // CONCLUSION &amp; FUTURE ROADMAP</span>
    </div>
    <h2 class="section-title">
      Conclusion &amp; Future Scope
    </h2>
    <p class="section-body">
      Empowering digital platforms with scalable, transparent, and high-coverage automated natural language moderation.
    </p>
  </div>

  <!-- Dual-Column Architecture matching PDF Page 8 -->
  <div class="conclusion-dual-grid">

    <!-- Left Column: Project Conclusion -->
    <div class="c-column-card">
      <div class="c-header">
        <span class="c-icon" style="color:var(--mint);">✓</span>
        <h3 class="c-title">Project Conclusion</h3>
      </div>
      <ul class="c-list">
        <li class="c-item">
          <span class="c-dot"></span>
          <div><strong>End-to-End NLP System:</strong> Successfully engineered an automated detection and multi-label classification pipeline for online toxicity.</div>
        </li>
        <li class="c-item">
          <span class="c-dot"></span>
          <div><strong>Hybrid TF-IDF FeatureUnion:</strong> Combining word-level semantic n-grams with character-level 3–5 n-grams effectively neutralizes spelling obfuscations.</div>
        </li>
        <li class="c-item">
          <span class="c-dot"></span>
          <div><strong>Balanced One-vs-Rest Architecture:</strong> Logistic Regression with <code>class_weight='balanced'</code> achieves exceptional 98.08% ROC-AUC ranking across extreme class imbalances.</div>
        </li>
        <li class="c-item">
          <span class="c-dot"></span>
          <div><strong>Interactive Gradio Deployment:</strong> Real-time browser web app enables dynamic threshold adjustments and instant comment moderation.</div>
        </li>
      </ul>
    </div>

    <!-- Right Column: Future Scope -->
    <div class="c-column-card future">
      <div class="c-header">
        <span class="c-icon accent">🚀</span>
        <h3 class="c-title text-violet">Future Scope</h3>
      </div>
      <ul class="c-list">
        <li class="c-item">
          <span class="c-dot violet"></span>
          <div><strong>Deep Learning &amp; Transformers:</strong> Fine-tune contextual language models like BERT, RoBERTa, and DeBERTa for nuanced sarcasm and pragmatic context.</div>
        </li>
        <li class="c-item">
          <span class="c-dot violet"></span>
          <div><strong>Rare Category Optimization:</strong> Employ focal loss or synthetic oversampling (SMOTE) to boost minority classes like Threat (0.3%) and Identity Hate (0.9%).</div>
        </li>
        <li class="c-item">
          <span class="c-dot violet"></span>
          <div><strong>Multilingual Toxicity Detection:</strong> Expand support for code-mixed multilingual discourse including Hinglish, Hindi, and regional dialects.</div>
        </li>
        <li class="c-item">
          <span class="c-dot violet"></span>
          <div><strong>Real-Time Platform Integration:</strong> Deploy production API webhooks for Discord bots, Reddit auto-moderation, and live video stream chat protection.</div>
        </li>
      </ul>
    </div>

  </div>

  <!-- Bottom Gratitude & Questions Banner matching PDF Page 8 -->
  <div class="gratitude-footer-banner">
    <div class="g-left">
      <span style="font-size:1.3rem;">🎓</span>
      <span class="g-text">Thank You &nbsp;·&nbsp; Questions &amp; Answers</span>
    </div>

    <button id="btn-restart-nlp" class="btn-restart-nlp">↺ Restart Presentation</button>
  </div>

</div>
`;
  },

  mount() {
    const btn = document.getElementById('btn-restart-nlp');
    if (btn) {
      btn.addEventListener('click', () => {
        if (window.presentationNav && typeof window.presentationNav.goTo === 'function') {
          window.presentationNav.goTo(0);
        }
      });
    }
    return () => {};
  }
};
