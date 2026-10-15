/**
 * ROXWARE CONSULTANCY — PREMIUM MOTION DESIGN & INTERACTION SCRIPT
 * Multi-page version: handles header shrink, scroll-reveal, photo-hero parallax,
 * magnetic cursor glow, card tilt, testimonial carousel, project planner, contact flow,
 * and active nav state for multi-page navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- 0. Theme Mode (Dark & Light) Management (Logo Color Theme) ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');

  const themeStorage = {
    get() {
      try {
        return localStorage.getItem('roxware_theme') || localStorage.getItem('rocks_theme');
      } catch (e) {
        return null;
      }
    },
    set(value) {
      try {
        localStorage.setItem('roxware_theme', value);
      } catch (e) {
        /* private-mode / blocked storage: persist in-memory only */
      }
    }
  };

  function getInitialTheme() {
    const saved = themeStorage.get();
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeStorage.set(theme);

    // Update theme-color meta tag
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme === 'light' ? '#F8F7F3' : '#0A0E14';
    }

    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
      themeToggleBtn.setAttribute('title', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
    }
    if (mobileThemeToggleBtn) {
      mobileThemeToggleBtn.textContent = theme === 'light' ? 'Switch to Dark' : 'Switch to Light';
    }

    // Notify components
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }

  // Initial theme execution
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  if (mobileThemeToggleBtn) {
    mobileThemeToggleBtn.addEventListener('click', toggleTheme);
  }

  // --- 1. Header Scroll Shrink ---
  const header = document.querySelector('.site-header');

  const onScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- 2. Mobile Drawer Navigation ---
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('#mobileNavDrawer a');
  let lastFocusedBeforeDrawer = null;

  function setDrawerOpen(open, restoreFocus) {
    if (!mobileToggle || !mobileDrawer) return;
    mobileToggle.setAttribute('aria-expanded', String(open));
    mobileDrawer.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      lastFocusedBeforeDrawer = document.activeElement;
      const first = mobileDrawer.querySelector('a[href], button:not([disabled])');
      if (first) first.focus({ preventScroll: true });
    } else if (restoreFocus && lastFocusedBeforeDrawer && document.contains(lastFocusedBeforeDrawer)) {
      lastFocusedBeforeDrawer.focus({ preventScroll: true });
    }
  }

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      setDrawerOpen(!isExpanded, !isExpanded ? false : true);
    });

    // Focus trap: cycle Tab inside open drawer
    mobileDrawer.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab' || !mobileDrawer.classList.contains('open')) return;
      const focusables = Array.from(mobileDrawer.querySelectorAll('a[href], button:not([disabled])'))
        .filter(el => el.getClientRects().length > 0);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        setDrawerOpen(false, false);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        setDrawerOpen(false, true);
        if (mobileToggle) mobileToggle.focus({ preventScroll: true });
      }
    });
  }

  // --- 3. PHOTO-HERO SCROLL-DRIVEN PARALLAX ---
  // Applies a subtle zoom-out + vertical shift on the hero image as user scrolls
  const photoHeroContainer = document.querySelector('.photo-hero-scroll-container');
  const photoHeroImg = document.getElementById('heroPhotoImg');
  const photoHeroContent = document.querySelector('.photo-hero-content');

  if (photoHeroContainer && photoHeroImg && !prefersReducedMotion) {
    let heroTarget = 0;
    let heroCurrent = 0;
    let heroRAFActive = true;

    window.addEventListener('scroll', () => {
      const rect = photoHeroContainer.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
      heroTarget = progress;
    }, { passive: true });

    function heroTick() {
      if (!heroRAFActive) return;
      heroCurrent += (heroTarget - heroCurrent) * 0.12;

      // Scale from 1.15 down to 1.0 as scroll progresses (zoom-out effect)
      const scale = 1.15 - (heroCurrent * 0.15);
      // Subtle vertical shift for depth
      const translateY = heroCurrent * -30;

      photoHeroImg.style.transform = `scale(${scale}) translateY(${translateY}px)`;

      // Fade content slightly as user scrolls past
      if (photoHeroContent) {
        const contentOpacity = Math.max(1 - heroCurrent * 1.5, 0);
        const contentShift = heroCurrent * 40;
        photoHeroContent.style.opacity = contentOpacity;
        photoHeroContent.style.transform = `translateY(${contentShift}px)`;
      }

      requestAnimationFrame(heroTick);
    }
    heroTick();

    // Cleanup when navigating away (if needed)
    window.addEventListener('beforeunload', () => { heroRAFActive = false; });
  }

  // --- 4. PREMIUM Scroll Reveal Animations ---
  const heroRevealEls = document.querySelectorAll('.photo-hero-content.reveal, .hero-content.reveal, .hero-3d-wrapper.reveal');
  function showHeroReveals() {
    heroRevealEls.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 120 + i * 140);
    });
  }
  showHeroReveals();

  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  } else if ('IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll('.reveal:not(.photo-hero-content):not(.hero-content):not(.hero-3d-wrapper)');

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.revealDelay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    });

    revealEls.forEach((el, idx) => {
      if (!el.dataset.revealDelay) {
        el.dataset.revealDelay = (idx % 3) * 100;
      }
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  // --- 5. PREMIUM Magnetic Cursor Glow on Bento Cards ---
  if (!prefersReducedMotion) {
    const bentoCards = document.querySelectorAll('.bento-cell');
    bentoCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
    });
  }

  // --- 6. 3D Card Hover Tilt ---
  const tiltCards = document.querySelectorAll('[data-tilt]');
  if (tiltCards.length > 0 && !prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  // --- 7. Testimonial Crossfade Slider ---
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;
  let slideInterval = null;
  const sliderWrap = document.querySelector('.testimonials-slider-wrap');

  function showSlide(index) {
    slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === index);
    });
    dots.forEach((d, idx) => {
      const on = idx === index;
      d.classList.toggle('active', on);
      d.setAttribute('aria-selected', on ? 'true' : 'false');
      d.setAttribute('aria-current', on ? 'true' : 'false');
    });
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function startSlideTimer() {
    if (slides.length > 1 && !slideInterval) {
      slideInterval = setInterval(nextSlide, 5000);
    }
  }

  function stopSlideTimer() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  if (sliderWrap && slides.length > 1) {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopSlideTimer();
      else startSlideTimer();
    });
    if (prefersReducedMotion) {
      showSlide(0);
    } else {
      startSlideTimer();
    }

    sliderWrap.addEventListener('mouseenter', stopSlideTimer);
    sliderWrap.addEventListener('mouseleave', startSlideTimer);
    sliderWrap.addEventListener('focusin', stopSlideTimer);
    sliderWrap.addEventListener('focusout', startSlideTimer);

    dots.forEach((dot, idx) => {
      dot.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
      dot.setAttribute('aria-current', idx === 0 ? 'true' : 'false');
      dot.addEventListener('click', () => {
        stopSlideTimer();
        showSlide(idx);
        startSlideTimer();
      });
    });
    showSlide(0);
  }

  // --- 8. Interactive "Project Planner" Widget (home page only) ---
  const plannerState = {
    type: 'High-Performance Web Architecture',
    priority: 'sub-second latency & 100 Web Vitals',
    timeline: '1-2 months (Full Production)'
  };

  const plannerConfig = {
    types: {
      web: 'High-Performance Web Architecture',
      app: 'Custom SaaS / Web Application',
      marketing: 'Digital Advertising Campaign',
      seo: 'Technical SEO & GEO Optimization',
      it: 'Infrastructure & Managed IT Support'
    },
    priorities: {
      speed: 'sub-second latency & 100 Web Vitals',
      design: 'Awwwards-tier 3D & UI motion design',
      seo: 'local GEO search dominance and structured schema',
      ads: 'high-converting landing funnels & ad tracking'
    },
    timelines: {
      sprint: '2-4 weeks (Priority Sprint)',
      standard: '1-2 months (Full Production)',
      flexible: 'Flexible phased roadmap'
    }
  };

  const outputTextEl = document.getElementById('plannerOutputText');
  const plannerCards = document.querySelectorAll('.planner-btn-card');
  const btnSendPlannerIdea = document.getElementById('btnSendPlannerIdea');

  function updatePlannerCopy() {
    if (!outputTextEl) return;

    outputTextEl.style.opacity = '0';
    setTimeout(() => {
      outputTextEl.innerHTML = `You're planning a <strong>${plannerState.type}</strong> focused on <strong>${plannerState.priority}</strong>. Roxware typically delivers this in <strong>${plannerState.timeline}</strong>. Share your idea below to receive our architecture breakdown and estimate.`;
      outputTextEl.style.opacity = '1';
    }, 180);
  }

  plannerCards.forEach(card => {
    const isSelected = card.classList.contains('selected');
    card.setAttribute('role', 'radio');
    card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
    card.setAttribute('tabindex', isSelected ? '0' : '-1');
    function selectPlannerCard(focusAfter) {
      const group = card.dataset.group;
      const val = card.dataset.value;
      if (!group || !val) return;

      document.querySelectorAll(`.planner-btn-card[data-group="${group}"]`).forEach(c => {
        c.classList.remove('selected');
        c.setAttribute('aria-checked', 'false');
        c.setAttribute('tabindex', '-1');
      });
      card.classList.add('selected');
      card.setAttribute('aria-checked', 'true');
      card.setAttribute('tabindex', '0');

      if (group === 'type') plannerState.type = plannerConfig.types[val] || val;
      if (group === 'priority') plannerState.priority = plannerConfig.priorities[val] || val;
      if (group === 'timeline') plannerState.timeline = plannerConfig.timelines[val] || val;

      updatePlannerCopy();
      if (focusAfter) card.focus({ preventScroll: true });
    }
    card.addEventListener('click', () => selectPlannerCard(false));
    card.addEventListener('keydown', (e) => {
      const groupCards = Array.from(document.querySelectorAll(`.planner-btn-card[data-group="${card.dataset.group}"]`));
      const i = groupCards.indexOf(card);
      let target = -1;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') target = (i + 1) % groupCards.length;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') target = (i - 1 + groupCards.length) % groupCards.length;
      else if (e.key === 'Home') target = 0;
      else if (e.key === 'End') target = groupCards.length - 1;
      else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); selectPlannerCard(false); return; }
      else return;
      e.preventDefault();
      const next = groupCards[target];
      if (next) {
        next.click();
        next.focus({ preventScroll: true });
      }
    });
  });

  // Pre-fill contact form on "Send my project idea"
  if (btnSendPlannerIdea) {
    btnSendPlannerIdea.addEventListener('click', () => {
      // Navigate to contact page with planner data in URL params
      const params = new URLSearchParams({
        type: plannerState.type,
        priority: plannerState.priority,
        timeline: plannerState.timeline
      });
      window.location.href = `contact.html?planner=${encodeURIComponent(params.toString())}`;
    });
  }

  updatePlannerCopy();

  // --- 9. Contact Form Handling ---
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccessBanner');

  // Check for planner pre-fill from URL
  if (contactForm) {
    const urlParams = new URLSearchParams(window.location.search);
    const plannerData = urlParams.get('planner');
    if (plannerData) {
      const plannerParams = new URLSearchParams(decodeURIComponent(plannerData));
      const messageField = document.getElementById('formProjectMessage');
      if (messageField) {
        messageField.value = `[Roxware Project Planner Specs]\n- Project Type: ${plannerParams.get('type') || ''}\n- Priority: ${plannerParams.get('priority') || ''}\n- Target Timeline: ${plannerParams.get('timeline') || ''}\n\nProject details: `;
        messageField.focus();
      }
    }
  }

  if (contactForm) {
    // Inline, accessible error region
    let formError = document.getElementById('formErrorBanner');
    if (!formError) {
      formError = document.createElement('p');
      formError.id = 'formErrorBanner';
      formError.className = 'form-error-banner';
      formError.setAttribute('role', 'alert');
      formError.setAttribute('aria-live', 'assertive');
      formError.hidden = true;
      contactForm.prepend(formError);
    }

    function showFormError(msg, focusEl) {
      formError.textContent = msg;
      formError.hidden = false;
      if (focusEl && typeof focusEl.focus === 'function') focusEl.focus({ preventScroll: false });
    }

    function clearFormError() {
      formError.textContent = '';
      formError.hidden = true;
    }

    contactForm.setAttribute('novalidate', 'novalidate');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearFormError();

      const nameEl = document.getElementById('formName');
      const emailEl = document.getElementById('formEmail');
      const messageEl = document.getElementById('formProjectMessage');
      const name = nameEl?.value.trim();
      const email = emailEl?.value.trim();
      const message = messageEl?.value.trim();

      if (!name || !email || !message) {
        showFormError('Please provide your name, email, and project brief.', !name ? nameEl : (!email ? emailEl : messageEl));
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFormError('Please provide a valid email address.', emailEl);
        return;
      }

      if (name.length > 120 || email.length > 254 || message.length > 5000) {
        showFormError('That brief is too long -- please keep it under 5,000 characters.', messageEl);
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Transmitting brief to Roxware...';
      }

      setTimeout(() => {
        if (formSuccess) {
          formSuccess.style.display = 'block';
          const heading = document.createElement('strong');
          heading.textContent = 'Brief Received!';
          formSuccess.replaceChildren(
            heading,
            document.createTextNode(` Thank you, ${name}. The Roxware engineering team will review your requirements and respond to ${email} within 24 hours with an architecture roadmap.`)
          );
        }
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Brief to Roxware';
        }
      }, 700);
    });
  }

  // --- 10. Active Nav State (Multi-Page) ---
  // Highlight current page in navigation (handles both /services and /services.html, / and /index.html)
  const rawPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const pathSegment = (rawPath.split('/').pop() || 'index').replace(/\.html$/i, '');
  const currentNormalizedPage = (pathSegment === '' || pathSegment === 'index') ? 'index' : pathSegment;

  const allNavLinks = document.querySelectorAll('.nav-desktop .nav-link, #mobileNavDrawer a.mobile-nav-link');

  allNavLinks.forEach(link => {
    const rawHref = link.getAttribute('href') || '';
    const hrefClean = rawHref.split('?')[0].split('#')[0].replace(/^\/+|\/+$/g, '');
    const hrefSegment = (hrefClean.split('/').pop() || 'index').replace(/\.html$/i, '');
    const linkNormalizedPage = (hrefSegment === '' || hrefSegment === 'index') ? 'index' : hrefSegment;

    if (linkNormalizedPage === currentNormalizedPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });

  // --- 11. PREMIUM Smooth Page Load Transition ---
  if (!prefersReducedMotion) {
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
      document.body.style.transition = 'opacity 0.6s ease';
      document.body.style.opacity = '1';
    });
  }
});
