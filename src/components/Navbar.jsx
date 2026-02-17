import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#F8F6F2]/25 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-3'
        }`}
      >
        <div className="container-max section-padding">
          <div className="flex justify-between items-center">
            <div 
              onClick={() => {
                console.log('Hitisha logo clicked!');
                navigate('/');
              }}
              className="group relative flex items-center space-x-3 cursor-pointer p-2 hover:bg-[#C6A969]/10 rounded-lg transition-colors"
            >
              {/* Profile Picture in Header */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#EDE6D6] to-[#C6A969] p-0.5 shadow-lg relative overflow-hidden">
                <img 
                  src="/dp.jpeg" 
                  alt="Hitisha Modi"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              {/* Full Name */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-xl font-serif font-bold text-[#2B2B2B] relative z-10"
              >
                Hitisha Modi
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#C6A969]/20 to-[#EDE6D6]/20 rounded-lg -z-0"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {location.pathname === '/' ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href.substring(1))}
                      className="text-lg font-serif font-medium text-[#2B2B2B] hover:text-[#C6A969] transition-colors duration-300 group"
                    >
                      {item.name}
                      <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C6A969] to-[#2B2B2B]"
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  ) : (
                    <Link
                      to={`/${item.href}`}
                      className="text-lg font-serif font-medium text-[#2B2B2B] hover:text-[#C6A969] transition-colors duration-300 group"
                    >
                      {item.name}
                      <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C6A969] to-[#2B2B2B]"
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#2B2B2B] relative z-50"
            >
              <motion.div
                animate={mobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? 45 : 0,
                    y: mobileMenuOpen ? 8 : 0
                  }}
                  className="absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300"
                />
                <motion.span
                  animate={{
                    opacity: mobileMenuOpen ? 0 : 1
                  }}
                  className="absolute top-2 left-0 w-6 h-0.5 bg-current transition-all duration-300"
                />
                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? -45 : 0,
                    y: mobileMenuOpen ? -8 : 0
                  }}
                  className="absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-[#2B2B2B]/50 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute right-0 top-0 h-full w-64 bg-[#F8F6F2] shadow-2xl"
            >
              <div className="p-6 pt-20">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {location.pathname === '/' ? (
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href.substring(1))}
                        className="block py-3 text-lg font-medium text-[#2B2B2B] hover:text-[#C6A969] transition-colors duration-300"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={`/${item.href}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 text-lg font-medium text-[#2B2B2B] hover:text-[#C6A969] transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="mt-8 p-4 bg-gradient-to-r from-[#EDE6D6] to-[#C6A969]/20 rounded-xl"
                >
                  <p className="text-sm text-[#2B2B2B]/70 text-center">
                    Graphic Designer
                  </p>
                  <p className="text-xs text-[#2B2B2B]/50 text-center mt-1">
                    Karnavati University
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
