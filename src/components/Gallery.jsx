import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronLeft, FiChevronRight, FiX } = FiIcons;

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "First Coffee Shop Sketch",
      description: "Where it all began - two perspectives of the same corner",
      category: "Early Works",
      image: "https://images.unsplash.com/photo-1495837174058-628aafc7d610?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Studio Portraits",
      description: "Capturing our creative process in natural light",
      category: "Behind the Scenes",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Color Study Series",
      description: "Exploring our palette through abstract compositions",
      category: "Collaborations",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Engagement Session",
      description: "Professional portraits in our favorite art district",
      category: "Portraits",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Joint Exhibition",
      description: "Our first show together at the local gallery",
      category: "Exhibitions",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Creative Process",
      description: "Late night brainstorming sessions and sketches",
      category: "Behind the Scenes",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
    }
  ];

  const categories = ["All", ...new Set(galleryItems.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-canvas dark:bg-canvas-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal dark:text-canvas mb-4">
            Our Gallery
          </h2>
          <p className="font-sketch text-xl text-cobalt dark:text-cobalt-light">
            A visual journey through our creative partnership
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-cobalt text-canvas shadow-lg'
                  : 'bg-cobalt/10 dark:bg-cobalt-light/10 text-cobalt dark:text-cobalt-light hover:bg-cobalt/20 dark:hover:bg-cobalt-light/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg tape-corner">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm opacity-90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] bg-canvas dark:bg-canvas-dark rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-6 h-6" />
                </button>
                
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-charcoal dark:text-canvas mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="font-sans text-charcoal/80 dark:text-canvas/80 mb-2">
                    {selectedImage.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-cobalt/10 dark:bg-cobalt-light/10 text-cobalt dark:text-cobalt-light rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;