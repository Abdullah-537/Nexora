import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';

    let start = 0;
    const duration = 1200; // 1.2 seconds for counter
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progressRatio = Math.min(elapsedTime / duration, 1);
      
      // Easing out function
      const easeOutQuart = 1 - Math.pow(1 - progressRatio, 4);
      const currentProgress = Math.floor(easeOutQuart * 100);
      
      setProgress(currentProgress);

      if (progressRatio < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = '';
        }, 300); // Small pause at 100%
      }
    };

    requestAnimationFrame(animate);

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary text-textPrimary"
          initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
          exit={{ 
            clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className="flex flex-col items-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-syne font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              NEXORA'S
            </motion.h1>
            <div className="text-2xl md:text-4xl font-inter font-light tabular-nums tracking-widest text-accent1">
              {progress.toString().padStart(3, '0')}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
