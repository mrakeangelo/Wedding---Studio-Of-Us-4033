import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiMapPin, FiClock, FiUsers } = FiIcons;

const WeddingInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const weddingDetails = [
    {
      icon: FiCalendar,
      title: "Exhibition Opening",
      detail: "Saturday, June 15th, 2024",
      description: "The day we unveil our greatest collaboration"
    },
    {
      icon: FiClock,
      title: "Gallery Hours",
      detail: "4:00 PM - 11:00 PM",
      description: "Ceremony at 4:30 PM, Reception follows"
    },
    {
      icon: FiMapPin,
      title: "Venue",
      detail: "The Metropolitan Art Gallery",
      description: "123 Creative Avenue, Downtown Arts District"
    },
    {
      icon: FiUsers,
      title: "Dress Code",
      detail: "Gallery Black or Color Splash",
      description: "Elegant attire with artistic flair welcome"
    }
  ];

  return (
    <section id="wedding" className="py-20 bg-gradient-to-b from-canvas to-cobalt/5 dark:from-canvas-dark dark:to-cobalt/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal dark:text-canvas mb-4">
            Art Opening Details
          </h2>
          <p className="font-sketch text-xl text-cobalt dark:text-cobalt-light">
            Join us for the unveiling of our love story
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weddingDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-canvas dark:bg-canvas-dark p-8 rounded-lg shadow-lg border border-cobalt/10 dark:border-cobalt-light/10 tape-corner paper-texture"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cobalt/10 dark:bg-cobalt-light/10 rounded-full flex items-center justify-center">
                  <SafeIcon 
                    icon={detail.icon} 
                    className="w-6 h-6 text-cobalt dark:text-cobalt-light" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-charcoal dark:text-canvas mb-2">
                    {detail.title}
                  </h3>
                  <p className="font-sans text-lg font-medium text-cobalt dark:text-cobalt-light mb-2">
                    {detail.detail}
                  </p>
                  <p className="font-sans text-charcoal/70 dark:text-canvas/70 leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-ochre/10 dark:bg-ochre/20 p-8 rounded-lg border-2 border-dashed border-ochre/30">
            <h3 className="font-serif text-2xl font-semibold text-charcoal dark:text-canvas mb-4">
              Special Exhibition Notes
            </h3>
            <div className="space-y-2 font-sans text-charcoal/80 dark:text-canvas/80">
              <p>• Photography encouraged - we want to capture every moment</p>
              <p>• Unplugged ceremony - let's be present together</p>
              <p>• Dancing shoes recommended for the after-party</p>
              <p>• Kids are welcome - we'll have a creative corner set up</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;