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
set("hero-visa",     CONFIG.visa,         "textContent");

// Avatar alt
const avatar = el("hero-avatar");
if (avatar) avatar.alt = CONFIG.name;

// CTA buttons — fully config-driven
el("hero-cta").innerHTML = `
  <a href="#experience" class="btn btn-primary">View Experience</a>
  <a href="${CONFIG.calendly}" class="btn btn-secondary" target="_blank" rel="noopener">📅 Book a Call</a>
  <a href="${CONFIG.linkedin}" class="btn btn-outline"   target="_blank" rel="noopener">LinkedIn ↗</a>
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
html.setAttribute("data-theme", localStorage.getItem("theme") || "dark");

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

set("about-title", "Building quality into the<br>core, not bolted on at the end.");

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

// Availability card
el("about-open").innerHTML = `<p>💼 ${CONFIG.openTo || CONFIG.availability}</p>`;

// ── Section copy ──────────────────────────────────────────────

set("exp-title",      "8 years. 3 companies.<br>One consistent standard.");
set("projects-title", "Things I've built.");
set("projects-sub",   "Live from GitHub — always up to date.", "textContent");
set("contact-title",  "Let's talk.");
set("contact-sub",    "Whether you have a role in mind, want to collaborate, or just want to talk engineering — I'm always open to a conversation.", "textContent");

// Contact actions
el("contact-actions").innerHTML = `
  <a href="${CONFIG.calendly}" class="btn btn-primary btn-lg" target="_blank" rel="noopener">📅 Book a 30-min call</a>
  <a href="${CONFIG.linkedin}" class="btn btn-outline btn-lg"  target="_blank" rel="noopener">LinkedIn ↗</a>
  <a href="${CONFIG.github}"   class="btn btn-outline btn-lg"  target="_blank" rel="noopener">GitHub ↗</a>
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

// ── Recognition strip ─────────────────────────────────────────

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

// ── Activate reveal animations ────────────────────────────────
// Done last — after all content is in the DOM — so nothing is
// invisible before JS has had a chance to inject content.

requestAnimationFrame(() => {
  document.documentElement.classList.add("js-ready");
  document.querySelectorAll(".reveal").forEach(observe);
});
