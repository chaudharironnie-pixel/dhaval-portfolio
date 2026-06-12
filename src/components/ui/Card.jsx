import { useRef, useState } from 'react';
import { cn } from '../../lib/utils';

export function Card({ children, className, glow = false, hover = false, ...props }) {
  const ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    if (!glow || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
      y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative rounded-2xl border border-white/10 bg-dark-800/50 backdrop-blur-sm transition-all duration-300',
        glow && 'glow-card',
        hover && 'hover:border-white/20 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1',
        className
      )}
      style={
        glow && mousePos
          ? { '--mouse-x': mousePos.x, '--mouse-y': mousePos.y }
          : undefined
      }
      {...props}
    >
      {children}
    </div>
  );
}
