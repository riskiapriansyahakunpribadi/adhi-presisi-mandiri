/*
PANDUAN EDIT
File: src/data/capabilities.ts
Fungsi: Menyimpan seluruh data 4 kapabilitas inti PT Adhi Presisi Mandiri dalam bahasa Indonesia dan Inggris untuk Beranda, daftar Kapabilitas, dan halaman detail Kapabilitas.
Boleh diedit: Judul, ringkasan, jenis komponen, material umum, dan catatan penawaran di setiap kapabilitas.
Jangan diubah: Nilai slug.id dan slug.en tanpa ikut memperbarui pasangan jalurnya di src/i18n/routes.ts.
Cara mengedit: Ubah teks di dalam objek id atau en. Jangan menulis angka toleransi atau waktu pengerjaan pasti.
*/

import type { ImageSlotId } from './images';
import type { Lang } from '../i18n/routes';

export interface CapabilityLocaleContent {
  title: string;
  shortTag: string;
  shortSummary: string;
  overview: string;
  partsHeading: string;
  typicalParts: string[];
  materialsHeading: string;
  materials: string[];
  quoteNotesHeading: string;
  quoteNotes: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface CapabilityItem {
  id: string;
  order: string;
  featured: boolean;
  quoteParam: string;
  imageSlot: ImageSlotId;
  slug: Record<Lang, string>;
  content: Record<Lang, CapabilityLocaleContent>;
}

// EDIT: Daftar 4 kapabilitas inti bengkel. Item pertama (featured: true) tampil lebih dominan di grid Beranda.
export const capabilitiesData: CapabilityItem[] = [
  {
    id: 'permesinan-cnc',
    order: '01',
    featured: true,
    quoteParam: 'permesinan-cnc',
    imageSlot: 'kapabilitas-cnc',
    slug: {
      id: 'permesinan-cnc',
      en: 'cnc-machining',
    },
    content: {
      id: {
        title: 'Permesinan CNC (Milling dan Turning)',
        shortTag: 'Kapabilitas utama',
        shortSummary:
          'Pemotongan komponen logam dan plastik teknik berbasis program CNC untuk prototipe satuan maupun produksi berulang.',
        overview:
          'Kami mengerjakan proses CNC milling untuk komponen berbentuk blok, pelat, rumah komponen, dan kontur bertingkat, serta CNC turning untuk komponen silindris seperti poros, bushing, flange, dan komponen berulir. Kesanggupan toleransi dan jadwal pengerjaan dikonfirmasi tim engineering kami saat meninjau gambar teknik Anda.',
        partsHeading: 'Contoh komponen yang dikerjakan',
        typicalParts: [
          'Bracket dudukan mesin, pelat adaptor, dan housing aluminium',
          'Poros bertingkat, pin penentu posisi, sleeve, dan flange baja',
          'Blok manifold, dudukan sensor, dan komponen mekanikal khusus',
          'Komponen plastik teknik untuk isolator dan pemandu konveyor',
        ],
        materialsHeading: 'Material yang biasa ditangani',
        materials: [
          'Aluminium seri 6061, 5052, dan paduan umum lainnya',
          'Baja karbon (S45C, SS400) dan baja perkakas',
          'Baja tahan karat (SUS304, SUS316)',
          'Kuningan, tembaga, POM, nilon, HDPE, dan PTFE',
        ],
        quoteNotesHeading: 'Hal yang perlu dicantumkan saat meminta penawaran',
        quoteNotes: [
          'File 3D STEP dan gambar 2D PDF yang menunjukkan dimensi kritis serta ulir',
          'Jenis material dan kebutuhan proses tambahan seperti anodizing atau perlakuan panas',
          'Jumlah pesanan awal dan apakah ada rencana pemesanan berulang',
        ],
        seoTitle: 'Permesinan CNC Milling dan Turning | PT Adhi Presisi Mandiri',
        seoDescription:
          'Jasa permesinan CNC milling dan turning untuk komponen logam dan plastik teknik dari Cikarang untuk pabrik di Jawa Barat.',
      },
      en: {
        title: 'CNC Machining (Milling and Turning)',
        shortTag: 'Core capability',
        shortSummary:
          'Programmed CNC metal and engineering plastic cutting for single prototypes as well as repeat production orders.',
        overview:
          'We run CNC milling for blocks, plates, housings, and stepped profiles alongside CNC turning for cylindrical parts including shafts, bushings, flanges, and threaded sleeves. Our engineering team confirms tolerance feasibility and lead time in writing during drawing review.',
        partsHeading: 'Typical machined components',
        typicalParts: [
          'Machine mounting brackets, adapter plates, and aluminum housings',
          'Stepped shafts, locating pins, sleeves, and steel flanges',
          'Manifold blocks, sensor mounts, and custom mechanical parts',
          'Engineering plastic insulators and conveyor guide parts',
        ],
        materialsHeading: 'Commonly machined materials',
        materials: [
          'Aluminum alloys including 6061 and 5052',
          'Carbon steel (S45C, SS400) and tool steel',
          'Stainless steel (SUS304, SUS316)',
          'Brass, copper, POM, nylon, HDPE, and PTFE',
        ],
        quoteNotesHeading: 'What to include for quotation',
        quoteNotes: [
          '3D STEP model paired with a 2D PDF marking critical fits and threads',
          'Material grade and any required secondary finish such as anodizing or heat treatment',
          'Initial order quantity and expected repeat order pattern',
        ],
        seoTitle: 'CNC Milling and Turning | PT Adhi Presisi Mandiri',
        seoDescription:
          'CNC milling and turning services for precision metal and engineering plastic components in Cikarang, West Java.',
      },
    },
  },
  {
    id: 'jig-dan-fixture',
    order: '02',
    featured: false,
    quoteParam: 'jig-dan-fixture',
    imageSlot: 'kapabilitas-jig',
    slug: {
      id: 'jig-dan-fixture',
      en: 'jigs-and-fixtures',
    },
    content: {
      id: {
        title: 'Jig dan Fixture',
        shortTag: 'Perkakas bantu produksi',
        shortSummary:
          'Pembuatan alat bantu penjepit, perakitan, pengelasan, dan pengecekan posisi agar pekerjaan di lini lebih konsisten.',
        overview:
          'Jig dan fixture yang tepat mengurangi kesalahan posisi operator serta mempercepat siklus perakitan. Tim kami membuat perkakas bantu berdasarkan gambar rancangan pabrik Anda maupun membantu menyusun konstruksi praktis dari sampel benda kerja yang hendak dijepit.',
        partsHeading: 'Jenis perkakas bantu yang dibuat',
        typicalParts: [
          'Assembly jig untuk mempercepat perakitan komponen di meja kerja',
          'Welding fixture dan penjepit benda kerja berbahan baja karbon',
          'Checking fixture sederhana untuk memverifikasi posisi lubang dan kontur',
          'Pallet dan dudukan benda kerja (workholding) untuk lini produksi',
        ],
        materialsHeading: 'Material yang biasa dipakai',
        materials: [
          'Baja karbon SS400 dan S45C untuk pelat dasar yang kaku',
          'Aluminium 6061 untuk jig ringan yang sering diangkat operator',
          'POM atau nilon pada titik kontak agar benda kerja tidak tergores',
          'Komponen standar seperti toggle clamp, pin pemandu, dan bushing baja',
        ],
        quoteNotesHeading: 'Hal yang perlu dicantumkan saat meminta penawaran',
        quoteNotes: [
          'Gambar jig bila sudah ada, atau gambar benda kerja yang akan ditopang jig',
          'Cara kerja operator di lini (manual, di atas meja, atau terpasang di mesin)',
          'Titik permukaan benda kerja yang tidak boleh tergores selama penjepitan',
        ],
        seoTitle: 'Pembuatan Jig dan Fixture | PT Adhi Presisi Mandiri',
        seoDescription:
          'Pembuatan assembly jig, welding fixture, checking fixture, dan workholding khusus untuk pabrik di Cikarang dan Jawa Barat.',
      },
      en: {
        title: 'Jigs and Fixtures',
        shortTag: 'Production tooling',
        shortSummary:
          'Custom workholding, assembly, welding, and checking fixtures built to keep production line positioning repeatable.',
        overview:
          'Well-built jigs and fixtures reduce operator positioning error and keep assembly cycles steady. We machine fixtures directly from your tooling drawings or work with your engineers from a sample workpiece to establish practical clamping points.',
        partsHeading: 'Typical tooling built',
        typicalParts: [
          'Assembly jigs for repeatable benchtop component positioning',
          'Carbon steel welding fixtures and mechanical clamping frames',
          'Straightforward checking fixtures for hole position and profile checks',
          'Workholding pallets and fixture nests for production stations',
        ],
        materialsHeading: 'Common materials used',
        materials: [
          'Carbon steel (SS400, S45C) for rigid base plates',
          '6061 aluminum for lightweight operator-handled fixtures',
          'POM or nylon contact pads to prevent scratching finished workpieces',
          'Standard hardware integration including toggle clamps, dowel pins, and bushings',
        ],
        quoteNotesHeading: 'What to include for quotation',
        quoteNotes: [
          'Tooling drawing if available, or the workpiece drawing to be held',
          'How operators load and unload the fixture at the station',
          'Surfaces on the workpiece that require non-marring contact',
        ],
        seoTitle: 'Jigs and Fixtures Fabrication | PT Adhi Presisi Mandiri',
        seoDescription:
          'Custom assembly jigs, welding fixtures, checking fixtures, and workholding tooling machined in Cikarang.',
      },
    },
  },
  {
    id: 'suku-cadang-mesin',
    order: '03',
    featured: false,
    quoteParam: 'suku-cadang',
    imageSlot: 'kapabilitas-sukucadang',
    slug: {
      id: 'suku-cadang-mesin',
      en: 'machine-spare-parts',
    },
    content: {
      id: {
        title: 'Suku Cadang Mesin',
        shortTag: 'Kebutuhan maintenance',
        shortSummary:
          'Pengadaan komponen pengganti untuk mesin produksi, konveyor, dan mesin pengemasan guna menekan waktu henti lini.',
        overview:
          'Kami memproduksi suku cadang mekanikal yang mengalami keausan harian pada mesin pabrik, mulai dari poros penggerak, roller, bushing, hingga komponen pemandu kemasan. Pengerjaan dapat mengikuti gambar resmi mesin maupun disesuaikan bersama tim maintenance Anda.',
        partsHeading: 'Contoh suku cadang yang dikerjakan',
        typicalParts: [
          'Poros (shaft), roller konveyor, dan rumah bearing (bearing housing)',
          'Bushing, spacer, coupling, dan puli mekanikal',
          'Guide rail, starwheel, dan blok pemandu mesin pengemasan',
          'Pin pengunci, tuas mekanikal, dan blok penahan pada lini produksi',
        ],
        materialsHeading: 'Material yang biasa dipakai',
        materials: [
          'Baja tahan karat SUS304 dan SUS316 untuk lini pengemasan makanan dan minuman',
          'Baja karbon S45C dan baja paduan untuk poros dan komponen beban gesek',
          'Kuningan dan perunggu (bronze) untuk bushing gesek',
          'HDPE, POM, dan nilon untuk pemandu kemasan dan komponen tahan aus',
        ],
        quoteNotesHeading: 'Hal yang perlu dicantumkan saat meminta penawaran',
        quoteNotes: [
          'Gambar teknik komponen atau kode pasangan standar seperti ukuran bearing dan seal',
          'Kondisi keausan yang sering terjadi agar pemilihan material dapat dievaluasi',
          'Kebutuhan jumlah stok cadangan untuk jadwal perawatan pabrik',
        ],
        seoTitle: 'Suku Cadang Mesin Industri | PT Adhi Presisi Mandiri',
        seoDescription:
          'Pembuatan suku cadang mesin produksi, poros stainless steel, bushing, roller, dan komponen konveyor dari Cikarang.',
      },
      en: {
        title: 'Machine Spare Parts',
        shortTag: 'Plant maintenance',
        shortSummary:
          'Replacement mechanical parts for production lines, conveyors, and packaging machinery to help limit equipment downtime.',
        overview:
          'We machine mechanical wear parts subjected to daily factory operation, from drive shafts and rollers to bushings and packaging guides. Production follows either your machine drawings or dimensions verified alongside your maintenance engineers.',
        partsHeading: 'Typical spare parts machined',
        typicalParts: [
          'Drive shafts, conveyor rollers, and custom bearing housings',
          'Bushings, spacers, mechanical couplings, and pulleys',
          'Packaging machine guide rails, starwheels, and wear blocks',
          'Locking pins, mechanical levers, and line stoppers',
        ],
        materialsHeading: 'Common materials used',
        materials: [
          'SUS304 and SUS316 stainless steel for food and beverage packaging lines',
          'S45C carbon steel and alloy steel for shafts and high-load wear parts',
          'Brass and bronze for sliding bushings',
          'HDPE, POM, and nylon for low-friction guides and wear strips',
        ],
        quoteNotesHeading: 'What to include for quotation',
        quoteNotes: [
          'Part drawing or standard mating component codes such as bearing and seal sizes',
          'Notes on how the existing part typically wears out',
          'Quantity needed for immediate replacement plus planned spare stock',
        ],
        seoTitle: 'Industrial Machine Spare Parts | PT Adhi Presisi Mandiri',
        seoDescription:
          'Custom machined shafts, rollers, bushings, and packaging machine spare parts produced in Cikarang for West Java plants.',
      },
    },
  },
  {
    id: 'pembuatan-ulang-komponen',
    order: '04',
    featured: false,
    quoteParam: 'pembuatan-ulang',
    imageSlot: 'kapabilitas-reverse',
    slug: {
      id: 'pembuatan-ulang-komponen',
      en: 'reverse-engineering',
    },
    content: {
      id: {
        title: 'Pembuatan Ulang Komponen (Reverse Engineering)',
        shortTag: 'Tanpa gambar lama',
        shortSummary:
          'Pengukuran ulang komponen fisik yang sudah aus atau tidak memiliki gambar, lalu dibuatkan gambar kerja dan produk barunya.',
        overview:
          'Banyak mesin produksi yang masih andal tidak lagi didukung gambar pabrik pembuatnya. Tim engineering kami mengukur sampel fisik yang Anda kirim, merekonstruksi dimensi kerja yang sudah aus, menyusun gambar kerja untuk persetujuan Anda, lalu memproduksi komponen penggantinya.',
        partsHeading: 'Kapan kapabilitas ini paling dibutuhkan',
        typicalParts: [
          'Suku cadang mesin impor lama yang sudah dihentikan produksinya oleh pabrikan asal',
          'Roda gigi sederhana, poros beralur pasak, dan rumah bearing yang sudah aus',
          'Komponen bracket atau blok mesin yang patah tanpa dokumen CAD tersisa',
          'Komponen lama yang membutuhkan sedikit modifikasi agar lebih tahan pakai',
        ],
        materialsHeading: 'Tahapan penanganan sampel',
        materials: [
          'Penerimaan sampel fisik (utuh maupun pecah selama masih dapat dirakit untuk diukur)',
          'Pengukuran dimensi utama, jarak pusat lubang, profil ulir, dan identifikasi jenis bahan',
          'Pembuatan gambar kerja persetujuan agar tim maintenance Anda dapat memverifikasi ukuran',
          'Pemesinan komponen baru serta penyimpanan arsip gambar untuk pesanan berikutnya',
        ],
        quoteNotesHeading: 'Hal yang perlu dicantumkan saat meminta penawaran',
        quoteNotes: [
          'Foto jelas komponen lama dari beberapa sisi beserta pembanding ukuran sederhana (seperti penggaris)',
          'Keterangan bagian mana pada sampel yang sudah aus agar ukuran asli dapat direkonstruksi',
          'Ketersediaan sampel fisik atau komponen pasangan untuk dikirim ke bengkel Cikarang',
        ],
        seoTitle: 'Pembuatan Ulang Komponen (Reverse Engineering) | PT Adhi Presisi Mandiri',
        seoDescription:
          'Layanan pengukuran ulang dan pembuatan kembali komponen mesin dari sampel fisik tanpa gambar teknik di Cikarang.',
      },
      en: {
        title: 'Component Reverse Engineering',
        shortTag: 'From physical sample',
        shortSummary:
          'Measuring worn or undocumented physical parts, drafting a confirmation drawing, and machining the replacement component.',
        overview:
          'Reliable production machinery often outlives its original spare-part catalog and drawings. Our engineers measure your physical sample, account for worn mating surfaces, prepare a confirmation drawing for your sign-off, and machine the new replacement part.',
        partsHeading: 'Where this capability helps most',
        typicalParts: [
          'Legacy imported machine parts discontinued by the original manufacturer',
          'Worn spur gears, keyed shafts, and custom bearing housings',
          'Broken brackets or mechanical blocks with no surviving CAD files',
          'Existing components needing minor reinforcement against recurring wear',
        ],
        materialsHeading: 'How physical samples are handled',
        materials: [
          'Receiving your physical sample (intact or fractured pieces that can be aligned)',
          'Measuring key dimensions, hole centers, thread pitches, and identifying base material',
          'Drafting a confirmation drawing for your maintenance team to approve before cutting',
          'Machining the replacement and archiving the drawing for future reorders',
        ],
        quoteNotesHeading: 'What to include for quotation',
        quoteNotes: [
          'Clear photos of the old part from multiple angles next to a ruler for rough scale',
          'Notes on which areas are worn down so nominal working sizes can be restored',
          'Whether the physical sample or its mating part can be sent to our Cikarang workshop',
        ],
        seoTitle: 'Component Reverse Engineering | PT Adhi Presisi Mandiri',
        seoDescription:
          'Reverse engineering and replacement part machining from physical samples when original technical drawings are missing.',
      },
    },
  },
];

// JANGAN UBAH: Fungsi pembantu untuk membentuk URL halaman detail kapabilitas sesuai bahasa.
export function getCapabilityHref(capability: CapabilityItem, lang: Lang): string {
  return lang === 'id'
    ? `/kapabilitas/${capability.slug.id}/`
    : `/en/capabilities/${capability.slug.en}/`;
}