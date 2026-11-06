import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-[#FFFFFF] font-sans antialiased selection:bg-primary/70 relative">
      {/* 2px Gradient Accent Line across top (Davin Reference Style) */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-[linear-gradient(90deg,#6C63FF,#00E5FF,#FF4D9D)]"
        aria-hidden="true"
      />

      {/* Background Grid Pattern & Radial Glow (Davin Reference Style) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-grid-pattern opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-radial-glow"
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
