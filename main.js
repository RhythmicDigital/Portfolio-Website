/**
 * main.js — Portfolio Renderer & Interactions
 * ─────────────────────────────────────────────────────────────────
 * Reads from PORTFOLIO (data.js) and builds every section of the
 * page dynamically. You should not need to edit this file unless
 * you want to change the structure or add new sections.
 */

/* ── SVG ICON LIBRARY ─────────────────────────────────────────── */
const ICONS = {
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m2 7 10 7 10-7"/>
          </svg>`,

  github: `<svg viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
             0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
             -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
             .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
             -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405
             c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
             0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
             0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
           </svg>`,

  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor">
               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136
               1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85
               3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065
               2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225
               0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24
               24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
             </svg>`,

  resume: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
             <polyline points="14 2 14 8 20 8"/>
             <line x1="16" y1="13" x2="8" y2="13"/>
             <line x1="16" y1="17" x2="8" y2="17"/>
             <polyline points="10 9 9 9 8 9"/>
           </svg>`,

  viewArrow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <rect x="3" y="3" width="7" height="7" rx="1.5"/>
                <rect x="14" y="3" width="7" height="7" rx="1.5"/>
                <rect x="3" y="14" width="7" height="7" rx="1.5"/>
                <rect x="14" y="14" width="7" height="7" rx="1.5"/>
              </svg>`,

  mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
           <rect x="2" y="4" width="20" height="16" rx="2"/>
           <path d="m2 7 10 7 10-7"/>
         </svg>`,

  photoPlaceholder: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <circle cx="40" cy="30" r="18" fill="rgba(0,150,200,0.3)" stroke="rgba(0,200,232,0.5)" stroke-width="2"/>
                       <path d="M10 72 Q10 54 40 54 Q70 54 70 72" fill="rgba(0,150,200,0.25)" stroke="rgba(0,200,232,0.5)" stroke-width="2"/>
                     </svg>`,
};


/* ── HELPERS ──────────────────────────────────────────────────── */

/** Shorthand for document.getElementById */
const $ = (id) => document.getElementById(id);

/** Create an element, set innerHTML, return it */
function el(tag, html = '', attrs = {}) {
  const node = document.createElement(tag);
  if (html) node.innerHTML = html;
  Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  return node;
}

/** Build a section-header row */
function sectionHeader(num, label) {
  return `
    <div class="section-header fade-in">
      <span class="section-num">${num}</span>
      <div class="section-line"></div>
      <h2 class="section-label">${label}</h2>
      <div class="section-line rtl"></div>
    </div>`;
}


/* ── RENDERERS ────────────────────────────────────────────────── */

function renderNav() {
  const { name, initials, email } = PORTFOLIO;
  $('nav-logo').textContent = `${initials}/`;
  $('nav-cta').href = `mailto:${email}`;
}

function renderHero() {
  const { name, title, email } = PORTFOLIO;

  $('hero-first').textContent = name.first;
  $('hero-last').textContent  = name.last;
  $('hero-title').textContent = title;

  $('btn-contact').href = `mailto:${email}`;

  // Photo
  const inner = $('hero-photo-inner');
  if (PORTFOLIO.photo) {
    inner.innerHTML = `<img src="${PORTFOLIO.photo}" alt="${name.first} ${name.last}">`;
  } else {
    inner.innerHTML = `
      <div class="photo-placeholder">
        ${ICONS.photoPlaceholder}
        <span>Replace with<br>your photo</span>
      </div>`;
  }
}

function renderSkills() {
  const grid = $('skills-grid');
  grid.innerHTML = PORTFOLIO.skills.map(({ name, color }) => `
    <div class="skill-pill">
      <div class="skill-dot" style="background:${color}"></div>
      ${name}
    </div>`).join('');
}

function renderAbout() {
  const { bio, stats } = PORTFOLIO;

  $('about-bio').innerHTML = bio
    .map(p => `<p>${p}</p>`)
    .join('');

  $('stats-grid').innerHTML = stats
    .map(({ number, label }) => `
      <div class="stat-card">
        <div class="stat-number">${number}</div>
        <div class="stat-label">${label}</div>
      </div>`)
    .join('');
}

function renderExperience() {
  const list = $('exp-list');
  list.innerHTML = PORTFOLIO.experience.map(job => {
    // Use uploaded image if provided, otherwise show letter avatar
    const logoInner = job.logo
      ? `<img src="${job.logo}" alt="${job.company} logo"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
         <span class="exp-logo-fallback">${job.logoLetter}</span>`
      : `<span class="exp-logo-fallback">${job.logoLetter}</span>`;

    return `
    <div class="exp-card glass ${job.current ? 'current' : 'past'} fade-in">
      <div class="exp-logo ${job.logo ? 'has-image' : job.colorClass}">${logoInner}</div>
      <div>
        <div class="exp-role">${job.role}</div>
        <div class="exp-company">${job.company}</div>
        <div class="exp-meta">
          <span>📅 ${job.period}</span>
          <span>📍 ${job.location}</span>
        </div>
        <p class="exp-desc">${job.description}</p>
        <div class="exp-tags">
          ${job.tags.map(t => `<span class="exp-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>`;
  }).join('');
}

// Fallback gradient per project type, shown when no image is uploaded yet
const PROJECT_FALLBACKS = {
  ml:   { bg: "linear-gradient(135deg, #1a0a3a 0%, #2d1060 50%, #0d1a3a 100%)", icon: "🧠" },
  web:  { bg: "linear-gradient(135deg, #002a3a 0%, #004d6e 50%, #001e30 100%)", icon: "🌐" },
  data: { bg: "linear-gradient(135deg, #0a2a12 0%, #0f4a20 50%, #071a0d 100%)", icon: "📊" },
};

function renderProjects() {
  const grid = $('projects-grid');
  grid.innerHTML = PORTFOLIO.projects.map(p => {
    const fallback = PROJECT_FALLBACKS[p.type] || PROJECT_FALLBACKS.web;

    const thumbnailHTML = p.image
      ? `<img src="${p.image}" alt="${p.name} preview"
             onerror="this.parentElement.innerHTML = thumbnailFallback('${p.type}');">`
      : `<div class="project-thumbnail-placeholder" style="background:${fallback.bg};">
           <span class="project-thumbnail-icon">${fallback.icon}</span>
         </div>`;

    return `
    <div class="project-card glass type-${p.type} fade-in">
      <div class="project-thumbnail">${thumbnailHTML}</div>
      <div class="project-name">${p.name}</div>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag ${t.color}">${t.label}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${p.primaryHref}" class="project-link primary">${p.primaryLabel}</a>
        <a href="${p.githubHref}"  class="project-link secondary">GitHub ↗</a>
      </div>
    </div>`;
  }).join('');
}

// Called by onerror on project thumbnail images
function thumbnailFallback(type) {
  const f = PROJECT_FALLBACKS[type] || PROJECT_FALLBACKS.web;
  return `<div class="project-thumbnail-placeholder" style="background:${f.bg};">
            <span class="project-thumbnail-icon">${f.icon}</span>
          </div>`;
}

function renderContact() {
  const { name, email, contact } = PORTFOLIO;

  $('contact-cta').href = `mailto:${email}`;

  $('contact-links').innerHTML = contact.map(({ icon, label, href, target }) => `
    <a href="${href}" class="contact-link" ${target ? `target="${target}"` : ''}>
      ${ICONS[icon] || ''}
      ${label}
    </a>`).join('');

  $('footer-name').textContent = `${name.first} ${name.last}`;
}


/* ── INTERACTIONS ─────────────────────────────────────────────── */

function initBubbles() {
  const container = $('bubbles');

  // No animation-delay on the element — that causes bubbles to snap into
  // existence at the top before moving. Instead, stagger by deferring the
  // spawnBubble() *call* so each bubble always starts its animation from
  // the bottom immediately when it is added to the DOM.
  function spawnBubble() {
    const b = document.createElement('div');
    b.className = 'bubble';

    const size = 12 + Math.random() * 48;
    const left = 5  + Math.random() * 90;
    const dur  = 14 + Math.random() * 18;

    b.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${left}%`,
      `animation-duration:${dur}s`,
    ].join(';');

    container.appendChild(b);
    // Remove after exactly one full animation cycle so it never abruptly
    // disappears mid-travel; the keyframe fades it out by then anyway.
    setTimeout(() => b.remove(), dur * 1000);
  }

  // Stagger the initial batch across 8 s so the page doesn't flood with
  // bubbles all starting at the bottom simultaneously on load.
  for (let i = 0; i < 18; i++) {
    setTimeout(spawnBubble, Math.random() * 8000);
  }
  setInterval(spawnBubble, 2200);
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.04}s`;
    observer.observe(el);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}


/* ── BOOT ─────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // Render all data-driven sections
  renderNav();
  renderHero();
  renderSkills();
  renderAbout();
  renderExperience();
  renderProjects();
  renderContact();

  // Wire up interactions after DOM is populated
  initBubbles();
  initScrollReveal();
  initSmoothScroll();
});