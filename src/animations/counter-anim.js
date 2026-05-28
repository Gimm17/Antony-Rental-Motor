// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/animations/counter-anim.js — Stats Number Count-Up
// ===========================

import { gsap, ScrollTrigger } from "./gsap-init.js"

export function initCounters() {
  document.querySelectorAll(".stat__number").forEach(el => {
    const target = parseInt(el.dataset.target, 10)
    const suffix = el.dataset.suffix || ""
    if (isNaN(target)) return

    const obj = { val: 0 }

    // Add a highlight flash when counter finishes
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: "power2.out",
          onUpdate() {
            el.textContent = Math.round(obj.val) + suffix
          },
          onComplete() {
            // Brief accent color flash at end
            gsap.fromTo(el,
              { color: "#E8842A" },  // accent-light
              {
                color: "#D4681A",    // accent
                duration: 0.6,
                ease: "power2.inOut",
              }
            )
          },
        })
      },
    })
  })
}
