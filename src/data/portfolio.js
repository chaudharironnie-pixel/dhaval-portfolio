export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export const personalInfo = {
  firstName: 'Dhaval',
  lastName: 'Chaudhari',
  fullName: 'Dhaval Chaudhari',
  title: 'MERN Stack Developer',
  email: 'chaudharidhaval00@gmail.com',
  phone: '+91 90994 25757',
  whatsapp: '919099425757',
  location: 'Gujarat, India',
  status: 'Available for opportunities',
  resumeUrl: '/Dhaval-Chaudhari-Resume.pdf',
  philosophy: 'Passionate about solving complex problems, learning new technologies, and contributing to innovative software solutions.',
  bio: [
    'MERN Stack Developer with hands-on experience in building full-stack web applications using React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Skilled in developing responsive user interfaces, RESTful APIs, database management, and modern web technologies.',
    'Currently gaining industry experience through internships and real-world projects. Passionate about solving complex problems, learning new technologies, and contributing to innovative software solutions.',
    'When I\'m not coding, you\'ll find me exploring new tech, contributing to open source, or working on side projects that push my skills further. I believe in writing code that\'s not just functional but maintainable, scalable, and — dare I say — beautiful.',
  ],
  social: {
    github: 'https://github.com/chaudharironnie-pixel',
    linkedin: 'https://linkedin.com/in/dhaval-chaudhari-3456b0341',
    instagram: 'https://instagram.com/r.onnie____',
    email: 'mailto:chaudharidhaval00@gmail.com',
  },
};

export const heroWords = [
  'MERN Stack Developer',
  'React Enthusiast',
  'Angular Developer',
  'API Architect',
  'Problem Solver',
];

export const deviconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    level: 85,
    skills: [
      { name: 'React', icon: 'react/react-original.svg', color: '#61DAFB' },
      { name: 'Angular', icon: 'angularjs/angularjs-original.svg', color: '#DD0031' },
      { name: 'Next.js', icon: 'nextjs/nextjs-original.svg', color: '#FFFFFF' },
      { name: 'NestJS', icon: 'nestjs/nestjs-original.svg', color: '#E0234E' },
      { name: 'TypeScript', icon: 'typescript/typescript-original.svg', color: '#3178C6' },
      { name: 'JavaScript', icon: 'javascript/javascript-original.svg', color: '#F7DF1E' },
      { name: 'Bootstrap', icon: 'bootstrap/bootstrap-original.svg', color: '#7952B3' },
      { name: 'SCSS', icon: 'sass/sass-original.svg', color: '#CC6699' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    level: 80,
    skills: [
      { name: 'Node.js', icon: 'nodejs/nodejs-original.svg', color: '#339933' },
      { name: 'Express', icon: 'express/express-original.svg', color: '#FFFFFF' },
      { name: 'Python', icon: 'python/python-original.svg', color: '#3776AB' },
      { name: 'Java', icon: 'java/java-original.svg', color: '#ED8B00' },
      { name: '.NET', icon: 'dotnet/dotnet-original.svg', color: '#512BD4' },
      { name: 'REST APIs', icon: null, color: '#8B5CF6' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    level: 75,
    skills: [
      { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg', color: '#47A248' },
      { name: 'MySQL', icon: 'mysql/mysql-original.svg', color: '#4479A1' },
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg', color: '#4169E1' },
      { name: 'phpMyAdmin', icon: null, color: '#6C78AF' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    level: 70,
    skills: [
      { name: 'Git', icon: 'git/git-original.svg', color: '#F05032' },
      { name: 'GitHub', icon: 'github/github-original.svg', color: '#FFFFFF' },
      { name: 'VS Code', icon: 'vscode/vscode-original.svg', color: '#007ACC' },
      { name: 'Android Studio', icon: 'androidstudio/androidstudio-original.svg', color: '#3DDC84' },
      { name: 'CI/CD', icon: null, color: '#06B6D4' },
      { name: 'XAMPP', icon: null, color: '#FB7A24' },
    ],
  },
];

export const projects = [
  {
    id: 'project-management',
    title: 'Project Management Platform',
    description: 'Led a 17-member team to develop a comprehensive project management platform, showcasing skills in product management, architecture, and SCSS.',
    tech: ['React', 'SCSS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/chaudharironnie-pixel/project-management',
    live: null,
    category: 'Full Stack',
    color: '#6366F1',
  },
  {
    id: 'travel-bee',
    title: 'Travel-Bee',
    description: 'Designed and implemented a blog website using JavaScript, Node.js, Express.js, and Bootstrap for travel enthusiasts.',
    tech: ['JavaScript', 'Node.js', 'Express.js', 'Bootstrap'],
    github: 'https://github.com/chaudharironnie-pixel/travel-bee',
    live: null,
    category: 'Full Stack',
    color: '#06B6D4',
  },
  {
    id: 'fitness-first',
    title: 'Fitness First',
    description: 'Gym management Android application with member registration, workout and diet scheduling, and appointment system.',
    tech: ['Kotlin', 'XML', 'SQLite', 'Android'],
    github: 'https://github.com/chaudharironnie-pixel/fitness-first',
    live: null,
    category: 'Mobile',
    color: '#3DDC84',
  },
  {
    id: 'travel-management',
    title: 'Travel Management System',
    description: 'Travel and hotel booking portal with user authentication and admin panel for managing bookings and listings.',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    github: 'https://github.com/chaudharironnie-pixel/travel-management',
    live: null,
    category: 'Web',
    color: '#F59E0B',
  },
];

export const services = [
  {
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    description: 'End-to-end web application development using the MERN stack — from database design and REST APIs to responsive, interactive frontends.',
    icon: 'Globe',
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive UI components built with React, Tailwind CSS, and Framer Motion — ensuring a smooth user experience across devices.',
    icon: 'Layout',
  },
  {
    id: 'api-dev',
    title: 'REST API Development',
    description: 'Scalable and secure RESTful APIs with authentication, validation, rate limiting, and comprehensive documentation.',
    icon: 'Plug',
  },
  {
    id: 'database-design',
    title: 'Database Design & Optimization',
    description: 'Schema design, query optimization, and indexing strategies for MongoDB and SQL databases to ensure peak application performance.',
    icon: 'Layers',
  },
  {
    id: 'ui-design',
    title: 'UI/UX Implementation',
    description: 'Translating Figma designs and wireframes into clean, maintainable React components with micro-interactions and animations.',
    icon: 'Palette',
  },
];

export const testimonials = [
  {
    content: 'Dhaval is a quick learner with a strong grasp of full-stack development. His ability to pick up new technologies and deliver quality code is impressive. A valuable addition to any dev team.',
    avatar: 'RK',
    name: 'Urmil',
    role: 'Senior Developer, Upsquare Technologies',
  },
  {
    content: 'Working with Dhaval on backend architecture was a great experience. He writes clean, well-structured code and always considers scalability from the start. Highly recommended.',
    avatar: 'AP',
    name: 'Anita Patel',
    role: 'Tech Lead, Freelance Project',
  },
  {
    content: 'Dhaval has a great eye for UI details. He transformed our wireframes into a beautiful, responsive interface that our clients love. His communication and delivery were top-notch.',
    avatar: 'SM',
    name: 'Rajin Mansuri',
    role: 'Project Manager, Upsquare Technologies',
  },
];
