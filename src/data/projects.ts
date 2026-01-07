export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  area: string;
  duration: string;
  client: string;
  description: string;
  thumbnail: string;
  panoramaUrl: string;
}

export const categories = [
  "Semua",
  "Renovasi",
  "Bangun Rumah",
  "Interior & Kitchen Set",
  "Tukang Atap dan Plafon",
];

export const projects: Project[] = [
  {
    id: "renovasi-masjid-baitul-jannah",
    title: "Renovasi Masjid Baitul Jannah",
    category: "Renovasi",
    location: "Surabaya",
    area: "500 m²",
    duration: "45 hari",
    client: "Yayasan Baitul Jannah",
    description:
      "Renovasi menyeluruh masjid dengan perbaikan struktur, pengecatan, pemasangan keramik, dan perbaikan sistem ventilasi. Dilakukan dengan mempertahankan nilai historis dan estetika arsitektur masjid.",
    thumbnail:
      "/assets/images/360.jpg",
    panoramaUrl:
      "/assets/images/360.jpg",
  },
  {
    id: "perbaikan-atap-cititrans",
    title: "Perbaikan Atap Kantor Cititrans Surabaya",
    category: "Tukang Atap dan Plafon",
    location: "Surabaya",
    area: "180 m²",
    duration: "2 hari",
    client: "Cititrans",
    description:
      "Cititrans Surabaya merupakan anak perusahaan dari Bluebird Group yang telah lama menjadi pelanggan setia Paktukang.com. Pekerjaan penggantian atap spandek yang bocor dengan garansi tukang 1 minggu.",
    thumbnail:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    panoramaUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=80",
  },
  {
    id: "renovasi-interior-modern",
    title: "Renovasi Interior Modern Kontemporer",
    category: "Renovasi",
    location: "Surabaya",
    area: "85 m²",
    duration: "14 hari",
    client: "Private Client",
    description:
      "Transformasi ruang tamu dengan konsep minimalis modern kontemporer. Menggunakan material premium dengan finishing berkualitas tinggi.",
    thumbnail:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    panoramaUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=80",
  },
  {
    id: "bangun-rumah-minimalis",
    title: "Bangun Rumah Tumbuh Minimalis",
    category: "Bangun Rumah",
    location: "Malang",
    area: "120 m²",
    duration: "90 hari",
    client: "Private Client",
    description:
      "Pembangunan rumah 2 lantai dengan konsep tumbuh. Desain efisien dengan perencanaan ekspansi di masa depan.",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    panoramaUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2000&q=80",
  },
  {
    id: "kitchen-set-premium",
    title: "Interior Kitchen Set Custom Premium",
    category: "Interior & Kitchen Set",
    location: "Surabaya",
    area: "25 m²",
    duration: "7 hari",
    client: "Private Client",
    description:
      "Pembuatan kitchen set custom dengan material HPL premium. Desain modern dengan storage maksimal dan finishing rapi.",
    thumbnail:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    panoramaUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=2000&q=80",
  },
  {
    id: "renovasi-rumah-2-lantai",
    title: "Renovasi Rumah 2 Lantai Complete",
    category: "Renovasi",
    location: "Surabaya",
    area: "200 m²",
    duration: "60 hari",
    client: "Private Client",
    description:
      "Renovasi total rumah 2 lantai mulai dari struktur, interior, hingga eksterior. Transformasi lengkap dengan desain modern minimalis.",
    thumbnail:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    panoramaUrl:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2000&q=80",
  },
];
