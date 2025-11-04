import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div style={{ width: '400px', height: '533px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, delay: index * 0.1, scale: { duration: 0.2 } }}
        viewport={{ once: true }}
        className="inline-block perspective-1000 skill-card w-full h-full"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="relative w-full h-full transform-style-preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0, rotateX: 0 }}
          style={{ transformOrigin: 'center' }}
        >
          {/* Front of card */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-4"
            style={{
              backfaceVisibility: 'hidden',
              backgroundColor:
                skill.name === 'Java'
                  ? 'rgba(249, 115, 22, 0.2)' // Orange for Java
                  : skill.name === 'Python'
                  ? 'rgba(59, 130, 246, 0.2)'
                  : skill.name === 'JavaScript'
                  ? 'rgba(251, 191, 36, 0.2)'
                  : skill.name === 'HTML'
                  ? 'rgba(239, 68, 68, 0.2)'
                  : skill.name === 'CSS'
                  ? 'rgba(147, 51, 234, 0.2)'
                  : 'rgba(34, 197, 94, 0.2)',
              border: `3px solid ${
                skill.name === 'Java'
                  ? '#f97316' // Orange for Java
                  : skill.name === 'Python'
                  ? '#3b82f6'
                  : skill.name === 'JavaScript'
                  ? '#fbbf24'
                  : skill.name === 'HTML'
                  ? '#ef4444'
                  : skill.name === 'CSS'
                  ? '#9333ea'
                  : '#22c55e'
              }`,
              borderRadius: '24px',
            }}
          >
            <div
              className="text-4xl font-bold mb-4"
              style={{
                color: 'white',
              }}
            >
              {skill.name}
            </div>
            <div className="text-gray-300 text-lg text-center">
              Click to learn more
            </div>
          </div>

          {/* Back of card */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              backgroundColor:
                skill.name === 'Java'
                  ? 'rgba(255, 165, 0, 0.2)'
                  : skill.name === 'Python'
                  ? 'rgba(59, 130, 246, 0.2)'
                  : skill.name === 'JavaScript'
                  ? 'rgba(251, 191, 36, 0.2)'
                  : skill.name === 'HTML'
                  ? 'rgba(239, 68, 68, 0.2)'
                  : skill.name === 'CSS'
                  ? 'rgba(147, 51, 234, 0.2)'
                  : 'rgba(34, 197, 94, 0.2)',
              border: `3px solid ${
                skill.name === 'Java'
                  ? '#f97316'
                  : skill.name === 'Python'
                  ? '#3b82f6'
                  : skill.name === 'JavaScript'
                  ? '#fbbf24'
                  : skill.name === 'HTML'
                  ? '#ef4444'
                  : skill.name === 'CSS'
                  ? '#9333ea'
                  : '#22c55e'
              }`,
              borderRadius: '24px',
            }}
          >
            <p className="text-gray-300 text-lg text-center leading-relaxed">
              {skill.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillCard;
