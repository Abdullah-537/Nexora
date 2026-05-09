import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const benefits = [
  { 
    num: '01',
    title: "Accredited AI Certifications", 
    desc: "Gain industry-recognized credentials that set you apart in the modern job market. Our certifications are valued by employers worldwide.", 
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    highlight: "Industry Recognized"
  },
  { 
    num: '02',
    title: "Cutting-Edge Tech Access", 
    desc: "Learn with the latest tools and software used by top-tier professionals. Stay ahead of the curve with hands-on tool training.", 
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    highlight: "Latest Tools"
  },
  { 
    num: '03',
    title: "Global Networking", 
    desc: "Connect with industry leaders, mentors, and peers from around the world. Build relationships that accelerate your career.", 
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    highlight: "Worldwide Community"
  },
  { 
    num: '04',
    title: "Future-Proof Career Guidance", 
    desc: "Get personalized advice to navigate the evolving digital landscape. Our mentors help you build a career that lasts.", 
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    highlight: "Career Focused"
  }
];

export default function WhyUs() {
  const quoteRef = useRef(null);
  const isQuoteInView = useInView(quoteRef, { once: true, margin: "-10%" });
  const quoteText = "Unleash Creativity. Master AI Tools For Success.";

  return (
    <section id="why-us" className="bg-primary relative w-full pt-32 pb-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Left Side Sticky */}
        <div className="lg:w-1/2 relative">
          <div className="sticky top-40">
            <motion.h2 
              className="font-syne font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Partner <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent3">With Us?</span>
            </motion.h2>
            <p className="mt-8 font-inter text-textSecondary text-lg max-w-md">
              We don't just teach theory. We build practical skills that translate directly into market value and revenue.
            </p>

            {/* Stats Mini Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
              {[
                { value: '95%', label: 'Job Placement' },
                { value: '500+', label: 'Graduates' },
                { value: '24/7', label: 'Support' },
                { value: '50+', label: 'Industry Partners' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className="glass-card rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="font-syne font-bold text-2xl text-accent1">{stat.value}</div>
                  <div className="font-inter text-textSecondary text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group min-h-[260px] flex flex-col justify-end cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
            >
              {/* Background Image - Much more visible */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105 transform"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,11,24,0.95)] via-[rgba(3,11,24,0.6)] to-[rgba(3,11,24,0.3)] z-[1]" />
              <div className="absolute inset-0 bg-accent1 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 z-[2]" />

              {/* Left Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent1 to-accent3 z-10" />

              {/* Number Badge */}
              <div className="absolute top-4 left-6 z-10">
                <span className="font-syne font-bold text-5xl text-white/10 group-hover:text-accent1/20 transition-colors duration-500">{benefit.num}</span>
              </div>

              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-inter font-semibold bg-accent3/20 text-accent3 border border-accent3/30 backdrop-blur-sm">
                  {benefit.highlight}
                </span>
              </div>
              
              <div className="relative z-10 p-8">
                <h3 className="font-syne font-bold text-2xl text-white mb-3 flex items-center gap-3 group-hover:text-accent1 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="font-inter text-textSecondary leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pull Quote */}
      <div className="max-w-5xl mx-auto mt-40 mb-20 text-center" ref={quoteRef}>
        <h3 className="font-syne italic text-3xl md:text-4xl lg:text-[42px] text-white leading-relaxed">
          "
          {quoteText.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={isQuoteInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.05, delay: index * 0.04 }}
            >
              {char}
            </motion.span>
          ))}
          "
        </h3>
      </div>
    </section>
  );
}
