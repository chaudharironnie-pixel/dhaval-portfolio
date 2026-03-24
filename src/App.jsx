import React, { useEffect } from 'react';
import AboutMe from './AboutMe';
import Cursor from './Cursor';
import './App.css';

function App() {
  // scroll fade-in animation
  useEffect(() => {
    const els = document.querySelectorAll('.section-anchor');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Cursor />
      <AboutMe />
    </div>
  );
}

export default App;
