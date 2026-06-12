import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

const experiences = [
  {
    id: 'unified-mentor',
    company: 'Unified Mentor Pvt. Ltd.',
    companyUrl: 'https://unifiedmentor.com/',
    role: 'MERN Stack Developer Intern',
    location: 'Gurugram, Haryana',
    period: 'May 2026 — Present',
    description: [
      'Developing and maintaining full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Building responsive and user-friendly interfaces with React.js and modern JavaScript.',
      'Designing and integrating RESTful APIs for seamless frontend-backend communication.',
      'Working with MongoDB and PostgreSQL databases for efficient data management.',
      'Collaborating with mentors and team members using Git and GitHub workflows.',
      'Participating in debugging, testing, and performance optimization of web applications.',
      'Following Agile development practices and contributing to real-world projects.',
    ],
    tags: ['MERN Stack', 'REST APIs', 'React', 'Node.js','Nest.js', 'PostgreSQL'],
  },
  {
    id: 'upsquare',
    company: 'Upsquare Technologies',
    companyUrl: 'https://upsquaretech.com/',
    role: 'Full Stack Developer Trainee',
    location: 'Ahmedabad, India',
    period: 'Dec 2025 — May 2026',
    description: [
      'Leveraged MERN stack to architect and develop scalable applications, building and maintaining RESTful APIs in live projects.',
      'Gained hands-on experience working on live client projects, collaborating with teams to develop real-world features.',
      'Designed and implemented responsive UI/UX interfaces using React.js, focusing on user-friendly design and component reusability.',
      'Contributed to both frontend and backend development, including API integration, database management, and debugging.',
    ],
    tags: ['MERN Stack', 'React', 'Node.js', 'UI/UX', 'Nest.js'],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    role: 'Web Developer',
    location: 'Remote',
    period: 'Jan 2024 — May 2024',
    description: [
      'Developed custom websites and web applications for small businesses and individual clients.',
      'Built responsive landing pages, portfolio sites, and simple e-commerce solutions.',
      'Integrated third-party APIs, payment gateways, and content management systems.',
    ],
    tags: ['React', 'Node.js', 'WordPress', 'Payment Integration'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function Experience() {
  return (
    <section id="experience" className="section-padding relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Experience"
          title="Where I've worked"
          subtitle="My professional journey building real-world applications and growing as a developer."
        />

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-neon-violet via-neon-indigo to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col gap-6 md:flex-row ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-neon-violet/30 bg-dark-950 md:left-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-neon-violet to-neon-indigo">
                    <Briefcase size={14} className="text-white" />
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="p-6" hover>
                    <div className="mb-1 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-neon-violet">
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="font-medium transition-colors hover:text-white">{exp.company}</a>
                      ) : (
                        <span className="font-medium">{exp.company}</span>
                      )}
                      <span className="text-slate-500">|</span>
                      <div className="flex items-center gap-1 text-slate-400">
                        <MapPin size={12} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neon-violet" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
