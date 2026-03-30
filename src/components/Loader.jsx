import React, { useEffect, useState } from 'react';
import './Loader.css';

function Loader({ onDone }) {
  const [phase, setPhase] = useState('in'); // 'in' | 'out'

  useEffect(() => {
    // Hold for 1.1s, then start fade-out
    const hold = setTimeout(() => setPhase('out'), 1100);
    // Notify parent after fade completes (0.5s)
    const done = setTimeout(() => onDone?.(), 1650);
    return () => { clearTimeout(hold); clearTimeout(done); };
  }, [onDone]);

  return (
    <div className={`loader-root loader--${phase}`}>
      <div className="loader-inner">
        <div className="loader-wordmark">
          <span className="loader-dc">DC</span>
          <span className="loader-slash">/</span>
        </div>
        <div className="loader-bar-track">
          <div className="loader-bar-fill" />
        </div>
        <p className="loader-hint">Full Stack Developer</p>
      </div>
    </div>
  );
}

export default Loader;
