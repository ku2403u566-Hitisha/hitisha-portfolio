import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Graphic Design',
    'Branding',
    'Logo Design',
    'Photography',
    'Editing'
  ];

  const softwareSkills = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Canva'
  ];

  return (
    <section id="about" className="pro-section relative overflow-hidden">
      {/* Background elements with graphic design graphics */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F2] via-[#EDE6D6]/20 to-[#C6A969]/10" />
      
      {/* Graphic Design Graphics - Enhanced */}
      <motion.div
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#C6A969]/15 to-[#EDE6D6]/15 rounded-full blur-3xl"
      />
      
      {/* Design Icons - Enhanced */}
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-24 h-24 opacity-30"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>
      
      {/* Design Tools Icons - Enhanced */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-32 right-32 w-20 h-20 opacity-25"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2B2B2B]">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      </motion.div>
      
      {/* Color Palette Icons - Enhanced */}
      <motion.div
        animate={{ 
          x: [0, -20, 0],
          y: [0, 15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 left-32 w-18 h-18 opacity-25"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </motion.div>
      
      {/* Typography Icons - Enhanced */}
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-40 right-40 w-16 h-16 opacity-20"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2B2B2B]">
          <path d="M7 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H7z"/>
        </svg>
      </motion.div>
      
      {/* Layout Icons - Enhanced */}
      <motion.div
        animate={{ 
          x: [0, 15, 0],
          y: [0, -10, 0],
          rotate: [0, 8, 0]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-60 left-40 w-14 h-14 opacity-20"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-1.4-1.4-4.6 4.6-1.4-1.4 4.6-4.6 1.4 1.4-4.6 4.6 1.4 1.4z"/>
        </svg>
      </motion.div>
      
      {/* Additional Design Elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-40 left-60 w-10 h-10 opacity-20"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 right-60 w-8 h-8 opacity-20"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2B2B2B]">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ 
          x: [0, 25, 0],
          y: [0, -25, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
        className="absolute top-80 right-40 w-14 h-14 opacity-25"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      </motion.div>
      
      <div className="pro-container relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pro-grid pro-card-2 items-center"
        >
          <div className="relative">
            {/* Profile image with enhanced styling */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Clean ivory background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F8F8F8] to-[#F8F8F6] border-4 border-[#EDE6D6]/30" />
              
              {/* Profile image */}
              <img 
                src="/dp.jpeg"
                alt="Hitisha Modi"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
              
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/10 via-transparent to-transparent z-20" />
              
              {/* Floating decorative elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-4 w-20 h-20 bg-[#C6A969]/20 rounded-full blur-xl z-0"
              />
              
              <motion.div
                animate={{ 
                  scale: [1, 0.9, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-4 left-4 w-16 h-16 bg-[#EDE6D6]/50 rounded-full blur-lg z-0"
              />
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-6 left-6 bg-[#F8F6F2]/90 backdrop-blur-sm px-4 py-2 rounded-full z-30 border border-[#C6A969]/30"
              >
                <span className="text-sm font-medium text-[#2B2B2B]">Graphic Designer</span>
              </motion.div>
              
              {/* Animated frame effect */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(198, 169, 105, 0.4)",
                    "0 0 0 10px rgba(198, 169, 105, 0)",
                    "0 0 0 0 rgba(198, 169, 105, 0)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-2xl z-40"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#C6A969]/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#EDE6D6]/50 rounded-full"
            />
          </div>
          
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pro-heading mb-6"
            >
              <span className="bg-gradient-to-r from-[#2B2B2B] to-[#C6A969] bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="pro-mb-8"
            >
              <p className="pro-text">
                Passionate graphic designer with a keen eye for detail, blending modern aesthetics with strategic thinking to create impactful, brand-aligned visuals across digital, print, and branding platforms.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="pro-subheading">Design Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pro-mb-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="professional-card p-4 text-center"
                  >
                    <span className="text-[#2B2B2B]/80 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="pro-subheading">Software Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {softwareSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="professional-card p-4 text-center"
                  >
                    <span className="text-[#2B2B2B]/80 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* University badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-[#2B2B2B] to-[#2B2B2B] rounded-xl text-center"
            >
              <div className="flex items-center justify-center space-x-3 text-[#F8F6F2]">
                <svg className="w-6 h-6 text-[#C6A969]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  <path d="M3.27 13.53L2 14.07l10 5.5 10-5.5-1.27-.54-8.73 4.79-8.73-4.79z"/>
                </svg>
                <div>
                  <p className="font-semibold">Karnavati University</p>
                  <p className="text-sm text-[#F8F6F2]/70">Bachelor of Design</p>
                </div>
              </div>
            </motion.div>

            {/* Hobbies Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <h3 className="pro-subheading">Hobbies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Photography', icon: '📷' },
                  { name: 'Travelling', icon: '✈️' },
                  { name: 'Dancing', icon: '💃' },
                  { name: 'Sketching', icon: '✏️' }
                ].map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="professional-card p-4 text-center"
                  >
                    <div className="text-2xl mb-2">{hobby.icon}</div>
                    <span className="text-[#2B2B2B]/80 font-medium text-sm">{hobby.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
