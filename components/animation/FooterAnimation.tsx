'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface FooterAnimationProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

export function FooterAnimation({ children, index = 0, className = '' }: FooterAnimationProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.85, 0.9, 1],
    [0, 0.5, 1, 1, 0.5, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.85, 0.9, 1],
    [30, 15, 0, 0, -15, -30]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.85, 0.9, 1],
    [2, 1, 0, 0, -1, -2]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.85, 0.9, 1],
    [0.95, 0.97, 1, 1, 0.97, 0.95]
  );

  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity, 
        y,
        rotate,
        scale,
        transformOrigin: 'center center'
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.32, 0.72, 0, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 