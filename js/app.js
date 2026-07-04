// ============================================================
// LOGIK PAPARAN LAMAN WEB — tidak perlu diedit untuk kemaskini
// kandungan biasa. Edit js/data.js sahaja untuk tambah pengumuman.
// ============================================================

const CATEGORIES = [
  {
    key: "umum",
    label: "Umum",
    color: "var(--umum)",
    tint: "var(--umum-tint)",
    desc: "Maklumat am, pengumuman rasmi dan berita terkini sekolah.",
  },
  {
    key: "kurikulum",
    label: "Kurikulum",
    color: "var(--kurikulum)",
    tint: "var(--kurikulum-tint)",
    desc: "Jadual peperiksaan, keputusan akademik dan aktiviti pengajaran.",
  },
  {
    key: "kokurikulum",
    label: "Kokurikulum",
    color: "var(--kokurikulum)",
    tint: "var(--kokurikulum-tint)",
    desc: "Kelab, persatuan, sukan dan aktiviti luar bilik darjah.",
  },
  {
    key: "hem",
    label: "Hal Ehwal Murid",
    color: "var(--hem)",
    tint: "var(--hem-tint)",
    desc: "Disiplin, kebajikan, biasiswa dan hal berkaitan murid.",
  },
];

const ICONS = {
  mapPin:
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone:
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>',
  mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  link: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
  megaphone:
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
};

let activeTab = "umum";

function fmtDate(iso) {
  try {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("ms-MY", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
}

function renderHeader() {
  const info = SCHOOL_INFO;
  document.getElementById("brand-name").textContent = info.name || "Nama Sekolah Anda";
  document.getElementById("brand-motto").textContent = info.motto || "Laman Web Rasmi Sekolah";

  const tabsEl = document.getElementById("tabs");
  tabsEl.innerHTML = "";
  CATEGORIES.forEach((c) => {
    const btn = document.createElement("button");
    btn.className = "tab" + (c.key === activeTab ? " active" : "");
    btn.textContent = c.label;
    if (c.key === activeTab) btn.style.background = c.color;
    btn.addEventListener("click", () => {
      activeTab = c.key;
      renderHeader();
      renderContent();
    });
    tabsEl.appendChild(btn);
  });
}

function renderContent() {
  const cat = CATEGORIES.find((c) => c.key === activeTab);
  const posts = (POSTS[activeTab] || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));

  const el = document.getElementById("content-inner");
  el.innerHTML = "";

  const labelDiv = document.createElement("div");
  labelDiv.className = "cat-label";
  labelDiv.style.color = cat.color;
  labelDiv.textContent = "Kategori";
  el.appendChild(labelDiv);

  const title = document.createElement("h2");
  title.className = "cat-title";
  title.textContent = cat.label;
  el.appendChild(title);

  const desc = document.createElement("p");
  desc.className = "cat-desc";
  desc.textContent = cat.desc;
  el.appendChild(desc);

  if (posts.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.style.borderColor = cat.color;
    empty.innerHTML = `<div class="icon-circle" style="background:${cat.tint};color:${cat.color}">${ICONS.megaphone}</div><p>Belum ada pengumuman di sini. Sila semak semula kemudian.</p>`;
    el.appendChild(empty);
    return;
  }

  const grid = document.createElement("div");
  grid.className = "grid";

  posts.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <span class="date-pill" style="background:${cat.tint};color:${cat.color}">${fmtDate(p.date)}</span>
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.content)}</p>
    `;
    grid.appendChild(card);
  });

  el.appendChild(grid);
}

function renderFooter() {
  const info = SCHOOL_INFO;
  const grid = document.getElementById("footer-grid");
  grid.innerHTML = `
    <div class="footer-item">${ICONS.mapPin}<span>${escapeHtml(info.address) || "Alamat sekolah belum dikemaskini"}</span></div>
    <div class="footer-item">${ICONS.phone}<span>${escapeHtml(info.phone) || "Telefon belum dikemaskini"}</span></div>
    <div class="footer-item">${ICONS.mail}<span>${escapeHtml(info.email) || "E-mel belum dikemaskini"}</span></div>
    <div class="footer-item">${ICONS.link}${
      info.facebook
        ? `<a href="https://${info.facebook.replace(/^https?:\/\//, "")}" target="_blank" rel="noopener noreferrer">${escapeHtml(info.facebook)}</a>`
        : "<span>Facebook belum dikemaskini</span>"
    }</div>
  `;
  document.getElementById("footer-bottom").textContent =
    `© ${new Date().getFullYear()} ${info.name || "Nama Sekolah Anda"}` +
    (info.code ? ` · Kod Sekolah: ${info.code}` : "");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderContent();
  renderFooter();
});
