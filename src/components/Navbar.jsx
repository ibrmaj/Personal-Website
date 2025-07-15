import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={`sticky top-0 z-50 w-full bg-charcoal/90 backdrop-blur border-b border-charcoal/60 ${scrolled ? 'shadow-lg' : ''}`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#hero" className="text-xl font-bold tracking-wide text-teal font-mono" aria-label="Home">
          IBRAHIM MAJID
        </a>
        <ul className="flex gap-6 items-center">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-softwhite hover:text-teal transition-colors duration-300 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded px-2"
                tabIndex={0}
                aria-label={link.name}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-1.5 rounded bg-teal text-charcoal font-semibold shadow hover:bg-teal/80 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              aria-label="View Résumé as PDF in new tab"
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
} 