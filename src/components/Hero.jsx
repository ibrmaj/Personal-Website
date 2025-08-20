import React from 'react';
import { motion } from 'framer-motion';
import ibrahimImg from '../assets/ibrahim.jpeg';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6 py-16 bg-gradient-radial from-charcoal via-charcoal to-teal/10 overflow-hidden">
      {/* SVG Noise Texture Overlay (restored) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'noise\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23noise)\' opacity=\'0.06\'/></svg>')`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
          opacity: 0.3,
        }}
      />
      {/* Blurred Color Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal/30 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal/20 rounded-full blur-3xl z-0" />
      <motion.div
        className="flex-1 flex flex-col items-center md:items-end justify-center z-10 text-center md:text-right"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <h1 className="text-6xl md:text-5xl font-extrabold mb-4 text-softwhite leading-tight typewriter-h1">
        <Typewriter text="hi, i'm ibrahim" typingSpeed={120} />
        </h1>
      </motion.div>
      <motion.div
        className="flex-1 flex items-center justify-center z-10"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 }}
      >
        <motion.img
          src={ibrahimImg}
          alt="Ibrahim Majid portrait"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-teal hover:scale-105 transition-transform duration-300 cursor-pointer"
          whileHover={{ rotate: 6, scale: 1.05 }}
          tabIndex={0}
          aria-label="Ibrahim Majid photo"
        />
      </motion.div>
    </section>
  );
} 