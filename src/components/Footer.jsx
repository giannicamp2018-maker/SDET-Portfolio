import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/gfc6-dotcom', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/gianni-campione-7013a7385/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:giannicamp2018@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Portfolio</h3>
            <p className="text-gray-400 text-sm">
              Gianni Campione - Student Programmer & Athlete
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  color: '#3b82f6'
                }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-blue-400 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React & Framer Motion
            </p>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              Thanks for visiting my portfolio! 🚀
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
