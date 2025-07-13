import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CreativeJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const journeySteps = [
    {
      title: "First Sketch",
      date: "March 2019",
      description: "Two art students meet in a coffee shop, sketching the same street corner from different angles.",
      image: "✏️",
      color: "bg-clay/20"
    },
    {
      title: "Conceptual Stage",
      date: "September 2020",
      description: "Late nights collaborating on projects, discovering our creative chemistry.",
      image: "💡",
      color: "bg-cobalt/20"
    },
    {
      title: "Color Studies",
      date: "February 2022",
      description: "Moving in together, our apartment becomes our first shared studio space.",
      image: "🎨",
      color: "bg-ochre/20"
    },
    {
      title: "Final Composition",
      date: "December 2023",
      description: "The proposal: a custom illustration of our future, framed in gold.",
      image: "💍",
      color: "bg-canvas border-2 border-cobalt"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-canvas dark:bg-canvas-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal dark:text-canvas mb-4">
            Our Creative Journey
          </h2>
          <p className="font-sketch text-xl text-cobalt dark:text-cobalt-light">
            A love story told in projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-cobalt/30 dark:bg-cobalt-light/30" />

          {/* Journey Steps */}
          <div className="space-y-16">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-5/12 space-y-4">
                  <div className={`p-6 rounded-lg shadow-lg paper-texture ${step.color}`}>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-3xl">{step.image}</span>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-charcoal dark:text-canvas">
                          {step.title}
                        </h3>
                        <p className="font-sketch text-cobalt dark:text-cobalt-light">
                          {step.date}
                        </p>
                      </div>
                    </div>
                    <p className="font-sans text-charcoal/80 dark:text-canvas/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cobalt dark:bg-cobalt-light rounded-full border-4 border-canvas dark:border-canvas-dark shadow-lg" />

                {/* Spacer */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeJourney;