import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CreativeJourney from './components/CreativeJourney';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import MoodBoard from './components/MoodBoard';
import RSVP from './components/RSVP';
import Registry from './components/Registry';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import ThemeProvider from './contexts/ThemeContext';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-canvas dark:bg-canvas-dark flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            className="w-16 h-16 border-4 border-cobalt border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="font-sketch text-2xl text-cobalt"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Preparing our studio...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-canvas dark:bg-canvas-dark transition-colors duration-300">
          <Navigation />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <CreativeJourney />
                <WeddingInfo />
                <Gallery />
                <MoodBoard />
                <RSVP />
                <Registry />
                <Guestbook />
              </main>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;