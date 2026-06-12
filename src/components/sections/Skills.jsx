import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, deviconBase } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { cn } from '../../lib/utils';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const currentCategory = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="section-padding relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
      
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Skills & Expertise"
          title="Technologies I work with"
          subtitle="A curated stack of modern tools and frameworks I use to build scalable, high-performance applications."
        />

        {/* Category Tabs */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300',
                activeCategory === category.id
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              )}
            >
              {activeCategory === category.id && (
                <motion.span
                  layoutId="activeSkillTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-violet to-neon-indigo"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skill Level */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-400">Proficiency</span>
            <span className="font-medium text-neon-violet">{currentCategory?.level}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/5">
            <motion.div
              key={activeCategory}
              className="h-full rounded-full bg-gradient-to-r from-neon-violet to-neon-indigo"
              initial={{ width: 0 }}
              animate={{ width: `${currentCategory?.level}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
          >
            {currentCategory?.skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card
                  className="group flex flex-col items-center justify-center gap-3 p-5 text-center"
                  hover
                  glow
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 transition-all duration-300 group-hover:scale-110"
                    style={{ boxShadow: `0 0 20px ${skill.color}15` }}
                  >
                    {skill.icon ? (
                      <img
                        src={`${deviconBase}/${skill.icon}`}
                        alt={skill.name}
                        className="h-8 w-8 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : null}
                    <span
                      className={cn(
                        'font-display text-xl font-bold',
                        !skill.icon ? 'block' : 'hidden'
                      )}
                      style={{ color: skill.color }}
                    >
                      {skill.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                    {skill.name}
                  </span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
