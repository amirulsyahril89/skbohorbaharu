// ============================================================
// FAIL KANDUNGAN LAMAN WEB SEKOLAH
// ============================================================
// Untuk kemaskini kandungan: edit objek-objek di bawah, simpan,
// kemudian git add / commit / push. Tiada pangkalan data, tiada
// login admin — semua kandungan datang terus dari fail ini.
// ============================================================

const SCHOOL_INFO = {
  name: "SEKOLAH KEBANGSAAN BOHOR BAHARU",
  tagline: "Bobarian Gemilang",
  motto: "Ilmu Pancaran Hidup",
  address: "Sekolah Kebangsaan Bohor Baharu, Kg Bohor Baru, 28200 Bandar Bera",
  phone: "",
  email: "cbaa123@moe.edu.my",
  facebook: "facebook.com/skbbcbaa123",
  code: "CBAA123",
};

// Dipaparkan di bahagian atas tab "Umum" — profil, sejarah dan statistik sekolah.
const SCHOOL_PROFILE = {
  intro:
    "Sekolah Kebangsaan Bohor Baharu merupakan sebuah sekolah luar bandar yang terletak di Bandar Bera, Pahang. Sekolah ini telah dibuka secara rasmi pada 9 September 1974 bagi memenuhi keperluan pendidikan masyarakat setempat selepas pembukaan penempatan baharu Kampung Bohor Baru akibat banjir besar yang melanda kawasan sekitar Sungai Pahang pada tahun 1971.\n\nSehingga kini, sekolah terus komited melahirkan murid yang cemerlang dalam akademik, sahsiah, kokurikulum dan teknologi selaras dengan aspirasi pendidikan negara.",

  history: [
    { year: "1971", event: "Banjir besar melanda kawasan sekitar Sungai Pahang." },
    { year: "1974", event: "Sekolah Kebangsaan Bohor Baharu dibuka secara rasmi pada 9 September 1974." },
  ],

  stats: [
    ["Kod Sekolah", "CBAA123"],
    ["Lokasi", "Luar Bandar"],
    ["Daerah", "Bera"],
    ["PPD", "PPD Bera"],
    ["Gred", "C"],
    ["Keluasan Tanah", "7.23 Ekar"],
    ["Sesi", "1 Sesi (Pagi sahaja)"],
    ["Bil. Guru", "14 orang"],
    ["Bil. Staf Sokongan", "3 orang"],
  ],

  staff: [
    { role: "Guru Besar", name: "En Mohd Fairul Bin A Bakar", photo: "assets/staff/staff-guru-besar.jpg" },
    { role: "GPK Pentadbiran", name: "En Azlan Bin Mohamad", photo: "assets/staff/staff-gpk-pentadbiran.jpg" },
    { role: "GPK Hal Ehwal Murid", name: "Pn Nurul Izzah Binti Yahya", photo: "assets/staff/staff-gpk-hem.jpg" },
    { role: "GPK Kokurikulum", name: "En Azmi Bin Hashim", photo: "assets/staff/staff-gpk-kokurikulum.jpg" },
  ],

  enrolment: [
    { tahap: "Tahun 1", lelaki: 4, perempuan: 6 },
    { tahap: "Tahun 2", lelaki: 4, perempuan: 3 },
    { tahap: "Tahun 3", lelaki: 4, perempuan: 6 },
    { tahap: "Tahun 4", lelaki: 1, perempuan: 4 },
    { tahap: "Tahun 5", lelaki: 9, perempuan: 6 },
    { tahap: "Tahun 6", lelaki: 5, perempuan: 5 },
    { tahap: "Prasekolah", lelaki: 4, perempuan: 4 },
  ],
};

// Dipaparkan di bahagian atas tab "Kokurikulum" — pencapaian & kejayaan.
const ACHIEVEMENTS = [
  {
    title: "Karnival STEM Generasi Madani Pahang Tahun 2025 (Cabaran Roket Air)",
    result: "Keempat Peringkat Negeri",
  },
  {
    title: "Karnival STEM Generasi Madani Bera Tahun 2025 (Cabaran Roket Air)",
    result: "Johan Peringkat Daerah",
  },
  {
    title: "Tarian Solo Etnik Pertandingan Tarian Sekolah-sekolah Malaysia (TA'SEEM) Peringkat Daerah Bera Tahun 2025",
    result: "Naib Johan Peringkat Daerah",
  },
  {
    title: "Kejohanan Olahraga MSSD Bera Tahun 2025 (4x200M Lelaki)",
    result: "Naib Johan Peringkat Daerah",
  },
  {
    title: "Kejohanan Catur Pejabat Tanah Daerah Bera Tahun 2025",
    result: "Naib Johan",
  },
  {
    title: "Pertandingan Kawad Kaki TKRS Peringkat Daerah Bera",
    result: "Ketiga Peringkat Daerah",
  },
];

// Dipaparkan di bahagian atas tab "Kurikulum" — pengiktirafan guru.
const RECOGNITION = [
  { title: "Guru Peneraju Generasi Digital (GPGD)", org: "Kementerian Pendidikan Malaysia" },
  { title: "Jurulatih Catur Negeri Pahang", org: "MSSM" },
];

// Tambah pengumuman baharu dengan menyalin format objek di bawah.
// "date" guna format "YYYY-MM-DD". Pengumuman terbaharu automatik
// dipaparkan dahulu (tidak perlu susun sendiri).
const POSTS = {
  umum: [
    // {
    //   title: "Contoh Tajuk Pengumuman",
    //   date: "2026-07-01",
    //   content: "Butiran penuh pengumuman di sini.",
    // },
  ],
  kurikulum: [],
  kokurikulum: [],
  hem: [],
};
