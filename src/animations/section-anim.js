// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/animations/section-anim.js — Extra Section Micro-Animations
// ===========================

import { gsap, ScrollTrigger } from "./gsap-init.js"

// ── Trust Bar: Pause on hover (already CSS), but speed up on mobile ──
export function initTrustbarSpeed() {
  const track = document.querySelector(".trustbar__track")
  if (!track) return
  // Slightly speed up on mobile
  if (window.innerWidth < 768) {
    track.style.animationDuration = "20s"
  }
}

// ── WHY US: Icon bounce on enter ──────────────────────────
export function initBenefitIcons() {
  ScrollTrigger.create({
    trigger: "#benefits-grid",
    start: "top 80%",
    once: true,
    onEnter: () => {
      gsap.fromTo("#benefits-grid .benefit-card__icon",
        { scale: 0, rotate: -20 },
        {
          scale: 1,
          rotate: 0,
          duration: 0.6,
          ease: "back.out(2)",
          stagger: 0.1,
        }
      )
    },
  })
}

// ── STEP ICON CIRCLES: Pulse in ──────────────────────────
export function initStepIcons() {
  ScrollTrigger.create({
    trigger: "#steps-container",
    start: "top 80%",
    once: true,
    onEnter: () => {
      gsap.fromTo("#steps-container .step__icon-circle",
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
          stagger: 0.2,
          delay: 0.3,
        }
      )
    },
  })
}

// ── NAVBAR: Subtle scale on logo hover ───────────────────
export function initLogoHover() {
  const logo = document.querySelector(".navbar__logo img")
  if (!logo) return

  logo.addEventListener("mouseenter", () => {
    gsap.to(logo, { scale: 1.08, duration: 0.3, ease: "power2.out" })
  })
  logo.addEventListener("mouseleave", () => {
    gsap.to(logo, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.7)" })
  })
}

// ── CTA BUTTONS: Magnetic hover effect ───────────────────
export function initMagneticButtons() {
  if (window.matchMedia("(pointer: coarse)").matches) return

  document.querySelectorAll(".btn--whatsapp, .btn--primary").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect()
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.2
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.2

      gsap.to(btn, {
        x: dx,
        y: dy,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      })
    })

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.6)",
        overwrite: "auto",
      })
    })
  })
}

// ── PRICING TAB: Indicator slide animation (tab underline) ─
export function initTabIndicator() {
  const tabs = document.querySelectorAll(".tab")
  const tabsContainer = document.querySelector(".pricing-tabs")
  if (!tabsContainer || !tabs.length) return

  // Create sliding indicator
  const indicator = document.createElement("div")
  indicator.className = "tab-indicator"
  indicator.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    background: var(--color-primary);
    border-radius: 9999px;
    transition: none;
    z-index: 0;
    pointer-events: none;
    box-shadow: 0 4px 12px rgba(139,26,26,0.25);
  `
  tabsContainer.style.position = "relative"
  tabsContainer.prepend(indicator)

  function moveIndicator(tab) {
    gsap.to(indicator, {
      width:  tab.offsetWidth,
      height: tab.offsetHeight,
      x:      tab.offsetLeft,
      y:      tab.offsetTop,
      duration: 0.35,
      ease: "power3.inOut",
    })
  }

  // Position on first active tab
  const activeTab = tabsContainer.querySelector(".tab--active")
  if (activeTab) {
    gsap.set(indicator, {
      width:  activeTab.offsetWidth,
      height: activeTab.offsetHeight,
      x:      activeTab.offsetLeft,
      y:      activeTab.offsetTop,
    })
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.style.position = "relative")
      tab.style.position = "relative"
      moveIndicator(tab)
    })
  })
}

// ── SCROLL PROGRESS BAR ───────────────────────────────────
export function initScrollProgress() {
  // Create progress bar element
  const bar = document.createElement("div")
  bar.id = "scroll-progress"
  bar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
    transform-origin: left;
    transform: scaleX(0);
    z-index: 9999;
    pointer-events: none;
    border-radius: 0 2px 2px 0;
  `
  document.body.prepend(bar)

  ScrollTrigger.create({
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      gsap.set(bar, { scaleX: self.progress })
    },
  })
}
