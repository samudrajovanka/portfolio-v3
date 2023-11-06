'use client';

import { motion, type Variants } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

import { HamburgerButtonProps } from './types';

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  title = 'hamburger button',
  className,
  isOpen,
  ...buttonProps
}) => {
  const baseClassNameLine = 'block w-full h-[2px] bg-theme-dark dark:bg-theme-light';

  const topLineVariants: Variants = {
    open: {
      rotate: 45,
      translateY: '50%'
    },
    close: {
      rotate: 0,
      translateY: 0
    }
  };

  const middleLineVariants: Variants = {
    open: {
      width: 0,
      display: 'none'
    },
    close: {
      width: '100%',
      display: 'block'
    }
  };

  const bottomLineVariants: Variants = {
    open: {
      rotate: -45,
      translateY: '-50%'
    },
    close: {
      rotate: 0,
      translateY: 0
    }
  };

  return (
    <button
      type="button"
      title={title}
      className={twMerge(
        'w-8 aspect-square flex flex-col justify-center p-2 relative',
        isOpen ? 'gap-0' : 'gap-1',
        className
      )}
      {...buttonProps}
    >
      <motion.span
        className={twMerge(baseClassNameLine)}
        variants={topLineVariants}
        initial="close"
        animate={isOpen ? 'open' : 'close'}
      />
      <motion.span
        className={twMerge(baseClassNameLine, 'w-3/4')}
        variants={middleLineVariants}
        initial="close"
        animate={isOpen ? 'open' : 'close'}
      />
      <motion.span
        className={twMerge(baseClassNameLine)}
        variants={bottomLineVariants}
        initial="close"
        animate={isOpen ? 'open' : 'close'}
      />
    </button>
  );
};

export default HamburgerButton;
