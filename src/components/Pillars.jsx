import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const pillars = [
  { id: 1, title: 'Research & Sourcing', angle: -90, desc: 'Find Winning Niches\nGlobal Product Sourcing\nSupplier Negotiation' },
  { id: 2, title: 'Platform Optimization', angle: -18, desc: 'Audience Segmentation\nHigh-ROI Ads (PPC, Social)\nAnalytics Interpretation' },
  { id: 3, title: 'Data-Driven Marketing', angle: 54, desc: 'Audience Segmentation\nHigh-ROI Ads (PPC, Social)\nAnalytics Interpretation' },
  { id: 4, title: 'Operations & Logistics', angle: 126, desc: 'Inventory Management\nOrder Fulfillment Systems\nGlobal Shipping Strategy' },
  { id: 5, title: 'Customer Lifetime Value', angle: 198, desc: 'CRM Strategies\nLoyalty Programs\nRetention Optimization' },
];

export default function Pillars() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  const radius = window.innerWidth < 768 ? 140 : 250;
  const centerNodeSize = 100;
  const nodeSize = 60;

  return (
    <section id="pillars" className="relative py-32 bg-primary overflow-hidden min-h-[1000px] flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,209,0.05)_0%,rgba(3,11,24,1)_70%)]" />

      <div className="absolute top-20 text-center z-10 w-full px-6">
        <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
          The 5 <span className="text-accent1">Pillars</span> of Success
        </h2>
        <p className="font-inter text-textSecondary max-w-2xl mx-auto">
          Our methodology is built on these foundational pillars, ensuring a robust and scalable eCommerce business.
        </p>
      </div>

      <div ref={containerRef} className="relative w-full max-w-4xl h-[600px] mx-auto mt-20 flex items-center justify-center">
        
        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
          {pillars.map((pillar, i) => {
            const rad = (pillar.angle * Math.PI) / 180;
            const x2 = 50 + (Math.cos(rad) * radius) / (containerRef.current?.offsetWidth || 1) * 100;
            const y2 = 50 + (Math.sin(rad) * radius) / (containerRef.current?.offsetHeight || 1) * 100;
            
            // Adjust to get absolute pixel values for the SVG viewBox (which we can set to center 0,0)
            return null; // We'll do SVG lines with fixed viewBox instead
          })}
        </svg>

        {/* Let's build a dedicated SVG for the lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-400 -400 800 800">
          {pillars.map((pillar, i) => {
            const rad = (pillar.angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            
            return (
              <motion.line
                key={`line-${i}`}
                x1="0"
                y1="0"
                x2={x}
                y2={y}
                className="orbit-path"
                initial={{ strokeDashoffset: 1000 }}
                animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 1000 }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: "easeInOut" }}
              />
            );
          })}
        </svg>

        {/* Central Node */}
        <motion.div
          className="absolute z-20 w-[100px] h-[100px] rounded-full bg-primary border border-accent1 shadow-[0_0_30px_rgba(0,255,209,0.3)] flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
        >
          <div className="w-[80px] h-[80px] rounded-full glass-card flex items-center justify-center">
            <span className="font-syne font-bold text-xl text-white">CORE</span>
          </div>
        </motion.div>

        {/* Orbiting Nodes */}
        {pillars.map((pillar, i) => {
          const rad = (pillar.angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <motion.div
              key={pillar.id}
              className="absolute z-30 group"
              style={{
                x,
                y,
                marginLeft: -nodeSize / 2,
                marginTop: -nodeSize / 2,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.2, type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="relative w-[60px] h-[60px] rounded-full glass-card flex items-center justify-center cursor-pointer border border-[rgba(0,255,209,0.3)] hover:border-accent1 hover:shadow-[0_0_20px_rgba(0,255,209,0.4)] transition-all">
                <span className="font-syne font-bold text-lg text-white">{pillar.id}</span>
                
                {/* Tooltip */}
                <div className={`absolute w-64 p-4 left-1/2 -translate-x-1/2 glass-card rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none ${pillar.angle === -90 ? 'top-full mt-4 -translate-y-2 group-hover:translate-y-0' : 'bottom-full mb-4 translate-y-2 group-hover:translate-y-0'}`}>
                  <h4 className="font-syne font-bold text-accent1 mb-2">{pillar.title}</h4>
                  <ul className="text-sm font-inter text-textSecondary space-y-1">
                    {pillar.desc.split('\n').map((line, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-accent2 mt-1">•</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Tooltip Arrow */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[rgba(3,11,24,0.9)] backdrop-blur-md rotate-45 ${pillar.angle === -90 ? 'bottom-full -mb-1.5 border-l border-t border-[rgba(255,255,255,0.08)]' : 'top-full -mt-1.5 border-r border-b border-[rgba(255,255,255,0.08)]'}`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
