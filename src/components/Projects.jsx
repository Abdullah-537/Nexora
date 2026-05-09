import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Students in Live Lectures',
    category: 'Training',
    desc: 'Interactive classroom sessions where students learn hands-on eBay strategies, account management, and digital marketing from industry experts.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 2,
    title: 'eBay Store Success',
    category: 'eCommerce',
    desc: 'Our graduates running profitable eBay stores with optimized listings and global reach.',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 3,
    title: 'Social Media Campaigns',
    category: 'Branding',
    desc: 'Real brand builds across Instagram, Facebook, and TikTok driving measurable conversions.',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 4,
    title: 'AI Video Production',
    category: 'AI Tools',
    desc: 'Students creating viral marketing content using cutting-edge AI video and animation tools.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 5,
    title: 'Team Collaboration',
    category: 'Mentorship',
    desc: '1-on-1 mentorship sessions and team projects that build real-world business skills.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 6,
    title: 'Graduate Success Stories',
    category: 'Results',
    desc: 'From zero to earning — our graduates share their journey to financial independence.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-2 md:row-span-1'
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative bg-primary py-32 px-6 md:px-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(108,99,255,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,209,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent1 text-[13px] tracking-[0.2em] font-syne font-semibold uppercase">Our Work In Action</span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mt-4">
            Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent3 to-accent1">Showcase</span>
          </h2>
          <p className="font-inter text-textSecondary mt-4 max-w-2xl">
            Real results from real students. See how our training transforms beginners into successful digital entrepreneurs.
          </p>
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`relative rounded-2xl overflow-hidden cursor-pointer group ${project.span}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={() => setSelected(project)}
          >
            {/* Image */}
            <div className="absolute inset-0 bg-[#0a1628]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                loading={index < 3 ? "eager" : "lazy"}
              />
            </div>

            {/* Default Overlay - Lighter */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,11,24,0.75)] via-[rgba(3,11,24,0.15)] to-transparent transition-opacity duration-500" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[rgba(3,11,24,0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <span className="text-accent1 text-xs font-inter font-semibold uppercase tracking-wider mb-2">{project.category}</span>
              <h3 className="font-syne font-bold text-xl text-white mb-2">{project.title}</h3>
              <p className="font-inter text-textSecondary text-sm leading-relaxed line-clamp-3">{project.desc}</p>
              <div className="flex items-center gap-2 mt-4 text-accent1 font-inter text-sm font-medium">
                View Details <ExternalLink size={14} />
              </div>
            </div>

            {/* Bottom Label (always visible) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10 group-hover:opacity-0 transition-opacity duration-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent1" />
                <span className="font-inter text-white/90 text-sm font-medium">{project.title}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[rgba(3,11,24,0.95)] backdrop-blur-xl"
              onClick={() => setSelected(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative z-10 max-w-4xl w-full glass-card rounded-3xl overflow-hidden"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 25 }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/10"
              >
                <X size={18} />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-3/5 h-[300px] md:h-[450px] relative">
                  <img 
                    src={selected.image} 
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(3,11,24,0.3)]" />
                </div>

                {/* Details */}
                <div className="md:w-2/5 p-8 flex flex-col justify-center">
                  <span className="text-accent1 text-xs font-inter font-semibold uppercase tracking-wider mb-3">{selected.category}</span>
                  <h3 className="font-syne font-bold text-2xl text-white mb-4">{selected.title}</h3>
                  <p className="font-inter text-textSecondary leading-relaxed mb-8">{selected.desc}</p>
                  <a href="#courses" className="inline-flex items-center gap-2 bg-accent1 text-primary px-6 py-3 rounded-full font-syne font-bold text-sm hover:scale-105 transition-transform" onClick={() => setSelected(null)}>
                    Learn This Skill <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
