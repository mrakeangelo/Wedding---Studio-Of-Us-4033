import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCamera, FiMap, FiHome, FiPalette, FiExternalLink } = FiIcons;

const Registry = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const registryItems = [
    {
      icon: FiHome,
      title: "Studio Upgrade Fund",
      description: "Help us create the perfect shared creative space",
      goal: "$2,500",
      raised: "$1,200",
      progress: 48
    },
    {
      icon: FiCamera,
      title: "Professional Equipment",
      description: "High-quality cameras and lighting for our projects",
      goal: "$1,800",
      raised: "$900",
      progress: 50
    },
    {
      icon: FiMap,
      title: "European Art Tour",
      description: "A honeymoon through galleries and museums",
      goal: "$3,000",
      raised: "$750",
      progress: 25
    },
    {
      icon: FiPalette,
      title: "Art Supplies Collection",
      description: "Premium paints, brushes, and creative materials",
      goal: "$800",
      raised: "$600",
      progress: 75
    }
  ];

  return (
    <section id="registry" className="py-20 bg-gradient-to-b from-canvas to-cobalt/5 dark:from-canvas-dark dark:to-cobalt/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal dark:text-canvas mb-4">
            Creative Futures Fund
          </h2>
          <p className="font-sketch text-xl text-cobalt dark:text-cobalt-light mb-6">
            Help us build our artistic journey together
          </p>
          <p className="font-sans text-charcoal/80 dark:text-canvas/80 max-w-2xl mx-auto">
            Your love and presence at our wedding is the greatest gift. If you'd like to contribute to our creative future, these funds will help us build our studio and explore new artistic horizons.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {registryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-canvas dark:bg-canvas-dark p-8 rounded-lg shadow-lg border border-cobalt/10 dark:border-cobalt-light/10 tape-corner paper-texture"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-cobalt/10 dark:bg-cobalt-light/10 rounded-full flex items-center justify-center">
                  <SafeIcon 
                    icon={item.icon} 
                    className="w-6 h-6 text-cobalt dark:text-cobalt-light" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-charcoal dark:text-canvas mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-charcoal/70 dark:text-canvas/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-sans text-sm text-charcoal/60 dark:text-canvas/60">
                    Progress
                  </span>
                  <span className="font-sans text-sm font-medium text-cobalt dark:text-cobalt-light">
                    {item.raised} / {item.goal}
                  </span>
                </div>
                <div className="w-full bg-cobalt/10 dark:bg-cobalt-light/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.progress}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    className="bg-cobalt dark:bg-cobalt-light h-2 rounded-full"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-cobalt/10 dark:bg-cobalt-light/10 hover:bg-cobalt/20 dark:hover:bg-cobalt-light/20 text-cobalt dark:text-cobalt-light font-sans font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Contribute</span>
                <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Alternative Registry Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-ochre/10 dark:bg-ochre/20 p-8 rounded-lg border-2 border-dashed border-ochre/30">
            <h3 className="font-serif text-2xl font-semibold text-charcoal dark:text-canvas mb-4">
              Traditional Registry
            </h3>
            <p className="font-sans text-charcoal/80 dark:text-canvas/80 mb-6">
              Prefer traditional gifts? We also have registries at these stores:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-canvas dark:bg-canvas-dark text-cobalt dark:text-cobalt-light font-sans font-medium py-2 px-6 rounded-lg shadow-md border border-cobalt/20 dark:border-cobalt-light/20 transition-all duration-200"
              >
                Art Supply Store
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-canvas dark:bg-canvas-dark text-cobalt dark:text-cobalt-light font-sans font-medium py-2 px-6 rounded-lg shadow-md border border-cobalt/20 dark:border-cobalt-light/20 transition-all duration-200"
              >
                Home & Design
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-canvas dark:bg-canvas-dark text-cobalt dark:text-cobalt-light font-sans font-medium py-2 px-6 rounded-lg shadow-md border border-cobalt/20 dark:border-cobalt-light/20 transition-all duration-200"
              >
                Photography Gear
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;