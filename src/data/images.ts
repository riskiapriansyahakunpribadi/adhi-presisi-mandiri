/*
PANDUAN EDIT
File: src/data/images.ts
Fungsi: Memetakan seluruh 23 slot gambar proyek, tautan Unsplash terverifikasi, teks alt dua bahasa, dan pemuatan otomatis file lokal dari src/assets/images/.
Boleh diedit: Nilai remoteUrl jika ingin mengganti foto Unsplash tertentu, atau teks alt (id dan en).
Jangan diubah: Fungsi resolveImageSlot, buildUnsplashSrc, dan import.meta.glob agar prioritas foto lokal dan responsivitas tetap bekerja.
Cara mengedit: Ganti URL pada remoteUrl (cukup sampai bagian photo-...), atau taruh file foto lokal di src/assets/images/ dengan nama sama persis seperti nama slot.
*/
/// <reference types="astro/client" />

import type { ImageMetadata } from 'astro';

export type ImageSlotId =
  | 'hero-utama'
  | 'tentang-bengkel'
  | 'tentang-inspeksi'
  | 'kualitas-komponen'
  | 'layanan-engineering'
  | 'layanan-produksi'
  | 'layanan-inspeksi'
  | 'layanan-perawatan'
  | 'kapabilitas-cnc'
  | 'kapabilitas-jig'
  | 'kapabilitas-sukucadang'
  | 'kapabilitas-reverse'
  | 'industri-otomotif'
  | 'industri-elektronik'
  | 'industri-plastik'
  | 'industri-makanan'
  | 'proyek-bracket'
  | 'proyek-jig-cek'
  | 'proyek-shaft'
  | 'proyek-gear'
  | 'wawasan-gambar-teknik'
  | 'wawasan-material'
  | 'wawasan-reverse-engineering';

export interface ImageSlotMeta {
  id: ImageSlotId;
  aspectRatio: string;
  width: number;
  height: number;
  minSizeLabel: string;
  orientation: 'lanskap' | 'potret';
  remoteUrl: string;
  alt: {
    id: string;
    en: string;
  };
}

// EDIT: Opsi video latar hero. Biarkan enabled: false selama belum ada file video di folder public/.
export const heroVideoConfig = {
  enabled: false,
  src: '',
  posterSlot: 'hero-utama' as ImageSlotId,
};

// EDIT: Seluruh 23 slot memakai tautan foto yang sudah terverifikasi tampil di browser dan sesuai tema manufaktur.
// Jika Anda menaruh file lokal dengan nama slot yang sama di src/assets/images/, file lokal otomatis diprioritaskan.
export const imageSlots: Record<ImageSlotId, ImageSlotMeta> = {
  'hero-utama': {
    id: 'hero-utama',
    aspectRatio: '16 / 9',
    width: 1600,
    height: 900,
    minSizeLabel: '1920 x 1080 px (16:9, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563',
    alt: {
      id: 'Lantai produksi pabrik dengan deretan mesin industri dan pusat permesinan',
      en: 'Factory production floor filled with industrial and CNC machining equipment',
    },
  },
  'tentang-bengkel': {
    id: 'tentang-bengkel',
    aspectRatio: '4 / 3',
    width: 1200,
    height: 900,
    minSizeLabel: '1200 x 900 px (4:3, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122',
    alt: {
      id: 'Suasana pengerjaan logam dan lantai produksi bengkel permesinan presisi',
      en: 'Metal machining and workshop production floor',
    },
  },
  'tentang-inspeksi': {
    id: 'tentang-inspeksi',
    aspectRatio: '3 / 4',
    width: 900,
    height: 1200,
    minSizeLabel: '900 x 1200 px (3:4, potret)',
    orientation: 'potret',
    remoteUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc',
    alt: {
      id: 'Peninjauan gambar CAD dan spesifikasi dimensi komponen pada layar kerja engineering',
      en: 'CAD drawing review and component dimensional checks on an engineering workstation',
    },
  },
  'kualitas-komponen': {
    id: 'kualitas-komponen',
    aspectRatio: '16 / 10',
    width: 1440,
    height: 900,
    minSizeLabel: '1440 x 900 px (16:10, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758',
    alt: {
      id: 'Proses pengerjaan dan pengecekan peralatan mekanikal presisi di bengkel',
      en: 'Precision mechanical assembly and quality verification in a workshop',
    },
  },
  'layanan-engineering': {
    id: 'layanan-engineering',
    aspectRatio: '4 / 3',
    width: 1200,
    height: 900,
    minSizeLabel: '1200 x 900 px (4:3, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    alt: {
      id: 'Peninjauan gambar teknik dan perencanaan rancangan mekanikal di meja kerja',
      en: 'Technical blueprint review and engineering planning on a drafting table',
    },
  },
  'layanan-produksi': {
    id: 'layanan-produksi',
    aspectRatio: '4 / 3',
    width: 1200,
    height: 900,
    minSizeLabel: '1200 x 900 px (4:3, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122',
    alt: {
      id: 'Proses fabrikasi dan pengerjaan logam di lantai produksi bengkel',
      en: 'Metal fabrication and production machining on the workshop floor',
    },
  },
  'layanan-inspeksi': {
    id: 'layanan-inspeksi',
    aspectRatio: '4 / 3',
    width: 1200,
    height: 900,
    minSizeLabel: '1200 x 900 px (4:3, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758',
    alt: {
      id: 'Pemeriksaan mutu dan verifikasi kesesuaian komponen mekanikal di area inspeksi',
      en: 'Quality verification and mechanical component inspection bench',
    },
  },
  'layanan-perawatan': {
    id: 'layanan-perawatan',
    aspectRatio: '4 / 3',
    width: 1200,
    height: 900,
    minSizeLabel: '1200 x 900 px (4:3, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc',
    alt: {
      id: 'Peralatan bengkel mekanikal untuk perawatan dan perbaikan suku cadang mesin',
      en: 'Mechanical workshop tools prepared for industrial maintenance and repair',
    },
  },
  'kapabilitas-cnc': {
    id: 'kapabilitas-cnc',
    aspectRatio: '16 / 10',
    width: 1440,
    height: 900,
    minSizeLabel: '1440 x 900 px (16:10, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    alt: {
      id: 'Operasi pemrograman dan permesinan komponen logam di stasiun produksi',
      en: 'Industrial machining station and programmed component production',
    },
  },
  'kapabilitas-jig': {
    id: 'kapabilitas-jig',
    aspectRatio: '4 / 3',
    width: 1200,
    height: 900,
    minSizeLabel: '1200 x 900 px (4:3, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1',
    alt: {
      id: 'Proses pengerjaan dan pengelasan perangkat jig baja di bengkel logam',
      en: 'Steel jig and fixture fabrication inside a metalworking shop',
    },
  },
  'kapabilitas-sukucadang': {
    id: 'kapabilitas-sukucadang',
    aspectRatio: '4 / 3',
    width: 1200,
    height: 900,
    minSizeLabel: '1200 x 900 px (4:3, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3',
    alt: {
      id: 'Rangkaian komponen mekanikal dan suku cadang logam untuk mesin industri',
      en: 'Machined mechanical parts and industrial machine spare components',
    },
  },
  'kapabilitas-reverse': {
    id: 'kapabilitas-reverse',
    aspectRatio: '4 / 3',
    width: 1200,
    height: 900,
    minSizeLabel: '1200 x 900 px (4:3, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc',
    alt: {
      id: 'Evaluasi teknis dan pembuatan ulang gambar CAD komponen mekanikal',
      en: 'Technical evaluation and CAD reconstruction for component reverse engineering',
    },
  },
  'industri-otomotif': {
    id: 'industri-otomotif',
    aspectRatio: '3 / 2',
    width: 1200,
    height: 800,
    minSizeLabel: '1200 x 800 px (3:2, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1567789884554-0b844b597180',
    alt: {
      id: 'Lini manufaktur dan perakitan komponen industri otomotif',
      en: 'Automotive component manufacturing and industrial assembly line',
    },
  },
  'industri-elektronik': {
    id: 'industri-elektronik',
    aspectRatio: '3 / 2',
    width: 1200,
    height: 800,
    minSizeLabel: '1200 x 800 px (3:2, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    alt: {
      id: 'Detail rangkaian papan elektronik dan perangkat keras presisi',
      en: 'Close view of precision electronic circuit board and hardware components',
    },
  },
  'industri-plastik': {
    id: 'industri-plastik',
    aspectRatio: '3 / 2',
    width: 1200,
    height: 800,
    minSizeLabel: '1200 x 800 px (3:2, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
    alt: {
      id: 'Meja kerja perkakas dan komponen pendukung proses pencetakan industri',
      en: 'Industrial tooling workbench supporting plastic molding operations',
    },
  },
  'industri-makanan': {
    id: 'industri-makanan',
    aspectRatio: '3 / 2',
    width: 1200,
    height: 800,
    minSizeLabel: '1200 x 800 px (3:2, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa',
    alt: {
      id: 'Fasilitas lini produksi pabrik untuk dukungan suku cadang mesin pengemasan',
      en: 'Factory production line supported by precision packaging spare parts',
    },
  },
  'proyek-bracket': {
    id: 'proyek-bracket',
    aspectRatio: '4 / 3',
    width: 1200,
    height: 900,
    minSizeLabel: '1200 x 900 px (4:3, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122',
    alt: {
      id: 'Contoh ilustrasi pekerjaan pemotongan logam dan dudukan bracket',
      en: 'Illustrative work sample of machined metal bracket fabrication',
    },
  },
  'proyek-jig-cek': {
    id: 'proyek-jig-cek',
    aspectRatio: '4 / 3',
    width: 1200,
    height: 900,
    minSizeLabel: '1200 x 900 px (4:3, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789',
    alt: {
      id: 'Contoh ilustrasi pekerjaan perangkat bantu perakitan dan pengecekan komponen',
      en: 'Illustrative work sample of an assembly and checking fixture',
    },
  },
  'proyek-shaft': {
    id: 'proyek-shaft',
    aspectRatio: '4 / 3',
    width: 1200,
    height: 900,
    minSizeLabel: '1200 x 900 px (4:3, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    alt: {
      id: 'Contoh ilustrasi pekerjaan pengerjaan poros baja pada mesin produksi',
      en: 'Illustrative work sample of turned industrial steel shaft production',
    },
  },
  'proyek-gear': {
    id: 'proyek-gear',
    aspectRatio: '4 / 3',
    width: 1200,
    height: 900,
    minSizeLabel: '1200 x 900 px (4:3, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3',
    alt: {
      id: 'Contoh ilustrasi pekerjaan pembuatan ulang roda gigi dan komponen penggerak mesin',
      en: 'Illustrative work sample of a reverse engineered replacement gear assembly',
    },
  },
  'wawasan-gambar-teknik': {
    id: 'wawasan-gambar-teknik',
    aspectRatio: '16 / 9',
    width: 1280,
    height: 720,
    minSizeLabel: '1280 x 720 px (16:9, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    alt: {
      id: 'Lembar gambar teknik dan diskusi spesifikasi komponen mekanikal',
      en: 'Engineering drawings and mechanical component specification review',
    },
  },
  'wawasan-material': {
    id: 'wawasan-material',
    aspectRatio: '16 / 9',
    width: 1280,
    height: 720,
    minSizeLabel: '1280 x 720 px (16:9, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    alt: {
      id: 'Evaluasi teknis pemilihan material dan sistem produksi di fasilitas manufaktur',
      en: 'Technical material evaluation and production engineering setup',
    },
  },
  'wawasan-reverse-engineering': {
    id: 'wawasan-reverse-engineering',
    aspectRatio: '16 / 9',
    width: 1280,
    height: 720,
    minSizeLabel: '1280 x 720 px (16:9, lanskap)',
    orientation: 'lanskap',
    remoteUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc',
    alt: {
      id: 'Pengukuran dan pembuatan ulang gambar CAD dari sampel komponen mesin',
      en: 'Sample measurement and CAD reconstruction for component reverse engineering',
    },
  },
};

interface ImageModule {
  default: ImageMetadata;
}

// JANGAN UBAH: Memeriksa bentuk modul gambar lokal secara aman saat mode strict TypeScript aktif.
function isImageModule(value: unknown): value is ImageModule {
  return (
    typeof value === 'object' &&
    value !== null &&
    'default' in value &&
    typeof (value as { default?: unknown }).default === 'object' &&
    (value as { default?: unknown }).default !== null
  );
}

// JANGAN UBAH: Memindai folder src/assets/images/ secara otomatis saat build Astro.
const discoveredAssets = import.meta.glob(
  '../assets/images/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true }
);

const assetByBaseName = new Map<string, ImageMetadata>();

for (const [filePath, moduleValue] of Object.entries(discoveredAssets)) {
  const filename = filePath.split('/').pop() ?? '';
  const baseName = filename.replace(/\.[^/.]+$/, '').toLowerCase();
  if (baseName && isImageModule(moduleValue)) {
    assetByBaseName.set(baseName, moduleValue.default);
  }
}

// JANGAN UBAH: Membentuk URL responsif Unsplash dengan pemotongan rapi dan format modern otomatis.
export function buildUnsplashSrc(baseUrl: string, targetWidth: number): string {
  const cleanUrl = baseUrl.split('?')[0];
  return `${cleanUrl}?auto=format&fit=crop&w=${targetWidth}&q=80`;
}

export interface ResolvedImageSlot {
  meta: ImageSlotMeta;
  asset: ImageMetadata | null;
}

// JANGAN UBAH: Mengembalikan metadata slot sekaligus gambar lokal teroptimasi jika file sudah ditaruh di src/assets/images/.
export function resolveImageSlot(slotId: ImageSlotId): ResolvedImageSlot {
  const meta = imageSlots[slotId];
  const asset = assetByBaseName.get(slotId.toLowerCase()) ?? null;
  return { meta, asset };
}