import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiSmile, FiStar, FiSun, FiMoon } = FiIcons;

const Guestbook = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [newMessage, setNewMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const emojiReactions = ['❤️', '🎨', '✨', '🌟', '🎉', '💕', '🖌️', '🌈'];

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Sarah & Mike",
      message: "Can't wait to see you two tie the knot! Your love story is like a beautiful painting coming to life.",
      emoji: '❤️',
      timestamp: "2 days ago"
    },
    {
      id: 2,
      name: "The Johnson Family",
      message: "Two artists becoming one - what a masterpiece! We're so excited to celebrate with you both.",
      emoji: '🎨',
      timestamp: "1 day ago"
    },
    {
      id: 3,
      name: "Emma",
      message: "Your creative energy together is inspiring! Here's to a lifetime of beautiful collaborations.",
      emoji: '✨',
      timestamp: "5 hours ago"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        name: "Anonymous Guest",
        message: newMessage,
        emoji: selectedEmoji || '💕',
        timestamp: "Just now"
      };
      setMessages([message, ...messages]);
      setNewMessage('');
      setSelectedEmoji('');
    }
  };

  return (
    <section className="py-20 bg-canvas dark:bg-canvas-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal dark:text-canvas mb-4">
            Leave a Brushstroke of Love
          </h2>
          <p className="font-sketch text-xl text-cobalt dark:text-cobalt-light">
            Share your excitement and well wishes
          </p>
        </motion.div>

        {/* Add New Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-canvas to-cobalt/5 dark:from-canvas-dark dark:to-cobalt/10 p-8 rounded-lg shadow-lg border border-cobalt/10 dark:border-cobalt-light/10 mb-12 paper-texture"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-sans text-sm font-medium text-charcoal dark:text-canvas mb-2">
                Your message
              </label>
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                rows="3"
                className="w-full px-4 py-3 border border-cobalt/20 dark:border-cobalt-light/20 rounded-lg bg-canvas dark:bg-canvas-dark text-charcoal dark:text-canvas focus:ring-2 focus:ring-cobalt dark:focus:ring-cobalt-light focus:border-transparent transition-all duration-200"
                placeholder="Share your excitement, a memory, or well wishes for the happy couple..."
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-charcoal dark:text-canvas mb-3">
                Add a reaction
              </label>
              <div className="flex flex-wrap gap-2">
                {emojiReactions.map((emoji, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedEmoji(emoji)}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-200 flex items-center justify-center text-xl ${
                      selectedEmoji === emoji
                        ? 'border-cobalt bg-cobalt/10 dark:bg-cobalt-light/10'
                        : 'border-cobalt/20 dark:border-cobalt-light/20 hover:border-cobalt dark:hover:border-cobalt-light'
                    }`}
                  >
                    {emoji}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-cobalt hover:bg-cobalt/90 dark:bg-cobalt-light dark:hover:bg-cobalt text-canvas font-sans font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-200"
            >
              Add Your Brushstroke
            </motion.button>
          </form>
        </motion.div>

        {/* Messages List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-canvas dark:bg-canvas-dark p-6 rounded-lg shadow-md border border-cobalt/10 dark:border-cobalt-light/10 tape-corner"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cobalt/10 dark:bg-cobalt-light/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">{message.emoji}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-serif text-lg font-semibold text-charcoal dark:text-canvas">
                      {message.name}
                    </h4>
                    <span className="font-sans text-sm text-charcoal/60 dark:text-canvas/60">
                      {message.timestamp}
                    </span>
                  </div>
                  <p className="font-sans text-charcoal/80 dark:text-canvas/80 leading-relaxed">
                    {message.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-cobalt dark:text-cobalt-light">
            <SafeIcon icon={FiHeart} className="w-5 h-5" />
            <span className="font-sketch text-lg">Thank you for being part of our story</span>
            <SafeIcon icon={FiHeart} className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guestbook;