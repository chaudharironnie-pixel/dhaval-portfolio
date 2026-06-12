import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, visible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2"
        animate={{
          width: isHovering ? 48 : 16,
          height: isHovering ? 48 : 16,
        }}
        transition={{ duration: 0.2 }}
        style={{
          backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.5)',
          border: isHovering ? '1.5px solid rgba(139, 92, 246, 0.4)' : 'none',
          borderRadius: '50%',
          backdropFilter: isHovering ? 'blur(4px)' : 'none',
        }}
      />
    </motion.div>
  );
}
