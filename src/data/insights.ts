/*
PANDUAN EDIT
File: src/data/insights.ts
Fungsi: Menyimpan daftar dan isi lengkap 3 artikel teknis di halaman Wawasan dan pratinjau Beranda dalam bahasa Indonesia dan Inggris.
Boleh diedit: Judul, kategori, ringkasan, dan seluruh subbagian paragraf atau poin di setiap artikel.
Jangan diubah: Nilai slug.id dan slug.en tanpa ikut memperbarui pasangan jalurnya di src/i18n/routes.ts.
Cara mengedit: Ubah isi di dalam sections pada objek id dan en. Tulis lugas untuk pembaca pabrik tanpa angka klaim palsu atau tanda pisah panjang.
*/

import type { ImageSlotId } from './images';
import type { Lang } from '../i18n/routes';

export interface InsightSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface InsightLocaleContent {
  category: string;
  title: string;
  excerpt: string;
  readingLabel: string;
  seoTitle: string;
  seoDescription: string;
  sections: InsightSection[];
}

export interface InsightItem {
  id: string;
  order: string;
  imageSlot: ImageSlotId;
  slug: Record<Lang, string>;
  content: Record<Lang, InsightLocaleContent>;
}

// EDIT: Isi lengkap 3 artikel teknis dalam dua bahasa.
export const insightsData: InsightItem[] = [
  {
    id: 'menyiapkan-gambar-teknik-cnc',
    order: '01',
    imageSlot: 'wawasan-gambar-teknik',
    slug: {
      id: 'menyiapkan-gambar-teknik-cnc',
      en: 'preparing-cnc-engineering-drawings',
    },
    content: {
      id: {
        category: 'Gambar teknik',
        title: 'Cara menyiapkan gambar teknik agar penawaran CNC lebih cepat diproses',
        excerpt:
          'Hal paling penting pada file 3D STEP dan gambar 2D PDF yang membantu tim engineering menghindari tanya-jawab berulang sebelum produksi.',
        readingLabel: 'Panduan penyiapan file',
        seoTitle: 'Cara Menyiapkan Gambar Teknik CNC | PT Adhi Presisi Mandiri',
        seoDescription:
          'Panduan praktis menyiapkan file STEP, DWG, DXF, dan PDF berdimensi agar peninjauan penawaran permesinan CNC lebih cepat.',
        sections: [
          {
            heading: 'Mengapa file 3D dan gambar 2D sebaiknya dikirim bersamaan',
            paragraphs: [
              'File 3D berformat STEP sangat membantu programmer CNC membaca bentuk geometri, kontur, dan kedalaman saku secara langsung ke perangkat lunak CAM. Namun model 3D saja tidak membawa informasi penting seperti jenis ulir, catatan kekasaran permukaan, atau dimensi mana yang berpasangan rapat dengan komponen lain.',
              'Dengan melampirkan gambar 2D PDF, DWG, atau DXF bersama file STEP, tim engineering kami dapat membaca seluruh catatan kerja sekaligus tanpa perlu mengirim email klarifikasi berulang kepada staf pembelian maupun engineer pabrik Anda.',
            ],
          },
          {
            heading: 'Informasi inti yang sebaiknya tertulis jelas pada gambar',
            paragraphs: [
              'Tidak semua dimensi pada sebuah komponen membutuhkan ketelitian yang sama. Memisahkan dimensi biasa dari dimensi kritis membuat perhitungan biaya lebih wajar dan proses pemeriksaan di meja QC lebih terarah.',
            ],
            bullets: [
              'Jenis material yang diminta secara spesifik, misalnya aluminium 6061, baja S45C, atau stainless SUS304, bukan sekadar tulisan besi atau aluminium.',
              'Penandaan jelas pada lubang berulir (ukuran dan pitch ulir), lubang pasak, serta lubang dudukan bearing atau pin pemandu.',
              'Tanda khusus pada dimensi kritis yang berpasangan dengan komponen lain agar tim QC kami memprioritaskannya saat inspeksi akhir.',
              'Kebutuhan proses tambahan bila ada, seperti perlakuan panas, pelapisan permukaan, atau catatan tepi yang tidak boleh tajam.',
            ],
          },
          {
            heading: 'Hal kecil yang sering memperlambat proses penawaran',
            paragraphs: [
              'Kendala yang paling sering kami temui saat peninjauan awal adalah gambar hasil pindaian yang buram pada angka dimensi, satuan ukuran yang tidak tercantum (milimeter atau inci), serta ketidakcocokan revisi antara file 3D dan gambar 2D PDF.',
              'Sebelum mengirim berkas permintaan penawaran, pastikan nomor revisi di sudut kanan bawah gambar sudah versi terakhir dan cantumkan jumlah perkiraan pesanan. Untuk kesanggupan toleransi serta jadwal pengerjaan, tim engineering kami mengonfirmasinya secara tertulis setelah meninjau gambar lengkap Anda.',
            ],
          },
        ],
      },
      en: {
        category: 'Engineering drawings',
        title: 'How to prepare engineering drawings for faster CNC quotations',
        excerpt:
          'Practical details to include in your 3D STEP and 2D PDF drawings so our engineers can quote accurately without back-and-forth clarifications.',
        readingLabel: 'File preparation guide',
        seoTitle: 'Preparing CNC Engineering Drawings | PT Adhi Presisi Mandiri',
        seoDescription:
          'Practical checklist for preparing STEP, DWG, DXF, and dimensioned PDF drawings to speed up CNC machining review.',
        sections: [
          {
            heading: 'Why sending both 3D and 2D files saves review time',
            paragraphs: [
              'A 3D STEP model lets our CNC programmers read contours, pocket depths, and hole positions directly into CAM software. On its own, however, a 3D file does not carry thread callouts, surface finish notes, or which bores mate tightly with bearings and dowel pins.',
              'Pairing your STEP model with a dimensioned 2D PDF, DWG, or DXF drawing lets our engineering team review every requirement in one pass instead of holding up your quotation with follow-up emails.',
            ],
          },
          {
            heading: 'Key details worth marking clearly on the drawing',
            paragraphs: [
              'Not every feature on a machined part carries the same functional demand. Separating standard dimensions from critical fits keeps machining cost sensible and focuses final QC checks where they matter.',
            ],
            bullets: [
              'Specific material grade such as 6061 aluminum, S45C carbon steel, or SUS304 stainless steel rather than generic metal labels.',
              'Complete thread callouts (diameter, pitch, and depth), keyways, and bearing or locating pin fits.',
              'Clear callouts on mating surfaces and critical dimensions so our QC team checks them directly before packing.',
              'Secondary process notes if required, including heat treatment, surface coating, or edge-break requirements.',
            ],
          },
          {
            heading: 'Common snags that delay quotation turnaround',
            paragraphs: [
              'The most frequent delays come from low-resolution scanned drawings with unreadable numbers, missing unit labels (millimeters versus inches), or mismatched revisions between the 3D STEP model and the 2D PDF.',
              'Before sending your RFQ package, confirm that both files share the same revision level and include your estimated order quantity. Our engineering team confirms achievable tolerances and production schedule in writing once we review the complete drawing.',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'memilih-material-logam-komponen-mesin',
    order: '02',
    imageSlot: 'wawasan-material',
    slug: {
      id: 'memilih-material-logam-komponen-mesin',
      en: 'selecting-metal-materials-machine-parts',
    },
    content: {
      id: {
        category: 'Material',
        title: 'Perbandingan praktis aluminium 6061, baja S45C, dan stainless SUS304 untuk komponen pabrik',
        excerpt:
          'Pertimbangan beban kerja, ketahanan karat, dan kemudahan pengerjaan saat memilih bahan untuk jig, bracket, maupun poros mesin.',
        readingLabel: 'Referensi material',
        seoTitle: 'Memilih Material Logam Komponen Mesin | PT Adhi Presisi Mandiri',
        seoDescription:
          'Perbandingan praktis aluminium 6061, baja karbon S45C, dan stainless steel SUS304 untuk jig, bracket, dan suku cadang pabrik.',
        sections: [
          {
            heading: 'Aluminium 6061 untuk komponen ringan dan perkakas angkat manual',
            paragraphs: [
              'Aluminium seri 6061 banyak dipilih untuk bracket sensor, housing komponen elektronik, pelat dudukan, serta jig perakitan yang sering dipindahkan oleh operator. Bobotnya ringan, relatif cepat dipotong pada mesin CNC milling, dan tahan terhadap korosi ringan di dalam ruangan.',
              'Bahan ini kurang cocok dipakai pada area gesekan logam-ke-logam berbeban berat atau ulir yang sangat sering dibongkar pasang setiap hari tanpa sisipan ulir baja.',
            ],
          },
          {
            heading: 'Baja karbon S45C untuk kekuatan mekanikal dan beban gesek',
            paragraphs: [
              'Ketika komponen menerima beban tarik, benturan, atau putaran terus-menerus seperti poros penggerak, pelat dasar jig pengelasan, maupun roda gigi sederhana, baja karbon S45C menjadi pilihan yang jauh lebih kokoh dibanding aluminium.',
              'Perlu diperhatikan bahwa baja karbon tetap rentan terhadap karat bila bekerja di ruang lembap atau terkena air. Jika lingkungan mesin sering basah, pertimbangkan pelapisan pelindung permukaan atau beralih ke baja tahan karat.',
            ],
          },
          {
            heading: 'Stainless steel SUS304 untuk area basah dan mesin pengemasan makanan',
            paragraphs: [
              'Di pabrik makanan, minuman, dan pengemasan yang rutin dicuci setiap pergantian shift, baja tahan karat SUS304 menjadi standar umum karena tidak mudah berkarat dan permukaannya mudah dibersihkan.',
              'Dari sisi permesinan, stainless steel lebih ulet dan membutuhkan kecepatan potong yang lebih terkendali dibanding aluminium atau baja karbon biasa. Karena itu, pemakaian stainless sebaiknya difokuskan pada komponen yang memang terpapar cairan, uap, atau bahan pangan.',
            ],
          },
          {
            heading: 'Menentukan pilihan saat masih ragu',
            paragraphs: [
              'Jika Anda belum menetapkan grade material secara pasti, jelaskan saja lingkungan kerja mesin, beban yang diterima, serta apakah komponen bersentuhan dengan komponen baja keras lain. Tim engineering kami dapat memberi pertimbangan opsi bahan yang tersedia di pasar lokal sebelum penawaran disusun.',
            ],
            bullets: [
              'Pilih aluminium 6061 bila prioritas utama adalah bobot ringan dan kemudahan pemesinan.',
              'Pilih baja S45C atau SS400 bila prioritas utama adalah kekakuan struktur dan ketahanan beban.',
              'Pilih SUS304 atau SUS316 bila komponen rutin terkena air, bahan pembersih, atau berada di lini pengemasan makanan.',
            ],
          },
        ],
      },
      en: {
        category: 'Materials',
        title: 'Practical comparison of 6061 aluminum, S45C steel, and SUS304 stainless for factory parts',
        excerpt:
          'Weighing load demands, corrosion resistance, and machinability when selecting stock for jigs, brackets, and machine shafts.',
        readingLabel: 'Material reference',
        seoTitle: 'Selecting Metal Materials for Machine Parts | PT Adhi Presisi Mandiri',
        seoDescription:
          'Practical guide comparing 6061 aluminum, S45C carbon steel, and SUS304 stainless steel for industrial jigs and spare parts.',
        sections: [
          {
            heading: '6061 aluminum for lightweight parts and hand-carried fixtures',
            paragraphs: [
              '6061 aluminum is widely used for sensor brackets, electronics housings, mounting plates, and assembly jigs that operators lift repeatedly across a shift. It machines cleanly on CNC mills and resists indoor oxidation without heavy coating.',
              'It is less suitable for heavy metal-on-metal wear surfaces or threaded holes subjected to constant daily disassembly without steel thread inserts.',
            ],
          },
          {
            heading: 'S45C carbon steel for structural stiffness and mechanical load',
            paragraphs: [
              'When a part carries steady torque, clamping force, or impact, such as drive shafts, welding fixture base plates, and replacement gears, S45C carbon steel delivers far higher strength and wear resistance than aluminum.',
              'Carbon steel will rust in humid or washdown environments. If the machine runs wet, plan for a protective surface finish or step up to stainless steel.',
            ],
          },
          {
            heading: 'SUS304 stainless steel for washdown areas and packaging lines',
            paragraphs: [
              'Across food, beverage, and packaging plants cleaned daily with water and sanitizers, SUS304 stainless steel is the practical choice because it resists corrosion and cleans down reliably.',
              'Stainless steel work-hardens during cutting and takes slower machining speeds than aluminum or carbon steel, so it makes the most sense on parts directly exposed to moisture, washdown spray, or product contact.',
            ],
          },
          {
            heading: 'How to decide when material grade is still open',
            paragraphs: [
              'If your team has not locked in a material specification yet, describe the operating environment, load direction, and mating parts in your inquiry. Our engineers will suggest locally available stock options during technical review.',
            ],
            bullets: [
              'Choose 6061 aluminum when low weight and fast machining turnaround matter most.',
              'Choose S45C or SS400 carbon steel when rigidity and mechanical load capacity lead the requirement.',
              'Choose SUS304 or SUS316 stainless steel when the part sees water, cleaning agents, or food packaging washdowns.',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'kapan-memilih-reverse-engineering',
    order: '03',
    imageSlot: 'wawasan-reverse-engineering',
    slug: {
      id: 'kapan-memilih-reverse-engineering',
      en: 'when-to-choose-reverse-engineering',
    },
    content: {
      id: {
        category: 'Suku cadang',
        title: 'Kapan tim maintenance sebaiknya memilih pembuatan ulang komponen dari sampel fisik',
        excerpt:
          'Cara menilai apakah suku cadang aus lebih tepat dibuat ulang di bengkel lokal beserta data yang sebaiknya dibawa bersama sampel.',
        readingLabel: 'Catatan maintenance',
        seoTitle: 'Kapan Memilih Reverse Engineering Komponen | PT Adhi Presisi Mandiri',
        seoDescription:
          'Panduan bagi tim maintenance pabrik untuk memutuskan pembuatan ulang komponen dari sampel fisik saat gambar teknik tidak tersedia.',
        sections: [
          {
            heading: 'Situasi di pabrik yang tepat untuk pembuatan ulang lokal',
            paragraphs: [
              'Tidak setiap suku cadang yang rusak harus dibuat ulang. Komponen standar katalog seperti bearing, baut metrik, atau seal oli hampir selalu lebih ekonomis dibeli langsung dari distributor komponen standar.',
              'Pembuatan ulang (reverse engineering) menjadi pilihan paling masuk akal ketika komponen berbentuk khusus buatan pabrikan mesin asal, gambar tekniknya tidak disertakan dalam buku manual, atau suku cadang impor tersebut sudah dihentikan produksinya dan membuat lini terancam berhenti lama.',
            ],
          },
          {
            heading: 'Menilai kelayakan sampel fisik yang sudah aus atau patah',
            paragraphs: [
              'Sampel tidak selalu harus dalam kondisi utuh sempurna untuk bisa diukur ulang. Poros yang tergerus di satu sisi atau bracket yang patah dua masih sering dapat direkonstruksi asalkan bidang referensi utamanya masih terbaca.',
              'Saat menyerahkan sampel ke bengkel, beri tahu engineer kami bagian mana yang telah menipis akibat gesekan. Informasi itu penting agar kami tidak menyalin ukuran yang sudah aus, melainkan mengembalikannya ke ukuran nominal kerja yang benar.',
            ],
          },
          {
            heading: 'Data pendamping yang mempercepat pengukuran di bengkel',
            paragraphs: [
              'Membawa informasi pasangan kerja komponen sangat meningkatkan ketepatan hasil pengukuran ulang sebelum gambar kerja konfirmasi dibuat.',
            ],
            bullets: [
              'Nomor kode bearing, seal, puli, atau rantai standar yang terpasang langsung pada komponen tersebut.',
              'Komponen pasangannya bila memungkinkan dibawa sebentar ke bengkel untuk uji kecocokan langsung.',
              'Catatan singkat penyebab kerusakan sebelumnya (misalnya cepat aus, melengkung, atau berkarat) untuk mengevaluasi apakah pemilihan bahan perlu disesuaikan.',
              'Foto posisi komponen saat masih terpasang di mesin agar arah beban dan ruang bebas di sekitarnya terlihat jelas.',
            ],
          },
        ],
      },
      en: {
        category: 'Spare parts',
        title: 'When factory maintenance teams should choose reverse engineering from a worn sample',
        excerpt:
          'How to judge whether a worn part makes sense to reconstruct locally and what supporting notes to bring along with the physical sample.',
        readingLabel: 'Maintenance notes',
        seoTitle: 'When to Choose Reverse Engineering | PT Adhi Presisi Mandiri',
        seoDescription:
          'Practical guide for factory maintenance teams deciding when to machine replacement parts from physical samples.',
        sections: [
          {
            heading: 'When local reconstruction makes practical sense',
            paragraphs: [
              'Not every damaged part should be custom machined. Off-the-shelf catalog items such as standard bearings, fasteners, and oil seals are almost always better sourced directly from standard industrial distributors.',
              'Reverse engineering makes sense when a wear part is proprietary to an imported machine, the original manual omits dimensional drawings, or the manufacturer has discontinued spares while your line needs to stay running.',
            ],
          },
          {
            heading: 'Judging whether a worn or broken sample can still be measured',
            paragraphs: [
              'A physical sample does not need to be intact to be reconstructed. A scored shaft or a fractured bracket can often be measured accurately as long as enough unworn reference faces remain.',
              'When handing over a worn sample, tell our engineers which surfaces experienced wear. That keeps us from copying worn-down dimensions and helps restore the intended working size on the confirmation drawing.',
            ],
          },
          {
            heading: 'Supporting details to bring along with the sample',
            paragraphs: [
              'Sharing context about how the component sits inside the machine speeds up measurement and improves fit on the first installation.',
            ],
            bullets: [
              'Standard part numbers for mating bearings, seals, keys, or chains fitted to the component.',
              'The mating part itself if it can be brought briefly to our workshop for a physical fit check.',
              'Brief notes on how the previous part failed (wear, bending, or corrosion) in case a material adjustment is helpful.',
              'Photos showing the component mounted inside the machine so surrounding clearances are clear.',
            ],
          },
        ],
      },
    },
  },
];

// JANGAN UBAH: Fungsi pembantu untuk membentuk URL halaman detail artikel sesuai bahasa.
export function getInsightHref(insight: InsightItem, lang: Lang): string {
  return lang === 'id'
    ? `/wawasan/${insight.slug.id}/`
    : `/en/insights/${insight.slug.en}/`;
}