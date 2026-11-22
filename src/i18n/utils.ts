/*
PANDUAN EDIT
File: src/i18n/utils.ts
Fungsi: Menyediakan fungsi pembantu untuk mengambil kamus bahasa aktif, membuat tautan halaman, dan membangun URL penuh SEO.
Boleh diedit: Tidak perlu diubah selama bahasa situs tetap Indonesia dan Inggris.
Jangan diubah: Fungsi getCopy, getRoute, dan buildHreflangUrls karena dipakai oleh BaseLayout dan seluruh template halaman.
Cara mengedit: Jika suatu saat menambah bahasa ketiga, tambahkan kamus barunya di objek dictionaries.
*/

import { idCopy, type SiteCopy } from './id';
import { enCopy } from './en';
import {
  getAlternatePath,
  mainRoutes,
  normalizePath,
  type Lang,
  type RouteKey,
} from './routes';

const dictionaries: Record<Lang, SiteCopy> = {
  id: idCopy,
  en: enCopy,
};

// JANGAN UBAH: Mengembalikan seluruh teks sesuai bahasa aktif.
export function getCopy(lang: Lang): SiteCopy {
  return dictionaries[lang];
}

// JANGAN UBAH: Mengambil path halaman utama sesuai kunci rute dan bahasa.
export function getRoute(key: RouteKey, lang: Lang): string {
  return mainRoutes[key][lang];
}

// JANGAN UBAH: Menentukan apakah item navigasi sedang aktif pada halaman yang dibuka.
export function isActiveNav(currentPath: string, navHref: string): boolean {
  const current = normalizePath(currentPath);
  const target = normalizePath(navHref);
  if (target === '/' || target === '/en/') {
    return current === target;
  }
  return current === target || current.startsWith(target);
}

export interface HreflangSet {
  canonical: string;
  idUrl: string;
  enUrl: string;
  xDefaultUrl: string;
}

// JANGAN UBAH: Membangun alamat penuh canonical dan hreflang untuk mesin pencari.
export function buildHreflangUrls(
  siteOrigin: string,
  currentPathname: string
): HreflangSet {
  const cleanOrigin = siteOrigin.replace(/\/+$/, '');
  const currentNormalized = normalizePath(currentPathname);
  const idPath = getAlternatePath(currentNormalized, 'id');
  const enPath = getAlternatePath(currentNormalized, 'en');

  return {
    canonical: `${cleanOrigin}${currentNormalized}`,
    idUrl: `${cleanOrigin}${idPath}`,
    enUrl: `${cleanOrigin}${enPath}`,
    xDefaultUrl: `${cleanOrigin}${idPath}`,
  };
}