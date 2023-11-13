import { twMerge } from 'tailwind-merge';

import { typographyClassName } from './data';
import type { TextProps } from './types';

const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  children,
  typography = 'regular',
  color = 'normal',
  className,
  resetTypography,
  resetColor,
  ...props
}) => {
  const getTypographyClassName = (): string => {
    if (resetTypography) return '';

    return typographyClassName[typography] ?? typographyClassName.regular;
  };

  const getColorClassName = (): string => {
    if (resetColor) return '';

    const colorClassName = {
      normal: 'text-theme-dark dark:text-theme-light',
      subtitle: 'text-subtitle'
    };

    return colorClassName[color] ?? colorClassName.normal;
  };

  const fincalClassName = twMerge(
    getTypographyClassName(),
    getColorClassName(),
    'w-fit',
    className
  );

  return <Component className={fincalClassName} {...props}>{children}</Component>;
};

export default Text;
