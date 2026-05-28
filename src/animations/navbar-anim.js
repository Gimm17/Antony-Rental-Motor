// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/animations/navbar-anim.js — Transparent → Crimson on Scroll
// ===========================

import { gsap, ScrollTrigger } from "./gsap-init.js"

export function initNavbarScroll() {
  const nav = document.getElementById("navbar")
  if (!nav) return

  ScrollTrigger.create({
    start: "top -80",
    onEnter: () =>
      gsap.to(nav, {
        backgroundColor: "rgba(139,26,26,0.97)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
        duration: 0.4,
      }),
    onLeaveBack: () =>
      gsap.to(nav, {
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
        boxShadow: "none",
        duration: 0.4,
      }),
  })
}
