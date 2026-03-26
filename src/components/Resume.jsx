import React, { useState } from 'react';
import '../styles/Resume.css';

function Resume() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="dark-card resume-card">

      {/* Actual PDF preview */}
      <div className="resume-preview">
        {!loaded && (
          <div className="resume-loading">
            {/* <div className="resume-spinner" /> */}
            <span>Loading preview...</span>
          </div>
        )}
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="resume-iframe"
          title="Resume Preview"
          onLoad={() => setLoaded(true)}
          style={{ display: loaded ? 'block' : 'none' }}
        />
      </div>

      {/* Info + buttons */}
      <div className="resume-body">
        <div className="resume-meta">
          <h3 className="resume-name">Dhaval Chaudhari</h3>
          <p className="resume-role">Full Stack Developer</p>
          <ul className="resume-highlights">
            <li>MERN Stack Developer</li>
            <li>Strong in APIs &amp; DB Design</li>
            <li>Angular · Nest.js · Next.js</li>
            <li>MySQL · PostgreSQL · MongoDB</li>
          </ul>
        </div>

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
            download="Dhaval_Chaudhari_Resume.pdf"
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
