import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-[#F8F6F2] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EDE6D6]/20 via-[#F8F6F2] to-[#C6A969]/10" />
      
      {/* Floating house/building graphics */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 2, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-32 h-32 opacity-10"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2B2B2B]">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -2, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-10 w-40 h-40 opacity-10"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#C6A969]">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>
      
      <div className="container-max px-6 md:px-12 lg:px-24 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2B2B2B] mb-4">
            <span className="bg-gradient-to-r from-[#2B2B2B] to-[#C6A969] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-[#2B2B2B]/70 max-w-2xl mx-auto">
            Let's discuss your graphic design project or collaboration opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-[#EDE6D6]/30 to-[#C6A969]/10 border border-[#EDE6D6]/30"
              >
                <div className="w-12 h-12 bg-[#C6A969]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#C6A969]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2B2B2B] mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/hitishamodi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#2B2B2B]/70 hover:text-[#C6A969] transition-colors"
                  >
                    linkedin.com/in/hitishamodi
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-[#EDE6D6]/30 to-[#C6A969]/10 border border-[#EDE6D6]/30"
              >
                <div className="w-12 h-12 bg-[#C6A969]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#C6A969]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2B2B2B] mb-1">Instagram</h4>
                  <a 
                    href="https://www.instagram.com/_hitishamodi_?igsh=MWF2ODJicHdyM3lveA==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#2B2B2B]/70 hover:text-[#C6A969] transition-colors"
                  >
                    @_hitishamodi_
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-[#EDE6D6]/30 to-[#C6A969]/10 border border-[#EDE6D6]/30"
              >
                <div className="w-12 h-12 bg-[#C6A969]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#C6A969]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002 2v-10h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2B2B2B] mb-1">Email</h4>
                  <p className="text-[#2B2B2B]/70">hitishamodi7@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-[#EDE6D6]/30 to-[#C6A969]/10 border border-[#EDE6D6]/30"
              >
                <div className="w-12 h-12 bg-[#C6A969]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#C6A969]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2B2B2B] mb-1">Phone</h4>
                  <p className="text-[#2B2B2B]/70">+91 77279 33747</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-[#2B2B2B] font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#2B2B2B]/20 rounded-lg bg-[#F8F6F2] focus:outline-none focus:border-[#C6A969] transition-all duration-300 focus:shadow-lg"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-[#2B2B2B] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#2B2B2B]/20 rounded-lg bg-[#F8F6F2] focus:outline-none focus:border-[#C6A969] transition-all duration-300 focus:shadow-lg"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-[#2B2B2B] font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-[#2B2B2B]/20 rounded-lg bg-[#F8F6F2] focus:outline-none focus:border-[#C6A969] transition-all duration-300 focus:shadow-lg resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-[#2B2B2B] to-[#2B2B2B] text-[#F8F6F2] hover:from-[#C6A969] hover:to-[#C6A969] hover:text-[#2B2B2B] transition-all duration-500 rounded-lg font-medium shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
