import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A portfolio website built with React and Vite, showcasing my skills and projects as a Software Development Engineer in Test (SDET).',
      techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
      github: 'https://github.com/giannicamp2018-maker/SDET-Portfolio',
      demo: 'https://sdet-portfolio-delta.vercel.app/',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      techStack: ['React', 'Socket.io', 'PostgreSQL', 'Redis', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions, forecasts, and location-based weather data.',
      techStack: ['Vue.js', 'API Integration', 'Chart.js', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Machine Learning API',
      description: 'A RESTful API for machine learning model predictions with data preprocessing, model training, and prediction endpoints.',
      techStack: ['Python', 'Flask', 'TensorFlow', 'Pandas', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'backend'
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'A data visualization dashboard for social media analytics with real-time data processing and interactive charts.',
      techStack: ['React', 'D3.js', 'Python', 'FastAPI', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'fullstack'
    },
    {
      id: 6,
      title: 'Mobile Game',
      description: 'A cross-platform mobile game built with React Native featuring multiplayer functionality and real-time gameplay.',
      techStack: ['React Native', 'Socket.io', 'Firebase', 'JavaScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'mobile'
    }
  ];


  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects. Each project represents 
            a learning journey and demonstrates my skills in different technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Interested in seeing more of my work?
          </p>
          <motion.a
            href="https://github.com/gfc6-dotcom"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
