# 🎨 DESIGN DOCUMENT
## Antony Rental Motor Bike — Website Bali

> **Design Direction:** *Bold Bali Adventure Editorial* — feel seperti majalah motor premium ketemu vibe Canggu beach culture. Raw, confident, cinematic. Semua entrance dan scroll pakai GSAP.

---

## 🎨 COLOR PALETTE

Langsung diambil dari poster original klien.

| Token | Nama | Hex | RGB | Penggunaan |
|-------|------|-----|-----|------------|
| `--color-primary` | Crimson Red | `#8B1A1A` | 139, 26, 26 | CTA utama, navbar scroll, badge |
| `--color-primary-light` | Warm Red | `#B02020` | 176, 32, 32 | Button hover, gradient layer |
| `--color-primary-dark` | Deep Crimson | `#6B1010` | 107, 16, 16 | Button active state |
| `--color-secondary` | Sand Beige | `#D4C09A` | 212, 192, 154 | Section bg alternating |
| `--color-sand-light` | Cream | `#EFE6D3` | 239, 230, 211 | Page background utama |
| `--color-accent` | Burnt Orange | `#D4681A` | 212, 104, 26 | Logo, icons, highlight, links |
| `--color-accent-light` | Warm Amber | `#E8842A` | 232, 132, 42 | Icon hover, badge outline |
| `--color-dark` | Espresso | `#1A1210` | 26, 18, 16 | Body text, dark sections |
| `--color-dark-muted` | Warm Charcoal | `#3A2E2A` | 58, 46, 42 | Subheadings, secondary text |
| `--color-white` | Off-White | `#FAF5EE` | 250, 245, 238 | Card bg, text on dark |
| `--color-whatsapp` | WA Green | `#25D366` | 37, 211, 102 | WA buttons only |

### CSS Variables Definition
```css
:root {
  /* Colors */
  --color-primary:       #8B1A1A;
  --color-primary-light: #B02020;
  --color-primary-dark:  #6B1010;
  --color-secondary:     #D4C09A;
  --color-sand-light:    #EFE6D3;
  --color-accent:        #D4681A;
  --color-accent-light:  #E8842A;
  --color-dark:          #1A1210;
  --color-dark-muted:    #3A2E2A;
  --color-white:         #FAF5EE;
  --color-whatsapp:      #25D366;

  /* Spacing */
  --space-xs:  8px;
  --space-sm:  16px;
  --space-md:  24px;
  --space-lg:  48px;
  --space-xl:  80px;
  --space-2xl: 120px;

  /* Typography */
  --font-display: 'Bebas Neue', sans-serif;
  --font-heading: 'Syne', sans-serif;
  --font-body:    'DM Sans', sans-serif;
  --font-mono:    'Space Mono', monospace;

  /* Border radius */
  --radius-sm:  4px;
  --radius-md:  12px;
  --radius-lg:  20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card:  0 12px 24px rgba(26,18,16,0.12);
  --shadow-hover: 0 28px 56px rgba(139,26,26,0.25);
  --shadow-float: 0 8px 32px rgba(37,211,102,0.35);

  /* Z-index */
  --z-navbar:  100;
  --z-float:   200;
  --z-overlay: 300;
}
```

---

## 🔤 TYPOGRAPHY

### Font Stack
```html
<!-- Google Fonts import di <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?
  family=Bebas+Neue
  &family=Syne:wght@400;600;700;800
  &family=DM+Sans:wght@300;400;500
  &family=Space+Mono:wght@400;700
  &display=swap" rel="stylesheet">
```

| Role | Font | Size Desktop | Size Mobile | Weight | Letter-Spacing |
|------|------|-------------|-------------|--------|----------------|
| Hero H1 | Bebas Neue | 96px | 56px | 400 | 0.02em |
| Section H2 | Bebas Neue | 64px | 40px | 400 | 0.02em |
| Card Title | Syne | 22px | 20px | 700 | 0 |
| Subheading | Syne | 16px | 14px | 600 | 0.08em (uppercase) |
| Body | DM Sans | 16px | 15px | 400 | 0 |
| Body Small | DM Sans | 14px | 13px | 300 | 0 |
| Price | Space Mono | 32px | 26px | 700 | -0.02em |
| Label/Tag | Syne | 11px | 11px | 600 | 0.12em (uppercase) |
| Button | Syne | 13px | 13px | 600 | 0.08em (uppercase) |
| Nav links | Syne | 13px | — | 600 | 0.06em |

---

## 📐 LAYOUT & GRID

### Breakpoints
```css
/* Mobile first */
/* xs: 0–374px  → edge cases only */
/* sm: 375px    → default mobile */
@media (min-width: 640px)  { /* sm  — wide mobile */ }
@media (min-width: 768px)  { /* md  — tablet portrait */ }
@media (min-width: 1024px) { /* lg  — tablet landscape / small desktop */ }
@media (min-width: 1280px) { /* xl  — desktop */ }
@media (min-width: 1440px) { /* 2xl — wide desktop */ }
```

### Container
```css
.container {
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: clamp(16px, 5vw, 80px);
}
```

---

## 🖥️ SECTIONS & HTML STRUCTURE

### 1. NAVBAR
```html
<nav class="navbar" id="navbar">
  <div class="container navbar__inner">
    <a href="#" class="navbar__logo">
      <img src="/assets/images/logo.svg" alt="Antony Rental Motor Bike">
    </a>
    <ul class="navbar__links">
      <li><a href="#fleet">Fleet</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#how">How It Works</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <a href="https://wa.me/6281238634788" class="btn btn--primary navbar__cta">
      Book Now
    </a>
    <button class="navbar__hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
```

**Behavior:**
- Default: `background: transparent`, text off-white
- On scroll (GSAP ScrollTrigger): `background: rgba(139,26,26,0.97)` + blur backdrop
- Mobile: hamburger → slide down menu full-width

---

### 2. HERO SECTION
```html
<section class="hero" id="hero">
  <!-- Grain texture overlay -->
  <div class="hero__grain"></div>

  <!-- Background gradient -->
  <div class="hero__bg"></div>

  <div class="container hero__inner">
    <!-- Left: Content -->
    <div class="hero__content">
      <span class="hero__eyebrow">📍 Canggu, Bali</span>
      <h1 class="hero__headline">
        <span class="line">RENT.</span>
        <span class="line">RIDE.</span>
        <span class="line">EXPLORE<br>BALI.</span>
      </h1>
      <p class="hero__sub">
        Clean bikes. Good price. Free delivery.<br>
        Daily · Weekly · Monthly — No Drama.
      </p>
      <div class="hero__cta-group">
        <a href="https://wa.me/..." class="btn btn--whatsapp btn--lg">
          <svg><!-- WA icon --></svg>
          Book via WhatsApp
        </a>
        <a href="#fleet" class="btn btn--ghost">
          See Our Fleet →
        </a>
      </div>
    </div>

    <!-- Right: Motor image -->
    <div class="hero__visual">
      <img class="hero__motor-img"
           src="/assets/images/honda-adv-160.webp"
           alt="Honda ADV-160 Rental Bali"
           width="580" height="420">
      <div class="hero__badge">
        <span>Free Delivery</span>
        <span>2 Helmets</span>
        <span>Phone Holder</span>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="hero__scroll-hint" aria-hidden="true">
    <span>Scroll</span>
    <div class="hero__scroll-line"></div>
  </div>
</section>
```

**GSAP Entrance:**
```
0.1s  → eyebrow fadeUp
0.2s  → headline lines — y:100 → 0, skewY:4 → 0, stagger 0.15s, expo.out
0.6s  → sub fadeUp
0.7s  → CTA group fadeUp
0.2s  → motor img slideRight (x:80 → 0) + opacity
after → motor float infinite yoyo (-18px, 3s, sine.inOut)
```

---

### 3. TRUST BAR
```html
<div class="trustbar">
  <div class="trustbar__track">
    <!-- Render dari TRUST_ITEMS × 3 untuk seamless loop -->
    <span>✓ Free Delivery</span>
    <span class="trustbar__dot">·</span>
    <span>✓ Clean Bikes</span>
    <!-- ... repeat ... -->
  </div>
</div>
```

```css
.trustbar {
  background: var(--color-primary);
  padding: 14px 0;
  overflow: hidden;
}
.trustbar__track {
  display: flex;
  gap: 32px;
  animation: marquee 28s linear infinite;
  white-space: nowrap;
  font-family: var(--font-heading);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-white);
}
@keyframes marquee {
  from { transform: translateX(0) }
  to   { transform: translateX(-50%) }
}
```

---

### 4. WHY US SECTION
```html
<section class="why-us" id="why-us">
  <div class="container">
    <span class="section-label" data-reveal="fade-up">Why Choose Us</span>
    <h2 class="section-title" data-reveal="fade-up">
      GOOD PRICE.<br>NO DRAMA.
    </h2>
    <div class="benefits-grid" data-reveal="stagger">
      <!-- Render dari BENEFITS data -->
      <div class="card benefit-card">
        <div class="benefit-card__icon">
          <svg><use href="/assets/icons/icons.svg#icon-bike"></use></svg>
        </div>
        <h3>Clean Bikes</h3>
        <p>Motor terawat, dicek sebelum setiap delivery</p>
      </div>
      <!-- × 4 -->
    </div>
  </div>
</section>
```

**GSAP:** Cards stagger 0.12s `y:60 → 0` + `opacity:0 → 1` saat masuk viewport

---

### 5. FLEET SECTION
```html
<section class="fleet" id="fleet">
  <div class="container">
    <span class="section-label" data-reveal="fade-up">Our Fleet</span>
    <h2 class="section-title" data-reveal="fade-up">CHOOSE YOUR RIDE</h2>
    <div class="fleet-grid" data-reveal="stagger">
      <!-- Render dari FLEET data -->
      <div class="fleet-card" data-rotation="-3">
        <span class="badge badge--crimson">PREMIUM</span>
        <div class="fleet-card__img-wrap">
          <img src="/assets/images/honda-adv-160.webp" alt="...">
        </div>
        <div class="fleet-card__body">
          <h3>Honda ADV-160</h3>
          <p class="fleet-card__type">Sport Adventure</p>
          <ul class="fleet-card__features">
            <li>160cc Engine</li>
            <!-- ... -->
          </ul>
          <div class="fleet-card__footer">
            <span class="price">
              <span class="price__amount">Rp 150k</span>
              <span class="price__unit">/day</span>
            </span>
            <a href="https://wa.me/...Honda..." class="btn btn--ghost btn--sm">
              Book →
            </a>
          </div>
        </div>
      </div>
      <!-- × 3 bikes -->
    </div>
  </div>
</section>
```

**Fleet Card Style (Polaroid):**
```css
.fleet-card {
  background: var(--color-white);
  padding: 16px 16px 24px;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-card);
  /* Initial rotation set via JS: gsap.set(card, { rotation: card.dataset.rotation }) */
  cursor: pointer;
  will-change: transform;
}
.fleet-card__img-wrap {
  background: var(--color-sand-light);
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**GSAP Hover:** `rotation: 0, y: -16, scale: 1.04` → `elastic.out` snap back

---

### 6. STATS BAR
```html
<section class="stats">
  <div class="container stats__grid">
    <div class="stat" data-reveal="scale">
      <span class="stat__number" data-target="500" data-suffix="+">0+</span>
      <span class="stat__label">Happy Riders</span>
    </div>
    <!-- × 4 stats -->
  </div>
</section>
```

**GSAP:** `gsap.to(obj, { val: target })` — counter count up saat ScrollTrigger

---

### 7. PRICING SECTION
```html
<section class="pricing" id="pricing">
  <div class="container">
    <h2 class="section-title" data-reveal="fade-up">SIMPLE PRICING</h2>

    <!-- Tab switcher -->
    <div class="pricing-tabs" role="tablist">
      <button class="tab active" data-period="daily">Daily</button>
      <button class="tab" data-period="weekly">Weekly</button>
      <button class="tab" data-period="monthly">Monthly</button>
    </div>

    <div class="pricing-grid" data-reveal="stagger">
      <!-- 3 motor pricing cards -->
      <div class="pricing-card">
        <div class="pricing-card__header">
          <h3>Honda ADV-160</h3>
          <span class="badge badge--crimson">PREMIUM</span>
        </div>
        <div class="pricing-card__price">
          <span class="price__amount" data-daily="150000"
                data-weekly="900000" data-monthly="3000000">
            Rp 150.000
          </span>
          <span class="price__unit">/day</span>
        </div>
        <ul class="pricing-card__includes">
          <li>✓ Free Delivery</li>
          <li>✓ 2 Helmets</li>
          <li>✓ Phone Holder</li>
          <li>✓ 24/7 WA Support</li>
        </ul>
        <a href="https://wa.me/..." class="btn btn--primary btn--full">
          Book Now
        </a>
      </div>
      <!-- × 3 -->
    </div>
    <p class="pricing-note">* Hubungi kami untuk promo mingguan & bulanan 🙏</p>
  </div>
</section>
```

**GSAP Tab Switch:**
```javascript
tabs.forEach(tab => tab.addEventListener("click", () => {
  const period = tab.dataset.period
  gsap.to(".price__amount", {
    opacity: 0, y: -10, duration: 0.2,
    onComplete: () => {
      // update text
      gsap.to(".price__amount", { opacity: 1, y: 0, duration: 0.3 })
    }
  })
}))
```

---

### 8. HOW IT WORKS
```html
<section class="how-it-works" id="how">
  <div class="container">
    <h2 class="section-title" data-reveal="fade-up">HOW IT WORKS</h2>
    <div class="steps">
      <div class="step" data-reveal="fade-up">
        <div class="step__number">01</div>
        <div class="step__icon"><!-- WA icon --></div>
        <h3>Chat WhatsApp</h3>
        <p>Hubungi kami, ceritakan kebutuhan & tanggal sewa</p>
      </div>
      <!-- Connector SVG line between steps (GSAP drawSVG) -->
      <svg class="step-connector"><path d="..."/></svg>
      <div class="step" data-reveal="fade-up">
        <div class="step__number">02</div>
        <!-- ... -->
      </div>
      <svg class="step-connector"><path d="..."/></svg>
      <div class="step" data-reveal="fade-up">
        <div class="step__number">03</div>
        <!-- ... -->
      </div>
    </div>
  </div>
</section>
```

**Background:** Crimson Red section, semua teks off-white  
**GSAP:** Step cards stagger + connector SVG path stroke draw animation

---

### 9. LOCATION & CONTACT
```html
<section class="location" id="contact">
  <div class="container location__grid">
    <!-- Map -->
    <div class="location__map" data-reveal="slide-left">
      <iframe src="https://www.google.com/maps/embed?..."
              loading="lazy" allowfullscreen></iframe>
    </div>

    <!-- Contact info -->
    <div class="location__info" data-reveal="slide-right">
      <span class="section-label">Find Us</span>
      <h2>WHERE TO<br>FIND US</h2>
      <div class="contact-item">
        <svg><!-- pin icon --></svg>
        <p>Jl. Raya Padonan No.89a, Tibubeneng,<br>
           Kuta Utara, Badung, Bali 80361</p>
      </div>
      <div class="contact-item">
        <svg><!-- clock icon --></svg>
        <p>08.00 – 21.00 WITA · Setiap Hari</p>
      </div>
      <a href="https://wa.me/6281238634788" class="btn btn--whatsapp btn--lg">
        <svg><!-- WA icon --></svg>
        +62 812-3863-4788
      </a>
    </div>
  </div>
</section>
```

---

### 10. FOOTER
```html
<footer class="footer">
  <div class="container footer__inner">
    <div class="footer__brand">
      <img src="/assets/images/logo-white.svg" alt="Antony Rental">
      <p>Clean bikes. Good price.<br>No drama. Just vibes. 🏍️</p>
    </div>
    <div class="footer__links">
      <a href="#fleet">Fleet</a>
      <a href="#pricing">Pricing</a>
      <a href="#how">How It Works</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="footer__social">
      <a href="https://instagram.com/antonyrentalmotorbike" target="_blank">Instagram</a>
      <a href="https://wa.me/6281238634788" target="_blank">WhatsApp</a>
    </div>
  </div>
  <div class="footer__bottom">
    <p>© 2025 Antony Rental Motor Bike · Crafted with ❤️ by
      <a href="https://gimora.my.id">Gimora Digital</a>
    </p>
  </div>
</footer>
```

---

### 11. FLOATING WHATSAPP BUTTON
```html
<!-- Fixed, selalu tampil di semua halaman -->
<a href="https://wa.me/6281238634788" class="wa-float"
   target="_blank" aria-label="Chat via WhatsApp">
  <svg><!-- WA logo --></svg>
  <!-- Pulse ring animation via CSS -->
  <span class="wa-float__ring"></span>
</a>
```

```css
.wa-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 58px; height: 58px;
  background: var(--color-whatsapp);
  border-radius: var(--radius-full);
  display: flex; align-items: center; justify-content: center;
  box-shadow: var(--shadow-float);
  z-index: var(--z-float);
  transition: transform 0.3s ease;
}
.wa-float:hover { transform: scale(1.1); }

.wa-float__ring {
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  border: 2px solid var(--color-whatsapp);
  animation: wa-pulse 2s ease-out infinite;
}
@keyframes wa-pulse {
  0%   { transform: scale(1);   opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0; }
}
```

---

## ✨ BUTTON SYSTEM

```css
/* Base */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
}

/* Primary — Crimson Red */
.btn--primary {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}
.btn--primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(139,26,26,0.3);
}

/* WhatsApp — Green */
.btn--whatsapp {
  background: var(--color-whatsapp);
  color: #fff;
}
.btn--whatsapp:hover {
  filter: brightness(1.08);
  transform: translateY(-2px);
}

/* Ghost — Outline */
.btn--ghost {
  background: transparent;
  color: var(--color-white);
  border-color: rgba(250,245,238,0.4);
}
.btn--ghost:hover {
  background: var(--color-white);
  color: var(--color-dark);
  border-color: var(--color-white);
}

/* Sizes */
.btn--sm  { padding: 10px 20px; font-size: 12px; }
.btn--lg  { padding: 18px 36px; font-size: 15px; }
.btn--full { width: 100%; justify-content: center; }
```

---

## 🏷️ BADGE SYSTEM

```css
.badge {
  display: inline-block;
  padding: 4px 10px;
  font-family: var(--font-heading);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: var(--radius-full);
}
.badge--crimson { background: var(--color-primary);  color: var(--color-white); }
.badge--orange  { background: var(--color-accent);   color: var(--color-white); }
.badge--sand    { background: var(--color-secondary); color: var(--color-dark);  }
```

---

## 🌊 SECTION DIVIDERS (Torn Paper Effect)

```html
<!-- Antara section — SVG torn paper seperti di poster -->
<div class="divider divider--torn-down" aria-hidden="true">
  <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
    <path d="M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z"
          fill="var(--color-sand-light)"/>
  </svg>
</div>
```

---

## 📱 MOBILE DESIGN NOTES

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero headline | 96px | 52px |
| Motor image | Kanan hero | Bawah headline |
| Fleet grid | 3 kolom | Horizontal scroll snap |
| Pricing | 3 kolom | Stack + tabs |
| How It Works | Horizontal | Vertical stack |
| Navbar | Top sticky | Top sticky + hamburger |
| WA float | Bottom-right | Bottom-right (lebih besar) |

```css
/* Fleet mobile scroll */
@media (max-width: 768px) {
  .fleet-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 16px;
    padding-bottom: 16px;
    -webkit-overflow-scrolling: touch;
  }
  .fleet-card {
    flex: 0 0 80vw;
    scroll-snap-align: start;
  }
}
```

---

## 🗂️ ASSET REQUIREMENTS

| Asset | Format | Size | Notes |
|-------|--------|------|-------|
| Logo Antony | SVG | — | Recreate vector dari poster |
| Logo white | SVG | — | Untuk footer dark bg |
| Honda ADV-160 | WebP (transparent) | < 200kb | Official press kit |
| Yamaha N-MAX | WebP (transparent) | < 200kb | Official press kit |
| Yamaha Filano | WebP (transparent) | < 200kb | Official press kit |
| Hero background | WebP | < 300kb | Bali road / rice field road photo |
| OG Image | JPG | 1200×630 | Social share preview |
| Noise texture | PNG | < 10kb | Grain overlay untuk hero |
| SVG Icons sprite | SVG | — | Phosphor icons: bike, truck, lightning, tag, map-pin, wa |

---

## 📊 DESIGN CHECKLIST

- [ ] Color contrast ratio ≥ 4.5:1 (WCAG AA) — khususnya text on crimson
- [ ] Alt text pada semua `<img>`
- [ ] Focus styles visible untuk keyboard navigation
- [ ] Fonts preload (`<link rel="preload">`)
- [ ] `prefers-reduced-motion` media query — disable GSAP jika user prefer
- [ ] WA links menggunakan `wa.me` dengan pre-filled message
- [ ] Google Maps embed dengan `loading="lazy"`
- [ ] Favicon SVG + ICO terpasang
- [ ] OG tags untuk social share preview

### `prefers-reduced-motion` Handler
```javascript
// Respect OS accessibility setting
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

if (!prefersReduced) {
  initHeroAnimation()
  initScrollReveal()
  initFleetHover()
}
// Jika reduced → element langsung visible, no animation
```

---

## 🔑 DESIGN PRINCIPLES SUMMARY

```
1. CRIMSON IS KING    → Merah dari poster jadi jiwa keseluruhan design
2. BEBAS NEUE BOLD   → Headline harus massive, impactful, tidak minta izin
3. POLAROID FLEET    → Kartu motor miring, organic, tidak kaku
4. GSAP EVERYTHING   → Tidak ada yang muncul tiba-tiba, semua cinematic
5. WA IS THE CTA     → Satu goal: user klik WA. Semua mengarah ke sana
6. MOBILE IS PRIMARY → Design dari 375px dulu, baru expand ke desktop
```

---

*Design Document v2.0 — Updated: GSAP Animation System*  
*Gimora Digital × Antony Rental Motor Bike*
