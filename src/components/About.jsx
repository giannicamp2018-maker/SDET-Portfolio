import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCode, FaRunning, FaWater, FaSnowflake } from 'react-icons/fa';

import SkillCard from './SkillCard-ReactCardFlip';

const About = () => {
  const hobbies = [
    { icon: FaRunning, name: 'Track & Field', color: 'text-blue-400' },
    { icon: FaWater, name: 'Surfing', color: 'text-green-400' },
    { icon: FaSnowflake, name: 'Snowboarding', color: 'text-purple-400' },
    { icon: FaCode, name: 'Programming', color: 'text-pink-400' },
    gubjk
  ];

  const skills = [
    { 
      name: 'Java', 
      description: 'Object-oriented programming language used for enterprise applications, Android development, and backend services.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-400/30'
    },
    { 
      name: 'Python', 
      description: 'Versatile language perfect for data science, web development, automation, and machine learning projects.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30'
    },
    { 
      name: 'JavaScript', 
      description: 'Dynamic programming language for web development, both frontend and backend with Node.js.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-400/30'
    },
    { 
      name: 'HTML', 
      description: 'Markup language for structuring web content and creating the foundation of web pages.',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-400/30'
    },
    { 
      name: 'CSS', 
      description: 'Styling language for designing beautiful, responsive web interfaces and layouts.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30'
    },
    { 
      name: 'Git', 
      description: 'Version control system for tracking changes, collaborating on projects, and managing code repositories.',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400/30'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know me better - my background, interests, and what drives my passion for programming
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo and basic info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative mb-8"
            >
              <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                GC
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-0"
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                <span className="text-gray-300 text-lg">Brick Township, NJ</span>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a college student with a fascination for software development and computer programming. 
                When I'm not coding, you can find me on the Division 1 Track team at NJIT, catching waves while surfing, 
                or hitting the slopes snowboarding. I believe in continuous learning and always staying 
                curious about the ever-evolving world of technology.
              </p>
            </div>
          </motion.div>

          {/* Right side - Hobbies and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Hobbies */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Hobbies & Interests</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.1 }
                    }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-gray-800/70 transition-all duration-100"
                  >
                    <hobby.icon className={`text-3xl ${hobby.color} mb-2 mx-auto`} />
                    <p className="text-gray-300 text-sm">{hobby.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="relative">
                <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 0.95,
                        transition: { duration: 0.1 }
                      }}
                      className="flex-shrink-0 perspective-1000 skill-card"
                      style={{ width: '400px', height: '533px' }}
                    >
                      <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-500 cursor-pointer" 
                           onClick={(e) => {
                             const card = e.currentTarget;
                             card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
                           }}>
                        {/* Front of card */}
                        <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-4"
                             style={{
                               backgroundColor: skill.name === 'Java' ? 'rgba(255, 165, 0, 0.2)' :
                                              skill.name === 'Python' ? 'rgba(59, 130, 246, 0.2)' :
                                              skill.name === 'JavaScript' ? 'rgba(251, 191, 36, 0.2)' :
                                              skill.name === 'HTML' ? 'rgba(239, 68, 68, 0.2)' :
                                              skill.name === 'CSS' ? 'rgba(147, 51, 234, 0.2)' :
                                              'rgba(34, 197, 94, 0.2)',
                               border: `3px solid ${skill.name === 'Java' ? '#f97316' :
                                            skill.name === 'Python' ? '#3b82f6' :
                                            skill.name === 'JavaScript' ? '#fbbf24' :
                                            skill.name === 'HTML' ? '#ef4444' :
                                            skill.name === 'CSS' ? '#9333ea' :
                                            '#22c55e'}`,
                               borderRadius: '24px'
                             }}>
                          <div className="text-4xl font-bold mb-4"
                               style={{
                                 color: skill.name === 'Java' ? '#f97316' :
                                        skill.name === 'Python' ? '#3b82f6' :
                                        skill.name === 'JavaScript' ? '#fbbf24' :
                                        skill.name === 'HTML' ? '#ef4444' :
                                        skill.name === 'CSS' ? '#9333ea' :
                                        '#22c55e'
                               }}>
                            {skill.name}
                          </div>
                          <div className="text-gray-300 text-lg text-center">
                            Click to learn more
                          </div>
                        </div>
                        
                        {/* Back of card */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center p-4"
                             style={{
                               backgroundColor: skill.name === 'Java' ? 'rgba(255, 165, 0, 0.2)' :
                                              skill.name === 'Python' ? 'rgba(59, 130, 246, 0.2)' :
                                              skill.name === 'JavaScript' ? 'rgba(251, 191, 36, 0.2)' :
                                              skill.name === 'HTML' ? 'rgba(239, 68, 68, 0.2)' :
                                              skill.name === 'CSS' ? 'rgba(147, 51, 234, 0.2)' :
                                              'rgba(34, 197, 94, 0.2)',
                               border: `3px solid ${skill.name === 'Java' ? '#f97316' :
                                            skill.name === 'Python' ? '#3b82f6' :
                                            skill.name === 'JavaScript' ? '#fbbf24' :
                                            skill.name === 'HTML' ? '#ef4444' :
                                            skill.name === 'CSS' ? '#9333ea' :
                                            '#22c55e'}`,
                               borderRadius: '24px'
                             }}>
                          <p className="text-gray-300 text-lg text-center leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Scroll indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
