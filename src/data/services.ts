/*
PANDUAN EDIT
File: src/data/services.ts
Fungsi: Menyimpan seluruh data 4 layanan utama PT Adhi Presisi Mandiri dalam bahasa Indonesia dan Inggris untuk Beranda, daftar Layanan, dan halaman detail Layanan.
Boleh diedit: Judul, ringkasan, daftar ruang lingkup, hasil serah terima, dan informasi yang dibutuhkan pada setiap layanan.
Jangan diubah: Nilai slug.id dan slug.en tanpa ikut memperbarui pasangan jalurnya di src/i18n/routes.ts.
Cara mengedit: Ubah teks di dalam objek id atau en sesuai kebutuhan. Hindari klaim sertifikasi, angka toleransi pasti, emoji, dan tanda pisah panjang.
*/

import type { ImageSlotId } from './images';
import type { Lang } from '../i18n/routes';

export interface ServiceLocaleContent {
  title: string;
  shortSummary: string;
  overview: string;
  scopeHeading: string;
  scopeItems: string[];
  deliverablesHeading: string;
  deliverables: string[];
  inputsHeading: string;
  inputs: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface ServiceItem {
  id: string;
  order: string;
  imageSlot: ImageSlotId;
  slug: Record<Lang, string>;
  content: Record<Lang, ServiceLocaleContent>;
}

// EDIT: Daftar 4 layanan utama bengkel. Ubah teks di dalam content.id dan content.en bila diperlukan.
export const servicesData: ServiceItem[] = [
  {
    id: 'desain-engineering',
    order: '01',
    imageSlot: 'layanan-engineering',
    slug: {
      id: 'desain-engineering',
      en: 'design-engineering',
    },
    content: {
      id: {
        title: 'Desain dan Engineering',
        shortSummary:
          'Peninjauan gambar teknik, masukan kemudahan pengerjaan, dan pemodelan CAD sebelum bahan dipotong.',
        overview:
          'Sebelum pekerjaan masuk ke mesin CNC, tim engineering kami meninjau geometri, pilihan material, serta kesesuaian alat potong. Tujuannya mencegah biaya pengerjaan yang tidak perlu dan memastikan komponen mudah dipasang pada mesin pabrik Anda.',
        scopeHeading: 'Ruang lingkup pengerjaan',
        scopeItems: [
          'Peninjauan kemampuan permesinan (manufacturability review) dari gambar CAD maupun PDF',
          'Pembuatan gambar kerja 2D dan model 3D dari sketsa kasar atau sampel komponen fisik',
          'Masukan pemilihan material pengganti ketika bahan asli sulit diperoleh di pasar lokal',
          'Perencanaan urutan proses pemesinan dan titik referensi pengukuran bersama tim Anda',
        ],
        deliverablesHeading: 'Hasil yang Anda terima',
        deliverables: [
          'Catatan tinjauan teknis apabila ditemukan fitur yang berisiko sulit dikerjakan',
          'Gambar kerja konfirmasi sebelum proses pemotongan logam dimulai',
          'Penawaran tertulis berbasis rincian material dan tahapan pengerjaan',
        ],
        inputsHeading: 'Data yang membantu proses peninjauan',
        inputs: [
          'File STEP, DWG, DXF, PDF berdimensi, atau sampel komponen fisik',
          'Penjelasan singkat fungsi komponen dan bagian yang berpasangan dengan komponen lain',
          'Kebutuhan lingkungan kerja seperti suhu tinggi, paparan cairan, atau beban gesek',
        ],
        seoTitle: 'Desain dan Engineering | PT Adhi Presisi Mandiri',
        seoDescription:
          'Layanan peninjauan gambar teknik, pemodelan CAD, dan konsultasi kemudahan pengerjaan sebelum produksi CNC di Cikarang.',
      },
      en: {
        title: 'Design and Engineering',
        shortSummary:
          'Drawing review, manufacturability feedback, and CAD drafting before raw stock is cut.',
        overview:
          'Before any work reaches our CNC machines, our engineering team reviews part geometry, stock grade, and tooling access. This helps prevent avoidable machining cost and keeps the finished part ready to fit your assembly.',
        scopeHeading: 'Scope of work',
        scopeItems: [
          'Manufacturability review for incoming 3D CAD models and 2D PDF drawings',
          '2D workshop drawing and 3D model creation from rough sketches or physical samples',
          'Practical material alternative input when original imported alloys are unavailable locally',
          'Machining sequence planning and inspection datum alignment with your engineers',
        ],
        deliverablesHeading: 'What you receive',
        deliverables: [
          'Technical review notes whenever a feature creates tooling or clamping risk',
          'Confirmation drawing prior to raw stock cutting',
          'Written quotation tied directly to material grade and machining operations',
        ],
        inputsHeading: 'Helpful information to share',
        inputs: [
          'STEP, DWG, DXF, dimensioned PDF files, or a physical reference part',
          'Brief explanation of component function and mating surfaces',
          'Operating environment notes such as heat, washdown exposure, or wear contact',
        ],
        seoTitle: 'Design and Engineering | PT Adhi Presisi Mandiri',
        seoDescription:
          'Engineering drawing review, CAD modeling, and manufacturability consultation before CNC production in Cikarang.',
      },
    },
  },
  {
    id: 'produksi-permesinan',
    order: '02',
    imageSlot: 'layanan-produksi',
    slug: {
      id: 'produksi-permesinan',
      en: 'production-machining',
    },
    content: {
      id: {
        title: 'Produksi dan Permesinan',
        shortSummary:
          'Pengerjaan CNC milling, CNC turning, dan proses bubut atau frais pendukung untuk satuan maupun batch berulang.',
        overview:
          'Operator bengkel kami menjalankan pemotongan logam dan plastik teknik mengikuti urutan kerja yang sudah disetujui. Setiap tahap pemesinan dicatat agar komponen pada pesanan berikutnya tetap seragam.',
        scopeHeading: 'Ruang lingkup pengerjaan',
        scopeItems: [
          'Permesinan CNC milling dan CNC turning untuk komponen presisi logam maupun polimer teknik',
          'Pengerjaan satuan untuk prototipe dan suku cadang darurat hingga batch kecil dan menengah',
          'Pembuatan lubang berulir, alur pasak, chamfer, dan penghilangan geram tajam (deburring)',
          'Koordinasi proses pendukung seperti perlakuan panas atau pelapisan permukaan sesuai permintaan',
        ],
        deliverablesHeading: 'Hasil yang Anda terima',
        deliverables: [
          'Komponen bersih tanpa sisa geram tajam dan siap masuk tahap inspeksi',
          'Catatan urutan kerja tersimpan di bengkel untuk memudahkan pemesanan ulang',
          'Pengemasan pelindung benturan sesuai karakter permukaan komponen',
        ],
        inputsHeading: 'Data yang membantu proses penawaran',
        inputs: [
          'Gambar teknik lengkap beserta catatan ulir, lubang pasak, dan permukaan kritis',
          'Jenis material serta perkiraan jumlah pesanan (satuan atau jadwal berulang)',
          'Keterangan bila ada kebutuhan perlakuan panas atau pelapisan akhir',
        ],
        seoTitle: 'Produksi dan Permesinan | PT Adhi Presisi Mandiri',
        seoDescription:
          'Layanan produksi CNC milling, CNC turning, dan permesinan komponen satuan hingga batch berulang di Cikarang.',
      },
      en: {
        title: 'Production and Machining',
        shortSummary:
          'CNC milling, CNC turning, and secondary bench work for single prototypes through repeat production batches.',
        overview:
          'Our workshop operators execute metal and engineering plastic cutting according to the approved setup plan. Each job sequence is logged so future repeat orders match earlier deliveries.',
        scopeHeading: 'Scope of work',
        scopeItems: [
          'CNC milling and CNC turning for precision metal and engineering polymer parts',
          'Single-unit machining for prototypes and urgent spares through small and medium batches',
          'Threading, keyways, chamfers, and careful edge deburring',
          'Coordination of secondary heat treatment or surface finishing when specified',
        ],
        deliverablesHeading: 'What you receive',
        deliverables: [
          'Clean, deburred parts ready for final dimensional inspection',
          'Archived setup notes to keep repeat orders consistent',
          'Protective packaging suited to finished surfaces',
        ],
        inputsHeading: 'Helpful information to share',
        inputs: [
          'Complete drawing with thread callouts, keyways, and critical faces marked',
          'Preferred material grade and estimated quantity or repeat schedule',
          'Notes on any required heat treatment or surface coating',
        ],
        seoTitle: 'Production and Machining | PT Adhi Presisi Mandiri',
        seoDescription:
          'CNC milling, CNC turning, and precision component machining for single parts and repeat batches in Cikarang.',
      },
    },
  },
  {
    id: 'inspeksi-mutu',
    order: '03',
    imageSlot: 'layanan-inspeksi',
    slug: {
      id: 'inspeksi-mutu',
      en: 'quality-inspection',
    },
    content: {
      id: {
        title: 'Inspeksi Mutu',
        shortSummary:
          'Pemeriksaan dimensi kritis, ulir, dan kelengkapan fitur sebelum komponen dikemas dan dikirim ke pabrik.',
        overview:
          'Kesalahan ukuran sekecil apa pun dapat menghentikan pemasangan di lini produksi Anda. Karena itu, bagian QC kami memeriksa komponen mengacu langsung pada titik dimensi yang ditandai pada gambar teknik sebelum barang meninggalkan bengkel.',
        scopeHeading: 'Ruang lingkup pengerjaan',
        scopeItems: [
          'Pemeriksaan dimensi luar, diameter lubang, kedalaman, dan kesejajaran sesuai gambar',
          'Pengecekan kecocokan ulir dan lubang pasak menggunakan gauge standar',
          'Pemeriksaan visual terhadap bekas getaran pahat, goresan permukaan, dan sisa geram',
          'Pencatatan lembar hasil ukur untuk dimensi utama bila diminta pada pesanan Anda',
        ],
        deliverablesHeading: 'Hasil yang Anda terima',
        deliverables: [
          'Komponen yang telah melewati pemeriksaan akhir sebelum pengemasan',
          'Lembar catatan hasil pemeriksaan dimensi sesuai permintaan tim QC pabrik Anda',
          'Penandaan jelas pada kemasan agar tim penerimaan barang mudah memverifikasi',
        ],
        inputsHeading: 'Data yang membantu proses inspeksi',
        inputs: [
          'Penandaan dimensi kritis atau permukaan berpasangan pada gambar 2D PDF',
          'Kebutuhan dokumen catatan pengukuran untuk penerimaan di gudang pabrik Anda',
          'Komponen pasangan bila diinginkan uji pasang langsung sebelum pengiriman',
        ],
        seoTitle: 'Inspeksi Mutu | PT Adhi Presisi Mandiri',
        seoDescription:
          'Pemeriksaan dimensi kritis, pengecekan ulir, dan catatan QC komponen presisi sebelum dikirim ke pabrik Anda.',
      },
      en: {
        title: 'Quality Inspection',
        shortSummary:
          'Dimensional checks, thread verification, and feature inspection before parts are packed and dispatched.',
        overview:
          'A single missed dimension can hold up installation on your production floor. Our QC staff checks finished parts directly against the callouts marked on your engineering drawing before anything leaves our workshop.',
        scopeHeading: 'Scope of work',
        scopeItems: [
          'Verification of external lengths, bore diameters, depths, and flatness against drawing',
          'Thread and pin-fit verification using standard workshop gauges',
          'Visual inspection for tool chatter, surface marks, and remaining burrs',
          'Written measurement check sheet for critical dimensions when requested with your order',
        ],
        deliverablesHeading: 'What you receive',
        deliverables: [
          'Components verified at final inspection prior to packing',
          'Dimensional check notes aligned with your incoming QC requirements',
          'Clear part labeling on packaging for smooth receiving at your plant',
        ],
        inputsHeading: 'Helpful information to share',
        inputs: [
          'Critical dimensions or mating surfaces clearly marked on your 2D PDF drawing',
          'Any incoming inspection sheet format required by your plant QC desk',
          'Mating sample parts if a physical fit check is requested before dispatch',
        ],
        seoTitle: 'Quality Inspection | PT Adhi Presisi Mandiri',
        seoDescription:
          'Pre-delivery dimensional inspection, thread checks, and documented QC verification for machined parts in Cikarang.',
      },
    },
  },
  {
    id: 'perawatan-suku-cadang',
    order: '04',
    imageSlot: 'layanan-perawatan',
    slug: {
      id: 'perawatan-suku-cadang',
      en: 'maintenance-spare-parts',
    },
    content: {
      id: {
        title: 'Perawatan dan Dukungan Suku Cadang',
        shortSummary:
          'Dukungan pengadaan suku cadang aus, modifikasi komponen mesin, dan pembuatan ulang saat gambar lama hilang.',
        overview:
          'Tim maintenance pabrik sering menghadapi komponen aus atau patah pada mesin yang suku cadang aslinya membutuhkan waktu impor lama. Kami membantu membuat komponen pengganti lokal berdasarkan gambar maupun sampel fisik yang dibawa ke bengkel.',
        scopeHeading: 'Ruang lingkup pengerjaan',
        scopeItems: [
          'Pembuatan suku cadang aus seperti poros, bushing, roller, gear sederhana, dan pelat dudukan',
          'Pengukuran ulang komponen lama yang sudah aus untuk dibuatkan gambar kerja pengganti',
          'Modifikasi ringan atau perbaikan dudukan pada jig dan fixture yang sudah dipakai di lini',
          'Penyimpanan gambar kerja hasil pengukuran ulang untuk memudahkan pemesanan berkala',
        ],
        deliverablesHeading: 'Hasil yang Anda terima',
        deliverables: [
          'Suku cadang pengganti yang siap dipasang pada mesin produksi',
          'Arsip referensi dimensi untuk mempercepat pemesanan ulang pada jadwal perawatan berikutnya',
          'Komunikasi langsung dengan engineer kami saat penyesuaian ukuran di lapangan diperlukan',
        ],
        inputsHeading: 'Data yang membantu proses penanganan',
        inputs: [
          'Sampel komponen lama (meskipun sudah aus atau retak) atau gambar bawaan mesin',
          'Informasi pasangan kerja komponen seperti ukuran bearing, seal, atau rantai yang terpasang',
          'Kondisi kerja komponen pada mesin untuk menentukan jenis logam atau polimer yang tepat',
        ],
        seoTitle: 'Perawatan dan Dukungan Suku Cadang | PT Adhi Presisi Mandiri',
        seoDescription:
          'Dukungan pembuatan suku cadang mesin aus, perbaikan fixture, dan pembuatan ulang komponen bagi tim maintenance pabrik di Cikarang.',
      },
      en: {
        title: 'Maintenance and Spare Parts Support',
        shortSummary:
          'Local fabrication of wear parts, fixture adjustments, and replacement machining when original drawings are missing.',
        overview:
          'Factory maintenance teams frequently deal with worn or fractured parts on equipment whose original spares carry long import waits. We machine local replacements from your drawings or from physical samples brought to our Cikarang shop.',
        scopeHeading: 'Scope of work',
        scopeItems: [
          'Machining of wear components including shafts, bushings, rollers, spur gears, and mounts',
          'Physical measurement and redrawing of worn legacy parts without documentation',
          'Practical rework or adjustment on existing production jigs and fixtures',
          'Retained reference drawings to simplify scheduled maintenance reorders',
        ],
        deliverablesHeading: 'What you receive',
        deliverables: [
          'Replacement spare parts ready for reinstallation on your equipment',
          'Archived dimensional records for faster repeat orders during planned shutdowns',
          'Direct discussion with our engineers whenever field fit adjustments are needed',
        ],
        inputsHeading: 'Helpful information to share',
        inputs: [
          'Physical worn sample (even if cracked or worn) or original machine manual drawing',
          'Mating component details such as installed bearing numbers, seals, or shafts',
          'Working load and environment details to confirm suitable steel, stainless, or polymer grade',
        ],
        seoTitle: 'Maintenance and Spare Parts Support | PT Adhi Presisi Mandiri',
        seoDescription:
          'Replacement wear parts, fixture adjustments, and reverse engineered spare components for factory maintenance teams in Cikarang.',
      },
    },
  },
];

// JANGAN UBAH: Fungsi pembantu untuk membentuk URL halaman detail layanan sesuai bahasa.
export function getServiceHref(service: ServiceItem, lang: Lang): string {
  return lang === 'id'
    ? `/layanan/${service.slug.id}/`
    : `/en/services/${service.slug.en}/`;
}