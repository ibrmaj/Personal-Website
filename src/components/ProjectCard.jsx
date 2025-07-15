import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ title, image, tech, desc, github, demo, index }) {
  return (
    <motion.div
      className="bg-charcoal/90 rounded-xl shadow-lg border border-teal/30 flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index, ease: 'easeInOut' }}
      viewport={{ once: true }}
      tabIndex={0}
      aria-label={`Project: ${title}`}
    >
      <img
        src={image}
        alt={`${title} screenshot`}
        className="w-full h-40 object-cover bg-charcoal/60"
      />
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-teal mb-2 font-mono">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {tech.map(t => (
            <span key={t} className="bg-teal/20 text-teal font-mono text-xs px-2 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>
        <p className="text-softwhite/90 text-sm mb-4 flex-1">{desc}</p>
        <div className="flex gap-3 mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 rounded bg-charcoal border border-teal text-teal font-semibold hover:bg-teal hover:text-charcoal transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            aria-label="View on GitHub"
          >
            <FaGithub /> GitHub
          </a>
          {demo && demo !== '#' && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded bg-teal text-charcoal font-semibold hover:bg-teal/80 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              aria-label="View Demo"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 