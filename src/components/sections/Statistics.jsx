import { motion } from 'framer-motion';
import { Code2, Users, Coffee, GitBranch } from 'lucide-react';
import { Card } from '../ui/Card';

const stats = [
  { icon: Code2, value: '6+', label: 'Projects Built', color: 'neon-violet' },
  { icon: GitBranch, value: '200+', label: 'Git Commits', color: 'neon-indigo' },
  { icon: Users, value: '3+', label: 'Happy Clients', color: 'neon-cyan' },
  { icon: Coffee, value: '500+', label: 'Cups of Coffee', color: 'neon-pink' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const colorMap = {
  'neon-violet': 'text-neon-violet bg-neon-violet/10',
  'neon-indigo': 'text-neon-indigo bg-neon-indigo/10',
  'neon-cyan': 'text-neon-cyan bg-neon-cyan/10',
  'neon-pink': 'text-neon-pink bg-neon-pink/10',
};

export function Statistics() {
  return (
    <section className="section-padding relative py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} variants={itemVariants}>
                <Card className="group p-6 text-center" hover>
                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                      colorMap[stat.color]
                    }`}
                  >
                    <Icon size={28} />
                  </div>
                  <span className="font-display block text-3xl font-bold text-white md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-slate-400">{stat.label}</span>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
