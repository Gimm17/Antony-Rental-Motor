// ===========================
// ANTONY RENTAL MOTOR BIKE
// src/components/how-it-works.js — Steps Component
// ===========================

import { STEPS, waLink } from "../data/content.js"

export function renderSteps() {
  const container = document.getElementById("steps-container")
  if (!container) return

  container.innerHTML = STEPS.map((step, i) => `
    <div class="step" data-step="${i + 1}">
      <!-- Big decorative number -->
      <span class="step__number" aria-hidden="true">${step.number}</span>

      <!-- Icon circle -->
      <div class="step__icon-circle" aria-hidden="true">
        <span class="step__emoji">${step.icon}</span>
      </div>

      <!-- Step number badge (small) -->
      <div class="step__badge">Step ${step.number}</div>

      <h3>${step.title}</h3>
      <p>${step.desc}</p>
    </div>
  `).join("")
}
