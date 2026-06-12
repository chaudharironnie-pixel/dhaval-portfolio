import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Projects() {
  return (
    <section id="projects" className="section-padding relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Featured Projects"
          title="Things I've built"
          subtitle="A selection of projects that showcase my skills in full-stack development, UI implementation, and problem-solving."
        />

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="group h-full overflow-hidden p-0" glow>
                {/* Project Image Placeholder */}
                <div
                  className="relative h-56 overflow-hidden"
                  style={{ backgroundColor: `${project.color}10` }}
                >
                  <div
                    className="absolute inset-0 opacity-30 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${project.color}40, transparent 60%),
                                   radial-gradient(circle at 70% 70%, ${project.color}20, transparent 50%)`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110"
                      style={{ boxShadow: `0 0 40px ${project.color}30` }}
                    >
                      <Layers size={36} style={{ color: project.color }} />
                    </div>
                  </div>
                  <div className="absolute left-4 top-4">
                    <Badge className="bg-dark-900/80 text-white backdrop-blur-md">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-white transition-colors group-hover:text-neon-violet">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.live && (
                      <Button
                        size="sm"
                        href={project.live}
                        external
                        className="gap-2"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      href={project.github}
                      external
                      className="gap-2"
                    >
                      <Github size={14} />
                      GitHub
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400">
            Want to see more? Check out my{' '}
            <a
              href="https://github.com/chaudharironnie-pixel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-violet underline-offset-4 transition-all hover:text-neon-indigo hover:underline"
            >
              GitHub profile
            </a>{' '}
            for all projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
