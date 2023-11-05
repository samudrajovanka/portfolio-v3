import { default as NextLink } from 'next/link';
import { twMerge } from 'tailwind-merge';

import { LinkProps } from './types';

const Link: React.FC<LinkProps> = ({
  children,
  className,
  ...linkProps
}) => {
  const getTextClassName = (): string => {
    if (typeof children !== 'string') return '';

    const generalClassName = 'text-primary-main dark:text-secondary-main font-bold relative';
    const afterClassName = `after:inline-block after:h-[2px] after:w-0 after:absolute after:bottom-0 after:left-0
      after:bg-primary-main dark:after:bg-secondary-main after:transition-all after:duration-300`;
    const hoverClassName = 'hover:after:w-full hover:after:bg-primary-main';

    return `${generalClassName} ${afterClassName} ${hoverClassName}` ;
  };

  return (
    <NextLink
      className={twMerge(getTextClassName(), className)}
      {...linkProps}
    >
      {children}
    </NextLink>
  );
};

export default Link;
