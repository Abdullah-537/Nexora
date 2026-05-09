import React, { useRef, useMemo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className, delay = 0 }) => {
  const words = text.split(" ");
  return (
    <div className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1],
            delay: delay + i * 0.04
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

const FloatingOrb = ({ size, color, initialX, initialY, duration }) => (
  <motion.div
    className="absolute rounded-full blur-[100px] pointer-events-none"
    style={{
      width: size,
      height: size,
      background: color,
      left: `${initialX}%`,
      top: `${initialY}%`,
    }}
    animate={{
      x: [0, 80, -60, 40, 0],
      y: [0, -60, 40, -80, 0],
      scale: [1, 1.2, 0.9, 1.1, 1],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAdmissions = () => {
    const el = document.getElementById('admissions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-primary flex items-center justify-center">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark base */}
        <div className="absolute inset-0 bg-primary" />
        
        {/* Animated video-style gradient mesh */}
        <div className="hero-gradient-mesh" />
        
        {/* Floating Orbs */}
        <FloatingOrb size="500px" color="rgba(0,255,209,0.12)" initialX={10} initialY={20} duration={20} />
        <FloatingOrb size="400px" color="rgba(108,99,255,0.10)" initialX={70} initialY={60} duration={25} />
        <FloatingOrb size="350px" color="rgba(245,200,66,0.08)" initialX={40} initialY={30} duration={18} />
        <FloatingOrb size="300px" color="rgba(0,255,209,0.06)" initialX={80} initialY={10} duration={22} />
        <FloatingOrb size="450px" color="rgba(108,99,255,0.05)" initialX={20} initialY={70} duration={28} />

        {/* Grid overlay */}
        <div className="absolute inset-0 hero-grid opacity-[0.03]" />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(3,11,24,0.8)_100%)]" />
      </div>

      {/* Animated lines / tech decoration */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-accent1/20 to-transparent"
          style={{ top: '25%', width: '100%' }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-accent3/15 to-transparent"
          style={{ top: '75%', width: '100%' }}
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-accent2/10 to-transparent"
          style={{ left: '20%', height: '100%' }}
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-accent1/10 to-transparent"
          style={{ left: '80%', height: '100%' }}
          animate={{ y: ['100%', '-100%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Giant Crystal N Logo with Parallax */}
      <motion.div 
        className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          style={{
            rotateX: mousePos.y * -8,
            rotateY: mousePos.x * 8,
          }}
          className="w-[50vw] h-[50vw] max-w-[700px] max-h-[700px]"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_80px_rgba(0,255,209,0.15)]">
            <defs>
              <linearGradient id="heroCrystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#00FFD1" />
                <stop offset="100%" stopColor="#030B18" />
              </linearGradient>
            </defs>
            <path d="M20,80 L20,20 L40,20 L80,60 L80,20 L100,20 L100,80 L80,80 L40,40 L40,80 Z" fill="url(#heroCrystalGrad)" opacity="0.15" />
            <path d="M20,20 L40,20 L80,60 L40,40 Z" fill="rgba(255,255,255,0.05)" />
            <path d="M80,20 L100,20 L100,80 L80,60 Z" fill="rgba(0,255,209,0.03)" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-accent1 text-[13px] tracking-[0.2em] font-syne font-semibold mb-6 uppercase"
        >
          NEXORA'S · FUTURE FOCUS BRAND
        </motion.div>

        <h1 className="font-syne font-bold text-5xl md:text-7xl lg:text-[80px] leading-[1.1] mb-6">
          <AnimatedText text="Build Your Future" delay={0.6} className="text-white" />
          <AnimatedText text="With Digital Skills" delay={0.8} className="text-transparent bg-clip-text bg-gradient-to-r from-accent2 to-[#FF9D00]" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-textSecondary text-lg md:text-xl font-inter max-w-2xl mb-12"
        >
          Learn. Earn. Grow — Pakistan's most ambitious eCommerce academy
        </motion.p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {[
            { value: '500+', label: 'Students' },
            { value: '6', label: 'Courses' },
            { value: '1-on-1', label: 'Mentorship' },
            { value: '$$$', label: 'Real Earnings' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
              className="glass-card rounded-xl px-5 py-3 text-center border border-white/5"
            >
              <div className="font-syne font-bold text-lg md:text-xl text-accent1">{stat.value}</div>
              <div className="font-inter text-textSecondary text-xs mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button 
            onClick={scrollToAdmissions}
            className="group relative bg-accent2 text-primary px-8 py-4 rounded-full font-syne font-bold hover:scale-105 transition-transform overflow-hidden" 
            data-magnetic
          >
            <span className="relative z-10">Start Your Journey →</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
          <button 
            onClick={scrollToCourses}
            className="border border-accent1 text-accent1 px-8 py-4 rounded-full font-syne font-bold hover:bg-accent1 hover:text-primary transition-all" 
            data-magnetic
          >
            View Courses
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer z-10"
        onClick={scrollToCourses}
      >
        <div className="relative w-24 h-24 flex items-center justify-center">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full text-textSecondary"
          >
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
            <text className="text-[10px] font-inter uppercase tracking-widest" fill="currentColor">
              <textPath href="#circlePath">
                Scroll To Explore · Scroll To Explore ·
              </textPath>
            </text>
          </motion.svg>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-accent1"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
