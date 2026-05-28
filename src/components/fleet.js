// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/components/fleet.js — Fleet Section Component
// ===========================

import { FLEET, waLink } from "../data/content.js"

export function renderFleet() {
  const grid = document.getElementById("fleet-grid")
  if (!grid) return

  grid.innerHTML = FLEET.map((bike, i) => `
    <article class="fleet-card" 
             data-rotation="${bike.rotation}" 
             data-bike-id="${bike.id}"
             aria-label="${bike.name} — ${bike.type}">
      
      <!-- Badge -->
      <span class="badge ${bike.badgeClass}">${bike.badge}</span>

      <!-- Motor Image (Polaroid style) -->
      <div class="fleet-card__img-wrap">
        <img 
          src="${bike.image}" 
          alt="${bike.imageAlt}" 
          loading="${i === 0 ? 'eager' : 'lazy'}"
          width="400" height="300"
        />
      </div>

      <!-- Card Body -->
      <div class="fleet-card__body">
        <h3>${bike.name}</h3>
        <p class="fleet-card__type">${bike.type}</p>

        <ul class="fleet-card__features" aria-label="Fitur ${bike.name}">
          ${bike.features.map(f => `<li>✓ ${f}</li>`).join("")}
        </ul>

        <div class="fleet-card__footer">
          <div class="price">
            <span class="price__amount">Rp ${(bike.priceDaily / 1000).toFixed(0)}k</span>
            <span class="price__unit">/hari</span>
          </div>
          <a 
            href="${waLink(bike.name)}" 
            class="btn btn--primary btn--sm"
            target="_blank" 
            rel="noopener noreferrer"
            id="fleet-wa-${bike.id}"
            aria-label="Book ${bike.name} via WhatsApp"
          >
            Book →
          </a>
        </div>
      </div>
    </article>
  `).join("")
}
