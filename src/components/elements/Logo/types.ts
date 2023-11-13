import { ImageProps } from 'next/image';

export type LogoSize = 'sm' | 'md' | 'lg';

export type LogoProps = Pick<ImageProps, 'priority'> & {
  size?: LogoSize
};
