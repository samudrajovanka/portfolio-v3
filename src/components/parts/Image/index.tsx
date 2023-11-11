import { default as NextImage } from 'next/image';

import type { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({
  ...props
}) => {
  return (
    <NextImage {...props} />
  );
};

export default Image;
