import { twMerge } from 'tailwind-merge';

import { TextProps } from './types';

const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  children,
  typography = 'regular',
  color = 'normal',
  className,
  resetTypography,
  resetColor
}) => {
  const getTypographyClassName = (typography: string): string => {
    if (resetTypography) return '';

    const typographyClassName = {
      heading: 'text-3xl sm:text-4xl font-bold',
      subheading: 'text-xl sm:text-2xl font-bold',
      regular: 'text-sm sm:text-base',
      description: 'text-xs sm:text-sm'
    };

    return typographyClassName[typography] ?? typographyClassName.regular;
  };

  const getColorClassName = (): string => {
    if (resetColor) return '';

    const colorClassName = {
      normal: 'text-neutral-950 dark:text-white',
      subtitle: 'text-subtitle'
    };

    return colorClassName[color] ?? colorClassName.normal;
  };

  const fincalClassName = twMerge(
    getTypographyClassName(typography),
    getColorClassName(),
    className
  );

  return <Component className={fincalClassName}>{children}</Component>;
};

export default Text;
