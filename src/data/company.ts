/*
PANDUAN EDIT
File: src/data/company.ts
Fungsi: Menyimpan seluruh data perusahaan, alamat, kontak placeholder, tautan WhatsApp, dan endpoint form di satu tempat.
Boleh diedit: Seluruh isi objek companyData di bawah sesuai data asli saat sudah siap.
Jangan diubah: Nama properti (key) objek dan tipe CompanyData karena dibaca oleh header, footer, SEO, dan form penawaran.
Cara mengedit: Ganti teks placeholder seperti "isi_nomor_telepon" atau "isi_endpoint_form" dengan data asli Anda.
*/

export interface CompanyMetrics {
  foundedYear: string | null;
  employeeCount: string | null;
  machineCount: string | null;
  projectCount: string | null;
  certifications: string[];
  clients: string[];
}

export interface CompanyData {
  legalName: string;
  shortName: string;
  domain: string;
  address: {
    street: string;
    area: string;
    city: string;
    province: string;
    postalCode: string;
    countryId: string;
    countryEn: string;
    fullId: string;
    fullEn: string;
  };
  workingHours: {
    id: string;
    en: string;
  };
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    whatsappNumber: string;
    whatsappPrefillId: string;
    whatsappPrefillEn: string;
  };
  social: {
    linkedin: string;
  };
  form: {
    endpoint: string;
    method: 'POST';
  };
  metrics: CompanyMetrics;
}

export const companyData: CompanyData = {
  // EDIT: Nama resmi dan nama singkat perusahaan.
  legalName: 'PT Adhi Presisi Mandiri',
  shortName: 'Adhi Presisi',
  domain: 'https://isi-domain-anda.example',

  // EDIT: Alamat bengkel di Cikarang. Alamat jalan saat ini fiktif dan bisa diganti kapan saja.
  address: {
    street: 'Jl. Industri Selatan Raya Blok K-14',
    area: 'Kawasan Industri Cikarang, Cikarang Selatan',
    city: 'Kabupaten Bekasi',
    province: 'Jawa Barat',
    postalCode: '17530',
    countryId: 'Indonesia',
    countryEn: 'Indonesia',
    fullId:
      'Jl. Industri Selatan Raya Blok K-14, Kawasan Industri Cikarang, Cikarang Selatan, Kabupaten Bekasi, Jawa Barat 17530',
    fullEn:
      'Jl. Industri Selatan Raya Blok K-14, Cikarang Industrial Estate, South Cikarang, Bekasi Regency, West Java 17530, Indonesia',
  },

  // EDIT: Jam operasional bengkel dan kantor.
  workingHours: {
    id: 'Senin sampai Jumat, 08.00 sampai 17.00 WIB',
    en: 'Monday to Friday, 08:00 to 17:00 WIB',
  },

  // EDIT: Ganti seluruh nilai placeholder di bawah saat kontak asli sudah tersedia.
  // Selama masih berisi kata "isi_", situs menampilkannya secara jujur sebagai placeholder dan tidak membuat tautan rusak.
  contact: {
    phoneDisplay: '085771191325',
    phoneHref: '6285771191325',
    email: 'adhipresisi@gmail.com',
    whatsappNumber: '085771191325',
    whatsappPrefillId:
      'Halo tim engineering PT Adhi Presisi Mandiri, saya ingin mengirim gambar teknik untuk permintaan penawaran.',
    whatsappPrefillEn:
      'Hello PT Adhi Presisi Mandiri engineering team, I would like to share an engineering drawing for a quotation.',
  },

  // EDIT: Isi URL profil resmi perusahaan jika sudah ada, biarkan placeholder jika belum.
  social: {
    linkedin: 'isi_tautan_linkedin',
  },

  // EDIT: Isi URL endpoint layanan form pihak ketiga (contoh: https://formspree.io/f/kode_anda).
  // Jangan lupa menambahkan domain layanan tersebut pada connect-src di public/_headers.
  form: {
    endpoint: 'isi_endpoint_form',
    method: 'POST',
  },

  // EDIT: Kosongkan (null atau []) selama data belum tersedia agar situs tidak pernah menampilkan angka atau klaim karangan.
  metrics: {
    foundedYear: null,
    employeeCount: null,
    machineCount: null,
    projectCount: null,
    certifications: [],
    clients: [],
  },
};

// JANGAN UBAH: Fungsi pemeriksa agar placeholder tidak diubah menjadi tautan tel:, mailto:, atau wa.me yang rusak.
export function isPlaceholderValue(value: string): boolean {
  const normalized = value.trim().toLowerCase();
  return normalized.length === 0 || normalized.startsWith('isi_');
}

// JANGAN UBAH: Membangun tautan WhatsApp hanya jika nomor asli (format internasional, misalnya 62812...) sudah diisi.
export function getWhatsappUrl(lang: 'id' | 'en'): string | null {
  if (isPlaceholderValue(companyData.contact.whatsappNumber)) {
    return null;
  }
  const digitsOnly = companyData.contact.whatsappNumber.replace(/\D/g, '');
  if (!digitsOnly) {
    return null;
  }
  const message =
    lang === 'id'
      ? companyData.contact.whatsappPrefillId
      : companyData.contact.whatsappPrefillEn;
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}