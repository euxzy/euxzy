import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [customCursor, setCustomCursor] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);
  }, []);

  const variants = {
    default: { x: mousePosition.x - 32, y: mousePosition.y - 32 },
    inverse: { x: mousePosition.x - 32, y: mousePosition.y - 32, mixBlendMode: 'difference' },
  };

  const cursorIn = () => setCustomCursor('inverse');
  const cursorOut = () => setCustomCursor('default');

  return (
    <div onMouseEnter={cursorIn} onMouseLeave={cursorOut}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="works" element={<Works />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
      <motion.div className="pointer-events-none fixed left-0 top-0 z-50 h-16 w-16 rounded-full bg-primary-light" variants={variants} animate={customCursor} />
    </div>
  );
}

export default App;
