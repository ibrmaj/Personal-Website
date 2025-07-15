import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import aiTherapistImg from '../assets/ai-therapist.jpg';
import gaiaScopeImg from '../assets/gaiascope.jpg';
import wordleImg from '../assets/wordle.jpg';

const projects = [
  {
    title: 'GaiaScope',
    image: gaiaScopeImg,
    tech: ['React','Tailwind', 'Gemini', 'Three.js'],
    desc: 'Interactive SDG globe with Gemini-powered insights and real-time data visualization.',
    github: 'https://github.com/ibrahimmajid/gaiascope',
    demo: 'https://youtu.be/u690IztYCvI',
  },
  {
    title: 'AI-Therapist',
    image: aiTherapistImg,
    tech: ['Python', 'Flask', 'REST API','React', 'HuggingFace'],
    desc: 'An AI therapist built with React and Python, leveraging HuggingFace for natural conversations.',
    github: 'https://github.com/ibrahimmajid/ai-therapist',
    demo: '#'
  },
  
  {
    title: 'Wordle+',
    image: wordleImg,
    tech: ['Java', 'AWS', 'Swing'],
    desc: 'A Java-based clone of Wordle with a custom UI, secure login system, and an AWS-powered discussion board. Implemented SOLID design principles to ensure clean architecture, making the app scalable and user-friendly.',
    github: 'https://github.com/ibrmaj/wordle-clone',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-20 px-6">
      <motion.h2
        className="text-3xl font-bold mb-8 text-teal"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i} />
        ))}
      </div>
    </section>
  );
} 