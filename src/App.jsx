import React, { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Courses from './components/Courses';
import Pillars from './components/Pillars';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import AdmissionsCTA from './components/AdmissionsCTA';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  useLenis();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={`min-h-screen bg-primary font-inter ${reducedMotion ? 'reduced-motion' : ''}`}>
      {/* Global Noise Overlay */}
      <div className="noise-overlay" />
      
      {!reducedMotion && <Preloader />}
      
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <Courses />
        <Pillars />
        <WhyUs />
        <Projects />
        <Testimonials />
        <AdmissionsCTA />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
