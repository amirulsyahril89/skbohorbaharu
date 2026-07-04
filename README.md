# Laman Web Sekolah — SK Bohor Baharu (Versi Statik)

Laman web sekolah ringkas — **HTML, CSS, JS biasa sahaja**. Tiada pangkalan data,
tiada `npm install`, tiada proses "build". Buka `index.html` di pelayar dan ia terus jalan.

## Cara Kemaskini Kandungan

Semua kandungan (nama sekolah, alamat, pengumuman) berada dalam **satu fail sahaja**:

```
js/data.js
```

Untuk tambah pengumuman baharu, salin format ini ke dalam kategori yang betul:

```js
umum: [
  {
    title: "Cuti Sekolah Penggal Pertama",
    date: "2026-08-01",
    content: "Sekolah akan bercuti bermula 1 Ogos hingga 10 Ogos 2026.",
  },
],
```

Susunan tarikh tidak penting — laman web automatik papar yang terbaharu dahulu.

**Cara paling mudah:** hantar sahaja mesej kepada saya ("tambah pengumuman ... dalam
kategori ...") dan saya akan kemaskinikan fail `js/data.js` untuk anda, kemudian anda
tinggal `git add`, `git commit`, `git push`.

## Struktur Fail

```
index.html          — struktur halaman
css/style.css        — semua gaya visual (papan kenyataan, warna, fon)
js/data.js            — KANDUNGAN (edit fail ini untuk kemaskini)
js/app.js             — logik paparan (tak perlu diedit)
assets/logo.png       — jata sekolah
```

## Push ke GitHub

```bash
cd sekolah-website-static
git init
git add .
git commit -m "Laman web sekolah - versi statik"
```

Di GitHub.com:
1. Klik **+** → **New repository** → nama `laman-web-sekolah`
2. **Create repository** (jangan tambah README/gitignore)
3. Salin arahan yang diberikan, biasanya:

```bash
git remote add origin https://github.com/USERNAME/laman-web-sekolah.git
git branch -M main
git push -u origin main
```

## Deploy — Dua Pilihan (Kedua-duanya Percuma)

### Pilihan A: GitHub Pages (paling ringkas, tak perlu Vercel)

1. Di repo GitHub anda, pergi ke **Settings → Pages**
2. Di bawah "Build and deployment" → **Source**, pilih **Deploy from a branch**
3. Pilih branch **main**, folder **/ (root)** → **Save**
4. Tunggu 1-2 minit, laman web live di:
   `https://USERNAME.github.io/laman-web-sekolah/`

### Pilihan B: Vercel (jika mahu domain lebih pendek atau nanti nak upgrade ke versi database)

1. [vercel.com](https://vercel.com) → **Add New → Project** → import repo
2. Vercel akan kesan ia sebagai laman statik automatik — tiada tetapan diperlukan
3. Klik **Deploy**

## Kemaskini Selepas Deploy

Setiap kali `js/data.js` diubah dan di-push ke GitHub:
- **GitHub Pages:** kemaskini automatik dalam 1-2 minit
- **Vercel:** deploy semula automatik dalam beberapa saat

## Had Versi Ini

- Tiada borang admin di laman web — semua kemaskini kandungan melalui edit fail + push
- Sesuai untuk satu atau dua orang yang uruskan laman web (contoh: guru penyelaras ICT)
- Jika kelak perlukan ramai guru update terus dari laman web tanpa edit kod, versi
  Next.js + Postgres (yang dibina sebelum ini) lebih sesuai — boleh minta saya sediakan semula bila-bila masa.
