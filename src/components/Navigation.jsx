import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiMoon, FiMenu, FiX } = FiIcons;

const Navigation = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Our Story', href: '#journey' },
    { label: 'Wedding', href: '#wedding' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'RSVP', href: '#rsvp' },
    { label: 'Registry', href: '#registry' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-canvas/90 dark:bg-canvas-dark/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-cobalt rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-sm font-bold">S</span>
            </div>
            <span className="font-serif text-xl font-semibold text-charcoal dark:text-canvas">
              Studio of Us
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.href)}
                className="text-charcoal dark:text-canvas hover:text-cobalt dark:hover:text-cobalt-light transition-colors duration-200 font-sans text-sm font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-cobalt/10 dark:bg-cobalt-light/10 hover:bg-cobalt/20 dark:hover:bg-cobalt-light/20 transition-colors duration-200"
              aria-label={isDark ? 'Switch to daylight studio' : 'Switch to midnight gallery'}
            >
              <SafeIcon 
                icon={isDark ? FiSun : FiMoon} 
                className="w-5 h-5 text-cobalt dark:text-cobalt-light" 
              />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-cobalt/10 dark:bg-cobalt-light/10 hover:bg-cobalt/20 dark:hover:bg-cobalt-light/20 transition-colors duration-200"
            >
              <SafeIcon 
                icon={isMobileMenuOpen ? FiX : FiMenu} 
                className="w-5 h-5 text-cobalt dark:text-cobalt-light" 
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-canvas/95 dark:bg-canvas-dark/95 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-charcoal dark:text-canvas hover:text-cobalt dark:hover:text-cobalt-light transition-colors duration-200 font-sans text-sm font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;