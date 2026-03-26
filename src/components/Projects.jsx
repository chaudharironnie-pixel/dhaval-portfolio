import React, { useState } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Project Management Platform',
    desc: 'Task tracking system with role-based access, team collaboration, and real-time updates.',
    tech: ['React', 'Node.js', 'MongoDB', 'SCSS'],
    color: '#61dafb',
    live: null,
    github: 'https://github.com/chaudharironnie-pixel',
    badge: 'Web App',
    emoji: '📋',
  },
  {
    title: 'Travel-Bee',
    desc: 'Blog platform for travel enthusiasts with dynamic content, user posts and Bootstrap UI.',
    tech: ['JavaScript', 'Node.js', 'Express', 'Bootstrap'],
    color: '#68a063',
    live: null,
    github: 'https://github.com/chaudharironnie-pixel',
    badge: 'Web App',
    emoji: '✈️',
  },
  {
    title: 'Fitness First',
    desc: 'Android gym management app with member registration, workout & diet scheduling.',
    tech: ['Kotlin', 'XML', 'SQLite'],
    color: '#3ddc84',
    live: null,
    github: 'https://github.com/chaudharironnie-pixel',
    badge: 'Android',
    emoji: '💪',
  },
  {
    title: 'Travel Management System',
    desc: 'Hotel booking portal with user authentication, search filters and admin panel.',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    color: '#f7df1e',
    live: null,
    github: 'https://github.com/chaudharironnie-pixel',
    badge: 'Web App',
    emoji: '🏨',
  },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

function Projects({ fullscreen }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className={fullscreen ? 'projects-fs-grid' : 'projects-grid'}>
      {projects.map((p, i) => (
        <div
          className={fullscreen ? 'project-fs-card' : 'project-card'}
          key={i}
          onClick={() => fullscreen && setExpanded(expanded === i ? null : i)}
          style={fullscreen ? { borderTop: `3px solid ${p.color}` } : {}}
        >
          {/* Emoji + badge */}
          <div className="project-card-top">
            <div className="project-card-left">
              {fullscreen && <span className="project-emoji">{p.emoji}</span>}
              <span className="project-dot" style={{ background: p.color }} />
              <span className="project-badge">{p.badge}</span>
            </div>
            <div className="project-links" onClick={e => e.stopPropagation()}>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="project-link project-link--live">
                  <LiveIcon /> Live
                </a>
              )}
              <a href={p.github} target="_blank" rel="noreferrer" className="project-link project-link--github">
                <GithubIcon /> GitHub
              </a>
            </div>
          </div>

          <h3 className="project-title">{p.title}</h3>
          <p className="project-desc">{p.desc}</p>

          <div className="project-tech-row">
            {p.tech.map((t, j) => (
              <span className="project-tech-tag" key={j} style={{ borderColor: `${p.color}44` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Find More card */}
      {fullscreen && (
        <div className="project-fs-card project-findmore-card">
          <p className="project-findmore-title">FIND MORE</p>
          <a
            href="https://github.com/chaudharironnie-pixel"
            target="_blank"
            rel="noreferrer"
            className="project-findmore-link"
          >
            View on GitHub →
          </a>
        </div>
      )}
    </div>
  );
}

export default Projects;
