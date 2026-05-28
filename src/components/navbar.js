// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/components/navbar.js — Sticky Nav + Hamburger Mobile
// ===========================

export function initNavbar() {
  const navbar   = document.getElementById("navbar")
  const hamburger = document.getElementById("hamburger-btn")
  const navLinks  = document.getElementById("navbar-links")

  if (!navbar || !hamburger || !navLinks) return

  // ── Hamburger toggle ──────────────────────────
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("is-open")
    navLinks.classList.toggle("is-open")
    hamburger.setAttribute("aria-expanded", String(isOpen))
  })

  // ── Close menu on nav link click ─────────────
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("is-open")
      navLinks.classList.remove("is-open")
      hamburger.setAttribute("aria-expanded", "false")
    })
  })

  // ── Close menu on outside click ───────────────
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove("is-open")
      navLinks.classList.remove("is-open")
      hamburger.setAttribute("aria-expanded", "false")
    }
  })

  // ── Active link highlight on scroll ───────────
  const sections = document.querySelectorAll("section[id], div[id='hero']")
  const links    = navLinks.querySelectorAll("a[href^='#']")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === `#${entry.target.id}`
            )
          })
        }
      })
    },
    { rootMargin: "-40% 0px -55% 0px" }
  )

  sections.forEach(s => observer.observe(s))
}
