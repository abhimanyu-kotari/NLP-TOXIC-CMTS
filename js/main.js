/**
 * main.js — Toxic Comment Classification Presentation Engine
 * RV University · B.Sc. Computer Science
 */

import { slide1 } from './slides/slide1.js';
import { slide2 } from './slides/slide2.js';
import { slide3 } from './slides/slide3.js';
import { slide4 } from './slides/slide4.js';
import { slide5 } from './slides/slide5.js';
import { slide6 } from './slides/slide6.js';
import { slide7 } from './slides/slide7.js';
import { slide8 } from './slides/slide8.js';

const SLIDES = [
  slide1, slide2, slide3, slide4,
  slide5, slide6, slide7, slide8,
];
const TOTAL = SLIDES.length;

let currentIndex = 0;
let currentCleanup = null;

// DOM Elements
const stage = document.getElementById('stage');
const slideNumEl = document.getElementById('slide-num');
const slideTotalEl = document.getElementById('slide-total');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const slideDotsContainer = document.getElementById('slide-dots');
const btnOverview = document.getElementById('btn-overview');
const btnOvClose = document.getElementById('btn-ov-close');
const overviewModal = document.getElementById('overview-modal');
const ovGrid = document.getElementById('ov-grid');
const btnFs = document.getElementById('btn-fs');

function buildDeck() {
  stage.innerHTML = '';
  SLIDES.forEach((slide, i) => {
    const el = document.createElement('div');
    el.className = 'slide';
    el.id = `slide-${i + 1}`;
    el.dataset.idx = i;
    try {
      el.innerHTML = slide.render();
    } catch (e) {
      el.innerHTML = `<div style="padding:3rem;color:#ef4444;"><h3>Slide ${i + 1} render failed</h3><p>${e.message}</p></div>`;
      console.error(`Slide ${i + 1} error:`, e);
    }
    stage.appendChild(el);
  });

  // Dots
  slideDotsContainer.innerHTML = '';
  for (let i = 0; i < TOTAL; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.title = SLIDES[i].title || `Slide ${i + 1}`;
    dot.addEventListener('click', () => goTo(i));
    slideDotsContainer.appendChild(dot);
  }

  // Overview Grid
  slideTotalEl.textContent = String(TOTAL).padStart(2, '0');
  ovGrid.innerHTML = '';
  SLIDES.forEach((slide, i) => {
    const card = document.createElement('div');
    card.className = 'ov-card' + (i === 0 ? ' active' : '');
    card.dataset.idx = i;
    card.innerHTML = `
      <div class="ov-n">0${i + 1} // ${slide.badge || 'SECTION'}</div>
      <div class="ov-t">${slide.title || `Slide ${i + 1}`}</div>
    `;
    card.addEventListener('click', () => {
      closeOverview();
      goTo(i);
    });
    ovGrid.appendChild(card);
  });
}

function updateHUD() {
  slideNumEl.textContent = String(currentIndex + 1).padStart(2, '0');
  btnPrev.disabled = currentIndex === 0;
  btnNext.disabled = currentIndex === TOTAL - 1;

  if (currentIndex === TOTAL - 1) {
    btnNext.classList.remove('primary');
  } else {
    btnNext.classList.add('primary');
  }

  // Dots
  const dots = slideDotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
    dot.classList.toggle('done', idx < currentIndex);
  });

  // Overview selection
  const cards = ovGrid.querySelectorAll('.ov-card');
  cards.forEach((c, idx) => {
    c.classList.toggle('active', idx === currentIndex);
  });
}

function goTo(idx, direction = null) {
  if (idx < 0 || idx >= TOTAL || idx === currentIndex) return;

  const prevIdx = currentIndex;
  const prevSlideEl = document.getElementById(`slide-${prevIdx + 1}`);
  const nextSlideEl = document.getElementById(`slide-${idx + 1}`);

  const isForward = direction !== null ? direction === 'next' : idx > prevIdx;

  if (prevSlideEl) {
    prevSlideEl.classList.remove('active');
    prevSlideEl.classList.add(isForward ? 'exit-up' : 'exit-down');
    setTimeout(() => {
      prevSlideEl.classList.remove('exit-up', 'exit-down');
    }, 500);
  }

  if (currentCleanup && typeof currentCleanup === 'function') {
    try { currentCleanup(); } catch (e) { console.warn('Slide cleanup error:', e); }
    currentCleanup = null;
  }

  currentIndex = idx;

  if (nextSlideEl) {
    nextSlideEl.style.transform = isForward ? 'translateY(18px)' : 'translateY(-18px)';
    nextSlideEl.style.opacity = '0';
    requestAnimationFrame(() => {
      nextSlideEl.style.transition = '';
      nextSlideEl.classList.add('active');
      nextSlideEl.style.transform = '';
      nextSlideEl.style.opacity = '';
    });
  }

  updateHUD();
  try {
    history.replaceState(null, '', '#' + (currentIndex + 1));
  } catch (e) {}

  // Mount slide lifecycle
  requestAnimationFrame(() => {
    setTimeout(() => {
      const slide = SLIDES[currentIndex];
      if (slide && typeof slide.mount === 'function') {
        try {
          currentCleanup = slide.mount() || null;
        } catch (e) {
          console.error(`Slide ${currentIndex + 1} mount error:`, e);
        }
      }
    }, 100);
  });
}

function next() { goTo(currentIndex + 1, 'next'); }
function prev() { goTo(currentIndex - 1, 'prev'); }

btnNext.addEventListener('click', next);
btnPrev.addEventListener('click', prev);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowDown':
    case ' ':
      e.preventDefault();
      next();
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      e.preventDefault();
      prev();
      break;
    case 'Home':
      e.preventDefault();
      goTo(0, 'prev');
      break;
    case 'End':
      e.preventDefault();
      goTo(TOTAL - 1, 'next');
      break;
    case 'o':
    case 'O':
      toggleOverview();
      break;
    case 'f':
    case 'F':
      toggleFullscreen();
      break;
    case 'Escape':
      closeOverview();
      break;
  }
});

// Overview modal
function toggleOverview() { overviewModal.classList.toggle('open'); }
function closeOverview() { overviewModal.classList.remove('open'); }

btnOverview.addEventListener('click', toggleOverview);
btnOvClose.addEventListener('click', closeOverview);
overviewModal.querySelector('.ov-backdrop').addEventListener('click', closeOverview);

// Fullscreen
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}
btnFs.addEventListener('click', toggleFullscreen);

// Global presentation controller
window.presentationNav = { goTo, next, prev };

// Startup
function init() {
  buildDeck();

  let startIdx = 0;
  try {
    const hash = window.location.hash.replace('#', '');
    const param = new URLSearchParams(window.location.search).get('slide') || hash;
    const num = parseInt(param, 10);
    if (!isNaN(num) && num >= 1 && num <= TOTAL) {
      startIdx = num - 1;
    }
  } catch (e) {}

  currentIndex = startIdx;
  const startEl = document.getElementById(`slide-${startIdx + 1}`);
  if (startEl) startEl.classList.add('active');
  updateHUD();

  setTimeout(() => {
    if (SLIDES[startIdx] && typeof SLIDES[startIdx].mount === 'function') {
      try {
        currentCleanup = SLIDES[startIdx].mount() || null;
      } catch (e) {
        console.error(`Slide ${startIdx + 1} mount error:`, e);
      }
    }
  }, 120);

  window.addEventListener('hashchange', () => {
    try {
      const hNum = parseInt(window.location.hash.replace('#', ''), 10);
      if (!isNaN(hNum) && hNum >= 1 && hNum <= TOTAL && hNum - 1 !== currentIndex) {
        goTo(hNum - 1);
      }
    } catch (e) {}
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
