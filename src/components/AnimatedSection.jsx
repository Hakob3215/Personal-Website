import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, direction = 'deal-left' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const getAnimationClasses = () => {
    const baseClass = 'section-animate';
    // If direction is one of the new types, use it directly. Otherwise map old ones or default.
    let directionClass = direction;
    if (direction === 'left') directionClass = 'deal-left';
    if (direction === 'right') directionClass = 'deal-right';
    
    const activeClass = inView ? 'is-visible' : '';
    return `${baseClass} ${directionClass} ${activeClass}`;
  };

  return (
    <div ref={ref}>
      <div className={getAnimationClasses()}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;