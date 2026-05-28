// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/animations/hero-anim.js — Cinematic Hero Entrance
// ===========================

import { gsap } from "./gsap-init.js"

export function heroEntrance() {
  // ── Set initial hidden state IMMEDIATELY (no flash) ──
  gsap.set(".hero__eyebrow",    { opacity: 0, y: 30 })
  gsap.set(".hero__headline .line", { opacity: 0, y: 100, skewY: 4 })
  gsap.set(".hero__sub",        { opacity: 0, y: 20 })
  gsap.set(".hero__cta-group",  { opacity: 0, y: 20 })
  gsap.set(".hero__scroll-hint",{ opacity: 0 })

  // ── Master timeline — cinematic stagger ──
  const tl = gsap.timeline({ delay: 0.2 })

  tl.to(".hero__eyebrow", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power3.out",
  })

  .to(".hero__headline .line", {
    opacity: 1,
    y: 0,
    skewY: 0,
    duration: 1.0,
    ease: "expo.out",
    stagger: 0.14,
  }, "-=0.4")

  .to(".hero__sub", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power3.out",
  }, "-=0.5")

  .to(".hero__cta-group", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
  }, "-=0.4")

  // Motor and Badge animations removed as they no longer exist in HTML

  // Scroll hint fades in last
  .to(".hero__scroll-hint", {
    opacity: 1,
    duration: 0.6,
    ease: "power2.out",
  }, "-=0.2")

  return tl
}

// ── Motor Infinite Float (runs after entrance) ────────────
export function heroMotorFloat() {
  // Empty, no longer needed
}

// ── Hero Background Parallax on scroll ───────────────────
export function heroParallax() {
  const bg = document.querySelector(".hero__bg")
  if (!bg) return

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY
    bg.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`
  }, { passive: true })
}
