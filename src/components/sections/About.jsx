import { motion } from 'framer-motion';
import { MapPin, Briefcase, Sparkles, Target, Code2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function About() {
  return (
    <section id="about" className="section-padding relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="About Me"
          title="Turning ideas into digital experiences"
          subtitle="A passionate developer who loves solving complex problems and creating beautiful, functional web applications."
        />

        <motion.div
          className="grid gap-10 lg:grid-cols-5 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Profile Card */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="relative flex flex-col items-center p-8 text-center" glow>
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-violet via-neon-indigo to-neon-cyan opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative mb-6">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-violet via-neon-indigo to-neon-cyan opacity-75 blur animate-pulse-glow" />
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-dark-950 ring-4 ring-white/10">
                  <span className="font-display text-5xl font-bold text-gradient">
                    {personalInfo.firstName[0]}{personalInfo.lastName[0]}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">{personalInfo.fullName}</h3>
              <p className="mt-1 text-neon-violet">{personalInfo.title}</p>

              <div className="mt-4 flex flex-col items-center gap-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={14} />
                  <span>MERN Stack Developer Intern at Unified Mentor</span>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                {personalInfo.status}
              </div>
            </Card>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-slate-300 md:text-lg">
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card className="p-5" hover>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-neon-violet/10 text-neon-violet">
                  <Target size={20} />
                </div>
                <h4 className="font-display font-semibold text-white">Career Goal</h4>
                <p className="mt-1 text-sm text-slate-400">
                  To become a senior full-stack engineer leading impactful products and mentoring teams.
                </p>
              </Card>
              <Card className="p-5" hover>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-neon-cyan/10 text-neon-cyan">
                  <Sparkles size={20} />
                </div>
                <h4 className="font-display font-semibold text-white">Philosophy</h4>
                <p className="mt-1 text-sm text-slate-400">
                  {personalInfo.philosophy}
                </p>
              </Card>
              <Card className="p-5" hover>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-neon-indigo/10 text-neon-indigo">
                  <Code2 size={20} />
                </div>
                <h4 className="font-display font-semibold text-white">Development Focus</h4>
                <p className="mt-1 text-sm text-slate-400">
                  Scalable APIs, clean architecture, and responsive user interfaces with modern frameworks.
                </p>
              </Card>
              <Card className="p-5" hover>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-neon-pink/10 text-neon-pink">
                  <Briefcase size={20} />
                </div>
                <h4 className="font-display font-semibold text-white">Current Role</h4>
                <p className="mt-1 text-sm text-slate-400">
                  MERN Stack Developer Intern building full-stack web applications at Unified Mentor.
                </p>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
