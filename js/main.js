document.addEventListener('DOMContentLoaded', () => {
  // Mobile Burger Menu
  const burger = document.querySelector('.burger');
  const menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const o = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', o);
    });
  }

  // Header Nav Scroll Elevation
  const headerNav = document.querySelector('header.nav');
  if (headerNav) {
    const onScroll = () => {
      if (window.scrollY > 15) {
        headerNav.classList.add('scrolled');
      } else {
        headerNav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Services Data with Rich Details
  const S = [
    {
      t: "Compliance & Risk",
      q: "Would you know what to do if an employee claimed harassment?",
      d: "Comprehensive policies, proactive audits, and formal complaint-handling procedures that align with federal, Massachusetts, and New Hampshire employment laws before small workplace issues become costly liabilities.",
      b: [
        "Up-to-date state & federal legal policies",
        "Confidential complaint & investigation protocols",
        "On-site risk review & compliance audits"
      ],
      h: "compliance-risk-management",
      i: "shield",
      note: "Protect your business from lawsuits, employee grievances, and fines with on-site compliance leadership."
    },
    {
      t: "Compensation & Benefits",
      q: "Are you at risk of losing valued employees to competitors?",
      d: "Maximize your financial resources with competitive pay structures, incentive plans, and health benefit choices tailored to small and mid-size budgets.",
      b: [
        "Peer-competitive salary benchmarks & pay bands",
        "Cost-effective health & retirement strategies",
        "Turnkey benefits administration & renewal support"
      ],
      h: "compensation-benefits",
      i: "chart",
      note: "Retain high performers without breaking the bank with Fortune 500 compensation modeling."
    },
    {
      t: "Recruiting & Staffing",
      q: "Do you have an extra 40 to 60 hours to spare running hiring?",
      d: "We take entire hiring searches off your plate. From crafting targeted job descriptions and sourcing qualified applicants to initial vetting and onboarding your new team members.",
      b: [
        "Targeted job descriptions & multi-channel postings",
        "Rigorous resume screening & preliminary interviews",
        "Smooth candidate onboarding & baseline training"
      ],
      h: "recruiting-staffing",
      i: "people",
      note: "Focus on running your business while we deliver vetted candidates ready to fit your culture."
    },
    {
      t: "Training & Development",
      q: "Need a single source for all your manager and staff training?",
      d: "Empower your managers and develop high-potential employees with tailored workshops, leadership coaching, and workplace compliance education delivered directly to your workplace.",
      b: [
        "Management coaching & supervisor training",
        "Anti-harassment & workplace conduct workshops",
        "Custom career pathing & skill development"
      ],
      h: "employee-training-development",
      i: "people",
      note: "Build stronger leaders and increase retention through practical, on-site learning programs."
    },
    {
      t: "Payroll Administration",
      q: "Is it time to outsource your time-consuming payroll admin?",
      d: "Ensure error-free pay distributions, strict tax compliance, and seamless wage-and-hour tracking. We oversee payroll operations so your internal team gains dozens of hours back every month.",
      b: [
        "Accurate, on-time payroll execution & tax reporting",
        "FLSA wage, hour & overtime compliance",
        "Direct employee support for payroll & tax questions"
      ],
      h: "payroll-administration",
      i: "chart",
      note: "Eliminate payroll headaches and maintain 100% tax and legal compliance with dedicated oversight."
    },
    {
      t: "Employee Handbooks",
      q: "Is your handbook a practical roadmap or a dusty legal risk?",
      d: "A custom-written, legally compliant employee handbook that sets crystal-clear expectations, reflects your company culture, and protects your business from unnecessary exposure.",
      b: [
        "Custom policies reflecting MA & NH labor laws",
        "Clear standards for remote work, PTO, & AI tools",
        "Signed employee acknowledgments & annual updates"
      ],
      h: "employee-handbooks",
      i: "doc",
      note: "Give employees a clear guide to succeeding in your business while establishing legal safeguards."
    }
  ];

  const tabsContainer = document.getElementById('svc-tabs');
  const panel = document.getElementById('svc-panel');

  function renderTabs() {
    if (!tabsContainer || !panel) return;

    tabsContainer.innerHTML = S.map(
      (s, i) => `
      <button role="tab" class="svc-tab-btn" aria-selected="${i === 0}" data-i="${i}" id="svc-tab-${i}">
        <span class="tab-indicator"></span>
        <span class="tab-title">${s.t}</span>
      </button>`
    ).join('');

    pickService(0, false);
  }

  function pickService(i, shouldScroll = false) {
    if (!tabsContainer || !panel || !S[i]) return;

    const allTabs = tabsContainer.querySelectorAll('.svc-tab-btn');
    allTabs.forEach((btn, idx) => {
      btn.setAttribute('aria-selected', idx === i);
    });

    const s = S[i];
    panel.innerHTML = `
      <div class="svc-content-col">
        <div class="svc-badge"><span class="badge-dot"></span> Core HR2fit Solution</div>
        <h3 class="svc-heading">${s.t}</h3>
        <p class="svc-desc">${s.d}</p>
        <div class="svc-features-grid">
          ${s.b.map(item => `
            <div class="svc-feature-item">
              <span class="svc-check">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span>${item}</span>
            </div>
          `).join('')}
        </div>
        <div class="svc-actions">
          <a class="btn btn-navy" href="/contact/">Request Free On-Site Assessment →</a>
          <a class="btn btn-line" href="/contact/">Talk to Dr. Cindy</a>
        </div>
      </div>
      <div class="svc-consult-col">
        <div class="consult-card">
          <div class="consult-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <span class="consult-eyebrow">Strategic On-Site Question</span>
          <h4 class="consult-question">&ldquo;${s.q}&rdquo;</h4>
          <p class="consult-note">${s.note}</p>
          <div class="consult-footer">
            <span class="consult-chip">● On-Site in MA &amp; NH</span>
            <a href="/contact/" class="consult-link">Schedule a visit →</a>
          </div>
        </div>
      </div>
    `;

    if (shouldScroll) {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (tabsContainer) {
    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.svc-tab-btn');
      if (btn) {
        pickService(+btn.dataset.i, false);
      }
    });
  }

  // Universal Keyword & Pill Jump Handler (Works across entire page)
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-go]');
    if (trigger) {
      e.preventDefault();
      const targetIndex = +trigger.dataset.go;
      pickService(targetIndex, true);
    }
  });

  renderTabs();

  // Find Your Fit Segmented Control
  const fits = {
    s: [
      "Custom employee handbook and policies that keep you compliant from day one",
      "End-to-end recruiting and onboarding without losing 40 to 60 hours",
      "On-call expert guidance whenever a complex personnel or legal issue arises"
    ],
    m: [
      "Competitive compensation and peer benefits modeling that retains your best talent",
      "Hands-on management coaching and leadership development for your supervisors",
      "Complete payroll, benefit plans, and HR compliance administration handled on-site"
    ],
    l: [
      "Strategic organizational design, restructuring, and change management leadership",
      "Single-source manager training and enterprise skill development programs",
      "Multi-site risk reviews, audits, and formal employee dispute resolution"
    ]
  };

  const list = document.getElementById('fit-list');
  const segs = document.querySelectorAll('.seg button');

  if (list && segs.length > 0) {
    function showFit(k) {
      list.innerHTML = fits[k].map((t) => `<li>${t}</li>`).join('');
      segs.forEach((b) => b.setAttribute('aria-pressed', b.dataset.k === k));
    }

    segs.forEach((b) => b.addEventListener('click', () => showFit(b.dataset.k)));
    showFit('s');
  }

  // Auto-Advancing Testimonials Carousel (Point 5)
  const rail = document.querySelector('.rail');
  const prevBtn = document.querySelector('.tm-btn.prev');
  const nextBtn = document.querySelector('.tm-btn.next');
  const dotsContainer = document.querySelector('.tm-dots');
  const carouselContainer = document.querySelector('.carousel-container');

  if (rail) {
    const cards = rail.querySelectorAll('.tc-card, .tc');
    const totalCards = cards.length;
    let currentIndex = 0;
    let autoPlayTimer = null;
    let isHovered = false;

    // Create Navigation Dots
    if (dotsContainer && totalCards > 0) {
      dotsContainer.innerHTML = Array.from({ length: totalCards }, (_, i) => `
        <button role="tab" class="tm-dot ${i === 0 ? 'active' : ''}" aria-label="Go to testimonial ${i + 1}" data-slide="${i}"></button>
      `).join('');

      dotsContainer.addEventListener('click', (e) => {
        const dot = e.target.closest('.tm-dot');
        if (dot) {
          goToSlide(+dot.dataset.slide);
          resetAutoPlay();
        }
      });
    }

    function updateDots() {
      if (!dotsContainer) return;
      const dots = dotsContainer.querySelectorAll('.tm-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }

    function goToSlide(index) {
      if (totalCards === 0) return;
      currentIndex = (index + totalCards) % totalCards;
      const targetCard = cards[currentIndex];
      if (targetCard) {
        const offset = targetCard.offsetLeft - rail.offsetLeft - Math.max(0, (rail.clientWidth - targetCard.clientWidth) / 2);
        rail.scrollTo({
          left: Math.max(0, offset),
          behavior: 'smooth'
        });
      }
      updateDots();
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(() => {
        if (!isHovered && totalCards > 0) {
          goToSlide(currentIndex + 1);
        }
      }, 4200); // Advances automatically every 4.2 seconds
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        resetAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        resetAutoPlay();
      });
    }

    // Pause on hover or touch so reading is comfortable
    const pauseTarget = carouselContainer || rail;
    pauseTarget.addEventListener('mouseenter', () => { isHovered = true; });
    pauseTarget.addEventListener('mouseleave', () => { isHovered = false; });
    pauseTarget.addEventListener('touchstart', () => { isHovered = true; }, { passive: true });
    pauseTarget.addEventListener('touchend', () => { isHovered = false; });

    // Track scroll to keep dots in sync if manually dragged/swiped
    let scrollTimeout = null;
    rail.addEventListener('scroll', () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (isHovered) {
          const railCenter = rail.scrollLeft + rail.clientWidth / 2;
          let closestIndex = 0;
          let minDiff = Infinity;
          cards.forEach((card, i) => {
            const cardCenter = card.offsetLeft + card.clientWidth / 2;
            const diff = Math.abs(cardCenter - railCenter);
            if (diff < minDiff) {
              minDiff = diff;
              closestIndex = i;
            }
          });
          if (closestIndex !== currentIndex) {
            currentIndex = closestIndex;
            updateDots();
          }
        }
      }, 100);
    }, { passive: true });

    // Start auto-play
    startAutoPlay();
  }
});
