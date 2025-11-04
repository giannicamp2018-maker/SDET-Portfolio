import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const SkillCardReactCardFlip = ({ skill }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getColors = (skillName) => {
    const colorMap = {
      Java: { bg: 'rgba(249, 115, 22, 0.2)', border: '#f97316' },
      Python: { bg: 'rgba(59, 130, 246, 0.2)', border: '#3b82f6' },
      JavaScript: { bg: 'rgba(251, 191, 36, 0.2)', border: '#fbbf24' },
      HTML: { bg: 'rgba(239, 68, 68, 0.2)', border: '#ef4444' },
      CSS: { bg: 'rgba(147, 51, 234, 0.2)', border: '#9333ea' },
      default: { bg: 'rgba(34, 197, 94, 0.2)', border: '#22c55e' },
    };
    return colorMap[skillName] || colorMap.default;
  };

  const colors = getColors(skill.name);

  const cardStyle = {
    width: '400px',
    height: '533px',
    backgroundColor: colors.bg,
    border: `3px solid ${colors.border}`,
    borderRadius: '24px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  };

  return (
    <div
      style={{ width: '400px', height: '533px' }}
      className="inline-block skill-card"
      onMouseEnter={(e) => (e.currentTarget.querySelector('.card-container').style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.querySelector('.card-container').style.transform = 'scale(1)')}
    >
      <div className="card-container" style={{ transition: 'transform 0.2s' }}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          {/* Front of card */}
          <div
            onClick={() => setIsFlipped(true)}
            className="flex flex-col items-center justify-center p-4"
            style={cardStyle}
          >
            <div className="text-4xl font-bold mb-4 text-white">
              {skill.name}
            </div>
            <div className="text-gray-300 text-lg text-center">
              Click to learn more
            </div>
          </div>

          {/* Back of card */}
          <div
            onClick={() => setIsFlipped(false)}
            className="flex flex-col items-center justify-center p-6"
            style={cardStyle}
          >
            <p className="text-gray-300 text-lg text-center leading-relaxed">
              {skill.description}
            </p>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default SkillCardReactCardFlip;
