import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUser, FiMail, FiMessageCircle } = FiIcons;

const RSVP = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '1',
    colors: '',
    message: '',
    dietary: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-canvas dark:bg-canvas-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-cobalt/10 to-clay/10 dark:from-cobalt/20 dark:to-clay/20 p-12 rounded-lg shadow-xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-20 h-20 bg-cobalt rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <SafeIcon icon={FiHeart} className="w-10 h-10 text-canvas" />
              </motion.div>
              
              <h2 className="font-serif text-4xl font-bold text-charcoal dark:text-canvas mb-4">
                Thank You!
              </h2>
              
              <p className="font-sans text-lg text-charcoal/80 dark:text-canvas/80 mb-6">
                Your RSVP has been received. We can't wait to celebrate with you!
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block"
              >
                <div className="flex items-center space-x-2 text-cobalt dark:text-cobalt-light">
                  <span className="text-2xl">🎨</span>
                  <p className="font-sketch text-xl">
                    Get ready for an artistic celebration!
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-canvas dark:bg-canvas-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal dark:text-canvas mb-4">
            RSVP
          </h2>
          <p className="font-sketch text-xl text-cobalt dark:text-cobalt-light">
            Join our artistic celebration
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-canvas to-cobalt/5 dark:from-canvas-dark dark:to-cobalt/10 p-8 rounded-lg shadow-xl border border-cobalt/10 dark:border-cobalt-light/10 paper-texture"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block font-sans text-sm font-medium text-charcoal dark:text-canvas mb-2">
                <SafeIcon icon={FiUser} className="inline w-4 h-4 mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-cobalt/20 dark:border-cobalt-light/20 rounded-lg bg-canvas dark:bg-canvas-dark text-charcoal dark:text-canvas focus:ring-2 focus:ring-cobalt dark:focus:ring-cobalt-light focus:border-transparent transition-all duration-200"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-sans text-sm font-medium text-charcoal dark:text-canvas mb-2">
                <SafeIcon icon={FiMail} className="inline w-4 h-4 mr-2" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-cobalt/20 dark:border-cobalt-light/20 rounded-lg bg-canvas dark:bg-canvas-dark text-charcoal dark:text-canvas focus:ring-2 focus:ring-cobalt dark:focus:ring-cobalt-light focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>

            {/* Attending */}
            <div>
              <label className="block font-sans text-sm font-medium text-charcoal dark:text-canvas mb-2">
                Will you be attending? *
              </label>
              <select
                name="attending"
                required
                value={formData.attending}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-cobalt/20 dark:border-cobalt-light/20 rounded-lg bg-canvas dark:bg-canvas-dark text-charcoal dark:text-canvas focus:ring-2 focus:ring-cobalt dark:focus:ring-cobalt-light focus:border-transparent transition-all duration-200"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes, I'll be there!</option>
                <option value="no">Sorry, can't make it</option>
              </select>
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block font-sans text-sm font-medium text-charcoal dark:text-canvas mb-2">
                Number of Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-cobalt/20 dark:border-cobalt-light/20 rounded-lg bg-canvas dark:bg-canvas-dark text-charcoal dark:text-canvas focus:ring-2 focus:ring-cobalt dark:focus:ring-cobalt-light focus:border-transparent transition-all duration-200"
              >
                <option value="1">Just me</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
              </select>
            </div>

            {/* Colors */}
            <div className="md:col-span-2">
              <label className="block font-sans text-sm font-medium text-charcoal dark:text-canvas mb-2">
                What colors describe us best?
              </label>
              <input
                type="text"
                name="colors"
                value={formData.colors}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-cobalt/20 dark:border-cobalt-light/20 rounded-lg bg-canvas dark:bg-canvas-dark text-charcoal dark:text-canvas focus:ring-2 focus:ring-cobalt dark:focus:ring-cobalt-light focus:border-transparent transition-all duration-200"
                placeholder="e.g., Sunset orange, Forest green, Ocean blue..."
              />
            </div>

            {/* Dietary Restrictions */}
            <div className="md:col-span-2">
              <label className="block font-sans text-sm font-medium text-charcoal dark:text-canvas mb-2">
                Dietary Restrictions
              </label>
              <input
                type="text"
                name="dietary"
                value={formData.dietary}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-cobalt/20 dark:border-cobalt-light/20 rounded-lg bg-canvas dark:bg-canvas-dark text-charcoal dark:text-canvas focus:ring-2 focus:ring-cobalt dark:focus:ring-cobalt-light focus:border-transparent transition-all duration-200"
                placeholder="Any allergies or dietary preferences?"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block font-sans text-sm font-medium text-charcoal dark:text-canvas mb-2">
                <SafeIcon icon={FiMessageCircle} className="inline w-4 h-4 mr-2" />
                Leave a note or doodle description
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-cobalt/20 dark:border-cobalt-light/20 rounded-lg bg-canvas dark:bg-canvas-dark text-charcoal dark:text-canvas focus:ring-2 focus:ring-cobalt dark:focus:ring-cobalt-light focus:border-transparent transition-all duration-200"
                placeholder="Share your excitement, a memory, or describe a doodle you'd draw for us..."
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full mt-8 bg-cobalt hover:bg-cobalt/90 dark:bg-cobalt-light dark:hover:bg-cobalt text-canvas font-sans font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200"
          >
            Send RSVP
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVP;