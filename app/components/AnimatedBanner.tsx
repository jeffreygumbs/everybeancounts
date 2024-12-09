'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Bannar1 from '@/public/Banner-1.svg';

const bannerAnimation = {
  initial: { 
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  animate: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function AnimatedBanner() {
  return (
    <motion.div
      className="relative w-full h-[300px] md:h-[400px]"
      variants={bannerAnimation}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <motion.div
        className="w-full h-full"
        variants={floatAnimation}
        animate="animate"
      >
        <Image
          src={Bannar1}
          alt="Every Bean Counts illustration"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
