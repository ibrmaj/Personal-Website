import React from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaPython, FaGit, FaRProject, FaJava, FaRobot, FaSuperscript, FaNodeJs, FaCube } from 'react-icons/fa';
import { SiC, SiHtml5, SiCss3, SiNumpy, SiPandas, SiTailwindcss, SiFlask, SiJunit5, SiMysql, SiFigma, SiOpenai, SiGoogle } from 'react-icons/si';

const skillIcons = {
  // Languages
  Java: <FaJava className="text-xl text-teal inline-block mr-2" />, 
  Python: <FaPython className="text-xl text-teal inline-block mr-2" />, 
  C: <SiC className="text-xl text-teal inline-block mr-2" />, 
  JavaScript: <FaJs className="text-xl text-teal inline-block mr-2" />, 
  'HTML/CSS': <><SiHtml5 className="text-xl text-teal inline-block mr-1" /><SiCss3 className="text-xl text-teal inline-block mr-2" /></>,
  R: <FaRProject className="text-xl text-teal inline-block mr-2" />, 
  SQL: <SiMysql className="text-xl text-teal inline-block mr-2" />, 
  // Frameworks
  React: <FaReact className="text-xl text-teal inline-block mr-2" />, 
  'Node.js': <FaNodeJs className="text-xl text-teal inline-block mr-2" />, 
  Flask: <SiFlask className="text-xl text-teal inline-block mr-2" />, 
  'JUnit': <SiJunit5 className="text-xl text-teal inline-block mr-2" />, 
  Swing: <FaJava className="text-xl text-teal inline-block mr-2" />, // Use Java icon for Swing
  'REST APIs': <FaReact className="text-xl text-teal inline-block mr-2" />, // No REST icon, using React as placeholder
  'Tailwind CSS': <SiTailwindcss className="text-xl text-teal inline-block mr-2" />, 
  // Libraries & Tools
  Pandas: <SiPandas className="text-xl text-teal inline-block mr-2" />, 
  NumPy: <SiNumpy className="text-xl text-teal inline-block mr-2" />, 
  Matplotlib: <FaSuperscript className="text-xl text-teal inline-block mr-2" />, // Use math icon for Matplotlib
  HuggingFace: <FaRobot className="text-xl text-teal inline-block mr-2" />, // Use robot icon for HuggingFace
  'Three.js': <FaCube className="text-xl text-teal inline-block mr-2" />, // Use cube icon for Three.js
  Git: <FaGit className="text-xl text-teal inline-block mr-2" />, 
  'Gemini API': <SiGoogle className="text-xl text-teal inline-block mr-2" />, // Use Google G for Gemini
  'OpenAI API': <SiOpenai className="text-xl text-teal inline-block mr-2" />, 
};

const skills = {
  Languages: [
    'Java', 'Python', 'C', 'JavaScript', 'HTML/CSS', 'R', 'SQL'
  ],
  Frameworks: [
    'React', 'Node.js', 'Flask', 'JUnit', 'Swing', 'REST APIs', 'Tailwind CSS'
  ],
  'Libraries & Tools': [
    'Pandas', 'NumPy', 'Matplotlib', 'HuggingFace', 'Three.js', 'Git', 'Gemini API', 'OpenAI API'
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto py-20 px-6">
      <motion.h2
        className="text-3xl font-bold mb-8 text-teal"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            className="bg-charcoal/80 rounded-lg p-6 border border-teal/20 shadow flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-teal mb-4 font-mono">{category}</h3>
            <ul className="space-y-2">
              {items.map(skill => (
                <li key={skill} className="text-softwhite/90 text-base font-mono pl-2 flex items-center">
                  {skillIcons[skill] || null}{skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 