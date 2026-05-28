// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/animations/gsap-init.js — GSAP Setup & Plugin Register
// ===========================

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"

// Register semua plugin GSAP
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
