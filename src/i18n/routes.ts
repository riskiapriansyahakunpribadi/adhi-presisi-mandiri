/*
PANDUAN EDIT
File: src/i18n/routes.ts
Fungsi: Memetakan seluruh pasangan URL halaman Indonesia dan Inggris agar tombol ganti bahasa dan tag hreflang selalu tepat sasaran.
Boleh diedit: Tambahkan pasangan baru di routePairs bila Anda menambah halaman, layanan, kapabilitas, atau artikel baru.
Jangan diubah: Fungsi normalizePath dan getAlternatePath karena mengendalikan navigasi lintas bahasa.
Cara mengedit: Tambahkan objek baru { id: '/jalur-id/', en: '/en/jalur-en/' } dengan garis miring penutup di akhir.
*/

export type Lang = 'id' | 'en';

export type RouteKey =
  | 'home'
  | 'about'
  | 'services'
  | 'capabilities'
  | 'industries'
  | 'projects'
  | 'insights'
  | 'faq'
  | 'quote';

export const mainRoutes: Record<RouteKey, Record<Lang, string>> = {
  home: { id: '/', en: '/en/' },
  about: { id: '/tentang/', en: '/en/about/' },
  services: { id: '/layanan/', en: '/en/services/' },
  capabilities: { id: '/kapabilitas/', en: '/en/capabilities/' },
  industries: { id: '/industri/', en: '/en/industries/' },
  projects: { id: '/proyek/', en: '/en/projects/' },
  insights: { id: '/wawasan/', en: '/en/insights/' },
  faq: { id: '/faq/', en: '/en/faq/' },
  quote: { id: '/penawaran/', en: '/en/quote/' },
};

export interface RoutePair {
  id: string;
  en: string;
}

// EDIT: Daftar lengkap pasangan URL halaman utama dan detail untuk tombol ganti bahasa dan hreflang.
export const routePairs: RoutePair[] = [
  mainRoutes.home,
  mainRoutes.about,
  mainRoutes.services,
  mainRoutes.capabilities,
  mainRoutes.industries,
  mainRoutes.projects,
  mainRoutes.insights,
  mainRoutes.faq,
  mainRoutes.quote,
  {
    id: '/layanan/desain-engineering/',
    en: '/en/services/design-engineering/',
  },
  {
    id: '/layanan/produksi-permesinan/',
    en: '/en/services/production-machining/',
  },
  {
    id: '/layanan/inspeksi-mutu/',
    en: '/en/services/quality-inspection/',
  },
  {
    id: '/layanan/perawatan-suku-cadang/',
    en: '/en/services/maintenance-spare-parts/',
  },
  {
    id: '/kapabilitas/permesinan-cnc/',
    en: '/en/capabilities/cnc-machining/',
  },
  {
    id: '/kapabilitas/jig-dan-fixture/',
    en: '/en/capabilities/jigs-and-fixtures/',
  },
  {
    id: '/kapabilitas/suku-cadang-mesin/',
    en: '/en/capabilities/machine-spare-parts/',
  },
  {
    id: '/kapabilitas/pembuatan-ulang-komponen/',
    en: '/en/capabilities/reverse-engineering/',
  },
  {
    id: '/wawasan/menyiapkan-gambar-teknik-cnc/',
    en: '/en/insights/preparing-cnc-engineering-drawings/',
  },
  {
    id: '/wawasan/memilih-material-logam-komponen-mesin/',
    en: '/en/insights/selecting-metal-materials-machine-parts/',
  },
  {
    id: '/wawasan/kapan-memilih-reverse-engineering/',
    en: '/en/insights/when-to-choose-reverse-engineering/',
  },
];

// JANGAN UBAH: Menyamakan format path agar pencocokan rute tidak gagal karena garis miring akhir.
export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') {
    return '/';
  }
  const clean = pathname.split('?')[0].split('#')[0];
  return clean.endsWith('/') ? clean : `${clean}/`;
}

// JANGAN UBAH: Mencari path padanan di bahasa tujuan; jatuh ke beranda bahasa tujuan hanya untuk halaman seperti 404.
export function getAlternatePath(currentPathname: string, targetLang: Lang): string {
  const normalized = normalizePath(currentPathname);
  const found = routePairs.find(
    (pair) => pair.id === normalized || pair.en === normalized
  );
  if (found) {
    return found[targetLang];
  }
  return mainRoutes.home[targetLang];
}

// JANGAN UBAH: Mendeteksi bahasa aktif dari URL halaman.
export function getLangFromPath(pathname: string): Lang {
  const normalized = normalizePath(pathname);
  return normalized === '/en/' || normalized.startsWith('/en/') ? 'en' : 'id';
}