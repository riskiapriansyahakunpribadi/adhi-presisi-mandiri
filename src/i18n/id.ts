/*
PANDUAN EDIT
File: src/i18n/id.ts
Fungsi: Menyimpan struktur tipe teks situs (SiteCopy) dan seluruh teks tampilan dalam bahasa Indonesia.
Boleh diedit: Seluruh isi teks di dalam objek idCopy.
Jangan diubah: Interface SiteCopy dan nama kunci objek agar selalu sinkron dengan src/i18n/en.ts.
Cara mengedit: Ubah kalimat di dalam tanda kutip tanpa menghapus koma di akhir baris. Hindari emoji dan tanda pisah panjang.
*/

import type { RouteKey } from './routes';
import type { ImageSlotId } from '../data/images';

export type AdvantageIconName = 'blueprint' | 'document' | 'caliper' | 'wrench';

// JANGAN UBAH: Kontrak struktur teks agar file id.ts dan en.ts selalu memiliki kunci yang lengkap dan seragam.
export interface SiteCopy {
  locale: string;
  langLabel: string;
  skipToContent: string;
  siteTagline: string;
  nav: {
    ariaLabel: string;
    menuButton: string;
    closeMenu: string;
    languageSwitchAria: string;
    items: Array<{ key: RouteKey; label: string }>;
    cta: string;
  };
  common: {
    backToList: string;
    viewServiceDetail: string;
    viewCapabilityDetail: string;
    readArticle: string;
    requestQuote: string;
    viewCapabilities: string;
    viewAllServices: string;
    viewAllCapabilities: string;
    viewAllProjects: string;
    viewAllInsights: string;
    viewFaq: string;
    whatsappFallbackLabel: string;
    whatsappUnavailableNote: string;
    placeholderImagePrefix: string;
    placeholderSizePrefix: string;
    illustrativeBadge: string;
    emptyListTitle: string;
    emptyListBody: string;
  };
  hero: {
    titleLines: string[];
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    infoCardHeading: string;
    infoCardItems: Array<{ label: string; value: string }>;
  };
  home: {
    aboutSection: {
      heading: string;
      lead: string;
      body: string;
      cta: string;
    };
    qualitySection: {
      statement: string;
      body: string;
      points: string[];
    };
    capabilitiesSection: {
      heading: string;
      intro: string;
    };
    servicesSection: {
      heading: string;
      intro: string;
    };
    advantagesSection: {
      heading: string;
      items: Array<{
        icon: AdvantageIconName;
        title: string;
        description: string;
      }>;
    };
    workflowSection: {
      heading: string;
      intro: string;
      steps: Array<{
        code: string;
        mark: string;
        title: string;
        description: string;
      }>;
    };
    insightsSection: {
      heading: string;
      intro: string;
    };
    quoteBanner: {
      heading: string;
      body: string;
      cta: string;
    };
  };
  pages: {
    home: {
      title: string;
      description: string;
    };
    about: {
      title: string;
      description: string;
      heading: string;
      intro: string;
      principlesHeading: string;
      principles: Array<{ title: string; body: string }>;
      facilityHeading: string;
      facilityBody: string;
      ctaHeading: string;
      ctaButton: string;
    };
    services: {
      title: string;
      description: string;
      heading: string;
      intro: string;
    };
    capabilities: {
      title: string;
      description: string;
      heading: string;
      intro: string;
    };
    industries: {
      title: string;
      description: string;
      heading: string;
      intro: string;
      sectors: Array<{
        id: string;
        imageSlot: ImageSlotId;
        name: string;
        summary: string;
        examples: string[];
      }>;
      ctaHeading: string;
      ctaBody: string;
      ctaButton: string;
    };
    projects: {
      title: string;
      description: string;
      heading: string;
      intro: string;
      noticeTitle: string;
      noticeBody: string;
    };
    insights: {
      title: string;
      description: string;
      heading: string;
      intro: string;
    };
    faq: {
      title: string;
      description: string;
      heading: string;
      intro: string;
      items: Array<{ question: string; answer: string }>;
      ctaHeading: string;
      ctaButton: string;
    };
    quote: {
      title: string;
      description: string;
      heading: string;
      intro: string;
    };
    notFound: {
      title: string;
      description: string;
      code: string;
      heading: string;
      body: string;
      homeCta: string;
      quoteCta: string;
    };
  };
  quoteForm: {
    formAriaLabel: string;
    fields: {
      fullName: {
        label: string;
        placeholder: string;
        errorRequired: string;
      };
      company: {
        label: string;
        placeholder: string;
        errorRequired: string;
      };
      email: {
        label: string;
        placeholder: string;
        errorRequired: string;
        errorInvalid: string;
      };
      phone: {
        label: string;
        placeholder: string;
        errorRequired: string;
      };
      plantLocation: {
        label: string;
        placeholder: string;
        errorRequired: string;
      };
      needType: {
        label: string;
        hint: string;
        errorRequired: string;
        options: Array<{ value: string; label: string }>;
      };
      quantity: {
        label: string;
        placeholder: string;
      };
      details: {
        label: string;
        placeholder: string;
        errorRequired: string;
      };
      honeypotLabel: string;
    };
    drawingNote: string;
    submitButton: string;
    submittingButton: string;
    status: {
      submitting: string;
      successTitle: string;
      successBody: string;
      errorNoEndpointTitle: string;
      errorNoEndpointBody: string;
      errorNetworkTitle: string;
      errorNetworkBody: string;
      validationSummary: string;
    };
    sidebar: {
      heading: string;
      whatsappHeading: string;
      whatsappBody: string;
      whatsappButton: string;
      contactHeading: string;
      hoursLabel: string;
      addressLabel: string;
      phoneLabel: string;
      emailLabel: string;
      checklistHeading: string;
      checklist: string[];
    };
  };
  footer: {
    navigationHeading: string;
    capabilitiesHeading: string;
    contactHeading: string;
    ctaHeading: string;
    ctaBody: string;
    ctaButton: string;
    hoursLabel: string;
    phoneLabel: string;
    emailLabel: string;
    demoNotice: string;
    copyrightPrefix: string;
  };
}

export const idCopy: SiteCopy = {
  locale: 'id-ID',
  langLabel: 'Bahasa Indonesia',
  skipToContent: 'Lompat ke konten utama',
  siteTagline: 'Permesinan presisi dan engineering dari Cikarang',

  nav: {
    ariaLabel: 'Navigasi utama',
    menuButton: 'Menu',
    closeMenu: 'Tutup menu',
    languageSwitchAria: 'Ganti bahasa ke English',
    items: [
      { key: 'about', label: 'Tentang' },
      { key: 'services', label: 'Layanan' },
      { key: 'capabilities', label: 'Kapabilitas' },
      { key: 'industries', label: 'Industri' },
      { key: 'projects', label: 'Proyek' },
      { key: 'insights', label: 'Wawasan' },
      { key: 'faq', label: 'FAQ' },
    ],
    cta: 'Kirim gambar teknik',
  },

  common: {
    backToList: 'Kembali ke daftar',
    viewServiceDetail: 'Lihat detail layanan',
    viewCapabilityDetail: 'Lihat detail kapabilitas',
    readArticle: 'Baca artikel',
    requestQuote: 'Kirim gambar teknik',
    viewCapabilities: 'Lihat kapabilitas',
    viewAllServices: 'Lihat semua layanan',
    viewAllCapabilities: 'Lihat semua kapabilitas',
    viewAllProjects: 'Lihat contoh pekerjaan',
    viewAllInsights: 'Lihat semua wawasan',
    viewFaq: 'Baca pertanyaan teknis',
    whatsappFallbackLabel: 'Hubungi via WhatsApp',
    whatsappUnavailableNote:
      'Nomor WhatsApp belum dipasang. Isi variabel whatsappNumber pada src/data/company.ts untuk mengaktifkan tautan langsung.',
    placeholderImagePrefix: 'GAMBAR',
    placeholderSizePrefix: 'Ukuran disarankan',
    illustrativeBadge: 'Contoh ilustrasi pekerjaan',
    emptyListTitle: 'Belum ada data untuk ditampilkan',
    emptyListBody:
      'Daftar ini sedang diperbarui. Hubungi tim engineering kami langsung jika Anda membutuhkan informasi terkait pekerjaan ini.',
  },

  hero: {
    // EDIT: Teks utama hero beranda sesuai arahan proyek.
    titleLines: [
      'Komponen presisi,',
      'dikerjakan sesuai gambar teknik Anda.',
    ],
    subtitle:
      'PT Adhi Presisi Mandiri mengerjakan permesinan CNC, jig dan fixture, serta suku cadang mesin dari Cikarang untuk pabrik di Jawa Barat dan sekitarnya.',
    primaryCta: 'Kirim gambar teknik',
    secondaryCta: 'Lihat kapabilitas',
    infoCardHeading: 'Informasi penawaran awal',
    infoCardItems: [
      {
        label: 'Format gambar diterima',
        value: 'STEP, DWG, DXF, dan PDF berdimensi',
      },
      {
        label: 'Lingkup pengerjaan',
        value: 'Satuan, prototipe, jig, dan suku cadang mesin',
      },
      {
        label: 'Lokasi bengkel',
        value: 'Kawasan Industri Cikarang, Bekasi',
      },
    ],
  },

  home: {
    aboutSection: {
      heading: 'Dikerjakan dari Cikarang untuk kebutuhan produksi pabrik',
      lead: 'Kami berfokus pada pembuatan komponen mekanikal yang membutuhkan kesesuaian dimensi, keterulangan proses, dan komunikasi teknis yang jelas sejak peninjauan gambar.',
      body: 'Tim engineering kami meninjau setiap gambar teknik sebelum masuk ke mesin, memastikan pilihan material, urutan pemotongan, dan titik pemeriksaan mutu disepakati bersama pihak pembeli maupun engineer produksi.',
      cta: 'Kenali cara kerja bengkel kami',
    },
    qualitySection: {
      statement:
        'Setiap potongan logam dimulai dari pembacaan gambar yang teliti dan diakhiri dengan pemeriksaan dimensi sebelum keluar dari bengkel.',
      body: 'Kami tidak mengejar klaim di atas kertas. Setiap pekerjaan dicatat mulai dari bahan baku, tahapan pemesinan, hingga hasil pengukuran akhir agar tim QC dan maintenance di pabrik Anda menerima komponen yang siap pasang.',
      points: [
        'Tinjauan kemampuan pengerjaan sebelum penawaran dikeluarkan',
        'Catatan tahapan proses untuk memudahkan pemesanan ulang',
        'Pemeriksaan dimensi kritis sesuai penandaan pada gambar teknik',
      ],
    },
    capabilitiesSection: {
      heading: 'Empat kapabilitas inti bengkel kami',
      intro:
        'Lingkup pekerjaan mencakup pembuatan komponen baru dari gambar CAD maupun pembuatan ulang suku cadang dari sampel fisik yang sudah aus.',
    },
    servicesSection: {
      heading: 'Dukungan dari peninjauan gambar hingga pengiriman',
      intro:
        'Setiap tahap dijalankan terhubung agar staf pembelian dan engineer pabrik tidak perlu mengoordinasikan banyak bengkel terpisah.',
    },
    advantagesSection: {
      heading: 'Mengapa tim pabrik bekerja sama dengan kami',
      items: [
        {
          icon: 'blueprint',
          title: 'Dikerjakan sesuai gambar',
          description:
            'Tim kami mengacu langsung pada dimensi, proyeksi, dan catatan permukaan yang tertera pada gambar teknik Anda. Jika ada bagian yang berisiko sulit dikerjakan, kami diskusikan sebelum produksi dimulai.',
        },
        {
          icon: 'document',
          title: 'Proses terdokumentasi',
          description:
            'Urutan pengerjaan, jenis material, dan catatan pemeriksaan setiap pesanan disimpan rapi supaya pemesanan ulang di kemudian hari menghasilkan komponen yang konsisten.',
        },
        {
          icon: 'caliper',
          title: 'Inspeksi sebelum pengiriman',
          description:
            'Operator dan bagian QC kami memeriksa dimensi utama setiap komponen sebelum pengemasan agar tidak menghambat jadwal pemasangan di lini produksi Anda.',
        },
        {
          icon: 'wrench',
          title: 'Komunikasi teknis langsung dengan engineer',
          description:
            'Anda berbicara langsung dengan orang yang membaca gambar dan mengatur proses mesin, sehingga revisi kecil atau penyesuaian material dapat diputuskan lebih cepat.',
        },
      ],
    },
    workflowSection: {
      heading: 'Alur kerja dari gambar teknik ke komponen jadi',
      intro:
        'Lima langkah terukur yang dijalankan pada setiap permintaan penawaran hingga barang tiba di pabrik Anda.',
      steps: [
        {
          code: '01',
          mark: '0 mm',
          title: 'Kirim gambar atau sampel',
          description:
            'Kirim file STEP, DWG, DXF, PDF berdimensi, atau bawa sampel komponen lama jika gambar belum tersedia.',
        },
        {
          code: '02',
          mark: '25 mm',
          title: 'Tinjauan teknis dan penawaran',
          description:
            'Tim engineering kami memeriksa material, bentuk, dan tingkat kesulitan pengerjaan lalu mengirim penawaran tertulis.',
        },
        {
          code: '03',
          mark: '50 mm',
          title: 'Pembuatan di bengkel',
          description:
            'Setelah persetujuan order diterima, operator kami menyiapkan bahan baku, pemrograman CNC, dan pemesinan sesuai urutan kerja.',
        },
        {
          code: '04',
          mark: '75 mm',
          title: 'Inspeksi mutu',
          description:
            'Bagian QC kami mengukur dimensi penting sesuai gambar teknik dan memeriksa kebersihan tepi sebelum pengemasan.',
        },
        {
          code: '05',
          mark: '100 mm',
          title: 'Pengiriman ke pabrik',
          description:
            'Komponen dikemas rapi dengan pelindung benturan dan dikirim ke lokasi pabrik Anda atau siap diambil di bengkel Cikarang.',
        },
      ],
    },
    insightsSection: {
      heading: 'Catatan teknis untuk tim pembelian dan produksi',
      intro:
        'Panduan ringkas mengenai penyiapan gambar, pemilihan material, dan penanganan suku cadang mesin agar proses penawaran lebih cepat.',
    },
    quoteBanner: {
      heading: 'Siap meninjau gambar teknik Anda',
      body: 'Kirim rincian kebutuhan dan jenis komponen melalui formulir penawaran. Tim engineering kami meninjau spesifikasi Anda dan memberi tanggapan pada jam kerja.',
      cta: 'Buka formulir penawaran',
    },
  },

  pages: {
    home: {
      title: 'PT Adhi Presisi Mandiri | Permesinan CNC dan Komponen Presisi Cikarang',
      description:
        'PT Adhi Presisi Mandiri mengerjakan permesinan CNC, jig dan fixture, suku cadang mesin, serta pembuatan ulang komponen dari Cikarang untuk pabrik di Jawa Barat.',
    },
    about: {
      title: 'Tentang Kami | PT Adhi Presisi Mandiri',
      description:
        'Profil bengkel permesinan presisi dan engineering PT Adhi Presisi Mandiri di Kawasan Industri Cikarang, Bekasi.',
      heading: 'Bengkel permesinan presisi yang berangkat dari ketelitian membaca gambar',
      intro:
        'PT Adhi Presisi Mandiri melayani kebutuhan pembuatan komponen mekanikal, jig dan fixture, serta suku cadang mesin untuk pabrik di Cikarang, Bekasi, Karawang, dan kawasan industri Jawa Barat.',
      principlesHeading: 'Prinsip kerja kami di lantai produksi',
      principles: [
        {
          title: 'Jujur sejak peninjauan awal',
          body: 'Jika suatu fitur pada gambar membutuhkan penyesuaian alat atau waktu persiapan khusus, tim engineering kami menyampaikannya di awal sebelum penawaran disepakati.',
        },
        {
          title: 'Siap untuk satuan maupun produksi berulang',
          body: 'Banyak kebutuhan pabrik bermula dari satu unit jig atau suku cadang pengganti yang mendesak. Kami menerima pengerjaan prototipe, satuan, hingga batch kecil dan menengah.',
        },
        {
          title: 'Dekat dengan kawasan industri Jawa Barat',
          body: 'Lokasi bengkel di Cikarang memudahkan pengambilan sampel fisik untuk pembuatan ulang maupun koordinasi pengiriman komponen ke pabrik sekitar.',
        },
      ],
      facilityHeading: 'Fokus ruang lingkup bengkel',
      facilityBody:
        'Seluruh pekerjaan kami berpusat pada empat area: permesinan CNC milling dan turning, pembuatan jig dan fixture perakitan maupun inspeksi, penyediaan suku cadang mesin produksi, serta reverse engineering untuk komponen yang tidak lagi memiliki gambar resmi.',
      ctaHeading: 'Ingin membahas kebutuhan komponen pabrik Anda?',
      ctaButton: 'Kirim gambar teknik',
    },
    services: {
      title: 'Layanan | PT Adhi Presisi Mandiri',
      description:
        'Empat layanan utama PT Adhi Presisi Mandiri: desain dan engineering, produksi dan permesinan, inspeksi mutu, serta perawatan dan dukungan suku cadang.',
      heading: 'Layanan permesinan dan dukungan teknis',
      intro:
        'Setiap layanan dirancang untuk membantu tim maintenance, engineering, dan purchasing menyelesaikan pengadaan komponen mekanikal tanpa proses yang berbelit.',
    },
    capabilities: {
      title: 'Kapabilitas | PT Adhi Presisi Mandiri',
      description:
        'Kapabilitas bengkel PT Adhi Presisi Mandiri: permesinan CNC milling dan turning, jig dan fixture, suku cadang mesin, serta pembuatan ulang komponen.',
      heading: 'Kapabilitas pengerjaan logam dan perkakas bantu',
      intro:
        'Pilih kategori di bawah untuk melihat ruang lingkup pengerjaan, jenis komponen yang biasa ditangani, serta data yang perlu disiapkan saat meminta penawaran.',
    },
    industries: {
      title: 'Industri yang Dilayani | PT Adhi Presisi Mandiri',
      description:
        'Dukungan komponen presisi dan jig untuk pabrik otomotif, elektronik, plastik dan cetakan, serta mesin pengemasan makanan dan minuman di kawasan Cikarang.',
      heading: 'Mendukung operasional empat sektor industri utama di Jawa Barat',
      intro:
        'Kawasan Cikarang dan koridor industri Bekasi hingga Karawang memiliki kebutuhan komponen mekanikal yang berbeda pada setiap sektor. Kami menyesuaikan pemilihan material dan perlakuan permukaan sesuai lingkungan kerja mesin Anda.',
      sectors: [
        {
          id: 'otomotif',
          imageSlot: 'industri-otomotif',
          name: 'Otomotif dan komponen kendaraan',
          summary:
            'Pembuatan jig perakitan, checking fixture, bushing, bracket, dan suku cadang mesin lini produksi untuk pemasok komponen kendaraan roda dua maupun roda empat.',
          examples: [
            'Jig pengelasan dan fixture penjepit benda kerja',
            'Pin penentu posisi, stopper, dan komponen pengganti lini perakitan',
            'Bracket dan dudukan sensor berbahan baja karbon atau aluminium',
          ],
        },
        {
          id: 'elektronik',
          imageSlot: 'industri-elektronik',
          name: 'Elektronik dan peralatan listrik',
          summary:
            'Pengerjaan komponen aluminium dan plastik teknik untuk perangkat pengujian, rumah komponen, serta dudukan perakitan yang rapi dan bebas tepi tajam.',
          examples: [
            'Fixture uji papan sirkuit dan dudukan perakitan presisi',
            'Housing aluminium, pelat pendingin, dan pelat panel berlubang',
            'Komponen isolator dari POM, PTFE, atau akrilik teknik',
          ],
        },
        {
          id: 'plastik',
          imageSlot: 'industri-plastik',
          name: 'Plastik dan cetakan (mold)',
          summary:
            'Pembuatan komponen pendukung cetakan injeksi, pelat dudukan, blok inti sederhana, serta perbaikan suku cadang mekanikal pada mesin cetak plastik.',
          examples: [
            'Sisipan cetakan (insert), pelat penahan, dan blok geser',
            'Pin pemandu, bushing cetakan, dan blok pendingin',
            'Pembuatan ulang komponen mekanikal yang aus dari sampel lama',
          ],
        },
        {
          id: 'makanan',
          imageSlot: 'industri-makanan',
          name: 'Makanan dan minuman (mesin pengemasan)',
          summary:
            'Pembuatan suku cadang mesin pengemasan dan jalur konveyor menggunakan baja tahan karat (stainless steel) dan polimer teknik yang mudah dibersihkan.',
          examples: [
            'Poros penggerak, roller, dan dudukan bearing berbahan stainless steel',
            'Pemandu kemasan (guide rail), starwheel, dan blok penahan dari HDPE atau POM',
            'Pembuatan ulang komponen mesin impor yang suku cadangnya sulit didapat',
          ],
        },
      ],
      ctaHeading: 'Pabrik Anda berada di sektor lain?',
      ctaBody:
        'Selama komponen dikerjakan melalui proses pemotongan logam atau plastik teknik berdasarkan gambar maupun sampel, tim engineering kami siap meninjaunya.',
      ctaButton: 'Diskusikan kebutuhan komponen',
    },
    projects: {
      title: 'Contoh Pekerjaan | PT Adhi Presisi Mandiri',
      description:
        'Contoh ilustrasi jenis pekerjaan permesinan CNC, jig dan fixture, poros mesin, dan pembuatan ulang roda gigi oleh PT Adhi Presisi Mandiri.',
      heading: 'Contoh jenis pekerjaan',
      intro:
        'Halaman ini menampilkan contoh ilustrasi jenis komponen yang menjadi lingkup kerja bengkel kami. Seluruh contoh di bawah bersifat ilustratif tanpa mencantumkan nama klien maupun data produksi pihak ketiga.',
      noticeTitle: 'Catatan keterbukaan portofolio',
      noticeBody:
        'PT Adhi Presisi Mandiri adalah perusahaan fiktif untuk proyek demonstrasi desain website. Contoh pekerjaan di bawah menggambarkan jenis pekerjaan nyata di bengkel permesinan presisi, bukan klaim proyek klien nyata.',
    },
    insights: {
      title: 'Wawasan Teknis | PT Adhi Presisi Mandiri',
      description:
        'Artikel teknis praktis mengenai cara menyiapkan gambar teknik CNC, memilih material logam, dan kapan memilih reverse engineering.',
      heading: 'Wawasan teknis',
      intro:
        'Catatan praktis untuk membantu engineer produksi, tim maintenance, dan staf pembelian mempercepat peninjauan gambar dan menghindari revisi berulang.',
    },
    faq: {
      title: 'Pertanyaan Teknis (FAQ) | PT Adhi Presisi Mandiri',
      description:
        'Jawaban lugas seputar format gambar teknik, material yang dikerjakan, pesanan satuan, syarat permintaan penawaran, dan pengiriman.',
      heading: 'Pertanyaan yang sering diajukan tim pabrik',
      intro:
        'Jawaban di bawah berfokus pada hal teknis yang paling sering ditanyakan sebelum mengirim gambar teknik. Jika ada kebutuhan di luar daftar ini, sampaikan langsung melalui formulir penawaran.',
      items: [
        {
          question: 'Format gambar teknik apa saja yang diterima?',
          answer:
            'Tim engineering kami menerima file 3D berformat STEP (.stp atau .step) dan IGES, serta gambar 2D berformat DWG, DXF, dan PDF yang memuat ukuran lengkap. Untuk komponen dengan toleransi khusus atau ulir, sertakan gambar 2D PDF selain file 3D agar catatan permukaan dan batas ukuran terbaca jelas.',
        },
        {
          question: 'Material apa saja yang biasa dikerjakan di bengkel?',
          answer:
            'Kami mengerjakan aluminium (seperti seri 6061 dan 5052), baja karbon (seperti S45C dan SS400), baja perkakas, baja tahan karat (stainless steel seperti SUS304 dan SUS316), kuningan, tembaga, serta plastik teknik seperti POM (Delrin), nilon, HDPE, dan PTFE. Ketersediaan material khusus akan dikonfirmasi tim kami saat meninjau gambar.',
        },
        {
          question: 'Apakah menerima pesanan satuan, prototipe, atau jumlah kecil?',
          answer:
            'Ya. Kami melayani pembuatan satu unit untuk kebutuhan prototipe, jig khusus, maupun penggantian suku cadang mesin yang mendesak, hingga pengerjaan batch kecil dan menengah. Harga per unit dihitung berdasarkan tingkat kerumitan, material, dan jumlah pesanan.',
        },
        {
          question: 'Bagaimana dengan batas toleransi dan lama waktu pengerjaan?',
          answer:
            'Kemampuan toleransi dan jadwal pengerjaan sangat tergantung pada bentuk geometri, jenis material, proses tambahan (seperti perlakuan panas atau pelapisan permukaan), serta antrean mesin saat itu. Tim engineering kami mengonfirmasi kesanggupan toleransi dan perkiraan waktu kerja secara tertulis saat meninjau gambar teknik Anda.',
        },
        {
          question: 'Informasi apa saja yang perlu dikirim untuk meminta penawaran?',
          answer:
            'Sertakan gambar teknik (atau foto jelas jika masih tahap diskusi awal), jenis material yang diinginkan, jumlah perkiraan, lokasi pabrik, serta catatan fungsi komponen jika ada bagian yang berpasangan dengan komponen lain. Jika tidak memiliki gambar, Anda dapat menyampaikan bahwa sampel fisik tersedia untuk diukur.',
        },
        {
          question: 'Bagaimana mekanisme pengiriman komponen setelah selesai?',
          answer:
            'Untuk pabrik di area Cikarang, Bekasi, Karawang, dan sekitarnya, komponen dapat dikirim menggunakan armada pengiriman kami, ekspedisi darat pilihan Anda, atau diambil langsung di bengkel setelah inspeksi selesai. Metode pengiriman disepakati saat konfirmasi pesanan.',
        },
      ],
      ctaHeading: 'Masih ada pertanyaan teknis untuk komponen spesifik?',
      ctaButton: 'Kirim pertanyaan lewat formulir penawaran',
    },
    quote: {
      title: 'Permintaan Penawaran | PT Adhi Presisi Mandiri',
      description:
        'Kirim rincian kebutuhan permesinan CNC, jig dan fixture, suku cadang mesin, atau pembuatan ulang komponen ke tim engineering PT Adhi Presisi Mandiri.',
      heading: 'Permintaan penawaran',
      intro:
        'Biaya pengerjaan permesinan dihitung per proyek sesuai gambar teknik, material, dan jumlah pesanan. Isi rincian kebutuhan di bawah agar tim engineering kami dapat menyiapkan tinjauan awal.',
    },
    notFound: {
      title: 'Halaman Tidak Ditemukan | PT Adhi Presisi Mandiri',
      description: 'Halaman yang Anda cari tidak tersedia atau alamatnya sudah berubah.',
      code: '404',
      heading: 'Halaman tidak ditemukan',
      body: 'Alamat yang Anda buka tidak tersedia di situs ini. Gunakan tombol di bawah untuk kembali ke beranda atau langsung membuka formulir permintaan penawaran.',
      homeCta: 'Kembali ke beranda',
      quoteCta: 'Buka permintaan penawaran',
    },
  },

  quoteForm: {
    formAriaLabel: 'Formulir permintaan penawaran',
    fields: {
      fullName: {
        label: 'Nama lengkap',
        placeholder: 'Nama penanggung jawab',
        errorRequired: 'Isi nama lengkap Anda.',
      },
      company: {
        label: 'Nama perusahaan',
        placeholder: 'Nama pabrik atau perusahaan',
        errorRequired: 'Isi nama perusahaan atau pabrik Anda.',
      },
      email: {
        label: 'Email kerja',
        placeholder: 'nama@perusahaan.co.id',
        errorRequired: 'Isi alamat email kerja yang aktif.',
        errorInvalid: 'Format alamat email belum benar.',
      },
      phone: {
        label: 'Nomor telepon atau WhatsApp',
        placeholder: '08xx xxxx xxxx',
        errorRequired: 'Isi nomor telepon yang dapat dihubungi.',
      },
      plantLocation: {
        label: 'Lokasi pabrik',
        placeholder: 'Contoh: MM2100 Cikarang, Jababeka, atau Karawang',
        errorRequired: 'Sebutkan kawasan atau kota lokasi pabrik.',
      },
      needType: {
        label: 'Jenis kebutuhan',
        hint: 'Pilih satu atau lebih kategori yang sesuai.',
        errorRequired: 'Pilih minimal satu jenis kebutuhan.',
        options: [
          { value: 'permesinan-cnc', label: 'Permesinan CNC' },
          { value: 'jig-dan-fixture', label: 'Jig dan fixture' },
          { value: 'suku-cadang', label: 'Suku cadang mesin' },
          { value: 'pembuatan-ulang', label: 'Pembuatan ulang komponen' },
          { value: 'lainnya', label: 'Lainnya' },
        ],
      },
      quantity: {
        label: 'Jumlah perkiraan',
        placeholder: 'Contoh: 1 unit prototipe atau 25 pcs per bulan',
      },
      details: {
        label: 'Detail kebutuhan dan catatan gambar teknik',
        placeholder:
          'Sebutkan jenis material, format gambar yang sudah siap (STEP/DWG/PDF), atau apakah sampel fisik tersedia untuk diukur.',
        errorRequired: 'Tuliskan ringkasan kebutuhan komponen Anda.',
      },
      honeypotLabel: 'Kosongkan kolom ini',
    },
    drawingNote:
      'Untuk lampiran file gambar teknik berukuran besar (STEP, DWG, DXF, atau PDF), sebutkan di kolom detail atau kirim langsung lewat jalur WhatsApp setelah menghubungi tim kami.',
    submitButton: 'Kirim permintaan penawaran',
    submittingButton: 'Mengirim permintaan...',
    status: {
      submitting: 'Sedang mengirim data permintaan penawaran Anda...',
      successTitle: 'Permintaan penawaran terkirim',
      successBody:
        'Terima kasih. Tim engineering kami meninjau rincian kebutuhan Anda dan akan menghubungi kembali melalui email atau telepon pada jam kerja.',
      errorNoEndpointTitle: 'Endpoint formulir belum dihubungkan',
      errorNoEndpointBody:
        'Formulir ini masih memakai nilai placeholder "isi_endpoint_form" pada src/data/company.ts. Hubungkan endpoint layanan form Anda atau gunakan jalur WhatsApp sebagai cadangan.',
      errorNetworkTitle: 'Pengiriman belum berhasil',
      errorNetworkBody:
        'Terjadi gangguan saat menghubungi layanan formulir. Periksa koneksi Anda lalu coba kirim ulang, atau hubungi tim kami melalui jalur alternatif di samping.',
      validationSummary: 'Periksa kembali kolom yang ditandai merah sebelum mengirim.',
    },
    sidebar: {
      heading: 'Jalur alternatif dan informasi bengkel',
      whatsappHeading: 'Kirim ringkasan lewat WhatsApp',
      whatsappBody:
        'Cocok jika Anda ingin langsung mengirim foto sampel komponen atau berdiskusi cepat dengan tim engineering kami.',
      whatsappButton: 'Buka WhatsApp',
      contactHeading: 'Kontak bengkel',
      hoursLabel: 'Jam kerja',
      addressLabel: 'Lokasi bengkel',
      phoneLabel: 'Telepon',
      emailLabel: 'Email',
      checklistHeading: 'Supaya penawaran lebih cepat diproses',
      checklist: [
        'Siapkan file STEP, DWG, DXF, atau PDF berdimensi',
        'Cantumkan jenis material yang dibutuhkan bila sudah ditentukan',
        'Informasikan jumlah perkiraan pesanan (satuan atau batch)',
        'Sebutkan jika ada sampel fisik yang perlu diukur ulang',
      ],
    },
  },

  footer: {
    navigationHeading: 'Navigasi',
    capabilitiesHeading: 'Kapabilitas',
    contactHeading: 'Bengkel Cikarang',
    ctaHeading: 'Butuh penawaran pengerjaan komponen?',
    ctaBody:
      'Kirim gambar teknik atau rincian suku cadang mesin Anda untuk ditinjau tim engineering kami.',
    ctaButton: 'Kirim gambar teknik',
    hoursLabel: 'Jam kerja',
    phoneLabel: 'Telepon',
    emailLabel: 'Email',
    demoNotice:
      'Proyek demonstrasi desain website. Perusahaan dan datanya fiktif.',
    copyrightPrefix: 'PT Adhi Presisi Mandiri',
  },
};