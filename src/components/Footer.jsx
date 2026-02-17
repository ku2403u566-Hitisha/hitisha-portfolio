import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#EDE6D6] py-12"
    >
      <div className="container-max section-padding">
        <div className="text-center">
          <p className="text-[#2B2B2B]/60 text-sm">
            © 2026 Hitisha Modi. All rights reserved.
          </p>
          <p className="text-[#2B2B2B]/60 text-sm mt-2">
            Graphic Designer • Karnavati University
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
