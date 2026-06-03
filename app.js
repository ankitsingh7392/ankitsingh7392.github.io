// ── Bootstrap from config ────────────────────────────────────

document.getElementById("hero-name").textContent      = CONFIG.name;
document.getElementById("hero-title").textContent     = CONFIG.title;
document.getElementById("hero-tagline").textContent   = CONFIG.tagline;
document.getElementById("hero-location").textContent  = "📍 " + CONFIG.location;
document.getElementById("hero-visa").textContent      = CONFIG.visa;
document.getElementById("footer-name").textContent    = `${CONFIG.name} · ${new Date().getFullYear()}`;
document.getElementById("about-open").innerHTML       = `<p>💼 ${CONFIG.openTo}</p>`;

// Bio paragraphs
const bioEl = document.getElementById("about-bio");
CONFIG.bio.forEach(p => {
  const el = document.createElement("p");
  el.innerHTML = p;
  bioEl.appendChild(el);
});

// Skills
const skillsEl = document.getElementById("skills-list");
CONFIG.skills.forEach(skill => {
  const tag = document.createElement("span");
  tag.className = "skill-tag";
  tag.textContent = skill;
  skillsEl.appendChild(tag);
});

// Links
const links = [
  ["cta-book",     CONFIG.calendly],
  ["cta-linkedin", CONFIG.linkedin],
  ["book-btn",     CONFIG.calendly],
  ["linkedin-btn", CONFIG.linkedin],
  ["github-btn",   CONFIG.github],
];
links.forEach(([id, href]) => {
  const el = document.getElementById(id);
  if (el) el.href = href;
});

// ── Theme toggle ─────────────────────────────────────────────

const html   = document.documentElement;
const toggle = document.getElementById("themeToggle");
const saved  = localStorage.getItem("theme") || "light";

html.setAttribute("data-theme", saved);

toggle.addEventListener("click", () => {
  const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// ── Experience timeline ──────────────────────────────────────

const timeline = document.getElementById("timeline");

CONFIG.experience.forEach(job => {
  const item = document.createElement("div");
  item.className = "timeline-item";
  item.innerHTML = `
    <div class="timeline-header">
      <span class="timeline-company">${job.company}</span>
      <span class="timeline-period">${job.start} — ${job.end}</span>
    </div>
    <div class="timeline-meta">
      <span class="timeline-role">${job.role}</span>
      <span class="timeline-location">📍 ${job.location}</span>
    </div>
    <ul class="timeline-highlights">
      ${job.highlights.map(h => `<li>${h}</li>`).join("")}
    </ul>
  `;
  timeline.appendChild(item);
});

// ── GitHub repos ─────────────────────────────────────────────

const GITHUB_USER = CONFIG.github.split("/").pop();
const grid = document.getElementById("repos-grid");

const LANG_COLOURS = {
  Python: "#3572A5", Java: "#b07219", JavaScript: "#f1e05a",
  TypeScript: "#2b7489", Shell: "#89e051", HTML: "#e34c26",
  CSS: "#563d7c",
};

function renderRepos(repos) {
  grid.innerHTML = "";
  if (!repos.length) {
    grid.innerHTML = `<p class="repo-loading">No repositories found.</p>`;
    return;
  }
  repos.forEach(repo => {
    const card = document.createElement("a");
    card.className = "repo-card";
    card.href = repo.html_url;
    card.target = "_blank";
    card.rel = "noopener";

    const langDotColour = LANG_COLOURS[repo.language] || "#6b7280";
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
        ${repo.language ? `
          <span class="repo-lang">
            <span class="lang-dot" style="background:${langDotColour}"></span>
            ${repo.language}
          </span>` : ""}
        ${topics}
      </div>
    `;
    grid.appendChild(card);
  });
}

async function loadRepos() {
  try {
    let repos = [];

    if (CONFIG.pinnedRepos && CONFIG.pinnedRepos.length) {
      // Fetch each named repo individually
      const fetches = CONFIG.pinnedRepos.map(name =>
        fetch(`https://api.github.com/repos/${GITHUB_USER}/${name}`)
          .then(r => r.ok ? r.json() : null)
      );
      repos = (await Promise.all(fetches)).filter(Boolean);
    } else {
      // Fall back to most recently updated public repos
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6&type=public`
      );
      repos = await res.json();
    }

    renderRepos(repos);
  } catch {
    grid.innerHTML = `<p class="repo-loading">Could not load repositories.</p>`;
  }
}

loadRepos();
