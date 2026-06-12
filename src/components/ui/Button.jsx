import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  external = false,
  download = false,
  onClick,
  ...props
}) {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-violet focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950',
    size === 'sm' && 'px-4 py-2 text-sm',
    size === 'md' && 'px-6 py-3 text-base',
    size === 'lg' && 'px-8 py-4 text-lg',
    variant === 'primary' && [
      'bg-gradient-to-r from-neon-violet to-neon-indigo text-white',
      'hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-[1.02]',
      'active:scale-[0.98]',
    ],
    variant === 'outline' && [
      'border border-white/20 bg-white/5 text-white',
      'hover:border-neon-violet/50 hover:bg-neon-violet/10',
      'active:scale-[0.98]',
    ],
    variant === 'ghost' && [
      'text-slate-300 hover:text-white hover:bg-white/5',
    ],
    className
  );

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      className={baseStyles}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      download={download}
      onClick={onClick}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
