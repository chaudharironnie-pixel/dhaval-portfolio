import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Layout, Layers, Palette, Plug, Briefcase, X, Check, ArrowUpRight } from 'lucide-react';
import { services } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const iconMap = {
  Globe,
  Layout,
  Layers,
  Palette,
  Plug,
  Briefcase,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  return (
    <section id="services" className="section-padding relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Services"
          title="What I can do for you"
          subtitle="From concept to deployment, I offer end-to-end development services tailored to your needs."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="group relative h-full p-6" glow>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-violet/20 to-neon-indigo/20 text-neon-violet transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neon-violet transition-all duration-300 hover:text-white group/btn"
                  >
                    <span>What's Included</span>
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            key="service-panel"
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />

            <motion.div
              className="absolute right-0 top-0 h-full w-full max-w-lg overflow-y-auto border-l border-white/10 bg-dark-900 p-6 shadow-2xl md:p-8"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-neon-violet/50 hover:bg-neon-violet/10 hover:text-white"
              >
                <X size={18} />
              </button>

              {(() => {
                const Icon = iconMap[selectedService.icon] || Layers;
                return (
                  <div className="mb-8 mt-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-violet/20 to-neon-indigo/20 text-neon-violet">
                      <Icon size={28} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                      {selectedService.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {selectedService.description}
                    </p>
                  </div>
                );
              })()}

              <div className="mb-6 h-px bg-gradient-to-r from-neon-violet/50 to-transparent" />

              <h3 className="font-display text-lg font-semibold text-white">What's Included</h3>
              <ul className="mt-4 space-y-2">
                {selectedService.details.map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">
                  Interested in this service?{' '}
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="font-medium text-neon-violet transition-colors hover:text-white"
                  >
                    Get in touch
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
