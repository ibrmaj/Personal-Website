import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Research Assistant @ Lumba Lab',
    period: '2025–present',
    bullets: [
      'Analyzed Arabidopsis genomic data using R and Python',
      'Built scripts to match gene identifiers and improve consistency',
      'Developed a pipeline for gene expression analysis and visualization',
    ],
  },
  {
    title: 'Tutor @ Victoria College',
    period: '2024–present',
    bullets: [
      'Tutored 50+ students in first year courses',
      'Designed interactive workshops and provided personalised guidance',
      'Received positive feedback from students and helped them achieve better grades',
    ],
  },

];

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto py-20 px-6">
      <motion.h2
        className="text-3xl font-bold mb-8 text-teal"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <ol className="relative border-l-2 border-teal/40 ml-4">
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.title}
            className="mb-12 ml-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
            viewport={{ once: true }}
          >
            <span className="absolute -left-4 top-1 w-7 h-7 bg-teal rounded-full border-4 border-charcoal flex items-center justify-center text-charcoal font-bold text-sm">{i + 1}</span>
            <h3 className="text-xl font-semibold text-softwhite font-mono mb-1">{exp.title}</h3>
            <span className="text-teal text-sm font-mono mb-2 block">{exp.period}</span>
            <ul className="list-disc ml-6 text-softwhite/90 text-base space-y-1">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
} 