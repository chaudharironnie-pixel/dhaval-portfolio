import React from 'react';
import '../styles/Resume.css';

function Resume() {
  return (
    <div className="dark-card resume-card">
      {/* Preview thumbnail */}
      <div className="resume-preview">
        <div className="resume-preview-inner">
          <div className="resume-page-mock">
            <div className="mock-line mock-line--title" />
            <div className="mock-line mock-line--sub" />
            <div className="mock-divider" />
            <div className="mock-line" />
            <div className="mock-line mock-line--short" />
            <div className="mock-line" />
            <div className="mock-divider" />
            <div className="mock-line mock-line--short" />
            <div className="mock-line" />
            <div className="mock-line mock-line--short" />
          </div>
        </div>
        <div className="resume-preview-label">PDF Preview</div>
      </div>

      {/* Info */}
      <div className="resume-body">
        <div className="resume-meta">
          <h3 className="resume-name">Dhaval Chuadhari</h3>
          <p className="resume-role">Full Stack Developer</p>
          <ul className="resume-highlights">
            <li>MERN Stack Developer</li>
            <li>Strong in APIs &amp; DB Design</li>
            <li>Angular · Nest.js · Next.js</li>
            <li>MySQL · PostgreSQL · MongoDB</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="resume-actions">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn resume-btn--view"
          >
            <span>👁</span> View Resume
          </a>
          <a
            href="/resume.pdf"
            download="Dhaval_Chuadhari_Resume.pdf"
            className="resume-btn resume-btn--download"
          >
            <span>⬇</span> Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
