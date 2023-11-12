'use client';

import { useRef, useEffect } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

import type { RevealProps } from './types';

const TRANSITION_DURATION = 0.8;

const Reveal: React.FC<RevealProps> = ({ children, className, ...props }) => {
  const parentElement = useRef<HTMLDivElement | null>(null);
  const revealAnimate = useAnimation();
  const isInView = useInView(parentElement, { once: props.repeat ? false : true });

  useEffect(() => {
    if (!parentElement.current) return;
  
    const childElement = parentElement.current.children[0];
    const displayChildEl = childElement.computedStyleMap().get('display')?.toString();

    if (displayChildEl === 'inline') {
      childElement.classList.add('inline-block');
    }
  }, [parentElement]);

  useEffect(() => {
    if (isInView) {
      revealAnimate.start('open').then(() => {
        revealAnimate.start('finished');
      });
    } else {
      revealAnimate.start('closed');
    }
  }, [isInView, revealAnimate]);

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
      '--child-translate-y': '150%',
      overflow: 'hidden'
    },
    open: {
      '--block-scale': 0,
      '--child-translate-y': 0
    },
    finished: {
      overflow: 'visible'
    }
  };

  return (
    <motion.div
      ref={parentElement}
      className={finalClassName}
      // @ts-ignore
      variants={animateVariant}
      animate={revealAnimate}
      initial="closed"
      transition={{ duration: TRANSITION_DURATION, ease: 'easeInOut', delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
