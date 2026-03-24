import React from 'react';
import '../styles/Education.css';

const edu = [
  { degree: 'Master of Computer Application', uni: 'Sardar Patel University', year: '2024-2026' },
  { degree: 'Bachelor of Computer Application', uni: 'Veer Narmad South Gujarat University', year: '2021-2024' },
];

function Education() {
  return (
    <div className="dark-card edu-card">
      {edu.map((e, i) => (
        <div key={i}>
          <div className="edu-row">
            <div>
              <h3 className="edu-degree">{e.degree}</h3>
              <p className="edu-uni">{e.uni}</p>
            </div>
            <span className="edu-year-badge">{e.year}</span>
          </div>
          {i < edu.length - 1 && <div className="edu-divider" />}
        </div>
      ))}
    </div>
  );
}

export default Education;
