import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Globe } from 'lucide-react';

const SocialIcon = ({ type }) => {
  if (type === 'facebook') return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
  if (type === 'instagram') return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
  if (type === 'linkedin') return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
  if (type === 'youtube') return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
  return null;
};

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.8, 1], [-100, 50]);

  return (
    <footer id="contact" className="relative bg-primary overflow-hidden border-t border-glass pt-32 pb-10">
      {/* Background Parallax Text */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0"
        style={{ y }}
      >
        <h1 className="font-syne font-black text-[12vw] text-white opacity-[0.03] whitespace-nowrap">
          NEXORA'S
        </h1>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Contact Block */}
        <div className="glass-card w-full max-w-4xl rounded-3xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 mb-20 shadow-2xl">
          <div className="text-center md:text-left">
            <h3 className="font-syne font-bold text-3xl text-white mb-2">Get In Touch</h3>
            <p className="font-inter text-textSecondary mb-8">Start your journey to digital freedom today.</p>
            
            <div className="flex flex-col gap-4 font-inter text-textPrimary">
              <div className="flex items-center gap-4 justify-center md:justify-start group">
                <div className="w-10 h-10 rounded-full bg-[rgba(0,255,209,0.1)] text-accent1 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span>0329-6699173</span>
                  <span className="text-textSecondary text-sm">0329-9166887 · 0306-9082366</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-px h-px md:h-40 bg-glass"></div>

          <div className="text-center">
            <h4 className="font-syne font-bold text-xl text-white mb-6">Follow Our Journey</h4>
            <div className="flex gap-4 justify-center">
              {['facebook', 'instagram', 'linkedin', 'youtube'].map((platform, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-12 h-12 rounded-full border border-glass flex items-center justify-center text-textSecondary hover:text-accent1 hover:border-accent1 hover:bg-[rgba(0,255,209,0.1)] transition-all duration-300"
                  data-magnetic
                >
                  <SocialIcon type={platform} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Tagline & Copyright */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 pt-10 border-t border-glass">
          <p className="font-inter text-textSecondary text-sm md:text-base">
            <span className="text-accent1 font-medium">Learn Skills</span> — 
            <span className="text-accent2 font-medium mx-2">Convert Efforts into Dollars</span> — 
            <span className="text-accent3 font-medium">Build Future</span>
          </p>
          <p className="font-inter text-textSecondary text-sm">
            © 2026 NEXORA'S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
