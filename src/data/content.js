// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/data/content.js — Data Pusat
// ===========================

// ===== KONTAK =====
export const CONTACT = {
  whatsapp: "6281238634788",
  whatsappDisplay: "+62 812-3863-4788",
  waBaseMessage: "Halo Kak Antony! Saya tertarik sewa motor",
  address: "Jl. Raya Padonan No.89a, Tibubeneng, Kec. Kuta Utara, Badung, Bali 80361",
  gmapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.4!2d115.1456!3d-8.654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzknMTQuNCJTIDExNcKwMDgnNDQuMiJF!5e0!3m2!1sen!2sid!4v1!5m2!1sen!2sid",
  gmapsLink: "https://maps.google.com/?q=Jl.+Raya+Padonan+No.89a+Bali",
  instagram: "antonyrentalmotorbike",
  operationalHours: "08.00 – 21.00 WITA",
  area: "Canggu · Seminyak · Kuta · Tibubeneng",
}

// ===== HELPER WA LINK =====
export const waLink = (bike = "") => {
  let msg = CONTACT.waBaseMessage
  if (bike) msg += ` *${bike}*`
  msg += `. Bisa minta info lebih lanjut? 🙏`
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`
}

// ===== ARMADA MOTOR =====
export const FLEET = [
  {
    id: "honda-adv-160",
    name: "Honda ADV-160",
    type: "Sport Adventure",
    badge: "PREMIUM",
    badgeClass: "badge--crimson",
    image: "/assets/images/honda-adv-160.webp",
    imageAlt: "Honda ADV-160 rental Bali Canggu",
    features: ["160cc Engine", "ABS Braking", "CBS System", "USB Charger"],
    priceDaily: 150000,
    priceWeekly: 900000,
    priceMonthly: 3000000,
    rotation: -3,
  },
  {
    id: "yamaha-nmax",
    name: "Yamaha N-MAX",
    type: "Urban Commuter",
    badge: "POPULAR",
    badgeClass: "badge--orange",
    image: "/assets/images/yamaha-nmax.webp",
    imageAlt: "Yamaha N-MAX rental Bali Canggu",
    features: ["155cc Engine", "ABS Option", "Smart Key", "Large Storage"],
    priceDaily: 120000,
    priceWeekly: 750000,
    priceMonthly: 2500000,
    rotation: 1.5,
  },
  {
    id: "yamaha-filano",
    name: "Yamaha Filano",
    type: "Classic Elegant",
    badge: "BESTSELLER",
    badgeClass: "badge--sand",
    image: "/assets/images/yamaha-filano.webp",
    imageAlt: "Yamaha Filano rental Bali Canggu",
    features: ["125cc Engine", "Retro Design", "Lightweight", "Easy to Ride"],
    priceDaily: 85000,
    priceWeekly: 550000,
    priceMonthly: 1800000,
    rotation: -1.5,
  },
]

// ===== BENEFITS =====
export const BENEFITS = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
    title: "Clean Bikes",
    desc: "Motor terawat, dicek sebelum setiap delivery",
    delay: 0,
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    title: "Good Price",
    desc: "Harga transparan, no hidden fees sama sekali",
    delay: 0.1,
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    title: "Fast & Easy",
    desc: "Book via WA, motor diantar dalam 2 jam",
    delay: 0.2,
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="15" height="13" x="1" y="6" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    title: "Free Delivery",
    desc: "Antar jemput gratis dalam area Canggu & sekitar",
    delay: 0.3,
  },
]

// ===== HOW IT WORKS =====
export const STEPS = [
  {
    number: "01",
    title: "Chat WhatsApp",
    desc: "Hubungi kami via WA, ceritakan kebutuhan & tanggal sewa kamu",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
  },
  {
    number: "02",
    title: "Pilih Motor",
    desc: "Tentukan motor pilihan & durasi sewa (daily / weekly / monthly)",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  },
  {
    number: "03",
    title: "Motor Diantar",
    desc: "Motor bersih + 2 helm diantar langsung ke lokasi kamu. Ride!",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
]

// ===== STATS (counter animation) =====
export const STATS = [
  { value: 500, suffix: "+", label: "Happy Riders" },
  { value: 3, suffix: " Tahun", label: "Pengalaman" },
  { value: 100, suffix: "%", label: "Clean Bikes" },
  { value: 2, suffix: " Jam", label: "Delivery Time" },
]

// ===== TRUST BAR ITEMS =====
export const TRUST_ITEMS = [
  "✓ Free Delivery",
  "✓ Clean Bikes",
  "✓ 2 Helmets Included",
  "✓ Phone Holder",
  "✓ No Hidden Fees",
  "✓ Fast & Easy",
  "✓ Daily · Weekly · Monthly",
  "✓ 24/7 WA Support",
]

// ===== FORMAT CURRENCY =====
export const formatIDR = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount)
}
