/*
PANDUAN EDIT
File: src/data/projects.ts
Fungsi: Menyimpan daftar 4 contoh ilustrasi jenis pekerjaan bengkel untuk halaman Proyek dalam bahasa Indonesia dan Inggris.
Boleh diedit: Judul, kategori, material, proses pengerjaan, dan catatan lingkup tiap contoh pekerjaan.
Jangan diubah: Properti imageSlot yang harus cocok dengan daftar di src/data/images.ts serta quoteParam yang cocok dengan opsi chip di formulir penawaran.
Cara mengedit: Ubah isi teks di dalam objek id dan en. Jangan mencantumkan nama klien nyata, angka jumlah pesanan, atau klaim toleransi pasti.
*/

import type { ImageSlotId } from './images';
import type { Lang } from '../i18n/routes';

export interface ProjectLocaleContent {
  category: string;
  title: string;
  summary: string;
  material: string;
  process: string;
  sector: string;
  focusNotes: string[];
}

export interface ProjectExample {
  id: string;
  imageSlot: ImageSlotId;
  quoteParam: string;
  content: Record<Lang, ProjectLocaleContent>;
}

// EDIT: Daftar 4 contoh ilustrasi pekerjaan. Semuanya diberi label contoh ilustrasi tanpa nama klien dan tanpa angka karangan.
export const projectsData: ProjectExample[] = [
  {
    id: 'bracket-aluminium',
    imageSlot: 'proyek-bracket',
    quoteParam: 'permesinan-cnc',
    content: {
      id: {
        category: 'Permesinan CNC',
        title: 'Contoh pekerjaan: bracket aluminium',
        summary:
          'Pembuatan dudukan sensor dan pengikat mekanikal berbahan aluminium padat dengan saku ringan, lubang pemasangan presisi, dan tepi bersih tanpa geram.',
        material: 'Aluminium seri 6061',
        process: 'CNC milling, pembuatan lubang berulir, deburring manual',
        sector: 'Otomotif dan elektronik',
        focusNotes: [
          'Penjajaran posisi lubang baut agar sejajar dengan rangka mesin',
          'Kerataan bidang dudukan sensor sebelum tahap pengemasan',
          'Pembersihan tepi tajam untuk keamanan pemasangan operator lini',
        ],
      },
      en: {
        category: 'CNC machining',
        title: 'Work example: aluminum mounting bracket',
        summary:
          'Machining of a solid aluminum sensor mount and structural bracket featuring weight-relief pockets, locating holes, and cleanly deburred edges.',
        material: '6061 aluminum alloy',
        process: 'CNC milling, tapping, manual edge deburring',
        sector: 'Automotive and electronics',
        focusNotes: [
          'Hole pattern alignment to match existing machine frame mounting points',
          'Flatness check on the sensor seating face prior to packing',
          'Full edge deburring for safe handling during line installation',
        ],
      },
    },
  },
  {
    id: 'jig-perakitan',
    imageSlot: 'proyek-jig-cek',
    quoteParam: 'jig-dan-fixture',
    content: {
      id: {
        category: 'Jig dan fixture',
        title: 'Contoh pekerjaan: jig perakitan dan pengecekan posisi',
        summary:
          'Perangkat bantu meja kerja untuk menopang benda kerja pada posisi tetap selama perakitan dan pengecekan lubang komponen secara berulang.',
        material: 'Pelat dasar baja karbon SS400 dengan bantalan kontak POM',
        process: 'CNC milling, pemasangan pin pemandu, perakitan klem penjepit',
        sector: 'Otomotif dan komponen kendaraan',
        focusNotes: [
          'Pelat dasar dibuat kaku agar posisi dudukan tidak bergeser saat dijepit',
          'Titik kontak benda kerja memakai polimer teknik agar permukaan tidak tergores',
          'Pin pemandu mudah diganti saat mengalami keausan pemakaian harian',
        ],
      },
      en: {
        category: 'Jigs and fixtures',
        title: 'Work example: assembly and checking jig',
        summary:
          'Benchtop workholding fixture holding a workpiece in a repeatable datum position during manual assembly and hole position checks.',
        material: 'SS400 carbon steel base plate with POM contact pads',
        process: 'CNC milling, dowel pin fitting, toggle clamp integration',
        sector: 'Automotive and vehicle components',
        focusNotes: [
          'Rigid base plate machined flat to keep clamping repeatable across shifts',
          'Engineering plastic nests placed on contact surfaces to prevent scratching',
          'Replaceable locating pins sized for straightforward maintenance',
        ],
      },
    },
  },
  {
    id: 'poros-mesin-pengemasan',
    imageSlot: 'proyek-shaft',
    quoteParam: 'suku-cadang',
    content: {
      id: {
        category: 'Suku cadang mesin',
        title: 'Contoh pekerjaan: poros stainless steel mesin pengemasan',
        summary:
          'Pembuatan poros bertingkat tahan karat untuk dudukan bearing dan roller jalur pengemasan yang rutin dicuci pada akhir jadwal produksi.',
        material: 'Baja tahan karat SUS304',
        process: 'CNC turning, pembuatan alur pasak (keyway), pengecekan kesenteran',
        sector: 'Makanan dan minuman (mesin pengemasan)',
        focusNotes: [
          'Pemeriksaan diameter dudukan bearing mengacu pada ukuran pasangan standar',
          'Pengecekan kelurusan alur pasak agar kopling masuk tanpa macet',
          'Permukaan akhir bersih dan mudah dibersihkan di area basah',
        ],
      },
      en: {
        category: 'Machine spare parts',
        title: 'Work example: stainless steel packaging machine shaft',
        summary:
          'Turned stepped shaft built from corrosion-resistant stainless steel for bearing journals and conveyor rollers on washdown packaging lines.',
        material: 'SUS304 stainless steel',
        process: 'CNC turning, keyway milling, runout verification',
        sector: 'Food and beverage packaging machinery',
        focusNotes: [
          'Bearing journal diameters checked against standard mating bearing fits',
          'Keyway width and alignment checked for smooth coupling assembly',
          'Clean machined finish suited to regular plant washdown routines',
        ],
      },
    },
  },
  {
    id: 'pembuatan-ulang-roda-gigi',
    imageSlot: 'proyek-gear',
    quoteParam: 'pembuatan-ulang',
    content: {
      id: {
        category: 'Pembuatan ulang komponen',
        title: 'Contoh pekerjaan: pembuatan ulang roda gigi dari sampel lama',
        summary:
          'Pengukuran ulang roda gigi penggerak yang giginya sudah aus tanpa dokumen gambar asli, lalu disusun gambar kerja konfirmasi sebelum pengerjaan unit pengganti.',
        material: 'Baja karbon S45C',
        process: 'Pengukuran sampel, gambar kerja ulang, bubut dan pemotongan gigi',
        sector: 'Plastik, cetakan, dan perawatan mesin umum',
        focusNotes: [
          'Identifikasi profil gigi, jumlah gigi, dan jarak sumbu kerja dari sampel',
          'Persetujuan gambar kerja ulang bersama tim maintenance sebelum pemotongan',
          'Arsip gambar disimpan agar pemesanan ulang berikutnya lebih cepat',
        ],
      },
      en: {
        category: 'Reverse engineering',
        title: 'Work example: replacement spur gear from worn sample',
        summary:
          'Physical measurement of a worn drive gear with no original drawing, followed by confirmation drafting and local fabrication of the replacement unit.',
        material: 'S45C carbon steel',
        process: 'Sample measurement, confirmation CAD drawing, turning and gear cutting',
        sector: 'Plastics, molding, and general plant maintenance',
        focusNotes: [
          'Tooth profile, tooth count, and bore geometry reconstructed from the worn part',
          'Confirmation drawing signed off with plant maintenance prior to cutting',
          'Drawing archived in our shop records to simplify future repeat orders',
        ],
      },
    },
  },
];