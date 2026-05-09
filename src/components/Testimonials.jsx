import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Ali Raza", city: "Lahore", quote: "The eBay training completely changed my life. I now run a profitable store earning more than my previous full-time job.", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop", course: "eBay Business" },
  { id: 2, name: "Sarah Khan", city: "Karachi", quote: "NEXORA'S mentorship is unmatched. The 1-on-1 guidance helped me scale my brand to 6 figures in just 8 months.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop", course: "Social Media Branding" },
  { id: 3, name: "Usman Tariq", city: "Islamabad", quote: "The AI Video course is mind-blowing. I create stunning content for international clients now. Highly recommended!", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop", course: "AI Video & Animation" },
  { id: 4, name: "Fatima Noor", city: "Faisalabad", quote: "From zero knowledge to managing multiple client accounts. This academy truly builds futures.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop", course: "Account Management" },
  { id: 5, name: "Ahmed Ali", city: "Multan", quote: "The actionable strategies and supportive community make this the best eCommerce academy in Pakistan.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop", course: "eCommerce Mentorship" }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x;
    if (swipe < -50) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else if (swipe > 50) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const goTo = (index) => setCurrentIndex(index);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="bg-primary py-32 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,209,0.04)_0%,rgba(3,11,24,0)_60%)] pointer-events-none" />

      <div className="text-center mb-20 relative z-10 px-6">
        <motion.span 
          className="text-accent1 text-[13px] tracking-[0.2em] font-syne font-semibold uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.span>
        <motion.h2 
          className="font-syne font-bold text-4xl md:text-5xl text-white mb-4 mt-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Success <span className="text-accent1">Stories</span>
        </motion.h2>
        <p className="font-inter text-textSecondary max-w-2xl mx-auto">
          Hear from our students who turned their efforts into real dollars.
        </p>
      </div>

      <div className="relative h-[450px] w-full flex items-center justify-center perspective-[1200px]">
        {/* Nav Arrows */}
        <button onClick={goPrev} className="absolute left-4 md:left-12 z-40 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-accent1 hover:border-accent1/30 transition-colors border border-white/10">
          <ChevronLeft size={20} />
        </button>
        <button onClick={goNext} className="absolute right-4 md:right-12 z-40 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-accent1 hover:border-accent1/30 transition-colors border border-white/10">
          <ChevronRight size={20} />
        </button>

        <div className="relative w-full max-w-7xl mx-auto flex justify-center items-center h-full">
          {testimonials.map((testimonial, index) => {
            let diff = index - currentIndex;
            if (diff < -Math.floor(testimonials.length / 2)) diff += testimonials.length;
            if (diff > Math.floor(testimonials.length / 2)) diff -= testimonials.length;

            const isActive = diff === 0;
            const xOffset = diff * 200;
            const zOffset = Math.abs(diff) * -150;
            const scale = isActive ? 1 : 1 - Math.abs(diff) * 0.15;
            const opacity = isActive ? 1 : 1 - Math.abs(diff) * 0.4;
            const rotateY = diff * -15;

            return (
              <motion.div
                key={testimonial.id}
                className={`absolute w-[340px] md:w-[420px] glass-card rounded-2xl p-8 cursor-grab active:cursor-grabbing ${isActive ? 'z-30' : 'z-10'}`}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  scale: scale,
                  opacity: opacity,
                  rotateY: rotateY,
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                style={{
                  filter: isActive ? 'blur(0px)' : `blur(${Math.abs(diff) * 2}px)`,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote size={24} className="text-accent1/30" />
                </div>

                <div className="flex gap-1 mb-5 text-accent2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                
                <p className="font-inter text-textPrimary text-lg leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent1/50">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-white text-lg">{testimonial.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="font-inter text-textSecondary text-sm">{testimonial.city}</span>
                      <span className="text-textSecondary/40">·</span>
                      <span className="font-inter text-accent1 text-xs font-medium">{testimonial.course}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-accent1 w-6' : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
