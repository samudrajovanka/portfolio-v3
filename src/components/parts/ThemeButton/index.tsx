'use client';

import { useTheme } from 'next-themes';
import { BsFillSunFill as SunIcon, BsFillMoonFill as MoonIcon } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';

import type { ThemeButtonProps } from './types';

const ICON_CLASSNAME = {
  light: `scale-50 group-hover/theme::translate-y-[300%] translate-y-[300%]
    dark:translate-y-1/2 group-hover/theme:dark:md:translate-y-[130%] dark:scale-100`,
  dark: `translate-y-1/2 group-hover/theme:md:translate-y-[130%]
    dark:translate-y-[300%] group-hover/theme:dark:translate-y-[300%] dark:scale-50`
};

const ThemeButton: React.FC<ThemeButtonProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  
  const generalClassName =
    'text-xl absolute -translate-x-1/2 left-1/2 bottom-1/2 transition-transform duration-[2s] ease-elastic';

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      className={twMerge(
        'p-5 relative grid place-content-center overflow-hidden group/theme',
        'border-b border-b-transparent hover:md:border-b-gray-300 dark:hover:md:border-b-white',
        'transition-color duration-500',
        className
      )}
      role="switch"
      aria-checked={theme === 'dark'}
      title="change theme"
      onClick={handleChangeTheme}
      suppressHydrationWarning
    >
      <MoonIcon className={twMerge('text-primary-main', generalClassName, ICON_CLASSNAME.light)} />
      <SunIcon className={twMerge('text-secondary-main', generalClassName, ICON_CLASSNAME.dark)} />
    </button>
  );
};

export default ThemeButton;
