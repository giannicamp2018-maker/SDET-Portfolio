import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {/* Animated gradient base */}
      <div className="animated-gradient"></div>
      
      {/* Subtle radial orbs */}
      <div className="animated-orb orb-1"></div>
      <div className="animated-orb orb-2"></div>
      <div className="animated-orb orb-3"></div>
    </div>
  );
};

export default AnimatedBackground;

