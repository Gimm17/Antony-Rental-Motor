// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/animations/scroll-reveal.js — ScrollTrigger Reveals for All Sections
// ===========================

import { gsap, ScrollTrigger } from "./gsap-init.js"

export function initScrollReveal() {

  // ── 1. Fade Up — paragraf, labels, headings ───────────
  gsap.utils.toArray("[data-reveal='fade-up']").forEach(el => {
    gsap.fromTo(el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    )
  })

  // ── 2. Stagger cards — benefit cards, pricing cards ───
  // Benefits
  ScrollTrigger.create({
    trigger: "#benefits-grid",
    start: "top 82%",
    toggleActions: "play none none none",
    onEnter: () => {
      gsap.fromTo("#benefits-grid .benefit-card",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.1,
        }
      )
    },
  })

  // Fleet cards
  ScrollTrigger.create({
    trigger: "#fleet-grid",
    start: "top 82%",
    toggleActions: "play none none none",
    onEnter: () => {
      gsap.fromTo("#fleet-grid .fleet-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        }
      )
    },
  })

  // Pricing cards
  ScrollTrigger.create({
    trigger: "#pricing-grid",
    start: "top 82%",
    toggleActions: "play none none none",
    onEnter: () => {
      gsap.fromTo("#pricing-grid .pricing-card",
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
        }
      )
    },
  })

  // Steps
  ScrollTrigger.create({
    trigger: "#steps-container",
    start: "top 82%",
    toggleActions: "play none none none",
    onEnter: () => {
      gsap.fromTo("#steps-container .step",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        }
      )
    },
  })

  // ── 3. Slide from Left ────────────────────────────────
  gsap.utils.toArray("[data-reveal='slide-left']").forEach(el => {
    gsap.fromTo(el,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    )
  })

  // ── 4. Slide from Right ───────────────────────────────
  gsap.utils.toArray("[data-reveal='slide-right']").forEach(el => {
    gsap.fromTo(el,
      { x: 80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    )
  })

  // ── 5. Scale In — stats, icons ────────────────────────
  gsap.utils.toArray("[data-reveal='scale']").forEach(el => {
    gsap.fromTo(el,
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    )
  })

  // ── 6. Section Titles — split line reveal ─────────────
  document.querySelectorAll(".section-title").forEach(el => {
    gsap.fromTo(el,
      { y: 40, opacity: 0, clipPath: "inset(0 0 100% 0)" },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    )
  })

  // ── 7. Section Labels — slide up with delay ───────────
  document.querySelectorAll(".section-label").forEach(el => {
    gsap.fromTo(el,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    )
  })

  // ── 8. Stats Section — slide up whole section ─────────
  gsap.fromTo(".stats",
    { backgroundColor: "rgba(26,18,16,0)" },
    {
      backgroundColor: "rgba(26,18,16,1)",
      duration: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".stats",
        start: "top 90%",
      },
    }
  )

  // ── 9. HOW IT WORKS — decorative bg circle expand ─────
  gsap.fromTo(".how-it-works::before",
    { scale: 0.5, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".how-it-works",
        start: "top 70%",
      },
    }
  )

  // ── 10. Location section reveal ────────────────────────
  gsap.fromTo(".location",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".location",
        start: "top 90%",
      },
    }
  )

  // ── 11. Footer — slide up ─────────────────────────────
  gsap.fromTo(".footer__inner > *",
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".footer__inner",
        start: "top 90%",
      },
    }
  )
}
