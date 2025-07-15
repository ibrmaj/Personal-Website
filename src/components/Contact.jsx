import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub size={48} />, // Large icon
    href: 'https://github.com/ibrmaj',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin size={48} />,
    href: 'https://www.linkedin.com/in/ibrahim-majid/',
    label: 'LinkedIn',
  },
  {
    icon: <FaEnvelope size={48} />,
    href: 'mailto:ibrahim.majid@mail.utoronto.ca',
    label: 'Email',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto py-20 px-6">
      <motion.h2
        className="text-3xl font-bold mb-8 text-teal"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <div className="flex flex-col items-center gap-8">
        <div className="flex gap-12 justify-center">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl text-teal hover:text-teal/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded p-4 transition-colors duration-300 flex flex-col items-center"
              aria-label={s.label}
            >
              {s.icon}
              <span className="mt-2 text-lg text-softwhite/90 font-mono">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 