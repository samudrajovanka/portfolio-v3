'use client';

import { Variants, motion } from 'framer-motion';

import type { FadeProps } from './types';

const Fade: React.FC<FadeProps> = ({ children, className, ...props }) => {
  const animateVariant: Variants = {
    from: {
      transform: 'translateY(5rem)',
      opacity: 0
    },
    to: {
      transform: 'translateY(0)',
      opacity: 1
    }
  };

  return (
    <motion.div
      className={className}
      variants={animateVariant}
      initial="from"
      whileInView="to"
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: props.repeat ? false : true }}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
