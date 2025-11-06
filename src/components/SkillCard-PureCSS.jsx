import React, { useState } from 'react';

const SkillCardPureCSS = ({ skill, index }) => {
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
    backgroundColor: colors.bg,
    border: `3px solid ${colors.border}`,
    borderRadius: '24px',
  };

  return (
    <div
      style={{ width: '400px', height: '533px' }}
      className="inline-block skill-card"
    >
      <div
        className="flip-card-container"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          width: '100%',
          height: '100%',
          perspective: '1000px',
          cursor: 'pointer',
        }}
      >
        <div
          className="flip-card-inner"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.6s',
          }}
        >
          {/* Front of card */}
          <div
            className="flip-card-front flex flex-col items-center justify-center p-4"
            style={{
              ...cardStyle,
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
            }}
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
            className="flip-card-back flex flex-col items-center justify-center p-6"
            style={{
              ...cardStyle,
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <p className="text-gray-300 text-lg text-center leading-relaxed">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCardPureCSS;
