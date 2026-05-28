# 🗺️ IMPLEMENTATION PLAN
## Antony Rental Motor Bike — Website Bali

> **Project Type:** Animated Landing Page (Static Site)  
> **Client:** Antony Rental Motor Bike, Canggu, Bali  
> **Developer:** Gimora Digital (gimm)  
> **Estimasi Total:** 5–7 hari kerja

---

## 🎯 PROJECT OVERVIEW

### Objective
Membuat website landing page profesional + heavily animated untuk **Antony Rental Motor Bike** yang:
1. Menampilkan armada motor tersedia (ADV-160, N-MAX, Filano)
2. Animasi GSAP smooth dan cinematic di setiap scroll
3. Mendorong konversi via WhatsApp (primary CTA)
4. SEO-friendly untuk keyword "rental motor Bali", "motor rental Canggu"
5. Mobile-first karena mayoritas tamu asing akses via HP
6. Deploy cepat via Vercel (free tier, GitHub integration)

### Target User
- Turis asing yang liburan ke Bali (Canggu/Seminyak area)
- Digital nomad yang tinggal mingguan/bulanan di Bali
- Turis domestik yang butuh motor sewa

---

## 🛠️ TECH STACK

| Layer | Teknologi | Versi | Alasan |
|-------|-----------|-------|--------|
| **Bundler** | Vite | 5.x | Zero-config, lightning fast HMR, static output |
| **Language** | Vanilla JavaScript | ES2022+ | No framework overhead, full GSAP control |
| **Styling** | CSS Custom Properties + PostCSS | — | Native CSS vars, no framework dependency |
| **Animation** | GSAP + ScrollTrigger | 3.12.x | Industry standard, buttery smooth 60fps |
| **Fonts** | Google Fonts | — | Bebas Neue, Syne, DM Sans, Space Mono |
| **Icons** | Phosphor Icons (SVG sprite) | 2.x | Ringan, no JS overhead |
| **Maps** | Google Maps Embed API | — | Iframe, gratis, no key needed |
| **Deployment** | **Vercel** (static) | — | GitHub push → auto deploy |
| **Analytics** | Google Analytics 4 | — | Track traffic & WA conversion |

### Kenapa Vite + Vanilla JS?
```
✅ Build output = pure static HTML/CSS/JS → Vercel deploy langsung
✅ GSAP bekerja 100% optimal tanpa wrapper framework
✅ Bundle size minimal → Lighthouse Performance tinggi
✅ Tidak perlu SSR/hydration → load lebih cepat
✅ Mudah di-handover ke klien atau developer lain
```

### GSAP Plugins yang Digunakan
```
gsap             → Core engine animasi
ScrollTrigger    → Animasi trigger saat scroll
TextPlugin       → Typewriter effect untuk headline
Observer         → Smooth scroll & gesture detection
```

---

## 🗂️ STRUKTUR PROYEK

```
antony-rental-website/
│
├── index.html                  ← Single HTML entry point
│
├── src/
│   ├── main.js                 ← Entry JS (import semua module)
│   ├── style.css               ← Global styles + CSS variables
│   │
│   ├── data/
│   │   └── content.js          ← Semua data (fleet, pricing, kontak)
│   │
│   ├── components/
│   │   ├── navbar.js           ← Sticky nav logic + hamburger
│   │   ├── hero.js             ← Hero section init
│   │   ├── trustbar.js         ← Marquee strip
│   │   ├── fleet.js            ← Fleet cards render + hover
│   │   ├── pricing.js          ← Pricing tabs toggle
│   │   ├── how-it-works.js     ← Step connector animation
│   │   ├── location.js         ← Map + contact init
│   │   └── floating-wa.js      ← Floating WA button + pulse
│   │
│   └── animations/
│       ├── gsap-init.js        ← GSAP register plugins + defaults
│       ├── hero-anim.js        ← Hero timeline animation
│       ├── scroll-reveal.js    ← ScrollTrigger reveal per section
│       ├── fleet-anim.js       ← Polaroid hover + card enter
│       ├── navbar-anim.js      ← Navbar color change on scroll
│       └── counter-anim.js     ← Number counter animation
│
├── assets/
│   ├── images/
│   │   ├── logo.svg                  ← Logo Antony (vector)
│   │   ├── logo-white.svg            ← Logo versi putih (footer)
│   │   ├── honda-adv-160.webp        ← Motor transparent bg
│   │   ├── yamaha-nmax.webp
│   │   ├── yamaha-filano.webp
│   │   ├── hero-bg.webp              ← Hero background Bali road
│   │   ├── og-image.jpg              ← Social preview 1200×630
│   │   └── noise-texture.png         ← Grain overlay texture
│   │
│   └── icons/
│       └── icons.svg                 ← SVG sprite (Phosphor icons)
│
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── vercel.json                 ← Vercel config (headers, rewrites)
├── vite.config.js              ← Vite config
└── package.json
```

---

## 📦 DATA STRUCTURE (`src/data/content.js`)

```javascript
// ===== KONTAK =====
export const CONTACT = {
  whatsapp: "6281238634788",
  whatsappDisplay: "+62 812-3863-4788",
  waBaseMessage: "Halo Kak Antony! Saya tertarik sewa motor",
  address: "Jl. Raya Padonan No.89a, Tibubeneng, Kec. Kuta Utara, Badung, Bali 80361",
  gmapsEmbed: "https://www.google.com/maps/embed?pb=...", // ← isi saat implementasi
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
    imageAlt: "Honda ADV-160 rental Bali",
    features: ["160cc Engine", "ABS Braking", "CBS System", "USB Charger"],
    priceDaily: 150000,
    priceWeekly: 900000,
    priceMonthly: 3000000,
    rotation: "-3deg",  // ← initial polaroid rotation
  },
  {
    id: "yamaha-nmax",
    name: "Yamaha N-MAX",
    type: "Urban Commuter",
    badge: "POPULAR",
    badgeClass: "badge--orange",
    image: "/assets/images/yamaha-nmax.webp",
    imageAlt: "Yamaha N-MAX rental Bali",
    features: ["155cc Engine", "ABS Option", "Smart Key", "Large Storage"],
    priceDaily: 120000,
    priceWeekly: 750000,
    priceMonthly: 2500000,
    rotation: "1.5deg",
  },
  {
    id: "yamaha-filano",
    name: "Yamaha Filano",
    type: "Classic Elegant",
    badge: "BESTSELLER",
    badgeClass: "badge--sand",
    image: "/assets/images/yamaha-filano.webp",
    imageAlt: "Yamaha Filano rental Bali",
    features: ["125cc Engine", "Retro Design", "Lightweight", "Easy to Ride"],
    priceDaily: 85000,
    priceWeekly: 550000,
    priceMonthly: 1800000,
    rotation: "-1.5deg",
  },
]

// ===== BENEFITS =====
export const BENEFITS = [
  {
    icon: "#icon-bike",
    title: "Clean Bikes",
    desc: "Motor terawat, dicek sebelum setiap delivery",
    delay: 0,
  },
  {
    icon: "#icon-tag",
    title: "Good Price",
    desc: "Harga transparan, no hidden fees sama sekali",
    delay: 0.1,
  },
  {
    icon: "#icon-lightning",
    title: "Fast & Easy",
    desc: "Book via WA, motor diantar dalam 2 jam",
    delay: 0.2,
  },
  {
    icon: "#icon-truck",
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
    icon: "#icon-whatsapp",
  },
  {
    number: "02",
    title: "Pilih Motor",
    desc: "Tentukan motor pilihan & durasi sewa (daily / weekly / monthly)",
    icon: "#icon-bike",
  },
  {
    number: "03",
    title: "Motor Diantar",
    desc: "Motor bersih + 2 helm diantar langsung ke lokasi kamu. Ride!",
    icon: "#icon-map-pin",
  },
]

// ===== STATS (untuk counter animation) =====
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
```

---

## 🎬 GSAP ANIMATION PLAN

### Setup (`src/animations/gsap-init.js`)
```javascript
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import TextPlugin from "gsap/TextPlugin"

// Register semua plugin
gsap.registerPlugin(ScrollTrigger, TextPlugin)

// Global defaults
gsap.defaults({
  ease: "power3.out",
  duration: 0.8,
})

// ScrollTrigger defaults
ScrollTrigger.defaults({
  start: "top 85%",
  toggleActions: "play none none none",
})

export { gsap, ScrollTrigger }
```

---

### 1. Hero Entrance (`src/animations/hero-anim.js`)
```javascript
// Stagger timeline — cinematic entrance
export function heroEntrance() {
  const tl = gsap.timeline({ delay: 0.3 })

  tl.from(".hero__eyebrow", {
    y: 30, opacity: 0, duration: 0.6
  })
  .from(".hero__headline .line", {
    y: 100, opacity: 0, skewY: 4,
    stagger: 0.15, duration: 0.9,
    ease: "expo.out"
  }, "-=0.3")
  .from(".hero__sub", {
    y: 20, opacity: 0, duration: 0.6
  }, "-=0.4")
  .from(".hero__cta-group", {
    y: 20, opacity: 0, duration: 0.6
  }, "-=0.3")
  .from(".hero__motor-img", {
    x: 80, opacity: 0, duration: 1.2,
    ease: "expo.out"
  }, "-=0.8")
  .from(".hero__badge", {
    scale: 0, opacity: 0, duration: 0.5,
    ease: "back.out(1.7)"
  }, "-=0.4")

  // Motor float animation (infinite loop)
  gsap.to(".hero__motor-img", {
    y: -18, duration: 3,
    ease: "sine.inOut",
    yoyo: true, repeat: -1
  })
}
```

---

### 2. Scroll Reveal (`src/animations/scroll-reveal.js`)
```javascript
// Generic reveal — dipakai di semua section
export function initScrollReveal() {

  // Fade up — default untuk paragraf, labels
  gsap.utils.toArray("[data-reveal='fade-up']").forEach(el => {
    gsap.from(el, {
      y: 50, opacity: 0,
      scrollTrigger: { trigger: el }
    })
  })

  // Stagger cards — benefit cards, fleet cards
  gsap.utils.toArray("[data-reveal='stagger']").forEach(group => {
    gsap.from(group.querySelectorAll(".card"), {
      y: 60, opacity: 0,
      stagger: 0.12,
      scrollTrigger: { trigger: group, start: "top 80%" }
    })
  })

  // Slide from left
  gsap.utils.toArray("[data-reveal='slide-left']").forEach(el => {
    gsap.from(el, {
      x: -80, opacity: 0,
      scrollTrigger: { trigger: el }
    })
  })

  // Slide from right
  gsap.utils.toArray("[data-reveal='slide-right']").forEach(el => {
    gsap.from(el, {
      x: 80, opacity: 0,
      scrollTrigger: { trigger: el }
    })
  })

  // Scale in — untuk stats, icons
  gsap.utils.toArray("[data-reveal='scale']").forEach(el => {
    gsap.from(el, {
      scale: 0.7, opacity: 0,
      ease: "back.out(1.7)",
      scrollTrigger: { trigger: el }
    })
  })
}
```

---

### 3. Fleet Card Polaroid (`src/animations/fleet-anim.js`)
```javascript
// Hover: straighten polaroid + lift
export function initFleetHover() {
  document.querySelectorAll(".fleet-card").forEach(card => {
    const initRotate = card.dataset.rotation || "0deg"

    // Hover in
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        rotation: 0, y: -16, scale: 1.04,
        boxShadow: "0 28px 56px rgba(139,26,26,0.3)",
        duration: 0.4, ease: "power2.out"
      })
    })

    // Hover out — kembali ke rotasi asal
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotation: initRotate, y: 0, scale: 1,
        boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
        duration: 0.5, ease: "elastic.out(1, 0.8)"
      })
    })
  })
}
```

---

### 4. Navbar Scroll Color (`src/animations/navbar-anim.js`)
```javascript
export function initNavbarScroll() {
  const nav = document.querySelector(".navbar")

  ScrollTrigger.create({
    start: "top -80",
    onEnter: () => gsap.to(nav, {
      backgroundColor: "rgba(139,26,26,0.97)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
      duration: 0.4
    }),
    onLeaveBack: () => gsap.to(nav, {
      backgroundColor: "transparent",
      backdropFilter: "blur(0px)",
      boxShadow: "none",
      duration: 0.4
    }),
  })
}
```

---

### 5. Stats Counter (`src/animations/counter-anim.js`)
```javascript
export function initCounters() {
  document.querySelectorAll(".stat__number").forEach(el => {
    const target = parseInt(el.dataset.target)
    const suffix = el.dataset.suffix || ""
    const obj = { val: 0 }

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix
          }
        })
      }
    })
  })
}
```

---

## ⚙️ VITE CONFIG (`vite.config.js`)

```javascript
import { defineConfig } from "vite"

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    assetsInlineLimit: 4096,        // inline asset < 4kb
    rollupOptions: {
      input: { main: "./index.html" }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
```

---

## 🚀 VERCEL DEPLOYMENT

### `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": null,
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

### Deploy Flow
```
1. Push ke GitHub (main branch)
2. Connect repo di vercel.com
3. Settings:
   - Framework Preset : Other
   - Build Command    : npm run build
   - Output Directory : dist
   - Install Command  : npm install
4. Deploy → auto dapat URL vercel.app gratis
5. Custom domain: connect di Vercel dashboard → DNS record
```

### `package.json`
```json
{
  "name": "antony-rental-motorbike",
  "version": "1.0.0",
  "scripts": {
    "dev"   : "vite",
    "build" : "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "gsap": "^3.12.5"
  },
  "devDependencies": {
    "vite": "^5.4.0"
  }
}
```

---

## 📅 TIMELINE & MILESTONES

### Phase 1 — Setup & Foundation *(Day 1)*
- [ ] `npm create vite@latest` → vanilla JS template
- [ ] Install GSAP: `npm install gsap`
- [ ] Setup CSS custom variables (color palette, typography)
- [ ] Load Google Fonts di `index.html`
- [ ] Setup `content.js` dengan semua data klien
- [ ] Setup folder struktur lengkap
- [ ] Init `gsap-init.js` — register plugins
- [ ] Buat `vercel.json` + test deploy preview

**Deliverable:** Project boilerplate running di `localhost:3000`

---

### Phase 2 — Core Shell *(Day 1–2)*
- [ ] `index.html` — struktur semantic HTML lengkap semua section
- [ ] `style.css` — CSS variables, reset, typography, grid, utilities
- [ ] `navbar.js` — sticky nav + hamburger mobile
- [ ] `navbar-anim.js` — transparent → crimson on scroll (GSAP)
- [ ] `footer` — dark section + copyright
- [ ] `floating-wa.js` — fixed WA button + CSS pulse ring

**Deliverable:** Skeleton HTML + navigasi fungsional

---

### Phase 3 — Hero + Trust Bar *(Day 2)*
- [ ] Hero HTML — structure, motor image, CTA buttons
- [ ] Hero CSS — full viewport, grain texture, gradient overlay
- [ ] `hero-anim.js` — GSAP stagger timeline entrance
- [ ] Motor float animation (infinite `yoyo`)
- [ ] Trust bar HTML — marquee strip
- [ ] `trustbar.js` — CSS marquee + GSAP speed control

**Deliverable:** Hero cinematic entrance selesai ✨

---

### Phase 4 — Content Sections *(Day 3–4)*
- [ ] **Why Us** — 4 benefit cards, scroll stagger reveal
- [ ] **Fleet Section** — render dari `FLEET` data, polaroid style
  - [ ] `fleet-anim.js` — hover straighten + elastic snap back
- [ ] **Stats Bar** — 4 stats dengan counter animation
  - [ ] `counter-anim.js` — ScrollTrigger number count up
- [ ] **Pricing Section** — 3 cards, toggle tab Daily/Weekly/Monthly
  - [ ] `pricing.js` — tab switch dengan GSAP crossfade
- [ ] **How It Works** — 3 steps, connector line draw animation
  - [ ] SVG path stroke animation via GSAP `drawSVG` (atau CSS)

**Deliverable:** Semua content section selesai + teraAnimasi

---

### Phase 5 — Map, Contact, Polish *(Day 5)*
- [ ] Location section — Google Maps iframe + contact info
- [ ] SVG torn-paper dividers antar section
- [ ] `scroll-reveal.js` — wrap semua `[data-reveal]` elements
- [ ] Smooth scroll behavior (`scroll-behavior: smooth`)
- [ ] Mobile testing di Chrome DevTools (375px, 390px, 414px)
- [ ] Cross-browser: Chrome, Safari, Firefox
- [ ] Lighthouse audit → perbaiki issues

**Deliverable:** Website complete, smooth, responsive

---

### Phase 6 — SEO + Production *(Day 6)*
- [ ] `index.html` meta tags lengkap (title, description, OG, Twitter Card)
- [ ] JSON-LD schema LocalBusiness
- [ ] `sitemap.xml` manual generate
- [ ] `robots.txt`
- [ ] GA4 snippet di `index.html`
- [ ] Image optimize → convert ke `.webp`
- [ ] `npm run build` → test production bundle
- [ ] Push ke GitHub → deploy ke Vercel
- [ ] Custom domain setup

**Deliverable:** Website live di Vercel ✅

---

### Phase 7 — Review & Handover *(Day 7)*
- [ ] Demo live ke klien
- [ ] Revisi minor feedback
- [ ] Dokumentasi: cara update konten di `content.js`
- [ ] Handover: GitHub repo invite + Vercel team access
- [ ] Final invoice Gimora Digital

---

## 📝 SEO STRATEGY

### Target Keywords
```
Primary   : "rental motor Bali"
           "motor rental Canggu"
           "sewa motor Bali murah"

Secondary : "Honda ADV rental Bali"
           "Yamaha Nmax rent Bali"
           "motorbike hire Canggu"

Long-tail : "sewa motor Canggu harian mingguan"
           "motor rental Kuta Utara Bali harga murah"
```

### SEO HTML Template
```html
<!-- Title + Meta -->
<title>Antony Rental Motor Bike Bali | Canggu · Daily, Weekly, Monthly</title>
<meta name="description"
  content="Sewa motor di Bali harga terjangkau. Honda ADV-160, Yamaha N-MAX, Yamaha Filano.
  Free delivery Canggu area. Daily/Weekly/Monthly. Fast & Easy via WhatsApp!">

<!-- Open Graph -->
<meta property="og:title" content="Antony Rental Motor Bike Bali">
<meta property="og:description" content="Clean bikes. Good price. Free delivery. Book via WA!">
<meta property="og:image" content="/assets/images/og-image.jpg">
<meta property="og:url" content="https://antonyrentalbali.com">
<meta property="og:type" content="website">

<!-- Schema LocalBusiness -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Antony Rental Motor Bike",
  "description": "Motor rental in Canggu, Bali — Daily, Weekly, Monthly",
  "url": "https://antonyrentalbali.com",
  "telephone": "+6281238634788",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Raya Padonan No.89a",
    "addressLocality": "Tibubeneng, Kuta Utara",
    "addressRegion": "Bali",
    "postalCode": "80361",
    "addressCountry": "ID"
  },
  "openingHours": "Mo-Su 08:00-21:00",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.6540,
    "longitude": 115.1456
  },
  "priceRange": "Rp 85.000 – Rp 150.000/day"
}
</script>
```

---

## ⚡ PERFORMANCE TARGETS

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | Preload hero image + WebP format |
| CLS | < 0.1 | Define img width/height, no layout shift |
| INP | < 100ms | Minimal JS blocking, GSAP deferred |
| Lighthouse Performance | ≥ 90 | Vite code split, lazy images |
| Lighthouse SEO | ≥ 95 | Complete meta, schema, sitemap |
| Lighthouse Accessibility | ≥ 85 | Alt text, contrast, focus states |
| Bundle Size (JS) | < 150kb gzip | GSAP tree-shake, no unused plugins |

### GSAP Performance Tips
```javascript
// ✅ Pakai will-change hanya pada elemen yang dianimasikan
gsap.set(".hero__motor-img", { willChange: "transform" })

// ✅ Gunakan transform, bukan top/left
gsap.to(el, { x: 100, y: 50 })  // BUKAN left: 100, top: 50

// ✅ Kill ScrollTrigger saat tidak diperlukan
ScrollTrigger.getAll().forEach(t => t.kill())

// ✅ Use gsap.context() untuk cleanup
const ctx = gsap.context(() => { /* animations */ }, scope)
```

---

## 📱 WHATSAPP INTEGRATION

```javascript
// src/data/content.js
export const waLink = (bike = "") => {
  let msg = "Halo Kak Antony! Saya tertarik sewa motor"
  if (bike) msg += ` *${bike}*`
  msg += `. Bisa minta info lebih lanjut? 🙏`
  return `https://wa.me/6281238634788?text=${encodeURIComponent(msg)}`
}

// Penggunaan di fleet card:
// waLink("Honda ADV-160")
// → "https://wa.me/6281238634788?text=Halo%20Kak%20Antony%21..."

// index.html — Floating WA button
// <a href="https://wa.me/6281238634788" class="wa-float" target="_blank">
//   <svg><!-- WA icon --></svg>
// </a>
```

---

## ⚠️ NOTES & ASSUMPTIONS

1. **GSAP via npm** — install melalui `npm install gsap`, bukan CDN, agar tree-shakeable & optimal di Vite
2. **Images format** — convert semua ke `.webp` via Squoosh/cwebp sebelum upload
3. **Harga** — placeholder, minta klien konfirmasi sebelum launch
4. **Google Maps embed** — generate di maps.google.com → Share → Embed map
5. **Domain** — rekomendasikan `antonyrentalbali.com` — cek di Namecheap/GoDaddy
6. **GSAP License** — GSAP free untuk deploy Vercel/public website (GSAP Standard License)

---

## 🔄 POST-LAUNCH

- [ ] Submit sitemap ke Google Search Console
- [ ] Daftarkan **Google Business Profile** (critical untuk local SEO!)
- [ ] Monitor GA4 event "click_wa_button"
- [ ] Setup GA4 Conversion untuk WA click
- [ ] Lighthouse check bulanan

---

## 📋 CHECKLIST SEBELUM LAUNCH

**Technical**
- [ ] `npm run build` success tanpa error/warning
- [ ] Preview production: `npm run preview`
- [ ] Semua WA link berfungsi dan buka wa.me dengan benar
- [ ] Google Maps embed tampil
- [ ] Animasi GSAP smooth di mobile (no jank)
- [ ] HTTPS aktif di Vercel

**Content**
- [ ] Semua teks di-approve klien
- [ ] Harga rental dikonfirmasi klien
- [ ] Nomor WA aktif: 081238634788
- [ ] Foto motor sudah high-quality WebP

**SEO**
- [ ] Title ≤ 60 karakter
- [ ] Meta description ≤ 160 karakter
- [ ] Semua `<img>` punya `alt`
- [ ] `sitemap.xml` di `/public/`
- [ ] Schema JSON-LD valid (test di schema.org/validator)

---

*Implementation Plan v2.0 — Updated: Vanilla JS + GSAP + Vite → Vercel*  
*Gimora Digital × Antony Rental Motor Bike*
