'use client';

import { useState } from 'react';

import { motion, type Variants } from 'framer-motion';

import Link from '@/components/elements/Link';
import Reveal from '@/components/elements/Reveal';
import HamburgerButton from '@/components/parts/HamburgerButton';

import { NAVIGATION_MENU } from './data';

const Navigation = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  // ! make close when success navigation
  const toggleOpenNav = () => {
    setIsOpenNav((prev) => !prev);
  };

  const navigationVariants: Variants = {
    open: {
      translateY: 0
    },
    close: {
      translateY: '-100%'
    }
  };

  return (
    <div>
      <HamburgerButton
        isOpen={isOpenNav}
        onClick={toggleOpenNav}
        title={isOpenNav ? 'close navigation' : 'open navigation'}
        className="relative z-navbar-hamburger"
      />

      <motion.nav
        className="bg-theme fixed inset-0 z-navbar-navigation flex flex-col items-center justify-center gap-7"
        variants={navigationVariants}
        initial="close"
        animate={isOpenNav ? 'open' : 'close'}

        transition={{
          duration: 1,
          ease: 'anticipate'
        }}
      >
        {NAVIGATION_MENU.map((item) => (
          <Reveal key={item.href} repeat>
            <Link
              href={item.href}
              className="text-2xl after:h-[4px] sm:text-3xl"
              onClick={toggleOpenNav}
            >
              {item.title}
            </Link>
          </Reveal>
        ))}
      </motion.nav>
    </div>
  );
};

export default Navigation;
