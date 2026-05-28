// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/components/trustbar.js — Marquee Strip
// ===========================

import { TRUST_ITEMS } from "../data/content.js"

export function initTrustbar() {
  const track = document.getElementById("trustbar-track")
  if (!track) return

  // Repeat items × 3 for seamless infinite loop
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS]

  track.innerHTML = items
    .map(
      (item, i) =>
        `<span>${item}</span>${
          i < items.length - 1 ? '<span class="trustbar__dot" aria-hidden="true">·</span>' : ""
        }`
    )
    .join("")
}
