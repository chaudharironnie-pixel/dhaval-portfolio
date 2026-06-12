import { cn } from '../../lib/utils';

export function Badge({ children, className, variant = 'default' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variant === 'default' && 'bg-neon-violet/10 text-neon-violet border border-neon-violet/20',
        variant === 'outline' && 'border border-white/20 text-slate-300',
        variant === 'filled' && 'bg-white/10 text-white',
        className
      )}
    >
      {children}
    </span>
  );
}
