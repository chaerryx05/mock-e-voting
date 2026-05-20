const ACCOUNTS = {
  "21-00001": { password: "iboto123", name: "Maria Clara Santos", studentId: "21-00001", course: "BSIT", yearSection: "2C", email: "maria.santos@cdm.edu.ph", birthday: "March 12, 2003", address: "Montalban, Rizal", phone: "09171234001", memberSince: "June 2021", faceEnrolled: true, votingHistory: ["SSG General Election 2025"] },
  "21-00002": { password: "iboto123", name: "Jose Rizal Dela Cruz", studentId: "21-00002", course: "BSIT", yearSection: "2C", email: "jose.delacruz@cdm.edu.ph", birthday: "July 4, 2002", address: "San Mateo, Rizal", phone: "09171234002", memberSince: "June 2021", faceEnrolled: true, votingHistory: ["SSG General Election 2025"] },
  "21-00003": { password: "iboto123", name: "Ana Luna Reyes", studentId: "21-00003", course: "BSIT", yearSection: "2C", email: "ana.reyes@cdm.edu.ph", birthday: "January 5, 2003", address: "Rodriguez, Rizal", phone: "09171234003", memberSince: "June 2021", faceEnrolled: false, votingHistory: [] },
  "21-00004": { password: "iboto123", name: "Pedro Bonifacio Garcia", studentId: "21-00004", course: "BSCS", yearSection: "2A", email: "pedro.garcia@cdm.edu.ph", birthday: "May 20, 2003", address: "Montalban, Rizal", phone: "09171234004", memberSince: "June 2021", faceEnrolled: true, votingHistory: [] },
  "21-00005": { password: "iboto123", name: "Liza Mabini Torres", studentId: "21-00005", course: "BSCS", yearSection: "2A", email: "liza.torres@cdm.edu.ph", birthday: "August 18, 2002", address: "San Jose, Rizal", phone: "09171234005", memberSince: "June 2021", faceEnrolled: false, votingHistory: ["SSG General Election 2025"] },
  "21-00006": { password: "iboto123", name: "Carlo Aguinaldo Cruz", studentId: "21-00006", course: "BSIT", yearSection: "2B", email: "carlo.cruz@cdm.edu.ph", birthday: "December 1, 2002", address: "Montalban, Rizal", phone: "09171234006", memberSince: "June 2021", faceEnrolled: true, votingHistory: [] },
  "21-00007": { password: "iboto123", name: "Sofia Silang Mendoza", studentId: "21-00007", course: "BSIT", yearSection: "2B", email: "sofia.mendoza@cdm.edu.ph", birthday: "February 14, 2003", address: "Antipolo, Rizal", phone: "09171234007", memberSince: "June 2021", faceEnrolled: true, votingHistory: ["SSG General Election 2025"] },
  "21-00008": { password: "iboto123", name: "Miguel Burgos Villanueva", studentId: "21-00008", course: "BSIT", yearSection: "2A", email: "miguel.villanueva@cdm.edu.ph", birthday: "October 7, 2002", address: "San Mateo, Rizal", phone: "09171234008", memberSince: "June 2021", faceEnrolled: false, votingHistory: [] },
  "21-00009": { password: "iboto123", name: "Gabriela Jacinto Lim", studentId: "21-00009", course: "BSCS", yearSection: "2B", email: "gabriela.lim@cdm.edu.ph", birthday: "June 30, 2003", address: "Montalban, Rizal", phone: "09171234009", memberSince: "June 2021", faceEnrolled: true, votingHistory: [] },
  "21-00010": { password: "iboto123", name: "Ramon Lapu-Lapu Aquino", studentId: "21-00010", course: "BSCS", yearSection: "2B", email: "ramon.aquino@cdm.edu.ph", birthday: "April 27, 2002", address: "Rodriguez, Rizal", phone: "09171234010", memberSince: "June 2021", faceEnrolled: true, votingHistory: ["SSG General Election 2025"] },
};

// Active student session (set on login)
let STUDENT = null;

const ELECTIONS = [
  {
    id: 1, name: "SSG General Election 2026", status: "live",
    candidates: 22, startDate: "May 20, 2026", endDate: "May 21, 2026",
    hasVoted: false,
    positions: [
      {
        title: "President",
        candidates: [
          { id: 1, name: "Juan dela Cruz", partylist: "Alyansa", motto: "Leadership with Integrity", votes: 0 },
          { id: 2, name: "Maria Santos", partylist: "Bagong Simula", motto: "Progress Through Unity", votes: 0 },
        ]
      },
      {
        title: "Vice President",
        candidates: [
          { id: 3, name: "Pedro Reyes", partylist: "Alyansa", motto: "Service Above Self", votes: 0 },
          { id: 4, name: "Ana Lim", partylist: "Bagong Simula", motto: "Students First Always", votes: 0 },
        ]
      },
      {
        title: "Secretary",
        candidates: [
          { id: 5, name: "Carlo Bautista", partylist: "Alyansa", motto: "Organized for Excellence", votes: 0 },
          { id: 6, name: "Luz Mendoza", partylist: "Bagong Simula", motto: "Your Voice, Our Action", votes: 0 },
        ]
      },
      {
        title: "Assistant Secretary",
        candidates: [
          { id: 7, name: "Rico Villanueva", partylist: "Alyansa", motto: "Precision in Every Record", votes: 0 },
          { id: 8, name: "Sofia Cruz", partylist: "Bagong Simula", motto: "Clarity and Coordination Always", votes: 0 },
        ]
      },
      {
        title: "Treasurer",
        candidates: [
          { id: 9, name: "Samantha Sanchez", partylist: "Alyansa", motto: "Accountability Matters", votes: 0 },
          { id: 10, name: "Diana Crisostomo", partylist: "Bagong Simula", motto: "Budget for All", votes: 0 },
        ]
      },
      {
        title: "Auditor",
        candidates: [
          { id: 11, name: "Ace Soriano", partylist: "Alyansa", motto: "Transparency Builds Trust", votes: 0 },
          { id: 12, name: "Mika Solidad", partylist: "Bagong Simula", motto: "Fairness in Every Audit", votes: 0 },
        ]
      },
      {
        title: "Business Manager",
        candidates: [
          { id: 13, name: "Carlos Dela Cruz", partylist: "Alyansa", motto: "Smart Management for Students", votes: 0 },
          { id: 14, name: "Luisa Reyes", partylist: "Bagong Simula", motto: "Efficiency with Purpose", votes: 0 },
        ]
      },
      {
        title: "Public Information Officer(P.I.O)",
        candidates: [
          { id: 15, name: "John Retada", partylist: "Alyansa", motto: "Truth to Every Student", votes: 0 },
          { id: 16, name: "Jane Sison", partylist: "Bagong Simula", motto: "Information for Empowerment", votes: 0 },
        ]
      },
      {
        title: "4th Year Senator",
        candidates: [
          { id: 17, name: "Alexandra Santos", partylist: "Alyansa", motto: "Experience Leads Change", votes: 0 },
          { id: 18, name: "Alyssa Martin", partylist: "Bagong Simula", motto: "Senior Voice, Strong Action", votes: 0 },
        ]
      },
      {
        title: "3rd Year Senator",
        candidates: [
          { id: 19, name: "Michael Torres", partylist: "Alyansa", motto: "Middle Years, Bold Ideas", votes: 0 },
          { id: 20, name: "Angela Aquino", partylist: "Bagong Simula", motto: "Future in Motion", votes: 0 },
        ]
      },
      {
        title: "2nd Year Senator",
        candidates: [
          { id: 21, name: "David Lim", partylist: "Alyansa", motto: "Fresh Voice for Change", votes: 0 },
          { id: 22, name: "Sarah Soriano", partylist: "Bagong Simula", motto: "New Generation Leadership", votes: 0 },
        ]
      },
    ]
  },
  {
    id: 2, name: "BSIT Departmental Election 2026", status: "upcoming",
    candidates: 10, startDate: "June 1, 2026", endDate: "June 2, 2026",
    hasVoted: false, positions: []
  },
  {
    id: 3, name: "Test Election 1", status: "closed",
    candidates: 18, startDate: "May 18, 2026", endDate: "May 19, 2026",
    hasVoted: false, positions: []
  }
];

// ── STATE ──
let currentPage = 'elections';
let isDark = true;
let selectedVotes = {};
let currentElection = null;
let currentPositionIndex = 0;
let ballotSubmitted = false;

// ── THEME ──
const SUN_ICON = `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
const MOON_ICON = `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;

function applyTheme(dark) {
  isDark = dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  // When dark mode is ON, show the sun icon (to switch TO light). When light, show moon.
  const icon = dark ? SUN_ICON : MOON_ICON;
  document.querySelectorAll('#theme-btn, #theme-btn-landing, #theme-btn-login').forEach(b => { if (b) b.innerHTML = icon; });
}

function toggleTheme() {
  applyTheme(!isDark);
}

// ── PAGE VISIBILITY HELPERS ──
function showPage(id, displayType) {
  const el = document.getElementById(id);
  if (el) el.style.display = displayType || 'block';
}
function hidePage(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

// ── NAVIGATION (landing → login) ──
function showLogin() {
  hidePage('landing-page');
  showPage('login-page', 'flex');
}

// ── NAVIGATION (app pages) ──
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) { pageEl.classList.add('active'); }
  const navEl = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (navEl) navEl.classList.add('active');
  currentPage = page;
  window.scrollTo(0, 0);
  if (page === 'elections') renderElections();
  if (page === 'results') renderResults();
  if (page === 'profile') renderProfile();
  if (page === 'notifications') renderNotifications();
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── LOGIN ──
function handleLogin() {
  const id = document.getElementById('login-id').value.trim();
  const pass = document.getElementById('login-pass').value.trim();
  if (!id || !pass) { showToast('Please fill in all fields'); return; }
  const account = ACCOUNTS[id];
  if (!account || account.password !== pass) {
    showToast('❌ Invalid Student ID or password');
    document.getElementById('login-pass').value = '';
    return;
  }
  STUDENT = { ...account, hasVoted: false, trustedDevice: 'This device', browser: 'Chrome' };
  hidePage('login-page');
  showPage('main-app', 'block');
  navigate('elections');
  showToast(`Welcome, ${STUDENT.name.split(' ')[0]}! 👋`);
}

function showAccountsList() {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:999;display:flex;align-items:flex-end;justify-content:center;padding:0';
  overlay.innerHTML = `
                <div style="background:var(--card);border-radius:24px 24px 0 0;width:100%;max-width:480px;padding:0 24px 40px;max-height:80vh;overflow-y:auto">
                    <div style="width:40px;height:4px;border-radius:2px;background:var(--border);margin:16px auto 20px"></div>
                    <h2 style="font-family:'Playfair Display',serif;font-size:20px;font-weight:800;margin-bottom:6px">Survey Accounts</h2>
                    <p style="font-size:13px;color:var(--subtext);margin-bottom:20px">Tap an account to auto-fill login. All passwords: <strong>iboto123</strong></p>
                    ${Object.values(ACCOUNTS).map(a => `
                        <div onclick="fillLogin('${a.studentId}','${a.password}');document.body.removeChild(document.body.lastChild)" style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;cursor:pointer;margin-bottom:6px;border:1px solid var(--border);transition:all 0.2s" onmouseover="this.style.borderColor='var(--green-mid)'" onmouseout="this.style.borderColor='var(--border)'">
                            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--green-dark),var(--green-mid));display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:15px;flex-shrink:0">${a.name.charAt(0)}</div>
                            <div style="flex:1;min-width:0">
                                <div style="font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.name}</div>
                                <div style="font-size:12px;color:var(--subtext)">${a.studentId} · ${a.course}</div>
                            </div>
                        </div>`).join('')}
                </div>`;
  overlay.onclick = e => { if (e.target === overlay) document.body.removeChild(overlay); };
  document.body.appendChild(overlay);
}

function fillLogin(id, pass) {
  document.getElementById('login-id').value = id;
  document.getElementById('login-pass').value = pass;
}

// ── ELECTIONS PAGE ──
function renderElections() {
  const live = ELECTIONS.filter(e => e.status === 'live');
  const upcoming = ELECTIONS.filter(e => e.status === 'upcoming');
  const closed = ELECTIONS.filter(e => e.status === 'closed');
  const container = document.getElementById('elections-list');
  let html = '';

  // Greeting
  html += `<div class="fade-up-1" style="padding:24px 0 8px">
    <p style="font-size:14px;color:var(--subtext);margin-bottom:4px">Welcome back,</p>
    <h1 class="section-title">${STUDENT ? STUDENT.name.split(' ')[0] : 'Student'}! 👋</h1>
    <p style="font-size:14px;color:var(--subtext);margin-top:4px">Cast your vote and make your voice count.</p>
  </div>`;

  // Active Elections section
  html += `<div class="fade-up-2" style="margin:20px 0 10px;display:flex;align-items:center;gap:8px">
    <div style="width:24px;height:3px;background:var(--green-mid);border-radius:2px"></div>
    <h2 style="font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:var(--subtext)">Active Elections</h2>
  </div>`;

  if (live.length === 0) {
    html += `<div class="empty-state fade-up-2">
      <div class="empty-icon">📋</div>
      <div class="empty-title">Nothing here yet</div>
      <div class="empty-desc">There are no open elections right now.<br>Check back soon.</div>
    </div>`;
  } else {
    live.forEach((e, i) => {
      html += `
        <div class="card election-card-live fade-up-${i + 2}" style="margin-bottom:12px;cursor:pointer" onclick="openBallot(${e.id})">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
            <span class="badge badge-live"><span class="dot-live"></span> Live</span>
            <svg width="18" height="18" fill="none" stroke="var(--subtext)" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </div>
          <h3 style="font-size:17px;font-weight:700;margin-bottom:8px;line-height:1.3">${e.name}</h3>
          <div style="display:flex;gap:16px;font-size:13px;color:var(--subtext)">
            <span>👥 ${e.candidates} candidates</span>
            <span>📅 ${e.startDate}</span>
          </div>
          ${e.hasVoted
          ? `<div style="margin-top:12px;padding:8px 12px;background:var(--green-pale);border-radius:8px;font-size:13px;color:var(--green-mid);font-weight:600">✅ You have voted</div>`
          : `<div style="margin-top:12px"><button class="btn-primary" onclick="event.stopPropagation();openBallot(${e.id})" style="padding:10px 20px;font-size:14px">Cast Your Vote →</button></div>`
        }
        </div>`;
    });
  }

  // Past Elections
  if (closed.length > 0) {
    html += `<div class="fade-up-3" style="margin:24px 0 10px;display:flex;align-items:center;gap:8px">
      <div style="width:24px;height:3px;background:var(--border);border-radius:2px"></div>
      <h2 style="font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:var(--subtext)">Past Elections</h2>
    </div>`;
    closed.forEach(e => {
      html += `
        <div class="card fade-up-3" style="margin-bottom:12px;cursor:pointer" onclick="showToast('Results coming soon')">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                <span class="badge badge-closed">✕ Closed</span>
                <span style="font-size:13px;color:var(--subtext)">${e.startDate}</span>
              </div>
              <h3 style="font-size:15px;font-weight:700">${e.name}</h3>
            </div>
            <svg width="18" height="18" fill="none" stroke="var(--subtext)" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </div>
        </div>`;
    });
  }

  // Upcoming
  if (upcoming.length > 0) {
    html += `<div class="fade-up-4" style="margin:24px 0 10px"><h2 style="font-size:15px;font-weight:700;color:var(--subtext)">Upcoming</h2></div>`;
    upcoming.forEach(e => {
      html += `
        <div class="card fade-up-4" style="margin-bottom:12px;opacity:0.85">
          <span class="badge badge-upcoming" style="margin-bottom:10px">⏰ Upcoming</span>
          <h3 style="font-size:16px;font-weight:700;margin-bottom:4px">${e.name}</h3>
          <p style="font-size:13px;color:var(--subtext)">Starts ${e.startDate}</p>
        </div>`;
    });
  }

  container.innerHTML = html;
}

// ── BALLOT ──
let pendingElectionId = null;

function openBallot(electionId) {
  currentElection = ELECTIONS.find(e => e.id === electionId);
  if (currentElection.hasVoted) { showToast('You have already voted in this election'); return; }
  if (!currentElection.positions.length) { showToast('No positions configured yet'); return; }
  // Show confirmation modal first
  pendingElectionId = electionId;
  document.getElementById('confirm-election-name').textContent = currentElection.name;
  document.getElementById('confirm-modal').classList.add('open');
}

function closeConfirmModal() {
  document.getElementById('confirm-modal').classList.remove('open');
  pendingElectionId = null;
}

function proceedToBallot() {
  document.getElementById('confirm-modal').classList.remove('open');
  currentElection = ELECTIONS.find(e => e.id === pendingElectionId);
  selectedVotes = {};
  currentPositionIndex = 0;
  ballotSubmitted = false;
  document.getElementById('ballot-page').classList.add('active');
  document.getElementById('page-elections').classList.remove('active');
  document.getElementById('ballot-next-btn').style.display = 'flex';
  renderBallotPosition();
}

function renderBallotPosition() {
  const pos = currentElection.positions[currentPositionIndex];
  const total = currentElection.positions.length;
  const progress = (currentPositionIndex / total) * 100;

  document.getElementById('ballot-title').textContent = currentElection.name;
  document.getElementById('ballot-progress-fill').style.width = progress + '%';
  document.getElementById('ballot-step').textContent = `Position ${currentPositionIndex + 1} of ${total}`;

  // Update prev button
  const prevBtn = document.getElementById('ballot-prev-btn');
  prevBtn.style.display = 'flex';
  prevBtn.disabled = false;
  prevBtn.innerHTML = currentPositionIndex === 0
    ? `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg> Exit`
    : `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg> Previous`;

  let html = `<div class="fade-up">
    <h2 style="font-family:'Playfair Display',serif;font-size:22px;font-weight:800;margin-bottom:6px">${pos.title}</h2>
    <p style="font-size:14px;color:var(--subtext);margin-bottom:20px">Select one candidate for ${pos.title}</p>
    <div style="display:flex;flex-direction:column;gap:12px">`;

  pos.candidates.forEach(c => {
    const selected = selectedVotes[pos.title] === c.id;
    html += `
      <div onclick="selectCandidate('${pos.title}', ${c.id})" class="candidate-card${selected ? ' selected' : ''}">
        <div class="avatar">${c.name.charAt(0)}</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:15px">${c.name}</div>
          <div style="font-size:13px;color:var(--subtext)">🏛 ${c.partylist}</div>
          <div style="font-size:12px;color:var(--subtext);font-style:italic;margin-top:2px">"${c.motto}"</div>
        </div>
        <div class="candidate-radio">
          ${selected ? '<svg width="12" height="12" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
        </div>
      </div>`;
  });

  html += `</div></div>`;
  document.getElementById('ballot-candidates').innerHTML = html;

  const nextBtn = document.getElementById('ballot-next-btn');
  const isLast = currentPositionIndex === total - 1;
  nextBtn.textContent = isLast ? 'Review & Submit →' : 'Next Position →';
  nextBtn.onclick = isLast ? reviewBallot : nextPosition;
  nextBtn.style.display = 'flex';
}

function selectCandidate(position, candidateId) {
  selectedVotes[position] = candidateId;
  renderBallotPosition();
}

function nextPosition() {
  const pos = currentElection.positions[currentPositionIndex];
  if (!selectedVotes[pos.title]) { showToast('Please select a candidate first'); return; }
  currentPositionIndex++;
  renderBallotPosition();
}

function prevBallotPosition() {
  if (ballotSubmitted) { closeBallot(); return; }
  if (currentPositionIndex > 0) {
    currentPositionIndex--;
    renderBallotPosition();
    document.getElementById('ballot-next-btn').style.display = 'flex';
  } else {
    // Back to elections from first position
    closeBallot();
  }
}

function reviewBallot() {
  const pos = currentElection.positions[currentPositionIndex];
  if (!selectedVotes[pos.title]) { showToast('Please select a candidate first'); return; }

  let html = `
    <div class="fade-up">
      <h2 style="font-family:'Playfair Display',serif;font-size:22px;font-weight:800;margin-bottom:6px">Review Your Ballot</h2>
      <p style="font-size:14px;color:var(--subtext);margin-bottom:20px">Please review your selections before submitting.</p>`;

  currentElection.positions.forEach(p => {
    const candidateId = selectedVotes[p.title];
    const candidate = p.candidates.find(c => c.id === candidateId);
    if (candidate) {
      html += `
        <div style="padding:14px 16px;border-radius:var(--radius-sm);border:1px solid var(--border);
          background:var(--card);margin-bottom:10px;display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-size:12px;font-weight:700;color:var(--green-mid);text-transform:uppercase;letter-spacing:0.5px">${p.title}</div>
            <div style="font-size:15px;font-weight:600;margin-top:2px">${candidate.name}</div>
            <div style="font-size:12px;color:var(--subtext)">${candidate.partylist}</div>
          </div>
          <svg width="18" height="18" fill="none" stroke="var(--green-mid)" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        </div>`;
    }
  });

  html += `
    <div style="margin-top:20px;padding:14px;background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.3);border-radius:var(--radius-sm);font-size:13px;color:#D97706;margin-bottom:20px">
      ⚠️ Once submitted, your vote cannot be changed. This is final.
    </div>
    </div>`;

  document.getElementById('ballot-candidates').innerHTML = html;

  // In review: prev goes back to last position, next submits
  const nextBtn = document.getElementById('ballot-next-btn');
  nextBtn.textContent = 'Submit Ballot 🔒';
  nextBtn.onclick = submitBallot;
  nextBtn.style.display = 'flex';

  const prevBtn = document.getElementById('ballot-prev-btn');
  prevBtn.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg> Edit Votes`;
  prevBtn.onclick = () => {
    currentPositionIndex = currentElection.positions.length - 1;
    prevBtn.onclick = null;
    renderBallotPosition();
  };

  document.getElementById('ballot-step').textContent = 'Review';
  document.getElementById('ballot-progress-fill').style.width = '100%';
}

function submitBallot() {
  document.getElementById('ballot-candidates').innerHTML = `
    <div style="text-align:center;padding:60px 0" class="fade-up">
      <div style="font-size:72px;margin-bottom:16px">🗳️</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:28px;font-weight:800;color:var(--green-mid);margin-bottom:12px">Vote Cast!</h2>
      <p style="font-size:15px;color:var(--subtext);line-height:1.6;margin-bottom:8px;max-width:280px;margin:0 auto 8px">Your vote has been recorded on the blockchain and cannot be altered.</p>
      <p style="font-size:13px;color:var(--subtext);font-family:monospace;margin-bottom:32px">TX: 0x7f3a…9b2c</p>
      <button class="btn-primary" onclick="closeBallot()" style="max-width:240px;margin:0 auto">Back to Elections</button>
    </div>`;
  document.getElementById('ballot-next-btn').style.display = 'none';
  document.getElementById('ballot-prev-btn').style.display = 'none';
  ELECTIONS.find(e => e.id === currentElection.id).hasVoted = true;
  if (STUDENT && !STUDENT.votingHistory.includes(currentElection.name)) {
    STUDENT.votingHistory.push(currentElection.name);
  }
  ballotSubmitted = true;
}

function closeBallot() {
  document.getElementById('ballot-page').classList.remove('active');
  document.getElementById('page-elections').classList.add('active');
  renderElections();
}

// ── RESULTS PAGE ──
function renderResults() {
  const container = document.getElementById('results-list');

  const PAST_RESULTS = [
    {
      name: "SSG General Election 2025",
      date: "May 18–19, 2025",
      totalVoters: 580,
      voted: 491,
      winners: [
        { position: "President", name: "Juan dela Cruz", partylist: "Alyansa", votes: 261, totalVotes: 491 },
        { position: "Vice President", name: "Ana Lim", partylist: "Bagong Simula", votes: 248, totalVotes: 491 },
        { position: "Secretary", name: "Carlo Bautista", partylist: "Alyansa", votes: 270, totalVotes: 491 },
        { position: "Assistant Secretary", name: "Sofia Cruz", partylist: "Bagong Simula", votes: 255, totalVotes: 491 },
        { position: "Treasurer", name: "Samantha Sanchez", partylist: "Alyansa", votes: 258, totalVotes: 491 },
        { position: "Auditor", name: "Mika Solidad", partylist: "Bagong Simula", votes: 246, totalVotes: 491 },
        { position: "Business Manager", name: "Carlos Dela Cruz", partylist: "Alyansa", votes: 263, totalVotes: 491 },
        { position: "P.I.O.", name: "John Retada", partylist: "Alyansa", votes: 271, totalVotes: 491 },
        { position: "4th Year Senator", name: "Alexandra Santos", partylist: "Alyansa", votes: 267, totalVotes: 491 },
        { position: "3rd Year Senator", name: "Angela Aquino", partylist: "Bagong Simula", votes: 253, totalVotes: 491 },
        { position: "2nd Year Senator", name: "David Lim", partylist: "Alyansa", votes: 259, totalVotes: 491 },
      ]
    },
    {
      name: "BSIT Departmental Election 2025",
      date: "April 10–11, 2025",
      totalVoters: 210,
      voted: 188,
      winners: [
        { position: "President", name: "Maria Santos", partylist: "Bagong Simula", votes: 102, totalVotes: 188 },
        { position: "Vice President", name: "Pedro Reyes", partylist: "Alyansa", votes: 97, totalVotes: 188 },
        { position: "Secretary", name: "Luz Mendoza", partylist: "Bagong Simula", votes: 110, totalVotes: 188 },
        { position: "Treasurer", name: "Rico Villanueva", partylist: "Alyansa", votes: 95, totalVotes: 188 },
      ]
    }
  ];

  // Track expanded state per election
  if (!window.expandedResults) window.expandedResults = {};

  let html = `<div class="fade-up-1" style="padding:24px 0 8px">
                <h1 class="section-title">Results</h1>
                <p class="section-sub">Official winners per position</p>
            </div>`;

  PAST_RESULTS.forEach((election, ei) => {
    const turnout = Math.round(election.voted / election.totalVoters * 100);
    const isExpanded = window.expandedResults[ei] !== false; // default expanded
    html += `
                <div class="card fade-up-${ei + 2}" style="margin-bottom:16px">
                    <div style="margin-bottom:14px">
                        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
                            <div>
                                <span class="badge badge-closed" style="margin-bottom:8px">Closed</span>
                                <h3 style="font-size:15px;font-weight:700">${election.name}</h3>
                                <p style="font-size:12px;color:var(--subtext);margin-top:2px">📅 ${election.date}</p>
                            </div>
                            <button onclick="toggleResults(${ei})" style="background:var(--green-pale);border:1px solid var(--border);border-radius:8px;padding:6px 12px;font-size:12px;font-weight:600;color:var(--green-mid);cursor:pointer;white-space:nowrap">
                                ${isExpanded ? 'Hide ▲' : 'Show ▼'}
                            </button>
                        </div>
                        <div style="display:flex;gap:16px;font-size:13px;color:var(--subtext);margin-bottom:12px">
                            <span>👥 ${election.voted} voted</span>
                            <span>📊 ${turnout}% turnout</span>
                        </div>
                        <div class="progress-bar" style="margin-bottom:4px">
                            <div class="progress-fill" style="width:${turnout}%"></div>
                        </div>
                    </div>
                    ${isExpanded ? `
                    <div id="results-detail-${ei}">
                        <div style="font-size:11px;font-weight:700;color:var(--subtext);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:12px;display:flex;align-items:center;gap:8px">
                            <div style="flex:1;height:1px;background:var(--border)"></div>
                            Winners by Position
                            <div style="flex:1;height:1px;background:var(--border)"></div>
                        </div>
                        ${election.winners.map(w => {
      const pct = Math.round(w.votes / w.totalVotes * 100);
      return `
                            <div style="padding:12px;border-radius:10px;border:1px solid var(--border);background:var(--bg);margin-bottom:8px">
                                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
                                    <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--green-dark),var(--green-mid));display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:14px;flex-shrink:0">${w.name.charAt(0)}</div>
                                    <div style="flex:1">
                                        <div style="font-size:11px;font-weight:700;color:var(--green-mid);text-transform:uppercase;letter-spacing:0.5px">${w.position}</div>
                                        <div style="font-size:14px;font-weight:700">${w.name}</div>
                                        <div style="font-size:12px;color:var(--subtext)">🏛 ${w.partylist}</div>
                                    </div>
                                    <div style="text-align:right">
                                        <div style="font-size:16px;font-weight:800;color:var(--green-mid)">${pct}%</div>
                                        <div style="font-size:11px;color:var(--subtext)">${w.votes} votes</div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width:${pct}%"></div>
                                </div>
                            </div>`;
    }).join('')}
                    </div>` : `<div id="results-detail-${ei}"></div>`}
                </div>`;
  });

  container.innerHTML = html;
}

function toggleResults(ei) {
  if (!window.expandedResults) window.expandedResults = {};
  window.expandedResults[ei] = !(window.expandedResults[ei] !== false);
  renderResults();
}

// ── PROFILE PAGE ──
function renderProfile() {
  if (!STUDENT) return;
  const initials = STUDENT.name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const votedCount = STUDENT.votingHistory ? STUDENT.votingHistory.length : 0;
  const container = document.getElementById('profile-content');

  container.innerHTML = `
            <!-- Header -->
            <div class="fade-up-1" style="padding:24px 0 20px">
                <div style="display:flex;align-items:center;gap:14px">
                    <div class="avatar avatar-lg">${initials}</div>
                    <div>
                        <h1 style="font-size:18px;font-weight:800;line-height:1.2">${STUDENT.name}</h1>
                        <p style="font-size:13px;color:var(--subtext);margin-top:3px">${STUDENT.studentId} · ${STUDENT.course}</p>
                        <span class="badge badge-live" style="margin-top:6px;display:inline-flex">✅ Registered Voter</span>
                    </div>
                </div>
            </div>

            <!-- Student Information -->
            <div class="card fade-up-2" style="margin-bottom:14px">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
                    <p class="profile-section-label" style="margin-bottom:0">Student Information</p>
                    <button class="btn-ghost" style="padding:6px 12px;font-size:12px" onclick="openEditProfile()">
                        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        Edit
                    </button>
                </div>
                ${pRow('Full Name', STUDENT.name)}
                <div class="divider" style="margin:8px 0"></div>
                ${pRow('Student ID', STUDENT.studentId)}
                <div class="divider" style="margin:8px 0"></div>
                ${pRow('Course', STUDENT.course)}
                <div class="divider" style="margin:8px 0"></div>
                ${pRow('Year & Section', STUDENT.yearSection)}
                <div class="divider" style="margin:8px 0"></div>
                ${pRow('Email', STUDENT.email)}
                <div class="divider" style="margin:8px 0"></div>
                ${pRow('Birthday', STUDENT.birthday)}
                <div class="divider" style="margin:8px 0"></div>
                ${pRow('Phone', STUDENT.phone)}
                <div class="divider" style="margin:8px 0"></div>
                ${pRow('Address', STUDENT.address)}
                <div class="divider" style="margin:8px 0"></div>
                ${pRow('Member since', STUDENT.memberSince)}
            </div>

            <!-- Voting Activity -->
            <div class="card fade-up-3" style="margin-bottom:14px">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
                    <p class="profile-section-label" style="margin-bottom:0">Voting Activity</p>
                    <span style="font-size:20px;font-weight:800;color:var(--green-mid)">${votedCount}</span>
                </div>
                <p style="font-size:11px;color:var(--subtext);font-weight:700;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:10px">Elections participated</p>
                ${votedCount === 0
      ? `<div class="vote-empty"><div class="vote-empty-icon">🗳️</div><p class="vote-empty-text">No votes cast yet.</p></div>`
      : STUDENT.votingHistory.map(v => `
                        <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)">
                            <span style="font-size:18px">🗳️</span>
                            <div style="flex:1">
                                <div style="font-size:13px;font-weight:600">${v}</div>
                                <div style="font-size:12px;color:var(--subtext)">Participated</div>
                            </div>
                            <svg width="16" height="16" fill="none" stroke="var(--green-mid)" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>`).join('')
    }
            </div>

            <!-- Account & Security -->
            <div class="card fade-up-4" style="margin-bottom:14px">
                <p class="profile-section-label">Account &amp; Security</p>

                <!-- Face Verification -->
                <div class="security-row" style="cursor:pointer" onclick="openFaceVerification()">
                    <div class="security-row-left">
                        <div class="security-icon">${STUDENT.faceEnrolled ? '🟢' : '🔴'}</div>
                        <div>
                            <div class="security-label">Face Verification</div>
                            <div class="security-sub">${STUDENT.faceEnrolled ? 'Enrolled — tap to re-enroll' : 'Not enrolled — tap to set up'}</div>
                        </div>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px">
                        <span class="badge ${STUDENT.faceEnrolled ? 'badge-live' : 'badge-enrolled'}">${STUDENT.faceEnrolled ? 'Enrolled' : 'Not enrolled'}</span>
                        <button class="expand-btn"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></button>
                    </div>
                </div>
                <div class="divider" style="margin:8px 0"></div>

                <!-- Change Password -->
                <div class="security-row" style="cursor:pointer" onclick="openChangePassword()">
                    <div class="security-row-left">
                        <div class="security-icon">🔒</div>
                        <div>
                            <div class="security-label">Change Password</div>
                            <div class="security-sub">Update your login password</div>
                        </div>
                    </div>
                    <button class="expand-btn"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></button>
                </div>
            </div>

            <!-- Device -->
            <div class="card fade-up-5" style="margin-bottom:20px">
                <p class="profile-section-label">Device</p>
                <div class="security-row">
                    <div><div class="security-label" style="font-size:13px">Trusted device</div></div>
                    <span class="badge badge-device">${STUDENT.trustedDevice || 'Not trusted'}</span>
                </div>
                <div class="divider" style="margin:8px 0"></div>
                <div class="security-row">
                    <div><div class="security-label" style="font-size:13px">Browser</div></div>
                    <span class="badge badge-chrome">${STUDENT.browser || 'Chrome'}</span>
                </div>
            </div>

            <!-- Sign out -->
            <button class="btn-logout fade-up-5" onclick="handleLogout()" style="margin-bottom:16px">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>
                Sign out
            </button>`;
}

function pRow(label, value) {
  const isMuted = !value || value === 'Not set' || value === '—';
  return `<div class="profile-row">
                <div style="flex:1">
                    <div class="profile-row-label">${label}</div>
                    <div class="profile-row-value ${isMuted ? 'muted' : ''}">${value || 'Not set'}</div>
                </div>
            </div>`;
}

// ── EDIT PROFILE MODAL ──
function openEditProfile() {
  openModal(`
                <h2 style="font-family:'Playfair Display',serif;font-size:20px;font-weight:800;margin-bottom:4px">Edit Profile</h2>
                <p style="font-size:13px;color:var(--subtext);margin-bottom:20px">Update your personal information</p>
                <div style="display:flex;flex-direction:column;gap:12px">
                    <div><label style="font-size:12px;font-weight:700;color:var(--subtext);display:block;margin-bottom:4px">Full Name</label>
                    <input class="input-field" id="edit-name" value="${STUDENT.name}"></div>
                    <div><label style="font-size:12px;font-weight:700;color:var(--subtext);display:block;margin-bottom:4px">Email</label>
                    <input class="input-field" id="edit-email" value="${STUDENT.email !== 'Not set' ? STUDENT.email : ''}" placeholder="your@email.com"></div>
                    <div><label style="font-size:12px;font-weight:700;color:var(--subtext);display:block;margin-bottom:4px">Phone</label>
                    <input class="input-field" id="edit-phone" value="${STUDENT.phone !== 'Not set' ? STUDENT.phone : ''}" placeholder="09XXXXXXXXX"></div>
                    <div><label style="font-size:12px;font-weight:700;color:var(--subtext);display:block;margin-bottom:4px">Address</label>
                    <input class="input-field" id="edit-address" value="${STUDENT.address !== 'Not set' ? STUDENT.address : ''}" placeholder="Barangay, City"></div>
                    <div><label style="font-size:12px;font-weight:700;color:var(--subtext);display:block;margin-bottom:4px">Year &amp; Section</label>
                    <input class="input-field" id="edit-section" value="${STUDENT.yearSection !== 'Not set' ? STUDENT.yearSection : ''}" placeholder="e.g. 2C"></div>
                </div>
                <div style="display:flex;gap:10px;margin-top:20px">
                    <button class="btn-prev" onclick="closeModal()" style="flex:1">Cancel</button>
                    <button class="btn-primary" onclick="saveProfile()" style="flex:2">Save Changes</button>
                </div>
            `);
}

function saveProfile() {
  const name = document.getElementById('edit-name').value.trim();
  const email = document.getElementById('edit-email').value.trim();
  const phone = document.getElementById('edit-phone').value.trim();
  const address = document.getElementById('edit-address').value.trim();
  const section = document.getElementById('edit-section').value.trim();
  if (!name) { showToast('Name is required'); return; }
  STUDENT.name = name;
  STUDENT.email = email || 'Not set';
  STUDENT.phone = phone || 'Not set';
  STUDENT.address = address || 'Not set';
  STUDENT.yearSection = section || 'Not set';
  closeModal();
  renderProfile();
  showToast('✅ Profile updated!');
}

// ── FACE VERIFICATION MODAL ──
function openFaceVerification() {
  openModal(`
                <h2 style="font-family:'Playfair Display',serif;font-size:20px;font-weight:800;margin-bottom:4px">Face Verification</h2>
                <p style="font-size:13px;color:var(--subtext);margin-bottom:20px">${STUDENT.faceEnrolled ? 'Your face is enrolled. You can re-enroll below.' : 'Enroll your face for biometric verification during voting.'}</p>
                <div id="face-content">
                    <div style="width:100%;aspect-ratio:1;border-radius:16px;background:var(--bg);border:2px dashed var(--border);display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:20px;position:relative;overflow:hidden" id="face-preview">
                        <span style="font-size:48px;margin-bottom:8px">📷</span>
                        <p style="font-size:13px;color:var(--subtext);text-align:center">Camera will activate here<br>in the real app</p>
                        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:160px;height:160px;border:3px solid var(--green-mid);border-radius:50%;opacity:0.4;pointer-events:none"></div>
                    </div>
                    <p style="font-size:12px;color:var(--subtext);text-align:center;margin-bottom:20px">Position your face within the circle. Make sure you're in a well-lit area.</p>
                    <button class="btn-primary" onclick="simulateFaceEnroll()">
                        ${STUDENT.faceEnrolled ? '🔄 Re-enroll Face' : '📸 Capture & Enroll Face'}
                    </button>
                </div>
            `);
}

function simulateFaceEnroll() {
  document.getElementById('face-content').innerHTML = `
                <div style="text-align:center;padding:20px 0">
                    <div style="font-size:48px;margin-bottom:12px">⏳</div>
                    <p style="font-size:14px;font-weight:600;margin-bottom:6px">Processing face...</p>
                    <p style="font-size:13px;color:var(--subtext)">Analyzing biometric data</p>
                </div>`;
  setTimeout(() => {
    document.getElementById('face-content').innerHTML = `
                    <div style="text-align:center;padding:20px 0">
                        <div style="font-size:56px;margin-bottom:12px">✅</div>
                        <h3 style="font-family:'Playfair Display',serif;font-size:20px;font-weight:800;color:var(--green-mid);margin-bottom:8px">Face Enrolled!</h3>
                        <p style="font-size:14px;color:var(--subtext);margin-bottom:20px">Your biometric data has been saved securely.</p>
                        <button class="btn-primary" onclick="closeModal();renderProfile()">Done</button>
                    </div>`;
    STUDENT.faceEnrolled = true;
  }, 2000);
}

// ── CHANGE PASSWORD MODAL ──
function openChangePassword() {
  openModal(`
                <h2 style="font-family:'Playfair Display',serif;font-size:20px;font-weight:800;margin-bottom:4px">Change Password</h2>
                <p style="font-size:13px;color:var(--subtext);margin-bottom:20px">Choose a strong password for your account.</p>
                <div style="display:flex;flex-direction:column;gap:12px">
                    <div>
                        <label style="font-size:12px;font-weight:700;color:var(--subtext);display:block;margin-bottom:4px">Current Password</label>
                        <input class="input-field" type="password" id="pw-current" placeholder="Enter current password">
                    </div>
                    <div>
                        <label style="font-size:12px;font-weight:700;color:var(--subtext);display:block;margin-bottom:4px">New Password</label>
                        <input class="input-field" type="password" id="pw-new" placeholder="At least 8 characters">
                    </div>
                    <div>
                        <label style="font-size:12px;font-weight:700;color:var(--subtext);display:block;margin-bottom:4px">Confirm New Password</label>
                        <input class="input-field" type="password" id="pw-confirm" placeholder="Repeat new password">
                    </div>
                    <div id="pw-error" style="display:none;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);color:#DC2626;padding:10px 14px;border-radius:8px;font-size:13px"></div>
                </div>
                <div style="display:flex;gap:10px;margin-top:20px">
                    <button class="btn-prev" onclick="closeModal()" style="flex:1">Cancel</button>
                    <button class="btn-primary" onclick="savePassword()" style="flex:2">Update Password</button>
                </div>
            `);
}

function savePassword() {
  const current = document.getElementById('pw-current').value;
  const nw = document.getElementById('pw-new').value;
  const confirm = document.getElementById('pw-confirm').value;
  const errEl = document.getElementById('pw-error');
  const account = ACCOUNTS[STUDENT.studentId];
  const showErr = (msg) => { errEl.style.display = 'block'; errEl.textContent = msg; };

  if (!current || !nw || !confirm) return showErr('Please fill in all fields.');
  if (account && current !== account.password) return showErr('Current password is incorrect.');
  if (nw.length < 6) return showErr('New password must be at least 6 characters.');
  if (nw !== confirm) return showErr('Passwords do not match.');

  if (account) account.password = nw;
  closeModal();
  showToast('🔒 Password updated successfully!');
}

// ── GENERIC MODAL HELPER ──
function openModal(html) {
  let overlay = document.getElementById('generic-modal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'generic-modal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:400;display:flex;align-items:flex-end;justify-content:center;padding:0;opacity:0;transition:opacity 0.3s';
    overlay.innerHTML = `<div id="generic-modal-sheet" style="background:var(--card);border-radius:24px 24px 0 0;width:100%;max-width:480px;padding:0 24px 40px;max-height:88vh;overflow-y:auto;transform:translateY(100%);transition:transform 0.4s cubic-bezier(0.4,0,0.2,1)">
                    <div style="width:40px;height:4px;border-radius:2px;background:var(--border);margin:16px auto 20px"></div>
                    <div id="generic-modal-body"></div>
                </div>`;
    overlay.onclick = e => { if (e.target === overlay) closeModal(); };
    document.body.appendChild(overlay);
  }
  document.getElementById('generic-modal-body').innerHTML = html;
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
    document.getElementById('generic-modal-sheet').style.transform = 'translateY(0)';
  });
}

function closeModal() {
  const overlay = document.getElementById('generic-modal');
  if (!overlay) return;
  overlay.style.opacity = '0';
  document.getElementById('generic-modal-sheet').style.transform = 'translateY(100%)';
  setTimeout(() => { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 400);
}

// ── INPUT FIELD CSS (inject once) ──
if (!document.getElementById('input-style')) {
  const s = document.createElement('style');
  s.id = 'input-style';
  s.textContent = `.input-field{width:100%;padding:12px 14px;border-radius:10px;border:1.5px solid var(--border);background:var(--bg);color:var(--text);font-size:14px;font-family:'DM Sans',sans-serif;outline:none;transition:all 0.2s}.input-field:focus{border-color:var(--green-mid);box-shadow:0 0 0 3px rgba(45,140,78,0.12)}`;
  document.head.appendChild(s);
}

// ── NOTIFICATIONS ──
function renderNotifications() {
  const notifs = [
    { icon: '🗳️', title: 'Election is now open!', desc: 'SSG General Election 2026 is now accepting votes.', time: '2 mins ago', unread: true },
    { icon: '✅', title: 'Voter registration confirmed', desc: 'Your voter registration has been approved.', time: '1 day ago', unread: false },
    { icon: '📲', title: 'OTP sent', desc: 'A one-time password was sent to your phone.', time: '1 day ago', unread: false },
    { icon: '📊', title: 'Results available', desc: 'SSG General Election 2025 results are now published.', time: '1 year ago', unread: false },
  ];
  const container = document.getElementById('notifications-list');
  let html = `<div class="fade-up-1" style="padding:24px 0 8px"><h1 class="section-title">Notifications</h1></div>`;
  notifs.forEach((n, i) => {
    html += `
      <div class="notif-item ${n.unread ? 'unread' : ''} fade-up-${i + 2}" onclick="showToast('Notification opened')">
        <span class="notif-icon">${n.icon}</span>
        <div style="flex:1">
          <div class="notif-title">${n.title}</div>
          <div class="notif-desc">${n.desc}</div>
          <div class="notif-time">${n.time}</div>
        </div>
        ${n.unread ? '<div class="notif-dot"></div>' : ''}
      </div>
      <div class="divider" style="margin:0"></div>`;
  });
  container.innerHTML = html;
}

// ── LOGOUT ──
function handleLogout() {
  hidePage('main-app');
  hidePage('login-page');
  showPage('landing-page', 'flex');
  document.getElementById('login-id').value = '';
  document.getElementById('login-pass').value = '';
  showToast('Logged out successfully');
}

// ── INIT ──
window.onload = () => {
  hidePage('main-app');
  hidePage('login-page');
  showPage('landing-page', 'flex');

  // Apply theme first so icons & colours are correct from the start
  applyTheme(isDark);

  document.getElementById('login-pass').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleLogin();
  });
};