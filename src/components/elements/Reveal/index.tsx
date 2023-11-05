'use client';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

import { RevealClassName } from './types';

const Reveal: React.FC<RevealClassName> = ({ children, className }) => {
  const blockClassName = `after:absolute after:top-0 after:left-0 after:inline-block
    after:w-full after:h-full after:scale-x-[var(--block-scale)] after:origin-right
    after:bg-primary-main dark:after:bg-secondary-main`;
  const childClassName = '[&>*]:translate-y-[var(--child-translate-y)]';
  const finalClassName = twMerge(
    'relative w-fit overflow-hidden',
    blockClassName,
    childClassName,
    className
  );

  const animateVariant = {
    closed: {
      '--block-scale': 1,
      '--child-translate-y': '150%'
    },
    open: {
      '--block-scale': 0,
      '--child-translate-y': 0
    }
  };

  return (
    <motion.div
      className={finalClassName}
      // @ts-ignore
      variants={animateVariant}
      initial="closed"
      whileInView="open"
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
