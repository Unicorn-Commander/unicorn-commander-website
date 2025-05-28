import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import '../styles/BackgroundSparkles.css';

export default function BackgroundSparkles() {
  const { scrollY } = useScroll();
  const ref = useRef(null);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollY, [0, 1000], [0, -200]), springConfig);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!ref.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      ref.current.style.setProperty('--mouse-x', x);
      ref.current.style.setProperty('--mouse-y', y);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div ref={ref} className="background-sparkles">
      <motion.div className="sparkles-container" style={{ y }}>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="background-sparkle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
