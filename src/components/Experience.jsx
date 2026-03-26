import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <div className="exp-grid">

      {/* ── Upsquare Technologies ── */}
      <div className="dark-card exp-card">
        <div className="exp-top">
          <div>
            <h3 className="exp-company-name">Upsquare Technologies</h3>
            <p className="exp-role">Full Stack Developer Trainee</p>
          </div>
          <span className="exp-date-badge">Dec 2025 – Present</span>
        </div>
        <div className="exp-divider" />

        {/* Project: E-Sign Document */}
        <div className="exp-project-label">
          <span className="exp-project-dot" />
          <span className="exp-project-name">E-Sign Document Platform</span>
          <span className="exp-project-tag"> Live Project</span>
        </div>
        <ul className="exp-list">
          <li>Built backend <strong>REST APIs</strong> using <strong>Node.js &amp; Express</strong> for document signing workflows used in production.</li>
          <li>Designed and managed <strong>MongoDB database</strong> schemas for users, documents, and signature records.</li>
          <li>Implemented secure <strong>authentication &amp; authorization</strong> for multi-user document access control.</li>
          <li>Integrated <strong>file upload &amp; storage</strong> pipelines for handling PDF documents end-to-end.</li>
          <li>Collaborated in an agile team delivering real client deliverables on schedule.</li>
        </ul>

        {/* Project: Workplate */}
        <div className="exp-project-label" style={{ marginTop: '1rem' }}>
          <span className="exp-project-dot" style={{ background: '#a78bfa' }} />
          <span className="exp-project-name">Workplans</span>
          <span className="exp-project-tag"> Live Project</span>
        </div>
        <ul className="exp-list">
          <li>Developed <strong>RESTful APIs</strong> for a workflow/task management platform serving real business clients.</li>
          <li>Designed efficient <strong>database architecture</strong> in MongoDB for tasks, users, and team structures.</li>
          <li>Built data models ensuring <strong>scalability &amp; performance</strong> for concurrent multi-user access.</li>
          <li>Worked closely with the frontend team to integrate APIs seamlessly into the product interface.</li>
        </ul>
      </div>

      {/* ── Open to Opportunities ── */}
      <div className="dark-card exp-card">
        <div className="exp-top">
          <div>
            <h3 className="exp-company-name">Open to Opportunities</h3>
            <p className="exp-role">Full Stack / MERN Developer</p>
          </div>
          <span className="exp-date-badge">2026</span>
        </div>
        <div className="exp-divider" />
        <ul className="exp-list">
          <li>Seeking full-time roles in <strong>Full Stack / MERN</strong> development.</li>
          <li>Strong in <strong>API design, DB schema</strong> &amp; component architecture.</li>
          <li>Hands-on with <strong>Angular, Next.js, Nest.js</strong> &amp; TypeScript.</li>
          <li>Quick learner with strong problem-solving &amp; leadership skills.</li>
        </ul>
      </div>

    </div>
  );
}

export default Experience;
