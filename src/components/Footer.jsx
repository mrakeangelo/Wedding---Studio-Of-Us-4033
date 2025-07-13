import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiInstagram, FiMail, FiPhone } = FiIcons;

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className="bg-charcoal dark:bg-charcoal-light text-canvas py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-cobalt rounded-full flex items-center justify-center">
                <span className="text-canvas font-serif text-lg font-bold">S</span>
              </div>
              <h3 className="font-serif text-2xl font-bold">Studio of Us</h3>
            </div>
            <p className="font-sans text-canvas/80 mb-4">
              Alex & Jamie's Wedding<br />
              June 15, 2024
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-cobalt-light">
              <SafeIcon icon={FiHeart} className="w-4 h-4" />
              <span className="font-sketch text-sm">Creating together, forever</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="font-serif text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'Our Story', href: '#journey' },
                { label: 'Wedding Details', href: '#wedding' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'RSVP', href: '#rsvp' },
                { label: 'Registry', href: '#registry' }
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block font-sans text-canvas/80 hover:text-canvas transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="font-serif text-xl font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <SafeIcon icon={FiMail} className="w-4 h-4 text-cobalt-light" />
                <span className="font-sans text-canvas/80">hello@studioof.us</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <SafeIcon icon={FiPhone} className="w-4 h-4 text-cobalt-light" />
                <span className="font-sans text-canvas/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <SafeIcon icon={FiInstagram} className="w-4 h-4 text-cobalt-light" />
                <span className="font-sans text-canvas/80">@studioof.us</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-canvas/20 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-sans text-canvas/60 text-sm">
              © 2024 Studio of Us. All rights reserved.
            </p>
            <p className="font-sans text-canvas/60 text-sm">
              Studio of Us – An Artistic Wedding Template by{' '}
              <span className="text-cobalt-light font-medium">Mrake Agency</span>
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cobalt via-clay to-ochre" />
      </div>
    </footer>
  );
};

export default Footer;