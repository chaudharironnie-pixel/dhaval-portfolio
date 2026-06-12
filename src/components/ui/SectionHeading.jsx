import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function SectionHeading({ label, title, subtitle, align = 'center', className }) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      className={cn('mb-12 md:mb-16', alignClasses[align], className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span className="mb-4 inline-block rounded-full border border-neon-violet/30 bg-neon-violet/10 px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-neon-violet">
          {label}
        </span>
      )}
      {title && (
        <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
