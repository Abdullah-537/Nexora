import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, UserCheck, Megaphone, Video, Users, GraduationCap, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: '01',
    icon: <ShoppingCart size={28} className="text-accent1" />,
    title: 'eBay Business Training',
    desc: 'Master product research, listing optimization, and store scaling. Build a profitable eBay business from scratch with proven strategies.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6c88a62?q=80&w=2070&auto=format&fit=crop',
    duration: '8 Weeks',
    level: 'Beginner to Pro',
    tag: 'Best Seller',
    featured: true
  },
  {
    id: '02',
    icon: <UserCheck size={28} className="text-accent1" />,
    title: 'Account Management',
    desc: 'Handle suspensions, maintain metrics, and grow premium accounts. Professional strategies for long-term seller health.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    duration: '6 Weeks',
    level: 'Intermediate',
    tag: 'In Demand',
    featured: false
  },
  {
    id: '03',
    icon: <Megaphone size={28} className="text-accent1" />,
    title: 'Social Media Branding',
    desc: 'Build authority across all platforms. Create a personal or business brand that converts followers into loyal customers.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
    duration: '6 Weeks',
    level: 'All Levels',
    tag: 'Popular',
    featured: true
  },
  {
    id: '04',
    icon: <Video size={28} className="text-accent1" />,
    title: 'AI Video & Animation',
    desc: 'Create stunning AI-generated content and viral marketing videos using cutting-edge AI tools and animation techniques.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2070&auto=format&fit=crop',
    duration: '8 Weeks',
    level: 'Beginner',
    tag: 'New',
    featured: false
  },
  {
    id: '05',
    icon: <Users size={28} className="text-accent1" />,
    title: 'eCommerce Mentorship',
    desc: '1-to-1 guidance for global success. Personalized roadmaps with industry veterans who\'ve built 7-figure businesses.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    duration: '12 Weeks',
    level: 'Advanced',
    tag: 'Premium',
    featured: true
  },
  {
    id: '06',
    icon: <GraduationCap size={28} className="text-accent1" />,
    title: 'Digital Marketing Mastery',
    desc: 'From SEO to paid ads, master the full digital marketing stack. Drive traffic, generate leads, and scale revenue.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    duration: '10 Weeks',
    level: 'Intermediate',
    tag: 'Comprehensive',
    featured: false
  }
];

export default function Courses() {
  return (
    <section id="courses" className="relative bg-primary py-32 px-6 md:px-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,255,209,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(108,99,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent1 text-[13px] tracking-[0.2em] font-syne font-semibold uppercase">Our Curriculum</span>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mt-3">
            Master The <span className="text-accent1">Skills</span>
          </h2>
          <p className="font-inter text-textSecondary mt-4 max-w-2xl">
            Industry-focused courses designed to take you from beginner to expert. Each program includes hands-on projects, mentorship, and real-world applications.
          </p>
        </motion.div>
      </div>

      {/* Course Grid - Bento style */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${course.featured ? 'md:row-span-2' : ''}`}
            style={{
              transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
          >
            {/* Card height */}
            <div className={`relative ${course.featured ? 'h-[400px] md:h-full min-h-[500px]' : 'h-[400px]'}`}>
              {/* Hero Image */}
              <div className="absolute inset-0 z-0 bg-[#0a1628]">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>

              {/* Gradient Overlays - Lighter to show images */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,11,24,0.90)] via-[rgba(3,11,24,0.40)] to-[rgba(3,11,24,0.10)] z-[1]" />
              <div className="absolute inset-0 bg-accent1 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 z-[2]" />

              {/* Top Row: Tag + Number */}
              <div className="absolute top-5 left-6 right-6 z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-inter font-semibold bg-accent2/20 text-accent2 border border-accent2/30 backdrop-blur-sm">
                  {course.tag}
                </span>
                <span className="font-syne font-bold text-4xl text-white/10 group-hover:text-accent1/20 transition-colors duration-500">
                  {course.id}
                </span>
              </div>

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
                {/* Icon + Meta Row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[rgba(0,255,209,0.15)] flex items-center justify-center border border-[rgba(0,255,209,0.25)] group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                    {course.icon}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-inter font-medium bg-white/10 text-white/80 backdrop-blur-sm border border-white/10">
                      {course.duration}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-inter font-medium bg-white/10 text-white/80 backdrop-blur-sm border border-white/10">
                      {course.level}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-syne font-bold text-xl md:text-2xl text-white mb-3 group-hover:text-accent1 transition-colors duration-300">
                  {course.title}
                </h3>
                
                <p className="font-inter text-textSecondary text-sm leading-relaxed mb-5">
                  {course.desc}
                </p>

                <a href="#admissions" className="inline-flex items-center gap-2 text-white font-inter font-medium text-sm group-hover:text-accent1 transition-colors">
                  <span className="animated-underline">Explore Course</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <a href="#admissions" className="inline-flex items-center gap-3 bg-accent2 text-primary px-8 py-4 rounded-full font-syne font-bold hover:scale-105 transition-transform group">
          Enroll In Any Course
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
