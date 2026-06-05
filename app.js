// ── Helpers ───────────────────────────────────────────────────

const el  = id => document.getElementById(id);
const set = (id, html, prop = "innerHTML") => { const e = el(id); if (e) e[prop] = html; };

// ── Meta / SEO ────────────────────────────────────────────────

document.title = `${CONFIG.name} — ${CONFIG.title}`;
document.querySelector("#page-title").textContent = `${CONFIG.name} — ${CONFIG.title}`;
document.querySelector("#page-desc").content      = CONFIG.tagline;

// ── Nav initials ──────────────────────────────────────────────

set("nav-initials", CONFIG.name.split(" ").map(w => w[0]).join(""), "textContent");

// ── Hero ──────────────────────────────────────────────────────

set("hero-eyebrow",  CONFIG.availability, "textContent");
set("hero-title",    CONFIG.title,        "textContent");
set("hero-tagline",  CONFIG.tagline,      "textContent");
set("hero-location", "📍 " + CONFIG.location, "textContent");
set("hero-visa", CONFIG.visa, "textContent");
// Hide visa badge and separator if empty
if (!CONFIG.visa) {
  const badge = el("hero-visa");
  const sep   = document.querySelector(".meta-sep");
  if (badge) badge.style.display = "none";
  if (sep)   sep.style.display   = "none";
}

// Avatar alt
const avatar = el("hero-avatar");
if (avatar) avatar.alt = CONFIG.name;

// CTA buttons — fully config-driven
el("hero-cta").innerHTML = `
  <a href="#experience" class="btn btn-primary">View Experience</a>
  <a href="${CONFIG.calendly}" class="btn btn-secondary" target="_blank" rel="noopener">📅 Book a Call</a>
  <a href="${CONFIG.linkedin}" class="btn btn-outline"   target="_blank" rel="noopener">LinkedIn ↗</a>
  <button class="btn btn-cv" id="download-cv">⬇ Download CV</button>
`;

// ── Typing animation ──────────────────────────────────────────

function typeText(targetEl, text, speed = 70) {
  let i = 0;
  targetEl.textContent = "";
  const tick = () => {
    targetEl.textContent += text[i++];
    if (i < text.length) setTimeout(tick, speed);
  };
  tick();
}

typeText(el("hero-name"), CONFIG.name);

// ── Theme toggle ──────────────────────────────────────────────

const html = document.documentElement;
html.setAttribute("data-theme", localStorage.getItem("theme") || "light");

el("themeToggle").addEventListener("click", () => {
  const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// ── Scroll reveal ─────────────────────────────────────────────
// js-ready class activates reveal CSS — only set after all content
// is injected so nothing flashes invisible then reappears.

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

const observe = node => observer.observe(node);

// ── Stats strip ───────────────────────────────────────────────

const statsStrip = el("stats-strip");
CONFIG.stats.forEach(stat => {
  const card = document.createElement("div");
  card.className = "stat-card";
  card.style.setProperty("--stat-color", stat.color || "var(--accent)");
  card.innerHTML = `
    <div class="stat-value">${stat.value}</div>
    <div class="stat-label">${stat.label}</div>
  `;
  statsStrip.appendChild(card);
});

// ── AI Focus Card ─────────────────────────────────────────────

el("ai-card").innerHTML = `
  <div class="ai-card-icon">
    <img src="ai-icon.svg" alt="Neural network" width="80" height="80" />
  </div>
  <div>
    <div class="ai-card-label">${CONFIG.aiCard.label}</div>
    <div class="ai-card-heading">${CONFIG.aiCard.heading}</div>
    <div class="ai-card-body">${CONFIG.aiCard.body}</div>
  </div>
`;

// ── About section titles ──────────────────────────────────────

set("about-title", CONFIG.sectionTitles.about);

// Bio
const bioEl = el("about-bio");
CONFIG.bio.forEach(p => {
  const node = document.createElement("p");
  node.innerHTML = p;
  bioEl.appendChild(node);
});

// Grouped skills
const groupsEl = el("skills-groups");
CONFIG.skillGroups.forEach(group => {
  const wrap = document.createElement("div");
  wrap.className = "skill-group";
  wrap.innerHTML = `
    <div class="skill-group-label" style="color:${group.color}">
      <span class="skill-group-dot" style="background:${group.color}"></span>
      ${group.label}
    </div>`;
  const tags = document.createElement("div");
  tags.className = "skills";
  group.skills.forEach(skill => {
    const tag = document.createElement("span");
    tag.className = "skill-tag";
    tag.textContent = skill;
    tag.style.setProperty("--tag-color", group.color);
    tags.appendChild(tag);
  });
  wrap.appendChild(tags);
  groupsEl.appendChild(wrap);
});

// Quote
if (CONFIG.quote) {
  const q = document.createElement("blockquote");
  q.className = "about-quote";
  q.textContent = CONFIG.quote;
  bioEl.appendChild(q);
}

// Availability card
const availParts = (CONFIG.openTo || CONFIG.availability).split('·').map(s => s.trim());
el("about-open").innerHTML = `
  <div class="about-open-label">Currently Available</div>
  <div class="about-open-badges">
    ${availParts.map(p => `<span class="about-open-badge">${p}</span>`).join('')}
  </div>
`;

// ── Section copy ──────────────────────────────────────────────

set("exp-title",      CONFIG.sectionTitles.experience);
set("projects-title", CONFIG.sectionTitles.projects);
set("projects-sub",   CONFIG.sectionTitles.projectsSub, "textContent");
set("contact-title",  CONFIG.sectionTitles.contact);
set("contact-sub",    CONFIG.sectionTitles.contactSub, "textContent");

// Contact actions
const ICONS = {
  calendly: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="12" cy="15" r="2"/></svg>`,
  email:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  github:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>`,
};

el("contact-actions").innerHTML = `
  <a href="${CONFIG.calendly}" class="contact-link" style="--card-color:#7c3aed;--card-color-light:#7c3aed22" target="_blank" rel="noopener">
    <span class="contact-link-icon">${ICONS.calendly}</span>
    <span class="contact-link-label">Book a Call</span>
  </a>
  <a href="mailto:${CONFIG.email}" class="contact-link" style="--card-color:#2563eb;--card-color-light:#2563eb22">
    <span class="contact-link-icon">${ICONS.email}</span>
    <span class="contact-link-label">Email</span>
  </a>
  <a href="${CONFIG.linkedin}" class="contact-link" style="--card-color:#0077b5;--card-color-light:#0077b522" target="_blank" rel="noopener">
    <span class="contact-link-icon">${ICONS.linkedin}</span>
    <span class="contact-link-label">LinkedIn</span>
  </a>
  <a href="${CONFIG.github}" class="contact-link" style="--card-color:#3fb950;--card-color-light:#3fb95022" target="_blank" rel="noopener">
    <span class="contact-link-icon">${ICONS.github}</span>
    <span class="contact-link-label">GitHub</span>
  </a>
`;

// Footer
set("footer-text", `${CONFIG.name} · ${new Date().getFullYear()}`, "textContent");

// ── Experience timeline ───────────────────────────────────────

const timeline = el("timeline");
CONFIG.experience.forEach((job, i) => {
  const item = document.createElement("div");
  item.className = `timeline-item reveal reveal-delay-${Math.min(i + 1, 4)}`;
  item.innerHTML = `
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <div class="timeline-header">
        <span class="timeline-company">${job.company}</span>
        <span class="timeline-period">${job.start} — ${job.end}</span>
      </div>
      <div class="timeline-meta">
        <span class="timeline-role">${job.role}</span>
        <span class="timeline-location">📍 ${job.location}</span>
      </div>
      ${job.summary ? `<p class="timeline-summary">${job.summary}</p>` : ""}
      <ul class="timeline-highlights">
        ${job.highlights.map(h => `<li>${h}</li>`).join("")}
      </ul>
    </div>
  `;
  timeline.appendChild(item);
  observe(item);
});

// ── Certifications ────────────────────────────────────────────

set("certs-title", CONFIG.sectionTitles.certs);

const certsGrid = el("certs-grid");
CONFIG.certifications.forEach((c, i) => {
  const card = document.createElement("div");
  card.className = `cert-card reveal reveal-delay-${Math.min(i + 1, 4)}`;
  card.innerHTML = `
    <div class="cert-icon">${c.icon}</div>
    <div class="cert-body">
      <div class="cert-name">${c.name}</div>
      <div class="cert-meta">${c.issuer} · ${c.year}</div>
    </div>
    ${c.link ? `<a class="cert-verify" href="${c.link}" target="_blank" rel="noopener">Verify ↗</a>` : ""}
  `;
  certsGrid.appendChild(card);
  observe(card);
});

// ── Recognition strip ─────────────────────────────────────────

set("recognition-title", CONFIG.sectionTitles.recognition);

const strip = el("recognition-strip");
CONFIG.recognition.forEach((r, i) => {
  const card = document.createElement("div");
  card.className = `recognition-card reveal reveal-delay-${Math.min(i + 1, 4)}`;
  card.innerHTML = `
    <div class="recognition-icon">${r.icon}</div>
    <div>
      <div class="recognition-award">${r.award}</div>
      <div class="recognition-meta">${r.org} · ${r.year}${r.note ? ` · ${r.note}` : ""}</div>
    </div>
  `;
  strip.appendChild(card);
  observe(card);
});

// ── GitHub repos ──────────────────────────────────────────────

const GITHUB_USER = CONFIG.github.split("/").pop();
const grid = el("repos-grid");

const LANG_COLOURS = {
  Python: "#3572A5", Java: "#b07219", JavaScript: "#f1e05a",
  TypeScript: "#2b7489", Shell: "#89e051", HTML: "#e34c26", CSS: "#563d7c",
};

async function loadRepos() {
  try {
    let repos = [];
    if (CONFIG.pinnedRepos?.length) {
      repos = (await Promise.all(
        CONFIG.pinnedRepos.map(name =>
          fetch(`https://api.github.com/repos/${GITHUB_USER}/${name}`)
            .then(r => r.ok ? r.json() : null)
        )
      )).filter(Boolean);
    } else {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6&type=public`
      );
      repos = await res.json();
    }

    grid.innerHTML = "";
    repos.forEach((repo, i) => {
      const card = document.createElement("a");
      card.className = `repo-card reveal reveal-delay-${Math.min(i + 1, 4)}`;
      card.href      = repo.html_url;
      card.target    = "_blank";
      card.rel       = "noopener";

      const langColour = LANG_COLOURS[repo.language] || "#6b7280";
      const topics = (repo.topics || []).slice(0, 3)
        .map(t => `<span class="repo-topic">${t}</span>`).join("");

      card.innerHTML = `
        <div class="repo-card-header">
          <span class="repo-icon">⬡</span>
          <span class="repo-stars">★ ${repo.stargazers_count}</span>
        </div>
        <div class="repo-name">${repo.name}</div>
        <div class="repo-desc">${repo.description || "No description provided."}</div>
        <div class="repo-footer">
          ${repo.language ? `<span class="repo-lang">
            <span class="lang-dot" style="background:${langColour}"></span>
            ${repo.language}</span>` : ""}
          ${topics}
        </div>
      `;
      grid.appendChild(card);
      observe(card);
    });
  } catch {
    grid.innerHTML = `<p class="repo-loading">Could not load repositories.</p>`;
  }
}

loadRepos();

// ── CV Download ───────────────────────────────────────────────

function buildCVHTML() {
  const strip = html => { const d = document.createElement("div"); d.innerHTML = html; return d.textContent || ""; };

  const skillsHTML = CONFIG.skillGroups.map(g => `
    <tr>
      <td class="cv-skill-cat">${g.label}</td>
      <td>${g.skills.join(", ")}</td>
    </tr>`).join("");

  const experienceHTML = CONFIG.experience.map(job => `
    <div class="cv-job">
      <div class="cv-job-header">
        <span class="cv-job-title">${job.role}</span>
        <span class="cv-job-date">${job.start} – ${job.end}</span>
      </div>
      <div class="cv-job-company">${job.company} — ${job.location}</div>
      <ul>${job.highlights.map(h => `<li>${strip(h)}</li>`).join("")}</ul>
    </div>`).join("");

  const certsHTML = CONFIG.certifications.map(c =>
    `<tr><td class="cv-skill-cat">${c.issuer}</td><td>${c.name} (${c.year})</td></tr>`).join("");

  const awardsHTML = CONFIG.recognition.map(r =>
    `<li><strong>${r.award}</strong> — ${r.org}, ${r.year}${r.note ? ". " + r.note : ""}</li>`).join("");

  return `<div id="cv-doc">
    <div class="cv-header">
      <h1>${CONFIG.name.toUpperCase()}</h1>
      <div class="cv-subtitle">${CONFIG.title}</div>
      <div class="cv-contact">${CONFIG.location} &nbsp;|&nbsp; ${CONFIG.email} &nbsp;|&nbsp; linkedin.com/in/ankit-singh-37a11ba5 &nbsp;|&nbsp; github.com/ankitsingh7392</div>
    </div>
    <div class="cv-section"><h2>Professional Summary</h2><p>${strip(CONFIG.bio[0])}</p></div>
    <div class="cv-section"><h2>Core Technical Skills</h2><table class="cv-skills">${skillsHTML}</table></div>
    <div class="cv-section"><h2>Work Experience</h2>${experienceHTML}</div>
    <div class="cv-section"><h2>Certifications</h2><table class="cv-skills">${certsHTML}</table></div>
    <div class="cv-section"><h2>Recognition</h2><ul>${awardsHTML}</ul></div>
  </div>`;
}

el("download-cv").addEventListener("click", () => {
  const win = window.open("", "_blank");
  win.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${CONFIG.name} — CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', Arial, sans-serif; font-size: 11px; color: #111; background: #fff; }
    #cv-doc { padding: 28px 40px; max-width: 794px; margin: 0 auto; word-wrap: break-word; }

    .cv-header { text-align: center; padding-bottom: 10px; margin-bottom: 14px; border-bottom: 1.5px solid #111; }
    .cv-header h1 { font-size: 22px; font-weight: 700; letter-spacing: 2.5px; font-family: 'Plus Jakarta Sans', Arial, sans-serif; margin-bottom: 3px; }
    .cv-subtitle { font-size: 11.5px; color: #2563eb; font-weight: 600; margin-bottom: 4px; }
    .cv-contact { font-size: 10px; color: #444; }

    .cv-section { margin-bottom: 13px; }
    .cv-section h2 { font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #2563eb; border-bottom: 1px solid #2563eb; padding-bottom: 2px; margin-bottom: 7px; font-family: 'Plus Jakarta Sans', Arial, sans-serif; }
    .cv-section > p { color: #222; text-align: justify; line-height: 1.5; }

    table.cv-skills { width: 100%; border-collapse: collapse; }
    table.cv-skills td { padding: 2px 8px 2px 0; font-size: 10.5px; vertical-align: top; line-height: 1.45; }
    .cv-skill-cat { font-weight: 700; width: 26%; white-space: nowrap; color: #111; }

    .cv-job { margin-bottom: 11px; }
    .cv-job-header { display: flex; justify-content: space-between; align-items: baseline; }
    .cv-job-title { font-weight: 700; font-size: 11px; }
    .cv-job-date { font-size: 10px; color: #555; font-style: italic; white-space: nowrap; margin-left: 8px; }
    .cv-job-company { font-size: 10.5px; color: #444; font-style: italic; margin-bottom: 3px; }
    .cv-job ul, .cv-section ul { padding-left: 14px; margin-top: 3px; }
    .cv-job li, .cv-section li { font-size: 10.5px; color: #222; margin-bottom: 2px; line-height: 1.45; text-align: justify; }

    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      @page { margin: 0; size: A4; }
    }
  </style>
</head>
<body>
  ${buildCVHTML()}
  <script>
    window.addEventListener("load", () => { setTimeout(() => { window.print(); }, 600); });
  </script>
</body>
</html>`);
  win.document.close();
});

// ── Activate reveal animations ────────────────────────────────
// Done last — after all content is in the DOM — so nothing is
// invisible before JS has had a chance to inject content.

requestAnimationFrame(() => {
  document.documentElement.classList.add("js-ready");
  document.querySelectorAll(".reveal").forEach(el => {
    observe(el);
    // Force elements already in the viewport to become visible immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add("visible");
  });
  // Safety net: reveal everything after 800ms regardless
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.visible)").forEach(el => {
      el.classList.add("visible");
    });
  }, 800);
});
