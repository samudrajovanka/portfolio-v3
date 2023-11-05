import { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = Pick<NextImageProps,
  | 'src'
  | 'alt'
  | 'width'
  | 'height'
  | 'className'
>;
