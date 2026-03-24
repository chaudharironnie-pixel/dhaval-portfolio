import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Interest from './components/Interest';
import './styles/Main.css';

function AboutMe() {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-container">

        {/* Hero + Navbar */}
        <section id="about">
          <Header />
        </section>

        {/* Skills + Education + Resume */}
        <section id="skills" className="section-anchor">
          <div className="card-row">

            {/* Skills column */}
            <div className="col-with-heading">
              <div className="section-heading">
                <span className="section-tag">What I Know</span>
                <h2>Skills & Technologies</h2>
              </div>
              <Skills />
            </div>

            {/* Education + Resume column */}
            <div className="col-with-heading">
              <div className="section-heading">
                <span className="section-tag">Where I Studied</span>
                <h2>Education</h2>
              </div>
              <Education />

              <div className="section-heading" style={{ marginTop: '0.5rem' }}>
                <span className="section-tag">My CV</span>
                <h2>Resume</h2>
              </div>
              <Resume />
            </div>

          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section-anchor">
          <div className="section-heading">
            <span className="section-tag">What I Built</span>
            <h2>Projects</h2>
          </div>
          <Projects />
        </section>

        {/* Experience */}
        <section id="experience" className="section-anchor">
          <div className="section-heading">
            <span className="section-tag">Where I Worked</span>
            <h2>Experience</h2>
          </div>
          <Experience />
        </section>

        {/* Details */}
        <Interest />

      </div>
    </div>
  );
}

export default AboutMe;
