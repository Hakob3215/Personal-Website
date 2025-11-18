import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, direction = 'left' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getAnimationClasses = () => {
    const baseClass = 'section-animate';
    const directionClass = direction === 'left' ? 'fade-in-left' : 'fade-in-right';
    const activeClass = inView ? 'is-visible' : '';
    return `${baseClass} ${directionClass} ${activeClass}`;
  };

  return (
    <div ref={ref} className={getAnimationClasses()}>
      {children}
    </div>
  );
};

export default AnimatedSection;