'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right';
  type?: 'fade' | 'slide' | 'scale';
}

export default function MotionWrapper({
  children,
  className = '',
  delay = 0,
  direction = 'left',
  type = 'fade'
}: MotionWrapperProps) {
  const getVariants = () => {
    switch (type) {
      case 'slide':
        return {
          initial: { opacity: 0, x: direction === 'left' ? -50 : 50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.6, delay }
        };
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.6, delay }
        };
      default:
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay }
        };
    }
  };

  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
}
