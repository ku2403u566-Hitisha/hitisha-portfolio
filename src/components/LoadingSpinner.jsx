import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-[#F8F6F2] flex items-center justify-center z-50">
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-[#EDE6D6] border-t-[#C6A969] rounded-full"
        />
        
        {/* Middle ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute top-2 left-2 w-12 h-12 border-4 border-[#EDE6D6]/50 border-b-[#2B2B2B] rounded-full"
        />
        
        {/* Inner dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-6 left-6 w-4 h-4 bg-gradient-to-r from-[#C6A969] to-[#2B2B2B] rounded-full"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
