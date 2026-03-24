import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <div className="exp-grid">
      <div className="dark-card exp-card">
        <div className="exp-top">
          <div>
            <h3 className="exp-company-name">Upsquare Technologies</h3>
            <p className="exp-role">Full Stack Developer Trainee</p>
          </div>
          <span className="exp-date-badge">Dec 2025 – Present</span>
        </div>
        <div className="exp-divider" />
        <ul className="exp-list">
          <li>Built REST APIs using <strong>Node.js & Express</strong> for live production projects.</li>
          <li>Developed responsive UI components using <strong>React</strong> with clean UX.</li>
          <li>Worked with <strong>MongoDB</strong> for data modeling and efficient queries.</li>
          <li>Integrated frontend & backend systems ensuring seamless data flow.</li>
          <li>Collaborated in an agile team delivering real client deliverables on time.</li>
        </ul>
      </div>

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
          <li>Strong in <strong>API design, DB schema</strong> & component architecture.</li>
          <li>Hands-on with <strong>Angular, Next.js, Nest.js</strong> & TypeScript.</li>
          <li>Quick learner with strong problem-solving & leadership skills.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
