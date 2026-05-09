import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee() {
  const text = "eBay Training · AI Video · Social Branding · Account Management · eCommerce Mentorship · Digital Skills · Build Future · Earn Online · ";
  
  return (
    <div className="w-full h-[60px] bg-gradient-to-r from-primary via-[#041226] to-primary border-y border-glass overflow-hidden flex items-center relative group">
      <div className="absolute inset-0 bg-accent1 opacity-5"></div>
      
      <motion.div
        className="whitespace-nowrap flex text-accent1 font-syne font-medium text-lg tracking-wider"
        animate={{
          x: [0, -1035], // Approximate width of one repetition, we'll use a better approach with CSS or continuous animation
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: 'fit-content' }}
      >
        <span className="inline-block px-4 group-hover:[animation-direction:reverse] transition-all duration-300">
          {/* We'll use CSS animation for easier reverse on hover */}
          <style>
            {`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                display: inline-block;
                white-space: nowrap;
                animation: marquee 40s linear infinite;
              }
              .marquee-container:hover .animate-marquee {
                animation-direction: reverse;
              }
            `}
          </style>
        </span>
      </motion.div>
      
      <div className="marquee-container w-full h-full flex items-center overflow-hidden">
        <div className="animate-marquee text-accent1 font-syne font-medium text-lg tracking-wider">
          {text} {text} {text} {text}
        </div>
      </div>
    </div>
  );
}
