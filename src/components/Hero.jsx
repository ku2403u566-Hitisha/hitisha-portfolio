import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Premium background with graphic design theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F2] to-[#F8F8F6] border-4 border-[#EDE6D6]/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2B2B2B]/5 via-transparent to-[#C6A969]/5" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562773028037-1c8b2c0b6b8?w=1920&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F2]/40 via-transparent to-transparent" />
        
        {/* Graphic design pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C6A969' stroke-width='1'%3E%3Cpath d='M10 10h40v40H10z'/%3E%3Cpath d='M15 15h30v30H15z'/%3E%3Cpath d='M20 20h20v20H20z'/%3E%3Cpath d='M25 25h10v10H25z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>
        
        {/* Additional graphic design effects */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C6A969' fill-opacity='0.3'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='30' cy='10' r='1'/%3E%3Ccircle cx='10' cy='30' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>
        
        {/* Typography pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C6A969' stroke-width='0.5'%3E%3Cpath d='M10 40h60'/%3E%3Cpath d='M40 10v60'/%3E%3Cpath d='M20 20h40'/%3E%3Cpath d='M20 60h40'/%3E%3Cpath d='M60 20v40'/%3E%3Cpath d='M20 20v40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>
        
        {/* Color palette dots */}
        <div className="absolute inset-0 opacity-6">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C6A969'%3E%3Ccircle cx='25' cy='25' r='3' fill-opacity='0.4'/%3E%3Ccircle cx='75' cy='25' r='3' fill-opacity='0.4'/%3E%3Ccircle cx='25' cy='75' r='3' fill-opacity='0.4'/%3E%3Ccircle cx='75' cy='75' r='3' fill-opacity='0.4'/%3E%3Ccircle cx='50' cy='50' r='2' fill-opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>
      </div>
      
      {/* Enhanced floating elements with professional graphic design graphics */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#C6A969]/30 to-[#EDE6D6]/30 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tl from-[#2B2B2B]/20 to-[#C6A969]/20 rounded-full blur-3xl"
      />
      
      {/* Professional Graphic Design Graphics - Enhanced */}
      <motion.div
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 right-32 w-32 h-32 opacity-40"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ 
          x: [0, -20, 0],
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-32 left-32 w-28 h-28 opacity-40"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2B2B2B]">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
        </svg>
      </motion.div>
      
      {/* Professional Design Elements - Enhanced */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 left-40 w-24 h-24 opacity-30"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-1.4-1.4-4.6 4.6-1.4-1.4 4.6-4.6 1.4 1.4-4.6 4.6 1.4 1.4z"/>
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -15, 0],
          scale: [1, 0.95, 1]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-40 right-40 w-20 h-20 opacity-30"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2B2B2B]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </motion.div>
      
      {/* Professional Design Tools Icons - Enhanced */}
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-60 right-20 w-16 h-16 opacity-25"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ 
          x: [0, -15, 0],
          y: [0, 10, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-60 left-20 w-14 h-14 opacity-25"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2B2B2B]">
          <path d="M7 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H7z"/>
        </svg>
      </motion.div>
      
      {/* Typography and Layout Icons - Enhanced */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-24 left-40 w-12 h-12 opacity-20"
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
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-24 right-40 w-10 h-10 opacity-20"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2B2B2B]">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
        </svg>
      </motion.div>
      
      {/* Color Theory and Branding Icons */}
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
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </motion.div>
      
      {/* Creative Process Icons */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 20, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7
        }}
        className="absolute top-80 left-60 w-16 h-16 opacity-25"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>
      
      {/* Modern Design Tools */}
      <motion.div
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
        className="absolute bottom-80 right-60 w-16 h-16 opacity-25"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      </motion.div>
      
      {/* Typography Grid Lines */}
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
        className="absolute top-40 right-60 w-12 h-12 opacity-20"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
        </svg>
      </motion.div>
      
      {/* Branding Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-60 left-80 w-20 h-20 opacity-30"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </motion.div>
      
      {/* Digital Design Elements */}
      <motion.div
        animate={{ 
          x: [0, -20, 0],
          y: [0, 20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 9
        }}
        className="absolute bottom-60 left-40 w-14 h-14 opacity-25"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2B2B2B]">
          <path d="M7 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H7z"/>
        </svg>
      </motion.div>
      
      {/* Creative Process Indicators */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 right-80 w-16 h-16 opacity-20"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center section-padding"
      >
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            className="relative overflow-hidden mb-8"
          >
            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-[#EDE6D6] to-[#C6A969] p-1 shadow-2xl relative overflow-hidden">
              {/* Clean ivory background */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F8F8F2] to-[#F8F8F6] border-4 border-[#EDE6D6]/30 flex items-center justify-center relative">
                <img 
                  src="/dp.jpeg" 
                  alt="Hitisha Modi"
                  className="w-full h-full rounded-full object-cover z-10"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-[#C6A969]/20 rounded-full pointer-events-none"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#2B2B2B] mb-6 tracking-tight"
          >
            <span className="block bg-gradient-to-r from-[#2B2B2B] via-[#C6A969] to-[#2B2B2B] bg-clip-text text-transparent animate-pulse-slow">
              Hitisha Modi
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl font-medium text-[#2B2B2B]/80 mb-8"
          >
            <span className="font-bold text-[#C6A969]">Graphic Designer</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-full"
            >
              <Link
                to="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className="relative px-8 py-3 bg-gradient-to-r from-[#2B2B2B] to-[#2B2B2B] text-[#F8F6F2] hover:from-[#C6A969] hover:to-[#C6A969] hover:text-[#2B2B2B] transition-all duration-500 shadow-lg hover:shadow-xl rounded-full block"
              >
                View Portfolio
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F8F6F2]/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-full"
            >
              <Link
                to="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="relative px-8 py-3 bg-gradient-to-r from-[#C6A969] to-[#EDE6D6] text-[#2B2B2B] hover:from-[#2B2B2B] hover:to-[#F8F6F2] transition-all duration-500 shadow-lg hover:shadow-xl rounded-full block"
              >
                Get in Touch
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F8F6F2]/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
