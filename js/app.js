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
    btn.addEventListener("click", () => {
      activeTab = c.key;
      renderHeader();
      renderContent();
    });
    tabsEl.appendChild(btn);
  });
}

function buildProfileBlock() {
  const p = SCHOOL_PROFILE;
  const wrap = document.createElement("div");

  wrap.innerHTML = `
    <div class="section-block">
      <p class="intro-text">${escapeHtml(p.intro).replace(/\n/g, "<br>")}</p>
      ${SCHOOL_INFO.tagline ? `<div class="tagline-banner">"${escapeHtml(SCHOOL_INFO.tagline)}"</div>` : ""}
    </div>

    <div class="section-block">
      <h3 class="section-title">Maklumat Sekolah</h3>
      <div class="table-scroll">
        <table class="info-table"><tbody>
          ${p.stats.map(([k, v]) => `<tr><td>${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`).join("")}
        </tbody></table>
      </div>
    </div>

    <div class="section-block">
      <h3 class="section-title">Sejarah Ringkas</h3>
      <div class="timeline">
        ${p.history
          .map(
            (h) => `
          <div class="timeline-item">
            <div class="timeline-year">${escapeHtml(h.year)}</div>
            <div class="timeline-event">${escapeHtml(h.event)}</div>
          </div>`
          )
          .join("")}
      </div>
    </div>

    <div class="section-block">
      <h3 class="section-title">Barisan Pentadbiran</h3>
      <div class="staff-grid">
        ${p.staff
          .map((s) => {
            const initials = s.name
              .replace(/^(En|Pn|Dr|Tuan|Puan)\s+/i, "")
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();
            const avatar = s.photo
              ? `<img class="staff-avatar" src="${s.photo}" alt="${escapeHtml(s.name)}" onerror="this.outerHTML='<div class=&quot;staff-avatar&quot;>${initials}</div>'" />`
              : `<div class="staff-avatar">${initials}</div>`;
            return `
          <div class="staff-card">
            ${avatar}
            <div class="staff-role">${escapeHtml(s.role)}</div>
            <div class="staff-name">${escapeHtml(s.name)}</div>
          </div>`;
          })
          .join("")}
      </div>
    </div>

    <div class="section-block">
      <h3 class="section-title">Enrolmen Murid</h3>
      ${buildEnrolTable(p.enrolment)}
    </div>
  `;
  return wrap;
}

function buildEnrolTable(enrolment) {
  const isPra = (tahap) => tahap.toLowerCase().includes("pra");
  const perdana = enrolment.filter((r) => !isPra(r.tahap));
  const pra = enrolment.filter((r) => isPra(r.tahap));
  const sum = (arr, key) => arr.reduce((a, r) => a + r[key], 0);

  const totalL = sum(enrolment, "lelaki");
  const totalP = sum(enrolment, "perempuan");
  const totalPerdana = sum(perdana, "lelaki") + sum(perdana, "perempuan");
  const totalPra = sum(pra, "lelaki") + sum(pra, "perempuan");

  const rows = enrolment
    .map(
      (r) => `
      <tr>
        <td>${escapeHtml(r.tahap)}</td>
        <td>${r.lelaki}</td>
        <td>${r.perempuan}</td>
        <td><strong>${r.lelaki + r.perempuan}</strong></td>
      </tr>`
    )
    .join("");

  return `
    <div class="table-scroll">
      <table class="enrol-table">
        <thead>
          <tr><th>Tahap</th><th>Lelaki</th><th>Perempuan</th><th>Jumlah</th></tr>
        </thead>
        <tbody>
          ${rows}
          <tr class="total">
            <td>Jumlah Keseluruhan</td>
            <td>${totalL}</td>
            <td>${totalP}</td>
            <td>${totalL + totalP}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="enrol-note">${totalPerdana} orang Perdana (Tahun 1–6) + ${totalPra} orang Prasekolah</p>
  `;
}

function buildAchievementsBlock() {
  const wrap = document.createElement("div");
  wrap.className = "section-block";
  wrap.innerHTML = `
    <h3 class="section-title">Pencapaian Sekolah</h3>
    <div class="achv-list">
      ${ACHIEVEMENTS.map(
        (a) => `
        <div class="achv-item">
          <div class="achv-item-title">${escapeHtml(a.title)}</div>
          <span class="achv-badge">${escapeHtml(a.result)}</span>
        </div>`
      ).join("")}
    </div>
  `;
  return wrap;
}

function buildRecognitionBlock() {
  const wrap = document.createElement("div");
  wrap.className = "section-block";
  wrap.innerHTML = `
    <h3 class="section-title">Pengiktirafan Guru</h3>
    <div class="rec-list">
      ${RECOGNITION.map(
        (r) => `
        <div class="rec-item">
          <div>
            <div class="rec-item-title">${escapeHtml(r.title)}</div>
            <div class="rec-item-org">${escapeHtml(r.org)}</div>
          </div>
        </div>`
      ).join("")}
    </div>
  `;
  return wrap;
}

function renderContent() {
  const cat = CATEGORIES.find((c) => c.key === activeTab);
  const posts = (POSTS[activeTab] || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  const hasProfileContent = ["umum", "kokurikulum", "kurikulum"].includes(activeTab);

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

  if (activeTab === "umum") el.appendChild(buildProfileBlock());
  if (activeTab === "kokurikulum") el.appendChild(buildAchievementsBlock());
  if (activeTab === "kurikulum") el.appendChild(buildRecognitionBlock());

  if (hasProfileContent) {
    const postsTitle = document.createElement("h3");
    postsTitle.className = "section-title";
    postsTitle.textContent = "Pengumuman Terkini";
    el.appendChild(postsTitle);
  }

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
