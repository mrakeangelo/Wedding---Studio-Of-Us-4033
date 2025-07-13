import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const MoodBoard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const moodItems = [
    {
      type: 'quote',
      content: '"Art is not what you see, but what you make others see." - Edgar Degas',
      position: 'top-4 left-4',
      rotation: '-rotate-3',
      color: 'bg-canvas'
    },
    {
      type: 'texture',
      content: '🎨',
      position: 'top-12 right-8',
      rotation: 'rotate-12',
      color: 'bg-clay/20'
    },
    {
      type: 'sketch',
      content: '✏️',
      position: 'bottom-16 left-12',
      rotation: 'rotate-6',
      color: 'bg-cobalt/10'
    },
    {
      type: 'quote',
      content: '"Two artists, one canvas, infinite possibilities"',
      position: 'bottom-8 right-4',
      rotation: '-rotate-6',
      color: 'bg-ochre/20'
    },
    {
      type: 'paint',
      content: '🖌️',
      position: 'top-32 left-1/3',
      rotation: 'rotate-45',
      color: 'bg-canvas'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cobalt/5 to-canvas dark:from-cobalt/10 dark:to-canvas-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal dark:text-canvas mb-4">
            Mood Board
          </h2>
          <p className="font-sketch text-xl text-cobalt dark:text-cobalt-light">
            Inspiration, textures, and creative energy
          </p>
        </motion.div>

        <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg bg-gradient-to-br from-canvas to-cobalt/10 dark:from-canvas-dark dark:to-cobalt/20 paper-texture">
          {/* Grid Background */}
          <div className="absolute inset-0 grid-overlay opacity-20" />

          {/* Mood Items */}
          {moodItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1, 
                rotate: parseInt(item.rotation.replace(/[^\d-]/g, '')) || 0 
              } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`absolute ${item.position} ${item.rotation} ${item.color} p-4 rounded-lg shadow-lg border border-charcoal/10 dark:border-canvas/10 tape-corner`}
            >
              {item.type === 'quote' ? (
                <p className="font-sketch text-sm md:text-base text-charcoal dark:text-canvas max-w-xs">
                  {item.content}
                </p>
              ) : (
                <span className="text-2xl md:text-4xl">{item.content}</span>
              )}
            </motion.div>
          ))}

          {/* Central Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-canvas dark:bg-canvas-dark p-6 rounded-lg shadow-xl border-2 border-cobalt/20">
              <h3 className="font-serif text-xl font-semibold text-charcoal dark:text-canvas mb-4 text-center">
                Our Palette
              </h3>
              <div className="grid grid-cols-5 gap-2">
                <div className="w-8 h-8 bg-canvas border-2 border-charcoal/20 rounded-full" />
                <div className="w-8 h-8 bg-cobalt rounded-full" />
                <div className="w-8 h-8 bg-charcoal rounded-full" />
                <div className="w-8 h-8 bg-clay rounded-full" />
                <div className="w-8 h-8 bg-ochre rounded-full" />
              </div>
              <div className="mt-4 text-center">
                <p className="font-sketch text-sm text-cobalt dark:text-cobalt-light">
                  Canvas • Cobalt • Charcoal • Clay • Ochre
                </p>
              </div>
            </div>
          </motion.div>

          {/* Paint Splashes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-4 left-4"
          >
            <div className="w-12 h-12 bg-cobalt/30 rounded-full blur-sm" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute top-8 right-12"
          >
            <div className="w-8 h-8 bg-clay/40 rounded-full blur-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MoodBoard;