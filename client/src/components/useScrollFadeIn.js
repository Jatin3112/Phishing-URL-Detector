import { useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';

const useScrollFadeIn = () => {
  const targetRef = useRef(null);

  const [spring, setSpring] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(50px)',
  }));

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setSpring({ opacity: 1, transform: 'translateY(0)' });
    } else {
      setSpring({ opacity: 0, transform: 'translateY(50px)' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [targetRef]);

  return { ref: targetRef, style: spring };
};

export default useScrollFadeIn;
