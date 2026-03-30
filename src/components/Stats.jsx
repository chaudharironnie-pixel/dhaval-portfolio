import React, { useEffect, useRef, useState } from 'react';
import '../styles/Stats.css';

const STATS = [
  { emoji: '🚀', value: 5,  suffix: '+', label: 'Projects Built'      },
  { emoji: '🔐', value: 10, suffix: '+', label: 'APIs Developed'       },
  { emoji: '💻', value: 15, suffix: '+', label: 'Technologies Used'    },
  { emoji: '☕', value: 1,  suffix: 'k+', label: 'Cups of Coffee'      },
];

function useCountUp(target, duration = 1400, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return count;
}

function StatCard({ emoji, value, suffix, label, started, delay }) {
  const count = useCountUp(value, 1200, started);
  return (
    <div className="stat-card" style={{ animationDelay: `${delay}ms` }}>
      <span className="stat-emoji">{emoji}</span>
      <span className="stat-value">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Stats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-wrapper" ref={ref}>
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <StatCard key={i} {...s} started={started} delay={i * 100} />
        ))}
      </div>
    </div>
  );
}

export default Stats;
