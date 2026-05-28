// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/animations/fleet-anim.js — Polaroid Card Hover + Elastic Snap Back
// ===========================

import { gsap } from "./gsap-init.js"

export function initFleetHover() {
  // Set initial rotation dari data attribute SETELAH render
  document.querySelectorAll(".fleet-card").forEach(card => {
    const initRotation = parseFloat(card.dataset.rotation) || 0

    // Set initial tilt (polaroid effect)
    gsap.set(card, { rotation: initRotation })

    // ── Hover IN — straighten + lift + crimson shadow ──
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        rotation: 0,
        y: -16,
        scale: 1.04,
        boxShadow: "0 28px 56px rgba(139,26,26,0.30)",
        duration: 0.4,
        ease: "power2.out",
      })
    })

    // ── Hover OUT — spring back to original tilt ────────
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotation: initRotation,
        y: 0,
        scale: 1,
        boxShadow: "0 12px 24px rgba(26,18,16,0.12)",
        duration: 0.7,
        ease: "elastic.out(1, 0.75)",
      })
    })

    // ── Click — quick press effect ──────────────────────
    card.addEventListener("mousedown", () => {
      gsap.to(card, {
        scale: 0.98,
        duration: 0.12,
        ease: "power2.out",
      })
    })

    card.addEventListener("mouseup", () => {
      gsap.to(card, {
        scale: 1.04,
        duration: 0.2,
        ease: "back.out(2)",
      })
    })
  })
}

// ── 3D Tilt on Mouse Move (subtle, desktop only) ──────────
export function initFleetTilt() {
  if (window.matchMedia("(pointer: coarse)").matches) return // skip touch devices

  document.querySelectorAll(".fleet-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)

      gsap.to(card, {
        rotationY: dx * 5,
        rotationX: -dy * 5,
        transformPerspective: 600,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      })
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.75)",
        overwrite: "auto",
      })
    })
  })
}
