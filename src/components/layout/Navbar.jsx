import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolio';
import { cn } from '../../lib/utils';

export function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'py-3' : 'py-5'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="section-padding mx-auto max-w-7xl">
          <nav
            className={cn(
              'flex items-center justify-between rounded-full px-4 py-3 transition-all duration-300 md:px-6',
              scrolled
                ? 'border border-white/10 bg-dark-900/80 shadow-lg shadow-black/20 backdrop-blur-2xl'
                : 'bg-transparent'
            )}
          >
            <button
              onClick={() => scrollTo('hero')}
              className="group flex items-center gap-2 text-xl font-bold text-white"
              aria-label="Go to home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-neon-violet to-neon-indigo font-display font-bold text-white transition-transform group-hover:scale-110">
                DC
              </span>
              <span className="hidden font-display font-semibold sm:inline"></span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    activeSection === id ? 'text-white' : 'text-slate-400 hover:text-white'
                  )}
                >
                  {activeSection === id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 rounded-full border border-neon-violet/30 bg-neon-violet/10 px-5 py-2 text-sm font-medium text-neon-violet transition-all hover:bg-neon-violet/20"
              >
                Resume
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-white/10 bg-dark-900/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={cn(
                    'rounded-xl px-4 py-3 text-left text-base font-medium transition-colors',
                    activeSection === id
                      ? 'bg-neon-violet/10 text-neon-violet'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  )}
                >
                  {label}
                </button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-xl bg-gradient-to-r from-neon-violet to-neon-indigo px-4 py-3 text-center font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
