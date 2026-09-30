/* ═══════════════════════════════════════════════════════════
   ASTA LINGKAR LAW OFFICE — Main JavaScript
   Vanilla ES6+ · Tanpa framework · Tanpa build step
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const WA_NUMBER    = '6287888855877';
  const EMAIL_TARGET = 'info@astalingkar.com';

  const navbar        = document.getElementById('navbar');
  const topbar        = document.getElementById('topbar');
  const mobileBtn     = document.getElementById('mobile-menu-btn');
  const mobileMenu    = document.getElementById('mobile-menu');
  const menuIcon      = document.getElementById('menu-icon');
  const form          = document.getElementById('consultation-form');
  const emailBtn      = document.getElementById('email-fallback-btn');
  const waFloat       = document.getElementById('wa-float');
  const backTop       = document.getElementById('back-to-top');
  const progressBar   = document.getElementById('scroll-progress');
  const preloader     = document.getElementById('preloader');
  const preloaderBar  = document.getElementById('preloader-bar');

  /* ═══════════ 1. PRELOADER ═══════════ */
  (function initPreloader() {
    if (!preloader || !preloaderBar) return;

    let progress = 0;
    const interval = setInterval(function () {
      progress += Math.random() * 20 + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(function () {
          preloader.style.opacity = '0';
          preloader.style.visibility = 'hidden';
          preloader.style.transition = 'opacity 0.6s ease, visibility 0.6s';
          document.body.style.overflow = '';
        }, 300);
      }
      preloaderBar.style.width = progress + '%';
    }, 120);

    document.body.style.overflow = 'hidden';
  })();

  /* ═══════════ 2. CUSTOM CURSOR ═══════════ */
  (function initCursor() {
    if (window.innerWidth < 1024) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    document.documentElement.classList.add('has-custom-cursor');

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = 'translate(' + (mouseX - 3) + 'px, ' + (mouseY - 3) + 'px)';
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = 'translate(' + (ringX - 18) + 'px, ' + (ringY - 18) + 'px)';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effect untuk link & button
    document.querySelectorAll('a, button, .magnetic-btn').forEach(function (el) {
      el.addEventListener('mouseenter', function () { ring.classList.add('cursor-hover'); });
      el.addEventListener('mouseleave', function () { ring.classList.remove('cursor-hover'); });
    });
  })();

  /* ═══════════ 3. SCROLL PROGRESS BAR ═══════════ */
  function updateProgress() {
    if (!progressBar) return;
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  /* ═══════════ 4. TOPBAR + NAVBAR SCROLL ═══════════ */
  function handleNavScroll() {
    const y = window.pageYOffset;
    const scrolled = y > 40;

    if (topbar) {
      if (y > 80) {
        topbar.style.transform = 'translateY(-100%)';
        topbar.style.opacity = '0';
        navbar.style.top = '0';
      } else {
        topbar.style.transform = 'translateY(0)';
        topbar.style.opacity = '1';
        navbar.style.top = '40px';
      }
    }

    if (navbar) {
      if (scrolled) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('navbar-solid');
      } else {
        navbar.classList.remove('navbar-solid');
        navbar.classList.add('navbar-transparent');
      }
    }
  }

  /* ═══════════ 5. FLOATING BUTTONS ═══════════ */
  function handleFloatingButtons() {
    const show = window.pageYOffset > 400;

    [waFloat, backTop].forEach(function (btn) {
      if (!btn) return;
      if (show) {
        btn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
        btn.classList.add('opacity-100', 'translate-y-0');
      } else {
        btn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
        btn.classList.remove('opacity-100', 'translate-y-0');
      }
    });
  }

  /* ═══════════ 6. SCROLL LISTENER (throttled) ═══════════ */
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateProgress();
        handleNavScroll();
        handleFloatingButtons();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Init
  updateProgress();
  handleNavScroll();
  handleFloatingButtons();

  /* ═══════════ 7. MOBILE MENU ═══════════ */
  function openMenu() {
    mobileMenu.classList.remove('hidden');
    mobileBtn.setAttribute('aria-expanded', 'true');
    mobileBtn.setAttribute('aria-label', 'Tutup menu');
    menuIcon.classList.replace('fa-bars', 'fa-xmark');
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    mobileBtn.setAttribute('aria-expanded', 'false');
    mobileBtn.setAttribute('aria-label', 'Buka menu');
    menuIcon.classList.replace('fa-xmark', 'fa-bars');
  }

  if (mobileBtn) {
    mobileBtn.addEventListener('click', function () {
      const isOpen = mobileBtn.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileBtn && mobileBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      mobileBtn.focus();
    }
  });

  document.querySelectorAll('#mobile-menu a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* ═══════════ 8. SMOOTH SCROLL ═══════════ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();

      const navH = navbar ? navbar.offsetHeight : 80;
      const topbarH = (topbar && window.pageYOffset < 80) ? 40 : 0;
      const offset = navH + topbarH - 10;
      const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top: pos, behavior: 'smooth' });
      if (history.pushState) history.pushState(null, null, id);
    });
  });

  /* ═══════════ 9. REVEAL ON SCROLL ═══════════ */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      els.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* ═══════════ 10. ACTIVE NAV LINK ═══════════ */
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(function (link) {
            link.classList.toggle('nav-link-active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ═══════════ 11. FAQ ACCORDION ═══════════ */
  function initFAQ() {
    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach(function (item) {
      const btn = item.querySelector('.faq-btn');
      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-icon');
      if (!btn || !content) return;

      btn.addEventListener('click', function () {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';

        // Tutup semua dulu
        items.forEach(function (other) {
          const otherBtn = other.querySelector('.faq-btn');
          const otherContent = other.querySelector('.faq-content');
          const otherIcon = other.querySelector('.faq-icon');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = '0';
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });

        // Buka yang diklik (jika sebelumnya tertutup)
        if (!isOpen) {
          btn.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 'px';
          if (icon) icon.style.transform = 'rotate(45deg)';
        }
      });
    });
  }

  /* ═══════════ 12. BACK TO TOP ═══════════ */
  if (backTop) {
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ═══════════ 13. WHATSAPP GENERATOR ═══════════ */
  function buildMessage(nama, kontak, kategori, pesan) {
    return [
      'Halo ASTA LINGKAR, saya ingin konsultasi.',
      '',
      'Nama: ' + nama,
      'Kontak: ' + kontak,
      'Kategori: ' + kategori,
      'Ringkasan: ' + pesan
    ].join('\n');
  }

  function validateFields() {
    const nama = document.getElementById('nama').value.trim();
    const kontak = document.getElementById('kontak').value.trim();
    const kategori = document.getElementById('kategori').value;
    const pesan = document.getElementById('pesan').value.trim();
    if (!nama || !kontak || !kategori || !pesan) {
      alert('Mohon lengkapi seluruh kolom bertanda * sebelum mengirim.');
      return null;
    }
    return { nama: nama, kontak: kontak, kategori: kategori, pesan: pesan };
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = validateFields();
      if (!data) return;

      const msg = buildMessage(data.nama, data.kontak, data.kategori, data.pesan);
      const url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
      window.open(url, '_blank', 'noopener,noreferrer');
      setTimeout(function () { form.reset(); }, 900);
    });
  }

  if (emailBtn && form) {
    emailBtn.addEventListener('click', function () {
      const data = validateFields();
      if (!data) return;

      const subject = 'Konsultasi — ' + data.kategori + ' — ' + data.nama;
      const body = buildMessage(data.nama, data.kontak, data.kategori, data.pesan);
      window.location.href = 'mailto:' + EMAIL_TARGET +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  }

  /* ═══════════ 14. MAGNETIC BUTTONS ═══════════ */
  function initMagnetic() {
    if (window.innerWidth < 1024) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.querySelectorAll('.magnetic-btn').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
      });

      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  /* ═══════════ 15. INIT ═══════════ */
  function init() {
    initReveal();
    initActiveNav();
    initFAQ();
    initMagnetic();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
