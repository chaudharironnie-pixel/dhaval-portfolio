import React from 'react';
import '../styles/Skills.css';

const skillRows = [
  {
    label: 'Languages',
    icons: [
      { name: 'JavaScript', icon: 'javascript', color: '#f7df1e', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: 'typescript', color: '#3178c6', url: 'https://www.typescriptlang.org/' },
      { name: 'Java', icon: 'java', color: '#f89820', url: 'https://www.java.com/' },
      { name: 'Python', icon: 'python', color: '#3572A5', url: 'https://www.python.org/' },
      { name: 'SCSS', icon: 'sass', color: '#cc6699', url: 'https://sass-lang.com/' },
    ],
  },
  {
    label: 'Frameworks',
    icons: [
      { name: 'React', icon: 'react', color: '#61dafb', url: 'https://react.dev/' },
      { name: 'Angular', icon: 'angularjs', color: '#dd0031', url: 'https://angular.io/' },
      { name: 'Node.js', icon: 'nodejs', color: '#68a063', url: 'https://nodejs.org/' },
      { name: 'Express', icon: 'express', color: '#aaa', url: 'https://expressjs.com/' },
      { name: 'Nest.js', icon: 'nestjs', color: '#e0234e', url: 'https://nestjs.com/' },
      { name: 'Next.js', icon: 'nextjs', color: '#fff', url: 'https://nextjs.org/' },
      { name: 'Bootstrap', icon: 'bootstrap', color: '#7952b3', url: 'https://getbootstrap.com/' },
    ],
  },
  {
    label: 'Tools',
    icons: [
      { name: 'Git', icon: 'git', color: '#f05032', url: 'https://git-scm.com/' },
      { name: 'GitHub', icon: 'github', color: '#fff', url: 'https://github.com/' },
      { name: 'VS Code', icon: 'vscode', color: '#007acc', url: 'https://code.visualstudio.com/' },
      { name: 'Android Studio', icon: 'androidstudio', color: '#3ddc84', url: 'https://developer.android.com/studio' },
      { name: 'Postman', icon: 'postman', color: '#ff6c37', url: 'https://www.postman.com/' },
    ],
  },
  {
    label: 'Database',
    icons: [
      { name: 'MySQL', icon: 'mysql', color: '#4479a1', url: 'https://www.mysql.com/' },
      { name: 'PostgreSQL', icon: 'postgresql', color: '#336791', url: 'https://www.postgresql.org/' },
      { name: 'MongoDB', icon: 'mongodb', color: '#47a248', url: 'https://www.mongodb.com/' },
    ],
  },
];

function SkillIcon({ name, icon, color, url }) {
  const src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`;
  const fallbackSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-plain.svg`;

  return (
    <a
      className="skill-icon-wrap"
      href={url}
      target="_blank"
      rel="noreferrer"
      title={`Visit ${name} official page`}
    >
      <div className="skill-icon-circle" style={{ boxShadow: `0 0 10px ${color}33` }}>
        <img
          src={src}
          alt={name}
          className="skill-icon-img"
          onError={(e) => {
            if (e.target.src !== fallbackSrc) e.target.src = fallbackSrc;
          }}
        />
      </div>
      <span className="skill-icon-label">{name}</span>
    </a>
  );
}

function Skills() {
  return (
    <div className="skills-section-col">
      {skillRows.map((row, i) => (
        <div className="dark-card skill-bar" key={i}>
          <div className="skill-bar-header">
            <span className="skill-bar-label">{row.label}</span>
            <div className="skill-bar-divider" />
          </div>
          <div className="skill-icons-row">
            {row.icons.map((ic, j) => (
              <SkillIcon key={j} {...ic} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
