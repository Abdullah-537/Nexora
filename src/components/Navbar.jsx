import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Background opacity transitions from 0 to 1 over 80px scroll
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  // Border opacity transitions from 0 to 0.08 over 80px scroll
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.08]);

  const links = ['Home', 'Courses', 'Pillars', 'Why Us', 'Projects', 'Contact'];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          background: useTransform(bgOpacity, (v) => `rgba(3, 11, 24, ${v * 0.7})`),
          backdropFilter: useTransform(bgOpacity, (v) => `blur(${v * 20}px)`),
          borderBottom: useTransform(borderOpacity, (v) => `1px solid rgba(255, 255, 255, ${v})`),
        }}
      >
        {/* Scroll Progress Bar */}
        <motion.div 
          className="absolute top-0 left-0 h-[2px] bg-accent1 origin-left"
          style={{ 
            width: '100%',
            scaleX: useTransform(scrollY, (v) => {
              const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
              return maxScroll > 0 ? v / maxScroll : 0;
            })
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 z-50 cursor-pointer" data-magnetic>
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Crystal N SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,255,209,0.4)] animate-pulse">
                <defs>
                  <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#00FFD1" />
                    <stop offset="100%" stopColor="#030B18" />
                  </linearGradient>
                </defs>
                <path d="M20,80 L20,20 L40,20 L80,60 L80,20 L100,20 L100,80 L80,80 L40,40 L40,80 Z" fill="url(#crystalGrad)" />
                <path d="M20,20 L40,20 L80,60 L40,40 Z" fill="rgba(255,255,255,0.4)" />
                <path d="M80,20 L100,20 L100,80 L80,60 Z" fill="rgba(0,255,209,0.3)" />
              </svg>
            </div>
            <span className="font-syne font-bold text-xl tracking-wide text-white">NEXORA'S</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="font-inter text-sm text-textSecondary hover:text-white transition-colors animated-underline py-1"
                data-magnetic
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden md:block">
            <button 
              className="btn-shimmer px-6 py-2.5 rounded-full border border-accent2 text-accent2 font-syne font-medium text-sm hover:bg-accent2 hover:text-primary transition-all duration-300"
              data-magnetic
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : '-100%'
        }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="flex flex-col items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="font-syne text-3xl font-bold text-white hover:text-accent1 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                y: isMobileMenuOpen ? 0 : 20 
              }}
              transition={{ delay: isMobileMenuOpen ? 0.1 * i + 0.2 : 0 }}
            >
              {link}
            </motion.a>
          ))}
          <motion.button
            className="mt-4 px-8 py-4 rounded-full border border-accent2 text-accent2 font-syne font-bold text-xl hover:bg-accent2 hover:text-primary transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0, 
              y: isMobileMenuOpen ? 0 : 20 
            }}
            transition={{ delay: isMobileMenuOpen ? 0.7 : 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Enroll Now
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
