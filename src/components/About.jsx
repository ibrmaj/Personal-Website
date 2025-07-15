import React from 'react';
import { motion } from 'framer-motion';

const aboutText = [
  "Hi! I'm Ibrahim, a Computer Science, Bioinformatics, and Statistics student at the University of Toronto. I'm passionate about building intelligent systems that make data more meaningful, accessible, and impactful, whether that's through AI tools, scientific research, or clean, intuitive design.",
  "Currently, I work as a research assistant in the Lumba Lab analyzing genomic data using Python and R. I also tutor first-year physical and life science students, helping them build confidence through structured problem-solving and concept breakdowns.",
  "I'm always exploring new ways to combine data science, machine learning, and interactive design to build tools that are both functional and delightful. Let’s connect, whether it’s to talk code, science, or just share snack recommendations."
];


const facts = [
  { label: 'Location', value: 'Toronto, ON' },
  { label: 'Degree', value: 'Bachelor of Science' },
  { label: 'Interests', value: 'Data Visualization, AI and Natural Language Processing, Bioinformatics & Genomics, badminton, MMA' },
];

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-20 px-6">
      <motion.h2
        className="text-3xl font-bold mb-6 text-teal"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <div className="space-y-5 mb-8">
        {aboutText.map((p, i) => (
          <motion.p
            key={i}
            className="text-lg text-softwhite/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
            viewport={{ once: true }}
          >
            {p}
          </motion.p>
        ))}
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-charcoal/80 rounded-lg p-6 border border-teal/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        aria-label="Quick facts"
      >
        {facts.map(fact => (
          <div key={fact.label} className="flex flex-col items-center">
            <span className="text-teal font-semibold text-lg">{fact.label}</span>
            <span className="text-softwhite/80 text-base mt-1">{fact.value}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
} 