import { motion } from 'framer-motion';
import { Globe, Layout, Layers, Palette, Plug, ArrowUpRight } from 'lucide-react';
import { services } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const iconMap = {
  Globe,
  Layout,
  Layers,
  Palette,
  Plug,
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
          {services.map((service, idx) => {
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
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-neon-violet opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>Learn more</span>
                    <ArrowUpRight size={16} />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
