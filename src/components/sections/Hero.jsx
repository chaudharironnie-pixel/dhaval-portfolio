import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ChevronDown, Download } from 'lucide-react';
import { personalInfo, heroWords } from '../../data/portfolio';
import { useTypewriter } from '../../hooks/useTypewriter';
import { Button } from '../ui/Button';
import { MagneticButton } from '../ui/MagneticButton';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const socialLinks = [
  { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: Instagram, href: personalInfo.social.instagram, label: 'Instagram' },
  { icon: Mail, href: personalInfo.social.email, label: 'Email' },
];

export function Hero() {
  const typewriterText = useTypewriter(heroWords, 90, 50, 2200);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-neon-violet/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute -right-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-neon-indigo/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        className="section-padding relative z-10 mx-auto max-w-5xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neon-violet md:text-base"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {personalInfo.firstName}{' '}
          <span className="text-gradient">{personalInfo.lastName}</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mx-auto mt-6 flex h-8 items-center justify-center text-xl font-medium text-slate-300 md:text-2xl"
        >
          <span>{typewriterText}</span>
          <span className="ml-1 inline-block h-7 w-0.5 animate-pulse bg-neon-violet" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg"
        >
          MERN Stack Developer building scalable REST APIs & modern web applications.
          Currently gaining industry experience through internships at{' '}
          <a href="https://unifiedmentor.com/" target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-neon-violet">Unified Mentor Pvt. Ltd.</a>.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton>
            <Button size="lg" onClick={() => scrollTo('projects')}>
              View Projects
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button variant="outline" size="lg" onClick={() => scrollTo('contact')}>
              Contact Me
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button
              variant="outline"
              size="lg"
              href={personalInfo.resumeUrl}
              external
              download
              className="gap-2"
            >
              <Download size={18} />
              Resume
            </Button>
          </MagneticButton>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 backdrop-blur-sm transition-all hover:scale-110 hover:border-neon-violet/50 hover:text-neon-violet hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest text-slate-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
