import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Brushstroke */}
      <div className="absolute inset-0 brush-texture">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1200 800" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? "#6b7c94" : "#4a5d7a"} stopOpacity="0.1" />
              <stop offset="50%" stopColor={isDark ? "#b8956a" : "#d4a574"} stopOpacity="0.2" />
              <stop offset="100%" stopColor={isDark ? "#4a5d7a" : "#6b7c94"} stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,400 Q300,200 600,400 Q900,600 1200,400 L1200,800 L0,800 Z"
            fill="url(#brushGradient)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Couple Portrait Placeholder */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mx-auto w-64 h-64 md:w-80 md:h-80 tape-corner"
          >
            <div className="w-full h-full bg-gradient-to-br from-cobalt/20 to-clay/20 rounded-lg shadow-2xl flex items-center justify-center paper-texture">
              <div className="text-center">
                <div className="w-20 h-20 bg-cobalt/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👫</span>
                </div>
                <p className="font-sketch text-cobalt text-lg">Couple Portrait</p>
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-charcoal dark:text-canvas leading-tight">
              Alex & Jamie
            </h1>
            <p className="font-sketch text-2xl md:text-3xl text-cobalt dark:text-cobalt-light">
              Creating together, forever
            </p>
          </motion.div>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="space-y-2"
          >
            <p className="font-sans text-xl text-charcoal dark:text-canvas">
              June 15, 2024
            </p>
            <p className="font-sans text-lg text-cobalt dark:text-cobalt-light">
              The Art Gallery, Downtown
            </p>
          </motion.div>

          {/* Color Palette Swatch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-2 mt-8"
          >
            <div className="space-y-2">
              <div className="flex space-x-2">
                <div className="w-6 h-6 bg-canvas border-2 border-charcoal/20 rounded-full shadow-md" />
                <div className="w-6 h-6 bg-cobalt rounded-full shadow-md" />
                <div className="w-6 h-6 bg-charcoal rounded-full shadow-md" />
                <div className="w-6 h-6 bg-clay rounded-full shadow-md" />
                <div className="w-6 h-6 bg-ochre rounded-full shadow-md" />
              </div>
              <p className="font-sketch text-sm text-cobalt dark:text-cobalt-light">
                Our palette
              </p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-cobalt dark:border-cobalt-light rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-cobalt dark:bg-cobalt-light rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;