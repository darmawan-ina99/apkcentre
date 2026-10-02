// ===== APKCentre - data & interaksi =====
const APPS = [
  // games
  { nama: "Battle Ground Fungame", kategori: "Action", tipe: "game", ikon: "🎮", warna: "#ff6b6b", rating: 4.5, downloads: "50M+", size: "94 MB", versi: "2.1.0", desc: "Shooter battle royale 5v5 dengan peta baru, mode rank, dan event musiman. Grafis halus, cocok untuk HP kentang." },
  { nama: "Speed Drift Racing", kategori: "Racing", tipe: "game", ikon: "🏎️", warna: "#f5a623", rating: 4.3, downloads: "10M+", size: "58 MB", versi: "7.4.2", desc: "Balapan drift arcade dengan 40+ mobil, trek berbeda, dan mode online multiplayer real-time." },
  { nama: "Zuma Blast Classic", kategori: "Puzzle", tipe: "game", ikon: "🔮", warna: "#7c5cff", rating: 4.7, downloads: "5M+", size: "32 MB", versi: "1.9.9", desc: "Game puzzle klasik meledakkan bola warna. Santai, tanpa timer stress, cocok semua umur." },
  { nama: "Farm Idle Tycoon", kategori: "Simulasi", tipe: "game", ikon: "🌾", warna: "#24cc77", rating: 4.4, downloads: "8M+", size: "72 MB", versi: "3.0.1", desc: "Kelola peternakan dan ladang, kumpulkan hasil panen, bangun kerajaan pertanianmu tanpa perlu online terus." },
  { nama: "Ninja Shadow Fight", kategori: "Action", tipe: "game", ikon: "🥷", warna: "#2f3542", rating: 4.2, downloads: "3M+", size: "41 MB", versi: "5.2.0", desc: "Aksi pertarungan ninja dengan kombo skill, bos menantang, dan sistem upgrade senjata." },
  { nama: "Words Master ID", kategori: "Edukasi", tipe: "game", ikon: "📖", warna: "#4d96ff", rating: 4.8, downloads: "2M+", size: "28 MB", versi: "2.3.0", desc: "Tebak kata bahasa Indonesia, asah otak setiap hari, dapatkan hadiah koin harian." },
  // apps
  { nama: "Chat Messenger Pro", kategori: "Komunikasi", tipe: "app", ikon: "💬", warna: "#25d366", rating: 4.6, downloads: "100M+", size: "46 MB", versi: "6.8.1", desc: "Aplikasi chat cepat dengan grup, stiker, panggilan suara dan video, ringan untuk semua HP." },
  { nama: "Photo Editor Studio", kategori: "Fotografi", tipe: "app", ikon: "📸", warna: "#e1306c", rating: 4.4, downloads: "60M+", size: "88 MB", versi: "9.1.3", desc: "Editor foto lengkap: filter pro, hapus background AI, kolase, dan alat retouch sekali klik." },
  { nama: "Video Player Ultra", kategori: "Media", tipe: "app", ikon: "🎬", warna: "#fa541c", rating: 4.5, downloads: "40M+", size: "39 MB", versi: "4.6.0", desc: "Pemutar video semua format, subtitle otomatis, mode pop-up, dan equalizer suara." },
  { nama: "Cleaner Booster RAM", kategori: "Tools", tipe: "app", ikon: "🧹", warna: "#13c2c2", rating: 4.3, downloads: "25M+", size: "21 MB", versi: "3.3.7", desc: "Bersihkan file sampah, percepat RAM, hemat baterai. Satu ketuk langsung bersih." },
  { nama: "File Manager Pro", kategori: "Tools", tipe: "app", ikon: "📁", warna: "#722ed1", rating: 4.2, downloads: "12M+", size: "17 MB", versi: "2.8.4", desc: "Kelola file dengan mudah, kompres & ekstrak ZIP, transfer antar HP tanpa kabel." },
  { nama: "Music Player Neon", kategori: "Media", tipe: "app", ikon: "🎵", warna: "#eb2f96", rating: 4.6, downloads: "18M+", size: "24 MB", versi: "5.0.2", desc: "Pemutar musik dengan tampilan neon, equalizer 10 band, dan timer tidur." },
  { nama: "Browser Turbo Mini", kategori: "Tools", tipe: "app", ikon: "🌐", warna: "#1890ff", rating: 4.1, downloads: "30M+", size: "9 MB", versi: "1.7.0", desc: "Browser ringan super hemat kuota dengan blokir iklan bawaan dan mode data hemat." },
  { nama: "Note Lock Diary", kategori: "Produktivitas", tipe: "app", ikon: "📝", warna: "#52c41a", rating: 4.7, downloads: "6M+", size: "14 MB", versi: "2.2.1", desc: "Catatan harian dengan kunci PIN sidik jari, backup otomatis, dan tema gelap." },
];

const CATEGORIES = ["Action", "Racing", "Puzzle", "Simulasi", "Edukasi", "Komunikasi", "Fotografi", "Media", "Tools", "Produktivitas"];

const rupiahStars = r => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
const ikonEl = (a, big) => `<div class="app-icon" style="background:${a.warna}22;border:1.5px solid ${a.warna}55;">${a.ikon}</div>`;

function renderGrid(elId, list) {
  document.getElementById(elId).innerHTML = list.map((a, i) => `
    <div class="app-card" onclick="bukaDetail(${APPS.indexOf(a)})">
      ${ikonEl(a)}
      <div class="app-name">${a.nama}</div>
      <div class="app-cat">${a.kategori}</div>
      <div class="app-meta"><span class="stars">${rupiahStars(a.rating)}</span><span>${a.rating}</span><span>⬇ ${a.downloads}</span></div>
    </div>`).join("");
}

function renderTop() {
  const top = [...APPS].sort((a, b) => parseFloat(b.downloads) - parseFloat(a.downloads)).slice(0, 7);
  document.getElementById("top-list").innerHTML = top.map((a, i) => `
    <div class="top-row" onclick="bukaDetail(${APPS.indexOf(a)})">
      <div class="top-rank">${i + 1}</div>
      <div class="app-icon" style="width:46px;height:46px;font-size:22px;background:${a.warna}22;border:1.5px solid ${a.warna}55;">${a.ikon}</div>
      <div class="top-info">
        <div class="top-name">${a.nama}</div>
        <div class="top-sub">${a.kategori} • ${a.size} • v${a.versi}</div>
      </div>
      <div class="top-meta" style="text-align:right;margin-right:10px;">
        <div style="font-size:12px;color:var(--muted)">⬇ ${a.downloads}</div>
      </div>
      <button class="dl-btn" onclick="event.stopPropagation();alert('Ini demo — tombol download belum dihubungkan ke file APK.')">Download</button>
    </div>`).join("");
}

function renderChips() {
  document.getElementById("cat-chips").innerHTML = CATEGORIES.map(c =>
    `<a class="chip" href="#" onclick="filterKategori('${c}');return false;">${c}</a>`).join("");
}

function bukaDetail(i) {
  const a = APPS[i];
  document.getElementById("modal-card").innerHTML = `
    ${ikonEl(a, true)}
    <h3>${a.nama}</h3>
    <div class="app-cat">${a.kategori} • v${a.versi}</div>
    <div class="modal-stats">
      <div><b>${a.rating}</b><span>Rating</span></div>
      <div><b>${a.downloads}</b><span>Download</span></div>
      <div><b>${a.size}</b><span>Ukuran</span></div>
    </div>
    <p class="modal-desc">${a.desc}</p>
    <button class="dl-btn" onclick="alert('Ini demo — tombol download belum dihubungkan ke file APK.')">⬇ Download APK (${a.size})</button>
    <button class="modal-close" onclick="tutupDetail()">Tutup</button>`;
  document.getElementById("modal").classList.add("show");
}
function tutupDetail() { document.getElementById("modal").classList.remove("show"); }
document.getElementById("modal").addEventListener("click", e => {
  if (e.target.id === "modal") tutupDetail();
});

function filterKategori(kat) {
  const hasil = APPS.filter(a => a.kategori === kat);
  document.getElementById("grid-apps").innerHTML =
    `<p style="grid-column:1/-1;color:var(--muted)">Hasil filter <b>${kat}</b> (${hasil.length}):</p>` +
    hasil.map((a) => `
      <div class="app-card" onclick="bukaDetail(${APPS.indexOf(a)})">
        ${ikonEl(a)}
        <div class="app-name">${a.nama}</div>
        <div class="app-cat">${a.kategori}</div>
        <div class="app-meta"><span class="stars">${rupiahStars(a.rating)}</span><span>⬇ ${a.downloads}</span></div>
      </div>`).join("");
  document.getElementById("apps").scrollIntoView({ behavior: "smooth" });
}

// search live
document.getElementById("search-input").addEventListener("input", e => {
  const q = e.target.value.toLowerCase().trim();
  if (!q) { renderAll(); return; }
  const hasil = APPS.filter(a => (a.nama + " " + a.kategori).toLowerCase().includes(q));
  document.getElementById("grid-apps").innerHTML = hasil.length
    ? hasil.map(a => `
      <div class="app-card" onclick="bukaDetail(${APPS.indexOf(a)})">
        ${ikonEl(a)}
        <div class="app-name">${a.nama}</div>
        <div class="app-cat">${a.kategori}</div>
        <div class="app-meta"><span class="stars">${rupiahStars(a.rating)}</span><span>⬇ ${a.downloads}</span></div>
      </div>`).join("")
    : `<p style="grid-column:1/-1;color:var(--muted)">Tidak ada hasil untuk "<b>${e.target.value}</b>" 😢</p>`;
  document.getElementById("apps").scrollIntoView({ behavior: "smooth" });
});

function renderAll() {
  renderGrid("grid-games", APPS.filter(a => a.tipe === "game"));
  renderGrid("grid-apps", APPS.filter(a => a.tipe === "app"));
}
renderChips();
renderAll();
renderTop();
