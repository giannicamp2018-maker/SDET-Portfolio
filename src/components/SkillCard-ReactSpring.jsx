import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const SkillCardReactSpring = ({ skill, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

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
    cursor: 'pointer',
  };

  return (
    <div
      style={{ width: '400px', height: '533px' }}
      className="inline-block skill-card perspective-1000"
    >
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      >
        {/* Front of card */}
        <animated.div
          className="absolute inset-0 flex flex-col items-center justify-center p-4"
          style={{
            ...cardStyle,
            opacity: opacity.to((o) => 1 - o),
            transform,
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="text-4xl font-bold mb-4 text-white">
            {skill.name}
          </div>
          <div className="text-gray-300 text-lg text-center">
            Click to learn more
          </div>
        </animated.div>

        {/* Back of card */}
        <animated.div
          className="absolute inset-0 flex flex-col items-center justify-center p-6"
          style={{
            ...cardStyle,
            opacity,
            transform: transform.to((t) => `${t} rotateY(180deg)`),
            backfaceVisibility: 'hidden',
          }}
        >
          <p className="text-gray-300 text-lg text-center leading-relaxed">
            {skill.description}
          </p>
        </animated.div>
      </div>
    </div>
  );
};

export default SkillCardReactSpring;
