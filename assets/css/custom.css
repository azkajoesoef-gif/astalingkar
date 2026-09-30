/* ═══════════════════════════════════════════════════════════
   ASTA LINGKAR LAW OFFICE — Custom CSS
   ═══════════════════════════════════════════════════════════ */

/* ─────────── SCROLL OFFSET ─────────── */
section[id] {
  scroll-margin-top: 90px;
}
@media (min-width: 1024px) {
  section[id] { scroll-margin-top: 100px; }
}

html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}

/* ─────────── GRAIN ─────────── */
.grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 3;
  opacity: 0.035;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ═══════════════════════════════════════════
   NAVBAR — dengan batas atas-bawah jelas
   ═══════════════════════════════════════════ */
.navbar-header {
  transition: background 0.5s ease, backdrop-filter 0.5s ease, box-shadow 0.5s ease;
}

/* Ketika di atas (transparan) */
.navbar-header.at-top {
  background: linear-gradient(180deg,
    rgba(11, 25, 44, 0.92) 0%,
    rgba(11, 25, 44, 0.75) 60%,
    rgba(11, 25, 44, 0.5) 100%);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

/* Ketika di-scroll (solid) */
.navbar-header.scrolled {
  background: rgba(11, 25, 44, 0.98);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.28);
}

.topbar-info {
  transition: height 0.4s ease, opacity 0.3s ease;
  height: 40px;
}

.main-nav {
  position: relative;
}

/* Gold bottom border — selalu terlihat */
.nav-bottom-border {
  position: absolute;
  bottom: 0;
  left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(201, 169, 97, 0.3) 15%,
    rgba(201, 169, 97, 0.7) 50%,
    rgba(201, 169, 97, 0.3) 85%,
    transparent 100%);
  pointer-events: none;
}

/* Logo ring — hanya berputar saat hover */
.logo-ring {
  transition: transform 1.2s cubic-bezier(0.65, 0, 0.35, 1);
  transform-origin: center;
}
.nav-logo:hover .logo-ring {
  transform: rotate(180deg);
}

/* ─────────── NAV LINK dengan nomor ─────────── */
.nav-link {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  padding: 10px 14px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  transition: color 0.4s ease;
}
.nav-link .nav-num {
  font-family: 'Cinzel', serif;
  font-size: 9px;
  font-weight: 600;
  color: rgba(201, 169, 97, 0.5);
  transition: color 0.4s ease, transform 0.4s ease;
  display: inline-block;
}
.nav-link::after {
  content: '';
  position: absolute;
  left: 14px; right: 14px; bottom: 4px;
  height: 1px;
  background: #c9a961;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}
.nav-link:hover {
  color: #fff;
}
.nav-link:hover .nav-num {
  color: #c9a961;
  transform: translateY(-1px);
}
.nav-link:hover::after,
.nav-link.nav-link-active::after {
  transform: scaleX(1);
  transform-origin: left;
}
.nav-link.nav-link-active {
  color: #c9a961;
}
.nav-link.nav-link-active .nav-num {
  color: #c9a961;
}

/* ─────────── NAV CTA ─────────── */
.nav-cta {
  position: relative;
  padding: 1px;
  border-radius: 2px;
  background: linear-gradient(135deg, rgba(201,169,97,0.7), rgba(201,169,97,0.2), rgba(201,169,97,0.7));
  overflow: hidden;
  transition: transform 0.3s ease;
}
.nav-cta:hover { transform: translateY(-1px); }

.nav-cta-inner {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  background: #0b192c;
  border-radius: 1px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #c9a961;
  transition: color 0.4s ease;
}
.nav-cta:hover .nav-cta-inner {
  color: #fff;
}

.nav-cta-shimmer {
  position: absolute;
  top: 0; left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  animation: cta-shimmer 3.2s ease-in-out infinite;
  pointer-events: none;
}
@keyframes cta-shimmer {
  0% { left: -100%; }
  40%, 100% { left: 200%; }
}

/* ─────────── HAMBURGER ─────────── */
.hamburger {
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 8px;
  border: 1px solid rgba(201,169,97,0.3);
  border-radius: 2px;
  background: rgba(201,169,97,0.05);
  transition: border-color 0.3s, background 0.3s;
}
.hamburger:hover {
  border-color: #c9a961;
  background: rgba(201,169,97,0.1);
}
.hamburger span {
  display: block;
  width: 20px;
  height: 1.5px;
  background: #c9a961;
  transition: transform 0.3s, opacity 0.3s;
}
.hamburger[aria-expanded="true"] span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.hamburger[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
}
.hamburger[aria-expanded="true"] span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* ─────────── MOBILE OVERLAY ─────────── */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 60;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.mobile-overlay.is-open {
  opacity: 1;
}
.mobile-overlay-bg {
  position: absolute;
  inset: 0;
  background: rgba(11, 25, 44, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.mobile-overlay-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 32px 32px;
  color: #fff;
}
.mobile-overlay-link {
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 16px 0;
  font-family: 'Cinzel', serif;
  font-size: 28px;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  text-decoration: none;
  border-bottom: 1px solid rgba(201,169,97,0.12);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease, color 0.3s, padding-left 0.3s;
}
.mobile-overlay.is-open .mobile-overlay-link {
  opacity: 1;
  transform: translateY(0);
}
.mobile-overlay.is-open li:nth-child(1) .mobile-overlay-link { transition-delay: 0.1s; }
.mobile-overlay.is-open li:nth-child(2) .mobile-overlay-link { transition-delay: 0.15s; }
.mobile-overlay.is-open li:nth-child(3) .mobile-overlay-link { transition-delay: 0.2s; }
.mobile-overlay.is-open li:nth-child(4) .mobile-overlay-link { transition-delay: 0.25s; }
.mobile-overlay.is-open li:nth-child(5) .mobile-overlay-link { transition-delay: 0.3s; }
.mobile-overlay.is-open li:nth-child(6) .mobile-overlay-link { transition-delay: 0.35s; }
.mobile-overlay.is-open li:nth-child(7) .mobile-overlay-link { transition-delay: 0.4s; }

.mobile-overlay-link .mnum {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  font-weight: 600;
  color: rgba(201,169,97,0.6);
  letter-spacing: 0.2em;
}
.mobile-overlay-link:hover {
  color: #c9a961;
  padding-left: 12px;
}

/* ─────────── SCROLL SPY ─────────── */
.scroll-spy {
  position: fixed;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 45;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}
.scroll-spy-track { display: none; }
.scroll-spy-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-end;
}
.scroll-dot {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.scroll-dot .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(201,169,97,0.35);
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  flex-shrink: 0;
}
.scroll-dot .dot-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  opacity: 0;
  transform: translateX(8px);
  transition: opacity 0.3s, transform 0.3s, color 0.3s;
  white-space: nowrap;
}
.scroll-dot:hover .dot-label {
  opacity: 1;
  transform: translateX(0);
}
.scroll-dot:hover .dot {
  background: #c9a961;
  transform: scale(1.4);
}
.scroll-dot.active .dot {
  background: #c9a961;
  width: 20px;
  border-radius: 3px;
}
.scroll-dot.active .dot-label {
  opacity: 1;
  transform: translateX(0);
  color: #c9a961;
}

/* ─────────── RIPPLE EFFECT ─────────── */
.ripple-btn {
  position: relative;
  overflow: hidden;
}
.ripple-effect {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transform: translate(-50%, -50%) scale(0);
  animation: ripple-anim 0.8s ease-out;
  pointer-events: none;
}
@keyframes ripple-anim {
  to {
    transform: translate(-50%, -50%) scale(30);
    opacity: 0;
  }
}

/* ─────────── PILAR CARD HOVER ─────────── */
.pilar-card {
  transition: background 0.5s ease, transform 0.5s ease;
}
.pilar-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 1px;
  background: #c9a961;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}
.pilar-card:hover {
  background: #1c2541;
}
.pilar-card:hover::before {
  transform: scaleX(1);
}
.pilar-card:hover .font-cinzel:first-child {
  color: rgba(201,169,97,0.5);
}

/* ─────────── AFILIASI CARD ─────────── */
.afiliasi-card {
  transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1), border-color 0.5s, box-shadow 0.5s;
}
.afiliasi-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

/* ─────────── TESTIMONI MARQUEE ─────────── */
.marquee-row { overflow: hidden; }
.marquee-row-track {
  animation: marquee-scroll 45s linear infinite;
  width: max-content;
}
.marquee-row:hover .marquee-row-track {
  animation-play-state: paused;
}
.marquee-row-reverse { overflow: hidden; }
.marquee-row-reverse .marquee-row-track {
  animation-direction: reverse;
  animation-duration: 55s;
}

.testi-card {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  min-width: 340px;
  padding: 32px 40px;
  background: #fff;
  border: 1px solid rgba(11,25,44,0.08);
  border-radius: 2px;
  white-space: normal;
  transition: border-color 0.4s, transform 0.4s;
}
.testi-card:hover {
  border-color: #c9a961;
  transform: translateY(-3px);
}
.testi-card-dark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 420px;
  padding: 20px 40px;
  background: #0b192c;
  border: 1px solid rgba(201,169,97,0.2);
  border-radius: 2px;
  white-space: nowrap;
}

/* ─────────── MARQUEE ─────────── */
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee-track {
  animation: marquee-scroll 40s linear infinite;
  width: max-content;
}
.marquee-track:hover {
  animation-play-state: paused;
}

/* ─────────── FAQ & PRAKTIK ACCORDION ─────────── */
.faq-content,
.praktik-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}
.faq-icon,
.praktik-toggle i {
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}
.praktik-icon {
  transition: background-color 0.4s ease;
}
.praktik-icon i {
  transition: color 0.4s ease;
}
.praktik-item:hover .praktik-icon i {
  color: #0b192c;
}

/* ─────────── CUSTOM CURSOR ─────────── */
.cursor-dot,
.cursor-ring {
  position: fixed;
  top: 0; left: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s;
}
.has-custom-cursor .cursor-dot,
.has-custom-cursor .cursor-ring { opacity: 1; }
.has-custom-cursor,
.has-custom-cursor a,
.has-custom-cursor button { cursor: none !important; }

.cursor-dot {
  width: 6px; height: 6px;
  background: #c9a961;
  border-radius: 50%;
}
.cursor-ring {
  width: 36px; height: 36px;
  border: 1px solid rgba(201, 169, 97, 0.5);
  border-radius: 50%;
  transition: width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s, opacity 0.3s;
}
.cursor-ring.cursor-hover {
  width: 56px; height: 56px;
  background: rgba(201, 169, 97, 0.08);
  border-color: rgba(201, 169, 97, 0.8);
}
@media (pointer: coarse) {
  .cursor-dot, .cursor-ring { display: none !important; }
  .scroll-spy { display: none !important; }
}

/* ─────────── PRELOADER ─────────── */
@keyframes pulse-logo {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.03); }
}
.preloader-logo { animation: pulse-logo 2s ease-in-out infinite; }

/* ─────────── REVEAL ─────────── */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.12s; }
.reveal-delay-2 { transition-delay: 0.24s; }
.reveal-delay-3 { transition-delay: 0.36s; }

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

/* ─────────── ROTATING RINGS ─────────── */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes spin-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}
.animate-spin-slow { animation: spin-slow 60s linear infinite; }
.animate-spin-reverse { animation: spin-reverse 45s linear infinite; }

/* ─────────── GOLD GRADIENT ─────────── */
.gold-gradient {
  background: linear-gradient(135deg, #e8d9a8 0%, #c9a961 45%, #d4af37 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* ─────────── MOBILE LINK (fallback) ─────────── */
.mobile-link {
  display: block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255,255,255,0.75);
  padding: 14px 8px;
  border-bottom: 1px solid rgba(201,169,97,0.1);
  text-decoration: none;
}
.mobile-link:hover { color: #c9a961; }

/* ─────────── FOOTER LINK ─────────── */
.footer-link {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  color: rgba(255,255,255,0.45);
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.3s, padding-left 0.3s;
  display: inline-block;
}
.footer-link:hover {
  color: #c9a961;
  padding-left: 6px;
}

/* ─────────── SELECT ARROW ─────────── */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23c9a961' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px !important;
}

/* ─────────── SCROLLBAR ─────────── */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: #0b192c; }
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #c9a961, #8d7541);
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover { background: #d4af37; }
* { scrollbar-width: thin; scrollbar-color: #c9a961 #0b192c; }

/* ─────────── FOCUS ─────────── */
:focus-visible {
  outline: 2px solid #c9a961;
  outline-offset: 3px;
  border-radius: 2px;
}
:focus:not(:focus-visible) { outline: none; }

/* ─────────── SKIP LINK ─────────── */
.skip-link:focus {
  position: absolute !important;
  top: 16px !important; left: 16px !important;
  width: auto !important; height: auto !important;
  padding: 12px 24px !important;
  clip: auto !important;
  z-index: 9999 !important;
}

/* ─────────── SR-ONLY ─────────── */
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border-width: 0;
}

/* ─────────── PRINT ─────────── */
@media print {
  #navbar, #wa-float, #back-to-top, #mobile-menu,
  .skip-link, .grain, .cursor-dot, .cursor-ring,
  #preloader, #scroll-progress, #topbar, #scroll-spy {
    display: none !important;
  }
  body { background: #fff !important; color: #000 !important; font-size: 12pt; }
  section { padding: 20pt 0 !important; page-break-inside: avoid; }
  .reveal { opacity: 1 !important; transform: none !important; }
}

/* ─────────── SELECTION ─────────── */
::selection {
  background: #c9a961;
  color: #0b192c;
}
