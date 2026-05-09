import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ParticleBurst = ({ trigger }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#00FFD1', '#F5C842', '#FFFFFF', '#6C63FF'];

    for (let i = 0; i < 200; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 20,
        vy: (Math.random() - 0.5) * 20,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: Math.random() * 0.02 + 0.01,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let active = false;
      
      particles.forEach((p) => {
        if (p.alpha <= 0) return;
        active = true;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      });

      if (active) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [trigger]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
};

const AnimatedText = ({ text, trigger }) => {
  const words = text.split(" ");
  return (
    <div className="overflow-hidden mb-6 flex flex-wrap justify-center">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em] font-syne font-bold text-5xl md:text-[80px] leading-tight text-white"
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={trigger ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            type: "spring",
            stiffness: 150,
            damping: 12
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default function AdmissionsCTA() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-30%" });
  
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set deadline to 14 days from now for demo
    const deadline = new Date().getTime() + 14 * 24 * 60 * 60 * 1000;
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="admissions" ref={containerRef} className="relative w-full h-screen bg-[#020610] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
          alt="Students in lecture"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#020610] via-[rgba(2,6,16,0.8)] to-[rgba(2,6,16,0.6)] z-[1]" />
      {/* Background Burst */}
      <ParticleBurst trigger={isInView} />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        
        <AnimatedText text="ADMISSIONS NOW OPEN" trigger={isInView} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent1 text-xl md:text-2xl font-inter tracking-wide mb-2">
            Limited seats. Real skills. Real earnings.
          </p>
          <div className="inline-flex flex-wrap justify-center gap-3 md:gap-6 mt-4">
            <span className="bg-[rgba(0,255,209,0.1)] border border-[rgba(0,255,209,0.3)] text-accent1 px-4 py-2 rounded-full font-inter text-sm md:text-base">
              Duration: 2 Months
            </span>
            <span className="bg-[rgba(245,200,66,0.1)] border border-[rgba(245,200,66,0.3)] text-accent2 px-4 py-2 rounded-full font-inter text-sm md:text-base">
              On-Campus Classes Only
            </span>
          </div>
        </motion.div>
        
        {/* Countdown */}
        <motion.div 
          className="flex gap-4 md:gap-8 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-16 h-20 md:w-24 md:h-28 glass-card rounded-xl flex items-center justify-center text-4xl md:text-6xl font-syne font-bold text-white border border-[rgba(255,255,255,0.1)] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                {value.toString().padStart(2, '0')}
              </div>
              <span className="mt-4 text-textSecondary uppercase tracking-widest text-xs md:text-sm font-inter">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Giant CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative px-12 py-6 rounded-full bg-accent2 text-primary font-syne font-bold text-2xl uppercase tracking-wider overflow-hidden group shadow-[0_0_40px_rgba(245,200,66,0.3)]"
          style={{
            animation: 'heartbeat 2s infinite ease-in-out',
          }}
          data-magnetic
        >
          <span className="relative z-10">Claim Your Seat</span>
          
          {/* Ripple effect */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          
          <style>{`
            @keyframes heartbeat {
              0% { transform: scale(1); }
              15% { transform: scale(1.03); }
              30% { transform: scale(1); }
              45% { transform: scale(1.03); }
              60% { transform: scale(1); }
              100% { transform: scale(1); }
            }
          `}</style>
        </motion.button>
      </div>
    </section>
  );
}
