import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { Particles } from './components/layout/Particles';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';
import { Statistics } from './components/sections/Statistics';
import { Contact } from './components/sections/Contact';
import { navLinks, personalInfo } from './data/portfolio';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-neon-violet via-neon-indigo to-neon-cyan"
      style={{ scaleX }}
    />
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>{personalInfo.fullName} | {personalInfo.title}</title>
        <meta name="description" content={`${personalInfo.fullName} — ${personalInfo.title} specializing in MERN stack, scalable APIs & modern web applications.`} />
        <meta name="keywords" content={`${personalInfo.fullName}, Full Stack Developer, MERN Stack, React, Node.js, Portfolio`} />
        <meta property="og:title" content={`${personalInfo.fullName} | ${personalInfo.title}`} />
        <meta property="og:description" content={`${personalInfo.title} specializing in MERN stack & scalable APIs`} />
      </Helmet>

      <div className="relative min-h-screen bg-dark-950 text-slate-50">
        <ScrollProgress />
        <CustomCursor />
        <Particles />
        <Navbar activeSection={activeSection} />

        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Testimonials />
          <Statistics />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
