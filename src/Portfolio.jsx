import React, { useState, useEffect } from 'react';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

import Contact from './components/Contact';
import Cursor from './Cursor';
import './styles/Portfolio.css';

/* ── Nav items with diagonal positions (% of viewport) ── */
const NAV_NODES = [
  { id: 'About',   label: 'ABOUT',        num: '01', x: 30, y: 20 },
  { id: 'Skills',  label: 'SKILLS',       num: '02', x: 50, y: 48 },
  { id: 'Work',    label: 'WORK DETAILS', num: '03', x: 60, y: 70 },
  { id: 'Contact', label: 'CONTACT',      num: '04', x: 70, y: 28 },
];

/* ── SVG lines between nodes (pairs) ── */
const LINES = [
  [0, 1], [1, 2], [2, 3], [0, 3], [1, 3],
];

/* ── Rotating taglines ── */
const TAGLINES = [
  'MERN Stack Developer 🚀',
  'Full Stack Engineer ⚡',
  'Node.js & React Expert 🛠️',
  'MongoDB · PostgreSQL · MySQL 🗄️',
  'Building Production Apps 🌐',
];

/* ── Tech & developer focused photos ── */
const PHOTOS = [
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=85',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=85',
  'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&q=85',
  'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600&q=85',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=85',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=85',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=85',
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=85',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=85',
  'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=85',
  'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=85',
  'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&q=85',
  'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&q=85',
  'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&q=85',
  'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=600&q=85',
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState(null);
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [fade, setFade] = useState(true);

  /* rotating tagline */
  useEffect(() => {
    const iv = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTaglineIdx(i => (i + 1) % TAGLINES.length);
        setFade(true);
      }, 350);
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  const openTab = (id) => setActiveTab(id);
  const closeTab = () => setActiveTab(null);

  return (
    <div className="pf-root">
      <Cursor />

      {/* ══ FULL SCREEN MOSAIC ══ */}
      <div className="pf-mosaic">
        {PHOTOS.map((src, i) => (
          <div className="pf-cell" key={i} data-idx={i}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
        {/* Dark overlay */}
        <div className="pf-overlay" />
      </div>

      {/* ══ SVG diagonal lines between nav nodes ══ */}
      <svg className="pf-lines-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        {LINES.map(([a, b], i) => (
          <line
            key={i}
            x1={NAV_NODES[a].x} y1={NAV_NODES[a].y}
            x2={NAV_NODES[b].x} y2={NAV_NODES[b].y}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.15"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* ══ Nav dots overlaid on mosaic ══ */}
      {NAV_NODES.map(({ id, label, num, x, y }) => (
        <button
          key={id}
          className={`pf-nav-node ${activeTab === id ? 'pf-nav-node--active' : ''}`}
          style={{ left: `${x}%`, top: `${y}%` }}
          onClick={() => activeTab === id ? closeTab() : openTab(id)}
        >
          <span className="pf-nav-num">{num}</span>
          <span className="pf-nav-label">{label}</span>
          <span className="pf-nav-dot" />
        </button>
      ))}

      {/* ══ Name & tagline (bottom-left) ══ */}
      <div className="pf-hero-identity">
        <p className="pf-hi">Hi, I'm</p>
        <h1 className="pf-name">Dhaval Chaudhari</h1>
        <p className={`pf-tagline ${fade ? 'pf-tagline--in' : 'pf-tagline--out'}`}>
          {TAGLINES[taglineIdx]}
        </p>

        <div className="pf-socials">
          <a href="https://www.linkedin.com/in/dhaval-chaudhari-3456b0341/" target="_blank" rel="noreferrer" className="pf-social" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://github.com/chaudharironnie-pixel" target="_blank" rel="noreferrer" className="pf-social" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="https://www.instagram.com/r.onnie____" target="_blank" rel="noreferrer" className="pf-social" title="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="mailto:chaudharidhaval00@gmail.com" className="pf-social" title="Email">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.09l9.615-6.269h.749A1.636 1.636 0 0124 5.457z"/></svg>
          </a>
        </div>

        {/* Inline nav — mobile only, below socials */}
        <div className="pf-hero-nav">
          {NAV_NODES.map(({ id, label, num }) => (
            <button
              key={id}
              className={`pf-hero-nav-btn ${activeTab === id ? 'pf-hero-nav-btn--active' : ''}`}
              onClick={() => activeTab === id ? closeTab() : openTab(id)}
            >
              <span className="pf-hero-nav-num">{num}</span>
              <span className="pf-hero-nav-label">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ══ SLIDE-IN PANEL ══ */}
      <div className={`pf-panel ${activeTab ? 'pf-panel--open' : ''}`}>
        {/* Panel top bar */}
        <div className="pf-panel-bar">
          <div className="pf-available">
            <span className="pf-available-dot" />
            <span>Available</span>
          </div>
          <nav className="pf-tabs">
            {NAV_NODES.map(({ id, label }) => (
              <button
                key={id}
                className={`pf-tab ${activeTab === id ? 'pf-tab--active' : ''}`}
                onClick={() => openTab(id)}
              >
                {label}
              </button>
            ))}
          </nav>
          <button className="pf-close-btn" onClick={closeTab}>✕</button>
        </div>

        {/* Panel content */}
        <div className="pf-panel-body">

          {/* ── ABOUT ── */}
          {activeTab === 'About' && (
            <div className="pf-section">
              <h2 className="pf-section-title">ME, MYSELF, I</h2>
              <div className="pf-divider" />
              <p className="pf-about-greeting">Hi, I'm Dhaval Chaudhari.</p>
              <div className="pf-about-meta">
                <div className="pf-about-meta-row">
                  <span className="pf-meta-label">MY PROFILE</span>
                  <div className="pf-meta-content">
                    <p>• Experience: Full Stack Developer Trainee @ Upsquare Technologies</p>
                    <p>• Education: MCA at Sardar Patel University, Anand (2024–2026)</p>
                    <p>• Skills: MERN Stack, Angular, Nest.js, Next.js, TypeScript</p>
                    <p>• DBs: MySQL · PostgreSQL · MongoDB · SQLite</p>
                  </div>
                </div>
                <div className="pf-about-meta-row">
                  <span className="pf-meta-label">SUMMARY</span>
                  <div className="pf-meta-content">
                    <p>I'm a passionate Full Stack Developer specializing in the MERN stack and scalable REST APIs. I enjoy building real-world web &amp; mobile applications with clean architecture and modern UX.</p>
                    <p style={{ marginTop: '0.5rem' }}>Currently a trainee at <strong>Upsquare Technologies</strong>, building production-grade systems. Open to full-time opportunities.</p>
                  </div>
                </div>
                <div className="pf-about-meta-row">
                  <span className="pf-meta-label">HOBBIES</span>
                  <div className="pf-meta-content">
                    <p>Cricket 🏏 · Badminton 🏸 · Music 🎵 · Late-night side projects 🌙</p>
                  </div>
                </div>
              </div>
              <div className="pf-divider" />
              <h3 className="pf-section-sub">EXPERIENCE</h3>
              <Experience />
              <div className="pf-divider" />
              <h3 className="pf-section-sub">EDUCATION</h3>
              <Education />
            </div>
          )}

          {/* ── SKILLS ── */}
          {activeTab === 'Skills' && (
            <div className="pf-section">
              <h2 className="pf-section-title">SKILLS</h2>
              <div className="pf-divider" />

              {/* Descriptive paragraphs */}
              <div className="pf-skills-bio">
                <p>
                  I have a strong interest in <strong>Full Stack Development</strong>, REST API design,
                  System Architecture, and Database Design. I have built multiple real-world projects
                  using the MERN stack and enjoy solving complex backend challenges. I focus on writing
                  clean, scalable, and maintainable code.
                </p>
                <p>
                  During my college time I worked on freelance projects where I've built responsive
                  websites for small businesses and collaborated with teams to deliver web products
                  for both personal and professional use. Using front-end technologies like React, HTML,
                  CSS, and JavaScript to build interactive and performant layouts.
                </p>
                <p>
                  After joining <strong>Upsquare Technologies</strong>, I gained deeper knowledge in
                  production-level backend development. I worked on Node.js &amp; Express APIs,
                  MongoDB data modelling, and Angular/Nest.js integrations — always focused on design
                  patterns, Scalability, Reliability, and Clean Architecture.
                </p>
                <p>
                  Visit my{' '}
                  <a
                    href="https://www.linkedin.com/in/dhaval-chaudhari-3456b0341/"
                    target="_blank"
                    rel="noreferrer"
                    className="pf-inline-link"
                  >
                    LinkedIn
                  </a>{' '}
                  profile for more details or just{' '}
                  <button className="pf-link-btn" onClick={() => openTab('Contact')}>
                    contact me.
                  </button>
                </p>
              </div>

              <h3 className="pf-section-sub" style={{ marginTop: '1.8rem' }}>SKILLS</h3>
              <div className="pf-skillbars">
                {[
                  { label: 'Full Stack Dev', pct: 82 },
                  { label: 'MERN Stack',     pct: 88 },
                  { label: 'API Design',     pct: 85 },
                  { label: 'Android Dev',    pct: 62 },
                  { label: 'UI/UX',          pct: 70 },
                ].map(({ label, pct }) => (
                  <div className="pf-skillbar" key={label}>
                    <div className="pf-skillbar-header">
                      <span className="pf-skillbar-label">{label}</span>
                      <span className="pf-skillbar-pct">{pct}%</span>
                    </div>
                    <div className="pf-skillbar-track">
                      <div className="pf-skillbar-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="pf-divider" />
              <h3 className="pf-section-sub">MY STACK</h3>
              <Skills />
            </div>
          )}

          {/* ── WORK ── */}
          {activeTab === 'Work' && (
            <div className="pf-section">
              <h2 className="pf-section-title">PROJECTS &amp; WORKS</h2>
              <div className="pf-divider" />
              <p className="pf-work-sub">
                A gallery of recent projects I've been working on. Interested to see more?{' '}
                <a href="https://github.com/chaudharironnie-pixel" target="_blank" rel="noreferrer" className="pf-inline-link">
                  Visit my GitHub page.
                </a>
              </p>
              <Projects fullscreen />
            </div>
          )}

          {/* ── CONTACT ── */}
          {activeTab === 'Contact' && (
            <div className="pf-section">
              <Contact />
            </div>
          )}


        </div>
      </div>

      {/* Backdrop when panel is open (click to close) */}
      {activeTab && <div className="pf-backdrop" onClick={closeTab} />}

      {/* ══ MOBILE BOTTOM NAV BAR ══ */}
      <nav className="pf-mobile-nav">
        {[
          { id: 'About',   label: 'About',   icon: '👤' },
          { id: 'Skills',  label: 'Skills',  icon: '⚡' },
          { id: 'Work',    label: 'Work',    icon: '💼' },
          { id: 'Contact', label: 'Contact', icon: '✉️' },
        ].map(({ id, label, icon }) => (
          <button
            key={id}
            className={`pf-mobile-nav-btn ${activeTab === id ? 'pf-mobile-nav-btn--active' : ''}`}
            onClick={() => activeTab === id ? closeTab() : openTab(id)}
          >
            <span className="pf-mobile-nav-icon">{icon}</span>
            <span className="pf-mobile-nav-label">{label}</span>
            <span className="pf-mobile-nav-dot" />
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Portfolio;
