/* ===============================
   LIVERA DATA (PORT FROM PHP)
   =============================== */

/* ===== USER (SIMULASI) ===== */
const user = {
  nama: "Aulia",
  email: "aulia@email.com",
  member: "Silver Member",
};

/* ===== ORDER STATUS ===== */
const orderStatuses = [
  "Belum Checkout",
  "Menunggu Pembayaran",
  "Dalam Pengemasan",
  "Dalam Pengiriman",
  "Pesanan Sampai",
];

/* ===== CATEGORIES ===== */
const categories = {
  All: "Semua",
  Sofas: "Sofa",
  Tables: "Meja",
  Chairs: "Kursi",
  Bedroom: "Bedroom",
  Lemari: "Lemari",
  Kids: "Anak",
  Decor: "Decor",
  Carpet: "Karpet",
};

/* ===== PRODUCTS ===== */
const products = [
  // ===== SOFAS =====
  {
    id: 1,
    name: "Sofa Aurora",
    category: "Sofas",
    price: 2800000,
    rating: 4.8,
    img: "https://media.istockphoto.com/id/1183908655/id/foto/interior-ruang-tamu-modern-dengan-sofa-nyaman.jpg?s=612x612&w=0&k=20&c=M2b1g7CfuQAb18obCzIcjaF39wiFKRB8qcqviMyQXoA=",
  },
  {
    id: 2,
    name: "Sofa Harmoni",
    category: "Sofas",
    price: 3500000,
    rating: 4.9,
    img: "https://media.istockphoto.com/id/943910360/id/foto/poster-di-interior-apartemen-yang-nyaman.jpg?s=612x612&w=0&k=20&c=Roy7Woe65wgCs22VTN-wxZ7Cu3WGX_mMC04bnhdzk4c=",
  },
  {
    id: 3,
    name: "Sofa Elora",
    category: "Sofas",
    price: 2600000,
    rating: 4.6,
    img: "https://plus.unsplash.com/premium_photo-1683141389818-77fd3485334b?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Sofa Nara",
    category: "Sofas",
    price: 2400000,
    rating: 4.5,
    img: "https://media.istockphoto.com/id/2175713697/id/foto/ruang-tamu-cerah-dengan-perapian-dan-desain-skandinavia.jpg?s=612x612&w=0&k=20&c=skLBfyo6R2NZEBaTM4VT0iLnUHMdibodieWt0RGp6sU=",
  },
  {
    id: 5,
    name: "Sofa Casa",
    category: "Sofas",
    price: 3200000,
    rating: 4.7,
    img: "https://media.istockphoto.com/id/1184204517/id/foto/interior-ruang-tamu-skandinavia-modern-render-3d.jpg?s=612x612&w=0&k=20&c=rRkh5sVNmWQVW9Tj40v0yWQ1P-kDanjdB7lBBJwGX0U=",
  },
  {
    id: 6,
    name: "Sofa Liora",
    category: "Sofas",
    price: 2900000,
    rating: 4.6,
    img: "https://media.istockphoto.com/id/2198530469/id/foto/desain-interior-modern-sofa-di-ruang-tamu.jpg?s=612x612&w=0&k=20&c=7bTIRpbo9NMMShERFRlym7XYZROgz33MeO3kaBrodvU=",
  },
  {
    id: 7,
    name: "Sofa Santara",
    category: "Sofas",
    price: 3700000,
    rating: 4.9,
    img: "https://media.istockphoto.com/id/1031444360/id/foto/poster-di-atas-lemari-putih-dengan-tanaman-di-sebelah-sofa-abu-abu-di-interior-ruang-tamu.jpg?s=612x612&w=0&k=20&c=snvvhDDAcaYgbpFrCyvyTGmUjeAPyYC0QVpIY0o9RKw=",
  },
  {
    id: 8,
    name: "Sofa Cozyra",
    category: "Sofas",
    price: 3000000,
    rating: 4.7,
    img: "https://media.istockphoto.com/id/927080588/id/foto/sofa-kain-biru-pada-latar-belakang-putih-gambar-rendering-3d.jpg?s=612x612&w=0&k=20&c=pjnwtsC4QexHf3gCqRTrnVHfawSz2zyce2bMkRC2qCo=",
  },
  {
    id: 9,
    name: "Sofa Arka",
    category: "Sofas",
    price: 2700000,
    rating: 4.5,
    img: "https://media.istockphoto.com/id/637876746/id/foto/ruang-tamu-modern-dengan-sofa-oranye.jpg?s=612x612&w=0&k=20&c=3aq9ifhOGxCdKqNYNO9YiVwgmWi6bMtvQGB3ifRR7wg=",
  },
  {
    id: 10,
    name: "Sofa Livin",
    category: "Sofas",
    price: 3400000,
    rating: 4.8,
    img: "https://media.istockphoto.com/id/2207308018/id/foto/interior-ruang-tamu-modern-dengan-sofa-lampu-lantai-tanaman-pot-meja-kopi-dan-dinding-kosong.jpg?s=612x612&w=0&k=20&c=FOSFxds-kEhXbgefeC5xKVb7uYqz5ha8TRiFM4bBApc=",
  },

  // ===== TABLES =====
  {
    id: 101,
    name: "Meja Makan Keluarga",
    category: "Tables",
    price: 1800000,
    rating: 4.7,
    img: "https://media.istockphoto.com/id/1302808961/id/foto/ruang-rapat-yang-nyaman-partisi-privasi-ada-di-atas-meja.jpg?s=612x612&w=0&k=20&c=zYGMyQrtQz4eAtCAxSVESrN4twlXRdKOyZEe63wO0Es=",
  },
  {
    id: 102,
    name: "Meja Kayana",
    category: "Tables",
    price: 2200000,
    rating: 4.8,
    img: "https://media.istockphoto.com/id/1388783758/id/foto/interior-restoran-dengan-meja-kayu-modern-dan-dua-kursi-dengan-tanaman-yang-didekorasi-oleh.jpg?s=1024x1024&w=is&k=20&c=hgYjDVEw0vN2KO6oW94BIKnbZ6m200TMCLAC6o4GotU=",
  },
  {
    id: 103,
    name: "Meja Nuvia",
    category: "Tables",
    price: 1650000,
    rating: 4.6,
    img: "https://media.istockphoto.com/id/2185332802/id/foto/meja-dan-kursi-kafe-di-dekat-jendela-dengan-taman-hijau-luar-ruangan.jpg?s=612x612&w=0&k=20&c=ij6fhvn9cOX2YinuRLqrWeUtuXOqmbm9FS7pBgk0ijU=",
  },
];

/* ===== HELPERS ===== */
function rupiah(n) {
  return "Rp " + Number(n).toLocaleString("id-ID");
}

const SHEET_API =
  "https://script.google.com/macros/s/AKfycbzfsHjblxCOvySCEBb-8_vZoFaxe8rg7W9FtayHEUb7xVF10u0MSX7NFuV9g2KTCQSSNg/exec";

async function loadProducts() {
  const res = await fetch(SHEET_API);
  const data = await res.json();
  window.products = data;
  renderProducts(data);
}

document.addEventListener("DOMContentLoaded", loadProducts);
