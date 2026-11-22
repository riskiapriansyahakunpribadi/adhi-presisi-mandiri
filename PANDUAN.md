# Panduan Pengelolaan Situs PT Adhi Presisi Mandiri

Dokumen ini menjadi panduan lengkap untuk memahami struktur proyek, menyunting konten, mengganti gambar atau kontak, menambah artikel dan proyek baru, hingga menerbitkan situs ke Cloudflare Pages.

## 1. Peta Seluruh Folder dan File

Status setiap file dibagi dua:
- **Boleh diedit:** Aman diubah untuk mengganti teks, data perusahaan, gambar, warna, atau konfigurasi domain dan form.
- **Jangan diubah:** Mengatur struktur proyek, perutean dua bahasa, keamanan, atau aksesibilitas keyboard. Ubah hanya jika Anda memahami dampaknya.

### Akar Proyek

| File | Status | Alasan |
|---|---|---|
| `package.json` | Jangan diubah | Daftar dependensi Astro, font self-host, sitemap, dan perintah bangun. |
| `astro.config.mjs` | Boleh diedit (terbatas) | Ubah hanya nilai `SITE_URL` saat domain akhir sudah siap. |
| `tsconfig.json` | Jangan diubah | Pengaturan pemeriksaan tipe TypeScript mode strict untuk Astro. |
| `PANDUAN.md` | Boleh diedit | Catatan pengelolaan proyek ini. |

### Folder `public/`

| File | Status | Alasan |
|---|---|---|
| `public/_headers` | Boleh diedit (terbatas) | Header keamanan HTTP untuk Cloudflare Pages atau Netlify. Tambahkan domain layanan form pada `connect-src`. |
| `public/robots.txt` | Boleh diedit (terbatas) | Perbarui URL `Sitemap:` agar sama dengan domain akhir Anda. |
| `public/favicon.svg` | Boleh diedit | Ikon monogram A pada tab browser. |

### Folder `src/assets/images/`

| File | Status | Alasan |
|---|---|---|
| `src/assets/images/*` | Boleh diedit | Tempat menaruh file foto lokal (`.jpg`, `.png`, `.webp`, `.avif`). Jika nama filenya sama dengan nama slot di `src/data/images.ts`, file lokal otomatis menggantikan tautan Unsplash. |

### Folder `src/styles/`

| File | Status | Alasan |
|---|---|---|
| `src/styles/tokens.css` | Boleh diedit | Pusat seluruh warna, ukuran huruf, jarak, radius sudut, bayangan, dan durasi animasi. |
| `src/styles/global.css` | Jangan diubah | Reset CSS, `scroll-padding-top`, aturan fokus keyboard `:focus-visible`, `.skip-link`, dan `prefers-reduced-motion`. |

### Folder `src/data/`

| File | Status | Alasan |
|---|---|---|
| `src/data/company.ts` | Boleh diedit | Satu pusat data perusahaan: nama, alamat Cikarang, jam kerja, telepon, email, WhatsApp, media sosial, metrik opsional, dan endpoint form. |
| `src/data/images.ts` | Boleh diedit | Peta seluruh 23 slot gambar, tautan Unsplash, teks alt ID/EN, dan opsi video hero. |
| `src/data/services.ts` | Boleh diedit | Data 4 layanan utama (ID dan EN) untuk Beranda, daftar Layanan, dan 4 halaman detail Layanan. |
| `src/data/capabilities.ts` | Boleh diedit | Data 4 kapabilitas inti (ID dan EN) untuk Beranda, daftar Kapabilitas, dan 4 halaman detail Kapabilitas. |
| `src/data/projects.ts` | Boleh diedit | Data 4 contoh ilustrasi pekerjaan untuk halaman Proyek (ID dan EN). |
| `src/data/insights.ts` | Boleh diedit | Data dan isi lengkap 3 artikel teknis untuk halaman Wawasan dan pratinjau Beranda (ID dan EN). |

### Folder `src/i18n/`

| File | Status | Alasan |
|---|---|---|
| `src/i18n/id.ts` | Boleh diedit | Seluruh teks tampilan bahasa Indonesia beserta definisi tipe `SiteCopy`. |
| `src/i18n/en.ts` | Boleh diedit | Seluruh teks tampilan bahasa Inggris yang mengikuti struktur `SiteCopy`. |
| `src/i18n/routes.ts` | Jangan diubah | Peta padanan URL halaman Indonesia dan Inggris agar tombol ganti bahasa dan tag `hreflang` selalu mengarah ke halaman padanan yang sama. |
| `src/i18n/utils.ts` | Jangan diubah | Fungsi pengambil kamus bahasa aktif dan pembuat URL penuh `canonical`/`hreflang`. |

### Folder `src/scripts/`

| File | Status | Alasan |
|---|---|---|
| `src/scripts/site.ts` | Jangan diubah | Logika header melayang, panel menu HP, tombol `Escape`, animasi gulir, cadangan gambar gagal muat, dan inisialisasi ulang saat pindah halaman Astro. |
| `src/scripts/quote-form.ts` | Jangan diubah | Validasi formulir, prapilihan chip `?need=`, jebakan bot honeypot, dan pengiriman data ke endpoint form. |

### Folder `src/layouts/`

| File | Status | Alasan |
|---|---|---|
| `src/layouts/BaseLayout.astro` | Jangan diubah | Kerangka HTML, pemuatan font `@fontsource`, meta SEO, Open Graph, `hreflang`, data terstruktur Organization, dan `ClientRouter`. |

### Folder `src/components/`

| File | Status | Alasan |
|---|---|---|
| `src/components/Header.astro` | Jangan diubah | Header pil melayang dengan logo monogram A, tombol bahasa ID/EN, dan menu HP layar penuh. |
| `src/components/Footer.astro` | Jangan diubah | Footer situs berisi ajakan penawaran, detail bengkel Cikarang, daftar kapabilitas, dan catatan proyek demonstrasi. |
| `src/components/Button.astro` | Jangan diubah | Komponen tombol utama, sekunder, dan outline dengan efek hover, sentuhan `:active`, dan fokus 3px. |
| `src/components/SectionHeading.astro` | Jangan diubah | Judul bagian konsisten tanpa penomoran atau ornamen tambahan. |
| `src/components/CaliperDivider.astro` | Jangan diubah | Motif grafis garis ukur jangka sorong pembatas antarbagian. |
| `src/components/MediaFrame.astro` | Jangan diubah | Penampil gambar lokal teroptimasi atau gambar Unsplash responsif beserta placeholder grafit cadangan. |
| `src/components/Icon.astro` | Jangan diubah | Kumpulan ikon vektor garis permesinan buatan sendiri. |
| `src/components/Reveal.astro` | Jangan diubah | Komponen pembungkus opsional untuk animasi muncul saat digulir. |
| `src/components/WorkflowRuler.astro` | Jangan diubah | Garis waktu 5 langkah Alur Kerja bergaya penggaris ukur. |
| `src/components/QuoteForm.astro` | Jangan diubah | Struktur formulir penawaran, pilihan chip, kolom honeypot, status pengiriman, dan panel WhatsApp cadangan. |

### Folder `src/templates/`

| File | Status | Alasan |
|---|---|---|
| `src/templates/HomePage.astro` | Jangan diubah | Susunan lengkap halaman Beranda (ID dan EN). |
| `src/templates/AboutPage.astro` | Jangan diubah | Susunan halaman Tentang Kami (ID dan EN). |
| `src/templates/ServicesPage.astro` | Jangan diubah | Susunan daftar Layanan (ID dan EN). |
| `src/templates/ServiceDetailPage.astro` | Jangan diubah | Susunan 4 halaman detail Layanan (ID dan EN). |
| `src/templates/CapabilitiesPage.astro` | Jangan diubah | Susunan daftar Kapabilitas (ID dan EN). |
| `src/templates/CapabilityDetailPage.astro` | Jangan diubah | Susunan 4 halaman detail Kapabilitas (ID dan EN). |
| `src/templates/IndustriesPage.astro` | Jangan diubah | Susunan halaman Industri (ID dan EN). |
| `src/templates/ProjectsPage.astro` | Jangan diubah | Susunan halaman contoh Proyek (ID dan EN). |
| `src/templates/InsightsPage.astro` | Jangan diubah | Susunan daftar artikel Wawasan (ID dan EN). |
| `src/templates/InsightDetailPage.astro` | Jangan diubah | Susunan halaman baca detail artikel (ID dan EN). |
| `src/templates/FaqPage.astro` | Jangan diubah | Susunan halaman FAQ teknis memakai `<details>` native (ID dan EN). |
| `src/templates/QuotePage.astro` | Jangan diubah | Susunan halaman Permintaan Penawaran (ID dan EN). |

### Folder `src/pages/` (ID dan EN)

| Folder / File | Status | Alasan |
|---|---|---|
| `src/pages/*.astro`, `src/pages/layanan/*`, `src/pages/kapabilitas/*`, `src/pages/wawasan/*` | Jangan diubah | Penentu alamat URL bahasa Indonesia dan halaman `404.astro`. |
| `src/pages/en/*.astro`, `src/pages/en/services/*`, `src/pages/en/capabilities/*`, `src/pages/en/insights/*` | Jangan diubah | Penentu alamat URL bahasa Inggris padanan setiap halaman. |

---

## 2. Cara Mengganti Konten, Tampilan, Gambar, dan Endpoint Form

### Mengganti teks dan bahasa
- Buka `src/i18n/id.ts` untuk teks bahasa Indonesia dan `src/i18n/en.ts` untuk teks bahasa Inggris.
- Ubah teks di dalam tanda kutip tanpa mengubah nama kunci objek.
- Untuk teks Layanan, Kapabilitas, Proyek, atau Artikel, edit masing-masing file di folder `src/data/`.

### Mengganti warna, ukuran huruf, atau jarak
- Buka `src/styles/tokens.css`.
- Ganti nilai di kanan tanda titik dua (misalnya `--color-accent`, `--color-bg-dark`, `--color-bg-light`).
- Pastikan kontras teks biasa tetap minimal 4,5:1. Jika mengganti warna aksen oranye, sesuaikan juga `--color-accent-on-light` agar teks aksen di atas latar terang tetap mudah dibaca.

### Mengganti jenis font (tetap self-host)
1. Pasang paket `@fontsource/<nama-font>` melalui terminal, misalnya `npm install @fontsource/ibm-plex-sans`.
2. Ganti baris impor `@fontsource/...` pada bagian atas `src/layouts/BaseLayout.astro` (muat hanya bobot yang dipakai).
3. Perbarui variabel `--font-display` dan `--font-body` pada `src/styles/tokens.css`.

### Mengganti data perusahaan, alamat, kontak, dan WhatsApp
- Buka `src/data/company.ts`.
- Ganti `legalName`, `shortName`, `domain`, `address`, dan `workingHours` sesuai kebutuhan.
- Ganti `phoneDisplay`, `phoneHref` (format `+62...` tanpa spasi), `email`, dan `whatsappNumber` (format angka saja diawali kode negara, contoh `6281234567890`). Begitu nilai tidak lagi diawali `isi_`, tautan telepon, email, dan tombol WhatsApp otomatis aktif.
- Jika suatu saat Anda memiliki data nyata tahun berdiri, jumlah mesin, atau sertifikasi, isi di dalam objek `metrics`; biarkan `null` atau `[]` selama belum ada data nyata.

### Mengganti gambar
Ada dua cara yang sama-sama didukung:
- **Cara 1 (Memakai file lokal sendiri, disarankan untuk portofolio final):** Simpan gambar ke folder `src/assets/images/` dengan nama dasar persis sama seperti nama slot di `src/data/images.ts` (contoh: `hero-utama.jpg` atau `hero-utama.webp`). Astro otomatis memprioritaskan file lokal tersebut dan mengonversinya ke WebP responsif saat build.
- **Cara 2 (Mengganti tautan Unsplash):** Buka `src/data/images.ts`, cari slot yang diinginkan, lalu ganti URL pada properti `remoteUrl`.

### Menghubungkan endpoint form dan mengatur CSP `connect-src`
1. Daftar di layanan form statis pilihan Anda, misalnya **Formspree** (`formspree.io`) atau **Web3Forms** (`web3forms.com`), lalu salin URL endpoint-nya.
2. Buka `src/data/company.ts` dan ganti `endpoint: 'isi_endpoint_form'` dengan URL endpoint tersebut (contoh Formspree: `'https://formspree.io/f/kodeanda'`).
3. Buka `public/_headers` dan tambahkan domain layanan form tersebut pada bagian `connect-src`:
   - Untuk Formspree: `connect-src 'self' https://formspree.io;`
   - Untuk Web3Forms: `connect-src 'self' https://api.web3forms.com;`
4. Simpan kedua file, jalankan `npm run build`, lalu uji pengiriman langsung pada halaman `/penawaran/`.

---

## 3. Cara Menambah Artikel, Proyek, atau Halaman Baru

### Menambah contoh pekerjaan baru di halaman Proyek
1. Buka `src/data/projects.ts`.
2. Salin satu objek contoh pekerjaan di dalam array `projectsData`, ubah `id`, `imageSlot` (pastikan terdaftar di `src/data/images.ts`), dan teks di dalam `content.id` serta `content.en`.
3. Simpan file. Halaman `/proyek/` dan `/en/projects/` otomatis menampilkan kartu baru tersebut.

### Menambah artikel teknis baru di halaman Wawasan
1. Jika memakai gambar baru, daftarkan slot gambarnya terlebih dahulu di `src/data/images.ts`.
2. Buka `src/data/insights.ts` dan tambahkan objek artikel baru dengan `slug.id` dan `slug.en` yang unik serta isi lengkap `sections` untuk ID dan EN.
3. Buka `src/i18n/routes.ts` dan daftarkan pasangan path barunya di array `routePairs`:
   `{ id: '/wawasan/slug-baru-id/', en: '/en/insights/new-slug-en/' }`
4. Simpan file. Astro otomatis membangun halaman statis artikel baru beserta tombol ganti bahasa dan tag `hreflang`.

### Menambah halaman baru di luar daftar saat ini
1. Daftarkan kunci rute barunya di `mainRoutes` dan `routePairs` pada `src/i18n/routes.ts`.
2. Tambahkan teks halaman di `src/i18n/id.ts` (termasuk interface `SiteCopy`) dan `src/i18n/en.ts`.
3. Buat template baru di `src/templates/`, lalu buat dua file halaman tipis di `src/pages/<nama>.astro` (`lang="id"`) dan `src/pages/en/<name>.astro` (`lang="en"`).
4. Jika ingin muncul di menu header, tambahkan entri baru pada `nav.items` di `src/i18n/id.ts` dan `src/i18n/en.ts`.

---

## 4. Cara Menjalankan di Laptop, Membangun, dan Deploy

### Menjalankan di laptop
1. Pastikan Node.js LTS (minimal v20) sudah terpasang (`node -v`).
2. Buka terminal di folder `adhi-presisi-mandiri`.
3. Jalankan `npm install` (cukup sekali di awal atau saat dependensi berubah).
4. Jalankan `npm run dev` dan buka alamat lokal yang muncul di terminal (biasanya `http://localhost:4321/`).

### Memeriksa dan membangun versi produksi
```bash
npx tsc --noEmit
npm run build
npm run preview