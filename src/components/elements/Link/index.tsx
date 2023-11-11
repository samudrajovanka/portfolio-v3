import { default as NextLink } from 'next/link';
import { twMerge } from 'tailwind-merge';

import { typographyClassName } from '@/components/elements/Text/data';

import type { LinkProps } from './types';

const Link: React.FC<LinkProps> = ({
  children,
  className,
  noDecoration,
  withColorNeutral,
  typography,
  isExternal,
  ...linkProps
}) => {
  const colorNeutralClassName = withColorNeutral ? 'text-theme-dark dark:text-theme-light' : '';

  const getTypographyClassName = (): string => {
    if (!typography) return '';

    return typographyClassName[typography] ?? '';
  };

  const getTextClassName = (): string => {
    if (typeof children !== 'string') return '';

    if (noDecoration) return '';

    const generalClassName = 'text-primary-main dark:text-secondary-main font-bold relative';
    const afterClassName = `after:inline-block after:h-[2px] after:w-0 after:absolute after:bottom-0 after:left-0
      after:bg-primary-main dark:after:bg-secondary-main after:transition-all after:duration-300`;
    const hoverClassName = 'hover:after:w-full hover:after:bg-primary-main';

    return `${generalClassName} ${afterClassName} ${hoverClassName}` ;
  };

  const finalClassName = twMerge(colorNeutralClassName, getTypographyClassName(), getTextClassName(), className);

  if (isExternal) {
    return (
      <a
        className={finalClassName}
        target="_blank"
        rel="noopener noreferrer"
        {...linkProps}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      className={finalClassName}
      {...linkProps}
    >
      {children}
    </NextLink>
  );
};

export default Link;
