/*
PANDUAN EDIT
File: astro.config.mjs
Fungsi: Mengatur cara Astro membangun situs statis, sitemap, bahasa, dan berkas CSS.
Boleh diedit: Nilai "site" ketika domain akhir sudah aktif.
Jangan diubah: Bagian "output", "trailingSlash", "build", dan "i18n" agar tautan dan header keamanan tetap selaras.
Cara mengedit: Ganti teks di variabel SITE_URL dengan alamat domain penuh diawali https://.
*/

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// EDIT: Ganti dengan alamat domain akhir Anda sebelum deploy ke Cloudflare Pages.
const SITE_URL = 'https://isi-domain-anda.example';

// JANGAN UBAH: inlineStylesheets 'never' memastikan seluruh CSS dimuat sebagai file eksternal agar CSP style-src 'self' bekerja tanpa celah.
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'never',
  },
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'id',
        locales: {
          id: 'id-ID',
          en: 'en-US',
        },
      },
    }),
  ],
});