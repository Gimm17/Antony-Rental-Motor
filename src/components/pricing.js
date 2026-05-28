// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/components/pricing.js — Pricing Section Component
// ===========================

import { FLEET, waLink, formatIDR } from "../data/content.js"

const PERIODS = {
  daily: { key: "priceDaily", label: "/hari", unit: "Hari" },
  weekly: { key: "priceWeekly", label: "/minggu", unit: "Minggu" },
  monthly: { key: "priceMonthly", label: "/bulan", unit: "Bulan" },
}

const FEATURED_INDEX = 1 // N-MAX

export function renderPricing(period = "daily") {
  const grid = document.getElementById("pricing-grid")
  if (!grid) return

  const { key, label } = PERIODS[period]

  grid.innerHTML = FLEET.map((bike, i) => {
    const isFeatured = i === FEATURED_INDEX
    return `
      <div class="pricing-card ${isFeatured ? "pricing-card--featured" : ""}"
           data-bike-id="${bike.id}">
        
        ${isFeatured ? `<div class="pricing-card__popular">Most Popular 🔥</div>` : ""}

        <div class="pricing-card__header">
          <h3>${bike.name}</h3>
          <span class="badge ${bike.badgeClass}">${bike.badge}</span>
        </div>

        <div class="pricing-card__price">
          <span class="price__amount" id="price-${bike.id}" data-daily="${bike.priceDaily}" data-weekly="${bike.priceWeekly}" data-monthly="${bike.priceMonthly}">
            ${formatIDR(bike[key])}
          </span>
          <span class="price__unit">${label}</span>
        </div>

        <ul class="pricing-card__includes">
          <li>✓ Free Delivery (area Canggu)</li>
          <li>✓ 2 Helmets Included</li>
          <li>✓ Phone Holder</li>
          <li>✓ 24/7 WA Support</li>
          ${bike.features.map(f => `<li>✓ ${f}</li>`).join("")}
        </ul>

        <a 
          href="${waLink(bike.name)}" 
          class="btn ${isFeatured ? "btn--whatsapp" : "btn--primary"} btn--full"
          target="_blank" 
          rel="noopener noreferrer"
          id="pricing-wa-${bike.id}"
        >
          ${isFeatured ? "Book Now" : "Book Now"}
        </a>
      </div>
    `
  }).join("")
}

export function initPricingTabs(gsap) {
  const tabs = document.querySelectorAll(".tab")
  let currentPeriod = "daily"

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const newPeriod = tab.dataset.period
      if (newPeriod === currentPeriod) return

      // Update active state
      tabs.forEach(t => {
        t.classList.remove("tab--active")
        t.setAttribute("aria-selected", "false")
      })
      tab.classList.add("tab--active")
      tab.setAttribute("aria-selected", "true")
      currentPeriod = newPeriod

      if (gsap) {
        // GSAP crossfade transition
        const priceEls = document.querySelectorAll(".price__amount")
        gsap.to(priceEls, {
          opacity: 0,
          y: -12,
          duration: 0.18,
          ease: "power2.in",
          onComplete: () => {
            renderPricing(currentPeriod)
            gsap.fromTo(".price__amount",
              { opacity: 0, y: 12 },
              { opacity: 1, y: 0, duration: 0.3, ease: "power3.out", stagger: 0.06 }
            )
          }
        })
      } else {
        renderPricing(currentPeriod)
      }
    })
  })
}
