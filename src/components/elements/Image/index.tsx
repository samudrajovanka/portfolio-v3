import { default as NextImage } from 'next/image';

import shimmer from '@/lib/shimmer';

import type { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({
  ...props
}) => {
  return (
    <NextImage
      placeholder="blur"
      blurDataURL={shimmer(16, 9)}
      {...props}
    />
  );
};

export default Image;
