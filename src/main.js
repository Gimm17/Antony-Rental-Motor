// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/main.js — Entry Point (Phase 4 Clean)
// ===========================
import "./style.css"

// Components
import { initNavbar }     from "./components/navbar.js"
import { initFloatingWA } from "./components/floating-wa.js"
import { initTrustbar }   from "./components/trustbar.js"
import { renderFleet }    from "./components/fleet.js"
import { renderPricing, initPricingTabs } from "./components/pricing.js"
import { renderSteps }    from "./components/how-it-works.js"

// Animations
import { gsap, ScrollTrigger }             from "./animations/gsap-init.js"
import { initNavbarScroll }                from "./animations/navbar-anim.js"
import { heroEntrance, heroMotorFloat, heroParallax } from "./animations/hero-anim.js"
import { initScrollReveal }                from "./animations/scroll-reveal.js"
import { initFleetHover, initFleetTilt }   from "./animations/fleet-anim.js"
import { initCounters }                    from "./animations/counter-anim.js"
import {
  initTrustbarSpeed, initBenefitIcons,
  initStepIcons, initLogoHover,
  initMagneticButtons, initTabIndicator,
  initScrollProgress,
} from "./animations/section-anim.js"

// Data
import { BENEFITS, STATS } from "./data/content.js"

// ── RENDER: Benefits Grid (inline — uses BENEFITS data) ────
function renderBenefits() {
  const grid = document.getElementById("benefits-grid")
  if (!grid) return
  grid.innerHTML = BENEFITS.map(b => `
    <div class="benefit-card">
      <div class="benefit-card__icon-wrap">
        <span class="benefit-card__icon">${b.icon}</span>
      </div>
      <h3>${b.title}</h3>
      <p>${b.desc}</p>
    </div>
  `).join("")
}

// ── RENDER: Stats Grid (inline — uses STATS data) ──────────
function renderStats() {
  const grid = document.getElementById("stats-grid")
  if (!grid) return
  grid.innerHTML = STATS.map(s => `
    <div class="stat" data-reveal="scale">
      <span class="stat__number" data-target="${s.value}" data-suffix="${s.suffix}">
        0${s.suffix}
      </span>
      <span class="stat__label">${s.label}</span>
    </div>
  `).join("")
}

// ── CHECK REDUCED MOTION ────────────────────────────────────
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

// ══════════════════════════════════════════════════════════
// INIT ALL
// ══════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {

  // 1. Render dynamic content
  renderBenefits()
  renderFleet()
  renderStats()
  renderPricing()
  renderSteps()

  // 2. Core components
  initNavbar()
  initTrustbar()
  initFloatingWA()
  initPricingTabs(gsap)

  if (!prefersReduced) {
    // 3. GSAP Animations
    initNavbarScroll()
    heroEntrance()
    heroParallax()
    gsap.delayedCall(1.8, heroMotorFloat)
    initScrollReveal()
    initFleetHover()
    initFleetTilt()
    initCounters()
    initBenefitIcons()
    initStepIcons()
    initLogoHover()
    initMagneticButtons()
    initScrollProgress()

    requestAnimationFrame(() => {
      initTabIndicator()
      initTrustbarSpeed()
    })

  } else {
    // Reduced motion fallback
    gsap.set([
      ".hero__eyebrow", ".hero__headline .line",
      ".hero__sub", ".hero__cta-group",
      ".hero__motor-img", ".hero__badge span",
      ".hero__scroll-hint",
    ], { opacity: 1, y: 0, x: 0, skewY: 0, scale: 1 })
  }

  console.log("🏍️ Antony Rental Motor Bike — Phase 4 Complete!")
})

// ── BOTTOM NAV: Active state on scroll ─────────────────────
function initBottomNav() {
  const items = document.querySelectorAll(".bottom-nav__item[href^='#']")
  if (!items.length) return

  const sectionIds = ["fleet", "pricing", "how", "contact"]

  const setActive = (id) => {
    items.forEach(item => {
      item.classList.toggle("is-active", item.getAttribute("href") === `#${id}`)
    })
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id)
    })
  }, { rootMargin: "-30% 0px -60% 0px" })

  sectionIds.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })

  // Smooth scroll on item click
  items.forEach(item => {
    item.addEventListener("click", (e) => {
      const hash = item.getAttribute("href")
      if (hash && hash.startsWith("#")) {
        e.preventDefault()
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" })
          setActive(hash.slice(1))
        }
      }
    })
  })
  // ── Show/Hide Bottom Nav based on Hero Section ──
  const bottomNavEl = document.getElementById("bottom-nav")
  const heroEl = document.getElementById("hero")
  if (bottomNavEl && heroEl) {
    // Initial state: hide
    bottomNavEl.classList.add("bottom-nav--hidden")
    
    const heroObserver = new IntersectionObserver((entries) => {
      const entry = entries[0]
      // If hero is intersecting (visible), hide the bottom nav
      if (entry.isIntersecting) {
        bottomNavEl.classList.add("bottom-nav--hidden")
      } else {
        bottomNavEl.classList.remove("bottom-nav--hidden")
      }
    }, { rootMargin: "-10% 0px 0px 0px" })
    
    heroObserver.observe(heroEl)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initBottomNav()
})
