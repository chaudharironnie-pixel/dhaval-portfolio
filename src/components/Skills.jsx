import React from 'react';
import '../styles/Skills.css';

// Using devicons v3 — latest high quality colored icons
const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillRows = [
  {
    label: 'Languages',
    icons: [
      { name: 'JavaScript', src: `${BASE}/javascript/javascript-original.svg`, color: '#f7df1e', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'TypeScript', src: `${BASE}/typescript/typescript-original.svg`, color: '#3178c6', url: 'https://www.typescriptlang.org/' },
      { name: 'Java',       src: `${BASE}/java/java-original.svg`,             color: '#f89820', url: 'https://www.java.com/' },
      { name: 'Python',     src: `${BASE}/python/python-original.svg`,         color: '#3572A5', url: 'https://www.python.org/' },
      { name: 'SCSS',       src: `${BASE}/sass/sass-original.svg`,             color: '#cc6699', url: 'https://sass-lang.com/' },
      { name: 'HTML5',      src: `${BASE}/html5/html5-original.svg`,           color: '#e34f26', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS3',       src: `${BASE}/css3/css3-original.svg`,             color: '#1572b6', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    ],
  },
  {
    label: 'Frameworks',
    icons: [
      { name: 'React',     src: `${BASE}/react/react-original.svg`,         color: '#61dafb', url: 'https://react.dev/' },
      { name: 'Angular',   src: `${BASE}/angular/angular-original.svg`,     color: '#dd0031', url: 'https://angular.io/' },
      { name: 'Node.js',   src: `${BASE}/nodejs/nodejs-original.svg`,       color: '#68a063', url: 'https://nodejs.org/' },
      { name: 'Express',   src: `${BASE}/express/express-original.svg`,     color: '#fff',    url: 'https://expressjs.com/' },
      { name: 'Nest.js',   src: `${BASE}/nestjs/nestjs-original.svg`,       color: '#e0234e', url: 'https://nestjs.com/' },
      { name: 'Next.js',   src: `${BASE}/nextjs/nextjs-original.svg`,       color: '#fff',    url: 'https://nextjs.org/' },
      { name: 'Bootstrap', src: `${BASE}/bootstrap/bootstrap-original.svg`, color: '#7952b3', url: 'https://getbootstrap.com/' },
    ],
  },
  {
    label: 'Tools',
    icons: [
      { name: 'Git',            src: `${BASE}/git/git-original.svg`,                       color: '#f05032', url: 'https://git-scm.com/' },
      { name: 'GitHub',         src: `${BASE}/github/github-original.svg`,                 color: '#fff',    url: 'https://github.com/' },
      { name: 'VS Code',        src: `${BASE}/vscode/vscode-original.svg`,                 color: '#007acc', url: 'https://code.visualstudio.com/' },
      { name: 'Android Studio', src: `${BASE}/androidstudio/androidstudio-original.svg`,   color: '#3ddc84', url: 'https://developer.android.com/studio' },
      { name: 'Postman',        src: `${BASE}/postman/postman-original.svg`,               color: '#ff6c37', url: 'https://www.postman.com/' },
      { name: 'XAMPP',          src: 'https://upload.wikimedia.org/wikipedia/en/7/78/XAMPP_logo.svg', color: '#fb7a24', url: 'https://www.apachefriends.org/' },
      { name: 'Linux',          src: `${BASE}/linux/linux-original.svg`,                   color: '#fcc624', url: 'https://www.linux.org/' },
    ],
  },
  {
    label: 'Database',
    icons: [
      { name: 'MySQL',      src: `${BASE}/mysql/mysql-original.svg`,         color: '#4479a1', url: 'https://www.mysql.com/' },
      { name: 'PostgreSQL', src: `${BASE}/postgresql/postgresql-original.svg`, color: '#336791', url: 'https://www.postgresql.org/' },
      { name: 'MongoDB',    src: `${BASE}/mongodb/mongodb-original.svg`,     color: '#47a248', url: 'https://www.mongodb.com/' },
      { name: 'SQLite',     src: `${BASE}/sqlite/sqlite-original.svg`,       color: '#003b57', url: 'https://www.sqlite.org/' },
    ],
  },
];

function SkillIcon({ name, src, color, url }) {
  const fallback = src.replace('-original.svg', '-plain.svg');

  return (
    <a
      className="skill-icon-wrap"
      href={url}
      target="_blank"
      rel="noreferrer"
      title={name}
    >
      <div className="skill-icon-circle" style={{ boxShadow: `0 0 12px ${color}22`, borderColor: `${color}18` }}>
        <img
          src={src}
          alt={name}
          className="skill-icon-img"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <span className="skill-icon-fallback">{name.charAt(0)}</span>
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
