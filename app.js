// SOUL-NETRA: Application Logic & Interactive Controls
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  renderAllSections();
  initSimulator();
  initReferenceFilters();
  initPrintAndExport();
});

/* ==========================================================================
   THEME TOGGLE SYSTEM
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('soul_netra_theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('soul_netra_theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-moon';
      themeToggle.title = 'Switch to Light Theme';
    } else {
      themeIcon.className = 'fa-solid fa-sun';
      themeToggle.title = 'Switch to Dark Theme';
    }
  }
}

/* ==========================================================================
   NAVIGATION & TAB SWITCHING
   ========================================================================== */
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.tab-section');
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  // Switch tab function
  function switchTab(tabId) {
    navItems.forEach(item => {
      if (item.dataset.tab === tabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    sections.forEach(sec => {
      if (sec.id === tabId) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = tabId;

    // Close sidebar on mobile
    if (window.innerWidth <= 1024) {
      sidebar.classList.remove('open');
    }
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      switchTab(item.dataset.tab);
    });
  });

  // Mobile drawer toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // Handle URL hash on load
  const currentHash = window.location.hash.replace('#', '');
  if (currentHash && document.getElementById(currentHash)) {
    switchTab(currentHash);
  }
}

/* ==========================================================================
   RENDER ALL DATA SECTIONS
   ========================================================================== */
function renderAllSections() {
  const data = SOUL_NETRA_DATA;

  renderKeyMetrics(data.keyMetrics);
  renderCagAudits(data.cagAudits);
  renderTenGaps(data.tenGaps);
  renderSchemesTable(data.schemesCoverage);
  renderArchitecture(data.architectureLayers);
  renderLiterature(data.literatureReview);
  renderBenchmark(data.benchmarkComparison);
  renderSecurityAndDpdp(data.dpdpCompliance, data.threatMitigation);
  renderPitchDeck(data.presentationDeck);
  renderReferences(data.references);
}

// 1. Key Metrics
function renderKeyMetrics(metrics) {
  const container = document.getElementById('metricsGrid');
  if (!container) return;

  container.innerHTML = metrics.map(m => `
    <div class="metric-card">
      <div class="metric-header">
        <span class="metric-tag" style="background: ${m.color}22; color: ${m.color}; border: 1px solid ${m.color}44;">
          ${m.tag}
        </span>
        <div class="metric-icon-wrap" style="background: ${m.color}18; color: ${m.color};">
          <i class="fa-solid fa-${getIconForMetric(m.icon)}"></i>
        </div>
      </div>
      <div>
        <div class="metric-value" style="color: ${m.color};">${m.value}</div>
        <div class="metric-label">${m.label}</div>
        <div class="metric-subtext">${m.subtext}</div>
      </div>
    </div>
  `).join('');
}

function getIconForMetric(icon) {
  const map = {
    'alert-triangle': 'triangle-exclamation',
    'file-x': 'file-excel',
    'users-x': 'users-slash',
    'clock': 'clock-rotate-left',
    'cpu': 'microchip',
    'shield-check': 'shield-check',
    'eye-off': 'eye-slash',
    'lock': 'lock'
  };
  return map[icon] || 'chart-simple';
}

// 2. CAG Audits
function renderCagAudits(audits) {
  const container = document.getElementById('cagAuditsGrid');
  if (!container) return;

  container.innerHTML = audits.map(a => `
    <div class="content-card" style="border-left: 4px solid var(--accent-red);">
      <div class="audit-badge-row">
        <span class="badge-pill" style="background: rgba(255,59,48,0.15); color: var(--accent-red);">
          <i class="fa-solid fa-file-invoice-dollar"></i> Impact: ${a.amount}
        </span>
        <span class="badge-pill" style="background: rgba(0,102,255,0.15); color: var(--accent-cyan);">
          Year: ${a.year}
        </span>
      </div>

      <h4 style="font-size: 1.25rem; margin-bottom: 6px;">${a.title}</h4>
      <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 12px; font-family: var(--font-mono);">
        <strong>Scheme:</strong> ${a.scheme} | <strong>Authority:</strong> ${a.organization}
      </p>

      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 14px;">
        ${a.description}
      </p>

      <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-primary); margin-bottom: 6px;">
        Key Investigative Findings:
      </div>
      <ul class="findings-list">
        ${a.keyFindings.map(f => `<li>${f}</li>`).join('')}
      </ul>

      <div class="consequence-box">
        <strong>Consequence & Action:</strong> ${a.consequence}
      </div>

      <div style="margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--border-color); font-size: 0.8rem;">
        <span style="color: var(--text-muted);">Verified Audit Sources:</span>
        <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 6px;">
          ${a.sources.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 6px;">
              <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i>
              ${s.title}
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// 3. 10 Systemic Gaps
function renderTenGaps(gaps) {
  const container = document.getElementById('tenGapsGrid');
  if (!container) return;

  container.innerHTML = gaps.map(g => `
    <div class="content-card gap-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span class="gap-num">#${g.id < 10 ? '0' + g.id : g.id}</span>
          <span class="badge-pill" style="background: rgba(255,159,10,0.15); color: var(--accent-amber);">
            Monitoring Bottleneck
          </span>
        </div>
        <h4 style="font-size: 1.15rem; margin-bottom: 10px;">${g.title}</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
          ${g.problem}
        </p>
      </div>

      <div class="solution-box">
        <strong style="display: block; margin-bottom: 4px; color: var(--accent-green);">
          <i class="fa-solid fa-check"></i> SOUL-NETRA Active Solution:
        </strong>
        ${g.solution}
      </div>
    </div>
  `).join('');
}

// 4. DoSJE Schemes Table
function renderSchemesTable(schemes) {
  const tbody = document.getElementById('schemesTableBody');
  if (!tbody) return;

  tbody.innerHTML = schemes.map(s => `
    <tr>
      <td style="font-weight: 700; color: var(--text-primary);">${s.category}</td>
      <td><strong>${s.institutions}</strong></td>
      <td>
        <div style="display: flex; flex-direction: column; gap: 4px;">
          ${s.schemes.map(sch => `<span class="badge-pill" style="background: rgba(255,255,255,0.05); color: var(--text-primary);">${sch}</span>`).join('')}
        </div>
      </td>
      <td style="color: var(--text-muted);">${s.currentMethod}</td>
      <td class="highlight-cell">${s.soulNetraEnhancement}</td>
    </tr>
  `).join('');
}

// 5. 6-Layer Architecture
function renderArchitecture(layers) {
  const container = document.getElementById('architectureLayersContainer');
  if (!container) return;

  container.innerHTML = layers.map((l, index) => `
    <div class="layer-card" style="border-left: 4px solid ${l.color};">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <div>
          <span class="layer-tag" style="color: ${l.color};">${l.layer} • Systematic Processing</span>
          <h4 style="font-size: 1.3rem;">${l.name}</h4>
        </div>
        <span class="badge-pill" style="background: ${l.color}22; color: ${l.color}; border: 1px solid ${l.color}44;">
          Active Subsystem
        </span>
      </div>

      <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 12px 0;">
        ${l.description}
      </p>

      <div class="component-pill-row">
        ${l.components.map(c => `
          <div class="component-pill">
            <i class="fa-solid fa-cube" style="color: ${l.color}; margin-right: 6px;"></i>
            ${c}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// 6. Literature Review Table
function renderLiterature(papers) {
  const tbody = document.getElementById('literatureTableBody');
  if (!tbody) return;

  tbody.innerHTML = papers.map(p => `
    <tr>
      <td style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-cyan);">#${p.id}</td>
      <td>
        <strong>${p.title}</strong>
        <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">Authors: ${p.authors}</div>
      </td>
      <td>
        <span class="badge-pill" style="background: rgba(0,102,255,0.15); color: var(--accent-cyan);">${p.year}</span>
        <div style="font-size: 0.8rem; margin-top: 4px; font-weight: 600;">${p.journal}</div>
      </td>
      <td style="font-size: 0.85rem;">
        <div><strong>Problem:</strong> ${p.problem}</div>
        <div style="margin-top: 4px; color: var(--text-muted);"><strong>Method:</strong> ${p.method}</div>
      </td>
      <td style="font-size: 0.85rem; color: var(--accent-green); font-weight: 600;">
        ${p.finding}
      </td>
      <td style="font-size: 0.85rem;" class="highlight-cell">
        ${p.relevance}
      </td>
      <td>
        <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="Open Paper URL">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </td>
    </tr>
  `).join('');
}

// 7. Benchmark Comparison Table
function renderBenchmark(benchmark) {
  const tbody = document.getElementById('benchmarkTableBody');
  if (!tbody) return;

  tbody.innerHTML = benchmark.map(b => `
    <tr>
      <td style="font-weight: 700; color: var(--text-primary);">${b.feature}</td>
      <td class="highlight-cell">${b.soulNetra}</td>
      <td>${b.cctv360}</td>
      <td>${b.gujaratPolice}</td>
      <td>${b.nmms}</td>
      <td>${b.giaApp}</td>
      <td>${b.mosjePortal}</td>
    </tr>
  `).join('');
}

// 8. DPDP Act & Threat Matrix
function renderSecurityAndDpdp(dpdp, threats) {
  const dpdpContainer = document.getElementById('dpdpContainer');
  const threatsContainer = document.getElementById('threatsContainer');

  if (dpdpContainer) {
    dpdpContainer.innerHTML = dpdp.map(d => `
      <div style="margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid var(--border-color);">
        <span class="badge-pill" style="background: rgba(156,39,176,0.15); color: var(--accent-purple); margin-bottom: 6px; display: inline-block;">
          ${d.section}
        </span>
        <div style="font-size: 0.88rem; font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">
          Requirement: ${d.requirement}
        </div>
        <div style="font-size: 0.85rem; color: var(--accent-green);">
          <i class="fa-solid fa-circle-check" style="margin-right: 4px;"></i> SOUL-NETRA Design: ${d.implementation}
        </div>
      </div>
    `).join('');
  }

  if (threatsContainer) {
    threatsContainer.innerHTML = threats.map(t => `
      <div style="margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid var(--border-color);">
        <span class="badge-pill" style="background: rgba(255,159,10,0.15); color: var(--accent-amber); margin-bottom: 6px; display: inline-block;">
          Threat: ${t.threat}
        </span>
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">
          <strong>Attack Vector:</strong> ${t.attackVector}
        </div>
        <div style="font-size: 0.85rem; color: var(--accent-cyan);">
          <strong>Active Defense:</strong> ${t.defense}
        </div>
      </div>
    `).join('');
  }
}

// 9. Pitch Deck (12 Slides)
function renderPitchDeck(slides) {
  const container = document.getElementById('slideGrid');
  if (!container) return;

  container.innerHTML = slides.map(s => `
    <div class="slide-card">
      <span class="slide-num-badge">Slide ${s.slide} of 12</span>
      <h4>${s.title}</h4>
      <div class="slide-subtitle">${s.subtitle}</div>
      <ul class="slide-bullets">
        ${s.bulletPoints.map(bp => `<li>${bp}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// 10. References Library
let allReferences = [];
let currentCategory = 'all';

function renderReferences(refs) {
  allReferences = refs;
  applyReferenceFilter();
}

function applyReferenceFilter() {
  const container = document.getElementById('referencesList');
  const countBadge = document.getElementById('refCountBadge');
  const searchVal = (document.getElementById('refSearchInput')?.value || '').toLowerCase().trim();

  let filtered = allReferences.filter(r => {
    const matchesCategory = currentCategory === 'all' || r.category === currentCategory;
    const matchesSearch = !searchVal || 
      r.title.toLowerCase().includes(searchVal) || 
      r.url.toLowerCase().includes(searchVal) || 
      r.category.toLowerCase().includes(searchVal) ||
      `ref-${r.id}`.includes(searchVal) ||
      `#${r.id}`.includes(searchVal);

    return matchesCategory && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `Showing ${filtered.length} of ${allReferences.length} References`;
  }

  if (!container) return;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-md);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 12px; display: block;"></i>
        <p>No matching references found. Try adjusting your search term or category filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(r => `
    <div class="reference-item">
      <div class="ref-info">
        <div class="ref-header-row">
          <span class="ref-id">#${r.id < 10 ? '0' + r.id : r.id}</span>
          <span class="ref-category-tag">${r.category}</span>
          <span class="ref-category-tag" style="background: rgba(0,102,255,0.08); color: var(--accent-cyan);">PDF Page ${r.page}</span>
        </div>
        <div class="ref-title">${r.title}</div>
        <div class="ref-url">${r.url}</div>
      </div>

      <div class="ref-actions">
        <button class="icon-btn copy-ref-btn" data-url="${r.url}" data-title="${r.title}" title="Copy Citation / Link">
          <i class="fa-regular fa-copy"></i>
        </button>
        <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="Open Verified Link">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  `).join('');

  // Attach copy listeners
  document.querySelectorAll('.copy-ref-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.dataset.url;
      const title = btn.dataset.title;
      const textToCopy = `${title} — ${url}`;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Citation copied to clipboard!');
      });
    });
  });
}

function initReferenceFilters() {
  const searchInput = document.getElementById('refSearchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      applyReferenceFilter();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter;
      applyReferenceFilter();
    });
  });
}

/* ==========================================================================
   INTERACTIVE ANOMALY SIMULATOR
   ========================================================================== */
function initSimulator() {
  const rosterInput = document.getElementById('simRoster');
  const cctvInput = document.getElementById('simCctv');
  const mfaInput = document.getElementById('simMfa');
  const healthSelect = document.getElementById('simCctvHealth');

  const rosterVal = document.getElementById('simRosterVal');
  const cctvVal = document.getElementById('simCctvVal');
  const mfaVal = document.getElementById('simMfaVal');

  const scoreDisplay = document.getElementById('simScoreDisplay');
  const riskBadge = document.getElementById('simRiskLevelBadge');
  const actionPrompt = document.getElementById('simActionPrompt');

  function updateSimulation() {
    const roster = parseInt(rosterInput.value, 10);
    const cctv = parseInt(cctvInput.value, 10);
    const mfa = parseInt(mfaInput.value, 10);
    const health = healthSelect.value;

    rosterVal.textContent = roster;
    cctvVal.textContent = cctv;
    mfaVal.textContent = `${mfa}%`;

    // Calculate score: Headcount discrepancy + MFA variance + camera health
    let headDiff = Math.max(0, roster - cctv);
    let headPercent = (headDiff / roster) * 100;

    let score = Math.round((headPercent * 0.5) + (mfa * 0.3));

    if (health === 'tampered') {
      score += 30;
    } else if (health === 'frozen') {
      score += 20;
    }

    score = Math.min(100, Math.max(0, score));

    scoreDisplay.textContent = `${score}/100`;

    if (score >= 70) {
      scoreDisplay.style.color = 'var(--accent-red)';
      riskBadge.style.background = 'rgba(255, 59, 48, 0.2)';
      riskBadge.style.color = 'var(--accent-red)';
      riskBadge.textContent = 'CRITICAL RISK • GHOST FACILITY SUSPECTED';
      actionPrompt.innerHTML = `<strong>Automated System Action:</strong> Severe anomaly flagged! Headcount discrepancy is ${headDiff} persons. Grant disbursement automatically locked. 2-Hour Algorithmic Surprise Inspection dispatched to PMU field squad.`;
    } else if (score >= 40) {
      scoreDisplay.style.color = 'var(--accent-amber)';
      riskBadge.style.background = 'rgba(255, 159, 10, 0.2)';
      riskBadge.style.color = 'var(--accent-amber)';
      riskBadge.textContent = 'MODERATE RISK • ATTENDANCE ANOMALY';
      actionPrompt.innerHTML = `<strong>Automated System Action:</strong> Discrepancy flagged. Automated random 30-second direct video calls triggered to enrolled beneficiaries. Scheduled for priority audit.`;
    } else {
      scoreDisplay.style.color = 'var(--accent-green)';
      riskBadge.style.background = 'rgba(0, 230, 118, 0.2)';
      riskBadge.style.color = 'var(--accent-green)';
      riskBadge.textContent = 'LOW RISK • REGULAR COMPLIANCE';
      actionPrompt.innerHTML = `<strong>Automated System Action:</strong> Facility operating within normal telemetry parameters. Grant disbursement cleared for automated processing.`;
    }
  }

  [rosterInput, cctvInput, mfaInput].forEach(inp => {
    if (inp) inp.addEventListener('input', updateSimulation);
  });

  if (healthSelect) {
    healthSelect.addEventListener('change', updateSimulation);
  }

  updateSimulation();
}

/* ==========================================================================
   PRINT / EXPORT & TOAST SYSTEM
   ========================================================================== */
function initPrintAndExport() {
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-check-circle" style="color: var(--accent-green); margin-right: 8px;"></i> ${message}`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}
