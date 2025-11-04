import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, payment processing, and admin dashboard. Built with modern web technologies.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      github: 'https://github.com',
      demo: 'https://demo.com',
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

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of my recent work and personal projects. Each project represents 
            a learning journey and demonstrates my skills in different technologies.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
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
