'use client';

import { useRef, useEffect } from 'react';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

import type { RevealProps } from './types';

const Reveal: React.FC<RevealProps> = ({ children, className, ...props }) => {
  const parentElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parentElement.current) return;
  
    const childElement = parentElement.current.children[0];
    const displayChildEl = childElement.computedStyleMap().get('display')?.toString();

    if (displayChildEl === 'inline') {
      childElement.classList.add('inline-block');
    }
  }, [parentElement]);
  

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
      ref={parentElement}
      className={finalClassName}
      // @ts-ignore
      variants={animateVariant}
      initial="closed"
      whileInView="open"
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: props.repeat ? false : true }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
