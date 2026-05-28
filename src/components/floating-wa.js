// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/components/floating-wa.js — Floating WhatsApp Button
// ===========================

export function initFloatingWA() {
  const btn = document.getElementById("wa-float-btn")
  if (!btn) return

  // Show button after scrolling 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      btn.classList.add("is-visible")
    } else {
      btn.classList.remove("is-visible")
    }
  }

  // Initial check
  toggleVisibility()

  // Listen to scroll
  window.addEventListener("scroll", toggleVisibility, { passive: true })
}
